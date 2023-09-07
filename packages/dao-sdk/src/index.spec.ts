import { coin } from '@cosmjs/amino';
import { SigningCosmWasmClient, toBinary } from '@cosmjs/cosmwasm-stargate';
import * as commonArtifacts from '@oraichain/common-contracts-build';
import { Cw20BaseClient, Cw20BaseTypes } from '@oraichain/common-contracts-sdk';
import { SimulateCosmWasmClient } from '@oraichain/cw-simulate';
import * as daoArtifacts from '@oraichain/dao-contracts-build';
import { Ok } from 'ts-results';
import {
  Cw20StakeClient,
  Cw20StakeTypes,
  DaoDaoCoreClient,
  DaoDaoCoreTypes,
  DaoPreProposeSingleClient,
  DaoPreProposeSingleTypes,
  DaoProposalSingleClient,
  DaoProposalSingleTypes,
  DaoVotingCw20StakedClient,
  DaoVotingCw20StakedTypes
} from '@oraichain/dao-contracts-sdk';
import fs from 'fs';

const client = new SimulateCosmWasmClient({
  bech32Prefix: 'orai',
  chainId: 'Oraichain',
  metering: true
});
const senderAddress = 'orai12zyu8w93h0q2lcnt50g3fn0w3yqnhy4fvawaqz';
const bobAddress = 'orai18cgmaec32hgmd8ls8w44hjn25qzjwhannd9kpj';

const makeProposal = async (client: SigningCosmWasmClient, proposalSingleContract: DaoProposalSingleClient, msg: any[]) => {
  const proposalCreationPolicy = await proposalSingleContract.proposalCreationPolicy();
  let funds;
  if ('anyone' in proposalCreationPolicy) {
    funds = [];
  } else {
    const preProposeContract = new DaoPreProposeSingleClient(client, senderAddress, proposalCreationPolicy.module.addr);
  }
};

describe('simple_case', () => {
  let daoContract: DaoDaoCoreClient;

  beforeEach(async () => {
    const { codeId: cw20Id } = await client.upload(senderAddress, fs.readFileSync(commonArtifacts.getContractDir('cw20-base')), 'auto');
    const { codeId: voteModId } = await client.upload(senderAddress, fs.readFileSync(daoArtifacts.getContractDir('dao-voting-cw20-staked')), 'auto');
    const { codeId: cw20StakeId } = await client.upload(senderAddress, fs.readFileSync(daoArtifacts.getContractDir('cw20-stake')), 'auto');

    const { codeId: proposalSingleId } = await client.upload(senderAddress, fs.readFileSync(daoArtifacts.getContractDir('dao-proposal-single')), 'auto');
    const voteModInitMsg: DaoVotingCw20StakedTypes.InstantiateMsg = {
      token_info: {
        new: {
          code_id: cw20Id,
          label: 'DAO DAO governance token',
          name: 'DAO',
          symbol: 'DAO',
          decimals: 6,
          initial_balances: [{ amount: '100000000', address: senderAddress }],
          staking_code_id: cw20StakeId
        }
      },
      active_threshold: {
        absolute_count: {
          count: '100'
        }
      }
    };

    const proposalSingleInitMsg: DaoProposalSingleTypes.InstantiateMsg = {
      threshold: {
        threshold_quorum: {
          quorum: { percent: '0.015' },
          threshold: { majority: {} }
        }
      },
      max_voting_period: { time: 604800 }, // One week.
      only_members_execute: true,
      allow_revoting: false,
      pre_propose_info: {
        anyone_may_propose: {}
      },
      close_proposal_on_execution_failure: true
    };
    const { contractAddress: coreAddress } = await daoArtifacts.deployContract<DaoDaoCoreTypes.InstantiateMsg>(
      client,
      senderAddress,
      {
        name: 'DAO DAO',
        description: 'A DAO that builds DAOs.',
        automatically_add_cw20s: true,
        automatically_add_cw721s: true,
        voting_module_instantiate_info: {
          code_id: voteModId,
          msg: toBinary(voteModInitMsg),
          admin: { core_module: {} },
          label: 'voting module'
        },
        proposal_modules_instantiate_info: [
          {
            code_id: proposalSingleId,
            msg: toBinary(proposalSingleInitMsg),
            admin: { core_module: {} },
            label: 'governance module'
          }
        ]
      },
      'dao-dao-core'
    );
    client.app.bank.setBalance(senderAddress, [coin('100000000', 'orai'), coin('100000000', 'usdt')]);
    daoContract = new DaoDaoCoreClient(client, senderAddress, coreAddress);
  });

  it('create-proposal', async () => {
    const votingModuleContract = new DaoVotingCw20StakedClient(client, senderAddress, await daoContract.votingModule());
    const govTokenContract = new Cw20StakeClient(client, senderAddress, await votingModuleContract.tokenContract());
    const proposalModules = await daoContract.proposalModules({});
    expect(proposalModules.length).toEqual(1);
    const proposalModuleContract = new DaoProposalSingleClient(client, senderAddress, proposalModules.find((m) => m.status === 'enabled').address);
    const stakingContract = new DaoVotingCw20StakedClient(client, senderAddress, await votingModuleContract.stakingContract());

    await expect(
      proposalModuleContract.propose({
        title: 'title',
        description: 'description',
        msgs: []
      })
    ).rejects.toThrow('the DAO is currently inactive, you cannot create proposals');

    let ret = await client.execute(
      senderAddress,
      govTokenContract.contractAddress,
      {
        send: {
          contract: stakingContract.contractAddress,
          amount: '100',
          msg: toBinary({
            stake: {}
          })
        }
      } as Cw20BaseTypes.ExecuteMsg,
      'auto'
    );
    console.dir(ret, { depth: null });

    client.app.store.tx((setter) => {
      setter('height')(client.app.height + 1);
      setter('time')(client.app.time + 5 * 1e9);
      return Ok(true);
    });

    // make_proposal
    // Unstake some tokens to make it inactive again.

    ret = await govTokenContract.unstake({
      amount: '50'
    });

    await expect(
      proposalModuleContract.propose({
        title: 'title',
        description: 'description',
        msgs: []
      })
    ).rejects.toThrow('the DAO is currently inactive, you cannot create proposals');
  });
});

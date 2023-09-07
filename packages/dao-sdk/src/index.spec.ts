import { coin } from '@cosmjs/amino';
import { toBinary } from '@cosmjs/cosmwasm-stargate';
import * as commonArtifacts from '@oraichain/common-contracts-build';
import { SimulateCosmWasmClient } from '@oraichain/cw-simulate';
import * as daoArtifacts from '@oraichain/dao-contracts-build';
import { DaoDaoCoreClient, DaoDaoCoreTypes, DaoProposalSingleTypes, DaoVotingCw20StakedClient, DaoVotingCw20StakedTypes } from '@oraichain/dao-contracts-sdk';
import fs from 'fs';

const client = new SimulateCosmWasmClient({
  bech32Prefix: 'orai',
  chainId: 'Oraichain',
  metering: true
});
const senderAddress = 'orai12zyu8w93h0q2lcnt50g3fn0w3yqnhy4fvawaqz';
const bobAddress = 'orai18cgmaec32hgmd8ls8w44hjn25qzjwhannd9kpj';

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

  it('test-init', async () => {
    const votingAddress = await daoContract.votingModule();
    const votingModuleContract = new DaoVotingCw20StakedClient(client, senderAddress, votingAddress);
    const govTokenAddress = await votingModuleContract.tokenContract();
    console.log('govTokenAddress', govTokenAddress);
  });
});

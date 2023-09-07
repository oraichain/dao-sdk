import { coin } from '@cosmjs/amino';
import { toBinary } from '@cosmjs/cosmwasm-stargate';
import * as commonArtifacts from '@oraichain/common-contracts-build';
import { Cw20BaseTypes } from '@oraichain/common-contracts-sdk';
import { SimulateCosmWasmClient } from '@oraichain/cw-simulate';
import * as daoArtifacts from '@oraichain/dao-contracts-build';
import { DaoDaoCoreClient, DaoDaoCoreTypes } from '@oraichain/dao-contracts-sdk';
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
    const cw20InitMsg: Cw20BaseTypes.InstantiateMsg = {
      name: 'DAO',
      symbol: 'DAO',
      decimals: 6,
      initial_balances: []
    };
    const { codeId: cw20Id } = await client.upload(senderAddress, fs.readFileSync(commonArtifacts.getContractDir('cw20-base')), 'auto');
    const { contractAddress } = await daoArtifacts.deployContract<DaoDaoCoreTypes.InstantiateMsg>(
      client,
      senderAddress,
      {
        name: 'DAO DAO',
        description: 'A DAO that builds DAOs.',
        automatically_add_cw20s: true,
        automatically_add_cw721s: true,
        voting_module_instantiate_info: {
          code_id: cw20Id,
          msg: toBinary(cw20InitMsg),
          admin: { core_module: {} },
          label: 'voting module'
        },
        proposal_modules_instantiate_info: [
          {
            code_id: cw20Id,
            msg: toBinary(cw20InitMsg),
            admin: { core_module: {} },
            label: 'governance module 0'
          }
        ]
      },
      'dao-dao-core'
    );
    client.app.bank.setBalance(senderAddress, [coin('100000000', 'orai'), coin('100000000', 'usdt')]);
    daoContract = new DaoDaoCoreClient(client, senderAddress, contractAddress);
  });

  it('test-state', async () => {
    const { config } = await daoContract.dumpState();
    expect(config).toMatchObject({
      name: 'DAO DAO',
      description: 'A DAO that builds DAOs.',
      automatically_add_cw20s: true,
      automatically_add_cw721s: true
    });
  });
});

/**
* This file was automatically generated by @oraichain/ts-codegen@0.35.8.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @oraichain/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import {Admin, Duration, Uint128, Expiration, Timestamp, Uint64, Claim, Addr, ContractVersion} from "./types";
import {InstantiateMsg, ExecuteMsg, QueryMsg, MigrateMsg, ClaimsResponse, Config, InfoResponse, ListStakersResponse, StakerBalanceResponse, TotalPowerAtHeightResponse, VotingPowerAtHeightResponse} from "./DaoVotingNativeStaked.types";
export interface DaoVotingNativeStakedReadOnlyInterface {
  contractAddress: string;
  getConfig: () => Promise<Config>;
  claims: ({
    address
  }: {
    address: string;
  }) => Promise<ClaimsResponse>;
  listStakers: ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }) => Promise<ListStakersResponse>;
  votingPowerAtHeight: ({
    address,
    height
  }: {
    address: string;
    height?: number;
  }) => Promise<VotingPowerAtHeightResponse>;
  totalPowerAtHeight: ({
    height
  }: {
    height?: number;
  }) => Promise<TotalPowerAtHeightResponse>;
  dao: () => Promise<Addr>;
  info: () => Promise<InfoResponse>;
}
export class DaoVotingNativeStakedQueryClient implements DaoVotingNativeStakedReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.getConfig = this.getConfig.bind(this);
    this.claims = this.claims.bind(this);
    this.listStakers = this.listStakers.bind(this);
    this.votingPowerAtHeight = this.votingPowerAtHeight.bind(this);
    this.totalPowerAtHeight = this.totalPowerAtHeight.bind(this);
    this.dao = this.dao.bind(this);
    this.info = this.info.bind(this);
  }

  getConfig = async (): Promise<Config> => {
    return this.client.queryContractSmart(this.contractAddress, {
      get_config: {}
    });
  };
  claims = async ({
    address
  }: {
    address: string;
  }): Promise<ClaimsResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      claims: {
        address
      }
    });
  };
  listStakers = async ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }): Promise<ListStakersResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      list_stakers: {
        limit,
        start_after: startAfter
      }
    });
  };
  votingPowerAtHeight = async ({
    address,
    height
  }: {
    address: string;
    height?: number;
  }): Promise<VotingPowerAtHeightResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      voting_power_at_height: {
        address,
        height
      }
    });
  };
  totalPowerAtHeight = async ({
    height
  }: {
    height?: number;
  }): Promise<TotalPowerAtHeightResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      total_power_at_height: {
        height
      }
    });
  };
  dao = async (): Promise<Addr> => {
    return this.client.queryContractSmart(this.contractAddress, {
      dao: {}
    });
  };
  info = async (): Promise<InfoResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      info: {}
    });
  };
}
export interface DaoVotingNativeStakedInterface extends DaoVotingNativeStakedReadOnlyInterface {
  contractAddress: string;
  sender: string;
  stake: (_fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  unstake: ({
    amount
  }: {
    amount: Uint128;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  updateConfig: ({
    duration,
    manager,
    owner
  }: {
    duration?: Duration;
    manager?: string;
    owner?: string;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  claim: (_fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
export class DaoVotingNativeStakedClient extends DaoVotingNativeStakedQueryClient implements DaoVotingNativeStakedInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.stake = this.stake.bind(this);
    this.unstake = this.unstake.bind(this);
    this.updateConfig = this.updateConfig.bind(this);
    this.claim = this.claim.bind(this);
  }

  stake = async (_fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      stake: {}
    }, _fee, _memo, _funds);
  };
  unstake = async ({
    amount
  }: {
    amount: Uint128;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      unstake: {
        amount
      }
    }, _fee, _memo, _funds);
  };
  updateConfig = async ({
    duration,
    manager,
    owner
  }: {
    duration?: Duration;
    manager?: string;
    owner?: string;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_config: {
        duration,
        manager,
        owner
      }
    }, _fee, _memo, _funds);
  };
  claim = async (_fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      claim: {}
    }, _fee, _memo, _funds);
  };
}
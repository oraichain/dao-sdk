/**
* This file was automatically generated by @oraichain/ts-codegen@0.35.8.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @oraichain/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import {ActiveThreshold, Uint128, Decimal, TokenInfo, StakingInfo, Duration, Logo, EmbeddedLogo, Binary, Cw20Coin, InstantiateMarketingInfo, ActiveThresholdResponse, Addr, InfoResponse, ContractVersion, Boolean, TotalPowerAtHeightResponse, VotingPowerAtHeightResponse} from "./types";
import {InstantiateMsg, ExecuteMsg, QueryMsg, MigrateMsg} from "./DaoVotingCw20Staked.types";
export interface DaoVotingCw20StakedReadOnlyInterface {
  contractAddress: string;
  stakingContract: () => Promise<Addr>;
  activeThreshold: () => Promise<ActiveThresholdResponse>;
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
  tokenContract: () => Promise<Addr>;
  isActive: () => Promise<Boolean>;
}
export class DaoVotingCw20StakedQueryClient implements DaoVotingCw20StakedReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.stakingContract = this.stakingContract.bind(this);
    this.activeThreshold = this.activeThreshold.bind(this);
    this.votingPowerAtHeight = this.votingPowerAtHeight.bind(this);
    this.totalPowerAtHeight = this.totalPowerAtHeight.bind(this);
    this.dao = this.dao.bind(this);
    this.info = this.info.bind(this);
    this.tokenContract = this.tokenContract.bind(this);
    this.isActive = this.isActive.bind(this);
  }

  stakingContract = async (): Promise<Addr> => {
    return this.client.queryContractSmart(this.contractAddress, {
      staking_contract: {}
    });
  };
  activeThreshold = async (): Promise<ActiveThresholdResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      active_threshold: {}
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
  tokenContract = async (): Promise<Addr> => {
    return this.client.queryContractSmart(this.contractAddress, {
      token_contract: {}
    });
  };
  isActive = async (): Promise<Boolean> => {
    return this.client.queryContractSmart(this.contractAddress, {
      is_active: {}
    });
  };
}
export interface DaoVotingCw20StakedInterface extends DaoVotingCw20StakedReadOnlyInterface {
  contractAddress: string;
  sender: string;
  updateActiveThreshold: ({
    newThreshold
  }: {
    newThreshold?: ActiveThreshold;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
export class DaoVotingCw20StakedClient extends DaoVotingCw20StakedQueryClient implements DaoVotingCw20StakedInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.updateActiveThreshold = this.updateActiveThreshold.bind(this);
  }

  updateActiveThreshold = async ({
    newThreshold
  }: {
    newThreshold?: ActiveThreshold;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_active_threshold: {
        new_threshold: newThreshold
      }
    }, _fee, _memo, _funds);
  };
}
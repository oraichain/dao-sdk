import {Admin, Duration, Uint128, Expiration, Timestamp, Uint64, Claim, Addr, ContractVersion} from "./types";
export interface InstantiateMsg {
  denom: string;
  manager?: string | null;
  owner?: Admin | null;
  unstaking_duration?: Duration | null;
}
export type ExecuteMsg = {
  stake: {};
} | {
  unstake: {
    amount: Uint128;
  };
} | {
  update_config: {
    duration?: Duration | null;
    manager?: string | null;
    owner?: string | null;
  };
} | {
  claim: {};
};
export type QueryMsg = {
  get_config: {};
} | {
  claims: {
    address: string;
  };
} | {
  list_stakers: {
    limit?: number | null;
    start_after?: string | null;
  };
} | {
  voting_power_at_height: {
    address: string;
    height?: number | null;
  };
} | {
  total_power_at_height: {
    height?: number | null;
  };
} | {
  dao: {};
} | {
  info: {};
};
export interface MigrateMsg {}
export interface ClaimsResponse {
  claims: Claim[];
}
export interface Config {
  denom: string;
  manager?: Addr | null;
  owner?: Addr | null;
  unstaking_duration?: Duration | null;
}
export interface InfoResponse {
  info: ContractVersion;
}
export interface ListStakersResponse {
  stakers: StakerBalanceResponse[];
}
export interface StakerBalanceResponse {
  address: string;
  balance: Uint128;
}
export interface TotalPowerAtHeightResponse {
  height: number;
  power: Uint128;
}
export interface VotingPowerAtHeightResponse {
  height: number;
  power: Uint128;
}
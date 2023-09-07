import {ActiveThreshold, Uint128, Decimal, TokenInfo, Duration, NewTokenInfo, InitialBalance, NewDenomMetadata, DenomUnit, Expiration, Timestamp, Uint64, Claim, Addr, ContractVersion, Boolean} from "./types";
export interface InstantiateMsg {
  active_threshold?: ActiveThreshold | null;
  token_info: TokenInfo;
  token_issuer_code_id: number;
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
  };
} | {
  claim: {};
} | {
  update_active_threshold: {
    new_threshold?: ActiveThreshold | null;
  };
} | {
  add_hook: {
    addr: string;
  };
} | {
  remove_hook: {
    addr: string;
  };
};
export type QueryMsg = {
  get_config: {};
} | {
  denom: {};
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
  active_threshold: {};
} | {
  get_hooks: {};
} | {
  is_active: {};
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
} | {
  token_contract: {};
};
export interface MigrateMsg {}
export interface ActiveThresholdResponse {
  active_threshold?: ActiveThreshold | null;
}
export interface ClaimsResponse {
  claims: Claim[];
}
export interface DenomResponse {
  denom: string;
}
export interface Config {
  unstaking_duration?: Duration | null;
}
export interface GetHooksResponse {
  hooks: string[];
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
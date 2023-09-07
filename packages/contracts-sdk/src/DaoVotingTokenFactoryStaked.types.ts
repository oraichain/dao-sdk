import {Uint128, Decimal, Timestamp, Uint64, Addr, Boolean} from "./types";
export type ActiveThreshold = {
  absolute_count: {
    count: Uint128;
  };
} | {
  percentage: {
    percent: Decimal;
  };
};
export type TokenInfo = {
  existing: {
    denom: string;
  };
} | {
  new: NewTokenInfo;
};
export type Duration = {
  height: number;
} | {
  time: number;
};
export interface InstantiateMsg {
  active_threshold?: ActiveThreshold | null;
  token_info: TokenInfo;
  token_issuer_code_id: number;
  unstaking_duration?: Duration | null;
}
export interface NewTokenInfo {
  initial_balances: InitialBalance[];
  initial_dao_balance?: Uint128 | null;
  metadata?: NewDenomMetadata | null;
  subdenom: string;
}
export interface InitialBalance {
  address: string;
  amount: Uint128;
}
export interface NewDenomMetadata {
  additional_denom_units?: DenomUnit[] | null;
  description: string;
  display: string;
  name: string;
  symbol: string;
}
export interface DenomUnit {
  aliases: string[];
  denom: string;
  exponent: number;
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
export type Expiration = {
  at_height: number;
} | {
  at_time: Timestamp;
} | {
  never: {};
};
export interface ClaimsResponse {
  claims: Claim[];
}
export interface Claim {
  amount: Uint128;
  release_at: Expiration;
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
export interface ContractVersion {
  contract: string;
  version: string;
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
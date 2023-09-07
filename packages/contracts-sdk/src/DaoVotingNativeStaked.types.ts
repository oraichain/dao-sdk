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
export type Duration = {
  height: number;
} | {
  time: number;
};
export interface InstantiateMsg {
  active_threshold?: ActiveThreshold | null;
  denom: string;
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
  claims: {
    address: string;
  };
} | {
  get_denom: {};
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
  is_active: {};
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
export interface Config {
  denom: string;
  unstaking_duration?: Duration | null;
}
export interface DenomResponse {
  denom: string;
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
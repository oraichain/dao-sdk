import {ActiveThreshold, Uint128, Decimal, Duration, ActiveThresholdResponse, Expiration, Timestamp, Uint64, ClaimsResponse, Claim, Addr, Config, DenomResponse, GetHooksResponse, InfoResponse, ContractVersion, Boolean, ListStakersResponse, StakerBalanceResponse, TotalPowerAtHeightResponse, VotingPowerAtHeightResponse} from "./types";
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
import {Uint128, Binary, Timestamp, Uint64, Addr} from "./types";
export type Duration = {
  height: number;
} | {
  time: number;
};
export interface InstantiateMsg {
  owner?: string | null;
  token_address: string;
  unstaking_duration?: Duration | null;
}
export type ExecuteMsg = {
  receive: Cw20ReceiveMsg;
} | {
  unstake: {
    amount: Uint128;
  };
} | {
  claim: {};
} | {
  update_config: {
    duration?: Duration | null;
  };
} | {
  add_hook: {
    addr: string;
  };
} | {
  remove_hook: {
    addr: string;
  };
} | {
  update_ownership: Action;
};
export type Action = {
  transfer_ownership: {
    expiry?: Expiration | null;
    new_owner: string;
  };
} | "accept_ownership" | "renounce_ownership";
export type Expiration = {
  at_height: number;
} | {
  at_time: Timestamp;
} | {
  never: {};
};
export interface Cw20ReceiveMsg {
  amount: Uint128;
  msg: Binary;
  sender: string;
}
export type QueryMsg = {
  staked_balance_at_height: {
    address: string;
    height?: number | null;
  };
} | {
  total_staked_at_height: {
    height?: number | null;
  };
} | {
  staked_value: {
    address: string;
  };
} | {
  total_value: {};
} | {
  get_config: {};
} | {
  claims: {
    address: string;
  };
} | {
  get_hooks: {};
} | {
  list_stakers: {
    limit?: number | null;
    start_after?: string | null;
  };
} | {
  ownership: {};
};
export type MigrateMsg = {
  from_v1: {};
};
export interface ClaimsResponse {
  claims: Claim[];
}
export interface Claim {
  amount: Uint128;
  release_at: Expiration;
}
export interface Config {
  token_address: Addr;
  unstaking_duration?: Duration | null;
}
export interface GetHooksResponse {
  hooks: string[];
}
export interface ListStakersResponse {
  stakers: StakerBalanceResponse[];
}
export interface StakerBalanceResponse {
  address: string;
  balance: Uint128;
}
export interface OwnershipForAddr {
  owner?: Addr | null;
  pending_expiry?: Expiration | null;
  pending_owner?: Addr | null;
}
export interface StakedBalanceAtHeightResponse {
  balance: Uint128;
  height: number;
}
export interface StakedValueResponse {
  value: Uint128;
}
export interface TotalStakedAtHeightResponse {
  height: number;
  total: Uint128;
}
export interface TotalValueResponse {
  total: Uint128;
}
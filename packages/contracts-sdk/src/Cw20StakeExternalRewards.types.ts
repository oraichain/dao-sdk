import {Addr, Uint128, Binary, Timestamp, Uint64} from "./types";
export type Denom = {
  native: string;
} | {
  cw20: Addr;
};
export interface InstantiateMsg {
  owner?: string | null;
  reward_duration: number;
  reward_token: Denom;
  staking_contract: string;
}
export type ExecuteMsg = {
  stake_change_hook: StakeChangedHookMsg;
} | {
  claim: {};
} | {
  receive: Cw20ReceiveMsg;
} | {
  fund: {};
} | {
  update_reward_duration: {
    new_duration: number;
  };
} | {
  update_ownership: Action;
};
export type StakeChangedHookMsg = {
  stake: {
    addr: Addr;
    amount: Uint128;
  };
} | {
  unstake: {
    addr: Addr;
    amount: Uint128;
  };
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
  info: {};
} | {
  get_pending_rewards: {
    address: string;
  };
} | {
  ownership: {};
};
export type MigrateMsg = {
  from_v1: {};
};
export interface PendingRewardsResponse {
  address: string;
  denom: Denom;
  last_update_block: number;
  pending_rewards: Uint128;
}
export interface InfoResponse {
  config: Config;
  reward: RewardConfig;
}
export interface Config {
  reward_token: Denom;
  staking_contract: Addr;
}
export interface RewardConfig {
  period_finish: number;
  reward_duration: number;
  reward_rate: Uint128;
}
export interface OwnershipForAddr {
  owner?: Addr | null;
  pending_expiry?: Expiration | null;
  pending_owner?: Addr | null;
}
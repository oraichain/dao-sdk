import {Addr, Uint128, Binary, Action, Expiration, Timestamp, Uint64, Cw20ReceiveMsg, InfoResponse, Config, OwnershipForAddr} from "./types";
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
export interface RewardConfig {
  period_finish: number;
  reward_duration: number;
  reward_rate: Uint128;
}
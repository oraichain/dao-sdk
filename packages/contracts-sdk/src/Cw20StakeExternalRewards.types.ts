import {Denom, Addr, StakeChangedHookMsg, Uint128, Binary, Action, Expiration, Timestamp, Uint64, Cw20ReceiveMsg, Config, RewardConfig, OwnershipForAddr} from "./types";
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
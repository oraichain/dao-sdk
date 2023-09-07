import {Uint128, Action, Expiration, Timestamp, Uint64, Addr, Config, OwnershipForAddr} from "./types";
export interface InstantiateMsg {
  owner: string;
  reward_rate: Uint128;
  reward_token: string;
  staking_addr: string;
}
export type ExecuteMsg = {
  update_config: {
    reward_rate: Uint128;
    reward_token: string;
    staking_addr: string;
  };
} | {
  distribute: {};
} | {
  withdraw: {};
} | {
  update_ownership: Action;
};
export type QueryMsg = {
  info: {};
} | {
  ownership: {};
};
export type MigrateMsg = {
  from_v1: {};
};
export interface InfoResponse {
  balance: Uint128;
  config: Config;
  last_payment_block: number;
}
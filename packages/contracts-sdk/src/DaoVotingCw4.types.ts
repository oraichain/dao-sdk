import {GroupContract, Member, Addr, ContractVersion, Uint128} from "./types";
export interface InstantiateMsg {
  group_contract: GroupContract;
}
export type ExecuteMsg = string;
export type QueryMsg = {
  group_contract: {};
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
export interface InfoResponse {
  info: ContractVersion;
}
export interface TotalPowerAtHeightResponse {
  height: number;
  power: Uint128;
}
export interface VotingPowerAtHeightResponse {
  height: number;
  power: Uint128;
}
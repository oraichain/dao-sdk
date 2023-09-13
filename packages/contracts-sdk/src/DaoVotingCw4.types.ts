import {Addr, InfoResponse, ContractVersion, Uint128, TotalPowerAtHeightResponse, VotingPowerAtHeightResponse} from "./types";
export type GroupContract = {
  existing: {
    address: string;
  };
} | {
  new: {
    cw4_group_code_id: number;
    initial_members: Member[];
  };
};
export interface InstantiateMsg {
  group_contract: GroupContract;
}
export interface Member {
  addr: string;
  weight: number;
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
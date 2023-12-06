import {Addr, ContractVersion, Uint128} from "./types";
export interface InstantiateMsg {
  cw4_group_code_id: number;
  initial_members: Member[];
}
export interface Member {
  addr: string;
  weight: number;
}
export type ExecuteMsg = {
  member_changed_hook: {
    diffs: MemberDiff[];
  };
};
export interface MemberDiff {
  key: string;
  new?: number | null;
  old?: number | null;
}
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
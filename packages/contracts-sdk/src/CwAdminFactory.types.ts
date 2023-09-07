import {Binary} from "./types";
export interface InstantiateMsg {}
export type ExecuteMsg = {
  instantiate_contract_with_self_admin: {
    code_id: number;
    instantiate_msg: Binary;
    label: string;
  };
};
export type QueryMsg = string;
export interface MigrateMsg {}
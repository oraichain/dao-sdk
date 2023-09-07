import {Uint128, Binary, UncheckedDenom, Schedule, Timestamp, Uint64, Action, Expiration, Cw20ReceiveMsg, ArrayOfVestingContract, VestingContract, Addr, OwnershipForAddr} from "./types";
export interface InstantiateMsg {
  denom: UncheckedDenom;
  description?: string | null;
  owner?: string | null;
  recipient: string;
  schedule: Schedule;
  start_time?: Timestamp | null;
  title: string;
  total: Uint128;
  unbonding_duration_seconds: number;
  vesting_duration_seconds: number;
}
export type ExecuteMsg = {
  receive: Cw20ReceiveMsg;
} | {
  instantiate_native_payroll_contract: {
    instantiate_msg: InstantiateMsg;
    label: string;
  };
} | {
  update_code_id: {
    vesting_code_id: number;
  };
} | {
  update_ownership: Action;
};
export type QueryMsg = {
  list_vesting_contracts: {
    limit?: number | null;
    start_after?: string | null;
  };
} | {
  list_vesting_contracts_reverse: {
    limit?: number | null;
    start_before?: string | null;
  };
} | {
  list_vesting_contracts_by_instantiator: {
    instantiator: string;
    limit?: number | null;
    start_after?: string | null;
  };
} | {
  list_vesting_contracts_by_instantiator_reverse: {
    instantiator: string;
    limit?: number | null;
    start_before?: string | null;
  };
} | {
  list_vesting_contracts_by_recipient: {
    limit?: number | null;
    recipient: string;
    start_after?: string | null;
  };
} | {
  list_vesting_contracts_by_recipient_reverse: {
    limit?: number | null;
    recipient: string;
    start_before?: string | null;
  };
} | {
  ownership: {};
} | {
  code_id: {};
};
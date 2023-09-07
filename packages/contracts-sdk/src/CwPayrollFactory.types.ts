import {Uint128, Binary, Timestamp, Uint64, Addr} from "./types";
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
export type UncheckedDenom = {
  native: string;
} | {
  cw20: string;
};
export type Schedule = "saturating_linear" | {
  piecewise_linear: [number, Uint128][];
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
export type ArrayOfVestingContract = VestingContract[];
export interface VestingContract {
  contract: string;
  instantiator: string;
  recipient: string;
}
export interface OwnershipForAddr {
  owner?: Addr | null;
  pending_expiry?: Expiration | null;
  pending_owner?: Addr | null;
}
import {Uint128, Timestamp, Uint64, Binary, Addr} from "./types";
export type UncheckedDenom = {
  native: string;
} | {
  cw20: string;
};
export type Schedule = "saturating_linear" | {
  piecewise_linear: [number, Uint128][];
};
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
  distribute: {
    amount?: Uint128 | null;
  };
} | {
  cancel: {};
} | {
  delegate: {
    amount: Uint128;
    validator: string;
  };
} | {
  redelegate: {
    amount: Uint128;
    dst_validator: string;
    src_validator: string;
  };
} | {
  undelegate: {
    amount: Uint128;
    validator: string;
  };
} | {
  set_withdraw_address: {
    address: string;
  };
} | {
  withdraw_delegator_reward: {
    validator: string;
  };
} | {
  withdraw_canceled_payment: {
    amount?: Uint128 | null;
  };
} | {
  register_slash: {
    amount: Uint128;
    during_unbonding: boolean;
    time: Timestamp;
    validator: string;
  };
} | {
  update_ownership: Action;
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
  ownership: {};
} | {
  info: {};
} | {
  distributable: {
    t?: Timestamp | null;
  };
} | {
  vested: {
    t?: Timestamp | null;
  };
} | {
  total_to_vest: {};
} | {
  vest_duration: {};
} | {
  stake: StakeTrackerQuery;
};
export type StakeTrackerQuery = {
  cardinality: {
    t: Timestamp;
  };
} | {
  total_staked: {
    t: Timestamp;
  };
} | {
  validator_staked: {
    t: Timestamp;
    validator: string;
  };
};
export type CheckedDenom = {
  native: string;
} | {
  cw20: Addr;
};
export type Status = ("unfunded" | "funded") | {
  canceled: {
    owner_withdrawable: Uint128;
  };
};
export type Curve = {
  constant: {
    y: Uint128;
  };
} | {
  saturating_linear: SaturatingLinear;
} | {
  piecewise_linear: PiecewiseLinear;
};
export interface Vest {
  claimed: Uint128;
  denom: CheckedDenom;
  description?: string | null;
  recipient: Addr;
  slashed: Uint128;
  start_time: Timestamp;
  status: Status;
  title: string;
  vested: Curve;
}
export interface SaturatingLinear {
  max_x: number;
  max_y: Uint128;
  min_x: number;
  min_y: Uint128;
}
export interface PiecewiseLinear {
  steps: [number, Uint128][];
}
export interface OwnershipForAddr {
  owner?: Addr | null;
  pending_expiry?: Expiration | null;
  pending_owner?: Addr | null;
}
export type NullableUint64 = Uint64 | null;
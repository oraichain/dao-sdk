import {Uint128, CosmosMsgForEmpty, BankMsg, StakingMsg, DistributionMsg, Binary, IbcMsg, Timestamp, Uint64, WasmMsg, GovMsg, Addr} from "./types";
export type DepositToken = {
  token: {
    denom: UncheckedDenom;
  };
} | {
  voting_module_token: {};
};
export type UncheckedDenom = {
  native: string;
} | {
  cw20: string;
};
export type DepositRefundPolicy = "always" | "only_passed" | "never";
export interface InstantiateMsg {
  deposit_info?: UncheckedDepositInfo | null;
  extension: InstantiateExt;
  open_proposal_submission: boolean;
}
export interface UncheckedDepositInfo {
  amount: Uint128;
  denom: DepositToken;
  refund_policy: DepositRefundPolicy;
}
export interface InstantiateExt {
  approver: string;
}
export type ExecuteMsg = {
  propose: {
    msg: ProposeMessage;
  };
} | {
  update_config: {
    deposit_info?: UncheckedDepositInfo | null;
    open_proposal_submission: boolean;
  };
} | {
  withdraw: {
    denom?: UncheckedDenom | null;
  };
} | {
  extension: {
    msg: ExecuteExt;
  };
} | {
  add_proposal_submitted_hook: {
    address: string;
  };
} | {
  remove_proposal_submitted_hook: {
    address: string;
  };
} | {
  proposal_completed_hook: {
    new_status: Status;
    proposal_id: number;
  };
};
export type ProposeMessage = {
  propose: {
    description: string;
    msgs: CosmosMsgForEmpty[];
    title: string;
  };
};
export type VoteOption = "yes" | "no" | "abstain" | "no_with_veto";
export type ExecuteExt = {
  approve: {
    id: number;
  };
} | {
  reject: {
    id: number;
  };
} | {
  update_approver: {
    address: string;
  };
};
export type Status = "open" | "rejected" | "passed" | "executed" | "closed" | "execution_failed";
export interface Coin {
  amount: Uint128;
  denom: string;
}
export interface Empty {}
export interface IbcTimeout {
  block?: IbcTimeoutBlock | null;
  timestamp?: Timestamp | null;
}
export interface IbcTimeoutBlock {
  height: number;
  revision: number;
}
export type QueryMsg = {
  proposal_module: {};
} | {
  dao: {};
} | {
  config: {};
} | {
  deposit_info: {
    proposal_id: number;
  };
} | {
  proposal_submitted_hooks: {};
} | {
  query_extension: {
    msg: QueryExt;
  };
};
export type QueryExt = {
  approver: {};
} | {
  pending_proposal: {
    id: number;
  };
} | {
  pending_proposals: {
    limit?: number | null;
    start_after?: number | null;
  };
} | {
  reverse_pending_proposals: {
    limit?: number | null;
    start_before?: number | null;
  };
};
export type CheckedDenom = {
  native: string;
} | {
  cw20: Addr;
};
export interface Config {
  deposit_info?: CheckedDepositInfo | null;
  open_proposal_submission: boolean;
}
export interface CheckedDepositInfo {
  amount: Uint128;
  denom: CheckedDenom;
  refund_policy: DepositRefundPolicy;
}
export interface DepositInfoResponse {
  deposit_info?: CheckedDepositInfo | null;
  proposer: Addr;
}
export interface HooksResponse {
  hooks: string[];
}
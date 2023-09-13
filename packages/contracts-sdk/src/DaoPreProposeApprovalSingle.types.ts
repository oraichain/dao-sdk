import {Uint128, DepositToken, UncheckedDenom, DepositRefundPolicy, UncheckedDepositInfo, ProposeMessage, CosmosMsgForEmpty, BankMsg, StakingMsg, DistributionMsg, Binary, IbcMsg, Timestamp, Uint64, WasmMsg, GovMsg, VoteOption, Status, Coin, Empty, IbcTimeout, IbcTimeoutBlock, CheckedDenom, Addr, Config, CheckedDepositInfo, DepositInfoResponse, HooksResponse} from "./types";
export interface InstantiateMsg {
  deposit_info?: UncheckedDepositInfo | null;
  extension: InstantiateExt;
  open_proposal_submission: boolean;
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
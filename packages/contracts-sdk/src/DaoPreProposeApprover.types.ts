import {Uint128, DepositToken, UncheckedDenom, DepositRefundPolicy, Status, UncheckedDepositInfo, Empty, CheckedDenom, Addr, Config, CheckedDepositInfo, DepositInfoResponse, HooksResponse, Binary} from "./types";
export interface InstantiateMsg {
  pre_propose_approval_contract: string;
}
export type ExecuteMsg = {
  propose: {
    msg: ApproverProposeMessage;
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
    msg: Empty;
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
export type ApproverProposeMessage = {
  propose: {
    approval_id: number;
    description: string;
    title: string;
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
  pre_propose_approval_contract: {};
};
import {Binary, Decimal, Uint128, Timestamp, Uint64, Addr} from "./types";
export type Duration = {
  height: number;
} | {
  time: number;
};
export type PreProposeInfo = {
  anyone_may_propose: {};
} | {
  module_may_propose: {
    info: ModuleInstantiateInfo;
  };
};
export type Admin = {
  address: {
    addr: string;
  };
} | {
  core_module: {};
};
export type Threshold = {
  absolute_percentage: {
    percentage: PercentageThreshold;
  };
} | {
  threshold_quorum: {
    quorum: PercentageThreshold;
    threshold: PercentageThreshold;
  };
} | {
  absolute_count: {
    threshold: Uint128;
  };
};
export type PercentageThreshold = {
  majority: {};
} | {
  percent: Decimal;
};
export interface InstantiateMsg {
  allow_revoting: boolean;
  close_proposal_on_execution_failure: boolean;
  max_voting_period: Duration;
  min_voting_period?: Duration | null;
  only_members_execute: boolean;
  pre_propose_info: PreProposeInfo;
  threshold: Threshold;
}
export interface ModuleInstantiateInfo {
  admin?: Admin | null;
  code_id: number;
  label: string;
  msg: Binary;
}
export type ExecuteMsg = {
  propose: SingleChoiceProposeMsg;
} | {
  vote: {
    proposal_id: number;
    rationale?: string | null;
    vote: Vote;
  };
} | {
  update_rationale: {
    proposal_id: number;
    rationale?: string | null;
  };
} | {
  execute: {
    proposal_id: number;
  };
} | {
  close: {
    proposal_id: number;
  };
} | {
  update_config: {
    allow_revoting: boolean;
    close_proposal_on_execution_failure: boolean;
    dao: string;
    max_voting_period: Duration;
    min_voting_period?: Duration | null;
    only_members_execute: boolean;
    threshold: Threshold;
  };
} | {
  update_pre_propose_info: {
    info: PreProposeInfo;
  };
} | {
  add_proposal_hook: {
    address: string;
  };
} | {
  remove_proposal_hook: {
    address: string;
  };
} | {
  add_vote_hook: {
    address: string;
  };
} | {
  remove_vote_hook: {
    address: string;
  };
};
export type CosmosMsgForEmpty = {
  bank: BankMsg;
} | {
  custom: Empty;
} | {
  staking: StakingMsg;
} | {
  distribution: DistributionMsg;
} | {
  stargate: {
    type_url: string;
    value: Binary;
  };
} | {
  ibc: IbcMsg;
} | {
  wasm: WasmMsg;
} | {
  gov: GovMsg;
};
export type BankMsg = {
  send: {
    amount: Coin[];
    to_address: string;
  };
} | {
  burn: {
    amount: Coin[];
  };
};
export type StakingMsg = {
  delegate: {
    amount: Coin;
    validator: string;
  };
} | {
  undelegate: {
    amount: Coin;
    validator: string;
  };
} | {
  redelegate: {
    amount: Coin;
    dst_validator: string;
    src_validator: string;
  };
};
export type DistributionMsg = {
  set_withdraw_address: {
    address: string;
  };
} | {
  withdraw_delegator_reward: {
    validator: string;
  };
};
export type IbcMsg = {
  transfer: {
    amount: Coin;
    channel_id: string;
    timeout: IbcTimeout;
    to_address: string;
  };
} | {
  send_packet: {
    channel_id: string;
    data: Binary;
    timeout: IbcTimeout;
  };
} | {
  close_channel: {
    channel_id: string;
  };
};
export type WasmMsg = {
  execute: {
    contract_addr: string;
    funds: Coin[];
    msg: Binary;
  };
} | {
  instantiate: {
    admin?: string | null;
    code_id: number;
    funds: Coin[];
    label: string;
    msg: Binary;
  };
} | {
  migrate: {
    contract_addr: string;
    msg: Binary;
    new_code_id: number;
  };
} | {
  update_admin: {
    admin: string;
    contract_addr: string;
  };
} | {
  clear_admin: {
    contract_addr: string;
  };
};
export type GovMsg = {
  vote: {
    proposal_id: number;
    vote: VoteOption;
  };
};
export type VoteOption = "yes" | "no" | "abstain" | "no_with_veto";
export type Vote = "yes" | "no" | "abstain";
export interface SingleChoiceProposeMsg {
  description: string;
  msgs: CosmosMsgForEmpty[];
  proposer?: string | null;
  title: string;
}
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
  config: {};
} | {
  proposal: {
    proposal_id: number;
  };
} | {
  list_proposals: {
    limit?: number | null;
    start_after?: number | null;
  };
} | {
  reverse_proposals: {
    limit?: number | null;
    start_before?: number | null;
  };
} | {
  get_vote: {
    proposal_id: number;
    voter: string;
  };
} | {
  list_votes: {
    limit?: number | null;
    proposal_id: number;
    start_after?: string | null;
  };
} | {
  proposal_count: {};
} | {
  proposal_creation_policy: {};
} | {
  proposal_hooks: {};
} | {
  vote_hooks: {};
} | {
  dao: {};
} | {
  info: {};
} | {
  next_proposal_id: {};
};
export type MigrateMsg = {
  from_v1: {
    close_proposal_on_execution_failure: boolean;
    pre_propose_info: PreProposeInfo;
  };
} | {
  from_compatible: {};
};
export interface Config {
  allow_revoting: boolean;
  close_proposal_on_execution_failure: boolean;
  dao: Addr;
  max_voting_period: Duration;
  min_voting_period?: Duration | null;
  only_members_execute: boolean;
  threshold: Threshold;
}
export interface VoteResponse {
  vote?: VoteInfo | null;
}
export interface VoteInfo {
  power: Uint128;
  rationale?: string | null;
  vote: Vote;
  voter: Addr;
}
export interface InfoResponse {
  info: ContractVersion;
}
export interface ContractVersion {
  contract: string;
  version: string;
}
export type Expiration = {
  at_height: number;
} | {
  at_time: Timestamp;
} | {
  never: {};
};
export type Status = "open" | "rejected" | "passed" | "executed" | "closed" | "execution_failed";
export interface ProposalListResponse {
  proposals: ProposalResponse[];
}
export interface ProposalResponse {
  id: number;
  proposal: SingleChoiceProposal;
}
export interface SingleChoiceProposal {
  allow_revoting: boolean;
  description: string;
  expiration: Expiration;
  min_voting_period?: Expiration | null;
  msgs: CosmosMsgForEmpty[];
  proposer: Addr;
  start_height: number;
  status: Status;
  threshold: Threshold;
  title: string;
  total_power: Uint128;
  votes: Votes;
}
export interface Votes {
  abstain: Uint128;
  no: Uint128;
  yes: Uint128;
}
export interface VoteListResponse {
  votes: VoteInfo[];
}
export type ProposalCreationPolicy = {
  anyone: {};
} | {
  module: {
    addr: Addr;
  };
};
export interface HooksResponse {
  hooks: string[];
}
import {Binary, Decimal, CosmosMsgForEmpty, BankMsg, Uint128, StakingMsg, DistributionMsg, IbcMsg, Timestamp, Uint64, WasmMsg, GovMsg, Addr} from "./types";
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
export type VotingStrategy = {
  single_choice: {
    quorum: PercentageThreshold;
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
  voting_strategy: VotingStrategy;
}
export interface ModuleInstantiateInfo {
  admin?: Admin | null;
  code_id: number;
  label: string;
  msg: Binary;
}
export type ExecuteMsg = {
  propose: {
    choices: MultipleChoiceOptions;
    description: string;
    proposer?: string | null;
    title: string;
  };
} | {
  vote: {
    proposal_id: number;
    rationale?: string | null;
    vote: MultipleChoiceVote;
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
    voting_strategy: VotingStrategy;
  };
} | {
  update_rationale: {
    proposal_id: number;
    rationale?: string | null;
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
export type VoteOption = "yes" | "no" | "abstain" | "no_with_veto";
export interface MultipleChoiceOptions {
  options: MultipleChoiceOption[];
}
export interface MultipleChoiceOption {
  description: string;
  msgs: CosmosMsgForEmpty[];
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
export interface MultipleChoiceVote {
  option_id: number;
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
  voting_strategy: VotingStrategy;
}
export interface VoteResponse {
  vote?: VoteInfo | null;
}
export interface VoteInfo {
  power: Uint128;
  rationale?: string | null;
  vote: MultipleChoiceVote;
  voter: Addr;
}
export interface InfoResponse {
  info: ContractVersion;
}
export interface ContractVersion {
  contract: string;
  version: string;
}
export type MultipleChoiceOptionType = "standard" | "none";
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
  proposal: MultipleChoiceProposal;
}
export interface MultipleChoiceProposal {
  allow_revoting: boolean;
  choices: CheckedMultipleChoiceOption[];
  description: string;
  expiration: Expiration;
  min_voting_period?: Expiration | null;
  proposer: Addr;
  start_height: number;
  status: Status;
  title: string;
  total_power: Uint128;
  votes: MultipleChoiceVotes;
  voting_strategy: VotingStrategy;
}
export interface CheckedMultipleChoiceOption {
  description: string;
  index: number;
  msgs: CosmosMsgForEmpty[];
  option_type: MultipleChoiceOptionType;
  title: string;
  vote_count: Uint128;
}
export interface MultipleChoiceVotes {
  vote_weights: Uint128[];
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
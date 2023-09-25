import {Duration, PercentageThreshold, Decimal, CosmosMsgForEmpty, BankMsg, Uint128, StakingMsg, DistributionMsg, Binary, IbcMsg, Timestamp, Uint64, WasmMsg, GovMsg, VoteOption, Coin, Empty, IbcTimeout, IbcTimeoutBlock, Addr, ContractVersion, Status, Expiration} from "./types";
export interface InstantiateMsg {
  close_proposals_on_execution_failure: boolean;
  min_voting_period?: Duration | null;
  quorum: PercentageThreshold;
  voting_period: Duration;
}
export type ExecuteMsg = {
  propose: {
    choices: Choice[];
  };
} | {
  vote: {
    proposal_id: number;
    vote: number[];
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
  set_config: UncheckedConfig;
};
export interface Choice {
  msgs: CosmosMsgForEmpty[];
}
export interface UncheckedConfig {
  close_proposals_on_execution_failure: boolean;
  min_voting_period?: Duration | null;
  quorum: PercentageThreshold;
  voting_period: Duration;
}
export type QueryMsg = {
  proposal: {
    id: number;
  };
} | {
  config: {};
} | {
  dao: {};
} | {
  info: {};
} | {
  next_proposal_id: {};
};
export interface Config {
  close_proposals_on_execution_failure: boolean;
  min_voting_period?: Duration | null;
  quorum: PercentageThreshold;
  voting_period: Duration;
}
export interface InfoResponse {
  info: ContractVersion;
}
export type Cell = "zero" | {
  positive: Uint128;
} | {
  negative: Uint128;
};
export type Winner = ("never" | "none") | {
  some: number;
} | {
  undisputed: number;
};
export interface ProposalResponse {
  proposal: Proposal;
  tally: Tally;
}
export interface Proposal {
  choices: Choice[];
  close_on_execution_failure: boolean;
  id: number;
  last_status: Status;
  min_voting_period?: Expiration | null;
  proposer: Addr;
  quorum: PercentageThreshold;
  total_power: Uint128;
}
export interface Tally {
  expiration: Expiration;
  m: M;
  power_outstanding: Uint128;
  start_height: number;
  winner: Winner;
}
export interface M {
  cells: Cell[];
  n: number;
}
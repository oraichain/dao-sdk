import {Decimal, CosmosMsgForEmpty, BankMsg, Uint128, StakingMsg, DistributionMsg, Binary, IbcMsg, Timestamp, Uint64, WasmMsg, GovMsg, VoteOption, Addr} from "./types";
export type Duration = {
  height: number;
} | {
  time: number;
};
export type PercentageThreshold = {
  majority: {};
} | {
  percent: Decimal;
};
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
export interface ContractVersion {
  contract: string;
  version: string;
}
export type Status = "open" | "rejected" | {
  passed: {
    winner: number;
  };
} | "executed" | "closed" | "execution_failed";
export type Expiration = {
  at_height: number;
} | {
  at_time: Timestamp;
} | {
  never: {};
};
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
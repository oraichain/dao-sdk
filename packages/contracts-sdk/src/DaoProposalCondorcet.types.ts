import {Duration, PercentageThreshold, Decimal, CosmosMsgForEmpty, BankMsg, Uint128, StakingMsg, DistributionMsg, Binary, IbcMsg, Timestamp, Uint64, WasmMsg, GovMsg, VoteOption, Choice, Coin, Empty, IbcTimeout, IbcTimeoutBlock, UncheckedConfig, Addr, ContractVersion, Status, Expiration, Cell, Winner, Proposal, Tally, M} from "./types";
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
export interface ProposalResponse {
  proposal: Proposal;
  tally: Tally;
}
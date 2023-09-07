import {Decimal, Uint128, Binary, Timestamp, Uint64, Addr} from "./types";
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
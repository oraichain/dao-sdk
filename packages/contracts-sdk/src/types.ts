export type Uint128 = string;
export type Binary = string;
export type Timestamp = Uint64;
export type Uint64 = string;
export type Addr = string;
export type Decimal = string;
export type Boolean = boolean;
export type Null = null;
export interface Coin {
  amount: Uint128;
  denom: string;
}
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
export interface Empty {}
export interface IbcTimeout {
  block?: IbcTimeoutBlock | null;
  timestamp?: Timestamp | null;
}
export interface IbcTimeoutBlock {
  height: number;
  revision: number;
}
export { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import {Uint128, Decimal, Binary, Addr, Boolean, Timestamp, Uint64} from "./types";
export type ActiveThreshold = {
  absolute_count: {
    count: Uint128;
  };
} | {
  percentage: {
    percent: Decimal;
  };
};
export type NftContract = {
  existing: {
    address: string;
  };
} | {
  new: {
    code_id: number;
    initial_nfts: Binary[];
    label: string;
    msg: Binary;
  };
};
export type Admin = {
  address: {
    addr: string;
  };
} | {
  core_module: {};
};
export type Duration = {
  height: number;
} | {
  time: number;
};
export interface InstantiateMsg {
  active_threshold?: ActiveThreshold | null;
  nft_contract: NftContract;
  owner?: Admin | null;
  unstaking_duration?: Duration | null;
}
export type ExecuteMsg = {
  receive_nft: Cw721ReceiveMsg;
} | {
  unstake: {
    token_ids: string[];
  };
} | {
  claim_nfts: {};
} | {
  update_config: {
    duration?: Duration | null;
    owner?: string | null;
  };
} | {
  add_hook: {
    addr: string;
  };
} | {
  remove_hook: {
    addr: string;
  };
} | {
  update_active_threshold: {
    new_threshold?: ActiveThreshold | null;
  };
};
export interface Cw721ReceiveMsg {
  msg: Binary;
  sender: string;
  token_id: string;
}
export type QueryMsg = {
  config: {};
} | {
  nft_claims: {
    address: string;
  };
} | {
  hooks: {};
} | {
  staked_nfts: {
    address: string;
    limit?: number | null;
    start_after?: string | null;
  };
} | {
  active_threshold: {};
} | {
  is_active: {};
} | {
  voting_power_at_height: {
    address: string;
    height?: number | null;
  };
} | {
  total_power_at_height: {
    height?: number | null;
  };
} | {
  dao: {};
} | {
  info: {};
};
export interface ActiveThresholdResponse {
  active_threshold?: ActiveThreshold | null;
}
export interface Config {
  nft_address: Addr;
  owner?: Addr | null;
  unstaking_duration?: Duration | null;
}
export interface HooksResponse {
  hooks: string[];
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
export interface NftClaimsResponse {
  nft_claims: NftClaim[];
}
export interface NftClaim {
  release_at: Expiration;
  token_id: string;
}
export type ArrayOfString = string[];
export interface TotalPowerAtHeightResponse {
  height: number;
  power: Uint128;
}
export interface VotingPowerAtHeightResponse {
  height: number;
  power: Uint128;
}
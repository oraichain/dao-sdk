import {ActiveThreshold, Uint128, Decimal, Binary, Admin, Duration, Cw721ReceiveMsg, ActiveThresholdResponse, Addr, Config, HooksResponse, InfoResponse, ContractVersion, Boolean, Expiration, Timestamp, Uint64, ArrayOfString, TotalPowerAtHeightResponse, VotingPowerAtHeightResponse} from "./types";
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
export interface NftClaimsResponse {
  nft_claims: NftClaim[];
}
export interface NftClaim {
  release_at: Expiration;
  token_id: string;
}
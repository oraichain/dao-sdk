import {Admin, Duration, Binary, Cw721ReceiveMsg, Addr, ContractVersion, Expiration, Timestamp, Uint64, ArrayOfString, Uint128} from "./types";
export interface InstantiateMsg {
  nft_address: string;
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
export interface NftClaimsResponse {
  nft_claims: NftClaim[];
}
export interface NftClaim {
  release_at: Expiration;
  token_id: string;
}
export interface TotalPowerAtHeightResponse {
  height: number;
  power: Uint128;
}
export interface VotingPowerAtHeightResponse {
  height: number;
  power: Uint128;
}
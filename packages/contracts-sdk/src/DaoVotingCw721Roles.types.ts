import {MetadataExt, Addr, Config, InfoResponse, ContractVersion, Uint128, TotalPowerAtHeightResponse, VotingPowerAtHeightResponse} from "./types";
export type NftContract = {
  existing: {
    address: string;
  };
} | {
  new: {
    code_id: number;
    initial_nfts: NftMintMsg[];
    label: string;
    name: string;
    symbol: string;
  };
};
export interface InstantiateMsg {
  nft_contract: NftContract;
}
export interface NftMintMsg {
  extension: MetadataExt;
  owner: string;
  token_id: string;
  token_uri?: string | null;
}
export type ExecuteMsg = string;
export type QueryMsg = {
  config: {};
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
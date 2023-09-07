import {NftContract, NftMintMsg, MetadataExt, Addr, ContractVersion, Uint128} from "./types";
export interface InstantiateMsg {
  nft_contract: NftContract;
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
export interface Config {
  nft_address: Addr;
}
export interface InfoResponse {
  info: ContractVersion;
}
export interface TotalPowerAtHeightResponse {
  height: number;
  power: Uint128;
}
export interface VotingPowerAtHeightResponse {
  height: number;
  power: Uint128;
}
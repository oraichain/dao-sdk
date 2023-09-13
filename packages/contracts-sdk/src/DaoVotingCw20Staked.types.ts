import {ActiveThreshold, Uint128, Decimal, TokenInfo, StakingInfo, Duration, Logo, EmbeddedLogo, Binary, Cw20Coin, InstantiateMarketingInfo, ActiveThresholdResponse, Addr, InfoResponse, ContractVersion, Boolean, TotalPowerAtHeightResponse, VotingPowerAtHeightResponse} from "./types";
export interface InstantiateMsg {
  active_threshold?: ActiveThreshold | null;
  token_info: TokenInfo;
}
export type ExecuteMsg = {
  update_active_threshold: {
    new_threshold?: ActiveThreshold | null;
  };
};
export type QueryMsg = {
  staking_contract: {};
} | {
  active_threshold: {};
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
} | {
  token_contract: {};
} | {
  is_active: {};
};
export interface MigrateMsg {}
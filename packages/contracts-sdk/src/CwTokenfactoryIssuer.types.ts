import {Uint128, Metadata, DenomUnit, SudoMsg, Coin, StatusInfo, AllowanceInfo} from "./types";
export type InstantiateMsg = {
  new_token: {
    subdenom: string;
  };
} | {
  existing_token: {
    denom: string;
  };
};
export type ExecuteMsg = {
  change_token_factory_admin: {
    new_admin: string;
  };
} | {
  change_contract_owner: {
    new_owner: string;
  };
} | {
  set_denom_metadata: {
    metadata: Metadata;
  };
} | {
  set_minter_allowance: {
    address: string;
    allowance: Uint128;
  };
} | {
  set_burner_allowance: {
    address: string;
    allowance: Uint128;
  };
} | {
  set_blacklister: {
    address: string;
    status: boolean;
  };
} | {
  set_whitelister: {
    address: string;
    status: boolean;
  };
} | {
  set_before_send_hook: {};
} | {
  set_freezer: {
    address: string;
    status: boolean;
  };
} | {
  mint: {
    amount: Uint128;
    to_address: string;
  };
} | {
  burn: {
    amount: Uint128;
    from_address: string;
  };
} | {
  blacklist: {
    address: string;
    status: boolean;
  };
} | {
  whitelist: {
    address: string;
    status: boolean;
  };
} | {
  freeze: {
    status: boolean;
  };
} | {
  force_transfer: {
    amount: Uint128;
    from_address: string;
    to_address: string;
  };
};
export type QueryMsg = {
  is_frozen: {};
} | {
  denom: {};
} | {
  owner: {};
} | {
  burn_allowance: {
    address: string;
  };
} | {
  burn_allowances: {
    limit?: number | null;
    start_after?: string | null;
  };
} | {
  mint_allowance: {
    address: string;
  };
} | {
  mint_allowances: {
    limit?: number | null;
    start_after?: string | null;
  };
} | {
  is_blacklisted: {
    address: string;
  };
} | {
  blacklistees: {
    limit?: number | null;
    start_after?: string | null;
  };
} | {
  is_blacklister: {
    address: string;
  };
} | {
  blacklister_allowances: {
    limit?: number | null;
    start_after?: string | null;
  };
} | {
  is_whitelisted: {
    address: string;
  };
} | {
  whitelistees: {
    limit?: number | null;
    start_after?: string | null;
  };
} | {
  is_whitelister: {
    address: string;
  };
} | {
  whitelister_allowances: {
    limit?: number | null;
    start_after?: string | null;
  };
} | {
  is_freezer: {
    address: string;
  };
} | {
  freezer_allowances: {
    limit?: number | null;
    start_after?: string | null;
  };
};
export interface BlacklisteesResponse {
  blacklistees: StatusInfo[];
}
export interface BlacklisterAllowancesResponse {
  blacklisters: StatusInfo[];
}
export interface AllowanceResponse {
  allowance: Uint128;
}
export interface AllowancesResponse {
  allowances: AllowanceInfo[];
}
export interface DenomResponse {
  denom: string;
}
export interface FreezerAllowancesResponse {
  freezers: StatusInfo[];
}
export interface StatusResponse {
  status: boolean;
}
export interface IsFrozenResponse {
  is_frozen: boolean;
}
export interface OwnerResponse {
  address: string;
}
export interface WhitelisteesResponse {
  whitelistees: StatusInfo[];
}
export interface WhitelisterAllowancesResponse {
  whitelisters: StatusInfo[];
}
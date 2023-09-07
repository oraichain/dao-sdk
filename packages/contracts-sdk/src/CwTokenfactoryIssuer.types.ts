import {Uint128} from "./types";
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
export interface Metadata {
  base: string;
  denom_units: DenomUnit[];
  description: string;
  display: string;
  name: string;
  symbol: string;
}
export interface DenomUnit {
  aliases: string[];
  denom: string;
  exponent: number;
}
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
export type SudoMsg = {
  block_before_send: {
    amount: Coin;
    from: string;
    to: string;
  };
};
export interface Coin {
  amount: Uint128;
  denom: string;
}
export interface BlacklisteesResponse {
  blacklistees: StatusInfo[];
}
export interface StatusInfo {
  address: string;
  status: boolean;
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
export interface AllowanceInfo {
  address: string;
  allowance: Uint128;
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
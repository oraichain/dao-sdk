import {Binary, Expiration, Timestamp, Uint64, Action, MetadataExt} from "./types";
export interface InstantiateMsg {
  minter: string;
  name: string;
  symbol: string;
}
export type ExecuteMsg = {
  transfer_nft: {
    recipient: string;
    token_id: string;
  };
} | {
  send_nft: {
    contract: string;
    msg: Binary;
    token_id: string;
  };
} | {
  approve: {
    expires?: Expiration | null;
    spender: string;
    token_id: string;
  };
} | {
  revoke: {
    spender: string;
    token_id: string;
  };
} | {
  approve_all: {
    expires?: Expiration | null;
    operator: string;
  };
} | {
  revoke_all: {
    operator: string;
  };
} | {
  mint: {
    extension: MetadataExt;
    owner: string;
    token_id: string;
    token_uri?: string | null;
  };
} | {
  burn: {
    token_id: string;
  };
} | {
  extension: {
    msg: ExecuteExt;
  };
} | {
  update_ownership: Action;
};
export type ExecuteExt = {
  add_hook: {
    addr: string;
  };
} | {
  remove_hook: {
    addr: string;
  };
} | {
  update_token_uri: {
    token_id: string;
    token_uri?: string | null;
  };
} | {
  update_token_weight: {
    token_id: string;
    weight: number;
  };
} | {
  update_token_role: {
    role?: string | null;
    token_id: string;
  };
};
export type QueryMsg = {
  owner_of: {
    include_expired?: boolean | null;
    token_id: string;
  };
} | {
  approval: {
    include_expired?: boolean | null;
    spender: string;
    token_id: string;
  };
} | {
  approvals: {
    include_expired?: boolean | null;
    token_id: string;
  };
} | {
  operator: {
    include_expired?: boolean | null;
    operator: string;
    owner: string;
  };
} | {
  all_operators: {
    include_expired?: boolean | null;
    limit?: number | null;
    owner: string;
    start_after?: string | null;
  };
} | {
  num_tokens: {};
} | {
  contract_info: {};
} | {
  nft_info: {
    token_id: string;
  };
} | {
  all_nft_info: {
    include_expired?: boolean | null;
    token_id: string;
  };
} | {
  tokens: {
    limit?: number | null;
    owner: string;
    start_after?: string | null;
  };
} | {
  all_tokens: {
    limit?: number | null;
    start_after?: string | null;
  };
} | {
  minter: {};
} | {
  extension: {
    msg: QueryExt;
  };
} | {
  ownership: {};
};
export type QueryExt = {
  total_weight: {
    at_height?: number | null;
  };
} | {
  list_members: {
    limit?: number | null;
    start_after?: string | null;
  };
} | {
  member: {
    addr: string;
    at_height?: number | null;
  };
} | {
  hooks: {};
};
export interface AllNftInfoResponseForQueryExt {
  access: OwnerOfResponse;
  info: NftInfoResponseForQueryExt;
}
export interface OwnerOfResponse {
  approvals: Approval[];
  owner: string;
}
export interface Approval {
  expires: Expiration;
  spender: string;
}
export interface NftInfoResponseForQueryExt {
  extension: QueryExt;
  token_uri?: string | null;
}
export interface OperatorsResponse {
  operators: Approval[];
}
export interface TokensResponse {
  tokens: string[];
}
export interface ApprovalResponse {
  approval: Approval;
}
export interface ApprovalsResponse {
  approvals: Approval[];
}
export interface ContractInfoResponse {
  name: string;
  symbol: string;
}
export type Null = null;
export interface MinterResponse {
  minter?: string | null;
}
export interface NumTokensResponse {
  count: number;
}
export interface OperatorResponse {
  approval: Approval;
}
export interface OwnershipForString {
  owner?: string | null;
  pending_expiry?: Expiration | null;
  pending_owner?: string | null;
}
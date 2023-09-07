import {Admin, Binary, InitialItem, ModuleInstantiateInfo, CosmosMsgForEmpty, BankMsg, Uint128, StakingMsg, DistributionMsg, IbcMsg, Timestamp, Uint64, WasmMsg, GovMsg, VoteOption, Duration, Coin, Empty, IbcTimeout, IbcTimeoutBlock, Cw20ReceiveMsg, Cw721ReceiveMsg, Config, SubDao, PreProposeInfo, MigrateParams, MigrateV1ToV2, MigrationModuleParams, ProposalParams, V1CodeIds, V2CodeIds, Addr, ProposalModuleStatus, ArrayOfProposalModule, ProposalModule, ArrayOfAddr, Expiration, ContractVersion, ArrayOfString, ArrayOfSubDao} from "./types";
export interface InstantiateMsg {
  admin?: string | null;
  automatically_add_cw20s: boolean;
  automatically_add_cw721s: boolean;
  dao_uri?: string | null;
  description: string;
  image_url?: string | null;
  initial_items?: InitialItem[] | null;
  name: string;
  proposal_modules_instantiate_info: ModuleInstantiateInfo[];
  voting_module_instantiate_info: ModuleInstantiateInfo;
}
export type ExecuteMsg = {
  execute_admin_msgs: {
    msgs: CosmosMsgForEmpty[];
  };
} | {
  execute_proposal_hook: {
    msgs: CosmosMsgForEmpty[];
  };
} | {
  pause: {
    duration: Duration;
  };
} | {
  receive: Cw20ReceiveMsg;
} | {
  receive_nft: Cw721ReceiveMsg;
} | {
  remove_item: {
    key: string;
  };
} | {
  set_item: {
    key: string;
    value: string;
  };
} | {
  nominate_admin: {
    admin?: string | null;
  };
} | {
  accept_admin_nomination: {};
} | {
  withdraw_admin_nomination: {};
} | {
  update_config: {
    config: Config;
  };
} | {
  update_cw20_list: {
    to_add: string[];
    to_remove: string[];
  };
} | {
  update_cw721_list: {
    to_add: string[];
    to_remove: string[];
  };
} | {
  update_proposal_modules: {
    to_add: ModuleInstantiateInfo[];
    to_disable: string[];
  };
} | {
  update_voting_module: {
    module: ModuleInstantiateInfo;
  };
} | {
  update_sub_daos: {
    to_add: SubDao[];
    to_remove: string[];
  };
};
export type QueryMsg = {
  admin: {};
} | {
  admin_nomination: {};
} | {
  config: {};
} | {
  cw20_balances: {
    limit?: number | null;
    start_after?: string | null;
  };
} | {
  cw20_token_list: {
    limit?: number | null;
    start_after?: string | null;
  };
} | {
  cw721_token_list: {
    limit?: number | null;
    start_after?: string | null;
  };
} | {
  dump_state: {};
} | {
  get_item: {
    key: string;
  };
} | {
  list_items: {
    limit?: number | null;
    start_after?: string | null;
  };
} | {
  info: {};
} | {
  proposal_modules: {
    limit?: number | null;
    start_after?: string | null;
  };
} | {
  active_proposal_modules: {
    limit?: number | null;
    start_after?: string | null;
  };
} | {
  proposal_module_count: {};
} | {
  pause_info: {};
} | {
  voting_module: {};
} | {
  list_sub_daos: {
    limit?: number | null;
    start_after?: string | null;
  };
} | {
  dao_u_r_i: {};
} | {
  voting_power_at_height: {
    address: string;
    height?: number | null;
  };
} | {
  total_power_at_height: {
    height?: number | null;
  };
};
export type MigrateMsg = {
  from_v1: {
    dao_uri?: string | null;
    params?: MigrateParams | null;
  };
} | {
  from_compatible: {};
};
export interface AdminNominationResponse {
  nomination?: Addr | null;
}
export interface Cw20BalanceResponse {
  addr: Addr;
  balance: Uint128;
}
export interface DaoURIResponse {
  dao_uri?: string | null;
}
export type PauseInfoResponse = {
  paused: {
    expiration: Expiration;
  };
} | {
  unpaused: {};
};
export interface DumpStateResponse {
  active_proposal_module_count: number;
  admin: Addr;
  config: Config;
  pause_info: PauseInfoResponse;
  proposal_modules: ProposalModule[];
  total_proposal_module_count: number;
  version: ContractVersion;
  voting_module: Addr;
}
export interface GetItemResponse {
  item?: string | null;
}
export interface InfoResponse {
  info: ContractVersion;
}
export interface ProposalModuleCountResponse {
  active_proposal_module_count: number;
  total_proposal_module_count: number;
}
export interface TotalPowerAtHeightResponse {
  height: number;
  power: Uint128;
}
export interface VotingPowerAtHeightResponse {
  height: number;
  power: Uint128;
}
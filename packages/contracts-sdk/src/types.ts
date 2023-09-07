export type Uint128 = string;
export type Action = {
  transfer_ownership: {
    expiry?: Expiration | null;
    new_owner: string;
  };
} | "accept_ownership" | "renounce_ownership";
export type Expiration = {
  at_height: number;
} | {
  at_time: Timestamp;
} | {
  never: {};
};
export type Timestamp = Uint64;
export type Uint64 = string;
export type Addr = string;
export interface Config {
  reward_rate: Uint128;
  reward_token: Addr;
  staking_addr: Addr;
}
export interface OwnershipForAddr {
  owner?: Addr | null;
  pending_expiry?: Expiration | null;
  pending_owner?: Addr | null;
}
export type Duration = {
  height: number;
} | {
  time: number;
};
export type Binary = string;
export interface Cw20ReceiveMsg {
  amount: Uint128;
  msg: Binary;
  sender: string;
}
export interface Claim {
  amount: Uint128;
  release_at: Expiration;
}
export type Denom = {
  native: string;
} | {
  cw20: Addr;
};
export type StakeChangedHookMsg = {
  stake: {
    addr: Addr;
    amount: Uint128;
  };
} | {
  unstake: {
    addr: Addr;
    amount: Uint128;
  };
};
export interface RewardConfig {
  period_finish: number;
  reward_duration: number;
  reward_rate: Uint128;
}
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
export interface MetadataExt {
  role?: string | null;
  weight: number;
}
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
export interface Approval {
  expires: Expiration;
  spender: string;
}
export type Null = null;
export interface OwnershipForString {
  owner?: string | null;
  pending_expiry?: Expiration | null;
  pending_owner?: string | null;
}
export type UncheckedDenom = {
  native: string;
} | {
  cw20: string;
};
export type Schedule = "saturating_linear" | {
  piecewise_linear: [number, Uint128][];
};
export type ArrayOfVestingContract = VestingContract[];
export interface VestingContract {
  contract: string;
  instantiator: string;
  recipient: string;
}
export type ActiveThreshold = {
  absolute_count: {
    count: Uint128;
  };
} | {
  percentage: {
    percent: Decimal;
  };
};
export type Decimal = string;
export type TokenInfo = {
  existing: {
    address: string;
    staking_contract: StakingInfo;
  };
} | {
  new: {
    code_id: number;
    decimals: number;
    initial_balances: Cw20Coin[];
    initial_dao_balance?: Uint128 | null;
    label: string;
    marketing?: InstantiateMarketingInfo | null;
    name: string;
    staking_code_id: number;
    symbol: string;
    unstaking_duration?: Duration | null;
  };
};
export type StakingInfo = {
  existing: {
    staking_contract_address: string;
  };
} | {
  new: {
    staking_code_id: number;
    unstaking_duration?: Duration | null;
  };
};
export type Logo = {
  url: string;
} | {
  embedded: EmbeddedLogo;
};
export type EmbeddedLogo = {
  svg: Binary;
} | {
  png: Binary;
};
export interface Cw20Coin {
  address: string;
  amount: Uint128;
}
export interface InstantiateMarketingInfo {
  description?: string | null;
  logo?: Logo | null;
  marketing?: string | null;
  project?: string | null;
}
export interface ContractVersion {
  contract: string;
  version: string;
}
export type Boolean = boolean;
export interface Counterparty {
  address: string;
  promise: TokenInfo;
}
export type CheckedTokenInfo = {
  native: {
    amount: Uint128;
    denom: string;
  };
} | {
  cw20: {
    amount: Uint128;
    contract_addr: Addr;
  };
};
export interface CheckedCounterparty {
  address: Addr;
  promise: CheckedTokenInfo;
  provided: boolean;
}
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
export interface StatusInfo {
  address: string;
  status: boolean;
}
export interface AllowanceInfo {
  address: string;
  allowance: Uint128;
}
export type Admin = {
  address: {
    addr: string;
  };
} | {
  core_module: {};
};
export interface InitialItem {
  key: string;
  value: string;
}
export interface ModuleInstantiateInfo {
  admin?: Admin | null;
  code_id: number;
  label: string;
  msg: Binary;
}
export type CosmosMsgForEmpty = {
  bank: BankMsg;
} | {
  custom: Empty;
} | {
  staking: StakingMsg;
} | {
  distribution: DistributionMsg;
} | {
  stargate: {
    type_url: string;
    value: Binary;
  };
} | {
  ibc: IbcMsg;
} | {
  wasm: WasmMsg;
} | {
  gov: GovMsg;
};
export type BankMsg = {
  send: {
    amount: Coin[];
    to_address: string;
  };
} | {
  burn: {
    amount: Coin[];
  };
};
export type StakingMsg = {
  delegate: {
    amount: Coin;
    validator: string;
  };
} | {
  undelegate: {
    amount: Coin;
    validator: string;
  };
} | {
  redelegate: {
    amount: Coin;
    dst_validator: string;
    src_validator: string;
  };
};
export type DistributionMsg = {
  set_withdraw_address: {
    address: string;
  };
} | {
  withdraw_delegator_reward: {
    validator: string;
  };
};
export type IbcMsg = {
  transfer: {
    amount: Coin;
    channel_id: string;
    timeout: IbcTimeout;
    to_address: string;
  };
} | {
  send_packet: {
    channel_id: string;
    data: Binary;
    timeout: IbcTimeout;
  };
} | {
  close_channel: {
    channel_id: string;
  };
};
export type WasmMsg = {
  execute: {
    contract_addr: string;
    funds: Coin[];
    msg: Binary;
  };
} | {
  instantiate: {
    admin?: string | null;
    code_id: number;
    funds: Coin[];
    label: string;
    msg: Binary;
  };
} | {
  migrate: {
    contract_addr: string;
    msg: Binary;
    new_code_id: number;
  };
} | {
  update_admin: {
    admin: string;
    contract_addr: string;
  };
} | {
  clear_admin: {
    contract_addr: string;
  };
};
export type GovMsg = {
  vote: {
    proposal_id: number;
    vote: VoteOption;
  };
};
export type VoteOption = "yes" | "no" | "abstain" | "no_with_veto";
export interface Empty {}
export interface IbcTimeout {
  block?: IbcTimeoutBlock | null;
  timestamp?: Timestamp | null;
}
export interface IbcTimeoutBlock {
  height: number;
  revision: number;
}
export interface Cw721ReceiveMsg {
  msg: Binary;
  sender: string;
  token_id: string;
}
export interface SubDao {
  addr: string;
  charter?: string | null;
}
export type PreProposeInfo = {
  anyone_may_propose: {};
} | {
  module_may_propose: {
    info: ModuleInstantiateInfo;
  };
};
export interface MigrateParams {
  migrator_code_id: number;
  params: MigrateV1ToV2;
}
export interface MigrateV1ToV2 {
  migration_params: MigrationModuleParams;
  sub_daos: SubDao[];
  v1_code_ids: V1CodeIds;
  v2_code_ids: V2CodeIds;
}
export interface MigrationModuleParams {
  migrate_stake_cw20_manager?: boolean | null;
  proposal_params: [string, ProposalParams][];
}
export interface ProposalParams {
  close_proposal_on_execution_failure: boolean;
  pre_propose_info: PreProposeInfo;
}
export interface V1CodeIds {
  cw20_stake: number;
  cw20_staked_balances_voting: number;
  cw4_voting: number;
  proposal_single: number;
}
export interface V2CodeIds {
  cw20_stake: number;
  cw20_staked_balances_voting: number;
  cw4_voting: number;
  proposal_single: number;
}
export type ProposalModuleStatus = "enabled" | "disabled";
export type ArrayOfProposalModule = ProposalModule[];
export interface ProposalModule {
  address: Addr;
  prefix: string;
  status: ProposalModuleStatus;
}
export type ArrayOfAddr = Addr[];
export type ArrayOfString = string[];
export type ArrayOfSubDao = SubDao[];
export type StakeTrackerQuery = {
  cardinality: {
    t: Timestamp;
  };
} | {
  total_staked: {
    t: Timestamp;
  };
} | {
  validator_staked: {
    t: Timestamp;
    validator: string;
  };
};
export type CheckedDenom = {
  native: string;
} | {
  cw20: Addr;
};
export type Status = ("unfunded" | "funded") | {
  canceled: {
    owner_withdrawable: Uint128;
  };
};
export type Curve = {
  constant: {
    y: Uint128;
  };
} | {
  saturating_linear: SaturatingLinear;
} | {
  piecewise_linear: PiecewiseLinear;
};
export interface Vest {
  claimed: Uint128;
  denom: CheckedDenom;
  description?: string | null;
  recipient: Addr;
  slashed: Uint128;
  start_time: Timestamp;
  status: Status;
  title: string;
  vested: Curve;
}
export interface SaturatingLinear {
  max_x: number;
  max_y: Uint128;
  min_x: number;
  min_y: Uint128;
}
export interface PiecewiseLinear {
  steps: [number, Uint128][];
}
export type NullableUint64 = Uint64 | null;
export type Threshold = {
  absolute_percentage: {
    percentage: PercentageThreshold;
  };
} | {
  threshold_quorum: {
    quorum: PercentageThreshold;
    threshold: PercentageThreshold;
  };
} | {
  absolute_count: {
    threshold: Uint128;
  };
};
export type PercentageThreshold = {
  majority: {};
} | {
  percent: Decimal;
};
export type Vote = "yes" | "no" | "abstain";
export interface SingleChoiceProposeMsg {
  description: string;
  msgs: CosmosMsgForEmpty[];
  proposer?: string | null;
  title: string;
}
export interface VoteInfo {
  power: Uint128;
  rationale?: string | null;
  vote: Vote;
  voter: Addr;
}
export interface SingleChoiceProposal {
  allow_revoting: boolean;
  description: string;
  expiration: Expiration;
  min_voting_period?: Expiration | null;
  msgs: CosmosMsgForEmpty[];
  proposer: Addr;
  start_height: number;
  status: Status;
  threshold: Threshold;
  title: string;
  total_power: Uint128;
  votes: Votes;
}
export interface Votes {
  abstain: Uint128;
  no: Uint128;
  yes: Uint128;
}
export type ProposalCreationPolicy = {
  anyone: {};
} | {
  module: {
    addr: Addr;
  };
};
export type DepositToken = {
  token: {
    denom: UncheckedDenom;
  };
} | {
  voting_module_token: {};
};
export type DepositRefundPolicy = "always" | "only_passed" | "never";
export interface UncheckedDepositInfo {
  amount: Uint128;
  denom: DepositToken;
  refund_policy: DepositRefundPolicy;
}
export interface InstantiateExt {
  approver: string;
}
export type ProposeMessage = {
  propose: {
    description: string;
    msgs: CosmosMsgForEmpty[];
    title: string;
  };
};
export interface CheckedDepositInfo {
  amount: Uint128;
  denom: CheckedDenom;
  refund_policy: DepositRefundPolicy;
}
export interface MultipleChoiceOptions {
  options: MultipleChoiceOption[];
}
export interface MultipleChoiceOption {
  description: string;
  msgs: CosmosMsgForEmpty[];
  title: string;
}
export type ApproverProposeMessage = {
  propose: {
    approval_id: number;
    description: string;
    title: string;
  };
};
export interface Choice {
  msgs: CosmosMsgForEmpty[];
}
export interface UncheckedConfig {
  close_proposals_on_execution_failure: boolean;
  min_voting_period?: Duration | null;
  quorum: PercentageThreshold;
  voting_period: Duration;
}
export type Cell = "zero" | {
  positive: Uint128;
} | {
  negative: Uint128;
};
export type Winner = ("never" | "none") | {
  some: number;
} | {
  undisputed: number;
};
export interface Proposal {
  choices: Choice[];
  close_on_execution_failure: boolean;
  id: number;
  last_status: Status;
  min_voting_period?: Expiration | null;
  proposer: Addr;
  quorum: PercentageThreshold;
  total_power: Uint128;
}
export interface Tally {
  expiration: Expiration;
  m: M;
  power_outstanding: Uint128;
  start_height: number;
  winner: Winner;
}
export interface M {
  cells: Cell[];
  n: number;
}
export type VotingStrategy = {
  single_choice: {
    quorum: PercentageThreshold;
  };
};
export interface MultipleChoiceVote {
  option_id: number;
}
export type MultipleChoiceOptionType = "standard" | "none";
export interface MultipleChoiceProposal {
  allow_revoting: boolean;
  choices: CheckedMultipleChoiceOption[];
  description: string;
  expiration: Expiration;
  min_voting_period?: Expiration | null;
  proposer: Addr;
  start_height: number;
  status: Status;
  title: string;
  total_power: Uint128;
  votes: MultipleChoiceVotes;
  voting_strategy: VotingStrategy;
}
export interface CheckedMultipleChoiceOption {
  description: string;
  index: number;
  msgs: CosmosMsgForEmpty[];
  option_type: MultipleChoiceOptionType;
  title: string;
  vote_count: Uint128;
}
export interface MultipleChoiceVotes {
  vote_weights: Uint128[];
}
export type GroupContract = {
  existing: {
    address: string;
  };
} | {
  new: {
    cw4_group_code_id: number;
    initial_members: Member[];
  };
};
export interface Member {
  addr: string;
  weight: number;
}
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
export interface NftMintMsg {
  extension: MetadataExt;
  owner: string;
  token_id: string;
  token_uri?: string | null;
}
export interface NftClaim {
  release_at: Expiration;
  token_id: string;
}
export interface NewTokenInfo {
  initial_balances: InitialBalance[];
  initial_dao_balance?: Uint128 | null;
  metadata?: NewDenomMetadata | null;
  subdenom: string;
}
export interface InitialBalance {
  address: string;
  amount: Uint128;
}
export interface NewDenomMetadata {
  additional_denom_units?: DenomUnit[] | null;
  description: string;
  display: string;
  name: string;
  symbol: string;
}
export { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
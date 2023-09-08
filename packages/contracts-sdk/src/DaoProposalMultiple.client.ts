/**
* This file was automatically generated by @oraichain/ts-codegen@0.35.8.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @oraichain/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import {Binary, Decimal, CosmosMsgForEmpty, BankMsg, Uint128, StakingMsg, DistributionMsg, IbcMsg, Timestamp, Uint64, WasmMsg, GovMsg, VoteOption, Coin, Empty, IbcTimeout, IbcTimeoutBlock, Addr} from "./types";
import {Duration, PreProposeInfo, Admin, VotingStrategy, PercentageThreshold, InstantiateMsg, ModuleInstantiateInfo, ExecuteMsg, MultipleChoiceOptions, MultipleChoiceOption, MultipleChoiceVote, QueryMsg, MigrateMsg, Config, VoteResponse, VoteInfo, InfoResponse, ContractVersion, MultipleChoiceOptionType, Expiration, Status, ProposalListResponse, ProposalResponse, MultipleChoiceProposal, CheckedMultipleChoiceOption, MultipleChoiceVotes, VoteListResponse, ProposalCreationPolicy, HooksResponse} from "./DaoProposalMultiple.types";
export interface DaoProposalMultipleReadOnlyInterface {
  contractAddress: string;
  config: () => Promise<Config>;
  proposal: ({
    proposalId
  }: {
    proposalId: number;
  }) => Promise<ProposalResponse>;
  listProposals: ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: number;
  }) => Promise<ProposalListResponse>;
  reverseProposals: ({
    limit,
    startBefore
  }: {
    limit?: number;
    startBefore?: number;
  }) => Promise<ProposalListResponse>;
  getVote: ({
    proposalId,
    voter
  }: {
    proposalId: number;
    voter: string;
  }) => Promise<VoteResponse>;
  listVotes: ({
    limit,
    proposalId,
    startAfter
  }: {
    limit?: number;
    proposalId: number;
    startAfter?: string;
  }) => Promise<VoteListResponse>;
  proposalCount: () => Promise<Uint64>;
  proposalCreationPolicy: () => Promise<ProposalCreationPolicy>;
  proposalHooks: () => Promise<HooksResponse>;
  voteHooks: () => Promise<HooksResponse>;
  dao: () => Promise<Addr>;
  info: () => Promise<InfoResponse>;
  nextProposalId: () => Promise<Uint64>;
}
export class DaoProposalMultipleQueryClient implements DaoProposalMultipleReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.config = this.config.bind(this);
    this.proposal = this.proposal.bind(this);
    this.listProposals = this.listProposals.bind(this);
    this.reverseProposals = this.reverseProposals.bind(this);
    this.getVote = this.getVote.bind(this);
    this.listVotes = this.listVotes.bind(this);
    this.proposalCount = this.proposalCount.bind(this);
    this.proposalCreationPolicy = this.proposalCreationPolicy.bind(this);
    this.proposalHooks = this.proposalHooks.bind(this);
    this.voteHooks = this.voteHooks.bind(this);
    this.dao = this.dao.bind(this);
    this.info = this.info.bind(this);
    this.nextProposalId = this.nextProposalId.bind(this);
  }

  config = async (): Promise<Config> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {}
    });
  };
  proposal = async ({
    proposalId
  }: {
    proposalId: number;
  }): Promise<ProposalResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      proposal: {
        proposal_id: proposalId
      }
    });
  };
  listProposals = async ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: number;
  }): Promise<ProposalListResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      list_proposals: {
        limit,
        start_after: startAfter
      }
    });
  };
  reverseProposals = async ({
    limit,
    startBefore
  }: {
    limit?: number;
    startBefore?: number;
  }): Promise<ProposalListResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      reverse_proposals: {
        limit,
        start_before: startBefore
      }
    });
  };
  getVote = async ({
    proposalId,
    voter
  }: {
    proposalId: number;
    voter: string;
  }): Promise<VoteResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      get_vote: {
        proposal_id: proposalId,
        voter
      }
    });
  };
  listVotes = async ({
    limit,
    proposalId,
    startAfter
  }: {
    limit?: number;
    proposalId: number;
    startAfter?: string;
  }): Promise<VoteListResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      list_votes: {
        limit,
        proposal_id: proposalId,
        start_after: startAfter
      }
    });
  };
  proposalCount = async (): Promise<Uint64> => {
    return this.client.queryContractSmart(this.contractAddress, {
      proposal_count: {}
    });
  };
  proposalCreationPolicy = async (): Promise<ProposalCreationPolicy> => {
    return this.client.queryContractSmart(this.contractAddress, {
      proposal_creation_policy: {}
    });
  };
  proposalHooks = async (): Promise<HooksResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      proposal_hooks: {}
    });
  };
  voteHooks = async (): Promise<HooksResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      vote_hooks: {}
    });
  };
  dao = async (): Promise<Addr> => {
    return this.client.queryContractSmart(this.contractAddress, {
      dao: {}
    });
  };
  info = async (): Promise<InfoResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      info: {}
    });
  };
  nextProposalId = async (): Promise<Uint64> => {
    return this.client.queryContractSmart(this.contractAddress, {
      next_proposal_id: {}
    });
  };
}
export interface DaoProposalMultipleInterface extends DaoProposalMultipleReadOnlyInterface {
  contractAddress: string;
  sender: string;
  propose: ({
    choices,
    description,
    proposer,
    title
  }: {
    choices: MultipleChoiceOptions;
    description: string;
    proposer?: string;
    title: string;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  vote: ({
    proposalId,
    rationale,
    vote
  }: {
    proposalId: number;
    rationale?: string;
    vote: MultipleChoiceVote;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  execute: ({
    proposalId
  }: {
    proposalId: number;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  close: ({
    proposalId
  }: {
    proposalId: number;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  updateConfig: ({
    allowRevoting,
    closeProposalOnExecutionFailure,
    dao,
    maxVotingPeriod,
    minVotingPeriod,
    onlyMembersExecute,
    votingStrategy
  }: {
    allowRevoting: boolean;
    closeProposalOnExecutionFailure: boolean;
    dao: string;
    maxVotingPeriod: Duration;
    minVotingPeriod?: Duration;
    onlyMembersExecute: boolean;
    votingStrategy: VotingStrategy;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  updateRationale: ({
    proposalId,
    rationale
  }: {
    proposalId: number;
    rationale?: string;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  updatePreProposeInfo: ({
    info
  }: {
    info: PreProposeInfo;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  addProposalHook: ({
    address
  }: {
    address: string;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  removeProposalHook: ({
    address
  }: {
    address: string;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  addVoteHook: ({
    address
  }: {
    address: string;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  removeVoteHook: ({
    address
  }: {
    address: string;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
export class DaoProposalMultipleClient extends DaoProposalMultipleQueryClient implements DaoProposalMultipleInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.propose = this.propose.bind(this);
    this.vote = this.vote.bind(this);
    this.execute = this.execute.bind(this);
    this.close = this.close.bind(this);
    this.updateConfig = this.updateConfig.bind(this);
    this.updateRationale = this.updateRationale.bind(this);
    this.updatePreProposeInfo = this.updatePreProposeInfo.bind(this);
    this.addProposalHook = this.addProposalHook.bind(this);
    this.removeProposalHook = this.removeProposalHook.bind(this);
    this.addVoteHook = this.addVoteHook.bind(this);
    this.removeVoteHook = this.removeVoteHook.bind(this);
  }

  propose = async ({
    choices,
    description,
    proposer,
    title
  }: {
    choices: MultipleChoiceOptions;
    description: string;
    proposer?: string;
    title: string;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      propose: {
        choices,
        description,
        proposer,
        title
      }
    }, _fee, _memo, _funds);
  };
  vote = async ({
    proposalId,
    rationale,
    vote
  }: {
    proposalId: number;
    rationale?: string;
    vote: MultipleChoiceVote;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      vote: {
        proposal_id: proposalId,
        rationale,
        vote
      }
    }, _fee, _memo, _funds);
  };
  execute = async ({
    proposalId
  }: {
    proposalId: number;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      execute: {
        proposal_id: proposalId
      }
    }, _fee, _memo, _funds);
  };
  close = async ({
    proposalId
  }: {
    proposalId: number;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      close: {
        proposal_id: proposalId
      }
    }, _fee, _memo, _funds);
  };
  updateConfig = async ({
    allowRevoting,
    closeProposalOnExecutionFailure,
    dao,
    maxVotingPeriod,
    minVotingPeriod,
    onlyMembersExecute,
    votingStrategy
  }: {
    allowRevoting: boolean;
    closeProposalOnExecutionFailure: boolean;
    dao: string;
    maxVotingPeriod: Duration;
    minVotingPeriod?: Duration;
    onlyMembersExecute: boolean;
    votingStrategy: VotingStrategy;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_config: {
        allow_revoting: allowRevoting,
        close_proposal_on_execution_failure: closeProposalOnExecutionFailure,
        dao,
        max_voting_period: maxVotingPeriod,
        min_voting_period: minVotingPeriod,
        only_members_execute: onlyMembersExecute,
        voting_strategy: votingStrategy
      }
    }, _fee, _memo, _funds);
  };
  updateRationale = async ({
    proposalId,
    rationale
  }: {
    proposalId: number;
    rationale?: string;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_rationale: {
        proposal_id: proposalId,
        rationale
      }
    }, _fee, _memo, _funds);
  };
  updatePreProposeInfo = async ({
    info
  }: {
    info: PreProposeInfo;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_pre_propose_info: {
        info
      }
    }, _fee, _memo, _funds);
  };
  addProposalHook = async ({
    address
  }: {
    address: string;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      add_proposal_hook: {
        address
      }
    }, _fee, _memo, _funds);
  };
  removeProposalHook = async ({
    address
  }: {
    address: string;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      remove_proposal_hook: {
        address
      }
    }, _fee, _memo, _funds);
  };
  addVoteHook = async ({
    address
  }: {
    address: string;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      add_vote_hook: {
        address
      }
    }, _fee, _memo, _funds);
  };
  removeVoteHook = async ({
    address
  }: {
    address: string;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      remove_vote_hook: {
        address
      }
    }, _fee, _memo, _funds);
  };
}
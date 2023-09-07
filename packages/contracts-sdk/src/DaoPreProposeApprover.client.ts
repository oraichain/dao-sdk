/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.30.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import {ApproverProposeMessage, Uint128, DepositToken, UncheckedDenom, DepositRefundPolicy, Status, UncheckedDepositInfo, Empty, QueryExt, CheckedDenom, Addr, CheckedDepositInfo, Binary} from "./types";
import {InstantiateMsg, ExecuteMsg, QueryMsg, Config, DepositInfoResponse, HooksResponse} from "./DaoPreProposeApprover.types";
export interface DaoPreProposeApproverReadOnlyInterface {
  contractAddress: string;
  proposalModule: () => Promise<Addr>;
  dao: () => Promise<Addr>;
  config: () => Promise<Config>;
  depositInfo: ({
    proposalId
  }: {
    proposalId: number;
  }) => Promise<DepositInfoResponse>;
  proposalSubmittedHooks: () => Promise<HooksResponse>;
  queryExtension: ({
    msg
  }: {
    msg: QueryExt;
  }) => Promise<Binary>;
}
export class DaoPreProposeApproverQueryClient implements DaoPreProposeApproverReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.proposalModule = this.proposalModule.bind(this);
    this.dao = this.dao.bind(this);
    this.config = this.config.bind(this);
    this.depositInfo = this.depositInfo.bind(this);
    this.proposalSubmittedHooks = this.proposalSubmittedHooks.bind(this);
    this.queryExtension = this.queryExtension.bind(this);
  }

  proposalModule = async (): Promise<Addr> => {
    return this.client.queryContractSmart(this.contractAddress, {
      proposal_module: {}
    });
  };
  dao = async (): Promise<Addr> => {
    return this.client.queryContractSmart(this.contractAddress, {
      dao: {}
    });
  };
  config = async (): Promise<Config> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {}
    });
  };
  depositInfo = async ({
    proposalId
  }: {
    proposalId: number;
  }): Promise<DepositInfoResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      deposit_info: {
        proposal_id: proposalId
      }
    });
  };
  proposalSubmittedHooks = async (): Promise<HooksResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      proposal_submitted_hooks: {}
    });
  };
  queryExtension = async ({
    msg
  }: {
    msg: QueryExt;
  }): Promise<Binary> => {
    return this.client.queryContractSmart(this.contractAddress, {
      query_extension: {
        msg
      }
    });
  };
}
export interface DaoPreProposeApproverInterface extends DaoPreProposeApproverReadOnlyInterface {
  contractAddress: string;
  sender: string;
  propose: ({
    msg
  }: {
    msg: ApproverProposeMessage;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  updateConfig: ({
    depositInfo,
    openProposalSubmission
  }: {
    depositInfo?: UncheckedDepositInfo;
    openProposalSubmission: boolean;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  withdraw: ({
    denom
  }: {
    denom?: UncheckedDenom;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  extension: ({
    msg
  }: {
    msg: Empty;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  addProposalSubmittedHook: ({
    address
  }: {
    address: string;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  removeProposalSubmittedHook: ({
    address
  }: {
    address: string;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  proposalCompletedHook: ({
    newStatus,
    proposalId
  }: {
    newStatus: Status;
    proposalId: number;
  }, _fee?: number | StdFee | "auto", _memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
export class DaoPreProposeApproverClient extends DaoPreProposeApproverQueryClient implements DaoPreProposeApproverInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.propose = this.propose.bind(this);
    this.updateConfig = this.updateConfig.bind(this);
    this.withdraw = this.withdraw.bind(this);
    this.extension = this.extension.bind(this);
    this.addProposalSubmittedHook = this.addProposalSubmittedHook.bind(this);
    this.removeProposalSubmittedHook = this.removeProposalSubmittedHook.bind(this);
    this.proposalCompletedHook = this.proposalCompletedHook.bind(this);
  }

  propose = async ({
    msg
  }: {
    msg: ApproverProposeMessage;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      propose: {
        msg
      }
    }, _fee, _memo, _funds);
  };
  updateConfig = async ({
    depositInfo,
    openProposalSubmission
  }: {
    depositInfo?: UncheckedDepositInfo;
    openProposalSubmission: boolean;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_config: {
        deposit_info: depositInfo,
        open_proposal_submission: openProposalSubmission
      }
    }, _fee, _memo, _funds);
  };
  withdraw = async ({
    denom
  }: {
    denom?: UncheckedDenom;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      withdraw: {
        denom
      }
    }, _fee, _memo, _funds);
  };
  extension = async ({
    msg
  }: {
    msg: Empty;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      extension: {
        msg
      }
    }, _fee, _memo, _funds);
  };
  addProposalSubmittedHook = async ({
    address
  }: {
    address: string;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      add_proposal_submitted_hook: {
        address
      }
    }, _fee, _memo, _funds);
  };
  removeProposalSubmittedHook = async ({
    address
  }: {
    address: string;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      remove_proposal_submitted_hook: {
        address
      }
    }, _fee, _memo, _funds);
  };
  proposalCompletedHook = async ({
    newStatus,
    proposalId
  }: {
    newStatus: Status;
    proposalId: number;
  }, _fee: number | StdFee | "auto" = "auto", _memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      proposal_completed_hook: {
        new_status: newStatus,
        proposal_id: proposalId
      }
    }, _fee, _memo, _funds);
  };
}
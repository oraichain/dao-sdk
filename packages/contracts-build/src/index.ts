import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate';
import { readFileSync } from 'fs';
import path from 'path';

export type ContractName =
  | 'cw-admin-factory'
  | 'cw-vesting'
  | 'dao-dao-core'
  | 'dao-pre-propose-single'
  | 'dao-voting-cw4'
  | 'cw-fund-distributor'
  | 'cw20-stake-external-rewards'
  | 'dao-migrator'
  | 'dao-proposal-condorcet'
  | 'dao-voting-cw721-roles'
  | 'cw-payroll-factory'
  | 'cw20-stake-reward-distributor'
  | 'dao-pre-propose-approval-single'
  | 'dao-proposal-multiple'
  | 'dao-voting-cw721-staked'
  | 'cw-token-swap'
  | 'cw20-stake'
  | 'dao-pre-propose-approver'
  | 'dao-proposal-single'
  | 'dao-voting-native-staked'
  | 'cw-tokenfactory-issuer'
  | 'cw721-roles'
  | 'dao-pre-propose-multiple'
  | 'dao-voting-cw20-staked'
  | 'dao-voting-token-factory-staked';

const contractDir = path.join(path.dirname(module.filename), '..', 'data');

export const getContractDir = (name: ContractName = 'dao-dao-core') => {
  return path.join(contractDir, name + '.wasm');
};

export const deployContract = async <T>(client: SigningCosmWasmClient, senderAddress: string, msg?: T, contractName?: ContractName, label?: string) => {
  // upload and instantiate the contract
  const wasmBytecode = readFileSync(getContractDir(contractName));
  const uploadRes = await client.upload(senderAddress, wasmBytecode, 'auto');
  const initRes = await client.instantiate(senderAddress, uploadRes.codeId, msg ?? {}, label ?? contractName, 'auto');
  return { ...uploadRes, ...initRes };
};

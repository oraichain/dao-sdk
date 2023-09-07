import {TokenInfo, Uint128, Counterparty, Binary, Cw20ReceiveMsg, Addr, CheckedTokenInfo, CheckedCounterparty} from "./types";
export interface InstantiateMsg {
  counterparty_one: Counterparty;
  counterparty_two: Counterparty;
}
export type ExecuteMsg = {
  receive: Cw20ReceiveMsg;
} | {
  fund: {};
} | {
  withdraw: {};
};
export type QueryMsg = {
  status: {};
};
export interface MigrateMsg {}
export interface StatusResponse {
  counterparty_one: CheckedCounterparty;
  counterparty_two: CheckedCounterparty;
}
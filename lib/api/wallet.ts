import { todo, type Paged } from './client';
import type {
  DepositRequest,
  FundsConfig,
  HistoryQuery,
  LedgerRow,
  PaymentMethod,
  TransactionsQuery,
  WalletBalance,
  WithdrawRequest,
} from './types';

// TODO: implement each call. All wallet routes are AUTH.

export const balance = () => todo<WalletBalance>('GET /api/wallet/balance');
/** Build deposit/withdraw forms from this — don't hard-code methods or limits. */
export const fundsConfig = () => todo<FundsConfig>('GET /api/wallet/funds-config');
export const paymentMethods = () => todo<PaymentMethod[]>('GET /api/payment/methods');

export const requestDeposit = (input: DepositRequest) => todo<LedgerRow>('POST /api/wallet/deposit/request', input);
export const requestWithdrawal = (input: WithdrawRequest) => todo<LedgerRow>('POST /api/wallet/withdraw/request', input);

export const deposits = (query: HistoryQuery = {}) => todo<Paged<LedgerRow>>('GET /api/wallet/deposits', query);
export const withdrawals = (query: HistoryQuery = {}) => todo<Paged<LedgerRow>>('GET /api/wallet/withdrawals', query);
export const transactions = (query: TransactionsQuery = {}) => todo<Paged<LedgerRow>>('GET /api/wallet/transactions', query);

// referral network
export const myMaster = () => todo<Record<string, unknown>>('GET /api/wallet/my-master');
export const masterDeposits = (query: { page?: number; limit?: number } = {}) => todo<Paged<LedgerRow>>('GET /api/wallet/master-deposits', query);

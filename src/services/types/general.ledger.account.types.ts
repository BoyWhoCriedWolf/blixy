import { GeneralOption } from "types/ui-types";
import { Document } from "./document.types";

export interface GeneralLedgerAccount {
  id?: string;
  user_id?: string;
  code?: string;
  description?: string;
  type?: GeneralLedgerAccountType;
  deductible?: number;
}

export interface Balance {
  number: number;
  description: string;
  open_debit: number;
  open_credit: number;
  debit: number;
  credit: number;
  debit_balance: number;
  credit_balance: number;
}

export enum GeneralLedgerAccountType {
  Revenue = "Revenue",
  Costs = "Costs",
  Taxes = "Taxes",
  FinancialIncomeExpenses = "Financial income and expenses",

  // assets
  Assets = "Assets",
  Liabilities = "Liabilities",
}

export const GENERAL_LEDGER_ACCOUNT_TYPE_ORDER = {
  [GeneralLedgerAccountType.Revenue]: 1,
  [GeneralLedgerAccountType.Costs]: 2,
  [GeneralLedgerAccountType.Taxes]: 3,
  [GeneralLedgerAccountType.FinancialIncomeExpenses]: 4,
  [GeneralLedgerAccountType.Assets]: 5,
  [GeneralLedgerAccountType.Liabilities]: 6,
};

export const GENERAL_LEDGER_ACCOUNT_TYPES: Array<GeneralOption> = [
  { name: "Revenue", value: GeneralLedgerAccountType.Revenue },
  { name: "Costs", value: GeneralLedgerAccountType.Costs },
  {
    name: "Financial income and expenses",
    value: GeneralLedgerAccountType.FinancialIncomeExpenses,
  },
  { name: "Taxes", value: GeneralLedgerAccountType.Taxes },

  // assets
  { name: "Assets", value: GeneralLedgerAccountType.Assets },
  { name: "Liabilities", value: GeneralLedgerAccountType.Liabilities },
];

export interface GeneralLedgerAccountDocumentTotal {
  [account_type: string]: {
    total_amount?: number;
    accounts?: Array<GeneralLedgerAccount & { documents?: Array<Document> }>;
  };
}

export const enum AccountTransactionType {
  AllTransactions = "All Transactions",
  BalanceSheetAccounts = "Balance sheet Accounts", // Assets, Liability
  ProfitLossAccounts = "Profit Loss Accounts", // transactions
}

export const ACCOUNT_TRANSACTION_TYPES: Array<GeneralOption> = [
  { value: AccountTransactionType.AllTransactions, name: "All Transactions" },
  {
    value: AccountTransactionType.BalanceSheetAccounts,
    name: "Balance sheet Accounts",
  }, // Assets, Liability
  {
    value: AccountTransactionType.ProfitLossAccounts,
    name: "Profit Loss Accounts",
  }, // transactions
];

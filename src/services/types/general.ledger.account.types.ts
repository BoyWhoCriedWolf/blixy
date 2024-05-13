import { GeneralOption } from "types/ui-types";

export interface GeneralLedgerAccount {
  id?: string;
  user_id?: string;
  code?: string;
  description?: string;
  type?: GeneralLedgerAccountType;
  deductible?: number;
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

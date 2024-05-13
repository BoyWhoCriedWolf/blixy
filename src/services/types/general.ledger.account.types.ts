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
}

export const GENERAL_LEDGER_ACCOUNT_TYPES: Array<GeneralOption> = [
  { name: "Revenue", value: GeneralLedgerAccountType.Revenue },
  { name: "Costs", value: GeneralLedgerAccountType.Costs },
  {
    name: "Financial income and expenses",
    value: GeneralLedgerAccountType.FinancialIncomeExpenses,
  },
  { name: "Taxes", value: GeneralLedgerAccountType.Taxes },
];

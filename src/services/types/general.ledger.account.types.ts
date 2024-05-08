import { GeneralOption } from "types/ui-types";

export interface GeneralLedgerAccount {
  id?: string;
  user_id?: string;
  description?: string;
  type?: GeneralLedgerAccountType;
}

export enum GeneralLedgerAccountType {
  Active = "Active",
  InActive = "InActive",
}

export const GENERAL_LEDGER_ACCOUNT_TYPES: Array<GeneralOption> = [
  { name: "Active", value: GeneralLedgerAccountType.Active },
  { name: "InActive", value: GeneralLedgerAccountType.InActive },
];

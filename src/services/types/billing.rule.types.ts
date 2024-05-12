import { GeneralLedgerAccount } from "./general.ledger.account.types";

export interface BillingRule {
  id?: string;
  description?: string;
  general_ledger_account_id?: string; // uuid
  general_ledger_account?: GeneralLedgerAccount;
  document_id?: string; // uuid
  amount_incl_vat?: number;
  amount_excl_vat?: number;
}

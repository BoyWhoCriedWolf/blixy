import { Currency } from "types/ui-types";
import { DocumentType } from "./document.types";

export interface StandardValue {
  id?: string;
  // input
  document_type?: DocumentType;
  relation?: string;
  OCR?: string;
  amount?: string | number;
  valuta?: Currency;

  //   output
  general_ledger_account?: string;
  btw_code?: string;
  payment_method?: string;
  linked_ubl_rules?: string;
  processing?: string;
}

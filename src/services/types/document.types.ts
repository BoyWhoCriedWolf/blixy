import { GeneralOption } from "types/ui-types";
import { Contact } from "./contact.types";
import { PaymentMethod } from "./payment.method.types";
import { Tax } from "./tax.types";
import { BTWType } from "./btw.type.types";
import { GeneralLedgerAccount } from "./general.ledger.account.types";

export interface Document {
  id: string;
  user_id: string;
  filename: string;
  file_path: string;
  file_size?: number;
  text_content?: string;
  description?: string;
  delivered?: boolean;
  doc_type?: DocumentType;
  topic?: string;
  vendor?: string;
  status?: DocumentStatus;
  blocked_by?: string;
  idr_status?: string;
  rcg?: string;
  information?: string;

  // payment method
  payment_method?: PaymentMethod;
  payment_account?: string;
  payment_bic_code?: string;
  payment_reference?: string;
  payment_term_time?: string;

  // invoice details
  tax_id?: string;
  tax?: Tax;
  document_date?: string;
  amount?: number;
  vat_amount?: number;
  vat_amount_currency?: string;
  btw_type?: BTWType;
  general_ledger_account_id?: string;
  general_ledger_account?: GeneralLedgerAccount;
  subject?: string;

  // Approve
  approved?: boolean;

  // address
  contact?: Contact;

  created_at: string;
  updated_at: string;
}

export enum DocumentType {
  PurchaseInvoice = "Purchase Invoice",
  SalesInvoice = "Sales Invoice",
  BankStatement = "Bank Statement",
  Standard = "Standard",
}

export const DOCUMENT_TYPES: Array<GeneralOption> = [
  { name: "Purchase Invoice", value: DocumentType.PurchaseInvoice },
  { name: "Sales Invoice", value: DocumentType.SalesInvoice },
  { name: "Bank Statement", value: DocumentType.BankStatement },
  { name: "Standard", value: DocumentType.Standard },
];

export enum DocumentStatus {
  OPEN = "Open",
}

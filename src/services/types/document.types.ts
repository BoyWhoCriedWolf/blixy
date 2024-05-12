import { GeneralOption } from "types/ui-types";
import { Contact } from "./contact.types";
import { PaymentMethod } from "./payment.method.types";

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

  payment_method?: PaymentMethod;
  payment_account?: string;
  payment_bic_code?: string;
  payment_reference?: string;
  payment_term_time?: string;

  // address
  contact: Contact;

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

import { GeneralOption } from "types/ui-types";

export interface Document {
  id: string;
  user_id: string;
  filename: string;
  file_path: string;
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
  created_at: string;
  updated_at: string;
}

export enum DocumentType {
  PURCHASE_INVOICE = "PURCHASE_INVOICE",
  SALES_INVOICE = "SALES_INVOICE",
  BANK_STATEMENT = "BANK_STATEMENT",
  STANDARD = "STANDARD",
}

export const DOCUMENT_TYPES: Array<GeneralOption> = [
  { name: "Purchase Invoice", value: DocumentType.PURCHASE_INVOICE },
  { name: "Sales Invoice", value: DocumentType.SALES_INVOICE },
  { name: "Bank Statement", value: DocumentType.BANK_STATEMENT },
  { name: "Standard", value: DocumentType.STANDARD },
];

export enum DocumentStatus {
  OPEN = "Open",
}

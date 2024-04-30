export interface Document {
  id: string;
  user_id: string;
  filename: string;
  file_path: string;
  text_content?: string;
  description?: string;
  delivered?: boolean;
  doc_type?: string;
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

export enum DocumentStatus {
  OPEN = "Open",
}

export interface Tax {
  id?: string;
  type?: string;
  description?: string;
  btw_type_description?: string;
  btw_type?: string;
  btw_target?: number;
  active?: boolean;
}

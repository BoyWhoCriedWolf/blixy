export interface Tax {
  id?: string;
  type?: string;
  description?: string;
  btw_type_description?: string;
  btw_type?: number;
  btw_target?: number;
  active?: string;
  valid_from?: string;
}

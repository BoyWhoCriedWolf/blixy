import { BTWType } from "./btw.type.types";

export interface Tax {
  id?: string;
  type?: string;
  description?: string;
  btw_type_description?: string;
  btw_type?: BTWType;
  btw_target?: number;
  active?: boolean;
}

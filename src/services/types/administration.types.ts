import { GeneralOption } from "types/ui-types";
import { User } from "./user.types";

export interface Administration {
  id?: string;

  user_id?: string;
  user?: User;

  name?: string;
  contract_date?: string;
  contract_person_id?: string;
  contract_person_name?: string;
  business_form?: string;
  domain?: string;
  peppol?: boolean;
}

export enum BusinessForm {
  Eenmanszaak = "Eenmanszaak",
  VOF = "VOF",
  BeslotenVennotschap = "Besloten Vennotschap",
  Stichting = "Stichting",
}

export const BUSINESS_FORMS: Array<GeneralOption> = [
  { value: BusinessForm.Eenmanszaak, name: "Eenmanszaak" },
  { value: BusinessForm.VOF, name: "VOF (vennootschap onder firma)" },
  { value: BusinessForm.BeslotenVennotschap, name: "Besloten Vennotschap" },
  { value: BusinessForm.Stichting, name: "Stichting" },
];

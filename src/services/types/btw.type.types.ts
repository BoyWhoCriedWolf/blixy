import { GeneralOption } from "types/ui-types";

export enum BTWType {
  BTW0 = "BTW 0%",
  BTW9 = "BTW 9%",
  BTW21 = "BTW 21%",
  InputTax = "Input tax",
  NotDeductible = "Not deductible",
  VATShifted = "VAT shifted",
}

export const BTW_TYPES: Array<GeneralOption> = [
  { value: BTWType.BTW0, name: "BTW 0%" },
  { value: BTWType.BTW9, name: "BTW 9%" },
  { value: BTWType.BTW21, name: "BTW 21%" },
  { value: BTWType.InputTax, name: "Input tax" },
  { value: BTWType.NotDeductible, name: "Not deductible" },
  { value: BTWType.VATShifted, name: "VAT shifted" },
];

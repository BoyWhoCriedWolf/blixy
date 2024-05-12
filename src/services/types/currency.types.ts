import { GeneralOption } from "types/ui-types";

export enum CurrencyType {
  EUR = "EUR",
  USD = "USD",
  GBP = "GBP",
}

export const CURRENCY_TYPES: Array<GeneralOption> = [
  { value: CurrencyType.EUR, name: "EUR" },
  { value: CurrencyType.USD, name: "USD" },
  { value: CurrencyType.GBP, name: "GBP" },
];

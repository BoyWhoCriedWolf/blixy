import { GeneralOption } from "types/ui-types";

export enum PaymentMethod {
  BankTransfer = "Bank transfer",
  Pin = "Pin",
  Collection = "Collection",
  Ideal = "Ideal",
  CreditCard = "Credit Card",
  Cash = "Cash",
}

export const PAYMENT_METHODS: Array<GeneralOption> = [
  { name: "Bank transfer", value: PaymentMethod.BankTransfer },
  { name: "Pin", value: PaymentMethod.Pin },
  { name: "Collection", value: PaymentMethod.Collection },
  { name: "Ideal", value: PaymentMethod.Ideal },
  { name: "Credit Card", value: PaymentMethod.CreditCard },
  { name: "Cash", value: PaymentMethod.Cash },
];

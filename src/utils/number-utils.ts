import { CurrencyType } from "services/types/currency.types";

export const percentFormatter = (p?: number | string, decimalDigit = 2) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "percent",
    minimumFractionDigits: decimalDigit,
  });

  return formatter.format(Number(p ?? 0) / 100);
};

export const currencyFormatter = (
  p?: number | string,
  currency?: CurrencyType
) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency:
      currency === CurrencyType.USD
        ? "USD"
        : currency === CurrencyType.GBP
        ? "GBP"
        : "EUR",
    minimumFractionDigits: 2,
  });

  return formatter.format(Number(p ?? 0) / 100);
};

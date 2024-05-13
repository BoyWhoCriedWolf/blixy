export const percentFormatter = (p?: number | string) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "percent",
    minimumFractionDigits: 2,
  });

  return formatter.format(Number(p ?? 0) / 100);
};

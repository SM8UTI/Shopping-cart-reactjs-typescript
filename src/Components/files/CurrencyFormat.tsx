const CURRENCY_FORMAT = new Intl.NumberFormat("en-US", {
  currency: "INR",
  style: "currency",
});

export const formatCurrency = (amount: number) => {
  return CURRENCY_FORMAT.format(amount);
};

export const formatCurrency = (amount: number, currency = "en-US"): string => {
  return amount.toLocaleString(currency);
};

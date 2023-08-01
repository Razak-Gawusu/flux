export function digitToCurrencyString(amount, fractionalDigit) {
  let formatting_options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: fractionalDigit,
  };
  let dollarString = new Intl.NumberFormat('en-US', formatting_options);
  if (Number.isNaN(amount)) {
    return dollarString.format(0);
  }
  return dollarString.format(amount);
}

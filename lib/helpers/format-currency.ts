export function formatCurrency(price: number) {
  return Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price)
}

export function formatCurrencyShort(price: number) {
  return Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(price)
}
export function formatAUD(val: number, decimals = 0): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(val);
}

export function formatPercent(val: number, decimals = 2): string {
  return `${val.toFixed(decimals)}%`;
}

export function parseNumber(value: number | ''): number {
  return Number(value) || 0;
}

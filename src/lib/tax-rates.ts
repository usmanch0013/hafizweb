/** Australian resident individual income tax rates 2026-27 */
export function calculateIncomeTax(taxableIncome: number): number {
  if (taxableIncome <= 18200) return 0;
  if (taxableIncome <= 45000) return (taxableIncome - 18200) * 0.16;
  if (taxableIncome <= 135000) return 4288 + (taxableIncome - 45000) * 0.30;
  if (taxableIncome <= 190000) return 35100 + (taxableIncome - 135000) * 0.37;
  return 51600 + (taxableIncome - 190000) * 0.45;
}

export function getMarginalRate(taxableIncome: number): number {
  if (taxableIncome <= 18200) return 0;
  if (taxableIncome <= 45000) return 16;
  if (taxableIncome <= 135000) return 30;
  if (taxableIncome <= 190000) return 37;
  return 45;
}

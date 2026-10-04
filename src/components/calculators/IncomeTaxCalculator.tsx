'use client';

import { useCallback, useMemo, useState } from 'react';
import { formatAUD } from '@/lib/format';
import { calculateIncomeTax, getMarginalRate } from '@/lib/tax-rates';
import { CURRENT_FY } from '@/lib/site';
import { buildCopyText } from '@/lib/calculator-copy';
import CalculatorShell, { InputField, ResultsPanel, ResultRow } from '../CalculatorShell';

export default function IncomeTaxCalculator() {
  const [grossIncome, setGrossIncome] = useState<number | ''>('');
  const [deductions, setDeductions] = useState<number | ''>('');

  const reset = useCallback(() => {
    setGrossIncome('');
    setDeductions('');
  }, []);

  const loadExample = useCallback(() => {
    setGrossIncome(85000);
    setDeductions(2000);
  }, []);

  const gross = Number(grossIncome) || 0;
  const deduct = Number(deductions) || 0;
  const taxable = Math.max(0, gross - deduct);
  const tax = calculateIncomeTax(taxable);
  const medicare = taxable > 23226 ? taxable * 0.02 : 0;
  const totalTax = tax + medicare;
  const takeHome = gross - totalTax;
  const marginal = getMarginalRate(taxable);
  const effectiveRate = taxable > 0 ? (totalTax / taxable) * 100 : 0;

  const copyText = useMemo(
    () =>
      buildCopyText(
        'Income Tax Calculator',
        [
          { label: 'Taxable Income', value: formatAUD(taxable) },
          { label: 'Income Tax', value: formatAUD(tax) },
          { label: 'Medicare Levy', value: formatAUD(medicare) },
          { label: 'Total Tax', value: formatAUD(totalTax) },
          { label: 'Marginal Rate', value: `${marginal}%` },
          { label: 'Effective Rate', value: `${effectiveRate.toFixed(1)}%` },
        ],
        { label: 'Estimated Take-Home Pay', value: formatAUD(takeHome) }
      ),
    [taxable, tax, medicare, totalTax, marginal, effectiveRate, takeHome]
  );

  return (
    <CalculatorShell
      title="Income Tax Estimator"
      subtitle={`Calculate your Australian income tax liability for the ${CURRENT_FY} financial year.`}
      badge={`${CURRENT_FY} Tax Rates`}
      onReset={reset}
      onLoadExample={loadExample}
      results={
        <ResultsPanel
          copyText={copyText}
          highlight={{
            label: 'Estimated Take-Home Pay',
            value: formatAUD(takeHome),
            note: 'Includes Medicare levy estimate. For illustrative purposes only.',
          }}
        >
          <ResultRow label="Taxable Income:" value={formatAUD(taxable)} />
          <ResultRow label="Income Tax:" value={formatAUD(tax)} />
          <ResultRow label="Medicare Levy:" value={formatAUD(medicare)} />
          <ResultRow label="Total Tax:" value={formatAUD(totalTax)} accent="red" />
          <ResultRow label="Marginal Rate:" value={`${marginal}%`} />
          <ResultRow label="Effective Rate:" value={`${effectiveRate.toFixed(1)}%`} />
        </ResultsPanel>
      }
    >
      <InputField label="Annual Gross Income" value={grossIncome} onChange={setGrossIncome} prefix="$" placeholder="85000" min={0} />
      <InputField label="Tax Deductions" value={deductions} onChange={setDeductions} prefix="$" placeholder="0" min={0} />
    </CalculatorShell>
  );
}

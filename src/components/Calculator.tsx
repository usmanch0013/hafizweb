'use client';

import { useCallback, useMemo, useState } from 'react';
import { CURRENT_FY_FULL, CURRENT_FY, CURRENT_FY_LABEL, PREVIOUS_FY_FULL, PREVIOUS_FY_LABEL } from '@/lib/site';
import { formatAUD } from '@/lib/format';
import { calculateIncomeTax } from '@/lib/tax-rates';
import { buildCopyText } from '@/lib/calculator-copy';
import CalculatorShell, {
  InputField,
  SelectField,
  ResultsPanel,
  ResultRow,
  InputDivider,
} from './CalculatorShell';

const EXAMPLE = {
  purchasePrice: 500000,
  soldPrice: 650000,
  expenses: 15000,
  losses: 0,
  taxableIncome: 90000,
  heldMoreThan12Months: true,
  incomeYear: CURRENT_FY_FULL,
};

export default function Calculator() {
  const [purchasePrice, setPurchasePrice] = useState<number | ''>('');
  const [soldPrice, setSoldPrice] = useState<number | ''>('');
  const [expenses, setExpenses] = useState<number | ''>('');
  const [losses, setLosses] = useState<number | ''>('');
  const [taxableIncome, setTaxableIncome] = useState<number | ''>('');
  const [heldMoreThan12Months, setHeldMoreThan12Months] = useState(true);
  const [incomeYear, setIncomeYear] = useState(CURRENT_FY_FULL);

  const reset = useCallback(() => {
    setPurchasePrice('');
    setSoldPrice('');
    setExpenses('');
    setLosses('');
    setTaxableIncome('');
    setHeldMoreThan12Months(true);
    setIncomeYear(CURRENT_FY_FULL);
  }, []);

  const loadExample = useCallback(() => {
    setPurchasePrice(EXAMPLE.purchasePrice);
    setSoldPrice(EXAMPLE.soldPrice);
    setExpenses(EXAMPLE.expenses);
    setLosses(EXAMPLE.losses);
    setTaxableIncome(EXAMPLE.taxableIncome);
    setHeldMoreThan12Months(EXAMPLE.heldMoreThan12Months);
    setIncomeYear(EXAMPLE.incomeYear);
  }, []);

  const pPrice = Number(purchasePrice) || 0;
  const sPrice = Number(soldPrice) || 0;
  const exp = Number(expenses) || 0;
  const loss = Number(losses) || 0;
  const income = Number(taxableIncome) || 0;

  const grossCapitalGain = sPrice - pPrice - exp;
  const gainAfterLosses = Math.max(0, grossCapitalGain - loss);
  const eligibleForDiscount = heldMoreThan12Months && gainAfterLosses > 0;
  const discountAmount = eligibleForDiscount ? gainAfterLosses * 0.5 : 0;
  const taxableCapitalGain = gainAfterLosses - discountAmount;

  const totalIncome = income + taxableCapitalGain;
  const estimatedTax = calculateIncomeTax(totalIncome);
  const baseTax = calculateIncomeTax(income);
  const taxOnCapitalGain = Math.max(0, estimatedTax - baseTax);

  const copyText = useMemo(() => {
    const rows = [
      { label: 'Gross Capital Gain', value: formatAUD(Math.max(0, grossCapitalGain)) },
      ...(loss > 0 ? [{ label: 'Less Capital Losses', value: `-${formatAUD(loss)}` }] : []),
      ...(discountAmount > 0 ? [{ label: '50% CGT Discount', value: `-${formatAUD(discountAmount)}` }] : []),
      { label: 'Net Taxable Gain', value: formatAUD(taxableCapitalGain) },
    ];
    return buildCopyText('Capital Gains Tax Calculator', rows, {
      label: 'Estimated Tax Owed',
      value: formatAUD(taxOnCapitalGain),
      note: `Based on individual resident rates ${incomeYear}. Medicare levy not included.`,
    });
  }, [grossCapitalGain, loss, discountAmount, taxableCapitalGain, taxOnCapitalGain, incomeYear]);

  return (
    <CalculatorShell
      title="Capital Gains Tax Estimator"
      subtitle="Enter your asset details to instantly estimate your CGT liability."
      badge={`${CURRENT_FY} Tax Rates`}
      onReset={reset}
      onLoadExample={loadExample}
      results={
        <ResultsPanel
          copyText={copyText}
          highlight={{
            label: 'Estimated Tax Owed',
            value: formatAUD(taxOnCapitalGain),
            note: `Based on individual resident rates ${incomeYear}. Medicare levy not included.`,
          }}
        >
          <ResultRow label="Gross Capital Gain" value={formatAUD(Math.max(0, grossCapitalGain))} />
          {loss > 0 && <ResultRow label="Less Capital Losses" value={`-${formatAUD(loss)}`} accent="red" />}
          {discountAmount > 0 && <ResultRow label="50% CGT Discount" value={`-${formatAUD(discountAmount)}`} accent="green" />}
          <ResultRow label="Net Taxable Gain" value={formatAUD(taxableCapitalGain)} />
        </ResultsPanel>
      }
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <InputField label="Purchase Price" value={purchasePrice} onChange={setPurchasePrice} prefix="$" placeholder="500,000" min={0} />
        <InputField label="Sold Price" value={soldPrice} onChange={setSoldPrice} prefix="$" placeholder="650,000" min={0} />
      </div>
      <InputField label="Allowable Expenses" value={expenses} onChange={setExpenses} prefix="$" placeholder="Renovations, legal fees..." hint="Include purchase, ownership and selling costs" min={0} />

      <InputDivider label="Tax Details" />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <InputField label="Current Taxable Income" value={taxableIncome} onChange={setTaxableIncome} prefix="$" placeholder="90,000" min={0} />
        <InputField label="Previous Capital Losses" value={losses} onChange={setLosses} prefix="$" placeholder="0" min={0} />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <SelectField
          label="Ownership Period"
          value={heldMoreThan12Months ? 'true' : 'false'}
          onChange={(v) => setHeldMoreThan12Months(v === 'true')}
          options={[
            { value: 'true', label: 'More than 12 months (50% discount)' },
            { value: 'false', label: 'Less than 12 months (no discount)' },
          ]}
        />
        <SelectField
          label="Income Year"
          value={incomeYear}
          onChange={setIncomeYear}
          options={[
            { value: CURRENT_FY_FULL, label: CURRENT_FY_LABEL },
            { value: PREVIOUS_FY_FULL, label: PREVIOUS_FY_LABEL },
          ]}
        />
      </div>
    </CalculatorShell>
  );
}

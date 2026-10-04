'use client';

import { useCallback, useMemo, useState } from 'react';
import { formatAUD, formatPercent } from '@/lib/format';
import { buildCopyText } from '@/lib/calculator-copy';
import CalculatorShell, { InputField, ResultsPanel, ResultRow } from '../CalculatorShell';

export default function RentalYieldCalculator() {
  const [propertyValue, setPropertyValue] = useState<number | ''>('');
  const [weeklyRent, setWeeklyRent] = useState<number | ''>('');
  const [annualExpenses, setAnnualExpenses] = useState<number | ''>('');

  const reset = useCallback(() => {
    setPropertyValue('');
    setWeeklyRent('');
    setAnnualExpenses('');
  }, []);

  const loadExample = useCallback(() => {
    setPropertyValue(750000);
    setWeeklyRent(550);
    setAnnualExpenses(8000);
  }, []);

  const value = Number(propertyValue) || 0;
  const rent = Number(weeklyRent) || 0;
  const expenses = Number(annualExpenses) || 0;

  const annualRent = rent * 52;
  const grossYield = value > 0 ? (annualRent / value) * 100 : 0;
  const netIncome = annualRent - expenses;
  const netYield = value > 0 ? (netIncome / value) * 100 : 0;
  const monthlyRent = (rent * 52) / 12;

  const copyText = useMemo(
    () =>
      buildCopyText(
        'Rental Yield Calculator',
        [
          { label: 'Annual Rental Income', value: formatAUD(annualRent) },
          { label: 'Annual Expenses', value: formatAUD(expenses) },
          { label: 'Net Rental Income', value: formatAUD(netIncome) },
          { label: 'Net Rental Yield', value: formatPercent(netYield) },
          { label: 'Monthly Rent Equivalent', value: formatAUD(monthlyRent) },
        ],
        { label: 'Gross Rental Yield', value: formatPercent(grossYield) }
      ),
    [annualRent, expenses, netIncome, netYield, monthlyRent, grossYield]
  );

  return (
    <CalculatorShell
      title="Rental Yield Calculator"
      subtitle="Calculate gross and net rental yield for Australian investment properties."
      onReset={reset}
      onLoadExample={loadExample}
      results={
        <ResultsPanel
          copyText={copyText}
          highlight={{
            label: 'Gross Rental Yield',
            value: formatPercent(grossYield),
            note: 'Based on annual rent divided by property value.',
          }}
        >
          <ResultRow label="Annual Rental Income:" value={formatAUD(annualRent)} accent="green" />
          <ResultRow label="Annual Expenses:" value={formatAUD(expenses)} accent="red" />
          <ResultRow label="Net Rental Income:" value={formatAUD(netIncome)} />
          <ResultRow label="Net Rental Yield:" value={formatPercent(netYield)} />
          <ResultRow label="Monthly Rent Equivalent:" value={formatAUD(monthlyRent)} />
        </ResultsPanel>
      }
    >
      <InputField label="Property Value" value={propertyValue} onChange={setPropertyValue} prefix="$" placeholder="750000" min={0} />
      <InputField label="Weekly Rent" value={weeklyRent} onChange={setWeeklyRent} prefix="$" placeholder="550" min={0} />
      <InputField
        label="Annual Expenses (rates, insurance, management)"
        value={annualExpenses}
        onChange={setAnnualExpenses}
        prefix="$"
        placeholder="8000"
        min={0}
      />
    </CalculatorShell>
  );
}

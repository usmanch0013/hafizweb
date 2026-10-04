'use client';

import { useCallback, useMemo, useState } from 'react';
import { formatAUD } from '@/lib/format';
import { buildCopyText } from '@/lib/calculator-copy';
import CalculatorShell, { InputField, SelectField, ResultsPanel, ResultRow } from '../CalculatorShell';

export default function CompoundInterestCalculator() {
  const [initial, setInitial] = useState<number | ''>('');
  const [monthly, setMonthly] = useState<number | ''>('');
  const [rate, setRate] = useState<number | ''>(7);
  const [years, setYears] = useState<number | ''>(10);
  const [frequency, setFrequency] = useState('monthly');

  const reset = useCallback(() => {
    setInitial('');
    setMonthly('');
    setRate(7);
    setYears(10);
    setFrequency('monthly');
  }, []);

  const loadExample = useCallback(() => {
    setInitial(10000);
    setMonthly(500);
    setRate(7);
    setYears(10);
    setFrequency('monthly');
  }, []);

  const principal = Number(initial) || 0;
  const monthlyContrib = Number(monthly) || 0;
  const annualRate = (Number(rate) || 0) / 100;
  const numYears = Number(years) || 0;

  const compoundsPerYear = frequency === 'monthly' ? 12 : frequency === 'quarterly' ? 4 : 1;
  const periodicRate = annualRate / compoundsPerYear;
  const totalPeriods = numYears * compoundsPerYear;
  const contribPerPeriod =
    frequency === 'monthly' ? monthlyContrib : frequency === 'quarterly' ? monthlyContrib * 3 : monthlyContrib * 12;

  let futureValue = principal;
  for (let i = 0; i < totalPeriods; i++) {
    futureValue = futureValue * (1 + periodicRate) + contribPerPeriod;
  }

  const totalContributions = principal + contribPerPeriod * totalPeriods;
  const totalInterest = futureValue - totalContributions;

  const copyText = useMemo(
    () =>
      buildCopyText(
        'Compound Interest Calculator',
        [
          { label: 'Initial Investment', value: formatAUD(principal) },
          { label: 'Total Contributions', value: formatAUD(totalContributions) },
          { label: 'Interest Earned', value: formatAUD(totalInterest) },
          { label: 'Investment Period', value: `${numYears} years` },
          { label: 'Annual Return Rate', value: `${Number(rate) || 0}%` },
          { label: 'Compounding', value: frequency },
        ],
        { label: 'Future Value', value: formatAUD(futureValue) }
      ),
    [principal, totalContributions, totalInterest, numYears, rate, frequency, futureValue]
  );

  return (
    <CalculatorShell
      title="Compound Interest Calculator"
      subtitle="See how your savings grow with regular contributions and compounding returns."
      onReset={reset}
      onLoadExample={loadExample}
      results={
        <ResultsPanel
          copyText={copyText}
          highlight={{
            label: 'Future Value',
            value: formatAUD(futureValue),
            note: 'Projected growth based on constant rate. Past performance is not indicative of future results.',
          }}
        >
          <ResultRow label="Initial Investment:" value={formatAUD(principal)} />
          <ResultRow label="Total Contributions:" value={formatAUD(totalContributions)} />
          <ResultRow label="Interest Earned:" value={formatAUD(totalInterest)} accent="green" />
          <ResultRow label="Investment Period:" value={`${numYears} years`} />
          <ResultRow label="Annual Return Rate:" value={`${Number(rate) || 0}%`} />
        </ResultsPanel>
      }
    >
      <InputField label="Initial Investment" value={initial} onChange={setInitial} prefix="$" placeholder="10000" min={0} />
      <InputField label="Monthly Contribution" value={monthly} onChange={setMonthly} prefix="$" placeholder="500" min={0} />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <InputField label="Annual Return Rate" value={rate} onChange={setRate} suffix="%" placeholder="7" min={0} max={30} step={0.1} />
        <InputField label="Investment Period" value={years} onChange={setYears} suffix="yrs" placeholder="10" min={1} max={50} />
      </div>
      <SelectField
        label="Compounding Frequency"
        value={frequency}
        onChange={setFrequency}
        options={[
          { value: 'monthly', label: 'Monthly' },
          { value: 'quarterly', label: 'Quarterly' },
          { value: 'annually', label: 'Annually' },
        ]}
      />
    </CalculatorShell>
  );
}

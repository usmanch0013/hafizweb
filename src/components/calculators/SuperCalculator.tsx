'use client';

import { useCallback, useMemo, useState } from 'react';
import { formatAUD } from '@/lib/format';
import { buildCopyText } from '@/lib/calculator-copy';
import CalculatorShell, { InputField, ResultsPanel, ResultRow } from '../CalculatorShell';

export default function SuperCalculator() {
  const [currentBalance, setCurrentBalance] = useState<number | ''>('');
  const [annualSalary, setAnnualSalary] = useState<number | ''>('');
  const [extraContribution, setExtraContribution] = useState<number | ''>('');
  const [yearsToRetire, setYearsToRetire] = useState<number | ''>(25);
  const [returnRate, setReturnRate] = useState<number | ''>(7);

  const reset = useCallback(() => {
    setCurrentBalance('');
    setAnnualSalary('');
    setExtraContribution('');
    setYearsToRetire(25);
    setReturnRate(7);
  }, []);

  const loadExample = useCallback(() => {
    setCurrentBalance(120000);
    setAnnualSalary(95000);
    setExtraContribution(5000);
    setYearsToRetire(25);
    setReturnRate(7);
  }, []);

  const balance = Number(currentBalance) || 0;
  const salary = Number(annualSalary) || 0;
  const extra = Number(extraContribution) || 0;
  const years = Number(yearsToRetire) || 0;
  const rate = (Number(returnRate) || 0) / 100;

  const employerContrib = salary * 0.12;
  const annualContrib = employerContrib + extra;

  let projected = balance;
  for (let i = 0; i < years; i++) {
    projected = projected * (1 + rate) + annualContrib;
  }

  const totalContributions = balance + annualContrib * years;
  const investmentGrowth = projected - totalContributions;

  const copyText = useMemo(
    () =>
      buildCopyText(
        'Superannuation Calculator',
        [
          { label: 'Current Balance', value: formatAUD(balance) },
          { label: 'Employer Contributions (12%)', value: formatAUD(employerContrib) },
          { label: 'Extra Contributions', value: formatAUD(extra) },
          { label: 'Total Contributions', value: formatAUD(totalContributions) },
          { label: 'Investment Growth', value: formatAUD(investmentGrowth) },
          { label: 'Years to Retirement', value: `${years} years` },
        ],
        { label: 'Projected Super Balance', value: formatAUD(projected) }
      ),
    [balance, employerContrib, extra, totalContributions, investmentGrowth, years, projected]
  );

  return (
    <CalculatorShell
      title="Superannuation Calculator"
      subtitle="Project your super balance at retirement with employer and voluntary contributions."
      onReset={reset}
      onLoadExample={loadExample}
      results={
        <ResultsPanel
          copyText={copyText}
          highlight={{
            label: 'Projected Super Balance',
            value: formatAUD(projected),
            note: 'Assumes constant returns and contributions. Actual results will vary.',
          }}
        >
          <ResultRow label="Current Balance:" value={formatAUD(balance)} />
          <ResultRow label="Employer Contributions (12%):" value={formatAUD(employerContrib)} />
          <ResultRow label="Your Extra Contributions:" value={formatAUD(extra)} />
          <ResultRow label="Total Contributions:" value={formatAUD(totalContributions)} />
          <ResultRow label="Investment Growth:" value={formatAUD(investmentGrowth)} accent="green" />
          <ResultRow label="Years to Retirement:" value={`${years} years`} />
        </ResultsPanel>
      }
    >
      <InputField label="Current Super Balance" value={currentBalance} onChange={setCurrentBalance} prefix="$" placeholder="120000" min={0} />
      <InputField label="Annual Salary" value={annualSalary} onChange={setAnnualSalary} prefix="$" placeholder="95000" min={0} />
      <InputField label="Extra Annual Contributions" value={extraContribution} onChange={setExtraContribution} prefix="$" placeholder="5000" min={0} />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <InputField label="Years Until Retirement" value={yearsToRetire} onChange={setYearsToRetire} suffix="yrs" placeholder="25" min={1} max={50} />
        <InputField label="Expected Return Rate" value={returnRate} onChange={setReturnRate} suffix="%" placeholder="7" min={0} max={20} step={0.1} />
      </div>
    </CalculatorShell>
  );
}

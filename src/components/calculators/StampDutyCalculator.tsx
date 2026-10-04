'use client';

import { useCallback, useMemo, useState } from 'react';
import { formatAUD } from '@/lib/format';
import { buildCopyText } from '@/lib/calculator-copy';
import CalculatorShell, { InputField, SelectField, ResultsPanel, ResultRow } from '../CalculatorShell';

type State = 'NSW' | 'VIC' | 'QLD' | 'WA' | 'SA' | 'TAS' | 'ACT' | 'NT';

function calculateStampDuty(price: number, state: State, isFirstHome: boolean, isInvestment: boolean): number {
  if (price <= 0) return 0;

  const rates: Record<State, { threshold: number; rate: number }[]> = {
    NSW: [
      { threshold: 16000, rate: 1.25 },
      { threshold: 35000, rate: 1.5 },
      { threshold: 93000, rate: 1.75 },
      { threshold: 351000, rate: 3.5 },
      { threshold: 1168000, rate: 4.5 },
      { threshold: Infinity, rate: 5.5 },
    ],
    VIC: [
      { threshold: 25000, rate: 1.4 },
      { threshold: 130000, rate: 2.4 },
      { threshold: 960000, rate: 6.0 },
      { threshold: Infinity, rate: 5.5 },
    ],
    QLD: [
      { threshold: 5000, rate: 0 },
      { threshold: 75000, rate: 1.5 },
      { threshold: 540000, rate: 3.5 },
      { threshold: 1000000, rate: 4.5 },
      { threshold: Infinity, rate: 5.75 },
    ],
    WA: [
      { threshold: 120000, rate: 1.9 },
      { threshold: 280000, rate: 2.85 },
      { threshold: 500000, rate: 3.8 },
      { threshold: Infinity, rate: 5.15 },
    ],
    SA: [
      { threshold: 12000, rate: 1.0 },
      { threshold: 30000, rate: 2.0 },
      { threshold: 50000, rate: 3.0 },
      { threshold: 100000, rate: 3.5 },
      { threshold: 200000, rate: 4.0 },
      { threshold: 250000, rate: 4.25 },
      { threshold: 300000, rate: 4.75 },
      { threshold: 500000, rate: 5.0 },
      { threshold: Infinity, rate: 5.5 },
    ],
    TAS: [
      { threshold: 3000, rate: 1.75 },
      { threshold: 25000, rate: 2.25 },
      { threshold: 75000, rate: 3.5 },
      { threshold: 200000, rate: 4.0 },
      { threshold: 375000, rate: 4.25 },
      { threshold: 725000, rate: 4.5 },
      { threshold: Infinity, rate: 4.5 },
    ],
    ACT: [
      { threshold: 260000, rate: 0.6 },
      { threshold: 300000, rate: 2.2 },
      { threshold: 500000, rate: 3.4 },
      { threshold: 750000, rate: 4.32 },
      { threshold: 1000000, rate: 5.9 },
      { threshold: 1455000, rate: 6.4 },
      { threshold: Infinity, rate: 6.4 },
    ],
    NT: [
      { threshold: 525000, rate: 3.95 },
      { threshold: 3000000, rate: 4.95 },
      { threshold: Infinity, rate: 5.95 },
    ],
  };

  let duty = 0;
  let remaining = price;
  let prev = 0;
  const brackets = rates[state];

  for (const bracket of brackets) {
    const band = Math.min(remaining, bracket.threshold - prev);
    if (band <= 0) break;
    duty += band * (bracket.rate / 100);
    remaining -= band;
    prev = bracket.threshold;
  }

  if (isFirstHome && !isInvestment) {
    if (state === 'NSW' && price <= 800000) duty *= 0.5;
    if (state === 'VIC' && price <= 600000) duty = 0;
    if (state === 'QLD' && price <= 550000) duty = 0;
  }

  return Math.max(0, duty);
}

export default function StampDutyCalculator() {
  const [price, setPrice] = useState<number | ''>('');
  const [state, setState] = useState<State>('NSW');
  const [firstHome, setFirstHome] = useState('false');
  const [investment, setInvestment] = useState('false');

  const reset = useCallback(() => {
    setPrice('');
    setState('NSW');
    setFirstHome('false');
    setInvestment('false');
  }, []);

  const loadExample = useCallback(() => {
    setPrice(750000);
    setState('NSW');
    setFirstHome('true');
    setInvestment('false');
  }, []);

  const propertyPrice = Number(price) || 0;
  const duty = calculateStampDuty(propertyPrice, state, firstHome === 'true', investment === 'true');
  const totalCost = propertyPrice + duty;
  const dutyPercent = propertyPrice > 0 ? (duty / propertyPrice) * 100 : 0;

  const copyText = useMemo(
    () =>
      buildCopyText(
        'Stamp Duty Calculator',
        [
          { label: 'Property Price', value: formatAUD(propertyPrice) },
          { label: 'State/Territory', value: state },
          { label: 'Duty as % of Price', value: `${dutyPercent.toFixed(2)}%` },
          { label: 'Total Purchase Cost', value: formatAUD(totalCost) },
        ],
        { label: 'Estimated Stamp Duty', value: formatAUD(duty) }
      ),
    [propertyPrice, state, dutyPercent, totalCost, duty]
  );

  return (
    <CalculatorShell
      title="Stamp Duty Estimator"
      subtitle="Estimate property transfer duty for Australian states and territories."
      onReset={reset}
      onLoadExample={loadExample}
      results={
        <ResultsPanel
          copyText={copyText}
          highlight={{
            label: 'Estimated Stamp Duty',
            value: formatAUD(duty),
            note: 'Approximate rates. Concessions may apply. Verify with your state revenue office.',
          }}
        >
          <ResultRow label="Property Price:" value={formatAUD(propertyPrice)} />
          <ResultRow label="State/Territory:" value={state} />
          <ResultRow label="Duty as % of Price:" value={`${dutyPercent.toFixed(2)}%`} />
          <ResultRow label="Total Purchase Cost:" value={formatAUD(totalCost)} accent="green" />
        </ResultsPanel>
      }
    >
      <InputField label="Property Purchase Price" value={price} onChange={setPrice} prefix="$" placeholder="750000" min={0} />
      <SelectField
        label="State / Territory"
        value={state}
        onChange={(v) => setState(v as State)}
        options={[
          { value: 'NSW', label: 'New South Wales' },
          { value: 'VIC', label: 'Victoria' },
          { value: 'QLD', label: 'Queensland' },
          { value: 'WA', label: 'Western Australia' },
          { value: 'SA', label: 'South Australia' },
          { value: 'TAS', label: 'Tasmania' },
          { value: 'ACT', label: 'Australian Capital Territory' },
          { value: 'NT', label: 'Northern Territory' },
        ]}
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <SelectField
          label="First Home Buyer"
          value={firstHome}
          onChange={setFirstHome}
          options={[
            { value: 'false', label: 'No' },
            { value: 'true', label: 'Yes (may qualify for concession)' },
          ]}
        />
        <SelectField
          label="Property Type"
          value={investment}
          onChange={setInvestment}
          options={[
            { value: 'false', label: 'Owner-Occupier' },
            { value: 'true', label: 'Investment Property' },
          ]}
        />
      </div>
    </CalculatorShell>
  );
}

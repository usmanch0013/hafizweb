'use client';

import { useCallback, useMemo, useState } from 'react';
import { formatAUD } from '@/lib/format';
import { buildCopyText } from '@/lib/calculator-copy';
import CalculatorShell, { InputField, SelectField, ResultsPanel, ResultRow } from '../CalculatorShell';

export default function GSTCalculator() {
  const [amount, setAmount] = useState<number | ''>('');
  const [mode, setMode] = useState<'add' | 'remove'>('add');

  const reset = useCallback(() => {
    setAmount('');
    setMode('add');
  }, []);

  const loadExample = useCallback(() => {
    setAmount(1000);
    setMode('add');
  }, []);

  const base = Number(amount) || 0;
  const gstAmount = mode === 'add' ? base * 0.1 : base - base / 1.1;
  const totalIncGst = mode === 'add' ? base + gstAmount : base;
  const exGst = mode === 'add' ? base : base / 1.1;

  const copyText = useMemo(
    () =>
      buildCopyText(
        'GST Calculator',
        [
          { label: 'Input Amount', value: formatAUD(base, 2) },
          { label: 'GST Component (10%)', value: formatAUD(gstAmount, 2) },
          {
            label: mode === 'add' ? 'Ex-GST Amount' : 'Inc-GST Amount',
            value: formatAUD(mode === 'add' ? exGst : totalIncGst, 2),
          },
        ],
        {
          label: mode === 'add' ? 'Total Including GST' : 'Amount Excluding GST',
          value: formatAUD(mode === 'add' ? totalIncGst : exGst, 2),
        }
      ),
    [base, gstAmount, mode, exGst, totalIncGst]
  );

  return (
    <CalculatorShell
      title="GST Calculator"
      subtitle="Add or remove 10% Goods and Services Tax from any Australian dollar amount."
      onReset={reset}
      onLoadExample={loadExample}
      results={
        <ResultsPanel
          copyText={copyText}
          highlight={{
            label: mode === 'add' ? 'Total Including GST' : 'Amount Excluding GST',
            value: formatAUD(mode === 'add' ? totalIncGst : exGst, 2),
            note: 'Australian GST rate is 10%.',
          }}
        >
          <ResultRow label="Input Amount:" value={formatAUD(base, 2)} />
          <ResultRow label="GST Component (10%):" value={formatAUD(gstAmount, 2)} accent="green" />
          <ResultRow
            label={mode === 'add' ? 'Ex-GST Amount:' : 'Inc-GST Amount:'}
            value={formatAUD(mode === 'add' ? exGst : totalIncGst, 2)}
          />
        </ResultsPanel>
      }
    >
      <SelectField
        label="Calculation Mode"
        value={mode}
        onChange={(v) => setMode(v as 'add' | 'remove')}
        options={[
          { value: 'add', label: 'Add GST to amount (ex-GST → inc-GST)' },
          { value: 'remove', label: 'Remove GST from amount (inc-GST → ex-GST)' },
        ]}
      />
      <InputField
        label={mode === 'add' ? 'Amount Excluding GST' : 'Amount Including GST'}
        value={amount}
        onChange={setAmount}
        prefix="$"
        placeholder="1000"
        min={0}
        step={0.01}
      />
    </CalculatorShell>
  );
}

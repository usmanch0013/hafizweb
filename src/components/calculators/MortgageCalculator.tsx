'use client';

import { useCallback, useMemo, useState } from 'react';
import { formatAUD } from '@/lib/format';
import { buildCopyText } from '@/lib/calculator-copy';
import CalculatorShell, { InputField, SelectField, ResultsPanel, ResultRow } from '../CalculatorShell';

export default function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState<number | ''>('');
  const [interestRate, setInterestRate] = useState<number | ''>('');
  const [loanTerm, setLoanTerm] = useState<number | ''>(30);
  const [repaymentType, setRepaymentType] = useState('principal-interest');

  const reset = useCallback(() => {
    setLoanAmount('');
    setInterestRate('');
    setLoanTerm(30);
    setRepaymentType('principal-interest');
  }, []);

  const loadExample = useCallback(() => {
    setLoanAmount(600000);
    setInterestRate(6.5);
    setLoanTerm(30);
    setRepaymentType('principal-interest');
  }, []);

  const principal = Number(loanAmount) || 0;
  const rate = (Number(interestRate) || 0) / 100 / 12;
  const months = (Number(loanTerm) || 0) * 12;

  let monthlyPayment = 0;
  let totalRepayment = 0;
  let totalInterest = 0;

  if (principal > 0 && rate > 0 && months > 0) {
    if (repaymentType === 'interest-only') {
      monthlyPayment = principal * rate;
      totalRepayment = monthlyPayment * months + principal;
      totalInterest = totalRepayment - principal;
    } else {
      monthlyPayment = (principal * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
      totalRepayment = monthlyPayment * months;
      totalInterest = totalRepayment - principal;
    }
  }

  const copyText = useMemo(
    () =>
      buildCopyText(
        'Mortgage Calculator',
        [
          { label: 'Loan Amount', value: formatAUD(principal) },
          { label: 'Interest Rate', value: `${Number(interestRate) || 0}% p.a.` },
          { label: 'Loan Term', value: `${loanTerm || 0} years` },
          { label: 'Repayment Type', value: repaymentType === 'interest-only' ? 'Interest Only' : 'Principal & Interest' },
          { label: 'Total Interest', value: formatAUD(totalInterest) },
          { label: 'Total Repayments', value: formatAUD(totalRepayment) },
        ],
        { label: 'Estimated Monthly Repayment', value: formatAUD(monthlyPayment) }
      ),
    [principal, interestRate, loanTerm, repaymentType, totalInterest, totalRepayment, monthlyPayment]
  );

  return (
    <CalculatorShell
      title="Mortgage Repayment Calculator"
      subtitle="Estimate monthly home loan repayments and total interest over the loan term."
      onReset={reset}
      onLoadExample={loadExample}
      results={
        <ResultsPanel
          copyText={copyText}
          highlight={{
            label: 'Estimated Monthly Repayment',
            value: formatAUD(monthlyPayment),
            note: 'Does not include fees, LMI or rate changes. For illustrative purposes only.',
          }}
        >
          <ResultRow label="Loan Amount:" value={formatAUD(principal)} />
          <ResultRow label="Interest Rate:" value={`${Number(interestRate) || 0}% p.a.`} />
          <ResultRow label="Loan Term:" value={`${loanTerm || 0} years`} />
          <ResultRow label="Total Interest:" value={formatAUD(totalInterest)} accent="red" />
          <ResultRow label="Total Repayments:" value={formatAUD(totalRepayment)} />
        </ResultsPanel>
      }
    >
      <InputField label="Loan Amount" value={loanAmount} onChange={setLoanAmount} prefix="$" placeholder="600000" min={0} />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <InputField label="Interest Rate (p.a.)" value={interestRate} onChange={setInterestRate} suffix="%" placeholder="6.5" min={0} step={0.01} />
        <InputField label="Loan Term" value={loanTerm} onChange={setLoanTerm} suffix="yrs" placeholder="30" min={1} max={40} />
      </div>
      <SelectField
        label="Repayment Type"
        value={repaymentType}
        onChange={setRepaymentType}
        options={[
          { value: 'principal-interest', label: 'Principal & Interest' },
          { value: 'interest-only', label: 'Interest Only' },
        ]}
      />
    </CalculatorShell>
  );
}

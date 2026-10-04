'use client';

import { useCallback, useState } from 'react';

interface CalculatorShellProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  results: React.ReactNode;
  badge?: string;
  onReset?: () => void;
  onLoadExample?: () => void;
}

function ActionButton({
  onClick,
  children,
  variant = 'default',
  disabled,
}: {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'default' | 'primary';
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${
        variant === 'primary'
          ? 'bg-teal-600 text-white hover:bg-teal-700'
          : 'border border-slate-200 bg-white text-slate-600 hover:border-teal-200 hover:bg-teal-50 hover:text-teal-700'
      }`}
    >
      {children}
    </button>
  );
}

export default function CalculatorShell({
  title,
  subtitle,
  children,
  results,
  badge,
  onReset,
  onLoadExample,
}: CalculatorShellProps) {
  return (
    <div className="calc-shell overflow-hidden">
      <div className="border-b border-slate-100 px-6 py-5 sm:px-8 sm:py-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            {badge && <span className="fy-badge mb-2.5">{badge}</span>}
            <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-[1.375rem]">{title}</h2>
            <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
          </div>
          {(onReset || onLoadExample) && (
            <div className="flex flex-wrap gap-2">
              {onLoadExample && (
                <ActionButton onClick={onLoadExample}>
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Load Example
                </ActionButton>
              )}
              {onReset && (
                <ActionButton onClick={onReset}>
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Reset
                </ActionButton>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5">
        <div className="space-y-5 p-6 sm:p-8 lg:col-span-3 lg:border-r lg:border-slate-100">
          {children}
        </div>
        <div className="border-t border-slate-100 bg-slate-50/60 p-6 sm:p-8 lg:col-span-2 lg:border-t-0" id="calc-results-panel">
          {results}
        </div>
      </div>
    </div>
  );
}

interface InputFieldProps {
  label: string;
  value: number | '';
  onChange: (val: number | '') => void;
  prefix?: string;
  suffix?: string;
  placeholder?: string;
  hint?: string;
  min?: number;
  max?: number;
  step?: number;
}

export function InputField({
  label,
  value,
  onChange,
  prefix,
  suffix,
  placeholder = '0',
  hint,
  min,
  max,
  step,
}: InputFieldProps) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-slate-700">{label}</label>
      <div className="relative">
        {prefix && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-sm text-slate-400">{prefix}</span>
          </div>
        )}
        <input
          type="number"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={(e) => onChange(e.target.value === '' ? '' : Number(e.target.value))}
          className={`input-field ${prefix ? '!pl-7' : ''} ${suffix ? '!pr-10' : ''}`}
          placeholder={placeholder}
        />
        {suffix && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <span className="text-sm text-slate-400">{suffix}</span>
          </div>
        )}
      </div>
      {hint && <p className="mt-1 text-xs text-slate-400">{hint}</p>}
    </div>
  );
}

interface SelectFieldProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
  options: { value: string; label: string }[];
}

export function SelectField({ label, value, onChange, options }: SelectFieldProps) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-slate-700">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="input-field cursor-pointer"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

interface ResultsPanelProps {
  title?: string;
  children: React.ReactNode;
  highlight?: { label: string; value: string; note?: string };
  copyText?: string;
}

export function ResultsPanel({ title = 'Your Estimate', children, highlight, copyText }: ResultsPanelProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    if (!copyText) return;
    try {
      await navigator.clipboard.writeText(copyText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = copyText;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [copyText]);

  const handlePrint = useCallback(() => {
    const panel = document.getElementById('calc-results-panel');
    if (!panel) return;
    const win = window.open('', '_blank', 'width=600,height=700');
    if (!win) return;
    win.document.write(`
      <!DOCTYPE html><html><head><title>Calculator Results</title>
      <style>
        body { font-family: system-ui, sans-serif; padding: 2rem; color: #0f172a; }
        h2 { font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; }
        .highlight { margin-top: 1.5rem; padding: 1rem; background: #f0fdfa; border: 1px solid #99f6e4; border-radius: 8px; }
        .highlight-value { font-size: 2rem; font-weight: bold; }
        table { width: 100%; border-collapse: collapse; margin-top: 1rem; }
        td { padding: 0.5rem 0; border-bottom: 1px solid #e2e8f0; font-size: 14px; }
        td:last-child { text-align: right; font-weight: 600; }
        .footer { margin-top: 2rem; font-size: 11px; color: #94a3b8; }
      </style></head><body>
      ${panel.innerHTML}
      <p class="footer">AusCGT.com.au — estimates only, not professional tax advice.</p>
      </body></html>
    `);
    win.document.close();
    win.focus();
    win.print();
    win.close();
  }, []);

  return (
    <div className="flex h-full flex-col">
      <div className="mb-4 flex items-center justify-between gap-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{title}</p>
        <div className="flex items-center gap-1.5">
          <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold uppercase text-emerald-700 ring-1 ring-emerald-200">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            Live
          </span>
        </div>
      </div>

      <div className="space-y-0 rounded-lg border border-slate-200/80 bg-white px-4 py-1">{children}</div>

      {highlight && (
        <div className="mt-5 rounded-lg border border-teal-100 bg-teal-50 p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">{highlight.label}</p>
          <p className="mt-1 text-3xl font-bold tracking-tight text-slate-900">{highlight.value}</p>
          {highlight.note && <p className="mt-2 text-xs leading-relaxed text-slate-500">{highlight.note}</p>}
        </div>
      )}

      {copyText && (
        <div className="mt-5 flex flex-wrap gap-2">
          <ActionButton onClick={handleCopy} variant="primary">
            {copied ? (
              <>
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Copied!
              </>
            ) : (
              <>
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy Results
              </>
            )}
          </ActionButton>
          <ActionButton onClick={handlePrint}>
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Print
          </ActionButton>
        </div>
      )}
    </div>
  );
}

export function ResultRow({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: 'green' | 'red' | 'default';
}) {
  const color =
    accent === 'green' ? 'text-emerald-600' : accent === 'red' ? 'text-red-500' : 'text-slate-800';
  return (
    <div className="flex items-center justify-between border-b border-slate-100 py-3 text-sm last:border-0">
      <span className="text-slate-500">{label}</span>
      <span className={`font-semibold tabular-nums ${color}`}>{value}</span>
    </div>
  );
}

export function InputDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 py-1">
      <div className="h-px flex-grow bg-slate-200" />
      <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">{label}</span>
      <div className="h-px flex-grow bg-slate-200" />
    </div>
  );
}

export function ResultSummary({ label, value }: { label: string; value: string }) {
  return (
    <div className="mt-4 rounded-lg border border-dashed border-slate-200 bg-slate-50 px-4 py-3">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="mt-0.5 text-sm font-semibold text-slate-800">{value}</p>
    </div>
  );
}

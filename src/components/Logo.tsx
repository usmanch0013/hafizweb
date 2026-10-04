interface LogoProps {
  className?: string;
  variant?: 'default' | 'light';
}

export default function Logo({ className = 'h-8', variant = 'default' }: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-slate-900';
  const accentColor = variant === 'light' ? 'text-teal-300' : 'text-teal-600';

  return (
    <div className="flex items-center gap-2">
      <svg
        className={className}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="32" height="32" rx="8" fill="#0d9488" />
        <path
          d="M8 22V10l8-5 8 5v12l-8 5-8-5z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinejoin="round"
          fill="none"
        />
        <path d="M16 5v22M8 10l8 5 8-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="leading-none">
        <span className={`text-base font-bold tracking-tight ${textColor}`}>
          Aus<span className={accentColor}>CGT</span>
        </span>
        <span className={`mt-0.5 block text-[10px] font-medium ${variant === 'light' ? 'text-slate-500' : 'text-slate-400'}`}>
          Finance Calculators
        </span>
      </div>
    </div>
  );
}

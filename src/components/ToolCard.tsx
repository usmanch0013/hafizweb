import Link from 'next/link';
import type { Tool } from '@/lib/tools';
import ToolIcon from './icons/ToolIcons';

interface ToolCardProps {
  tool: Tool;
  featured?: boolean;
  size?: 'default' | 'compact';
}

export default function ToolCard({ tool, featured = false, size = 'default' }: ToolCardProps) {
  return (
    <Link
      href={tool.href}
      className={`tool-card group flex flex-col ${size === 'compact' ? 'p-5' : 'p-6'} ${
        featured ? 'ring-1 ring-teal-100' : ''
      }`}
    >
      {featured && (
        <span className="mb-3 self-start rounded-full bg-teal-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-teal-700">
          Popular
        </span>
      )}

      <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${tool.color} text-white`}>
        <ToolIcon name={tool.icon} className="h-5 w-5" />
      </div>

      <h3 className="mb-1.5 text-base font-semibold text-slate-900 group-hover:text-teal-700">
        {tool.shortName}
      </h3>
      <p className={`flex-grow text-slate-500 ${size === 'compact' ? 'text-xs line-clamp-2' : 'text-sm leading-relaxed'}`}>
        {tool.description}
      </p>

      <span className="mt-4 text-sm font-medium text-teal-600 group-hover:underline">
        Open calculator →
      </span>
    </Link>
  );
}

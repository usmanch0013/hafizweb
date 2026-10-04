export interface CopyLine {
  label: string;
  value: string;
}

export function buildCopyText(
  calculatorName: string,
  rows: CopyLine[],
  highlight?: { label: string; value: string; note?: string }
): string {
  const lines: string[] = [
    `AusCGT — ${calculatorName}`,
    '─'.repeat(40),
    '',
    ...rows.map((r) => `${r.label.replace(/:$/, '')}: ${r.value}`),
  ];

  if (highlight) {
    lines.push('', `${highlight.label}: ${highlight.value}`);
    if (highlight.note) lines.push(highlight.note.replace(/^\*/, ''));
  }

  lines.push('', 'Generated at auscgt.com.au — estimates only, not tax advice.');
  return lines.join('\n');
}

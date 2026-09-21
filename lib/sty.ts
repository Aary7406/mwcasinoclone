import type { CSSProperties } from 'react';

/** Converts an inline CSS string (as captured from the DOM) into a React style object. */
export function sty(css: string): CSSProperties {
  const out: Record<string, string> = {};
  for (const part of css.split(/;(?![^(]*\))/)) {
    const i = part.indexOf(':');
    if (i < 0) continue;
    const k = part.slice(0, i).trim();
    if (!k) continue;
    out[k.startsWith('--') ? k : k.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase())] = part.slice(i + 1).trim();
  }
  return out as CSSProperties;
}

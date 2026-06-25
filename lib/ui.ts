import type { CSSProperties } from 'react';

/* ---------------------------------------------------------------------------
 * Ontigon design tokens.
 * Cool, neutral grayscale only — no warm/tan tones (per design direction).
 * Text colors are tuned to pass AAA contrast on their respective backgrounds.
 * ------------------------------------------------------------------------- */
export const C = {
  bg: '#f1f1f2', // page background (very subtle cool gray)
  ink: '#1a1a1c', // near-black primary text / ink
  dark: '#0a0a0b', // dark section background
  heroBg: '#080809', // hero billboard background
  body: '#363638', // body copy on light
  mute: '#676771', // muted labels (AAA large)
  mute2: '#4c4c50', // secondary body (AAA normal, 7.57:1)
  faintInk: '#7a7a82', // faint label on dark ink (#1a1a1c)
  decor: '#b0b0b8', // decorative-only micro labels (cert IDs, timestamps)
  hair: 'rgba(26,26,28,.12)', // hairline rule on light
  hairStrong: 'rgba(26,26,28,.16)',
  // on-dark text (AAA / AA+ on #0a0a0b / #1a1a1c)
  onDark: '#f1f1f2',
  onDark72: 'rgba(255,255,255,.72)',
  onDark62: 'rgba(255,255,255,.62)',
  onDark55: 'rgba(255,255,255,.55)',
  onDark35: 'rgba(255,255,255,.35)',
  onDark28: 'rgba(255,255,255,.28)',
  onDarkHair: 'rgba(255,255,255,.16)',
  lightInk: '#cbcbcf', // body copy on dark-ink (#1a1a1c) sections
} as const;

export const sans = "'Inter', sans-serif";
export const mono = "'IBM Plex Mono', monospace";

/* ---------------------------------------------------------------------------
 * Vignelli mathematical grid system
 * ------------------------------------------------------------------------- */
export const grid = { cols: 12, gap: '24px', maxw: 1320 } as const;

/** Type scale: perfect fourth (×1.333) from 12px */
export const typeScale = [12, 16, 21, 28, 37, 49, 65, 87, 116, 155] as const;

/** Spacing scale: multiples of 8px */
export const spacingScale = [8, 16, 24, 32, 40, 48, 64, 80, 96, 128, 160, 192] as const;

/* Common reusable style fragments ----------------------------------------- */

/** Mono eyebrow / section label. */
export const eyebrow: CSSProperties = {
  fontFamily: mono,
  fontSize: 12,
  letterSpacing: '.26em',
  color: C.mute,
  textTransform: 'uppercase',
  marginBottom: 24,
};

/** Large thin display heading (Inter 200). */
export const display = (size: string): CSSProperties => ({
  fontFamily: sans,
  fontWeight: 200,
  fontSize: size,
  lineHeight: 0.96,
  letterSpacing: '-.025em',
  margin: 0,
});

/** Secondary display heading — use like a "display-2" class. */
export const display2: CSSProperties = {
  fontFamily: sans,
  fontWeight: 200,
  fontSize: 'clamp(28px,2.6vw,49px)',
  lineHeight: 1.08,
  letterSpacing: '-.02em',
  margin: 0,
};

/** Standard body paragraph on light backgrounds. */
export const body: CSSProperties = {
  fontSize: 'clamp(12px,1.1vw,16px)',
  lineHeight: 1.7,
  color: C.body,
};

/** Section row heading (Inter 400). */
export const rowHead: CSSProperties = {
  fontFamily: sans,
  fontWeight: 400,
  fontSize: 'clamp(21px,2.6vw,37px)',
  lineHeight: 1.08,
  margin: 0,
  letterSpacing: '-.01em',
};

/** Primary solid (ink) CTA button. */
export const ctaSolid: CSSProperties = {
  cursor: 'pointer',
  display: 'inline-block',
  background: C.ink,
  color: C.bg,
  fontSize: 16,
  letterSpacing: '.02em',
  padding: '16px 32px',
  borderRadius: 1,
};

/** Ghost (outlined) CTA button on light. */
export const ctaGhost: CSSProperties = {
  cursor: 'pointer',
  display: 'inline-block',
  border: `1px solid ${C.ink}`,
  fontSize: 16,
  letterSpacing: '.02em',
  padding: '16px 32px',
  borderRadius: 1,
};

/** Standard outer content gutter used across sections. */
export const gutter = 'clamp(32px,5vw,64px)';
export const maxw = 1320;

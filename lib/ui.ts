import type { CSSProperties } from 'react';

/* ---------------------------------------------------------------------------
 * Ontigon design tokens.
 * Cool, neutral grayscale only — no warm/tan tones (per design direction).
 * Text colors are tuned to pass AAA contrast on their respective backgrounds.
 * ------------------------------------------------------------------------- */
export const C = {
  bg: '#f1f1f2', // page background
  ink: '#000000', // headings / primary text
  dark: '#000000', // dark section background
  heroBg: '#000000', // hero background
  accent: '#292ec2', // brand accent — buttons
  body: '#4d4d4d', // body copy (~70% black)
  mute: '#666666', // muted labels
  mute2: '#4d4d4d', // secondary body
  faintInk: '#b3b3b3', // faint label on dark sections — AAA on black
  decor: '#666666', // micro labels
  hair: 'rgba(0,0,0,.1)', // hairline rule on light
  hairStrong: 'rgba(0,0,0,.16)',
  // on-dark text (white on black)
  onDark: '#ffffff',
  onDark72: 'rgba(255,255,255,.72)',
  onDark62: 'rgba(255,255,255,.8)',
  onDark55: 'rgba(255,255,255,.8)',
  onDark35: 'rgba(255,255,255,.55)',
  onDark28: 'rgba(255,255,255,.45)',
  onDarkHair: 'rgba(255,255,255,.12)',
  lightInk: '#ffffff', // body copy on dark sections
} as const;

export const sans = "'Roobert', sans-serif";
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
  letterSpacing: '.1em',
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

/** Primary solid CTA button — accent colour. */
export const ctaSolid: CSSProperties = {
  cursor: 'pointer',
  display: 'inline-block',
  background: C.accent,
  color: '#ffffff',
  fontSize: 16,
  letterSpacing: '.04em',
  padding: '16px 32px',
  borderRadius: 1,
};

/** Ghost (outlined) CTA button — solid accent, same as ctaSolid. */
export const ctaGhost: CSSProperties = {
  cursor: 'pointer',
  display: 'inline-block',
  background: C.accent,
  color: '#ffffff',
  fontSize: 16,
  letterSpacing: '.04em',
  padding: '16px 32px',
  borderRadius: 1,
};

/** Standard outer content gutter used across sections. */
export const gutter = 'clamp(32px,5vw,64px)';
export const maxw = 1320;

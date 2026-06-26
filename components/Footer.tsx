import Link from 'next/link';
import { Logo } from './Logo';
import { mono, sans } from '@/lib/ui';

const COLUMNS = [
  {
    title: 'Work',
    links: [
      { href: '/science', label: 'Science' },
      { href: '/results', label: 'Results' },
      { href: '/playground', label: 'Playground' },
      { href: '/roadmap', label: 'Roadmap' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About Us' },
      { href: '/news', label: 'News & Updates' },
      { href: '/investors', label: 'Investor Access' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '/legal', label: 'Terms & Privacy' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { href: 'mailto:aaron@pairofpants.io', label: 'aaron@pairofpants.io', mailto: true },
      { href: '/investors', label: 'Request Access' },
    ],
  },
];

const label: React.CSSProperties = {
  fontFamily: mono,
  fontSize: 12,
  letterSpacing: '.18em',
  color: 'rgba(255,255,255,.32)',
  textTransform: 'uppercase',
  marginBottom: 16,
};

const linkStyle: React.CSSProperties = {
  fontSize: 16,
  color: 'rgba(255,255,255,.55)',
  cursor: 'pointer',
};

export function Footer() {
  return (
    <footer style={{ background: '#0a0a0b', color: '#f1f1f2' }}>

      {/* nav columns */}
      <div
        style={{
          maxWidth: 1320,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4,1fr)',
          gap: 'clamp(24px,4vw,64px)',
          padding: 'clamp(64px,10vh,96px) clamp(32px,5vw,64px) clamp(48px,6vh,64px)',
          borderBottom: '1px solid rgba(255,255,255,.08)',
        }}
      >
        {COLUMNS.map((col) => (
          <div key={col.title}>
            <div style={label}>{col.title}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {col.links.map((l) =>
                l.mailto ? (
                  <a key={l.href} href={l.href} style={linkStyle}>{l.label}</a>
                ) : (
                  <Link key={l.href} href={l.href} style={linkStyle}>{l.label}</Link>
                )
              )}
            </div>
          </div>
        ))}
      </div>

      {/* wordmark + tagline */}
      <div
        style={{
          maxWidth: 1320,
          margin: '0 auto',
          padding: 'clamp(64px,10vh,96px) clamp(32px,5vw,64px) clamp(48px,6vh,64px)',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: 'clamp(24px,4vw,64px)',
          borderBottom: '1px solid rgba(255,255,255,.08)',
        }}
      >
        <Logo style={{ height: 'clamp(64px,10vw,140px)', color: '#f1f1f2', flexShrink: 0 }} />
        <p
          style={{
            fontFamily: sans,
            fontWeight: 200,
            fontSize: 'clamp(16px,1.8vw,24px)',
            lineHeight: 1.4,
            letterSpacing: '-.01em',
            color: 'rgba(255,255,255,.48)',
            margin: 0,
            textAlign: 'right',
            maxWidth: '16ch',
          }}
        >
          Join the quantum class
        </p>
      </div>

      {/* bottom strip */}
      <div
        style={{
          maxWidth: 1320,
          margin: '0 auto',
          padding: '24px clamp(32px,5vw,64px)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        <span style={{ fontFamily: mono, fontSize: 12, letterSpacing: '.06em', color: 'rgba(255,255,255,.22)' }}>
          ontigon.ai · 17 patents pending · June 2026
        </span>
        <span style={{ fontFamily: mono, fontSize: 12, letterSpacing: '.06em', color: 'rgba(255,255,255,.22)' }}>
          Commodity GPU hardware, today.
        </span>
      </div>

    </footer>
  );
}

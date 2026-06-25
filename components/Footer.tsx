import Link from 'next/link';
import { Logo } from './Logo';
import { mono } from '@/lib/ui';

const COLUMNS: { title: string; links: { href: string; label: string; mailto?: boolean }[] }[] = [
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
      { href: 'mailto:aaron@pairofpants.io', label: 'aaron@pairofpants.io', mailto: true },
    ],
  },
];

export function Footer() {
  return (
    <footer style={{ background: '#0a0a0b', color: '#f1f1f2' }}>
      {/* top: logo + tagline + CTA */}
      <div
        data-r-footer-top=""
        style={{
          maxWidth: 1320,
          margin: '0 auto',
          padding: 'clamp(64px,10vh,128px) clamp(32px,5vw,64px) 0',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: 'clamp(32px,5vw,64px)',
          alignItems: 'start',
        }}
      >
        <div>
          <Link
            href="/"
            style={{ cursor: 'pointer', display: 'inline-block', marginBottom: 16, color: '#f1f1f2' }}
          >
            <Logo style={{ height: 'clamp(32px,4vw,48px)' }} />
          </Link>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: 12,
              lineHeight: 1.5,
              color: 'rgba(255,255,255,.55)',
              margin: 0,
              letterSpacing: '.01em',
            }}
          >
            A different geometry for intelligence.
          </p>
        </div>
        <Link
          href="/investors"
          style={{
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            border: '1px solid rgba(255,255,255,.3)',
            color: '#fff',
            fontSize: 16,
            letterSpacing: '.02em',
            padding: '16px 24px',
            borderRadius: 1,
            display: 'inline-block',
          }}
        >
          Request Access&nbsp;→
        </Link>
      </div>

      {/* nav columns */}
      <div
        data-footer-nav=""
        style={{
          maxWidth: 1320,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(3,1fr)',
          gap: 'clamp(24px,4vw,64px)',
          padding: 'clamp(40px,6vh,64px) clamp(32px,5vw,64px)',
          borderBottom: '1px solid rgba(255,255,255,.1)',
        }}
      >
        {COLUMNS.map((col) => (
          <div key={col.title}>
            <div
              style={{
                fontFamily: mono,
                fontSize: 12,
                letterSpacing: '.18em',
                color: 'rgba(255,255,255,.32)',
                textTransform: 'uppercase',
                marginBottom: 16,
              }}
            >
              {col.title}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {col.links.map((l) =>
                l.mailto ? (
                  <a
                    key={l.href}
                    href={l.href}
                    style={{ fontSize: 16, color: 'rgba(255,255,255,.72)' }}
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link
                    key={l.href}
                    href={l.href}
                    style={{ cursor: 'pointer', fontSize: 16, color: 'rgba(255,255,255,.72)' }}
                  >
                    {l.label}
                  </Link>
                ),
              )}
            </div>
          </div>
        ))}
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
        <span
          style={{
            fontFamily: mono,
            fontSize: 12,
            letterSpacing: '.06em',
            color: 'rgba(255,255,255,.22)',
          }}
        >
          ontigon.ai · 17 patents pending · June 2026
        </span>
        <span
          style={{
            fontFamily: mono,
            fontSize: 12,
            letterSpacing: '.06em',
            color: 'rgba(255,255,255,.22)',
          }}
        >
          Commodity GPU hardware, today.
        </span>
      </div>
    </footer>
  );
}

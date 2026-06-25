import Link from 'next/link';
import { Reveal } from '@/components/motion';
import { C, mono, sans, eyebrow } from '@/lib/ui';

const FEED = [
  {
    cat: 'PATENT',
    date: 'May 2026',
    href: '/about',
    title: '17 provisional patents filed through Fish & Richardson. ~250 claims.',
    body: 'The IP strategy is intentional. Provisionals buy 12 months. The clock is running.',
    cta: 'About the company',
    delay: 0,
  },
  {
    cat: 'RESEARCH',
    date: 'Apr 2026',
    href: '/results',
    title: 'Bell-state CHSH violation confirmed. S = 2√2. Error 2.87×10⁻⁷.',
    body: 'The universal quantum gate set from topology was a structural consequence, not a goal. CERT: TOPOS gate chain, 16/16 pass.',
    cta: 'See results',
    delay: 60,
  },
  {
    cat: 'RESEARCH',
    date: 'Mar 2026',
    href: '/results',
    title: 'Association without weight updates: 73.6% ± 6.8%, p < 0.0001.',
    body: 'The geometry required it. No learning rule applied. CERT: RING_03_ASSOC, 5-seed H100.',
    cta: 'See results',
    delay: 120,
  },
  {
    cat: 'RESEARCH',
    date: 'Feb 2026',
    href: '/results',
    title: 'Sleep architecture certified: 85-point memory durability gap.',
    body: 'With sleep: 100% retrieval. Without: 15%. Sleep is causally load-bearing, not incidental. CERT: RING_05_ENV+INT.',
    cta: 'See results',
    delay: 40,
  },
  {
    cat: 'COMPANY',
    date: 'Jan 2026',
    href: '/about',
    title: 'Ontigon incorporated as a Delaware C-corp. Seed stage.',
    body: 'The substrate work precedes the company by years. The company now exists to take it further.',
    cta: 'About the company',
    delay: 80,
  },
  {
    cat: 'BENCHMARK',
    date: 'Dec 2025',
    href: '/news/certification-program',
    title: 'DAEMON vs. Transformer, LSTM: 100% vs. 15.2% on certified tasks.',
    body: 'Single H100. Canonicalized I/O. CERT: DAEMON LPB bakeoff. The gap is structural, not a tuning advantage.',
    cta: 'Read the full writeup',
    delay: 120,
  },
];

export default function NewsPage() {
  return (
    <div>
      <section
        style={{
          padding:
            'clamp(128px,20vh,192px) clamp(32px,5vw,64px) clamp(48px,8vh,96px)',
          maxWidth: 1320,
          margin: '0 auto',
          borderBottom: `1px solid ${C.hair}`,
        }}
      >
        <Reveal style={eyebrow}>News &amp; Updates</Reveal>
        <Reveal
          as="h1"
          delay={60}
          style={{ fontFamily: sans, fontWeight: 200, fontSize: 'clamp(48px,10vw,150px)', lineHeight: 0.96, letterSpacing: '-.025em', margin: '0 0 36px' }}
        >
          Dispatches from the work.
        </Reveal>
        <Reveal
          as="p"
          delay={120}
          style={{ fontSize: 'clamp(12px,1.1vw,16px)', lineHeight: 1.7, color: C.body, maxWidth: '52ch', margin: 0 }}
        >
          We publish when there&apos;s something real to say. <br />
          No noise. Below is the record.
        </Reveal>
      </section>

      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 clamp(32px,5vw,64px) clamp(80px,12vh,160px)' }}>
        {/* Featured / latest */}
        <Reveal
          as="article"
          data-r=""
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(24px,4vw,64px)',
            alignItems: 'start',
            padding: 'clamp(48px,8vh,96px) 0',
            borderBottom: `1px solid ${C.hair}`,
          }}
        >
          <div>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 22, flexWrap: 'wrap' }}>
              <span style={{ fontFamily: mono, fontSize: 12, letterSpacing: '.14em', color: '#fff', background: C.ink, padding: '4px 10px' }}>RESEARCH</span>
              <time style={{ fontFamily: mono, fontSize: 12, letterSpacing: '.08em', color: C.mute }}>June 2026</time>
            </div>
            <h2 style={{ fontFamily: sans, fontWeight: 200, fontSize: 'clamp(28px,3.2vw,49px)', lineHeight: 1.06, letterSpacing: '-.02em', margin: '0 0 20px' }}>
              484 certification scripts. 300+ certified claims. What the program
              is and why it exists.
            </h2>
            <p style={{ fontSize: 'clamp(12px,1.1vw,16px)', lineHeight: 1.7, color: C.body, maxWidth: '52ch', margin: '0 0 28px' }}>
              The certification methodology isn&apos;t just a list of results.
              It&apos;s a falsification program. Every claim has a script
              designed to prove it wrong. Here&apos;s how it works and what
              it&apos;s produced.
            </p>
            <Link href="/news/certification-program" style={{ cursor: 'pointer', fontSize: 16, letterSpacing: '.02em', borderBottom: `1px solid ${C.ink}`, paddingBottom: 2 }}>
              Read the results&nbsp;→
            </Link>
          </div>
          <div style={{ background: '#0a0a0b', aspectRatio: '4/3', overflow: 'hidden', position: 'relative' }}>
            <FeaturedArt />
          </div>
        </Reveal>

        {/* Feed */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2,1fr)',
            gap: 1,
            background: 'rgba(26,25,22,.1)',
            borderLeft: '1px solid rgba(26,25,22,.1)',
            borderRight: '1px solid rgba(26,25,22,.1)',
            borderBottom: '1px solid rgba(26,25,22,.1)',
          }}
        >
          {FEED.map((a) => (
            <Reveal
              key={a.title}
              as={Link}
              href={a.href}
              delay={a.delay}
              style={{
                cursor: 'pointer',
                background: '#f1f1f2',
                padding: 'clamp(24px,2.8vw,40px)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18, gap: 12, flexWrap: 'wrap' }}>
                <span style={{ fontFamily: mono, fontSize: 12, letterSpacing: '.14em', color: C.mute, border: '1px solid rgba(26,25,22,.18)', padding: '3px 8px' }}>{a.cat}</span>
                <time style={{ fontFamily: mono, fontSize: 12, letterSpacing: '.06em', color: C.decor }}>{a.date}</time>
              </div>
              <h3 style={{ fontFamily: sans, fontWeight: 300, fontSize: 'clamp(16px,1.8vw,24px)', lineHeight: 1.15, letterSpacing: '-.01em', margin: '0 0 12px' }}>
                {a.title}
              </h3>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: C.mute2, margin: '0 0 20px', flex: 1 }}>{a.body}</p>
              <span style={{ fontSize: 12.5, letterSpacing: '.04em', color: C.ink, borderBottom: '1px solid rgba(26,26,28,.25)', paddingBottom: 2, alignSelf: 'flex-start' }}>
                {a.cta}&nbsp;→
              </span>
            </Reveal>
          ))}
        </div>

        {/* CTA row */}
        <Reveal style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24, paddingTop: 48 }}>
          <p style={{ fontFamily: sans, fontWeight: 200, fontSize: 'clamp(16px,1.8vw,24px)', lineHeight: 1.4, color: C.body, maxWidth: '32ch', margin: 0 }}>
            Want the full certification inventory and technical materials?
          </p>
          <Link href="/investors" style={{ cursor: 'pointer', display: 'inline-block', background: C.ink, color: C.bg, fontSize: 16, letterSpacing: '.02em', padding: '16px 32px', borderRadius: 1 }}>
            Request Access&nbsp;→
          </Link>
        </Reveal>
      </div>
    </div>
  );
}

/** Abstract mathematical composition used as the featured-article image. */
function FeaturedArt() {
  return (
    <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }} preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="g" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0L0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="800" height="600" fill="url(#g)" />
      <circle cx="560" cy="280" r="340" fill="none" stroke="rgba(255,255,255,.09)" strokeWidth="1" />
      <circle cx="560" cy="280" r="240" fill="none" stroke="rgba(255,255,255,.12)" strokeWidth="1" />
      <circle cx="560" cy="280" r="145" fill="none" stroke="rgba(255,255,255,.18)" strokeWidth="1" />
      <circle cx="560" cy="280" r="68" fill="none" stroke="rgba(255,255,255,.28)" strokeWidth="1" />
      <circle cx="220" cy="180" r="210" fill="none" stroke="rgba(255,255,255,.07)" strokeWidth="1" />
      <circle cx="310" cy="420" r="170" fill="none" stroke="rgba(255,255,255,.1)" strokeWidth="1" />
      <circle cx="140" cy="350" r="280" fill="none" stroke="rgba(255,255,255,.06)" strokeWidth="1" />
      <circle cx="650" cy="120" r="190" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="1" />
      <line x1="-20" y1="480" x2="820" y2="80" stroke="rgba(255,255,255,.08)" strokeWidth="1" />
      <line x1="-20" y1="560" x2="820" y2="160" stroke="rgba(255,255,255,.05)" strokeWidth="1" />
      <line x1="120" y1="-20" x2="680" y2="620" stroke="rgba(255,255,255,.06)" strokeWidth="1" />
      <path d="M 80 300 A 180 180 0 0 1 380 120" fill="none" stroke="rgba(255,255,255,.22)" strokeWidth="1.5" />
      <path d="M 400 480 A 120 90 0 0 0 700 320" fill="none" stroke="rgba(255,255,255,.18)" strokeWidth="1" />
      <path d="M 50 100 A 260 200 0 0 1 600 500" fill="none" stroke="rgba(255,255,255,.1)" strokeWidth="1" />
      <g fill="rgba(255,255,255,.5)">
        <circle cx="400" cy="298" r="2.5" />
        <circle cx="418" cy="284" r="1.5" />
        <circle cx="385" cy="312" r="1.5" />
        <circle cx="406" cy="316" r="1" />
        <circle cx="392" cy="280" r="1" />
      </g>
      <g fill="rgba(255,255,255,.25)">
        <circle cx="220" cy="420" r="1.5" />
        <circle cx="232" cy="408" r="1" />
        <circle cx="210" cy="432" r="2" />
        <circle cx="244" cy="418" r="1" />
      </g>
      <g fill="rgba(255,255,255,.2)">
        <circle cx="640" cy="380" r="1.5" />
        <circle cx="652" cy="370" r="1" />
        <circle cx="630" cy="390" r="2" />
      </g>
      <circle cx="400" cy="298" r="28" fill="none" stroke="rgba(255,255,255,.45)" strokeWidth="1" />
      <circle cx="400" cy="298" r="14" fill="none" stroke="rgba(255,255,255,.35)" strokeWidth="1" />
      <text x="32" y="568" fontFamily="'IBM Plex Mono', monospace" fontSize="10" letterSpacing="2" fill="rgba(255,255,255,.25)">
        CERT: DAEMON LPB BAKEOFF — DEC 2025
      </text>
    </svg>
  );
}

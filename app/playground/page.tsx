import Link from 'next/link';
import { PlayCard } from '@/components/PlayCard';
import { Reveal } from '@/components/motion';
import { C, sans, eyebrow, ctaSolid } from '@/lib/ui';

const DEMOS = [
  {
    tag: '01 / LIVE',
    title: 'Black-box memory',
    desc: "Write to the internal state, then prove from the output channel that you can't read it back. The safety boundary, live.",
    delay: 0,
  },
  {
    tag: '02 / LIVE',
    title: 'Hopf fibration, interactive',
    desc: 'Rotate the three-sphere by hand. Watch the fibers stay linked under every transformation: the topology that everything else derives from.',
    delay: 80,
  },
  {
    tag: '03 / LIVE',
    title: 'Quantum gate chain',
    desc: 'Compose Hadamard, CNOT, CZ on commodity hardware and verify a Bell-state CHSH violation in the browser.',
    delay: 160,
  },
  {
    tag: '04 / SOON',
    title: 'Sleep & memory durability',
    desc: 'Overwrite episodic memory with and without the sleep architecture, and measure the 85-point retrieval gap yourself.',
    delay: 240,
  },
];

export default function PlaygroundPage() {
  return (
    <div>
      <section
        style={{
          padding:
            'clamp(130px,20vh,220px) clamp(20px,5vw,64px) clamp(56px,8vh,100px)',
          maxWidth: 1320,
          margin: '0 auto',
        }}
      >
        <Reveal style={eyebrow}>Playground</Reveal>
        <Reveal
          as="h1"
          delay={60}
          style={{ fontFamily: sans, fontWeight: 200, fontSize: 'clamp(48px,10vw,150px)', lineHeight: 0.96, letterSpacing: '-.025em', margin: '0 0 40px' }}
        >
          See the black box.
        </Reveal>
        <Reveal
          as="p"
          delay={120}
          style={{ fontSize: 'clamp(14px,1.1vw,16px)', lineHeight: 1.7, color: C.body, maxWidth: '58ch', margin: 0 }}
        >
          Interactive demos run directly against the substrate. No slides, no
          hand-waving. Open one and watch the geometry behave. New demos are
          added as claims are certified.
        </Reveal>
      </section>

      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 clamp(20px,5vw,64px) clamp(80px,12vh,160px)' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,360px),1fr))',
            gap: 1,
            background: C.hair,
            border: `1px solid ${C.hair}`,
          }}
        >
          {DEMOS.map((d) => (
            <PlayCard key={d.title} {...d} />
          ))}
        </div>

        <Reveal
          style={{
            marginTop: 64,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 24,
            borderTop: `1px solid ${C.hair}`,
            paddingTop: 40,
          }}
        >
          <p style={{ fontFamily: sans, fontWeight: 200, fontStyle: 'italic', fontSize: 'clamp(17px,1.8vw,24px)', lineHeight: 1.4, color: C.body, maxWidth: '30ch', margin: 0 }}>
            Some demos require access. We&apos;ll unlock them when we talk.
          </p>
          <Link href="/investors" style={ctaSolid}>
            Request Access&nbsp;→
          </Link>
        </Reveal>
      </div>
    </div>
  );
}

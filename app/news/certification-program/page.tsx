import Link from 'next/link';
import { C, mono, sans, ctaSolid } from '@/lib/ui';

const para: React.CSSProperties = {
  fontSize: '16px',
  lineHeight: 1.75,
  color: C.body,
};
const h2: React.CSSProperties = {
  fontFamily: sans,
  fontWeight: 200,
  fontSize: 'clamp(21px,2.8vw,37px)',
  lineHeight: 1.08,
  letterSpacing: '-.02em',
  margin: 0,
};

const CERTS = [
  ['DAEMON LPB', '100% vs. Transformer 15.2% on certified associative memory tasks. Single H100 GPU, canonicalized I/O.'],
  ['RING_05', 'Sleep architecture: 100% vs. 15% retrieval after episodic overwrite. 85-point gap is causally load-bearing.'],
  ['RING_03', '73.6% association without weight updates. p < 0.0001. 5-seed H100.'],
  ['TOPOS', 'Universal quantum gate set: 16/16 pass. Bell CHSH violation S = 2√2, error 2.87×10⁻⁷.'],
];

export default function ArticlePage() {
  return (
    <div>
      <section style={{ padding: 'clamp(128px,20vh,192px) clamp(32px,5vw,64px) clamp(48px,8vh,80px)', maxWidth: 860, margin: '0 auto' }}>
        <Link href="/news" style={{ cursor: 'pointer', fontFamily: mono, fontSize: 12, letterSpacing: '.14em', color: C.mute, textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 40 }}>
          ← News &amp; Updates
        </Link>
        <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginBottom: 28, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: mono, fontSize: 12, letterSpacing: '.14em', color: '#f1f1f2', background: C.accent, padding: '4px 10px' }}>RESEARCH</span>
          <time style={{ fontFamily: mono, fontSize: 12, letterSpacing: '.08em', color: C.mute }}>June 2026</time>
        </div>
        <h1 style={{ fontFamily: sans, fontWeight: 200, fontSize: 'clamp(34px,5vw,72px)', lineHeight: 1.04, letterSpacing: '-.025em', margin: '0 0 32px' }}>
          484 certification scripts. 300+ certified claims. What the program is
          and why it exists.
        </h1>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: C.body, margin: 0 }}>By the Ontigon team.</p>
      </section>

      <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 clamp(32px,5vw,64px) clamp(80px,12vh,160px)' }}>
        <div style={{ borderTop: `1px solid ${C.hair}`, paddingTop: 'clamp(48px,7vh,80px)', display: 'flex', flexDirection: 'column', gap: 'clamp(28px,4vh,40px)' }}>
          <p style={{ ...para, color: C.ink, fontWeight: 300 }}>
            The Ontigon certification program is not a marketing layer. It is the
            methodology. Every claim we make about the substrate has a
            corresponding script designed to falsify it. If the claim is wrong,
            the script catches it. If the script passes, the claim is certified.
            There are 484 of them.
          </p>
          <p style={para}>
            The structure of the program follows from the science. The substrate
            is derived from shape dynamics: a formulation of physics that strips
            away coordinate-dependent quantities and keeps only what is
            relational. The derivation produces consequences. Those consequences
            are testable. The certification program is the test.
          </p>

          <h2 style={h2}>Why falsification, not validation</h2>
          <p style={para}>
            Most technical claims are validated: you run an experiment, it
            produces the expected result, you publish. The problem is that
            validation confirms. It can&apos;t rule out that your result is an
            artifact of your setup, your data, or your assumptions. Falsification
            tries to break the claim. A claim that survives a serious attempt to
            break it is meaningful. A claim that was never tested against failure
            is not.
          </p>
          <p style={para}>
            Each certification script specifies the input conditions, the
            expected output, the tolerance, and the failure criterion. The script
            is run. Either it passes or it does not. There is no partial credit.
            If a script fails, the corresponding claim is retracted until the
            underlying issue is resolved.
          </p>

          <h2 style={h2}>What has been certified</h2>
          <p style={para}>
            The 300+ certified claims span four domains: associative memory
            performance, sleep-dependent memory durability, spontaneous
            association without weight updates, and the quantum gate set derived
            from topological structure. The benchmark results that appear on the
            Results page are summaries of certified claims. The cert IDs (DAEMON
            LPB bakeoff, RING_03_ASSOC, RING_05_ENV+INT, TOPOS gate chain)
            correspond to specific script groups.
          </p>

          <div style={{ background: '#f1f1f2', border: `1px solid ${C.ink}`, padding: 'clamp(32px,3.5vw,40px)' }}>
            <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: '.14em', color: C.mute, marginBottom: 16 }}>SELECTED CERTIFIED RESULTS</div>
            <div style={{ display: 'flex', flexDirection: 'column', borderTop: `1px solid ${C.hair}` }}>
              {CERTS.map(([id, desc], i) => (
                <div
                  key={id}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 24,
                    padding: '16px 0',
                    borderBottom: i < CERTS.length - 1 ? `1px solid ${C.hair}` : undefined,
                  }}
                >
                  <span style={{ fontFamily: mono, fontSize: 12, letterSpacing: '.04em', color: C.mute, whiteSpace: 'nowrap' }}>{id}</span>
                  <span style={{ fontSize: 16, lineHeight: 1.5, color: C.ink }}>{desc}</span>
                </div>
              ))}
            </div>
          </div>

          <h2 style={h2}>Where this goes next</h2>
          <p style={para}>
            The certification program scales with the research. Each new
            theoretical consequence of the geometric derivation produces new
            certifiable claims. Rings 0 through 7 were certified in 15 calendar
            days with zero parameter tuning. The program is active. The inventory
            grows.
          </p>

          <p style={{ fontFamily: sans, fontWeight: 200, fontSize: 'clamp(16px,1.8vw,24px)', lineHeight: 1.4, letterSpacing: '-.01em', color: C.ink, borderLeft: `2px solid ${C.ink}`, paddingLeft: 24 }}>
            Investors who request access receive the full certification
            inventory: all 484 scripts, pass/fail status, and the underlying
            claim text.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', paddingTop: 16 }}>
            <Link href="/results" style={{ cursor: 'pointer', border: `1px solid ${C.ink}`, color: C.ink, fontSize: 16, letterSpacing: '.04em', padding: '16px 24px', borderRadius: 1 }}>
              See all results&nbsp;→
            </Link>
            <Link href="/investors" style={{ ...ctaSolid, fontSize: 14, padding: '14px 26px' }}>
              Request full certification inventory&nbsp;→
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

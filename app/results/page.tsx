import Link from 'next/link';
import { Reveal, CountUp, Bar } from '@/components/motion';
import { C, mono, sans, eyebrow, ctaSolid } from '@/lib/ui';

const sectionPad: React.CSSProperties = {
  padding: 'clamp(48px,7vh,86px) 0',
  borderTop: `1px solid ${C.hair}`,
};
const h2row: React.CSSProperties = {
  fontFamily: sans,
  fontWeight: 400,
  fontSize: 'clamp(24px,2.8vw,40px)',
  margin: 0,
  letterSpacing: '-.01em',
};
const certLabel: React.CSSProperties = {
  fontFamily: mono,
  fontSize: 11.5,
  letterSpacing: '.08em',
  color: C.mute,
};
const lead: React.CSSProperties = {
  fontSize: 15,
  lineHeight: 1.6,
  color: C.mute,
  maxWidth: '60ch',
  margin: '0 0 40px',
};
const barVal: React.CSSProperties = {
  fontFamily: sans,
  fontSize: 24,
  textAlign: 'right',
};
const barName: React.CSSProperties = {
  fontFamily: mono,
  fontSize: 13,
  letterSpacing: '.04em',
};

function BarRow({
  cols,
  name,
  fill,
  color,
  value,
  dim,
}: {
  cols: string;
  name: string;
  fill: number;
  color: string;
  value: string;
  dim?: boolean;
}) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: cols,
        gap: 18,
        alignItems: 'center',
      }}
    >
      <span style={{ ...barName, color: dim ? C.mute : undefined }}>{name}</span>
      <Bar fill={fill} color={color} />
      <span style={{ ...barVal, color: dim ? C.mute : undefined }}>{value}</span>
    </div>
  );
}

export default function ResultsPage() {
  return (
    <div>
      <section
        style={{
          padding:
            'clamp(130px,20vh,220px) clamp(20px,5vw,64px) clamp(60px,9vh,110px)',
          maxWidth: 1320,
          margin: '0 auto',
        }}
      >
        <Reveal style={eyebrow}>Results</Reveal>
        <Reveal
          as="h1"
          delay={60}
          style={{ fontFamily: sans, fontWeight: 200, fontSize: 'clamp(48px,10vw,150px)', lineHeight: 0.96, letterSpacing: '-.025em', margin: '0 0 40px' }}
        >
          The work is the proof.
        </Reveal>
        <Reveal
          as="p"
          delay={120}
          style={{ fontSize: 'clamp(16px,1.5vw,21px)', lineHeight: 1.7, color: C.body, maxWidth: '58ch', margin: 0 }}
        >
          Every claim has a falsifier: an experiment designed to show the result
          is wrong. 484 certification scripts. 300+ certified claims. If
          something doesn&apos;t hold, we say so.
        </Reveal>
      </section>

      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 clamp(20px,5vw,64px)' }}>
        {/* direct benchmarks */}
        <Reveal style={sectionPad}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 12, marginBottom: 14 }}>
            <h2 style={h2row}>Direct benchmarks</h2>
            <span style={certLabel}>CERT: DAEMON LPB bakeoff</span>
          </div>
          <p style={lead}>
            DAEMON substrate vs. Transformer and LSTM: certified associative
            memory tasks, canonicalized I/O, single H100 GPU.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 880 }}>
            <BarRow cols="120px 1fr 72px" name="DAEMON" fill={100} color={C.ink} value="100%" />
            <BarRow cols="120px 1fr 72px" name="Transformer" fill={15.2} color={C.decor} value="15.2%" dim />
            <BarRow cols="120px 1fr 72px" name="LSTM" fill={15.4} color={C.decor} value="15.4%" dim />
          </div>
        </Reveal>

        {/* memory */}
        <Reveal style={sectionPad}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 12, marginBottom: 14 }}>
            <h2 style={h2row}>Memory</h2>
            <span style={certLabel}>CERT: RING_05_ENV+INT</span>
          </div>
          <p style={lead}>
            Sleep-dependent memory durability: retrieval after new content is
            written over episodic memory.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 880, marginBottom: 28 }}>
            <BarRow cols="160px 1fr 72px" name="With sleep arch." fill={100} color={C.ink} value="100%" />
            <BarRow cols="160px 1fr 72px" name="Without sleep" fill={15} color={C.decor} value="15%" dim />
          </div>
          <p style={{ fontFamily: sans, fontStyle: 'italic', fontSize: 'clamp(16px,1.6vw,21px)', lineHeight: 1.45, color: C.body, maxWidth: '42ch', margin: 0 }}>
            The 85-point gap is not incidental. Sleep is causally load-bearing.
          </p>
        </Reveal>

        {/* emergence */}
        <Reveal
          style={{
            ...sectionPad,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(24px,4vw,72px)',
            alignItems: 'center',
          }}
          data-r=""
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 14 }}>
              <h2 style={h2row}>Emergence</h2>
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: C.body, maxWidth: '48ch', margin: '0 0 18px' }}>
              Association from physics alone. The system formed associations
              under task pressure with{' '}
              <span style={{ fontStyle: 'italic', fontFamily: sans }}>no weight updates.</span>{' '}
              No learning rule applied. The geometry required it.
            </p>
            <span style={certLabel}>CERT: RING_03_ASSOC</span>
          </div>
          <div style={{ borderLeft: `1px solid ${C.hairStrong}`, paddingLeft: 'clamp(20px,3vw,44px)' }}>
            <CountUp
              to={73.6}
              decimals={1}
              suffix="%"
              style={{ fontFamily: sans, fontWeight: 200, fontSize: 'clamp(54px,8vw,110px)', lineHeight: 0.92, letterSpacing: '-.02em' }}
            />
            <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: '.06em', color: C.mute, marginTop: 16, lineHeight: 1.6 }}>
              ± 6.8% · p &lt; 0.0001
              <br />5-seed H100
            </div>
          </div>
        </Reveal>

        {/* quantum */}
        <Reveal style={sectionPad}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 12, marginBottom: 14 }}>
            <h2 style={h2row}>Quantum</h2>
            <span style={certLabel}>CERT: TOPOS gate chain</span>
          </div>
          <p style={lead}>
            Universal gate set from topology: Hadamard, CNOT, CZ, Bell states,
            all derived from geometric structure. Verified on commodity
            hardware.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: C.hair, border: `1px solid ${C.hair}`, maxWidth: 760 }} data-r="">
            <div style={{ background: '#f1f1f2', padding: 32 }}>
              <div style={{ fontFamily: sans, fontWeight: 200, fontSize: 'clamp(40px,5vw,68px)', lineHeight: 1 }}>16/16</div>
              <div style={{ fontFamily: mono, fontSize: 11.5, letterSpacing: '.06em', color: C.mute, marginTop: 12 }}>
                universal gate set · pass
              </div>
            </div>
            <div style={{ background: '#f1f1f2', padding: 32 }}>
              <div style={{ fontFamily: sans, fontWeight: 200, fontSize: 'clamp(40px,5vw,68px)', lineHeight: 1 }}>2√2</div>
              <div style={{ fontFamily: mono, fontSize: 11.5, letterSpacing: '.06em', color: C.mute, marginTop: 12 }}>
                Bell CHSH violation, S<br />error 2.87×10⁻⁷
              </div>
            </div>
          </div>
          <p style={{ fontFamily: sans, fontStyle: 'italic', fontSize: 'clamp(16px,1.6vw,21px)', lineHeight: 1.45, color: C.body, maxWidth: '38ch', margin: '32px 0 0' }}>
            This was not the goal. It is what the geometry produced.
          </p>
        </Reveal>

        {/* program scale */}
        <Reveal style={sectionPad}>
          <h2 style={{ ...h2row, margin: '0 0 40px' }}>Program scale</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: 1, background: C.hair, border: `1px solid ${C.hair}` }}>
            {[
              ['484', 'certification scripts'],
              ['300+', 'certified claims'],
              ['41', 'active projects'],
              ['17', 'provisional patents · ~250 claims'],
              ['0–7', 'rings certified in 15 days, zero tuning'],
            ].map(([big, label]) => (
              <div key={label} style={{ background: '#f1f1f2', padding: 26 }}>
                <div style={{ fontFamily: sans, fontWeight: 200, fontSize: 'clamp(32px,3.4vw,48px)', lineHeight: 1 }}>{big}</div>
                <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '.05em', color: C.mute, marginTop: 10 }}>{label}</div>
              </div>
            ))}
          </div>
          <Link href="/investors" style={{ ...ctaSolid, marginTop: 56 }}>
            Request full certification inventory&nbsp;→
          </Link>
        </Reveal>
      </div>
    </div>
  );
}

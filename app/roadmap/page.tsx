import Link from 'next/link';
import { Reveal } from '@/components/motion';
import { C, mono, sans, eyebrow, ctaSolid } from '@/lib/ui';

const stageLabel = (color: string): React.CSSProperties => ({
  fontFamily: mono,
  fontSize: 12,
  letterSpacing: '.1em',
  textTransform: 'uppercase',
  color,
  marginBottom: 16,
});
const stageHead: React.CSSProperties = {
  fontFamily: sans,
  fontWeight: 200,
  fontSize: 'clamp(21px,3vw,49px)',
  lineHeight: 1.08,
  letterSpacing: '-.02em',
  margin: '0 0 24px',
};

function Dot({ style }: { style: React.CSSProperties }) {
  return (
    <div
      style={{
        position: 'absolute',
        left: 14,
        width: 17,
        height: 17,
        borderRadius: '50%',
        marginTop: 6,
        ...style,
      }}
    />
  );
}

export default function RoadmapPage() {
  return (
    <div>
      <section style={{ padding: 'clamp(128px,20vh,192px) clamp(32px,5vw,64px) clamp(48px,8vh,96px)', maxWidth: 1320, margin: '0 auto' }}>
        <Reveal style={eyebrow}>Roadmap</Reveal>
        <Reveal as="h1" delay={60} style={{ fontFamily: sans, fontWeight: 200, fontSize: 'clamp(48px,10vw,150px)', lineHeight: 0.96, letterSpacing: '-.025em', margin: '0 0 40px' }}>
          Where we&apos;re going.
        </Reveal>
        <Reveal as="p" delay={120} style={{ fontSize: 'clamp(12px,1.1vw,16px)', lineHeight: 1.7, color: C.body, maxWidth: '56ch', margin: 0 }}>
          This is a working research program, not a product roadmap. These are
          the open questions and the sequence in which the geometry forces us to
          answer them.
        </Reveal>
      </section>

      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 clamp(32px,5vw,64px) clamp(80px,12vh,160px)' }}>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: 0, bottom: 0, left: 22, width: 1, background: C.hair }} />

          {/* Complete */}
          <Reveal style={{ padding: 'clamp(40px,6vh,64px) 0 clamp(40px,6vh,64px) 60px', borderBottom: `1px solid ${C.hair}`, position: 'relative' }}>
            <Dot style={{ background: C.ink }} />
            <div style={stageLabel(C.decor)}>Complete</div>
            <h2 style={stageHead}>Geometric derivation &amp; core certification</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 1, background: 'rgba(26,25,22,.1)', border: '1px solid rgba(26,25,22,.1)', maxWidth: 820 }}>
              {[
                ['CERT', 'Three-sphere substrate derived from shape dynamics'],
                ['CERT', 'Universal quantum gate set from topology'],
                ['CERT', 'Sleep-dependent memory durability (85-point gap)'],
                ['CERT', 'Association without weight updates (73.6%)'],
                ['FILED', '17 provisional patents, Fish & Richardson'],
              ].map(([tag, text], i) => (
                <div key={i} style={{ background: '#f1f1f2', padding: '24px 24px' }}>
                  <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: '.06em', color: C.mute, marginBottom: 8 }}>{tag}</div>
                  <div style={{ fontSize: 16, lineHeight: 1.5, color: C.ink }}>{text}</div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Active */}
          <Reveal style={{ padding: 'clamp(40px,6vh,64px) 0 clamp(40px,6vh,64px) 60px', borderBottom: `1px solid ${C.hair}`, position: 'relative' }}>
            <Dot style={{ background: '#f1f1f2', border: `2px solid ${C.ink}` }} />
            <div style={stageLabel(C.mute)}>Active research frontier</div>
            <h2 style={{ ...stageHead, margin: '0 0 16px' }}>Physical interpretation of the geometry</h2>
            <p style={{ fontSize: 'clamp(12px,1.1vw,16px)', lineHeight: 1.7, color: C.body, maxWidth: '58ch', margin: '0 0 28px' }}>
              The geometric derivation is proven. The link between the
              substrate&apos;s topology and its full physical interpretation,
              specifically, the mass-energy correspondence and the binding
              dynamics at scale: that is the open question. We say this because it
              is true.
            </p>
            <p style={{ fontFamily: sans, fontSize: 'clamp(12px,1.1vw,16px)', lineHeight: 1.5, color: C.mute2, maxWidth: '44ch', margin: 0 }}>
              The geometry is right. We are proving the last link in the chain.
            </p>
          </Reveal>

          {/* Near-term */}
          <Reveal style={{ padding: 'clamp(40px,6vh,64px) 0 clamp(40px,6vh,64px) 60px', borderBottom: `1px solid ${C.hair}`, position: 'relative' }}>
            <Dot style={{ background: '#f1f1f2', border: '2px solid rgba(26,25,22,.3)' }} />
            <div style={stageLabel(C.decor)}>Near-term</div>
            <h2 style={stageHead}>Scale certification &amp; commercial pilots</h2>
            <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid rgba(26,25,22,.1)' }}>
              {[
                ['Ring 0–7 complete', 'Zero-tuning certification of increasing cognitive complexity from associative recall to structured reasoning.'],
                ['Commercial stack', 'Revenue-generating applications layered on the substrate. Funds the physics work.'],
                ['Playground → full demos', 'Interactive black-box demos wired to the live substrate for qualified investors and partners.'],
              ].map(([label, text]) => (
                <div key={label} style={{ padding: '16px 0', borderBottom: '1px solid rgba(26,25,22,.1)', display: 'grid', gridTemplateColumns: '2fr 3fr', gap: 24, alignItems: 'start' }}>
                  <span style={{ fontFamily: mono, fontSize: 12, letterSpacing: '.04em', color: C.mute }}>{label}</span>
                  <span style={{ fontSize: 16, lineHeight: 1.6, color: C.body }}>{text}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Horizon */}
          <Reveal style={{ padding: 'clamp(40px,6vh,64px) 0 0 60px', position: 'relative' }}>
            <Dot style={{ background: '#f1f1f2', border: '2px solid rgba(26,26,28,.16)' }} />
            <div style={stageLabel('#c5c5c9')}>Horizon</div>
            <h2 style={{ ...stageHead, margin: '0 0 16px', color: '#787880' }}>
              A substrate that doesn&apos;t need scale.
            </h2>
            <p style={{ fontSize: 'clamp(12px,1.1vw,16px)', lineHeight: 1.7, color: C.mute, maxWidth: '56ch', margin: '0 0 40px' }}>
              When the geometry and physics are fully unified, the compute cost
              becomes a function of the topology, not the parameter count. That is
              the end state. We are not there yet. We know the shape of the path.
            </p>
            <Link href="/investors" style={ctaSolid}>
              Follow the work →
            </Link>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

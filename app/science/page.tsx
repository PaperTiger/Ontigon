import Link from 'next/link';
import { SphereCanvas } from '@/components/SphereCanvas';
import { Reveal } from '@/components/motion';
import { C, mono, sans, eyebrow, rowHead, ctaGhost } from '@/lib/ui';

const twoCol: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '.42fr 1fr',
  gap: 'clamp(24px,4vw,72px)',
  padding: 'clamp(48px,7vh,90px) 0',
  borderTop: `1px solid ${C.hair}`,
};

const colBody: React.CSSProperties = {
  fontSize: 'clamp(16px,1.4vw,20px)',
  lineHeight: 1.7,
  color: C.body,
  maxWidth: '58ch',
  margin: 0,
};

const emergeNum: React.CSSProperties = {
  fontFamily: mono,
  fontSize: 11,
  letterSpacing: '.16em',
  color: '#7a7a82',
  marginBottom: 22,
};
const emergeHead: React.CSSProperties = {
  fontFamily: sans,
  fontWeight: 400,
  fontSize: 'clamp(22px,2.2vw,30px)',
  margin: '0 0 16px',
};
const emergeBody: React.CSSProperties = {
  fontSize: 14.5,
  lineHeight: 1.65,
  color: '#cbcbcf',
  margin: 0,
};

export default function SciencePage() {
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
        <Reveal style={eyebrow}>Science</Reveal>
        <Reveal
          as="h1"
          delay={60}
          style={{ fontFamily: sans, fontWeight: 200, fontSize: 'clamp(48px,10vw,150px)', lineHeight: 0.96, letterSpacing: '-.025em', margin: '0 0 40px' }}
        >
          A different shape.
        </Reveal>
        <Reveal
          as="p"
          delay={120}
          style={{
            fontFamily: sans,
            fontWeight: 200,
            fontSize: 'clamp(18px,2vw,26px)',
            lineHeight: 1.5,
            color: C.body,
            maxWidth: '46ch',
            margin: 0,
          }}
        >
          The AI field spent a decade making models bigger. We spent seven years
          asking whether a different geometric substrate could make the size
          question <span style={{ fontStyle: 'italic' }}>irrelevant.</span>
        </Reveal>
      </section>

      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 clamp(20px,5vw,64px)' }}>
        {/* shape dynamics */}
        <Reveal data-r="" style={twoCol}>
          <h2 style={rowHead}>What shape dynamics is</h2>
          <p style={colBody}>
            Most physics describes the world in terms of position, momentum,
            mass. Shape dynamics strips all of that away and asks: what is left
            when you remove everything that doesn&apos;t affect the
            relationships between things? What remains is pure geometry. And
            geometry, it turns out, has rules that produce consequences.
          </p>
        </Reveal>

        {/* three-sphere */}
        <Reveal data-r="" style={twoCol}>
          <h2 style={rowHead}>The three-sphere</h2>
          <div>
            <p style={{ ...colBody, margin: '0 0 28px' }}>
              The substrate is built on a three-sphere, S³. It has a specific
              property that turns out to be exactly what a cognitive
              architecture needs: two structurally separate regions. One
              internal. One observable. The internal state cannot leak into the
              observable output. Not because of a policy. Because the geometry
              forbids it.
            </p>
            <div
              style={{
                fontFamily: sans,
                fontStyle: 'italic',
                fontSize: 'clamp(20px,2.2vw,30px)',
                lineHeight: 1.35,
                borderLeft: `2px solid ${C.ink}`,
                paddingLeft: 24,
                maxWidth: '34ch',
              }}
            >
              That is the safety boundary. It is a theorem, not a rule.
            </div>
          </div>
        </Reveal>

        {/* zero free params */}
        <Reveal data-r="" style={twoCol}>
          <h2 style={rowHead}>Zero free parameters</h2>
          <div>
            <p style={{ ...colBody, margin: '0 0 36px' }}>
              Everything that governs the system&apos;s behavior falls out of the
              topology:
            </p>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 0,
                borderTop: `1px solid ${C.hair}`,
              }}
            >
              {[
                ['The energy floor.', 'Set by geometry, not by how many computers you have.'],
                ['The binding threshold.', 'Below it, things are separate. Above it, they unify into something.'],
                ['The minimum unit.', 'Comes from the shape, not the silicon.'],
              ].map(([t, d]) => (
                <div
                  key={t}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'auto 1fr',
                    gap: 24,
                    padding: '22px 0',
                    borderBottom: `1px solid ${C.hair}`,
                  }}
                >
                  <div style={{ fontFamily: sans, fontSize: 22 }}>{t}</div>
                  <div style={{ fontSize: 15, lineHeight: 1.6, color: C.mute2, maxWidth: '50ch' }}>
                    {d}
                  </div>
                </div>
              ))}
            </div>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.7,
                color: C.mute,
                margin: '28px 0 0',
                maxWidth: '54ch',
                fontStyle: 'italic',
                fontFamily: sans,
              }}
            >
              A fitted parameter means you assumed the answer. A derived
              parameter means you found it. There are no fitted parameters here.
            </p>
          </div>
        </Reveal>
      </div>

      {/* what geometry produces (dark ink) */}
      <section
        style={{
          background: '#1a1a1c',
          color: '#f1f1f2',
          padding: 'clamp(72px,12vh,150px) clamp(20px,5vw,64px)',
          marginTop: 40,
        }}
      >
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <Reveal
            style={{
              fontFamily: mono,
              fontSize: 12,
              letterSpacing: '.26em',
              color: '#7a7a82',
              textTransform: 'uppercase',
              marginBottom: 28,
            }}
          >
            What the geometry produces
          </Reveal>
          <Reveal
            as="h2"
            delay={60}
            style={{
              fontFamily: sans,
              fontWeight: 200,
              fontSize: 'clamp(28px,3.6vw,52px)',
              lineHeight: 1.08,
              letterSpacing: '-.02em',
              margin: '0 0 64px',
              maxWidth: '24ch',
            }}
          >
            Three things emerge from the derivation that no amount of scaling the
            current paradigm can replicate.
          </Reveal>
          <div
            data-r=""
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3,1fr)',
              gap: 1,
              background: 'rgba(241,241,242,.16)',
              border: '1px solid rgba(241,241,242,.16)',
            }}
          >
            {[
              {
                n: '01',
                h: 'Efficiency',
                p: 'Compute cost set by topology, not parameter count. The brain achieves general cognition on twenty watts. That is not magic. It is architecture.',
                d: 0,
              },
              {
                n: '02',
                h: 'Structural safety',
                p: 'The internal state is inaccessible from the output channel by geometric law. You cannot jailbreak a theorem.',
                d: 100,
              },
              {
                n: '03',
                h: 'Quantum-equivalent',
                p: 'The universal quantum gate set falls out of the topology as a structural consequence. On commodity GPU hardware. We were not trying to build a quantum computer. The geometry produced it.',
                d: 200,
              },
            ].map((c) => (
              <Reveal key={c.n} delay={c.d} style={{ background: '#1a1a1c', padding: 'clamp(28px,3vw,44px)' }}>
                <div style={emergeNum}>{c.n}</div>
                <h3 style={emergeHead}>{c.h}</h3>
                <p style={emergeBody}>{c.p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* honesty + cta (with sphere bg) */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: 'clamp(72px,12vh,160px) clamp(20px,5vw,64px)',
        }}
      >
        <SphereCanvas
          style={{
            position: 'absolute',
            right: '-5%',
            top: '50%',
            transform: 'translateY(-50%)',
            width: 'min(60vw,720px)',
            height: 'min(60vw,720px)',
            pointerEvents: 'none',
            opacity: 0.38,
          }}
        />
        <div
          data-r=""
          style={{ maxWidth: 1320, margin: '0 auto', position: 'relative', zIndex: 2 }}
        >
          <Reveal style={eyebrow}>Where we are honest</Reveal>
          <Reveal
            as="p"
            delay={60}
            style={{
              fontFamily: sans,
              fontWeight: 200,
              fontSize: 'clamp(22px,3vw,42px)',
              lineHeight: 1.3,
              letterSpacing: '-.01em',
              maxWidth: '24ch',
              margin: '0 0 48px',
            }}
          >
            The geometric derivation is proven. The link between the geometry and
            its full physical interpretation is the active research frontier.
          </Reveal>
          <Reveal
            as="p"
            delay={120}
            style={{
              fontSize: 'clamp(15px,1.3vw,18px)',
              lineHeight: 1.7,
              color: C.mute2,
              maxWidth: '52ch',
              margin: '0 0 44px',
            }}
          >
            We say this clearly because it is true. And because anyone worth
            impressing will respect it.
          </Reveal>
          <Reveal delay={160}>
            <Link href="/investors" style={ctaGhost}>
              Request Access for full technical materials&nbsp;→
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

import Link from 'next/link';
import { HopfHero } from '@/components/HopfHero';
import { PowerCounter } from '@/components/PowerCounter';
import { SphereCanvas } from '@/components/SphereCanvas';
import { Reveal } from '@/components/motion';
import { C, mono, sans, display2 } from '@/lib/ui';

const verdictLine: React.CSSProperties = {
  fontFamily: sans,
  fontWeight: 200,
  fontSize: 'clamp(21px,2.8vw,49px)',
  lineHeight: 1.08,
  letterSpacing: '-.015em',
  color: '#fff',
  margin: 0,
  padding: 'clamp(16px,2.5vh,32px) 0',
};

const cardNum: React.CSSProperties = {
  fontFamily: mono,
  fontSize: 12,
  letterSpacing: '.16em',
  color: 'rgba(255,255,255,.28)',
  marginBottom: 22,
};

const cardHead: React.CSSProperties = {
  fontFamily: sans,
  fontWeight: 400,
  fontSize: 'clamp(21px,2.2vw,28px)',
  lineHeight: 1.1,
  margin: '0 0 16px',
  color: '#fff',
};

const cardBody: React.CSSProperties = {
  fontSize: 16,
  lineHeight: 1.65,
  color: 'rgba(255,255,255,.72)',
  margin: 0,
};

export default function HomePage() {
  return (
    <div>
      <HopfHero />
      <PowerCounter />

      {/* SECTION 2: no inside (unified dark block) */}
      <section
        data-num="02"
        style={{
          background: '#0a0a0b',
          borderTop: '1px solid rgba(255,255,255,.08)',
          padding:
            'clamp(80px,14vh,192px) clamp(32px,5vw,64px) clamp(48px,6vh,64px)',
        }}
      >
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <Reveal
            style={{
              fontFamily: mono,
              fontSize: 12,
              letterSpacing: '.26em',
              color: 'rgba(255,255,255,.35)',
              textTransform: 'uppercase',
              marginBottom: 24,
            }}
          >
            02 / The diagnosis
          </Reveal>
          <Reveal
            as="h2"
            delay={60}
            style={{
              fontFamily: sans,
              fontWeight: 200,
              fontSize: 'clamp(37px,5.5vw,87px)',
              lineHeight: 1.02,
              letterSpacing: '-.02em',
              color: '#fff',
              margin: '0 0 40px',
              maxWidth: '18ch',
            }}
          >
            Current AI has no inside.
          </Reveal>
          <Reveal
            as="p"
            delay={120}
            style={{
              fontSize: 'clamp(14px,1.1vw,16px)',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,.62)',
              maxWidth: '62ch',
              margin: '0 0 64px',
            }}
          >
            Every calculation a transformer makes happens in public, across
            hundreds of billions of weights that nobody fully understands,
            including the people who built them. There is no boundary between
            what it computes and what it reveals. No private thought. No inside.
          </Reveal>
          <Reveal
            delay={180}
            style={{
              display: 'flex',
              flexDirection: 'column',
              borderTop: '1px solid rgba(255,255,255,.16)',
            }}
          >
            <p
              style={{
                ...verdictLine,
                borderBottom: '1px solid rgba(255,255,255,.16)',
              }}
            >
              That is why it gets jailbroken.
            </p>
            <p
              style={{
                ...verdictLine,
                borderBottom: '1px solid rgba(255,255,255,.16)',
              }}
            >
              That is why it hallucinates with total confidence.
            </p>
            <p style={verdictLine}>
              That is why no one can explain what it did or why.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SECTION 2 continued: three-card grid */}
      <section
        style={{
          background: '#0a0a0b',
          padding:
            'clamp(48px,8vh,96px) clamp(32px,5vw,64px) clamp(80px,14vh,192px)',
        }}
      >
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3,1fr)',
              gap: 1,
              background: 'rgba(255,255,255,.1)',
              border: '1px solid rgba(255,255,255,.1)',
            }}
            data-r=""
          >
            {[
              {
                n: '01',
                h: 'No safety boundary',
                p: "Safety rules live in the same place as the content they're meant to prevent. Every model ships. Every model gets jailbroken.",
                d: 40,
              },
              {
                n: '02',
                h: 'No interpretability',
                p: '175 billion weights. No one can point to a single one and say what it means. This is not a tooling problem.',
                d: 120,
              },
              {
                n: '03',
                h: 'No convergence',
                p: 'There is no mechanism that guarantees a correct answer given more time. Hallucination is structural, not a bug.',
                d: 200,
              },
            ].map((c) => (
              <Reveal
                key={c.n}
                delay={c.d}
                style={{ background: '#0a0a0b', padding: 'clamp(32px,3vw,48px)' }}
              >
                <div style={cardNum}>{c.n}</div>
                <h3 style={cardHead}>{c.h}</h3>
                <p style={cardBody}>{c.p}</p>
              </Reveal>
            ))}
          </div>
          <Reveal
            delay={240}
            style={{
              marginTop: 'clamp(40px,6vh,64px)',
              paddingTop: 'clamp(32px,4vh,48px)',
              borderTop: '1px solid rgba(255,255,255,.1)',
            }}
          >
            <p
              style={{
                fontFamily: sans,
                fontWeight: 200,
                fontSize: 'clamp(21px,2.8vw,49px)',
                lineHeight: 1.1,
                letterSpacing: '-.015em',
                color: 'rgba(255,255,255,.48)',
                margin: 0,
              }}
            >
              Quantum computing has been ten years away for fifty years.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SECTION 3: quantum on today's hardware */}
      <section
        data-num="03"
        style={{
          borderTop: `1px solid ${C.hair}`,
          background: '#1a1a1c',
          color: '#f1f1f2',
          padding: 'clamp(80px,14vh,192px) clamp(32px,5vw,64px)',
        }}
      >
        <div
          data-r=""
          style={{
            maxWidth: 1320,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '7fr 5fr',
            gap: 'clamp(32px,5vw,64px)',
            alignItems: 'start',
          }}
        >
          <div>
            <Reveal
              style={{
                fontFamily: mono,
                fontSize: 12,
                letterSpacing: '.26em',
                color: '#7a7a82',
                textTransform: 'uppercase',
                marginBottom: 24,
              }}
            >
              03 / The answer
            </Reveal>
            <Reveal
              as="h2"
              delay={60}
              style={{
                ...display2,
                margin: '0 0 32px',
              }}
            >
              The universal quantum gate set. Running on commodity hardware today.
            </Reveal>
            <Reveal
              as="p"
              delay={120}
              style={{
                fontSize: 'clamp(14px,1.1vw,16px)',
                lineHeight: 1.75,
                color: '#cbcbcf',
                maxWidth: '46ch',
                margin: '0 0 48px',
              }}
            >
              By deriving intelligence from pure geometry, the universal quantum
              gate set fell out of the structure as a consequence. Not a
              simulation. Not an approximation. The same computational class as
              quantum — without the fragile hardware, the near-absolute-zero
              cooling, or the error-correction overhead.
              <br />
              <br />
              <span style={{ fontSize: 16 }}>
                We weren&apos;t trying to build a quantum computer. The geometry
                produced it.
              </span>
            </Reveal>
            <Reveal
              delay={260}
              style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
            >
              <Link
                href="/science"
                style={{
                  cursor: 'pointer',
                  border: '1px solid rgba(255,255,255,.3)',
                  color: '#fff',
                  fontSize: 13.5,
                  letterSpacing: '.02em',
                  padding: '16px 24px',
                  borderRadius: 1,
                }}
              >
                The science&nbsp;→
              </Link>
              <Link
                href="/results"
                style={{
                  cursor: 'pointer',
                  border: '1px solid rgba(255,255,255,.3)',
                  color: '#fff',
                  fontSize: 13.5,
                  letterSpacing: '.02em',
                  padding: '16px 24px',
                  borderRadius: 1,
                }}
              >
                See the results&nbsp;→
              </Link>
            </Reveal>
          </div>
          <Reveal
            delay={120}
            style={{
              aspectRatio: '1',
              border: '1px solid rgba(241,241,242,.22)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              background:
                'repeating-linear-gradient(45deg,rgba(241,241,242,.05) 0 1px,transparent 1px 9px)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                width: '62%',
                height: '62%',
                border: '1px dashed rgba(241,241,242,.3)',
                borderRadius: '50%',
                animation: 'spin 26s linear infinite',
              }}
            />
            <div
              style={{
                position: 'absolute',
                width: '40%',
                height: '40%',
                border: '1px dashed rgba(241,241,242,.22)',
                borderRadius: '50%',
                animation: 'spinr 18s linear infinite',
              }}
            />
            <div
              style={{
                position: 'absolute',
                width: '82%',
                height: '82%',
                border: '1px solid rgba(241,241,242,.12)',
                borderRadius: '50%',
              }}
            />
            <div style={{ textAlign: 'center', zIndex: 2 }}>
              <div
                style={{
                  fontFamily: mono,
                  fontSize: 12,
                  letterSpacing: '.14em',
                  color: '#f1f1f2',
                  background: '#1a1a1c',
                  padding: '6px 12px',
                }}
              >
                [ rotating three-sphere ]
              </div>
              <div
                style={{
                  fontFamily: mono,
                  fontSize: 10.5,
                  letterSpacing: '.1em',
                  color: '#7a7a82',
                  marginTop: 10,
                }}
              >
                S³ · Hopf fibration · interactive
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 4: closing CTA with sphere bg */}
      <section
        data-num="04"
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: 'clamp(80px,14vh,192px) clamp(32px,5vw,64px)',
          background: '#f1f1f2',
        }}
      >
        <SphereCanvas
          dataAttr="data-ceiling-canvas"
          style={{
            position: 'absolute',
            right: '-10%',
            top: '50%',
            transform: 'translateY(-50%)',
            width: 'min(72vw,860px)',
            height: 'min(72vw,860px)',
            pointerEvents: 'none',
            opacity: 0.62,
          }}
        />
        <div
          data-r=""
          style={{ maxWidth: 1320, margin: '0 auto', position: 'relative', zIndex: 2 }}
        >
          <Reveal
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
              gap: '8px 32px',
              fontFamily: mono,
              fontSize: 12,
              letterSpacing: '.08em',
              color: C.mute,
              paddingBottom: 48,
              borderBottom: `1px solid ${C.hair}`,
              marginBottom: 64,
            }}
          >
            <span>17 patents pending</span>
            <span style={{ color: '#c8c8cc' }}>/</span>
            <span>300+ certified claims</span>
            <span style={{ color: '#c8c8cc' }}>/</span>
            <span>Commodity GPU hardware, today</span>
          </Reveal>
          <Reveal
            as="h2"
            delay={60}
            style={{
              fontFamily: sans,
              fontWeight: 200,
              fontSize: 'clamp(37px,7vw,87px)',
              lineHeight: 1,
              letterSpacing: '-.02em',
              margin: '0 0 32px',
              maxWidth: '18ch',
              textAlign: 'left',
            }}
          >
            The current paradigm has a ceiling.
          </Reveal>
          <Reveal
            as="p"
            delay={120}
            style={{
              fontFamily: sans,
              fontWeight: 200,
              fontSize: 'clamp(16px,2vw,28px)',
              lineHeight: 1.5,
              color: C.body,
              maxWidth: '34ch',
              margin: '0 0 40px',
              textAlign: 'left',
            }}
          >
            We&apos;re still working. Request access, and we&apos;ll tell you
            where we are.
          </Reveal>
          <Reveal delay={160}>
            <Link
              href="/investors"
              style={{
                cursor: 'pointer',
                display: 'inline-block',
                background: '#1a1a1c',
                color: '#f1f1f2',
                fontSize: 16,
                letterSpacing: '.02em',
                padding: '16px 32px',
                borderRadius: 1,
              }}
            >
              Request Access&nbsp;→
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

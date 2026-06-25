import Link from 'next/link';
import { Reveal } from '@/components/motion';
import { C, sans, eyebrow, rowHead, ctaSolid } from '@/lib/ui';

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

const TEAM = [
  ['[ Founder name ]', 'Founder · substrate & theory'],
  ['[ Name ]', 'Certification & systems'],
  ['[ Name ]', 'Commercial & ops'],
  ['[ Name ]', 'Commercial & ops'],
];

export default function AboutPage() {
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
        <Reveal style={eyebrow}>About</Reveal>
        <Reveal
          as="h1"
          delay={60}
          style={{ fontFamily: sans, fontWeight: 200, fontSize: 'clamp(40px,7.5vw,116px)', lineHeight: 1, letterSpacing: '-.025em', margin: 0, maxWidth: '18ch' }}
        >
          We are not building a smarter chatbot.
        </Reveal>
      </section>

      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 clamp(20px,5vw,64px)' }}>
        <Reveal data-r="" style={twoCol}>
          <h2 style={rowHead}>How this started</h2>
          <p style={colBody}>
            Seven years ago the question was not{' '}
            <span style={{ fontStyle: 'italic', fontFamily: sans }}>
              &ldquo;how do we improve AI.&rdquo;
            </span>{' '}
            It was: what is the minimum geometric shape from which intelligence
            must emerge as a structural necessity? That question has a specific
            answer. Everything since has been following that answer to its
            conclusions.
          </p>
        </Reveal>

        <Reveal data-r="" style={twoCol}>
          <h2 style={rowHead}>Where we are</h2>
          <div>
            <p style={{ ...colBody, margin: '0 0 18px' }}>
              Seed stage. Delaware C-corp. Working code on commodity GPU
              hardware. 17 provisional patents filed through Fish &amp;
              Richardson. The certification program is the methodology, not just
              the results.
            </p>
            <p style={colBody}>
              The commercial work generates revenue while the substrate matures.{' '}
              <span style={{ fontStyle: 'italic', fontFamily: sans }}>
                The substrate is the real bet.
              </span>
            </p>
          </div>
        </Reveal>

        <Reveal data-r="" style={twoCol}>
          <h2 style={rowHead}>Team</h2>
          <div style={{ display: 'flex', flexDirection: 'column', borderTop: `1px solid ${C.hair}` }}>
            {TEAM.map(([name, role], i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 18,
                  padding: '20px 0',
                  borderBottom: `1px solid ${C.hair}`,
                }}
              >
                <span style={{ fontFamily: sans, fontSize: 'clamp(18px,1.8vw,24px)' }}>{name}</span>
                <span style={{ fontSize: 14, color: C.mute, alignSelf: 'center' }}>{role}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal
          data-r=""
          style={{ ...twoCol, padding: 'clamp(48px,7vh,90px) 0 clamp(80px,12vh,160px)' }}
        >
          <h2 style={rowHead}>Contact</h2>
          <div>
            <a
              href="mailto:aaron@pairofpants.io"
              style={{ fontFamily: sans, fontSize: 'clamp(24px,3.4vw,48px)', borderBottom: '1px solid rgba(26,25,22,.3)', paddingBottom: 4 }}
            >
              aaron@pairofpants.io
            </a>
            <div style={{ marginTop: 48 }}>
              <Link href="/investors" style={ctaSolid}>
                Request Investor Access&nbsp;→
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

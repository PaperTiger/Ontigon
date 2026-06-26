import { Reveal } from '@/components/motion';
import { C, mono, sans, eyebrow } from '@/lib/ui';

const twoCol: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '5fr 7fr',
  gap: 'clamp(24px,4vw,64px)',
  padding: 'clamp(40px,6vh,80px) 0',
  borderTop: `1px solid ${C.hair}`,
};
const sectionHead: React.CSSProperties = {
  fontFamily: sans,
  fontWeight: 300,
  fontSize: 'clamp(21px,2.4vw,37px)',
  lineHeight: 1.08,
  margin: 0,
  letterSpacing: '-.01em',
};
const para: React.CSSProperties = {
  fontSize: '16px',
  lineHeight: 1.75,
  color: C.body,
  maxWidth: '60ch',
  margin: 0,
};

export default function LegalPage() {
  return (
    <div>
      <section style={{ padding: 'clamp(128px,20vh,192px) clamp(32px,5vw,64px) clamp(48px,7vh,96px)', maxWidth: 1320, margin: '0 auto' }}>
        <Reveal style={eyebrow}>Legal</Reveal>
        <Reveal as="h1" delay={60} style={{ fontFamily: sans, fontWeight: 200, fontSize: 'clamp(48px,9vw,140px)', lineHeight: 0.96, letterSpacing: '-.025em', margin: '0 0 40px' }}>
          Terms &amp; privacy.
        </Reveal>
        <Reveal as="p" delay={120} style={{ fontSize: '16px', lineHeight: 1.7, color: C.body, maxWidth: '56ch', margin: '0 0 16px' }}>
          This page is a template. Replace the bracketed copy with language
          reviewed by counsel before publishing.
        </Reveal>
        <Reveal as="div" delay={160} style={{ fontFamily: mono, fontSize: 12, letterSpacing: '.06em', color: C.mute }}>
          Effective date: [ Month DD, YYYY ] &nbsp;·&nbsp; Ontigon, Inc.
          (Delaware C-corp)
        </Reveal>
      </section>

      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 clamp(32px,5vw,64px)' }}>
        <Reveal data-r="" style={twoCol}>
          <h2 style={sectionHead}>01 / Terms of use</h2>
          <div>
            <p style={{ ...para, margin: '0 0 16px' }}>
              By accessing ontigon.ai you agree to these terms. [ Summarize
              permitted use of the site and any materials provided through
              Investor Access. ]
            </p>
            <p style={{ ...para, color: C.mute2 }}>
              Materials shared under access request are confidential and provided
              for evaluation only. [ State restrictions on redistribution,
              reverse engineering, and reliance. ]
            </p>
          </div>
        </Reveal>

        <Reveal data-r="" style={twoCol}>
          <h2 style={sectionHead}>02 / Privacy</h2>
          <div>
            <p style={{ ...para, margin: '0 0 24px' }}>
              We collect only what you submit through the access form: name,
              email, organization, and your one-line note. [ Describe storage,
              retention period, and lawful basis. ]
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', borderTop: `1px solid ${C.hair}` }}>
              {[
                ['WHAT WE COLLECT', 'Form submissions and basic, anonymized site analytics.'],
                ['HOW WE USE IT', 'To respond to your request. We do not sell personal data.'],
                ['YOUR RIGHTS', '[ Access, correction, deletion, per applicable law. ]'],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 24, padding: '18px 0', borderBottom: `1px solid ${C.hair}` }}>
                  <span style={{ fontFamily: mono, fontSize: 12, letterSpacing: '.04em', color: C.mute }}>{k}</span>
                  <span style={{ fontSize: 16, lineHeight: 1.6, color: C.mute2 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal data-r="" style={twoCol}>
          <h2 style={sectionHead}>03 / Intellectual property</h2>
          <p style={para}>
            The substrate, certification methodology, and all related materials
            are protected. 17 provisional patents are filed through Fish &amp;
            Richardson. [ State trademark and copyright ownership; nothing herein
            grants a license. ]
          </p>
        </Reveal>

        <Reveal data-r="" style={twoCol}>
          <h2 style={sectionHead}>04 / Cookies</h2>
          <p style={para}>
            We use a minimal set of cookies for essential function and aggregate
            analytics. [ List providers and opt-out mechanism. ]
          </p>
        </Reveal>

        <Reveal data-r="" style={{ ...twoCol, padding: 'clamp(40px,6vh,80px) 0 clamp(80px,12vh,128px)' }}>
          <h2 style={sectionHead}>05 / Contact</h2>
          <div>
            <p style={{ ...para, margin: '0 0 24px' }}>
              Questions about these terms or your data:
            </p>
            <a href="mailto:aaron@pairofpants.io" style={{ fontFamily: sans, fontWeight: 300, fontSize: 'clamp(22px,3vw,40px)', borderBottom: '1px solid rgba(26,25,22,.3)', paddingBottom: 4 }}>
              aaron@pairofpants.io
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

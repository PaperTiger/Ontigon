import { InvestorForm } from '@/components/InvestorForm';
import { Reveal } from '@/components/motion';
import { C, sans, eyebrow } from '@/lib/ui';

export default function InvestorsPage() {
  return (
    <div>
      <section
        style={{
          padding:
            'clamp(128px,20vh,192px) clamp(32px,5vw,64px) clamp(80px,12vh,160px)',
          maxWidth: 1320,
          margin: '0 auto',
        }}
      >
        <div
          data-r=""
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(40px,7vw,128px)',
          }}
        >
          <div>
            <Reveal style={eyebrow}>Investor Access</Reveal>
            <Reveal
              as="h1"
              delay={60}
              style={{ fontFamily: sans, fontWeight: 200, fontSize: 'clamp(48px,7vw,112px)', lineHeight: 0.98, letterSpacing: '-.025em', margin: '0 0 40px' }}
            >
              Request access.
            </Reveal>
            <Reveal
              as="p"
              delay={120}
              style={{ fontSize: 'clamp(12px,1.1vw,16px)', lineHeight: 1.7, color: C.body, maxWidth: '44ch', margin: '0 0 24px' }}
            >
              We don&apos;t publish a pitch deck. The full story, including the
              architecture thesis, certification inventory, comp stack, and raise
              details. It goes to people who ask for it.
            </Reveal>
            <Reveal
              as="p"
              delay={160}
              style={{ fontFamily: sans, fontSize: 'clamp(16px,1.8vw,24px)', lineHeight: 1.4, color: C.body, maxWidth: '30ch', margin: 0 }}
            >
              Tell us who you are and we&apos;ll be in touch.
            </Reveal>
          </div>
          <Reveal delay={120}>
            <InvestorForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
}

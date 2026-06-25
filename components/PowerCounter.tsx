'use client';

import { useEffect, useRef, useState } from 'react';
import { C, mono, sans } from '@/lib/ui';

const MAX = 1287000; // kWh — a single large AI training run

/**
 * Home section 01. A sticky-pinned counter that climbs from 0 to ~1.29M kWh
 * as you scroll the section, set against the static 20W of a human brain.
 */
export function PowerCounter() {
  const secRef = useRef<HTMLElement>(null);
  const [val, setVal] = useState(0);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const sec = secRef.current;
    if (!sec) return;
    const update = () => {
      const rect = sec.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height - vh;
      let p = total > 0 ? -rect.top / total : 0;
      p = Math.max(0, Math.min(1, p));
      setVal(Math.round(MAX * p));
      setPct(p * 100);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const para: React.CSSProperties = {
    fontSize: 'clamp(15px,1.25vw,18px)',
    lineHeight: 1.7,
    color: C.body,
    maxWidth: '42ch',
  };

  return (
    <section
      ref={secRef}
      data-num="01"
      style={{
        position: 'relative',
        height: '240vh',
        borderTop: `1px solid ${C.hair}`,
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: 66,
          height: 'calc(100vh - 66px)',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <div
          data-r=""
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(24px,5vw,80px)',
            alignItems: 'center',
            maxWidth: 1320,
            margin: '0 auto',
            width: '100%',
            padding: '0 clamp(20px,5vw,64px)',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: mono,
                fontSize: 12,
                letterSpacing: '.26em',
                color: C.mute,
                textTransform: 'uppercase',
                marginBottom: 28,
              }}
            >
              01 / The problem
            </div>
            <h2
              style={{
                fontFamily: sans,
                fontWeight: 200,
                fontSize: 'clamp(30px,4.4vw,60px)',
                lineHeight: 1.04,
                letterSpacing: '-.02em',
                margin: '0 0 28px',
                maxWidth: '16ch',
              }}
            >
              The industry has a geometry problem.
            </h2>
            <p style={{ ...para, margin: '0 0 18px' }}>
              Your brain runs on twenty watts. A dim light bulb. It reads,
              remembers, reasons through novel situations, all within a
              biological energy budget that hasn&apos;t changed in 150 million
              years.
            </p>
            <p style={{ ...para, margin: '0 0 18px' }}>
              A single AI training run costs enough electricity to power a small
              city for a year. The industry&apos;s answer is to build nuclear
              reactors. Specifically for this.
            </p>
            <p style={{ ...para, margin: 0 }}>
              This isn&apos;t an energy problem. It&apos;s a structure problem.
              And you can&apos;t fix structure by adding more of the same thing.
            </p>
          </div>
          <div
            style={{
              borderLeft: `1px solid ${C.hairStrong}`,
              paddingLeft: 'clamp(20px,3vw,48px)',
            }}
          >
            <div
              style={{
                fontFamily: mono,
                fontSize: 11.5,
                letterSpacing: '.14em',
                color: C.mute,
                textTransform: 'uppercase',
                marginBottom: 10,
              }}
            >
              A single AI training run, kWh
            </div>
            <div
              style={{
                fontFamily: sans,
                fontWeight: 200,
                fontSize: 'clamp(40px,6vw,96px)',
                lineHeight: 0.92,
                letterSpacing: '-.03em',
                fontVariantNumeric: 'tabular-nums',
                minWidth: '9ch',
                display: 'block',
              }}
            >
              {val.toLocaleString('en-US')}
            </div>
            <div
              style={{
                height: 2,
                background: C.ink,
                width: `${pct.toFixed(1)}%`,
                margin: '22px 0 56px',
                transition: 'width .12s linear',
              }}
            />
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: 18,
                opacity: 0.9,
              }}
            >
              <div
                style={{
                  fontFamily: sans,
                  fontWeight: 200,
                  fontSize: 'clamp(34px,4vw,52px)',
                  lineHeight: 1,
                  letterSpacing: '-.02em',
                }}
              >
                20<span style={{ fontSize: '.5em' }}> W</span>
              </div>
              <div
                style={{
                  fontFamily: mono,
                  fontSize: 11.5,
                  letterSpacing: '.08em',
                  color: C.mute,
                  lineHeight: 1.5,
                }}
              >
                one human brain
                <br />
                unchanged in 150M years
              </div>
            </div>
            <div
              style={{
                fontFamily: mono,
                fontSize: 11,
                letterSpacing: '.08em',
                color: C.decor,
                marginTop: 36,
                lineHeight: 1.6,
              }}
            >
              The industry&apos;s answer is to build nuclear reactors.
              Specifically for this.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

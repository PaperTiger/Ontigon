'use client';

import { useState } from 'react';
import { Reveal } from './motion';
import { C, mono, sans } from '@/lib/ui';

export function PlayCard({
  tag,
  title,
  desc,
  delay,
}: {
  tag: string;
  title: string;
  desc: string;
  delay?: number;
}) {
  const [hover, setHover] = useState(false);

  return (
    <Reveal
      as="a"
      delay={delay}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        cursor: 'pointer',
        background: hover ? '#000' : '#f1f1f2',
        padding: 'clamp(28px,3vw,40px)',
        display: 'flex',
        flexDirection: 'column',
        minHeight: 'clamp(300px,32vw,380px)',
        transition: 'background .35s ease, color .35s ease',
      }}
    >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'auto' }}>
          <span
            style={{
              fontFamily: mono,
              fontSize: 11,
              letterSpacing: '.1em',
              color: hover ? '#fff' : C.accent,
              transition: 'color .35s ease',
            }}
          >
            {tag}
          </span>
          <span
            style={{
              fontSize: 18,
              transition: 'transform .35s ease, color .35s ease',
              color: hover ? '#fff' : undefined,
              transform: hover ? 'translate(3px,-3px)' : 'none',
            }}
          >
            ↗
          </span>
        </div>
        <div
          style={{
            aspectRatio: '16/9',
            border: `1px solid ${hover ? 'rgba(255,255,255,.2)' : 'rgba(26,25,22,.14)'}`,
            margin: '28px 0',
            background:
              'repeating-linear-gradient(45deg,rgba(26,25,22,.05) 0 1px,transparent 1px 9px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: mono,
            fontSize: 10.5,
            letterSpacing: '.1em',
            color: hover ? 'rgba(255,255,255,.45)' : C.decor,
            transition: 'border-color .35s ease, color .35s ease',
          }}
        >
          [ demo viewport ]
        </div>
        <h3
          style={{
            fontFamily: sans,
            fontWeight: 300,
            fontSize: 'clamp(22px,2.2vw,30px)',
            lineHeight: 1.1,
            margin: '0 0 12px',
            letterSpacing: '-.01em',
            color: hover ? '#fff' : undefined,
            transition: 'color .35s ease',
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: 14.5,
            lineHeight: 1.6,
            color: hover ? 'rgba(255,255,255,.62)' : C.mute2,
            margin: 0,
            transition: 'color .35s ease',
          }}
        >
          {desc}
        </p>
    </Reveal>
  );
}

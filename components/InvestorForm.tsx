'use client';

import { useState } from 'react';
import { C, mono, sans } from '@/lib/ui';

const FIELDS: { label: string; type: string; placeholder: string }[] = [
  { label: 'NAME', type: 'text', placeholder: 'Your name' },
  { label: 'EMAIL', type: 'email', placeholder: 'you@firm.com' },
  { label: 'FIRM / ORGANIZATION', type: 'text', placeholder: "Where you're from" },
  {
    label: 'ONE SENTENCE / WHAT BROUGHT YOU HERE',
    type: 'text',
    placeholder: 'In a line…',
  },
];

export function InvestorForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div
        style={{
          border: `1px solid ${C.hairStrong}`,
          padding: 48,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: 380,
        }}
      >
        <div
          style={{
            fontFamily: mono,
            fontSize: 11,
            letterSpacing: '.16em',
            color: C.mute,
            marginBottom: 18,
          }}
        >
          REQUEST RECEIVED
        </div>
        <div
          style={{
            fontFamily: sans,
            fontWeight: 200,
            fontSize: 'clamp(26px,3vw,40px)',
            lineHeight: 1.15,
            letterSpacing: '-.01em',
          }}
        >
          Thank you. You&apos;ll hear directly from a founder.
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
        borderTop: `1px solid ${C.hairStrong}`,
      }}
    >
      {FIELDS.map((f) => (
        <label
          key={f.label}
          style={{
            display: 'block',
            padding: '24px 0',
            borderBottom: `1px solid ${C.hairStrong}`,
          }}
        >
          <span
            style={{
              display: 'block',
              fontFamily: mono,
              fontSize: 11,
              letterSpacing: '.12em',
              color: C.mute,
              marginBottom: 10,
            }}
          >
            {f.label}
          </span>
          <input
            type={f.type}
            placeholder={f.placeholder}
            style={{
              width: '100%',
              border: 0,
              background: 'transparent',
              fontFamily: sans,
              fontSize: 22,
              color: C.ink,
              outline: 'none',
            }}
          />
        </label>
      ))}
      <button
        type="submit"
        style={{
          cursor: 'pointer',
          marginTop: 32,
          background: '#292ec2',
          color: C.bg,
          border: 0,
          fontFamily: sans,
          fontSize: 15,
          letterSpacing: '.04em',
          padding: '18px 32px',
          borderRadius: 1,
          textAlign: 'center',
        }}
      >
        Send Request&nbsp;→
      </button>
      <div
        style={{
          fontFamily: mono,
          fontSize: 11,
          letterSpacing: '.06em',
          color: C.decor,
          marginTop: 18,
        }}
      >
        You&apos;ll hear directly from a founder.
      </div>
    </form>
  );
}

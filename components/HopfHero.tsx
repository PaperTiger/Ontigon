'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { CountUp } from './motion';
import { C, mono, sans } from '@/lib/ui';

const HERO_TAGLINE = 'A different geometry for intelligence';

/**
 * Black storytelling billboard. ~3 screens of scroll drive a sticky stage:
 *  - Phase A: "Join the quantum class." centered over a live Hopf-fibration
 *    canvas object (interlocking rings with chromatic fringing, spinning).
 *  - On scroll the headline lifts/fades, a scrim darkens the object, and
 *    Phase B fades in: "We chose a different geometry." + CTAs + stats.
 */
export function HopfHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const phaseARef = useRef<HTMLDivElement>(null);
  const phaseBRef = useRef<HTMLDivElement>(null);
  const scrimRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const hero = heroRef.current;
    if (!canvas || !hero) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let dpr = 1;
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    const N = 12;
    const loops = Array.from({ length: N }, (_, i) => ({
      phi: (i / N) * Math.PI * 2,
    }));
    const smooth = (a: number, b: number, x: number) => {
      const t = Math.max(0, Math.min(1, (x - a) / (b - a)));
      return t * t * (3 - 2 * t);
    };

    let raf = 0;
    const draw = (time: number) => {
      const rect = hero.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height - vh;
      let p = total > 0 ? -rect.top / total : 0;
      p = Math.max(0, Math.min(1, p));

      const phaseA = phaseARef.current;
      const phaseB = phaseBRef.current;
      const scrim = scrimRef.current;
      const hint = hintRef.current;

      if (phaseA) {
        const a = 1 - smooth(0.16, 0.4, p);
        phaseA.style.opacity = String(a);
        phaseA.style.transform = `translateY(${-46 * (1 - a)}px) scale(${
          1 - 0.05 * (1 - a)
        })`;
      }
      if (hint) hint.style.opacity = String(1 - smooth(0.05, 0.28, p));
      if (scrim) scrim.style.opacity = String(smooth(0.3, 0.6, p));
      if (phaseB) {
        const b = smooth(0.52, 0.76, p);
        phaseB.style.opacity = String(b);
        phaseB.style.transform = `translateY(${44 * (1 - b)}px)`;
        phaseB.style.pointerEvents = b > 0.5 ? 'auto' : 'none';
      }

      if (!(rect.bottom < -20 || rect.top > vh + 20)) {
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, w, h);
        const cx = w / 2;
        const cy = h * (0.46 - 0.05 * p);
        const scale = Math.min(w, h) * 0.3 * (1 - 0.16 * p);
        const TILT = 1.12;
        const cT = Math.cos(TILT);
        const sT = Math.sin(TILT);
        const gz = time * 0.00012;
        const gx = 0.16 + p * 1.25;
        const cgx = Math.cos(gx);
        const sgx = Math.sin(gx);
        const cgz = Math.cos(gz);
        const sgz = Math.sin(gz);
        const STEPS = 84;
        const projected = loops.map((L) => {
          const cphi = Math.cos(L.phi);
          const sphi = Math.sin(L.phi);
          const pts: [number, number][] = [];
          let zsum = 0;
          for (let s = 0; s <= STEPS; s++) {
            const ang = (s / STEPS) * Math.PI * 2;
            const x = Math.cos(ang);
            const y = Math.sin(ang);
            const z = 0;
            const y1 = y * cT - z * sT;
            const z1 = y * sT + z * cT;
            const x1 = x;
            const x2 = x1 * cphi - y1 * sphi;
            const y2 = x1 * sphi + y1 * cphi;
            const z2 = z1;
            const y3 = y2 * cgx - z2 * sgx;
            const z3 = y2 * sgx + z2 * cgx;
            const x3 = x2;
            const x4 = x3 * cgz - y3 * sgz;
            const y4 = x3 * sgz + y3 * cgz;
            const z4 = z3;
            const persp = 1 / (1 - z4 * 0.16);
            pts.push([cx + x4 * scale * persp, cy + y4 * scale * persp]);
            zsum += z4;
          }
          return { pts, z: zsum / (STEPS + 1) };
        });
        projected.sort((A, B) => A.z - B.z);
        const stroke = (
          pts: [number, number][],
          dx: number,
          color: string,
          alpha: number,
        ) => {
          ctx.beginPath();
          for (let i = 0; i < pts.length; i++) {
            const x = pts[i][0] + dx;
            const y = pts[i][1];
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.strokeStyle = color;
          ctx.globalAlpha = alpha;
          ctx.stroke();
        };
        ctx.lineWidth = 1;
        ctx.lineJoin = 'round';
        for (const L of projected) {
          const front = (L.z + 1) / 2;
          const a = 0.16 + 0.52 * front;
          stroke(L.pts, 1.4, 'rgba(120,170,255,1)', a * 0.32);
          stroke(L.pts, -1.4, 'rgba(255,120,150,1)', a * 0.32);
          stroke(L.pts, 0, 'rgba(255,255,255,1)', a);
        }
        ctx.globalAlpha = 1;
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const statCell = (
    big: React.ReactNode,
    note: React.ReactNode,
  ) => (
    <div style={{ background: C.heroBg, padding: '24px 24px' }}>
      {big}
      <div
        style={{
          fontFamily: mono,
          fontSize: 12,
          letterSpacing: '.05em',
          color: 'rgba(255,255,255,.5)',
          marginTop: 16,
          lineHeight: 1.5,
        }}
      >
        {note}
      </div>
    </div>
  );

  const bigStat: React.CSSProperties = {
    fontFamily: sans,
    fontWeight: 200,
    fontSize: 'clamp(37px,4.4vw,65px)',
    lineHeight: 1,
    letterSpacing: '-.02em',
    color: '#fff',
  };

  return (
    <section
      data-hero=""
      ref={heroRef}
      style={{ position: 'relative', height: '320vh', background: C.heroBg }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            display: 'block',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background:
              'radial-gradient(125% 95% at 50% 44%, transparent 26%, rgba(8,8,9,.5) 64%, #080809 100%)',
          }}
        />
        <div
          ref={scrimRef}
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background: 'rgba(8,8,7,.62)',
            opacity: 0,
          }}
        />

        {/* PHASE A */}
        <div
          ref={phaseARef}
          data-phase="a"
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '0 24px',
            willChange: 'opacity,transform',
          }}
        >
          <div
            style={{
              fontFamily: mono,
              fontSize: 12,
              letterSpacing: '.34em',
              textTransform: 'uppercase',
              color: '#fff',
              marginBottom: 32,
            }}
          >
            {HERO_TAGLINE}
          </div>
          <h1
            style={{
              fontFamily: sans,
              fontWeight: 200,
              fontSize: 'clamp(49px,9.5vw,155px)',
              lineHeight: 1,
              letterSpacing: '-.035em',
              color: '#fff',
              margin: 0,
              textShadow: '0 0 70px rgba(0,0,0,.55)',
            }}
          >
            Join the quantum class.
          </h1>
        </div>

        {/* PHASE B */}
        <div
          ref={phaseBRef}
          data-phase="b"
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '96px 24px',
            opacity: 0,
            willChange: 'opacity,transform',
          }}
        >
          <h2
            style={{
              fontFamily: sans,
              fontWeight: 200,
              fontSize: 'clamp(28px,5vw,87px)',
              lineHeight: 1.08,
              letterSpacing: '-.025em',
              color: '#fff',
              margin: '0 0 40px',
              maxWidth: '17ch',
              textShadow: '0 0 50px rgba(0,0,0,.7)',
            }}
          >
            The AI industry chose to scale.{' '}
            <span style={{ color: 'rgba(255,255,255,.5)' }}>
              We chose a different geometry.
            </span>
          </h2>
          <div
            style={{
              display: 'flex',
              gap: 16,
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginBottom: 'clamp(48px,8vh,80px)',
            }}
          >
            <Link
              href="/investors"
              style={{
                cursor: 'pointer',
                background: '#fff',
                color: '#0a0a0b',
                fontSize: 16,
                letterSpacing: '.02em',
                padding: '16px 32px',
                borderRadius: 1,
              }}
            >
              Request Access
            </Link>
            <Link
              href="/science"
              style={{
                cursor: 'pointer',
                border: '1px solid rgba(255,255,255,.4)',
                color: '#fff',
                fontSize: 16,
                letterSpacing: '.02em',
                padding: '16px 32px',
                borderRadius: 1,
              }}
            >
              Read the science&nbsp;→
            </Link>
          </div>
          <div
            data-hero-stats=""
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3,1fr)',
              gap: 1,
              background: 'rgba(255,255,255,.14)',
              borderTop: '1px solid rgba(255,255,255,.14)',
              borderBottom: '1px solid rgba(255,255,255,.14)',
              maxWidth: 880,
              width: '100%',
              textAlign: 'left',
            }}
          >
            {statCell(
              <CountUp to={100} suffix="%" style={bigStat} />,
              <>
                vs. Transformer 15.2%
                <br />
                on certified tasks
              </>,
            )}
            {statCell(
              <CountUp to={20} suffix="W" style={bigStat} />,
              <>
                What a brain uses.
                <br />
                What we&apos;re aiming for.
              </>,
            )}
            {statCell(
              <CountUp to={0} style={bigStat} />,
              <>
                Free parameters.
                <br />
                Everything derived.
              </>,
            )}
          </div>
        </div>

        <div
          ref={hintRef}
          data-scrollhint=""
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 34,
            textAlign: 'center',
            fontFamily: mono,
            fontSize: 11,
            letterSpacing: '.24em',
            color: 'rgba(255,255,255,.4)',
            textTransform: 'uppercase',
            pointerEvents: 'none',
          }}
        >
          Scroll ↓
        </div>
      </div>
    </section>
  );
}

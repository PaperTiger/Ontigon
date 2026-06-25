'use client';

import { CSSProperties, useEffect, useRef } from 'react';

/**
 * Rotating three-sphere / Hopf-rosette abstraction drawn on a 2D canvas.
 * Auto-tumbles continuously and adds mouse-driven parallax rotation
 * (±28° horizontal, ±22° vertical) with smooth inertia.
 *
 * Used as a faint background object on the home closing-CTA section and the
 * Science honesty section.
 */
export function SphereCanvas({
  style,
  dataAttr,
}: {
  style?: CSSProperties;
  dataAttr?: string;
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let dpr = 1;
    // mouse target + smoothed value
    let txMx = 0;
    let txMy = 0;
    let mx = 0;
    let my = 0;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
    };
    resize();

    const N = 12;
    const loops = Array.from({ length: N }, (_, i) => ({
      phi: (i / N) * Math.PI * 2,
    }));

    const onMouseMove = (e: MouseEvent) => {
      txMx = (e.clientX / window.innerWidth - 0.5) * 2;
      txMy = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('resize', resize, { passive: true });

    let raf = 0;
    const draw = (time: number) => {
      if (w && h) {
        mx += (txMx - mx) * 0.04;
        my += (txMy - my) * 0.04;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, w, h);
        const cx = w / 2;
        const cy = h / 2;
        const scale = Math.min(w, h) * 0.38;
        const TILT = 1.12;
        const cT = Math.cos(TILT);
        const sT = Math.sin(TILT);
        const gz = time * 0.00012 + mx * 0.28;
        const gx = 0.16 + my * 0.22;
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
            const y1 = y * cT;
            const z1 = y * sT;
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
        ctx.lineWidth = 1;
        ctx.lineJoin = 'round';
        for (const L of projected) {
          const front = (L.z + 1) / 2;
          ctx.beginPath();
          for (let i = 0; i < L.pts.length; i++) {
            const [x, y] = L.pts[i];
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.strokeStyle = 'rgba(26,25,22,1)';
          ctx.globalAlpha = 0.1 + 0.5 * front;
          ctx.stroke();
        }
        ctx.globalAlpha = 1;
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const dataProps = dataAttr ? { [dataAttr]: '' } : {};
  return <canvas ref={ref} style={style} {...dataProps} />;
}

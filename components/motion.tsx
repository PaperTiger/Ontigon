'use client';

import {
  CSSProperties,
  ElementType,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';

/** Fire a callback once, the first time the element scrolls into view. */
function useInViewOnce<T extends HTMLElement>(
  onEnter: () => void,
  opts: IntersectionObserverInit = {
    threshold: 0.18,
    rootMargin: '0px 0px -8% 0px',
  },
) {
  const ref = useRef<T>(null);
  const fired = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      onEnter();
      fired.current = true;
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !fired.current) {
          fired.current = true;
          onEnter();
          io.disconnect();
        }
      });
    }, opts);
    io.observe(el);
    // Safety net: reveal anything still hidden after 2.6s.
    const t = setTimeout(() => {
      if (!fired.current) {
        fired.current = true;
        onEnter();
        io.disconnect();
      }
    }, 2600);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return ref;
}

type RevealProps = {
  children?: ReactNode;
  delay?: number;
  as?: ElementType;
  style?: CSSProperties;
  className?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  href?: string;
  // allow forwarding data-* attributes (e.g. data-r for the responsive CSS)
  [key: `data-${string}`]: string | undefined;
};

/** Scroll-reveal wrapper: fades + lifts content into place on first view. */
export function Reveal({
  children,
  delay = 0,
  as: Tag = 'div',
  style,
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
  href,
  ...rest
}: RevealProps) {
  const [shown, setShown] = useState(false);
  const ref = useInViewOnce<HTMLElement>(() => setShown(true));
  const motion: CSSProperties = shown
    ? {
        opacity: 1,
        transform: 'none',
        transition: `opacity .85s cubic-bezier(.2,.6,.2,1) ${delay}ms, transform .85s cubic-bezier(.2,.6,.2,1) ${delay}ms`,
      }
    : { opacity: 0, transform: 'translateY(26px)' };
  return (
    <Tag
      ref={ref}
      className={className}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      href={href}
      style={{ willChange: 'opacity, transform', ...style, ...motion }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

type CountUpProps = {
  to: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  style?: CSSProperties;
  className?: string;
};

/** Count-up number that animates from 0 → `to` once it scrolls into view. */
export function CountUp({
  to,
  decimals = 0,
  suffix = '',
  prefix = '',
  style,
  className,
}: CountUpProps) {
  const [val, setVal] = useState(0);
  const raf = useRef<number | null>(null);
  const ref = useInViewOnce<HTMLDivElement>(() => {
    const dur = 1400;
    const t0 = performance.now();
    const ease = (x: number) => 1 - Math.pow(1 - x, 3);
    const step = (now: number) => {
      const p = Math.min(1, (now - t0) / dur);
      setVal(to * ease(p));
      if (p < 1) raf.current = requestAnimationFrame(step);
      else setVal(to);
    };
    raf.current = requestAnimationFrame(step);
  });
  useEffect(
    () => () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    },
    [],
  );
  return (
    <div ref={ref} className={className} style={style}>
      {prefix}
      {val.toFixed(decimals)}
      {suffix}
    </div>
  );
}

type BarProps = {
  fill: number; // percent 0-100
  color: string;
};

/** Benchmark bar fill that grows to its target width once in view. */
export function Bar({ fill, color }: BarProps) {
  const [w, setW] = useState(0);
  const ref = useInViewOnce<HTMLDivElement>(() => setW(fill));
  return (
    <div style={{ height: 30, background: 'rgba(26,25,22,.07)' }}>
      <div
        ref={ref}
        style={{
          height: '100%',
          width: `${w}%`,
          background: color,
          transition: 'width 1.1s cubic-bezier(.2,.7,.2,1)',
        }}
      />
    </div>
  );
}

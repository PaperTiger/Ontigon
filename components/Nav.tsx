'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Logo } from './Logo';
import { C, mono, sans } from '@/lib/ui';

const PRIMARY = [
  { href: '/science', label: 'Science' },
  { href: '/results', label: 'Results' },
  { href: '/playground', label: 'Playground' },
];

const ABOUT_MENU = [
  { href: '/about', label: 'About Us' },
  { href: '/roadmap', label: 'Roadmap' },
  { href: '/news', label: 'News & Updates' },
];

export function Nav() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const aboutActive = ['/about', '/roadmap', '/news'].some(
    (p) => pathname === p || pathname.startsWith(p + '/'),
  );

  // dark = nav sitting over the black hero (home page, before scrolling past it)
  const [dark, setDark] = useState(isHome);
  const [ddOpen, setDdOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const ddRef = useRef<HTMLDivElement>(null);

  // Drive the dark theme from the hero's position on the home page.
  useEffect(() => {
    if (!isHome) {
      setDark(false);
      return;
    }
    setDark(true);
    const update = () => {
      const hero = document.querySelector('[data-hero]');
      if (!hero) {
        setDark(false);
        return;
      }
      setDark(hero.getBoundingClientRect().bottom > 130);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [isHome]);

  // Close menus whenever the route changes.
  useEffect(() => {
    setDdOpen(false);
    setMenuOpen(false);
  }, [pathname]);

  // Close the dropdown on outside click.
  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (ddRef.current && !ddRef.current.contains(e.target as Node))
        setDdOpen(false);
    };
    document.addEventListener('click', onDoc);
    return () => document.removeEventListener('click', onDoc);
  }, []);

  const linkColor = dark ? 'rgba(255,255,255,.82)' : C.ink;

  const navLinkStyle = (active: boolean): React.CSSProperties => ({
    fontSize: 15,
    letterSpacing: 0,
    cursor: 'pointer',
    color: linkColor,
    borderBottom: `1px solid ${active ? (dark ? '#fff' : C.ink) : 'transparent'}`,
    paddingBottom: 2,
    transition: 'color .5s ease',
  });

  return (
    <nav
      data-nav=""
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: dark ? 'rgba(8,8,9,.5)' : 'rgba(241,241,242,.88)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: `1px solid ${
          dark ? 'rgba(255,255,255,.14)' : 'rgba(26,26,28,.12)'
        }`,
        transition: 'background .5s ease, border-color .5s ease',
      }}
    >
      <div
        style={{
          height: 66,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 clamp(20px,5vw,64px)',
        }}
      >
        <Link
          href="/"
          aria-label="Ontigon — home"
          style={{
            cursor: 'pointer',
            transition: 'color .5s ease',
            display: 'flex',
            alignItems: 'center',
            color: dark ? '#fff' : C.ink,
          }}
        >
          <Logo style={{ height: 28 }} />
        </Link>

        {/* Desktop links */}
        <div
          data-nav-links=""
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(12px,1.4vw,20px)',
          }}
        >
          {PRIMARY.map((l) => (
            <Link key={l.href} href={l.href} style={navLinkStyle(pathname === l.href)}>
              {l.label}
            </Link>
          ))}

          <div
            ref={ddRef}
            style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setDdOpen((o) => !o);
              }}
              style={{
                ...navLinkStyle(aboutActive),
                background: 'transparent',
                borderTop: 0,
                borderLeft: 0,
                borderRight: 0,
                borderBottom: navLinkStyle(aboutActive).borderBottom,
                fontFamily: 'inherit',
                display: 'flex',
                alignItems: 'center',
                gap: 5,
              }}
            >
              About
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  transition: 'transform .22s ease',
                  display: 'block',
                  transform: ddOpen ? 'rotate(-180deg)' : 'rotate(0deg)',
                }}
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div
              style={{
                position: 'absolute',
                top: 'calc(100% + 4px)',
                right: -16,
                minWidth: 180,
                background: dark ? '#000' : '#f1f1f2',
                border: `1px solid ${
                  dark ? 'rgba(255,255,255,.16)' : 'rgba(26,25,22,.14)'
                }`,
                padding: '6px 0',
                opacity: ddOpen ? 1 : 0,
                pointerEvents: ddOpen ? 'auto' : 'none',
                transform: ddOpen ? 'translateY(0)' : 'translateY(-6px)',
                transition: 'opacity .22s ease, transform .22s ease',
              }}
            >
              {ABOUT_MENU.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setDdOpen(false)}
                  style={{
                    display: 'block',
                    padding: '10px 20px',
                    fontSize: 15,
                    letterSpacing: 0,
                    cursor: 'pointer',
                    color: linkColor,
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/investors"
            data-nav-cta=""
            style={{
              fontFamily: sans,
              fontSize: 14,
              letterSpacing: '.04em',
              cursor: 'pointer',
              background: 'transparent',
              color: dark ? '#fff' : C.ink,
              border: `1px solid ${dark ? 'rgba(255,255,255,.5)' : C.ink}`,
              padding: '9px 16px',
              borderRadius: 1,
              transition: 'color .5s ease, border-color .5s ease',
            }}
          >
            Request Access&nbsp;→
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          data-nav-hamburger=""
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          style={{
            display: 'none',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 5,
            width: 30,
            height: 30,
            background: 'transparent',
            border: 0,
            cursor: 'pointer',
            padding: 0,
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                height: 1.5,
                width: 22,
                background: dark ? '#fff' : C.ink,
                transition: 'transform .25s ease, opacity .25s ease',
                transform: menuOpen
                  ? i === 0
                    ? 'rotate(45deg) translate(4.5px,4.5px)'
                    : i === 2
                      ? 'rotate(-45deg) translate(4.5px,-4.5px)'
                      : 'none'
                  : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile slide-down menu */}
      <div
        data-mobile-menu=""
        aria-hidden={menuOpen ? 'false' : 'true'}
        style={{
          display: 'none',
          flexDirection: 'column',
          borderTop: `1px solid ${
            dark ? 'rgba(255,255,255,.1)' : 'rgba(26,26,28,.1)'
          }`,
          padding: '16px clamp(20px,5vw,40px) 28px',
          gap: 0,
          background: dark ? 'rgba(8,8,9,.97)' : 'rgba(241,241,242,.97)',
        }}
      >
        {[
          { href: '/science', label: 'Science' },
          { href: '/results', label: 'Results' },
          { href: '/playground', label: 'Playground' },
          { href: '/about', label: 'About' },
          { href: '/roadmap', label: 'Roadmap' },
          { href: '/news', label: 'News & Updates' },
        ].map((l) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            style={{
              display: 'block',
              fontSize: 18,
              fontWeight: 300,
              padding: '14px 0',
              borderBottom: `1px solid ${
                dark ? 'rgba(255,255,255,.08)' : 'rgba(26,26,28,.08)'
              }`,
              color: dark ? '#fff' : C.ink,
              cursor: 'pointer',
            }}
          >
            {l.label}
          </Link>
        ))}
        <Link
          href="/investors"
          onClick={() => setMenuOpen(false)}
          style={{
            display: 'block',
            fontSize: 15,
            fontWeight: 400,
            padding: '18px 0',
            color: dark ? '#fff' : C.ink,
            cursor: 'pointer',
          }}
        >
          Request Access →
        </Link>
      </div>
    </nav>
  );
}

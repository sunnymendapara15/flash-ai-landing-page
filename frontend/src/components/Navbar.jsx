import React, { useEffect, useState } from 'react';

function getInitialTheme() {
  try {
    const stored = localStorage.getItem('flash-ai-theme');
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  } catch (e) {
    return 'dark';
  }
}

function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('flash-ai-theme', theme);
    } catch (e) {/* ignore */}
  }, [theme]);
  return [theme, setTheme];
}

function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      onClick={onToggle}
    >
      <svg className="icon-moon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.5 6.5 0 0 0 9.8 9.8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
      <svg className="icon-sun" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="4.4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 2v2.4M12 19.6V22M2 12h2.4M19.6 12H22M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M19.1 4.9l-1.7 1.7M6.6 17.4l-1.7 1.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    </button>
  );
}

const links = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Stories', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

function Logo({ onClick }) {
  return (
    <a href="#top" className="logo" aria-label="Flash, AI home" onClick={onClick}>
      <span className="logo__mark" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" fill="#fff" />
        </svg>
      </span>
      <span>
        Flash<span className="logo__comma">,</span> AI
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 920) setOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="container nav__inner">
        <Logo onClick={() => setOpen(false)} />
        <nav aria-label="Primary">
          <ul className="nav__links">
            {links.map((l) => (
              <li key={l.href}>
                <a className="nav__link" href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav__actions">
          <ThemeToggle
            value={theme}
            onToggle={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
          />
          <a href="#pricing" className="btn btn-sm btn-ghost nav__cta">Sign in</a>
          <a href="#cta" className="btn btn-sm btn-primary nav__cta">Start building</a>
          <button
            className="nav__burger"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
      <div className="nav__mobile" id="mobile-menu">
        <ul>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="#cta" className="btn btn-primary" onClick={() => setOpen(false)}>Start building free</a>
      </div>
    </header>
  );
}

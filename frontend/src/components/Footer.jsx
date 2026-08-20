import React from 'react';

const cols = [
  {
    title: 'Product',
    links: ['Features', 'How it works', 'Pricing', 'Integrations', 'Changelog'],
  },
  {
    title: 'Company',
    links: ['About', 'Blog', 'Careers', 'Press kit', 'Contact'],
  },
  {
    title: 'Resources',
    links: ['Documentation', 'Community', 'Templates', 'API reference', 'Status'],
  },
];

const socials = [
  {
    name: 'X',
    path: 'M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.4 22H3.2l7.3-8.3L2.6 2H9l4.4 5.9L18.9 2Zm-1.1 18h1.7L7.7 3.7H5.9L17.8 20Z',
  },
  {
    name: 'LinkedIn',
    path: 'M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.24 8.25h4.52V23H.24V8.25Zm7.44 0h4.33v2.01h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.42 3.01 5.42 6.92V23h-4.51v-7.2c0-1.72-.03-3.93-2.4-3.93-2.4 0-2.77 1.87-2.77 3.8V23H7.68V8.25Z',
  },
  {
    name: 'GitHub',
    path: 'M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12v3.14c0 .3.21.66.8.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z',
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="#top" className="logo" aria-label="Flash, AI home">
              <span className="logo__mark" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" fill="#fff" />
                </svg>
              </span>
              <span>
                Flash<span className="logo__comma">,</span> AI
              </span>
            </a>
            <p>
              Describe your idea. Build your workflows with simple text
              conversation. Automation for everyone.
            </p>
          </div>
          {cols.map((col) => (
            <nav className="footer__col" key={col.title} aria-label={col.title}>
              <h4>{col.title}</h4>
              {col.links.map((l) => (
                <a key={l} href="#top">{l}</a>
              ))}
            </nav>
          ))}
        </div>
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Flash, AI. All rights reserved.</p>
          <div className="socials">
            {socials.map((s) => (
              <a key={s.name} href="#top" aria-label={s.name}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

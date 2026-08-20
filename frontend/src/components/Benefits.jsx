import React from 'react';

const benefits = [
  {
    icon: '⏱️',
    title: 'Ship in minutes, not weeks',
    desc: 'What used to take a developer sprint now takes one conversation. Launch automations the same day you think of them.',
  },
  {
    icon: '🦸',
    title: 'Built for non-technical teams',
    desc: 'Marketing, ops, founders, support — if you can describe a task, you can automate it. Zero training required.',
  },
  {
    icon: '💸',
    title: 'Replace costly tools & hours',
    desc: 'Consolidate point solutions, cut manual busywork, and let your team spend their energy on work that grows the business.',
  },
  {
    icon: '🤝',
    title: 'AI that collaborates with you',
    desc: 'Fine-tune workflows with follow-up messages. Flash, AI remembers your preferences across every future build.',
  },
];

export default function Benefits() {
  return (
    <section className="section" id="benefits" aria-labelledby="benefits-title">
      <div className="container">
        <div className="benefits__grid">
          <div className="benefits__lead" data-reveal>
            <span className="eyebrow">Why Flash, AI</span>
            <h2 className="section-title" id="benefits-title" style={{ marginTop: '0.9rem' }}>
              The fastest way to <span className="grad">make busywork disappear</span>
            </h2>
            <p>
              Most automation tools ask you to think like a developer. Flash, AI
              is the opposite: it adapts to you — your words, your processes,
              your pace.
            </p>
            <a href="#pricing" className="benefits__link">
              See plans & pricing
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
          <div className="benefits__list">
            {benefits.map((b, i) => (
              <div className="benefit" key={b.title} data-reveal style={{ '--d': `${i * 0.1}s` }}>
                <span className="benefit__icon" aria-hidden="true">{b.icon}</span>
                <div>
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';

const features = [
  {
    icon: '💬',
    title: 'Natural-language builder',
    desc: 'Type what you want done in plain English. Flash, AI translates your words into a precise, working workflow — no syntax, no logic diagrams, no tutorials.',
    wide: true,
  },
  {
    icon: '🔁',
    title: 'Automation engine',
    desc: 'Triggers, actions, conditions, retries — handled automatically. Your workflow runs on schedule or reacts in real time.',
  },
  {
    icon: '🧩',
    title: 'Integration hub',
    desc: 'Connect Gmail, Sheets, Slack, Notion, CRMs and 200+ tools in one sentence. No API keys to fiddle with.',
  },
  {
    icon: '🧠',
    title: 'Adaptive AI',
    desc: 'Flash, AI learns from your feedback and sharpens every run — cleaner outputs, smarter decisions, fewer edits.',
  },
  {
    icon: '🛡️',
    title: 'Enterprise-grade security',
    desc: 'SOC 2 Type II, end-to-end encryption, granular permissions, and full audit logs. Your data stays yours.',
  },
  {
    icon: '⚡',
    title: 'Instant deployment',
    desc: 'From idea to live automation in under a minute. Preview, approve, and let it run — while you get back to the work that matters.',
    wide: true,
  },
];

export default function Features() {
  return (
    <section className="section" id="features" aria-labelledby="features-title">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow eyebrow--center">Features</span>
          <h2 className="section-title" id="features-title">
            Everything you need to <span className="grad">automate anything</span>
          </h2>
          <p className="section-sub">
            Built for the person who just wants it done — and for the engineer
            who wants it done right.
          </p>
        </div>
        <div className="bento">
          {features.map((f, i) => (
            <div
              key={f.title}
              data-reveal
              style={{ '--d': `${(i % 3) * 0.1}s` }}
              className={`bento__card${f.wide ? ' bento__card--wide' : ''}`}
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
                e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
              }}
            >
              <span className="bento__icon" aria-hidden="true">{f.icon}</span>
              <h3 className="bento__title">{f.title}</h3>
              <p className="bento__desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

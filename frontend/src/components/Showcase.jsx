import React from 'react';

const steps = [
  {
    title: 'Describe your idea',
    desc: 'Tell Flash, AI what you want to achieve in your own words — as casual or detailed as you like.',
  },
  {
    title: 'Watch it design the workflow',
    desc: 'Flash, AI maps triggers, steps, and integrations, then shows you a clean diagram you can tweak by chatting.',
  },
  {
    title: 'Approve & let it run',
    desc: 'One tap and your automation goes live — monitored, reliable, and easy to edit anytime.',
  },
];

const nodes = [
  { icon: '🗣️', label: '“New deal in my CRM”', meta: 'Trigger · just said out loud', ai: false },
  { icon: '🧠', label: 'Flash, AI understands intent', meta: 'Designs 4-step flow', ai: true },
  { icon: '📊', label: 'Update spreadsheet + notify team', meta: 'Runs in 38 seconds', ai: false },
];

export default function Showcase() {
  return (
    <section className="section section--alt" id="how" aria-labelledby="how-title">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow eyebrow--center">How it works</span>
          <h2 className="section-title" id="how-title">
            From <span className="grad">thought</span> to workflow in 3 steps
          </h2>
          <p className="section-sub">
            No builders to learn. No diagram editors. Just a conversation.
          </p>
        </div>

        <div className="showcase__grid">
          <div className="showcase__steps">
            {steps.map((s, i) => (
              <div className="step" key={s.title} data-reveal style={{ '--d': `${i * 0.12}s` }}>
                <span className="step__num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="showcase__viz" data-reveal style={{ '--d': '0.15s' }}>
            <div className="viz__prompt">
              <span aria-hidden="true">💬</span>
              <span>
                “When a deal closes, update the sales sheet and tell the team on
                Slack.” <strong>— just like that.</strong>
              </span>
            </div>
            <div className="viz__flow">
              {nodes.map((n, i) => (
                <React.Fragment key={n.label}>
                  {i > 0 && <div className="flow-connector" aria-hidden="true" />}
                  <div className={`node${n.ai ? ' node--ai' : ''}`} style={{ animationDelay: `${i * 0.35}s` }}>
                    <span className="node__icon" aria-hidden="true">{n.icon}</span>
                    <span>
                      <span className="node__label">{n.label}</span>
                      <span className="node__meta">{n.meta}</span>
                    </span>
                  </div>
                </React.Fragment>
              ))}
            </div>
            <span className="viz__live">
              <i aria-hidden="true" /> Running live · last run 2 min ago
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

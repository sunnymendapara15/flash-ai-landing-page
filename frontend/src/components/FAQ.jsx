import React, { useState } from 'react';

const faqs = [
  {
    q: 'Do I need to know how to code?',
    a: 'No. Flash, AI is built for people who have never written a line of code. You describe what you want in plain language, and Flash, AI turns it into a working workflow. Engineers love it too — it replaces hours of wiring for routine automations.',
  },
  {
    q: 'How is this different from other automation tools?',
    a: 'Traditional tools make you learn visual builders, triggers, and syntax before you can automate anything. Flash, AI removes the learning curve entirely: you have a conversation, not a configuration session. It designs the workflow, explains it, and runs it — then improves it from your feedback.',
  },
  {
    q: 'Which apps can Flash, AI connect to?',
    a: '200+ integrations out of the box — Gmail, Google Sheets, Slack, Notion, CRMs like HubSpot and Salesforce, databases, and more. If an app has an API, Flash, AI can typically work with it, and our team adds new integrations every week.',
  },
  {
    q: 'Is my data safe?',
    a: 'Yes. Flash, AI is SOC 2 Type II certified, encrypts data in transit and at rest, and never trains models on your private data. Enterprise plans add SSO/SAML, granular permissions, and full audit logs.',
  },
  {
    q: 'Can I migrate from my current automation tool?',
    a: 'Usually, yes — and it takes minutes, not months. Describe what your current setup does and Flash, AI rebuilds it conversationally, then we help you redirect your existing triggers. Most teams complete migration within a week.',
  },
  {
    q: 'What happens if I hit my plan limits?',
    a: 'Nothing breaks. Your workflows pause gracefully with a clear notification, and you can upgrade in one click. Free plan users get a generous monthly allowance with no credit card required.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section className="section" id="faq" aria-labelledby="faq-title">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow eyebrow--center">FAQ</span>
          <h2 className="section-title" id="faq-title">
            Questions, <span className="grad">answered</span>
          </h2>
          <p className="section-sub">
            Everything you're wondering before you press start.
          </p>
        </div>
        <div className="faq__list">
          {faqs.map((f, i) => {
            const open = openIndex === i;
            return (
              <div className={`faq__item${open ? ' open' : ''}`} key={f.q} data-reveal style={{ '--d': `${i * 0.06}s` }}>
                <h3>
                  <button
                    className="faq__btn"
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-btn-${i}`}
                    onClick={() => setOpenIndex(open ? -1 : i)}
                  >
                    {f.q}
                    <span className="faq__icon" aria-hidden="true">+</span>
                  </button>
                </h3>
                <div className="faq__panel" id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-btn-${i}`}>
                  <div className="faq__panel-inner">
                    <p>{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

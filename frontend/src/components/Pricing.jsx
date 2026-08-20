import React, { useState } from 'react';

const plans = [
  {
    name: 'Starter',
    tagline: 'For individuals trying their first automation',
    monthly: 0,
    yearly: 0,
    note: 'Free forever. No credit card.',
    cta: 'Start for free',
    popular: false,
    features: [
      '5 active workflows',
      '200 runs / month',
      '10+ popular integrations',
      'Community support',
      '1 user',
    ],
  },
  {
    name: 'Pro',
    tagline: 'For teams automating real business processes',
    monthly: 29,
    yearly: 24,
    note: 'Per user, billed annually. Cancel anytime.',
    cta: 'Start 14-day trial',
    popular: true,
    features: [
      'Unlimited workflows',
      '50,000 runs / month',
      '200+ integrations',
      'Adaptive AI tuning',
      'Priority support',
      '5+ users included',
    ],
  },
  {
    name: 'Enterprise',
    tagline: 'For organizations with scale & compliance needs',
    monthly: 99,
    yearly: 79,
    note: 'Per user, billed annually. Custom terms available.',
    cta: 'Talk to sales',
    popular: false,
    features: [
      'Unlimited runs',
      'SSO / SAML & SCIM',
      'SOC 2 reports & audit logs',
      'Dedicated success manager',
      '99.9% uptime SLA',
      'Custom AI models',
    ],
  },
];

function Check({ check }) {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Pricing() {
  const [yearly, setYearly] = useState(true);
  return (
    <section className="section section--alt" id="pricing" aria-labelledby="pricing-title">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow eyebrow--center">Pricing</span>
          <h2 className="section-title" id="pricing-title">
            Simple pricing that <span className="grad">scales with you</span>
          </h2>
          <p className="section-sub">
            Start free. Upgrade when your automation habit does. No hidden fees,
            no surprise limits.
          </p>
        </div>

        <div className="pricing__toggle" data-reveal>
          <div className="toggle" role="group" aria-label="Billing period">
            <button
              type="button"
              className={!yearly ? 'active' : ''}
              aria-pressed={!yearly}
              onClick={() => setYearly(false)}
            >
              Monthly
            </button>
            <button
              type="button"
              className={yearly ? 'active' : ''}
              aria-pressed={yearly}
              onClick={() => setYearly(true)}
            >
              Yearly <span className="save">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="plans">
          {plans.map((p, i) => (
            <article
              key={p.name}
              className={`plan${p.popular ? ' plan--popular' : ''}`}
              data-reveal
              style={{ '--d': `${i * 0.1}s` }}
            >
              {p.popular && <span className="plan__badge">Most popular</span>}
              <div>
                <h3 className="plan__name">{p.name}</h3>
                <p className="plan__tagline">{p.tagline}</p>
              </div>
              <p className="plan__price">
                ${yearly ? p.yearly : p.monthly}
                <small> /user/mo</small>
              </p>
              <p className="plan__note">{p.note}</p>
              <ul className="plan__features">
                {p.features.map((f) => (
                  <li key={f}>
                    <span className="check"><Check /></span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="plan__cta">
                <a
                  href="#cta"
                  className={`btn ${p.popular ? 'btn-primary' : 'btn-ghost'}`}
                >
                  {p.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

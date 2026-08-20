import React, { useState } from 'react';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
  };

  return (
    <section className="section" id="cta" aria-labelledby="cta-title">
      <div className="container">
        <div className="cta__panel" data-reveal>
          <span className="badge" style={{ marginBottom: '1.4rem' }}>
            <span className="badge__dot" aria-hidden="true" />
            Join 48,000+ teams automating with Flash, AI
          </span>
          <h2 className="cta__title" id="cta-title">
            Your next workflow is <span className="grad">one sentence away</span>
          </h2>
          <p className="cta__sub">
            Tell Flash, AI what you wish ran itself. Get your first automation
            live today — free, in under two minutes.
          </p>
          {done ? (
            <p className="cta__success" role="status">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <path d="M8 12.5l2.5 2.5L16 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              You're in! Check your inbox to start building.
            </p>
          ) : (
            <form className="cta__form" onSubmit={onSubmit}>
              <label htmlFor="cta-email" className="sr-only">Work email</label>
              <input
                id="cta-email"
                className="cta__input"
                type="email"
                required
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="btn btn-primary">Start building</button>
            </form>
          )}
          <p className="cta__fine">
            Free plan forever · No credit card required · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}

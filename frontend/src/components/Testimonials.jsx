import React from 'react';

const testimonials = [
  {
    quote: 'I described a lead-nurturing flow during coffee and it was running before I finished my cup. That has never happened with any tool.',
    name: 'Maya Rodriguez',
    role: 'Growth Lead · Stellaris',
    avatar: 'MR',
    color: 'avatar--a',
  },
  {
    quote: 'We replaced three tools and a spreadsheet full of manual steps. Flash, AI paid for itself in the first week.',
    name: 'Daniel Okafor',
    role: 'COO · Vertex',
    avatar: 'DO',
    color: 'avatar--b',
  },
  {
    quote: 'As a founder with zero engineering time, this is the first automation product that speaks my language. Literally.',
    name: 'Priya Sharma',
    role: 'Founder · Lumina',
    avatar: 'PS',
    color: 'avatar--c',
  },
  {
    quote: 'The AI designed a workflow better than the one our team drafted in two sprints. We now start every build with Flash, AI.',
    name: 'Jonas Weber',
    role: 'Head of Ops · Northwind',
    avatar: 'JW',
    color: 'avatar--d',
  },
  {
    quote: 'Onboarding my whole team took an afternoon. Nobody reads docs — everybody talks to Flash, AI.',
    name: 'Amara Chen',
    role: 'VP Marketing · Orbital',
    avatar: 'AC',
    color: 'avatar--e',
  },
  {
    quote: 'Audit-ready logs, granular permissions, and workflows our compliance team actually approves. Enterprise without the enterprise headache.',
    name: 'Lucas Moreau',
    role: 'CISO · Quantumly',
    avatar: 'LM',
    color: 'avatar--f',
  },
];

export default function Testimonials() {
  return (
    <section className="section section--alt" id="testimonials" aria-labelledby="testi-title">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow eyebrow--center">Loved by teams</span>
          <h2 className="section-title" id="testi-title">
            People are <span className="grad">shipping faster</span> with Flash, AI
          </h2>
          <p className="section-sub">
            From solo founders to scaled operations — here's what happens when
            automation finally speaks plain English.
          </p>
        </div>
        <div className="testi__grid">
          {testimonials.map((t, i) => (
            <figure className="tcard" key={t.name} data-reveal style={{ '--d': `${(i % 3) * 0.1}s` }}>
              <div className="tcard__stars" aria-label="5 out of 5 stars">
                {'★★★★★'.split('').map((s, j) => (
                  <span key={j} aria-hidden="true">{s}</span>
                ))}
              </div>
              <blockquote className="tcard__quote">“{t.quote}”</blockquote>
              <figcaption className="tcard__who">
                <span className={`avatar ${t.color}`} aria-hidden="true">{t.avatar}</span>
                <span>
                  <span className="tcard__name">{t.name}</span>
                  <span className="tcard__role">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

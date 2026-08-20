import React, { useEffect, useState } from 'react';

const phrases = [
  'sync new deals to my CRM',
  'turn leads into follow-up emails',
  'post every blog to socials',
  'send me a weekly digest',
  'update my spreadsheet daily',
];

function useTyping() {
  const [text, setText] = useState('');
  useEffect(() => {
    let phrase = 0;
    let char = 0;
    let deleting = false;
    let timer;
    const tick = () => {
      const current = phrases[phrase];
      if (!deleting) {
        char += 1;
        setText(current.slice(0, char));
        if (char === current.length) {
          deleting = true;
          timer = setTimeout(tick, 1900);
          return;
        }
        timer = setTimeout(tick, 44);
      } else {
        char -= 1;
        setText(current.slice(0, char));
        if (char === 0) {
          deleting = false;
          phrase = (phrase + 1) % phrases.length;
          timer = setTimeout(tick, 420);
          return;
        }
        timer = setTimeout(tick, 22);
      }
    };
    timer = setTimeout(tick, 700);
    return () => clearTimeout(timer);
  }, []);
  return text;
}

function AiMessage({ index, children }) {
  return (
    <div className="chat__msg chat__msg--ai" style={{ animationDelay: `${index * 1.1}s` }}>
      <span className="chat__ai-avatar" aria-hidden="true">⚡</span>
      <div>
        <div>{children}</div>
        {index === 0 && (
          <div className="chat__status">
            <span className="chat__spark" aria-hidden="true" /> Building workflow…
          </div>
        )}
      </div>
    </div>
  );
}

export default function Hero() {
  const typed = useTyping();
  return (
    <section className="hero" id="top" aria-label="Intro">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__orb hero__orb--a" aria-hidden="true" />
      <div className="hero__orb hero__orb--b" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="badge" data-reveal>
            <span className="badge__dot" aria-hidden="true" />
            New · Flash, AI 2.0 is live
          </span>
          <h1 className="hero__title" data-reveal style={{ '--d': '0.08s' }}>
            Describe it.<br />
            <span className="grad">Flash, AI builds it.</span>
          </h1>
          <p className="hero__sub" data-reveal style={{ '--d': '0.16s' }}>
            Turn a simple text conversation into a working automation workflow.
            No code. No drag-and-drop maze. Just say what you want — Flash, AI
            designs, builds, and runs it for you.
          </p>
          <div className="hero__actions" data-reveal style={{ '--d': '0.24s' }}>
            <a href="#cta" className="btn btn-lg btn-primary">Start building — it's free</a>
            <a href="#how" className="btn btn-lg btn-ghost">
              See how it works
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
          <p className="hero__note" data-reveal style={{ '--d': '0.3s' }}>
            No credit card required · Free plan forever · Set up in under 2 minutes
          </p>
        </div>
        <div className="hero__demo" data-reveal style={{ '--d': '0.2s' }}>
          <div className="glass chat">
            <div className="chat__head">
              <span className="chat__dots" aria-hidden="true"><i /><i /><i /></span>
              <span className="chat__title">flash.ai — new workflow</span>
              <span className="chat__live">live</span>
            </div>
            <div className="chat__body">
              <div className="chat__msg chat__msg--user">
                I want to <span style={{ whiteSpace: 'nowrap' }}>{typed}</span>
                <span className="caret" aria-hidden="true" />
              </div>
              <AiMessage index={0}>
                Got it. I'll connect your CRM, watch for new deals, and sync every
                field automatically. One approval and it's live.
              </AiMessage>
              <AiMessage index={1}>✅ Workflow ready — running in production.</AiMessage>
            </div>
          </div>
          <span className="glass chip chip--1" data-reveal style={{ '--d': '0.5s' }}>
            ⚡ 127 workflows built today
          </span>
          <span className="glass chip chip--2" data-reveal style={{ '--d': '0.65s' }}>
            🚀 0 → live in 38s
          </span>
        </div>
      </div>
      <a href="#proof" className="hero__scroll" aria-label="Scroll to content">
        <span>Scroll</span>
        <span className="hero__scroll-line" aria-hidden="true" />
      </a>
    </section>
  );
}

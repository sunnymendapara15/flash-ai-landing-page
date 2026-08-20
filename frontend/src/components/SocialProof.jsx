import React, { useEffect, useRef, useState } from 'react';

const logos = [
  { glyph: '◈', name: 'Northwind' },
  { glyph: '▲', name: 'Lumina' },
  { glyph: '●', name: 'Orbital' },
  { glyph: '◆', name: 'Vertex' },
  { glyph: '✳', name: 'Quantumly' },
  { glyph: '⬡', name: 'Hexlab' },
  { glyph: '❖', name: 'Aurora' },
  { glyph: '✦', name: 'Stellaris' },
];

const stats = [
  { value: 48000, suffix: '+', label: 'Workflows automated' },
  { value: 1200000, suffix: '+', label: 'Hours saved yearly' },
  { value: 98, suffix: '%', label: 'Tasks running without errors' },
  { value: 4.9, suffix: '/5', label: 'Average user rating', decimals: 1 },
];

function Counter({ value, suffix, decimals = 0 }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState('0');
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf;
    const run = () => {
      const dur = 1600;
      const start = performance.now();
      const step = (now) => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 4);
        const current = value * eased;
        setDisplay(
          current.toLocaleString('en-US', {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          })
        );
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            run();
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => { cancelAnimationFrame(raf); io.disconnect(); };
  }, [value, decimals]);
  return (
    <span ref={ref} className="stat__num">
      {display}
      <span className="grad">{suffix}</span>
    </span>
  );
}

export default function SocialProof() {
  return (
    <section className="social" id="proof" aria-label="Trusted by teams">
      <div className="container">
        <p className="social__label" data-reveal>Trusted by teams who ship fast at</p>
        <div className="marquee" data-reveal style={{ '--d': '0.1s' }}>
          <div className="marquee__track">
            {[...logos, ...logos].map((l, i) => (
              <span className="logo-item" key={`${l.name}-${i}`} aria-hidden={i >= logos.length}>
                <span className="logo-item__glyph" aria-hidden="true">{l.glyph}</span>
                {l.name}
              </span>
            ))}
          </div>
        </div>
        <div className="stats">
          {stats.map((s, i) => (
            <div className="stat" key={s.label} data-reveal style={{ '--d': `${i * 0.1}s` }}>
              <Counter value={s.value} suffix={s.suffix} decimals={s.decimals || 0} />
              <p className="stat__label">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React, { useState, useEffect } from "react";

export default function LumynisSpirit() {
  const palettes = [
    { bg: 'rgba(255,255,255,0.94)', accent: '#4f46e5', gradient: 'linear-gradient(90deg, #4f46e5, #06b6d4)' },
    { bg: 'rgba(255,255,255,0.94)', accent: '#ec4899', gradient: 'linear-gradient(90deg, #ec4899, #f43f5e)' },
    { bg: 'rgba(255,255,255,0.94)', accent: '#10b981', gradient: 'linear-gradient(90deg, #10b981, #14b8a6)' },
    { bg: 'rgba(255,255,255,0.94)', accent: '#f59e0b', gradient: 'linear-gradient(90deg, #f59e0b, #f97316)' },
    { bg: 'rgba(255,255,255,0.94)', accent: '#8b5cf6', gradient: 'linear-gradient(90deg, #8b5cf6, #a78bfa)' }
  ];

  const [colorIndex, setColorIndex] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(() => Math.floor(Math.random() * 5));

  useEffect(() => {
    const handler = (e) => setColorIndex(e.detail?.colorIndex ?? 0);
    window.addEventListener('navbarColorChange', handler);
    const id = setInterval(() => setColorIndex(i => (i + 1) % palettes.length), 10000);
    return () => { window.removeEventListener('navbarColorChange', handler); clearInterval(id); };
  }, []);

  useEffect(() => {
    const qid = setInterval(() => setQuoteIndex(i => (i + 1) % quotes.length), 7000);
    return () => clearInterval(qid);
  }, []);

  const current = palettes[colorIndex] || palettes[0];

  const quotes = [
    "La lumière de l'innovation consciente éclaire nos pas vers l'excellence.",
    "Chaque défi est une opportunité de grandir et de briller.",
    "L'élégance naît de la simplicité et de l'intention pure.",
    "Créer avec conscience, innover avec cœur.",
    "Notre succès se mesure à l'impact positif que nous créons."
  ];

  const hexToRgba = (hex, alpha = 0.08) => {
    if (!hex) return `rgba(15,23,42,${alpha})`;
    const v = hex.replace('#','');
    const r = parseInt(v.substring(0,2),16);
    const g = parseInt(v.substring(2,4),16);
    const b = parseInt(v.substring(4,6),16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <div style={{ minHeight: '100vh', background: current.bg, transition: 'background 0.8s ease' }}>
      <section style={{ padding: 'clamp(3rem, 10vw, 6rem)', background: current.gradient, color: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'inline-block', padding: '0.5rem 1rem', borderRadius: 999, background: 'rgba(255,255,255,0.12)', fontWeight: 700 }}>Lumynis Spirit</div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', margin: '1rem 0 0.5rem', fontWeight: 900 }}>🔮 Élévation & Conscience</h1>
          <p style={{ color: 'rgba(255,255,255,0.95)', maxWidth: 820, margin: '0.5rem auto 0' }}>Des ressources inspirantes pour grandir, méditer et créer avec sens.</p>
        </div>
      </section>

      <main style={{ maxWidth: 1100, margin: '0 auto', padding: '2rem 1rem' }}>
        <div style={{ display: 'grid', gap: 24 }}>
          <div style={{ borderRadius: 14, padding: '1.5rem', background: 'white', boxShadow: '0 8px 30px rgba(2,6,23,0.06)', border: `1px solid ${hexToRgba(current.accent, 0.12)}` }}>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              <div style={{ fontSize: 36 }}>💭</div>
              <div>
                <div style={{ fontSize: '1.125rem', fontWeight: 800, marginBottom: 6 }}>Pensée du jour</div>
                <div style={{ fontStyle: 'italic', color: '#334155', lineHeight: 1.6, fontSize: '1rem' }}>&quot;{quotes[quoteIndex]}&quot;</div>
              </div>
            </div>
          </div>

          <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
            <div style={{ padding: 18, borderRadius: 12, background: 'white', boxShadow: '0 6px 18px rgba(2,6,23,0.04)' }}>
              <div style={{ fontSize: 28 }}>📖</div>
              <h3 style={{ marginTop: 8, marginBottom: 8 }}>Enseignements</h3>
              <p style={{ color: '#475569' }}>Articles, textes et guidances pour votre chemin intérieur.</p>
            </div>

            <div style={{ padding: 18, borderRadius: 12, background: 'white', boxShadow: '0 6px 18px rgba(2,6,23,0.04)' }}>
              <div style={{ fontSize: 28 }}>🧘</div>
              <h3 style={{ marginTop: 8, marginBottom: 8 }}>Méditation</h3>
              <p style={{ color: '#475569' }}>Séquences guidées et exercices pour apaiser l'esprit.</p>
            </div>

            <div style={{ padding: 18, borderRadius: 12, background: 'white', boxShadow: '0 6px 18px rgba(2,6,23,0.04)' }}>
              <div style={{ fontSize: 28 }}>📚</div>
              <h3 style={{ marginTop: 8, marginBottom: 8 }}>Livres Lumynis</h3>
              <p style={{ color: '#475569' }}>Sélections et recommandations pour approfondir.</p>
            </div>
          </section>

          <section style={{ padding: 18, borderRadius: 12, background: hexToRgba(current.accent, 0.04) }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.125rem', fontWeight: 800 }}>Contenu Premium</h3>
                <p style={{ margin: '6px 0 0', color: '#334155' }}>Méditations avancées, séries et ateliers approfondis.</p>
              </div>
              <div>
                <button style={{ padding: '10px 18px', borderRadius: 12, background: current.gradient, color: 'white', fontWeight: 800, border: 'none' }}>S'abonner</button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

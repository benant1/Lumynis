import React, { useState, useEffect } from "react";

export default function LumynisSpirit() {
  const [quote, setQuote] = useState("");

  const quotes = [
    "La lumière de l'innovation consciente éclaire nos pas vers l'excellence.",
    "Chaque défi est une opportunité de grandir et de briller.",
    "L'élégance naît de la simplicité et de l'intention pure.",
    "Créer avec conscience, innover avec cœur.",
    "Notre succès se mesure à l'impact positif que nous créons."
  ];

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--gray-50)' }}>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)',
        color: 'white',
        padding: 'clamp(4rem, 10vw, 6rem) 1.5rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '1.5rem', color: 'white' }}>
            🔮 Lumynis Spirit
          </h1>
          <p style={{ fontSize: 'clamp(1.125rem, 3vw, 1.5rem)', marginBottom: '2rem', opacity: 0.95 }}>
            Spiritualité & Développement Personnel
          </p>
        </div>
      </section>

      {/* Pensée du Jour */}
      <section style={{ padding: 'clamp(3rem, 8vw, 5rem) 1.5rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="card" style={{
            padding: 'clamp(2rem, 5vw, 3rem)',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(167, 139, 250, 0.05))',
            border: '2px solid var(--primary-light)'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>💭</div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '1.5rem', color: 'var(--primary)' }}>
              Pensée du Jour
            </h2>
            <p style={{
              fontSize: 'clamp(1.125rem, 3vw, 1.5rem)',
              fontStyle: 'italic',
              color: 'var(--gray-700)',
              lineHeight: '1.8'
            }}>
              "{quote}"
            </p>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section style={{ padding: 'clamp(3rem, 8vw, 5rem) 1.5rem', background: 'white' }}>
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
          <div className="grid-3" style={{ gap: '2rem' }}>
            <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📖</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Enseignements</h3>
              <p style={{ color: 'var(--gray-600)' }}>
                Sagesse et enseignements pour votre développement
              </p>
            </div>

            <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🧘</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Méditation</h3>
              <p style={{ color: 'var(--gray-600)' }}>
                Pratiques de méditation guidées
              </p>
            </div>

            <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📚</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Livres Lumynis</h3>
              <p style={{ color: 'var(--gray-600)' }}>
                Collection exclusive de livres inspirants
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium */}
      <section style={{
        padding: 'clamp(3rem, 8vw, 5rem) 1.5rem',
        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(167, 139, 250, 0.1))'
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '1.5rem' }}>
            Contenu Premium
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--gray-600)', marginBottom: '2rem' }}>
            Accédez à des contenus exclusifs, méditations avancées et enseignements approfondis
          </p>
          <button className="btn-primary" style={{
            background: 'linear-gradient(135deg, #8B5CF6, #A78BFA)',
            fontSize: '1.125rem',
            padding: '1rem 2rem'
          }}>
            S'abonner Premium
          </button>
        </div>
      </section>
    </div>
  );
}

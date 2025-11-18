import React from "react";
import { Link } from "react-router-dom";

export default function Values() {
  const valeurs = [
    { key: "lumiere", title: "Lumière", desc: "Clarté, connaissance et inspiration pour chaque décision.", gradient: 'linear-gradient(135deg, var(--primary), var(--primary-light))' },
    { key: "elegance", title: "Élégance", desc: "Design soigné, hiérarchie claire et cohérence visuelle.", gradient: 'linear-gradient(135deg, var(--secondary), #14B8A6)' },
    { key: "innovation", title: "Innovation", desc: "Solutions techniques créatives et pragmatiques.", gradient: 'linear-gradient(135deg, var(--accent), #FB923C)' },
    { key: "elevation", title: "Élévation", desc: "Approche consciente et portée humaine du numérique.", gradient: 'linear-gradient(135deg, var(--danger), #F87171)' },
    { key: "impact", title: "Impact", desc: "Création avec sens pour transformer positivement.", gradient: 'linear-gradient(135deg, var(--success), #34D399)' },
  ];

  return (
    <section style={{ padding: '5rem 1.5rem', background: 'var(--white)' }}>
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: '900', 
            color: 'var(--gray-900)',
            marginBottom: '1rem'
          }}>
            Nos valeurs
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            color: 'var(--gray-600)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Principes qui guident notre travail — clairs, humains et durables.
          </p>
        </div>

        <div className="grid-3" style={{ gap: '2rem', marginBottom: '3rem' }}>
          {valeurs.map(v => (
            <div key={v.key} className="card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ 
                width: '80px',
                height: '80px',
                margin: '0 auto 1.5rem',
                borderRadius: '50%',
                background: v.gradient,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'var(--shadow-lg)'
              }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '700',
                color: 'var(--gray-900)',
                marginBottom: '0.75rem'
              }}>
                {v.title}
              </h3>
              <p style={{ 
                color: 'var(--gray-600)',
                lineHeight: '1.6'
              }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/about" className="btn-primary">En savoir plus</Link>
        </div>
      </div>
    </section>
  );
}

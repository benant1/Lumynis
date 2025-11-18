import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section style={{ 
      background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.03) 0%, rgba(6, 182, 212, 0.03) 100%)',
      padding: 'clamp(2rem, 8vw, 5rem) clamp(1rem, 5vw, 1.5rem)',
      minHeight: 'auto',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', width: '100%' }}>
        {/* Section du haut : Texte à gauche + Image à droite */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'clamp(2rem, 5vw, 3rem)',
          alignItems: 'center',
          marginBottom: 'clamp(2rem, 5vw, 3rem)'
        }}>
          <div style={{ order: 1 }}>
            <p style={{ 
              color: 'var(--primary)', 
              fontWeight: '600', 
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
              marginBottom: '1rem'
            }}>
              Bienvenue au Groupe Lumynis
            </p>

            <h1 style={{ 
              fontSize: 'clamp(2rem, 6vw, 4rem)', 
              fontWeight: '900',
              lineHeight: '1.1',
              marginBottom: '1.5rem',
              color: 'var(--gray-900)'
            }}>
              Innovation <span style={{ color: 'var(--primary)' }}>•</span> Développement <span style={{ color: 'var(--primary)' }}>•</span><br/>
              Accompagnement <span style={{ color: 'var(--primary)' }}>•</span> Excellence
            </h1>

            <p style={{ 
              fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', 
              color: 'var(--gray-700)',
              lineHeight: '1.7',
              marginBottom: '1.5rem',
              maxWidth: '700px'
            }}>
              Le Groupe Lumynis est une entreprise moderne dédiée à la création de solutions innovantes dans les domaines du digital, de la formation, de l'entrepreneuriat et de l'accompagnement des entreprises.
            </p>

            <p style={{ 
              fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', 
              color: 'var(--gray-700)',
              lineHeight: '1.7',
              marginBottom: '1.5rem',
              maxWidth: '700px',
              fontWeight: '600'
            }}>
              Notre objectif est clair : apporter la lumière là où les autres voient des limites.
            </p>

            <p style={{ 
              fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', 
              color: 'var(--gray-700)',
              lineHeight: '1.7',
              marginBottom: '2rem',
              maxWidth: '700px'
            }}>
              Dans un monde en constante évolution, nous aidons les particuliers, entrepreneurs et organisations à atteindre leurs objectifs grâce à des outils efficaces, des plateformes performantes et une vision centrée sur l'humain.
            </p>

            <div className="flex" style={{ gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
              <Link to="/join" className="btn-primary">👉 Rejoignez-nous aujourd'hui</Link>
              <Link to="/about" className="btn-outline">En savoir plus</Link>
            </div>

            <div className="flex" style={{ gap: 'clamp(1rem, 3vw, 2rem)', flexWrap: 'wrap' }}>
              <div className="card" style={{ padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1rem, 3vw, 1.5rem)', display: 'inline-block' }}>
                <div style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: '800', color: 'var(--primary)' }}>200+</div>
                <div style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: 'var(--gray-600)' }}>Projets livrés</div>
              </div>
              <div className="card" style={{ padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1rem, 3vw, 1.5rem)', display: 'inline-block' }}>
                <div style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: '800', color: 'var(--primary)' }}>99.9%</div>
                <div style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: 'var(--gray-600)' }}>Disponibilité</div>
              </div>
              <div className="card" style={{ padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1rem, 3vw, 1.5rem)', display: 'inline-block' }}>
                <div style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: '800', color: 'var(--primary)' }}>24h</div>
                <div style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: 'var(--gray-600)' }}>Support</div>
              </div>
            </div>
          </div>

          {/* Image à droite du texte */}
          <div style={{ display: 'flex', justifyContent: 'center', order: 2 }}>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop" 
              alt="Équipe Lumynis" 
              style={{ 
                width: '100%', 
                maxWidth: '500px',
                height: 'auto', 
                borderRadius: 'var(--border-radius-lg)',
                boxShadow: 'var(--shadow-2xl)'
              }} 
            />
          </div>
        </div>

        {/* Section du bas : Vidéo pleine largeur */}
        <div style={{ 
          width: '100%',
          borderRadius: 'var(--border-radius-lg)',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-2xl)',
          position: 'relative',
          backgroundColor: '#000'
        }}>
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=1"
            title="Démonstration Lumynis"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              display: 'block',
              borderRadius: 'var(--border-radius-lg)'
            }}
          ></iframe>
          
          {/* Overlay avec texte */}
          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            padding: '12px 16px',
            borderRadius: '10px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            maxWidth: '400px',
            pointerEvents: 'none'
          }}>
            <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f172a', marginBottom: '4px' }}>
              🎯 Démonstration en direct
            </div>
            <div style={{ fontSize: '12px', color: '#6b7280' }}>
              Découvrez nos solutions innovantes en action
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @media (min-width: 768px) {
          section > div > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
          
          section > div > div:first-child > div:first-child {
            order: 1 !important;
          }
          
          section > div > div:first-child > div:last-child {
            order: 2 !important;
          }
        }
      `}</style>
    </section>
  );
}


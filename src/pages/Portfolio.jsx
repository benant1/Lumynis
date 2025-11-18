import React, { useState } from "react";

export default function Portfolio() {
  const [filter, setFilter] = useState('all');

  const projects = [
    { id: 1, title: "Logo Entreprise Tech", category: "logo", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500", desc: "Logo moderne pour startup tech" },
    { id: 2, title: "Identité Visuelle Restaurant", category: "branding", image: "https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?w=500", desc: "Branding complet restaurant" },
    { id: 3, title: "UI/UX App Mobile", category: "ui", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500", desc: "Design application mobile" },
    { id: 4, title: "Logo Boutique Mode", category: "logo", image: "https://images.unsplash.com/photo-1600353068440-6361ef3a86e8?w=500", desc: "Logo élégant mode luxe" },
    { id: 5, title: "Charte Graphique ONG", category: "branding", image: "https://images.unsplash.com/photo-1600025116416-36c801e5d0a1?w=500", desc: "Identité complète ONG" },
    { id: 6, title: "Design Site E-commerce", category: "ui", image: "https://images.unsplash.com/photo-1547658718-1cdaa0852790?w=500", desc: "Interface e-commerce moderne" },
    { id: 7, title: "Logo Sport & Fitness", category: "logo", image: "https://images.unsplash.com/photo-1594911772125-07fc7a2d8d9f?w=500", desc: "Logo dynamique fitness" },
    { id: 8, title: "Motion Design Pub", category: "motion", image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=500", desc: "Animation publicitaire" },
    { id: 9, title: "Branding Startup IA", category: "branding", image: "https://images.unsplash.com/photo-1551650992-f77b8ec4c0d5?w=500", desc: "Identité startup intelligence artificielle" }
  ];

  const categories = [
    { id: 'all', name: '🎨 Tous', count: projects.length },
    { id: 'logo', name: '🏷️ Logos', count: projects.filter(p => p.category === 'logo').length },
    { id: 'branding', name: '✨ Branding', count: projects.filter(p => p.category === 'branding').length },
    { id: 'ui', name: '📱 UI/UX', count: projects.filter(p => p.category === 'ui').length },
    { id: 'motion', name: '🎬 Motion', count: projects.filter(p => p.category === 'motion').length }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--gray-50)', padding: 'clamp(2rem, 5vw, 4rem) 1.5rem' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ 
          background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
          borderRadius: 'var(--border-radius-lg)',
          padding: 'clamp(2rem, 5vw, 4rem)',
          marginBottom: '3rem',
          color: 'white',
          textAlign: 'center'
        }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: '900', marginBottom: '1rem' }}>
            🎨 Portfolio Lumynis Design
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', opacity: 0.9, maxWidth: '700px', margin: '0 auto' }}>
            Découvrez nos créations : logos, identités visuelles, UI/UX et animations
          </p>
        </div>

        {/* Filtres */}
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          marginBottom: '3rem',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              style={{
                padding: '0.75rem 1.5rem',
                background: filter === cat.id ? 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)' : 'white',
                color: filter === cat.id ? 'white' : 'var(--gray-700)',
                border: filter === cat.id ? 'none' : '2px solid #e5e7eb',
                borderRadius: '25px',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s',
                boxShadow: filter === cat.id ? 'var(--shadow-lg)' : 'var(--shadow-sm)'
              }}
            >
              {cat.name} <span style={{ opacity: 0.7 }}>({cat.count})</span>
            </button>
          ))}
        </div>

        {/* Grille de projets */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="card"
              style={{
                padding: 0,
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.3s, box-shadow 0.3s',
                animation: 'fadeIn 0.5s ease-in'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-2xl)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
            >
              <div style={{ 
                height: '250px', 
                overflow: 'hidden',
                background: '#f3f4f6'
              }}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    transition: 'transform 0.5s'
                  }}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                  {project.title}
                </h3>
                <p style={{ color: 'var(--gray-600)', fontSize: '0.9375rem' }}>
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ 
          background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
          borderRadius: 'var(--border-radius-lg)',
          padding: 'clamp(2rem, 5vw, 3rem)',
          marginTop: '4rem',
          color: 'white',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: '900', marginBottom: '1rem' }}>
            Besoin d'un design unique? ✨
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', marginBottom: '2rem', opacity: 0.9 }}>
            Notre équipe est prête à donner vie à vos idées
          </p>
          <button className="btn-primary" style={{ 
            background: 'white',
            color: '#ec4899',
            padding: '1rem 2.5rem',
            fontSize: '1.125rem'
          }}>
            🚀 Démarrer un projet
          </button>
        </div>

      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

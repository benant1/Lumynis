import React, { useState, useEffect } from "react";

export default function Portfolio() {
  const [filter, setFilter] = useState('all');
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const handleColorChange = (e) => {
      setColorIndex(e.detail.colorIndex);
    };
    window.addEventListener('navbarColorChange', handleColorChange);
    return () => window.removeEventListener('navbarColorChange', handleColorChange);
  }, []);

  const colors = [
    { bg: "rgba(255,255,255,0.72)", gradient: "linear-gradient(135deg, #4f46e5, #06b6d4)", accent: "#4f46e5" },
    { bg: "rgba(255,240,245,0.72)", gradient: "linear-gradient(135deg, #ec4899, #f43f5e)", accent: "#ec4899" },
    { bg: "rgba(240,253,250,0.72)", gradient: "linear-gradient(135deg, #10b981, #14b8a6)", accent: "#10b981" },
    { bg: "rgba(255,250,235,0.72)", gradient: "linear-gradient(135deg, #f59e0b, #f97316)", accent: "#f59e0b" },
    { bg: "rgba(243,232,255,0.72)", gradient: "linear-gradient(135deg, #8b5cf6, #a78bfa)", accent: "#8b5cf6" },
  ];

  const currentColor = colors[colorIndex];

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
    <div style={{ minHeight: '100vh', background: currentColor.bg, padding: 'clamp(2rem, 5vw, 4rem) 1.5rem', transition: 'background 0.8s ease-in-out', backdropFilter: 'blur(6px)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ 
          background: currentColor.bg,
          borderRadius: '32px',
          padding: 'clamp(2.5rem, 6vw, 5rem)',
          marginBottom: '3rem',
          color: '#18181b',
          textAlign: 'center',
          boxShadow: `0 20px 60px ${currentColor.accent}20`,
          backdropFilter: 'blur(16px)',
          border: `1.5px solid ${currentColor.bg}`,
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.8s ease-in-out'
        }}>
          <div style={{ position: 'absolute', inset: 0, background: currentColor.gradient, opacity: 0.10, zIndex: 0, borderRadius: '32px', transition: 'background 0.8s ease-in-out' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: '900', marginBottom: '1rem', letterSpacing: '-0.03em', textShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
              🎨 Portfolio Lumynis Design
            </h1>
            <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', opacity: 0.92, maxWidth: '700px', margin: '0 auto', fontWeight: 500 }}>
              Découvrez nos créations : logos, identités visuelles, UI/UX et animations
            </p>
          </div>
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
                padding: '0.85rem 1.8rem',
                background: filter === cat.id ? currentColor.gradient : 'rgba(255,255,255,0.85)',
                color: filter === cat.id ? 'white' : '#18181b',
                border: filter === cat.id ? 'none' : '1.5px solid rgba(0,0,0,0.08)',
                borderRadius: '28px',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.8s ease',
                boxShadow: filter === cat.id ? `0 8px 24px ${currentColor.accent}40` : '0 4px 16px rgba(0,0,0,0.06)',
                backdropFilter: 'blur(10px)',
                fontSize: '0.95rem',
                letterSpacing: '-0.01em'
              }}
              onMouseOver={(e) => {
                if (filter !== cat.id) {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
                }
              }}
              onMouseOut={(e) => {
                if (filter !== cat.id) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.06)';
                }
              }}
            >
              {cat.name} <span style={{ opacity: 0.7 }}>({cat.count})</span>
            </button>
          ))}
        </div>

        {/* Grille de projets */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '2.5rem'
        }}>
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="card"
              style={{
                padding: 0,
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.4s ease, box-shadow 0.4s ease, background 0.8s ease-in-out, border 0.8s ease-in-out',
                animation: 'fadeIn 0.7s ease-in',
                background: currentColor.bg,
                backdropFilter: 'blur(12px)',
                boxShadow: `0 8px 32px ${currentColor.accent}15`,
                borderRadius: '24px',
                border: `1.5px solid ${currentColor.bg}`,
                position: 'relative'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.14)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.08)';
              }}
            >
              <div style={{ 
                height: '240px', 
                overflow: 'hidden',
                borderTopLeftRadius: '24px',
                borderTopRightRadius: '24px',
                position: 'relative'
              }}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.08)'}
                  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '40px',
                  background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.08) 100%)'
                }} />
              </div>
              <div style={{ padding: '1.75rem', position: 'relative', zIndex: 1 }}>
                <h3 style={{ fontSize: '1.28rem', fontWeight: '700', marginBottom: '0.6rem', letterSpacing: '-0.015em', color: '#18181b' }}>
                  {project.title}
                </h3>
                <p style={{ color: '#444', fontSize: '1.02rem', opacity: 0.92, fontWeight: 500, lineHeight: '1.6' }}>
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ 
          background: currentColor.bg,
          borderRadius: '32px',
          padding: 'clamp(2.2rem, 5vw, 3.5rem)',
          marginTop: '4rem',
          color: '#18181b',
          textAlign: 'center',
          boxShadow: `0 20px 60px ${currentColor.accent}20`,
          backdropFilter: 'blur(16px)',
          border: `1.5px solid ${currentColor.bg}`,
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.8s ease-in-out'
        }}>
          <div style={{ position: 'absolute', inset: 0, background: currentColor.gradient, opacity: 0.08, zIndex: 0, borderRadius: '32px', transition: 'background 0.8s ease-in-out' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 'clamp(1.85rem, 4vw, 2.7rem)', fontWeight: '900', marginBottom: '1rem', letterSpacing: '-0.02em', textShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
              Besoin d'un design unique? ✨
            </h2>
            <p style={{ fontSize: 'clamp(1.08rem, 2vw, 1.18rem)', marginBottom: '2rem', opacity: 0.92, fontWeight: 500 }}>
              Notre équipe est prête à donner vie à vos idées
            </p>
            <button className="btn-primary" style={{ 
              background: currentColor.gradient,
              color: 'white',
              padding: '1rem 2.5rem',
              fontSize: '1.125rem',
              fontWeight: 700,
              borderRadius: '18px',
              boxShadow: `0 8px 32px ${currentColor.accent}25`,
              border: 'none',
              transition: 'all 0.8s ease-in-out'
            }}>
              🚀 Démarrer un projet
            </button>
          </div>
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

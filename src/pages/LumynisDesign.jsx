import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function LumynisDesign() {
  // Index de couleur synchronisé avec la Navbar
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const handleColorChange = (e) => {
      setColorIndex(e.detail.colorIndex);
    };
    window.addEventListener('navbarColorChange', handleColorChange);
    return () => window.removeEventListener('navbarColorChange', handleColorChange);
  }, []);

  // Rotation automatique toutes les 10s pour garder la page vivante
  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex(prev => (prev + 1) % 5);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Palettes (OBLIGATOIRE - ne pas modifier)
  const palettes = [
    { bg: 'rgba(255,255,255,0.72)', accent: '#4f46e5', gradient: 'linear-gradient(90deg, #4f46e5, #06b6d4)' },
    { bg: 'rgba(255,240,245,0.72)', accent: '#ec4899', gradient: 'linear-gradient(90deg, #ec4899, #f43f5e)' },
    { bg: 'rgba(240,253,250,0.72)', accent: '#10b981', gradient: 'linear-gradient(90deg, #10b981, #14b8a6)' },
    { bg: 'rgba(255,250,235,0.72)', accent: '#f59e0b', gradient: 'linear-gradient(90deg, #f59e0b, #f97316)' },
    { bg: 'rgba(243,232,255,0.72)', accent: '#8b5cf6', gradient: 'linear-gradient(90deg, #8b5cf6, #a78bfa)' }
  ];
  const currentColor = palettes[colorIndex];
  const services = [
    { title: "Logos & Identité", icon: "🎨", desc: "Création de logos uniques et identités visuelles mémorables" },
    { title: "Branding", icon: "✨", desc: "Stratégie de marque complète et cohérente" },
    { title: "UI/UX Design", icon: "📐", desc: "Interfaces utilisateur élégantes et intuitives" },
    { title: "Modèles 3D", icon: "🧊", desc: "Modélisation 3D professionnelle et animations" }
  ];

  const colors = [
    { name: "Indigo", hex: "#4F46E5" },
    { name: "Cyan", hex: "#06B6D4" },
    { name: "Amber", hex: "#F59E0B" },
    { name: "Rose", hex: "#EC4899" }
  ];

  return (
    <div style={{ minHeight: '100vh', background: currentColor.bg, backdropFilter: 'blur(6px)', transition: 'background 0.8s ease-in-out' }}>
      {/* Hero */}
      <section style={{
        background: currentColor.bg,
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        color: '#0f172a',
        padding: 'clamp(4rem, 10vw, 6rem) 1.5rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: `4px solid ${currentColor.accent}`,
        transition: 'background 0.8s ease-in-out'
      }}>
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            marginBottom: '1.5rem',
            background: currentColor.gradient,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 900
          }}>🎨 Lumynis Design</h1>
          <p style={{ fontSize: 'clamp(1.125rem, 3vw, 1.5rem)', marginBottom: '2rem', opacity: 0.95 }}>
            Création & Identité Visuelle d'Excellence
          </p>
          <Link to="/join" className="btn-primary" style={{
            background: currentColor.gradient,
            color: 'white',
            padding: '14px 34px',
            borderRadius: '18px',
            fontWeight: 700,
            letterSpacing: '.5px',
            textDecoration: 'none',
            boxShadow: '0 18px 40px rgba(0,0,0,0.15)',
            display: 'inline-block',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}>
            Rejoindre Lumynis Design
          </Link>
        </div>
      </section>

      {/* Services */}
      <section style={{
        padding: 'clamp(3rem, 8vw, 5rem) 1.5rem',
        background: currentColor.bg,
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        borderTop: `1px solid ${currentColor.accent}22`,
        borderBottom: `1px solid ${currentColor.accent}22`,
        transition: 'background 0.8s ease-in-out'
      }}>
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 2.5rem)',
            textAlign: 'center',
            marginBottom: '3rem',
            background: currentColor.gradient,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 800
          }}>Nos Services Design</h2>
          
          <div className="grid-4" style={{ gap: '2rem' }}>
            {services.map((service, idx) => (
              <div key={idx} className="card" style={{
                padding: '2rem',
                textAlign: 'center',
                background: 'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(10px)',
                borderRadius: '18px',
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.3s ease'
              }}>
                <div style={{ position: 'absolute', top: 0, left: 0, height: '4px', width: '100%', background: currentColor.accent }} />
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{service.icon}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: currentColor.accent, fontWeight: 700 }}>
                  {service.title}
                </h3>
                <p style={{ color: 'var(--gray-600)', fontSize: '0.9375rem' }}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Couleurs Officielles */}
      <section style={{
        padding: 'clamp(3rem, 8vw, 5rem) 1.5rem',
        background: currentColor.bg,
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        transition: 'background 0.8s ease-in-out',
        borderTop: `1px solid ${currentColor.accent}22`
      }}>
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 2.5rem)',
            textAlign: 'center',
            marginBottom: '3rem',
            background: currentColor.gradient,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 800
          }}>Couleurs Officielles Lumynis</h2>
          
          <div className="flex" style={{ gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {colors.map((color, idx) => (
              <div key={idx} style={{ textAlign: 'center', position: 'relative' }}>
                <div style={{
                  width: '120px',
                  height: '120px',
                  background: color.hex,
                  borderRadius: '20px',
                  boxShadow: '0 18px 40px rgba(0,0,0,0.12)',
                  border: `3px solid ${currentColor.accent}`,
                  marginBottom: '1rem'
                }}></div>
                <div style={{ fontWeight: '600', color: 'var(--gray-900)' }}>{color.name}</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>{color.hex}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style>{`
        .card:hover { transform: translateY(-6px); }
        @media (max-width: 960px) {
          .grid-4 { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px,1fr)); }
        }
        @media (max-width: 600px) {
          .grid-4 { gap: 1.25rem; }
          h1, h2 { line-height: 1.15; }
          .btn-primary { width: 100%; }
        }
      `}</style>
    </div>
  );
}

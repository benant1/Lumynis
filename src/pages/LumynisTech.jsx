import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function LumynisTech() {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const handleColorChange = (e) => setColorIndex(e.detail.colorIndex);
    window.addEventListener('navbarColorChange', handleColorChange);
    return () => window.removeEventListener('navbarColorChange', handleColorChange);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex(prev => (prev + 1) % 5);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const palettes = [
    { bg: 'rgba(255,255,255,0.72)', accent: '#4f46e5', gradient: 'linear-gradient(90deg, #4f46e5, #06b6d4)' },
    { bg: 'rgba(255,240,245,0.72)', accent: '#ec4899', gradient: 'linear-gradient(90deg, #ec4899, #f43f5e)' },
    { bg: 'rgba(240,253,250,0.72)', accent: '#10b981', gradient: 'linear-gradient(90deg, #10b981, #14b8a6)' },
    { bg: 'rgba(255,250,235,0.72)', accent: '#f59e0b', gradient: 'linear-gradient(90deg, #f59e0b, #f97316)' },
    { bg: 'rgba(243,232,255,0.72)', accent: '#8b5cf6', gradient: 'linear-gradient(90deg, #8b5cf6, #a78bfa)' }
  ];
  const currentColor = palettes[colorIndex];
  const projects = [
    {
      title: "IA Lumynis",
      desc: "Intelligence artificielle avancée pour automatiser et optimiser vos processus",
      icon: "🤖",
      status: "En développement"
    },
    {
      title: "Robotique",
      desc: "Solutions robotiques innovantes pour l'industrie et le quotidien",
      icon: "🦾",
      status: "Recherche"
    },
    {
      title: "Apps Mobile",
      desc: "Applications natives performantes iOS et Android",
      icon: "📱",
      status: "Actif"
    },
    {
      title: "Cloud Lumynis",
      desc: "Infrastructure cloud sécurisée et scalable",
      icon: "☁️",
      status: "Actif"
    }
  ];

  return (
    <div style={{ minHeight: '100vh', background: currentColor.bg, backdropFilter: 'blur(6px)', transition: 'background 0.8s ease-in-out' }}>
      {/* Hero Section */}
      <section style={{
        background: currentColor.bg,
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        color: '#0f172a',
        padding: 'clamp(4rem, 10vw, 6rem) 1.5rem',
        textAlign: 'center',
        position: 'relative',
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
          }}>🔧 Lumynis Tech</h1>
          <p style={{ fontSize: 'clamp(1.125rem, 3vw, 1.5rem)', marginBottom: '2rem', opacity: 0.95 }}>
            Innovation technologique & excellence en ingénierie
          </p>
          <Link to="/join" className="btn-primary" style={{
            background: currentColor.gradient,
            color: 'white',
            padding: '12px 28px',
            borderRadius: '14px',
            fontWeight: 700,
            textDecoration: 'none',
            boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
            display: 'inline-block',
            transition: 'transform 0.3s ease'
          }}>
            Rejoindre Lumynis Tech
          </Link>
        </div>
      </section>

      {/* Projects Section */}
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
          }}>Nos Projets Technologiques</h2>
          
          <div className="grid-2" style={{ gap: '2rem' }}>
            {projects.map((project, idx) => (
              <div key={idx} className="card" style={{
                padding: '2rem',
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
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{project.icon}</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: currentColor.accent, fontWeight: 700 }}>
                  {project.title}
                </h3>
                <p style={{ color: 'var(--gray-600)', marginBottom: '1rem' }}>
                  {project.desc}
                </p>
                <span style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  borderRadius: '2rem',
                  background: currentColor.bg,
                  color: currentColor.accent,
                  fontSize: '0.875rem',
                  fontWeight: '600'
                }}>
                  {project.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section style={{
        padding: 'clamp(3rem, 8vw, 5rem) 1.5rem',
        background: currentColor.bg,
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        borderTop: `1px solid ${currentColor.accent}22`,
        transition: 'background 0.8s ease-in-out'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 2.5rem)',
            marginBottom: '2rem',
            background: currentColor.gradient,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 800
          }}>Le Futur avec Lumynis</h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--gray-600)', lineHeight: '1.8' }}>
            Nous construisons les technologies de demain en combinant innovation, performance et conscience.
            Notre vision : démocratiser l'accès aux technologies avancées tout en préservant l'éthique et l'humain.
          </p>
        </div>
      </section>
      <style>{`
        .card:hover { transform: translateY(-6px); }
        @media (max-width: 1000px) {
          .grid-2 { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px,1fr)); }
        }
        @media (max-width: 640px) {
          .btn-primary { width: 100%; }
          h1, h2 { line-height: 1.15; }
          .grid-2 { gap: 1.25rem; }
        }
      `}</style>
    </div>
  );
}

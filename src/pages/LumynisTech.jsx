import React from "react";
import { Link } from "react-router-dom";

export default function LumynisTech() {
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
    <div style={{ minHeight: '100vh', background: 'var(--gray-50)' }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #4F46E5 0%, #06B6D4 100%)',
        color: 'white',
        padding: 'clamp(4rem, 10vw, 6rem) 1.5rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '1.5rem', color: 'white' }}>
            🔧 Lumynis Tech
          </h1>
          <p style={{ fontSize: 'clamp(1.125rem, 3vw, 1.5rem)', marginBottom: '2rem', opacity: 0.95 }}>
            Innovation technologique & excellence en ingénierie
          </p>
          <Link to="/join" className="btn-primary" style={{ background: 'white', color: 'var(--primary)' }}>
            Rejoindre Lumynis Tech
          </Link>
        </div>
      </section>

      {/* Projects Section */}
      <section style={{ padding: 'clamp(3rem, 8vw, 5rem) 1.5rem' }}>
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', textAlign: 'center', marginBottom: '3rem' }}>
            Nos Projets Technologiques
          </h2>
          
          <div className="grid-2" style={{ gap: '2rem' }}>
            {projects.map((project, idx) => (
              <div key={idx} className="card" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{project.icon}</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>
                  {project.title}
                </h3>
                <p style={{ color: 'var(--gray-600)', marginBottom: '1rem' }}>
                  {project.desc}
                </p>
                <span style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  borderRadius: '2rem',
                  background: 'var(--gray-100)',
                  color: 'var(--gray-700)',
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
      <section style={{ padding: 'clamp(3rem, 8vw, 5rem) 1.5rem', background: 'white' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '2rem' }}>
            Le Futur avec Lumynis
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--gray-600)', lineHeight: '1.8' }}>
            Nous construisons les technologies de demain en combinant innovation, performance et conscience.
            Notre vision : démocratiser l'accès aux technologies avancées tout en préservant l'éthique et l'humain.
          </p>
        </div>
      </section>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function Innovation() {
  const projects = [
    {
      id: 1,
      title: "Lumynis AI Assistant",
      category: "Intelligence Artificielle",
      status: "En développement",
      progress: 75,
      desc: "Assistant intelligent basé sur l'IA pour automatiser les tâches et améliorer l'expérience utilisateur",
      icon: "🤖",
      color: "#4f46e5"
    },
    {
      id: 2,
      title: "Plateforme E-learning VR",
      category: "Réalité Virtuelle",
      status: "Recherche",
      progress: 30,
      desc: "Formation immersive en réalité virtuelle pour une expérience d'apprentissage révolutionnaire",
      icon: "🥽",
      color: "#06b6d4"
    },
    {
      id: 3,
      title: "Blockchain Certification",
      category: "Blockchain",
      status: "Actif",
      progress: 100,
      desc: "Système de certification et validation des diplômes sur blockchain pour garantir l'authenticité",
      icon: "⛓️",
      color: "#10b981"
    },
    {
      id: 4,
      title: "App Mobile Lumynis",
      category: "Mobile",
      status: "Beta",
      progress: 90,
      desc: "Application mobile native pour iOS et Android avec toutes les fonctionnalités Lumynis",
      icon: "📱",
      color: "#f59e0b"
    },
    {
      id: 5,
      title: "IoT Smart Office",
      category: "Internet of Things",
      status: "Planifié",
      progress: 15,
      desc: "Bureau intelligent connecté pour optimiser l'environnement de travail et la productivité",
      icon: "🏢",
      color: "#8b5cf6"
    },
    {
      id: 6,
      title: "Lumynis Marketplace 2.0",
      category: "E-commerce",
      status: "En développement",
      progress: 60,
      desc: "Nouvelle version du marketplace avec IA pour recommandations personnalisées",
      icon: "🛍️",
      color: "#ec4899"
    }
  ];

  const visions = [
    {
      title: "Transformation Digitale de l'Afrique",
      desc: "Devenir le leader de la transformation numérique en Afrique francophone d'ici 2030",
      icon: "🌍"
    },
    {
      title: "100,000 Entrepreneurs Formés",
      desc: "Former et accompagner 100,000 entrepreneurs à travers nos programmes",
      icon: "🎓"
    },
    {
      title: "Hub d'Innovation Technologique",
      desc: "Créer le plus grand hub d'innovation tech en Afrique de l'Ouest",
      icon: "🚀"
    },
    {
      title: "Solutions IA Accessibles",
      desc: "Rendre l'intelligence artificielle accessible à toutes les entreprises africaines",
      icon: "🤖"
    }
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--gray-50)', padding: 'clamp(2rem, 5vw, 4rem) 1.5rem' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Hero */}
        <div style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: 'var(--border-radius-lg)',
          padding: 'clamp(3rem, 6vw, 5rem)',
          marginBottom: '4rem',
          color: 'white',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
            pointerEvents: 'none'
          }}></div>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', 
            fontWeight: '900', 
            marginBottom: '1rem',
            position: 'relative',
            zIndex: 1
          }}>
            ✨ Innovation & Projets
          </h1>
          <p style={{ 
            fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)', 
            opacity: 0.95,
            maxWidth: '800px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 1
          }}>
            Découvrez nos projets innovants qui façonnent l'avenir de la technologie en Afrique
          </p>
        </div>

        {/* Notre Vision */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 4vw, 2.5rem)', 
            fontWeight: '900',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            🔮 Notre Vision Futuriste
          </h2>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {visions.map((vision, i) => (
              <div
                key={i}
                className="card"
                style={{
                  padding: '2rem',
                  textAlign: 'center',
                  background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)',
                  transition: 'transform 0.3s',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{vision.icon}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem' }}>
                  {vision.title}
                </h3>
                <p style={{ color: 'var(--gray-600)', lineHeight: '1.6' }}>
                  {vision.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Projets en cours */}
        <div>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 4vw, 2.5rem)', 
            fontWeight: '900',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            🚀 Projets en Développement
          </h2>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {projects.map(project => (
              <div
                key={project.id}
                className="card"
                style={{
                  padding: '2rem',
                  background: 'white',
                  borderLeft: `4px solid ${project.color}`,
                  transition: 'all 0.3s',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.boxShadow = 'var(--shadow-2xl)';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                  <div style={{ 
                    fontSize: '3rem',
                    width: '70px',
                    height: '70px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: `${project.color}15`,
                    borderRadius: '15px'
                  }}>
                    {project.icon}
                  </div>
                  <div style={{ 
                    padding: '0.5rem 1rem',
                    background: project.status === 'Actif' ? '#d1fae5' : project.status === 'Beta' ? '#dbeafe' : project.status === 'En développement' ? '#fef3c7' : '#f3f4f6',
                    color: project.status === 'Actif' ? '#065f46' : project.status === 'Beta' ? '#1e40af' : project.status === 'En développement' ? '#92400e' : '#6b7280',
                    borderRadius: '20px',
                    fontSize: '0.875rem',
                    fontWeight: '700'
                  }}>
                    {project.status}
                  </div>
                </div>

                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                  {project.title}
                </h3>
                <div style={{ 
                  fontSize: '0.875rem',
                  color: project.color,
                  fontWeight: '600',
                  marginBottom: '1rem'
                }}>
                  {project.category}
                </div>
                <p style={{ color: 'var(--gray-600)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                  {project.desc}
                </p>

                {/* Progress bar */}
                <div style={{ marginTop: '1.5rem' }}>
                  <div style={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '0.5rem',
                    fontSize: '0.875rem',
                    fontWeight: '600'
                  }}>
                    <span>Progression</span>
                    <span style={{ color: project.color }}>{project.progress}%</span>
                  </div>
                  <div style={{ 
                    width: '100%',
                    height: '8px',
                    background: '#e5e7eb',
                    borderRadius: '10px',
                    overflow: 'hidden'
                  }}>
                    <div style={{ 
                      width: `${project.progress}%`,
                      height: '100%',
                      background: project.color,
                      borderRadius: '10px',
                      transition: 'width 0.5s'
                    }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: 'var(--border-radius-lg)',
          padding: 'clamp(2rem, 5vw, 3rem)',
          marginTop: '4rem',
          color: 'white',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: '900', marginBottom: '1rem' }}>
            Vous avez une idée innovante? 💡
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', marginBottom: '2rem', opacity: 0.9 }}>
            Partagez votre projet avec nous et transformons-le en réalité
          </p>
          <Link to="/contact" className="btn-primary" style={{ 
            background: 'white',
            color: '#667eea',
            padding: '1rem 2.5rem',
            fontSize: '1.125rem',
            textDecoration: 'none',
            display: 'inline-block'
          }}>
            🚀 Proposer un projet
          </Link>
        </div>

      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [colorIndex, setColorIndex] = useState(0);

  // Écouter les changements de couleur de la Navbar
  useEffect(() => {
    const handleColorChange = (e) => {
      setColorIndex(e.detail.colorIndex);
    };
    
    window.addEventListener('navbarColorChange', handleColorChange);
    return () => window.removeEventListener('navbarColorChange', handleColorChange);
  }, []);

  const colorSchemes = [
    { 
      hero: 'linear-gradient(135deg, rgba(79, 70, 229, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%)',
      bg: 'rgba(240, 243, 255, 0.6)',
      accent: '#4f46e5',
      buttonBg: 'linear-gradient(90deg, #4f46e5, #06b6d4)',
    },
    { 
      hero: 'linear-gradient(135deg, rgba(236, 72, 153, 0.05) 0%, rgba(244, 63, 94, 0.05) 100%)',
      bg: 'rgba(255, 240, 245, 0.6)',
      accent: '#ec4899',
      buttonBg: 'linear-gradient(90deg, #ec4899, #f43f5e)',
    },
    { 
      hero: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(20, 184, 166, 0.05) 100%)',
      bg: 'rgba(240, 253, 250, 0.6)',
      accent: '#10b981',
      buttonBg: 'linear-gradient(90deg, #10b981, #14b8a6)',
    },
    { 
      hero: 'linear-gradient(135deg, rgba(245, 158, 11, 0.05) 0%, rgba(249, 115, 22, 0.05) 100%)',
      bg: 'rgba(255, 250, 235, 0.6)',
      accent: '#f59e0b',
      buttonBg: 'linear-gradient(90deg, #f59e0b, #f97316)',
    },
    { 
      hero: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, rgba(167, 139, 250, 0.05) 100%)',
      bg: 'rgba(243, 232, 255, 0.6)',
      accent: '#8b5cf6',
      buttonBg: 'linear-gradient(90deg, #8b5cf6, #a78bfa)',
    }
  ];

  const currentColors = colorSchemes[colorIndex];

  const features = [
    { 
      title: "Assistant IA", 
      desc: "Chatbot intelligent disponible 24/7",
      link: "/assistant",
      icon: "🤖",
      color: "#4f46e5"
    },
    { 
      title: "Dashboard", 
      desc: "Espace membre personnalisé",
      link: "/member",
      icon: "📊",
      color: "#ec4899"
    },
    { 
      title: "Portfolio", 
      desc: "Nos créations et réalisations",
      link: "/portfolio",
      icon: "🎨",
      color: "#8b5cf6"
    },
    { 
      title: "Support", 
      desc: "Assistance professionnelle",
      link: "/support",
      icon: "💬",
      color: "#10b981"
    },
    { 
      title: "Innovation", 
      desc: "Projets technologiques",
      link: "/innovation",
      icon: "⚡",
      color: "#f59e0b"
    },
    { 
      title: "Marketplace", 
      desc: "Produits et formations",
      link: "/marketplace",
      icon: "🛍️",
      color: "#06b6d4"
    }
  ];

  const services = [
    {
      icon: "💻",
      title: "Développement Digital",
      desc: "Applications web et mobile sur mesure"
    },
    {
      icon: "🎓",
      title: "Formations",
      desc: "Programmes de formation professionnelle"
    },
    {
      icon: "🚀",
      title: "Consulting",
      desc: "Accompagnement stratégique personnalisé"
    },
    {
      icon: "🎬",
      title: "Média & Communication",
      desc: "Création de contenu et marketing digital"
    }
  ];

  return (
    <div style={{ background: currentColors.bg, transition: 'background 0.8s ease-in-out' }}>
      
      {/* Hero Section */}
      <section style={{ 
        background: `linear-gradient(to bottom, ${currentColors.hero}, ${currentColors.bg})`,
        padding: 'clamp(4rem, 10vw, 8rem) clamp(1rem, 5vw, 2rem)',
        color: '#0f172a',
        position: 'relative',
        overflow: 'hidden',
        transition: 'background 0.8s ease-in-out'
      }}>
        <div style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.02\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.4
        }}></div>
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(2rem, 5vw, 4rem)',
            alignItems: 'center'
          }}>
            <div>
              <div style={{ 
                display: 'inline-block',
                padding: '0.5rem 1rem',
                background: `${currentColors.accent}15`,
                borderRadius: '50px',
                fontSize: '0.875rem',
                fontWeight: '600',
                marginBottom: '1.5rem',
                backdropFilter: 'blur(10px)',
                color: currentColors.accent,
                transition: 'all 0.8s ease-in-out'
              }}>
                ✨ Innovation • Excellence • Transformation
              </div>
              
              <h1 style={{ 
                fontSize: 'clamp(2.5rem, 6vw, 5rem)', 
                fontWeight: '900',
                lineHeight: '1.1',
                marginBottom: '1.5rem',
                letterSpacing: '-0.02em',
                color: '#0f172a'
              }}>
                Transformez votre vision en réalité
              </h1>
              
              <p style={{ 
                fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                lineHeight: '1.6',
                marginBottom: '2.5rem',
                color: '#475569'
              }}>
                Leader de la transformation digitale en Afrique. Nous créons des solutions innovantes pour votre succès.
              </p>
              
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link 
                  to="/try"
                  style={{
                    padding: '1rem 2.5rem',
                    background: currentColors.buttonBg,
                    color: 'white',
                    borderRadius: '50px',
                    fontWeight: '700',
                    fontSize: '1.125rem',
                    textDecoration: 'none',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                    transition: 'all 0.8s ease-in-out',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  Commencer gratuitement
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
                
                <Link 
                  to="/about"
                  style={{
                    padding: '1rem 2.5rem',
                    background: 'white',
                    color: currentColors.accent,
                    border: `2px solid ${currentColors.accent}30`,
                    borderRadius: '50px',
                    fontWeight: '700',
                    fontSize: '1.125rem',
                    textDecoration: 'none',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.8s ease-in-out'
                  }}
                >
                  En savoir plus
                </Link>
              </div>
              
              <div style={{ 
                display: 'flex', 
                gap: '2.5rem', 
                marginTop: '3rem',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(15,23,42,0.1)'
              }}>
                <div>
                  <div style={{ fontSize: '2.5rem', fontWeight: '900', color: currentColors.accent, transition: 'color 0.8s ease-in-out' }}>200+</div>
                  <div style={{ fontSize: '0.875rem', color: '#64748b' }}>Projets réalisés</div>
                </div>
                <div>
                  <div style={{ fontSize: '2.5rem', fontWeight: '900', color: currentColors.accent, transition: 'color 0.8s ease-in-out' }}>2.5K+</div>
                  <div style={{ fontSize: '0.875rem', color: '#64748b' }}>Clients satisfaits</div>
                </div>
                <div>
                  <div style={{ fontSize: '2.5rem', fontWeight: '900', color: currentColors.accent, transition: 'color 0.8s ease-in-out' }}>99.9%</div>
                  <div style={{ fontSize: '0.875rem', color: '#64748b' }}>Disponibilité</div>
                </div>
              </div>
            </div>
            
            <div style={{ 
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <div style={{ 
                width: '100%',
                maxWidth: '500px',
                aspectRatio: '1',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '30px',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.2)',
                padding: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 30px 60px rgba(0,0,0,0.3)'
              }}>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop" 
                  alt="Équipe Lumynis"
                  style={{ 
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '20px'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section style={{ 
        padding: 'clamp(4rem, 8vw, 6rem) clamp(1rem, 5vw, 2rem)',
        background: currentColors.bg,
        transition: 'background 0.8s ease-in-out'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
              fontWeight: '900',
              marginBottom: '1rem',
              color: '#0f172a'
            }}>
              Plateforme tout-en-un
            </h2>
            <p style={{ 
              fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)',
              color: '#64748b',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Tous les outils dont vous avez besoin pour réussir
            </p>
          </div>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {features.map((feature, i) => (
              <Link 
                key={i}
                to={feature.link}
                style={{
                  textDecoration: 'none',
                  background: 'white',
                  borderRadius: '24px',
                  padding: '2.5rem 2rem',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = `0 20px 40px ${feature.color}20`;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
                }}
              >
                <div style={{ 
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  background: `${feature.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  marginBottom: '1.5rem'
                }}>
                  {feature.icon}
                </div>
                
                <h3 style={{ 
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  marginBottom: '0.75rem',
                  color: '#0f172a'
                }}>
                  {feature.title}
                </h3>
                
                <p style={{ 
                  color: '#64748b',
                  lineHeight: '1.6',
                  fontSize: '1rem'
                }}>
                  {feature.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ 
        padding: 'clamp(4rem, 8vw, 6rem) clamp(1rem, 5vw, 2rem)',
        background: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
              fontWeight: '900',
              marginBottom: '1rem',
              color: '#0f172a'
            }}>
              Nos Services
            </h2>
            <p style={{ 
              fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)',
              color: '#64748b',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Solutions sur mesure pour votre croissance
            </p>
          </div>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {services.map((service, i) => (
              <div
                key={i}
                style={{
                  padding: '2.5rem 2rem',
                  background: '#f9fafb',
                  borderRadius: '20px',
                  textAlign: 'center',
                  transition: 'all 0.3s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = currentColors.buttonBg;
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = '#f9fafb';
                  e.currentTarget.style.color = 'inherit';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>
                  {service.icon}
                </div>
                <h3 style={{ fontSize: '1.375rem', fontWeight: '700', marginBottom: '0.75rem' }}>
                  {service.title}
                </h3>
                <p style={{ opacity: 0.8, lineHeight: '1.6' }}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link 
              to="/services"
              style={{
                padding: '1rem 2.5rem',
                background: currentColors.buttonBg,
                color: 'white',
                borderRadius: '50px',
                fontWeight: '700',
                fontSize: '1.125rem',
                textDecoration: 'none',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                display: 'inline-block',
                transition: 'all 0.8s ease-in-out'
              }}
            >
              Voir tous les services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ 
        padding: 'clamp(4rem, 8vw, 6rem) clamp(1rem, 5vw, 2rem)',
        background: currentColors.bg,
        color: '#0f172a',
        textAlign: 'center',
        transition: 'background 0.8s ease-in-out',
        borderTop: `1px solid ${currentColors.accent}20`
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
            fontWeight: '900',
            marginBottom: '1.5rem',
            lineHeight: '1.2',
            color: '#0f172a'
          }}>
            Prêt à démarrer votre projet ?
          </h2>
          <p style={{ 
            fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
            marginBottom: '2.5rem',
            lineHeight: '1.6',
            color: '#475569'
          }}>
            Rejoignez des milliers d'entreprises qui nous font confiance
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link 
              to="/join"
              style={{
                padding: '1.25rem 3rem',
                background: currentColors.buttonBg,
                color: 'white',
                borderRadius: '50px',
                fontWeight: '700',
                fontSize: '1.125rem',
                textDecoration: 'none',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                transition: 'all 0.8s ease-in-out'
              }}
            >
              Rejoindre Lumynis
            </Link>
            <Link 
              to="/contact"
              style={{
                padding: '1.25rem 3rem',
                background: 'white',
                color: currentColors.accent,
                border: `2px solid ${currentColors.accent}30`,
                borderRadius: '50px',
                fontWeight: '700',
                fontSize: '1.125rem',
                textDecoration: 'none',
                transition: 'all 0.8s ease-in-out'
              }}
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          section > div > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;

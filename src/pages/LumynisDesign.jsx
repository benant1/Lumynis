import React from "react";
import { Link } from "react-router-dom";

export default function LumynisDesign() {
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
    <div style={{ minHeight: '100vh', background: 'var(--gray-50)' }}>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)',
        color: 'white',
        padding: 'clamp(4rem, 10vw, 6rem) 1.5rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '1.5rem', color: 'white' }}>
            🎨 Lumynis Design
          </h1>
          <p style={{ fontSize: 'clamp(1.125rem, 3vw, 1.5rem)', marginBottom: '2rem', opacity: 0.95 }}>
            Création & Identité Visuelle d'Excellence
          </p>
          <Link to="/join" className="btn-primary" style={{ background: 'white', color: '#EC4899' }}>
            Rejoindre Lumynis Design
          </Link>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: 'clamp(3rem, 8vw, 5rem) 1.5rem' }}>
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', textAlign: 'center', marginBottom: '3rem' }}>
            Nos Services Design
          </h2>
          
          <div className="grid-4" style={{ gap: '2rem' }}>
            {services.map((service, idx) => (
              <div key={idx} className="card" style={{ padding: '2rem', textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{service.icon}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>
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
      <section style={{ padding: 'clamp(3rem, 8vw, 5rem) 1.5rem', background: 'white' }}>
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', textAlign: 'center', marginBottom: '3rem' }}>
            Couleurs Officielles Lumynis
          </h2>
          
          <div className="flex" style={{ gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {colors.map((color, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <div style={{
                  width: '120px',
                  height: '120px',
                  background: color.hex,
                  borderRadius: 'var(--border-radius-lg)',
                  boxShadow: 'var(--shadow-xl)',
                  marginBottom: '1rem'
                }}></div>
                <div style={{ fontWeight: '600', color: 'var(--gray-900)' }}>{color.name}</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>{color.hex}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import React from "react";

export default function Extensions() {
  const branches = [
    {
      id: "tech",
      title: "Lumynis Tech",
      subtitle: "Ingénierie & Architecture",
      desc: "Plateformes scalables, intégrations et best practices pour des produits robustes.",
      gradient: 'linear-gradient(135deg, var(--secondary), #14B8A6)'
    },
    {
      id: "design",
      title: "Lumynis Design",
      subtitle: "UX • UI • Brand",
      desc: "Design centré utilisateur, prototypes rapides et identité visuelle cohérente.",
      gradient: 'linear-gradient(135deg, var(--primary), var(--primary-light))'
    },
    {
      id: "market",
      title: "Lumynis Market",
      subtitle: "Go‑to‑market",
      desc: "Positionnement, growth et stratégies commerciales pour accélérer la traction.",
      gradient: 'linear-gradient(135deg, var(--accent), #FB923C)'
    },
    {
      id: "spirit",
      title: "Lumynis Spirit",
      subtitle: "Culture & Impact",
      desc: "Accompagnement holistique : bien‑être, éthique et B‑Corp minded practices.",
      gradient: 'linear-gradient(135deg, var(--danger), #F87171)'
    },
  ];

  return (
    <section style={{ 
      background: 'linear-gradient(180deg, var(--gray-100), rgba(238, 246, 255, 0.5))', 
      padding: '5rem 1.5rem' 
    }}>
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: '900', 
            color: 'var(--gray-900)',
            marginBottom: '1rem'
          }}>
            Nos extensions
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            color: 'var(--gray-600)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Des pôles spécialisés pour accompagner chaque étape de votre projet.
          </p>
        </div>

        <div className="grid-4" style={{ gap: '1.5rem' }}>
          {branches.map((b) => (
            <div key={b.id} className="card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ 
                width: '72px',
                height: '72px',
                marginBottom: '1.25rem',
                borderRadius: 'var(--border-radius)',
                background: b.gradient,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'var(--shadow-lg)'
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>

              <h3 style={{ 
                fontSize: '1.25rem', 
                fontWeight: '700',
                color: 'var(--gray-900)',
                marginBottom: '0.5rem'
              }}>
                {b.title}
              </h3>
              
              <div style={{ 
                fontSize: '0.875rem', 
                color: 'var(--gray-500)',
                marginBottom: '0.75rem',
                fontWeight: '500'
              }}>
                {b.subtitle}
              </div>
              
              <p style={{ 
                color: 'var(--gray-600)',
                lineHeight: '1.6',
                fontSize: '0.9375rem',
                marginBottom: '1.5rem',
                flex: '1'
              }}>
                {b.desc}
              </p>

              <div className="flex" style={{ gap: '0.75rem' }}>
                <a href={`/#${b.id}`} className="btn-primary" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>
                  Découvrir
                </a>
                <a href="/contact" className="btn-outline" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>
                  Contact
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

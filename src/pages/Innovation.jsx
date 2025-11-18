import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Innovation() {
  const [colorIndex, setColorIndex] = useState(0);

  // Changer de couleur automatiquement toutes les 10 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % 5);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Synchroniser avec Navbar
  useEffect(() => {
    const handleColorChange = (e) => {
      setColorIndex(e.detail.colorIndex);
    };
    
    window.addEventListener('navbarColorChange', handleColorChange);
    return () => window.removeEventListener('navbarColorChange', handleColorChange);
  }, []);

  const colors = [
    { bg: 'rgba(255,255,255,0.72)', accent: '#4f46e5', gradient: 'linear-gradient(90deg, #4f46e5, #06b6d4)' },
    { bg: 'rgba(255,240,245,0.72)', accent: '#ec4899', gradient: 'linear-gradient(90deg, #ec4899, #f43f5e)' },
    { bg: 'rgba(240,253,250,0.72)', accent: '#10b981', gradient: 'linear-gradient(90deg, #10b981, #14b8a6)' },
    { bg: 'rgba(255,250,235,0.72)', accent: '#f59e0b', gradient: 'linear-gradient(90deg, #f59e0b, #f97316)' },
    { bg: 'rgba(243,232,255,0.72)', accent: '#8b5cf6', gradient: 'linear-gradient(90deg, #8b5cf6, #a78bfa)' },
  ];

  const currentColor = colors[colorIndex];

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
    <div style={{ 
      minHeight: '100vh', 
      background: currentColor.bg,
      backdropFilter: 'blur(6px)',
      transition: 'background 0.8s ease-in-out'
    }}>
      <main className="innovation-root" aria-labelledby="innovation-heading">
        <header className="innovation-hero">
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">Innovation & Projets</p>
              <h1 id="innovation-heading" className="hero-title">Façonnons l'avenir de la tech en Afrique</h1>
              <p className="hero-lead">
                Découvrez nos projets innovants et notre vision futuriste qui transforment 
                le paysage technologique africain avec des solutions de pointe.
              </p>

              <div className="hero-actions">
                <Link to="/contact" className="btn primary" style={{background: currentColor.gradient, transition: 'background 0.8s ease-in-out'}}>Proposer un projet</Link>
                <Link to="/about" className="btn ghost">Notre vision</Link>
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80"
                   alt="Innovation technologique" className="hero-img" loading="lazy" />
            </div>
          </div>
        </header>

      <section className="vision-section" aria-label="Notre vision">
        <h2 className="section-title" style={{
          background: currentColor.gradient,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          transition: 'background 0.8s ease-in-out'
        }}>🔮 Notre Vision Futuriste</h2>
        <div className="vision-grid">
          {visions.map((vision, i) => (
            <article key={i} className="vision-card" style={{
              borderTop: `3px solid ${currentColor.accent}`,
              transition: 'all 0.8s ease-in-out'
            }}>
              <div className="vision-icon">{vision.icon}</div>
              <h3 className="vision-title">{vision.title}</h3>
              <p className="vision-desc">{vision.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-section" aria-label="Nos projets">
        <h2 className="section-title" style={{
          background: currentColor.gradient,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          transition: 'background 0.8s ease-in-out'
        }}>🚀 Projets en Développement</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <article key={project.id} className="project-card">
              <div className="project-header">
                <div className="project-icon" style={{background: `${project.color}15`}}>
                  <span className="project-emoji">{project.icon}</span>
                </div>
                <div className="project-status" style={{
                  background: project.status === 'Actif' ? '#d1fae5' : 
                             project.status === 'Beta' ? '#dbeafe' : 
                             project.status === 'En développement' ? '#fef3c7' : '#f3f4f6',
                  color: project.status === 'Actif' ? '#065f46' : 
                         project.status === 'Beta' ? '#1e40af' : 
                         project.status === 'En développement' ? '#92400e' : '#6b7280'
                }}>
                  {project.status}
                </div>
              </div>

              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-category" style={{color: project.color}}>
                  {project.category}
                </div>
                <p className="project-desc">{project.desc}</p>

                <div className="project-progress">
                  <div className="progress-header">
                    <span>Progression</span>
                    <span className="progress-value" style={{color: project.color}}>{project.progress}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{
                      width: `${project.progress}%`,
                      background: project.color
                    }}></div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="innovation-cta">
        <div className="cta-inner">
          <h3>Vous avez une idée innovante? 💡</h3>
          <p className="muted">Partagez votre projet avec nous et transformons-le en réalité</p>
          <Link to="/contact" className="btn primary" style={{background: currentColor.gradient, transition: 'background 0.8s ease-in-out'}}>Proposer un projet</Link>
        </div>
      </section>

      <style>{`
        :root {
          --max:1200px;
          --accent1:#4f46e5;
          --accent2:#06b6d4;
          --text:#071220;
          --muted:#4b5563;
          --card:#fff;
          --radius:12px;
          --shadow: 0 16px 50px rgba(16,24,40,0.06);
          --measure: 62ch;
        }

        .innovation-root {
          font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial;
          color:var(--text);
          -webkit-font-smoothing:antialiased;
        }

        /* HERO */
        .innovation-hero { background: linear-gradient(180deg,#f8fbff,#ffffff); padding:48px 16px; }
        .hero-inner { max-width:var(--max); margin:0 auto; display:grid; gap:24px; grid-template-columns: 1fr; align-items:center; }
        @media(min-width:960px) { .hero-inner { grid-template-columns: 1fr 420px; gap:36px; } }

        .eyebrow { text-transform:uppercase; color:var(--muted); font-weight:700; letter-spacing:0.12em; font-size:12px; margin-bottom:8px; }
        .hero-title { font-size:clamp(26px,4.5vw,40px); margin:0 0 10px; font-weight:900; line-height:1.06; color:var(--text); }
        .hero-lead {
          color: #0f172a;
          margin-bottom:14px;
          max-width:var(--measure);
          font-size:17px;
          line-height:1.7;
        }

        .hero-actions { display:flex; gap:12px; flex-wrap:wrap; }
        .btn { display:inline-flex; align-items:center; justify-content:center; padding:10px 16px; border-radius:10px; font-weight:700; text-decoration:none; font-size:15px; }
        .btn.primary { color:#fff; background: linear-gradient(90deg,var(--accent1),var(--accent2)); box-shadow:var(--shadow); }
        .btn.ghost { background: rgba(15,23,42,0.04); color:var(--text); border:1px solid rgba(15,23,42,0.04); }

        .hero-visual { display:flex; align-items:center; justify-content:center; }
        .hero-img {
          width:100%; max-width:420px;
          border-radius:12px; object-fit:cover;
          box-shadow:0 20px 50px rgba(16,24,40,0.06); border:1px solid rgba(15,23,42,0.04);
        }

        /* SECTIONS */
        .vision-section, .projects-section { max-width:var(--max); margin:48px auto; padding:0 16px; }
        .section-title { font-size:clamp(26px,4vw,36px); margin:0 0 28px; font-weight:900; text-align:center; color:var(--text); }

        /* VISION GRID */
        .vision-grid { display:grid; gap:18px; grid-template-columns: 1fr; }
        @media(min-width:640px) { .vision-grid { grid-template-columns: repeat(2, minmax(0,1fr)); } }
        @media(min-width:1024px) { .vision-grid { grid-template-columns: repeat(4, minmax(0,1fr)); } }

        .vision-card {
          background:linear-gradient(180deg,var(--card),#fff);
          padding:24px; text-align:center;
          border-radius:12px;
          border:1px solid rgba(15,23,42,0.04);
          box-shadow:0 10px 30px rgba(16,24,40,0.04);
          transition: transform .14s ease, box-shadow .14s ease;
        }
        .vision-card:hover { transform: translateY(-6px); box-shadow:0 26px 60px rgba(16,24,40,0.08); }

        .vision-icon { font-size:56px; margin-bottom:16px; }
        .vision-title { margin:0 0 10px; font-size:17px; font-weight:800; color:var(--text); line-height:1.3; }
        .vision-desc { color:#0f172a; line-height:1.6; font-size:14px; margin:0; }

        /* PROJECTS GRID */
        .projects-grid { display:grid; gap:18px; grid-template-columns: 1fr; }
        @media(min-width:768px) { .projects-grid { grid-template-columns: repeat(2, minmax(0,1fr)); } }
        @media(min-width:1024px) { .projects-grid { grid-template-columns: repeat(3, minmax(0,1fr)); } }

        .project-card {
          background:linear-gradient(180deg,var(--card),#fff);
          padding:20px; border-radius:12px;
          border:1px solid rgba(15,23,42,0.04);
          box-shadow:0 10px 30px rgba(16,24,40,0.04);
          transition: transform .14s ease, box-shadow .14s ease;
          display:flex; flex-direction:column;
        }
        .project-card:hover { transform: translateY(-6px); box-shadow:0 26px 60px rgba(16,24,40,0.08); }

        .project-header { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:16px; }
        .project-icon { 
          width:64px; height:64px; border-radius:12px; 
          display:flex; align-items:center; justify-content:center; 
          box-shadow:0 8px 20px rgba(16,24,40,0.05); flex-shrink:0;
        }
        .project-emoji { font-size:32px; }
        .project-status { 
          padding:6px 14px; border-radius:20px; 
          font-size:12px; font-weight:700; 
        }

        .project-body { flex:1; display:flex; flex-direction:column; }
        .project-title { margin:0 0 6px; font-size:19px; font-weight:800; color:var(--text); }
        .project-category { font-size:13px; font-weight:600; margin-bottom:12px; }
        .project-desc { color:#0f172a; line-height:1.7; font-size:14px; margin:0 0 18px; flex:1; }

        .project-progress { margin-top:auto; }
        .progress-header { display:flex; justify-content:space-between; margin-bottom:8px; font-size:13px; font-weight:600; }
        .progress-bar { 
          width:100%; height:8px; background:#e5e7eb; 
          border-radius:10px; overflow:hidden; 
        }
        .progress-fill { 
          height:100%; border-radius:10px; 
          transition: width 0.5s ease; 
        }

        /* CTA */
        .innovation-cta { background:linear-gradient(90deg,#fbfdff,#ffffff); padding:34px 16px; text-align:center; margin-top:28px; }
        .cta-inner { max-width:900px; margin:0 auto; }
        .cta-inner h3 { font-size:clamp(22px,4vw,32px); margin:0 0 10px; font-weight:900; }
        .muted { color:var(--muted); margin-bottom:18px; }

        /* Accessibility */
        :focus-visible { outline: 3px solid rgba(79,70,229,0.14); outline-offset:3px; border-radius:8px; }
      `}</style>
      </main>
    </div>
  );
}

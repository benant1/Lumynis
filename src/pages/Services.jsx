import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      id: "digital",
      title: "Développement digital",
      subtitle: "Applications • Web • Plateformes",
      desc: "Création d'applications mobiles, sites web, plateformes complètes et solutions sur mesure adaptées à vos besoins.",
      colorFrom: "#4F46E5",
      colorTo: "#06B6D4",
      icon: "💻"
    },
    {
      id: "formation",
      title: "Formations professionnelles",
      subtitle: "Compétences modernes & pratiques",
      desc: "Des programmes pratiques pour développer des compétences modernes : digital, business, design, informatique.",
      colorFrom: "#10B981",
      colorTo: "#14B8A6",
      icon: "🎓"
    },
    {
      id: "consulting",
      title: "Accompagnement et consulting",
      subtitle: "Stratégie & Croissance",
      desc: "Coaching entrepreneurial, gestion de projets, organisation interne, stratégie de croissance pour votre succès.",
      colorFrom: "#F59E0B",
      colorTo: "#F97316",
      icon: "🚀"
    },
    {
      id: "media",
      title: "Média & Communication",
      subtitle: "Branding & Contenu",
      desc: "Création de contenus, branding, identité visuelle, vidéos, publicités, community management professionnel.",
      colorFrom: "#EC4899",
      colorTo: "#8B5CF6",
      icon: "🎬"
    },
    {
      id: "admin",
      title: "Services administratifs",
      subtitle: "Support professionnel",
      desc: "Rédaction de documents, assistance professionnelle, création de dossiers, gestion administrative complète.",
      colorFrom: "#6366F1",
      colorTo: "#A78BFA",
      icon: "📋"
    },
  ];

  return (
    <main className="services-root" aria-labelledby="services-heading">
      <header className="services-hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Nos Services</p>
            <h1 id="services-heading" className="hero-title">Des solutions complètes pour votre réussite</h1>
            <p className="hero-lead">
              Le Groupe Lumynis vous accompagne dans tous vos projets avec des services professionnels, 
              innovants et adaptés à vos besoins spécifiques.
            </p>

            <div className="hero-actions">
              <Link to="/contact" className="btn primary">Demander un devis</Link>
              <Link to="/about" className="btn ghost">En savoir plus</Link>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=80"
                 alt="Services professionnels" className="hero-img" loading="lazy" />
          </div>
        </div>
      </header>

      <section className="services-grid" aria-label="Nos offres">
        {services.map(s => (
          <article key={s.id} className="service-card">
            <div className="service-mark" style={{background: `linear-gradient(135deg, ${s.colorFrom}, ${s.colorTo})`}} aria-hidden="true">
              <span className="service-emoji">{s.icon}</span>
            </div>

            <div className="service-body">
              <h3 className="service-title">{s.title}</h3>
              <div className="service-sub">{s.subtitle}</div>
              <p className="service-desc">{s.desc}</p>
              <div className="service-actions">
                <Link to="/contact" className="link">Demander un devis</Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="services-cta">
        <div className="cta-inner">
          <h3>Prêt à démarrer votre projet ?</h3>
          <p className="muted">Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé.</p>
          <Link to="/contact" className="btn primary">Contactez-nous</Link>
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

        .services-root {
          font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial;
          color:var(--text);
          -webkit-font-smoothing:antialiased;
        }

        /* HERO */
        .services-hero { background: linear-gradient(180deg,#f8fbff,#ffffff); padding:48px 16px; }
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

        /* SERVICES GRID */
        .services-grid { 
          max-width:var(--max); 
          margin:28px auto 0; 
          display:grid; 
          gap:18px; 
          padding:0 16px; 
          grid-template-columns: 1fr; 
        }
        @media(min-width:768px) { .services-grid { grid-template-columns: repeat(2, minmax(0,1fr)); } }

        .service-card {
          display:flex; gap:16px; align-items:flex-start;
          background:linear-gradient(180deg,var(--card),#fff);
          padding:20px; border-radius:12px;
          border:1px solid rgba(15,23,42,0.04);
          box-shadow:0 10px 30px rgba(16,24,40,0.04);
          transition: transform .14s ease, box-shadow .14s ease;
        }
        .service-card:hover { transform: translateY(-6px); box-shadow:0 26px 60px rgba(16,24,40,0.08); }

        .service-mark { 
          width:64px; 
          height:64px; 
          border-radius:12px; 
          display:flex; 
          align-items:center; 
          justify-content:center; 
          flex-shrink:0; 
          box-shadow:0 10px 26px rgba(16,24,40,0.06); 
        }
        .service-emoji {
          font-size: 32px;
        }
        .service-title { margin:0; font-size:18px; font-weight:800; color:var(--text); }
        .service-sub { font-size:13px; color:var(--muted); margin-top:6px; }
        .service-desc {
          margin-top:10px; color:#0f172a; line-height:1.7; font-size:15px;
        }
        .service-actions { margin-top:12px; display:flex; gap:10px; align-items:center; }
        .link { color:var(--accent1); text-decoration:none; font-weight:700; }
        .link:hover { text-decoration:underline; }

        /* CTA */
        .services-cta { background:linear-gradient(90deg,#fbfdff,#ffffff); padding:34px 16px; text-align:center; margin-top:28px; }
        .cta-inner { max-width:900px; margin:0 auto; }
        .muted { color:var(--muted); }

        /* Accessibility */
        :focus-visible { outline: 3px solid rgba(79,70,229,0.14); outline-offset:3px; border-radius:8px; }
      `}</style>
    </main>
  );
}

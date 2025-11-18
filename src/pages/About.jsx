import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  const values = [
    { id: "innovation", title: "Innovation", desc: "Solutions créatives et avant-gardistes pour chaque défi." },
    { id: "confiance", title: "Confiance", desc: "Relations basées sur l'honnêteté et la transparence." },
    { id: "excellence", title: "Excellence", desc: "Qualité supérieure dans chaque projet et livrable." },
    { id: "service", title: "Service", desc: "Accompagnement dédié et support client exceptionnel." },
    { id: "transparence", title: "Transparence", desc: "Communication claire et processus ouverts." },
  ];

  const sectors = [
    { title: "Développement d'applications et de plateformes", icon: "💻" },
    { title: "Formation professionnelle", icon: "🎓" },
    { title: "Accompagnement entrepreneurial", icon: "🚀" },
    { title: "Stratégies digitales", icon: "📊" },
    { title: "Création de contenus et médias", icon: "🎬" },
    { title: "Services administratifs et conseils", icon: "📋" },
  ];

  return (
    <main className="about-root" aria-labelledby="about-heading">
      <header className="about-hero">
        <div className="about-hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Groupe Lumynis</p>
            <h1 id="about-heading" className="hero-title">Qui sommes-nous ?</h1>
            <p className="hero-lead">
              Le Groupe Lumynis est une structure multidimensionnelle fondée pour apporter de la valeur, de l'innovation et un changement concret dans la vie des personnes et des entreprises.
            </p>
            <p className="hero-lead">
              Nous intervenons dans plusieurs secteurs pour transformer vos ambitions en réalité.
            </p>

            <div className="hero-ctas">
              <Link to="/join" className="btn primary">Rejoindre Lumynis</Link>
              <Link to="/services" className="btn ghost">Nos services</Link>
            </div>
          </div>

          <div className="hero-media" aria-hidden="true">
            <img
              src="src/assets/WhatsApp Image 2025-10-30 at 13.36.12_3c797942.jpg"
              alt="Design et technologie"
              loading="lazy"
              className="hero-img"
            />
          </div>
        </div>
      </header>

      <section className="about-mission" aria-labelledby="mission-title">
        <h2 id="mission-title">Notre mission</h2>
        <p className="mission-desc" style={{fontWeight: '700', fontSize: '20px', color: 'var(--primary)'}}>
          ✨ Rendre le succès accessible pour tous.
        </p>
      </section>

      <section className="about-mission" aria-labelledby="vision-title">
        <h2 id="vision-title">Notre Vision</h2>
        <p className="mission-desc">
          Être un leader reconnu dans la transformation digitale et l'accompagnement global en Afrique et dans le monde.
        </p>
      </section>

      <section className="about-sectors" aria-labelledby="sectors-title">
        <h2 id="sectors-title">Nos Secteurs d'Intervention</h2>
        <div className="sectors-grid">
          {sectors.map((s, idx) => (
            <div key={idx} className="sector-card">
              <div className="sector-icon">{s.icon}</div>
              <div className="sector-title">{s.title}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="about-values" aria-labelledby="values-title">
        <h2 id="values-title">Nos valeurs</h2>
        <p className="muted">Principes qui guident notre travail — clairs, humains et durables.</p>

        <ul className="values-grid">
          {values.map(v => (
            <li key={v.id} className="value">
              <div className="value-mark" aria-hidden="true">{v.title.charAt(0)}</div>
              <div className="value-body">
                <h3 className="value-title">{v.title}</h3>
                <p className="value-desc">{v.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="about-divisions" aria-labelledby="divisions-title">
        <h2 id="divisions-title">Nos Divisions</h2>
        <p className="muted" style={{textAlign: 'center', marginBottom: '20px'}}>Découvrez les 4 branches du Groupe Lumynis</p>
        <div className="divisions-grid">
          <Link to="/tech" className="division-card">
            <div className="division-icon" style={{background: 'linear-gradient(135deg, #4F46E5, #06B6D4)'}}>💻</div>
            <h3>Lumynis Tech</h3>
            <p>Innovation & Technologie</p>
          </Link>
          <Link to="/design" className="division-card">
            <div className="division-icon" style={{background: 'linear-gradient(135deg, #EC4899, #8B5CF6)'}}>🎨</div>
            <h3>Lumynis Design</h3>
            <p>Création & Design</p>
          </Link>
          <Link to="/market" className="division-card">
            <div className="division-icon" style={{background: 'linear-gradient(135deg, #10B981, #14B8A6)'}}>🛒</div>
            <h3>Lumynis Market</h3>
            <p>E-commerce & Marketplace</p>
          </Link>
          <Link to="/spirit" className="division-card">
            <div className="division-icon" style={{background: 'linear-gradient(135deg, #8B5CF6, #A78BFA)'}}>✨</div>
            <h3>Lumynis Spirit</h3>
            <p>Développement Personnel</p>
          </Link>
        </div>
      </section>

      <section className="about-cta">
        <div className="cta-inner">
          <h3>Prêt à faire partie de Lumynis ?</h3>
          <p className="muted">Rejoignez une communauté de leaders qui transforment le monde.</p>
          <Link to="/join" className="btn primary">Rejoignez‑nous</Link>
        </div>
      </section>

      <style>{`
        :root{
          --max:1200px;
          --accent1:#4f46e5;
          --accent2:#06b6d4;
          --text:#0b1220;
          --muted:#4b5563;
          --card:#ffffff;
          --radius:12px;
          --shadow:0 14px 40px rgba(16,24,40,0.07);
        }

        .about-root {
          font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial;
          color: var(--text);
          line-height:1.6;
        }

        /* HERO */
        .about-hero {
          background: linear-gradient(180deg,#f8fbff,#ffffff);
          padding:48px 16px;
        }

        .about-hero-inner {
          max-width: var(--max);
          margin: 0 auto;
          display: grid;
          gap: 28px;
          grid-template-columns: 1fr;
          align-items: stretch;
        }

        @media(min-width:920px) {
          .about-hero-inner { grid-template-columns: 1fr 520px; gap:36px; }
        }

        .eyebrow {
          text-transform: uppercase;
          color: var(--muted);
          font-weight:700;
          letter-spacing:0.12em;
          font-size:12px;
          margin-bottom:8px;
        }

        .hero-title {
          font-size: clamp(28px, 4.5vw, 44px);
          margin: 0 0 10px;
          font-weight: 900;
          color: var(--text);
          line-height:1.02;
        }

        .hero-lead {
          color: #1f2937;
          font-size:18px;
          margin-bottom:14px;
          max-width:62ch;
        }

        .hero-ctas { display:flex; gap:12px; margin-top:6px; flex-wrap:wrap; }

        .btn {
          display:inline-flex;
          align-items:center;
          justify-content:center;
          padding:10px 16px;
          border-radius:10px;
          font-weight:700;
          text-decoration:none;
        }
        .btn.primary {
          color:white;
          background: linear-gradient(90deg, var(--accent1), var(--accent2));
          box-shadow: var(--shadow);
        }
        .btn.ghost {
          color: var(--text);
          background: rgba(15,23,42,0.04);
          border: 1px solid rgba(15,23,42,0.04);
        }

        .hero-media {
          display:flex;
          align-items:center;
          justify-content:center;
          width:100%;
          height:300px;
        }
        .hero-img {
          width:100%;
          height:100%;
          max-height: 720px;
          object-fit: cover;
          border-radius:14px;
          box-shadow: 0 20px 50px rgba(16,24,40,0.08);
          border: 1px solid rgba(15,23,42,0.04);
          transition: transform .28s ease;
          display:block;
        }
        .hero-media:hover .hero-img { transform: translateY(-6px) scale(1.01); }

        /* Mission & Vision */
        .about-mission { padding:28px 16px 8px; text-align:center; }
        .mission-desc { max-width:900px; margin:10px auto 0; color:#374151; font-size:16px; }

        /* Sectors */
        .about-sectors { padding:26px 16px; text-align:center; }
        .sectors-grid {
          display:grid;
          gap:16px;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          max-width:1200px;
          margin:18px auto 0;
        }
        .sector-card {
          background: white;
          padding: 24px;
          border-radius: 12px;
          box-shadow: 0 10px 28px rgba(16,24,40,0.04);
          border: 1px solid rgba(15,23,42,0.03);
          text-align: center;
          transition: transform .2s ease;
        }
        .sector-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(16,24,40,0.08);
        }
        .sector-icon {
          font-size: 48px;
          margin-bottom: 12px;
        }
        .sector-title {
          font-weight: 600;
          color: var(--text);
          font-size: 16px;
        }

        /* VALUES */
        .about-values { padding:26px 16px; }
        .about-values .values-grid {
          display:grid;
          gap:16px;
          grid-template-columns: 1fr;
          max-width:1100px;
          margin:18px auto 0;
          padding:0;
          list-style:none;
        }
        .value {
          display:flex;
          gap:16px;
          align-items:flex-start;
          background: linear-gradient(180deg, var(--card), #fbfdff);
          padding:18px;
          border-radius:12px;
          box-shadow: 0 10px 28px rgba(16,24,40,0.04);
          border: 1px solid rgba(15,23,42,0.03);
          transition: transform .16s ease, box-shadow .16s ease;
        }
        .value:hover { transform:translateY(-6px); box-shadow: 0 22px 50px rgba(16,24,40,0.08); }

        .value-mark {
          width:56px; height:56px; border-radius:10px;
          background: linear-gradient(135deg, var(--accent1), var(--accent2));
          color:white; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:18px;
          flex-shrink:0;
        }
        .value-body { min-width:0; }
        .value-title { margin:0 0 6px; font-size:16px; font-weight:800; color:var(--text); }
        .value-desc { margin:0; color:var(--muted); font-size:14px; line-height:1.5; }

        /* Divisions */
        .about-divisions { padding:26px 16px; text-align:center; }
        .divisions-grid {
          display:grid;
          gap:20px;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          max-width:1200px;
          margin:0 auto;
        }
        .division-card {
          background: white;
          padding: 32px 24px;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(16,24,40,0.06);
          border: 1px solid rgba(15,23,42,0.03);
          text-decoration: none;
          color: inherit;
          transition: all .2s ease;
          text-align: center;
        }
        .division-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 60px rgba(16,24,40,0.12);
        }
        .division-icon {
          width: 80px;
          height: 80px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 40px;
          margin: 0 auto 16px;
        }
        .division-card h3 {
          margin: 0 0 8px;
          font-size: 18px;
          font-weight: 800;
          color: var(--text);
        }
        .division-card p {
          margin: 0;
          color: var(--muted);
          font-size: 14px;
        }

        /* CTA */
        .about-cta { background: linear-gradient(90deg,#fbfdff,#ffffff); padding:34px 16px; text-align:center; }
        .cta-inner { max-width:900px; margin:0 auto; }

        .muted { color:var(--muted); }

        /* RESPONSIVE */
        @media(min-width:920px) {
          .values-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        }
        @media(min-width:1200px) {
          .values-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
        }

        @media(max-width:919px) {
          .about-hero-inner { grid-template-columns: 1fr; align-items: start; }
          .hero-media { height: auto; }
          .hero-img { height: auto; max-width: 560px; }
        }

        :focus-visible { outline: 3px solid rgba(79,70,229,0.14); outline-offset: 3px; border-radius:8px; }
      `}</style>
    </main>
  );
}

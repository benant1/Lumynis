import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  const values = [
    { id: "lumiere", title: "Lumière", desc: "Clarté, connaissance et inspiration pour chaque décision." },
    { id: "elegance", title: "Élégance", desc: "Design soigné, hiérarchie claire et cohérence visuelle." },
    { id: "innovation", title: "Innovation", desc: "Solutions techniques créatives et pragmatiques." },
    { id: "elevation", title: "Élévation", desc: "Approche humaine et portée consciente du numérique." },
    { id: "impact", title: "Impact", desc: "Créer avec sens pour transformer positivement." },
  ];

  const branches = [
    { id: "tech", title: "Lumynis Tech", subtitle: "Ingénierie & Architecture", desc: "Plateformes scalables, intégrations et best practices." },
    { id: "design", title: "Lumynis Design", subtitle: "UX • UI • Brand", desc: "Design centré utilisateur, prototypes rapides et identité visuelle." },
    { id: "market", title: "Lumynis Market", subtitle: "Go‑to‑market", desc: "Positionnement, growth et stratégies commerciales." },
    { id: "spirit", title: "Lumynis Spirit", subtitle: "Culture & Impact", desc: "Accompagnement holistique : bien‑être et pratiques éthiques." },
  ];

  return (
    <main className="about-root" aria-labelledby="about-heading">
      <header className="about-hero">
        <div className="about-hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Groupe Lumynis</p>
            <h1 id="about-heading" className="hero-title">La lumière de l’innovation consciente</h1>
            <p className="hero-lead">
              Nous unissons design, technologie et conscience pour créer des expériences élégantes,
              performantes et porteuses de sens. Chaque projet est pensé pour avoir un impact positif.
            </p>

            <div className="hero-ctas">
              <Link to="/contact" className="btn primary">Nous contacter</Link>
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
        <p className="mission-desc">
          Inspirer, concevoir et commercialiser des créations lumineuses — technologies, objets,
          expériences et enseignements — pour éclairer le monde d’une énergie nouvelle.
        </p>
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

      <section className="about-branches" aria-labelledby="branches-title">
        <h2 id="branches-title">Nos branches</h2>
        <div className="branches-grid">
          {branches.map(b => (
            <article key={b.id} className="branch-card">
              <div className="branch-mark" aria-hidden="true">{b.title.split(' ')[1]?.charAt(0) ?? b.title.charAt(0)}</div>
              <div className="branch-body">
                <h3 className="branch-title">{b.title}</h3>
                <div className="branch-sub">{b.subtitle}</div>
                <p className="branch-desc">{b.desc}</p>
                <div className="branch-actions">
                  <a className="link" href={`/#${b.id}`}>Découvrir</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-cta">
        <div className="cta-inner">
          <h3>Prêt à collaborer ?</h3>
          <p className="muted">Échangeons sur votre projet et créons quelque chose de lumineux.</p>
          <Link to="/contact" className="btn primary">Contactez‑nous</Link>
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

        /* IMPORTANT: stretch both columns so media height == left text height on desktop */
        .about-hero-inner {
          max-width: var(--max);
          margin: 0 auto;
          display: grid;
          gap: 28px;
          grid-template-columns: 1fr;
          align-items: stretch; /* <-- crucial */
        }

        /* on larger screens use two columns and allow columns to stretch */
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

        /* HERO MEDIA: make the media container stretch to the same height as the text column,
           and make the image fill that container */
        .hero-media {
          display:flex;
          align-items:center;
          justify-content:center;
          width:%;
          height:300px; /* will stretch because parent grid align-items: stretch */
        }
        .hero-img {
          width:100%;
          height:100%; /* match left column height */
          max-height: 720px; /* safety cap on extremely tall content */
          object-fit: cover;
          border-radius:14px;
          box-shadow: 0 20px 50px rgba(16,24,40,0.08);
          border: 1px solid rgba(15,23,42,0.04);
          transition: transform .28s ease;
          display:block;
        }
        /* allow a little transform hover only when there's space */
        .hero-media:hover .hero-img { transform: translateY(-6px) scale(1.01); }

        /* Mission */
        .about-mission { padding:28px 16px 8px; text-align:center; }
        .mission-desc { max-width:900px; margin:10px auto 0; color:#374151; font-size:16px; }

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

        /* BRANCHES */
        .about-branches { padding:26px 16px; }
        .branches-grid { display:grid; gap:16px; grid-template-columns:1fr; max-width:1200px; margin:18px auto 0; }
        .branch-card {
          display:flex; gap:16px; align-items:flex-start;
          background: linear-gradient(180deg, var(--card), #ffffff);
          padding:16px; border-radius:12px; border:1px solid rgba(15,23,42,0.03);
          box-shadow: 0 10px 30px rgba(16,24,40,0.04);
          transition: transform .14s ease;
        }
        .branch-card:hover { transform: translateY(-6px); box-shadow: 0 24px 60px rgba(16,24,40,0.08); }
        .branch-mark {
          width:64px; height:64px; border-radius:12px;
          background: linear-gradient(135deg,var(--accent1),#7c6cff);
          display:flex; align-items:center; justify-content:center; color:white; font-weight:800; font-size:18px;
        }
        .branch-title { margin:0; font-size:16px; font-weight:800; color:var(--text); }
        .branch-sub { color:var(--muted); font-size:13px; margin-top:6px; }
        .branch-desc { color:#374151; margin-top:10px; line-height:1.5; }

        .branch-actions .link { color:var(--accent1); text-decoration:none; font-weight:700; margin-top:12px; display:inline-block; }
        .branch-actions .link:hover { text-decoration:underline; }

        /* CTA */
        .about-cta { background: linear-gradient(90deg,#fbfdff,#ffffff); padding:34px 16px; text-align:center; }
        .cta-inner { max-width:900px; margin:0 auto; }

        .muted { color:var(--muted); }

        /* RESPONSIVE */
        @media(min-width:920px) {
          .values-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
          .branches-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        }
        @media(min-width:1200px) {
          .values-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
        }

        /* Mobile tweaks: don't force equal heights on small screens */
        @media(max-width:919px) {
          .about-hero-inner { grid-template-columns: 1fr; align-items: start; }
          .hero-media { height: auto; }
          .hero-img { height: auto; max-width: 560px; }
        }

        /* Accessibility */
        :focus-visible { outline: 3px solid rgba(79,70,229,0.14); outline-offset: 3px; border-radius:8px; }
      `}</style>
    </main>
  );
}

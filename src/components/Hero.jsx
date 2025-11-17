import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero-root" aria-labelledby="hero-title">
      <div className="hero-inner">
        <div className="hero-left">
          <div className="eyebrow">Bienvenue chez</div>

          <h1 id="hero-title" className="hero-title">
            GROUPE <span className="accent">LUMYNIS</span>
          </h1>

          <p className="lead">“La lumière de l’innovation consciente.”</p>

          <p className="desc">
            Nous unissons design, technologie et bien‑être pour créer des expériences numériques
            élégantes, performantes et porteuses de sens. Transformez vos idées en produits remarquables.
          </p>

          <div className="hero-ctas" role="region" aria-label="Actions principales">
            <Link to="/about" className="btn primary">En savoir plus</Link>
            <Link to="/contact" className="btn ghost">Nous contacter</Link>
          </div>

          <ul className="kpis" aria-hidden="false">
            <li><strong>200+</strong><span>Projets livrés</span></li>
            <li><strong>99.9%</strong><span>Disponibilité</span></li>
            <li><strong>24h</strong><span>Support</span></li>
          </ul>
        </div>

        <div className="hero-right" aria-hidden="true">
          <div className="device-mockup">
            {/* Image hébergée (Unsplash) */}
            <img
              src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1350&q=80"
              alt="Illustration produit — interface moderne"
              className="hero-image"
              loading="lazy"
            />
             <div className="device-shadow" />
          </div>
        </div>
      </div>

      <style>{`
        :root {
          --bg: #f6f8fb;
          --surface: #ffffff;
          --muted: #6b7280;
          --accent1: #6366f1;
          --accent2: #60a5fa;
          --radius: 14px;
          --max: 1200px;
          --shadow-md: 0 12px 40px rgba(16,24,40,0.08);
        }

        .hero-root {
          background: linear-gradient(180deg, rgba(255,255,255,0.7), rgba(246,250,255,0.85));
          padding: 44px 20px;
        }

        .hero-inner {
          max-width: var(--max);
          margin: 0 auto;
          display: grid;
          gap: 28px;
          grid-template-columns: 1fr;
          align-items: center;
        }

        .eyebrow {
          color: var(--muted);
          font-weight: 600;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: 12px;
        }

        .hero-title {
          font-size: clamp(28px, 4.5vw, 48px);
          line-height: 1.02;
          margin: 0 0 12px 0;
          font-weight: 800;
          color: #0f172a;
        }

        .hero-title .accent {
          background: linear-gradient(90deg, var(--accent1), var(--accent2));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .lead {
          color: var(--muted);
          font-size: 18px;
          margin: 0 0 16px 0;
          font-weight: 600;
        }

        .desc {
          color: #374151;
          max-width: 62ch;
          margin-bottom: 20px;
        }

        .hero-ctas { display:flex; gap:12px; align-items:center; margin-bottom:18px; flex-wrap:wrap; }
        .btn {
          display:inline-flex;
          align-items:center;
          justify-content:center;
          padding: 10px 16px;
          border-radius: 10px;
          text-decoration:none;
          font-weight:700;
          font-size:14px;
        }
        .btn.primary {
          color: white;
          background: linear-gradient(90deg, var(--accent1), var(--accent2));
          box-shadow: var(--shadow-md);
        }
        .btn.ghost {
          color: #0f172a;
          background: rgba(15,23,42,0.04);
          border: 1px solid rgba(15,23,42,0.04);
        }

        .kpis {
          display:flex;
          gap:12px;
          margin-top:12px;
          list-style:none;
          padding:0;
        }
        .kpis li {
          background: var(--surface);
          padding:10px 14px;
          border-radius: 10px;
          box-shadow: 0 8px 24px rgba(15,23,42,0.04);
          display:flex;
          flex-direction:column;
          align-items:flex-start;
        }
        .kpis strong { font-size:16px; display:block; }

        /* Right mockup */
        .hero-right { display:flex; justify-content:center; }
        .device-mockup { width:320px; height:220px; position:relative; border-radius:14px; overflow:hidden; }
        .device-mockup .screen {
          width:100%; height:100%; border-radius:14px;
          background: linear-gradient(180deg, rgba(255,255,255,0.9), rgba(240,247,255,0.9));
          display:flex; align-items:center; justify-content:center;
          box-shadow: var(--shadow-md);
          border: 1px solid rgba(15,23,42,0.04);
        }
        .device-shadow {
          position:absolute; left:14px; right:14px; bottom:-18px; height:20px; border-radius:50%;
          background: radial-gradient(closest-side, rgba(15,23,42,0.08), transparent);
          filter: blur(10px);
        }
        .mock-graphic { width:88%; height:72%; opacity:0.95; }

        .hero-image{
          width:100%;
          height:100%;
          object-fit:cover;
          border-radius:14px;
          box-shadow: var(--shadow-md);
          border: 1px solid rgba(15,23,42,0.04);
          display:block;
        }

        /* Responsive */
        @media(min-width:920px) {
          .hero-inner { grid-template-columns: 1fr 420px; align-items: center; gap:36px; }
          .hero-left { padding-right: 8px; }
        }

        @media(max-width:500px) {
          .device-mockup { width:260px; height:160px; }
          .kpis { flex-direction: column; }
          .hero-image{ object-position:center top; }
        }
      `}</style>
    </section>
  );
}

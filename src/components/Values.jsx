import React from "react";
import { Link } from "react-router-dom";

export default function Values() {
  const valeurs = [
    { key: "lumiere", title: "Lumière", desc: "Clarté, connaissance et inspiration pour chaque décision.", color: "#6366f1", icon: "M12 2a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zM7.05 4.05a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1-1.414 1.414L7.05 5.464a1 1 0 0 1 0-1.414zM2 11a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zm9 9a1 1 0 0 1-1-1v-2a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1zm6.95-2.05a1 1 0 0 1-1.414 0l-1.414-1.414a1 1 0 1 1 1.414-1.414l1.414 1.414a1 1 0 0 1 0 1.414z" },
    { key: "elegance", title: "Élégance", desc: "Design soigné, hiérarchie claire et cohérence visuelle.", color: "#0ea5a4", icon: "M12 2L2 7l10 5 10-5-10-5zm0 7.5L4.2 7 12 4.5 19.8 7 12 9.5zM2 17l10 5 10-5V14L12 19 2 14v3z" },
    { key: "innovation", title: "Innovation", desc: "Solutions techniques créatives et pragmatiques.", color: "#f97316", icon: "M12 2C8.13 2 5 5.13 5 9c0 3.25 2.17 5.95 5 6.7V20h2v-4.3c2.83-.75 5-3.45 5-6.7 0-3.87-3.13-7-7-7z" },
    { key: "elevation", title: "Élévation", desc: "Approche consciente et portée humaine du numérique.", color: "#ef4444", icon: "M12 3l4 8H8l4-8zm0 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" },
    { key: "impact", title: "Impact", desc: "Création avec sens pour transformer positivement.", color: "#6366f1", icon: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 14h-2v-2h2v2zm0-4h-2V6h2v6z" },
  ];

  return (
    <section className="values-root" aria-labelledby="values-title">
      <div className="values-inner">
        <h2 id="values-title" className="values-heading">Nos valeurs</h2>
        <p className="values-sub">Principes qui guident notre travail — clairs, humains et durables.</p>

        <ul className="values-grid" role="list">
          {valeurs.map(v => (
            <li key={v.key} className="value-card" aria-labelledby={`val-${v.key}-title`}>
              <div className="value-mark" style={{ background: `linear-gradient(135deg, ${v.color}, #7c6cff)` }} aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d={v.icon} />
                </svg>
              </div>

              <div className="value-body">
                <h3 id={`val-${v.key}-title`} className="value-title">{v.title}</h3>
                <p className="value-desc">{v.desc}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="values-cta">
          <Link to="/about" className="values-btn">En savoir plus</Link>
        </div>
      </div>

      <style>{`
        :root {
          --bg: #f8fafc;
          --card: #ffffff;
          --muted: #6b7280;
          --max: 1200px;
          --shadow-sm: 0 8px 24px rgba(16,24,40,0.06);
          --radius: 12px;
        }

        .values-root { background: var(--bg); padding: 48px 20px; }
        .values-inner { max-width: var(--max); margin: 0 auto; text-align: center; }
        .values-heading { font-size: 28px; font-weight: 800; color: #0f172a; margin-bottom: 8px; }
        .values-sub { color: var(--muted); margin-bottom: 28px; }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(1, minmax(0,1fr));
          gap: 16px;
          list-style: none;
          padding: 0;
          margin: 0 auto;
          max-width: 1100px;
        }

        .value-card {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          background: linear-gradient(180deg, var(--card), #fbfdff);
          padding: 18px;
          border-radius: var(--radius);
          box-shadow: var(--shadow-sm);
          border: 1px solid rgba(15,23,42,0.03);
          transition: transform .18s ease, box-shadow .18s ease;
        }
        .value-card:hover { transform: translateY(-6px); box-shadow: 0 18px 40px rgba(16,24,40,0.08); }

        .value-mark {
          flex: 0 0 56px;
          width: 56px;
          height: 56px;
          border-radius: 12px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 20px rgba(99,102,241,0.08);
        }

        .value-title { font-size: 18px; margin: 0 0 6px 0; color: #0f172a; font-weight: 700; }
        .value-desc { margin: 0; color: var(--muted); line-height: 1.45; font-size: 14px; }

        .values-cta { margin-top: 22px; }
        .values-btn {
          display: inline-block;
          padding: 10px 16px;
          border-radius: 10px;
          background: linear-gradient(90deg,#6366f1,#60a5fa);
          color: white; font-weight: 700; text-decoration: none;
          box-shadow: 0 10px 26px rgba(99,102,241,0.12);
        }

        @media (min-width: 720px) {
          .values-grid { grid-template-columns: repeat(2, minmax(0,1fr)); gap: 18px; }
        }
        @media (min-width: 1024px) {
          .values-grid { grid-template-columns: repeat(5, minmax(0,1fr)); }
          .value-card { flex-direction: column; align-items: flex-start; gap: 12px; padding: 20px; text-align: left; }
          .value-mark { width: 64px; height: 64px; border-radius: 14px; }
        }
      `}</style>
    </section>
  );
}

import React from "react";

export default function Extensions() {
  const branches = [
    {
      id: "tech",
      title: "Lumynis Tech",
      subtitle: "Ingénierie & Architecture",
      desc: "Plateformes scalables, intégrations et best practices pour des produits robustes.",
      colorFrom: "#0ea5a4",
      colorTo: "#06b6d4",
      iconPath: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM7 12l3 3 7-7"
    },
    {
      id: "design",
      title: "Lumynis Design",
      subtitle: "UX • UI • Brand",
      desc: "Design centré utilisateur, prototypes rapides et identité visuelle cohérente.",
      colorFrom: "#6366f1",
      colorTo: "#60a5fa",
      iconPath: "M12 2L2 7l10 5 10-5-10-5zm0 7.5L4.2 7 12 4.5 19.8 7 12 9.5z"
    },
    {
      id: "market",
      title: "Lumynis Market",
      subtitle: "Go‑to‑market",
      desc: "Positionnement, growth et stratégies commerciales pour accélérer la traction.",
      colorFrom: "#f97316",
      colorTo: "#f59e0b",
      iconPath: "M3 3h18v4H3V3zm2 8h14v10H5V11z"
    },
    {
      id: "spirit",
      title: "Lumynis Spirit",
      subtitle: "Culture & Impact",
      desc: "Accompagnement holistique : bien‑être, éthique et B‑Corp minded practices.",
      colorFrom: "#ef4444",
      colorTo: "#fb7185",
      iconPath: "M12 2C8.13 2 5 5.13 5 9c0 3.25 2.17 5.95 5 6.7V20h2v-4.3c2.83-.75 5-3.45 5-6.7 0-3.87-3.13-7-7-7z"
    },
  ];

  return (
    <section className="extensions-root" aria-labelledby="extensions-title">
      <div className="extensions-inner">
        <h2 id="extensions-title" className="extensions-title">Nos extensions</h2>
        <p className="extensions-sub">Des pôles spécialisés pour accompagner chaque étape de votre projet.</p>

        <ul className="extensions-grid" role="list">
          {branches.map((b) => (
            <li key={b.id} className="extension-card" style={{ borderColor: `${b.colorFrom}22` }}>
              <div
                className="extension-mark"
                style={{ background: `linear-gradient(135deg, ${b.colorFrom}, ${b.colorTo})` }}
                aria-hidden="true"
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d={b.iconPath} />
                </svg>
              </div>

              <div className="extension-body">
                <h3 className="extension-title">{b.title}</h3>
                <div className="extension-subtitle">{b.subtitle}</div>
                <p className="extension-desc">{b.desc}</p>
                <div className="extension-cta-row">
                  <a className="extension-cta" href={`/#${b.id}`}>Découvrir</a>
                  <a className="extension-link" href="/contact">Contact</a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        :root{
          --bg: #f8fafc;
          --card: #ffffff;
          --muted: #6b7280;
          --max: 1200px;
          --radius: 14px;
          --shadow: 0 12px 36px rgba(16,24,40,0.06);
        }

        .extensions-root{ background: linear-gradient(180deg,#f6f8fb,#eef6ff); padding: 56px 16px; }
        .extensions-inner{ max-width: var(--max); margin: 0 auto; text-align: center; }

        .extensions-title{ font-size: 28px; font-weight: 800; color: #0f172a; margin-bottom: 6px; }
        .extensions-sub{ color: var(--muted); margin-bottom: 28px; }

        .extensions-grid{
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
          list-style: none;
          padding: 0;
          margin: 0 auto;
        }

        .extension-card{
          display: flex;
          gap: 16px;
          align-items: flex-start;
          background: linear-gradient(180deg,var(--card),#fbfdff);
          padding: 18px;
          border-radius: var(--radius);
          border: 1px solid rgba(15,23,42,0.04);
          box-shadow: var(--shadow);
          transition: transform .16s ease, box-shadow .16s ease;
        }
        .extension-card:hover{ transform: translateY(-6px); box-shadow: 0 20px 50px rgba(16,24,40,0.08); }

        .extension-mark{
          width:64px;
          height:64px;
          border-radius:12px;
          display:flex;
          align-items:center;
          justify-content:center;
          flex-shrink:0;
          box-shadow: 0 10px 26px rgba(16,24,40,0.06);
        }

        .extension-body{ text-align:left; flex:1; min-width:0; }
        .extension-title{ margin:0; font-size:18px; font-weight:700; color:#0f172a; }
        .extension-subtitle{ font-size:13px; color:var(--muted); margin-top:4px; margin-bottom:8px; }
        .extension-desc{ margin:0 0 12px 0; color:#374151; font-size:14px; line-height:1.5; }

        .extension-cta-row{ display:flex; gap:10px; align-items:center; }
        .extension-cta{
          display:inline-block;
          padding:8px 12px;
          border-radius:10px;
          background: linear-gradient(90deg,#6366f1,#60a5fa);
          color:white;
          font-weight:700;
          text-decoration:none;
          box-shadow: 0 10px 26px rgba(99,102,241,0.10);
          font-size:13px;
        }
        .extension-link{
          color: var(--muted);
          text-decoration:none;
          font-size:13px;
          padding:8px 10px;
          border-radius:8px;
        }
        .extension-link:hover{ color:#0f172a; background: rgba(15,23,42,0.03); }

        @media(min-width:720px){
          .extensions-grid{ grid-template-columns: repeat(2, minmax(0,1fr)); }
        }
        @media(min-width:1100px){
          .extensions-grid{ grid-template-columns: repeat(4, minmax(0,1fr)); }
          .extension-card{ flex-direction:column; align-items:flex-start; gap:12px; padding:20px; }
          .extension-mark{ width:72px; height:72px; }
          .extension-cta-row{ margin-top:auto; }
        }

        @media (prefers-reduced-motion: reduce){
          *{ transition: none !important; animation: none !important; }
        }
      `}</style>
    </section>
  );
}

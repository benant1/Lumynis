import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      id: "product",
      title: "Conception produit",
      subtitle: "UX • UI • Prototypage",
      desc: "Recherche utilisateur, parcours, prototypes haute fidélité et design system pour accélérer la validation produit.",
      colorFrom: "#6366f1",
      colorTo: "#60a5fa",
      icon: "M12 2L2 7l10 5 10-5-10-5z"
    },
    {
      id: "engineering",
      title: "Ingénierie",
      subtitle: "Architecture & Développement",
      desc: "Architecture cloud, plateformes scalables, APIs et excellence technique pour produit fiable et maintenable.",
      colorFrom: "#06b6d4",
      colorTo: "#0ea5a4",
      icon: "M3 7h18v10H3z"
    },
    {
      id: "go-to-market",
      title: "Go‑to‑market",
      subtitle: "Stratégie & Growth",
      desc: "Positionnement, pricing, acquisition et funnels performants pour accélérer la traction et le chiffre d’affaires.",
      colorFrom: "#f97316",
      colorTo: "#f59e0b",
      icon: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"
    },
    {
      id: "impact",
      title: "Culture & Impact",
      subtitle: "B‑Corp minded",
      desc: "Accompagnement éthique, impact social et pratiques durables pour des organisations résilientes.",
      colorFrom: "#ef4444",
      colorTo: "#fb7185",
      icon: "M12 3l4 8H8l4-8z"
    },
  ];

  const faqs = [
    { q: "Comment commence-t-on ?", a: "On démarre par une phase de découverte (atelier) pour cadrer objectifs, contraintes et livrables." },
    { q: "Délais typiques ?", a: "Prototype : 4–6 semaines. MVP technique : 8–16 semaines (selon périmètre)." },
    { q: "Tarification ?", a: "Projets sur devis ou accompagnement mensuel. On propose toujours un forfait clair après cadrage." },
  ];

  return (
    <main className="services-root" aria-labelledby="services-heading">
      <header className="services-hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Services</p>
            <h1 id="services-heading" className="hero-title">Accompagnement complet — stratégie, design, ingénierie</h1>
            <p className="hero-lead">Nous aidons les équipes à concevoir et lancer des produits numériques durables, performants et désirables.</p>

            <div className="hero-actions">
              <Link to="/contact" className="btn primary">Demander un audit</Link>
              <Link to="/contact" className="btn ghost">Planifier un atelier</Link>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=80"
                 alt="Equipe travaillant sur produit" className="hero-img" loading="lazy" />
          </div>
        </div>
      </header>

      <section className="services-grid" aria-label="Nos offres">
        {services.map(s => (
          <article key={s.id} className="service-card">
            <div className="service-mark" style={{background: `linear-gradient(135deg, ${s.colorFrom}, ${s.colorTo})`}} aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <path d={s.icon} />
              </svg>
            </div>

            <div className="service-body">
              <h3 className="service-title">{s.title}</h3>
              <div className="service-sub">{s.subtitle}</div>
              <p className="service-desc">{s.desc}</p>
              <div className="service-actions">
                <a className="link" href={`/#${s.id}`}>En savoir plus</a>
                <Link to="/contact" className="pill">Devis</Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="pricing-faq" aria-labelledby="pricing-heading">
        <div className="pricing">
          <h2 id="pricing-heading">Formules rapides</h2>
          <div className="pricing-grid">
            <div className="price-card">
              <div className="price-title">Audit express</div>
              <div className="price-amount">€3k</div>
              <div className="price-desc">Audit produit & recommandations — livrable en 1 semaine.</div>
              <Link to="/contact" className="btn primary small">Demander</Link>
            </div>

            <div className="price-card">
              <div className="price-title">MVP rapide</div>
              <div className="price-amount">€15k+</div>
              <div className="price-desc">Prototype fonctionnel et roadmap technique — 8–12 semaines.</div>
              <Link to="/contact" className="btn primary small">Devis</Link>
            </div>
          </div>
        </div>

        <div className="faq" aria-labelledby="faq-heading">
          <h2 id="faq-heading">Questions fréquentes</h2>
          <ul className="faq-list">
            {faqs.map((f, i) => (
              <li key={i} className="faq-item">
                <strong>{f.q}</strong>
                <p>{f.a}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="services-cta">
        <div className="cta-inner">
          <h3>Prêt à démarrer ?</h3>
          <p className="muted">Réservez un créneau pour un diagnostic gratuit de 30 minutes.</p>
          <Link to="/contact" className="btn primary">Réserver un diagnostic</Link>
        </div>
      </section>

      <style>{`
        :root {
          --max:1200px;
          --accent1:#4f46e5;
          --accent2:#06b6d4;
          --text:#071220;        /* stronger primary text */
          --muted:#4b5563;
          --card:#fff;
          --radius:12px;
          --shadow: 0 16px 50px rgba(16,24,40,0.06);
          --measure: 62ch;      /* optimal measure for paragraphs */
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
        .btn.small { padding:8px 12px; font-size:14px; }

        .hero-visual { display:flex; align-items:center; justify-content:center; }
        .hero-img {
          width:100%; max-width:420px;
          border-radius:12px; object-fit:cover;
          box-shadow:0 20px 50px rgba(16,24,40,0.06); border:1px solid rgba(15,23,42,0.04);
          filter: brightness(0.85) contrast(1.02); /* dim to improve text focus */
        }

        /* SERVICES GRID */
        .services-grid { max-width:var(--max); margin:28px auto 0; display:grid; gap:18px; padding:0 16px; grid-template-columns: 1fr; }
        @media(min-width:900px) { .services-grid { grid-template-columns: repeat(2, minmax(0,1fr)); } }

        .service-card {
          display:flex; gap:16px; align-items:flex-start;
          background:linear-gradient(180deg,var(--card),#fff);
          padding:20px; border-radius:12px;
          border:1px solid rgba(15,23,42,0.04);
          box-shadow:0 10px 30px rgba(16,24,40,0.04);
          transition: transform .14s ease, box-shadow .14s ease;
        }
        .service-card:hover { transform: translateY(-6px); box-shadow:0 26px 60px rgba(16,24,40,0.08); }

        .service-mark { width:64px; height:64px; border-radius:12px; display:flex; align-items:center; justify-content:center; flex-shrink:0; box-shadow:0 10px 26px rgba(16,24,40,0.06); }
        .service-title { margin:0; font-size:18px; font-weight:800; color:var(--text); }
        .service-sub { font-size:13px; color:var(--muted); margin-top:6px; }
        .service-desc {
          margin-top:10px; color:#0f172a; line-height:1.7; font-size:15px; max-width:48ch; /* improved measure and contrast */
        }
        .service-actions { margin-top:12px; display:flex; gap:10px; align-items:center; }
        .link { color:#09203a; text-decoration:none; font-weight:800; } /* stronger link color */
        .link:hover { text-decoration:underline; color:#061226; }
        .pill { padding:8px 10px; border-radius:10px; background:rgba(15,23,42,0.04); color:var(--text); text-decoration:none; font-weight:700; }

        /* PRICING & FAQ */
        .pricing-faq { max-width:var(--max); margin:36px auto 0; display:grid; gap:24px; padding:0 16px; grid-template-columns: 1fr; }
        @media(min-width:1020px) { .pricing-faq { grid-template-columns: 1fr 420px; } }

        .pricing h2, .faq h2 { margin:0 0 12px; font-size:18px; font-weight:800; color:var(--text); }
        .pricing-grid { display:flex; gap:14px; flex-wrap:wrap; }
        .price-card { background:linear-gradient(180deg,var(--card),#fff); padding:18px; border-radius:12px; border:1px solid rgba(15,23,42,0.04); box-shadow:0 12px 36px rgba(16,24,40,0.04); flex:1 1 220px; min-width:220px; }
        .price-title { font-weight:800; margin-bottom:8px; color:var(--text); }
        .price-amount { font-size:20px; font-weight:900; margin-bottom:8px; color:var(--text); }
        .price-desc { color:#0f172a; margin-bottom:12px; font-size:15px; line-height:1.6; }

        .faq-list { list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:12px; }
        .faq-item strong { display:block; font-weight:800; margin-bottom:6px; color:var(--text); }
        .faq-item p { margin:0; color:var(--muted); line-height:1.6; }

        /* CTA */
        .services-cta { background:linear-gradient(90deg,#fbfdff,#ffffff); padding:34px 16px; text-align:center; margin-top:28px; }
        .cta-inner { max-width:900px; margin:0 auto; }
        .muted { color:var(--muted); }

        /* small screens */
        @media(max-width:639px) {
          .hero-img { max-width:100%; height:auto; filter: none; }
          .service-card { flex-direction:row; }
          .service-desc, .price-desc { max-width: 100%; }
        }

        /* Accessibility */
        :focus-visible { outline: 3px solid rgba(79,70,229,0.14); outline-offset:3px; border-radius:8px; }
      `}</style>
    </main>
  );
}
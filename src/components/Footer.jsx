import React from "react";

export default function Footer() {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    if (email) {
      // Remplacer par appel réel si besoin
      alert(`Merci ! Nous avons bien reçu : ${email}`);
      e.target.reset();
    }
  };

  return (
    <footer className="footer-root" role="contentinfo" aria-label="Pied de page">
      <div className="footer-inner">
        <div className="col brand">
          <div className="logo">L</div>
          <div>
            <div className="brand-title">Lumynis</div>
            <div className="brand-sub">Design & performance</div>
          </div>
        </div>

        <nav className="col links" aria-label="Liens utiles">
          <a href="/">Accueil</a>
          <a href="/about">À propos</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </nav>

        <div className="col contact" aria-label="Contact">
          <a href="mailto:contact@lumynis.example">contact@lumynis.example</a>
          <a href="tel:+33123456789">+33 1 23 45 67 89</a>
          <div className="social" aria-hidden="true">
            <a href="#" title="Twitter" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 7.5c.01.14.01.28.01.42 0 4.3-3.28 9.27-9.27 9.27A9.24 9.24 0 0 1 0 15.1a6.6 6.6 0 0 0 .77.04 6.56 6.56 0 0 0 4.07-1.4 3.28 3.28 0 0 1-3.07-2.27c.5.08 1.02.08 1.56-.03A3.27 3.27 0 0 1 1.6 8.9v-.04c.44.25.95.4 1.49.42a3.27 3.27 0 0 1-1.01-4.37A9.3 9.3 0 0 0 12 7.6a3.7 3.7 0 0 1 .08-.75 3.27 3.27 0 0 1 6 2.25c0 .26-.03.52-.09.77A9.22 9.22 0 0 0 24 6.1a9.45 9.45 0 0 1-5 1.38z"/></svg>
            </a>
            <a href="#" title="LinkedIn" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 1 0 4.98 8.5a2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.82-2.05 3.74-2.05C20.13 8.65 21 11 21 14.3V21H17v-6.1c0-1.47-.03-3.36-2.04-3.36-2.04 0-2.35 1.6-2.35 3.25V21H9z"/></svg>
            </a>
          </div>
        </div>

        <div className="col newsletter">
          <form onSubmit={handleSubscribe} className="subscribe" aria-label="Inscription newsletter">
            <label htmlFor="email" className="sr-only">Adresse e‑mail</label>
            <input id="email" name="email" type="email" placeholder="Votre e‑mail" required />
            <button type="submit">S'inscrire</button>
          </form>
          <div className="legal">
            <a href="/privacy">Confidentialité</a>
            <a href="/terms">Conditions</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2025 Lumynis — Tous droits réservés</span>
      </div>

      <style>{`
        .footer-root {
          background: linear-gradient(180deg,#fff,#fbfdff);
          border-top: 1px solid rgba(15,23,42,0.04);
          color: #0f172a;
          margin-top: 40px;
        }
        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 28px 20px;
          display: grid;
          gap: 18px;
          grid-template-columns: repeat(1, minmax(0,1fr));
        }
        .col { display:flex; flex-direction:column; gap:8px; }
        .brand { flex-direction:row; align-items:center; gap:12px; }
        .logo {
          width:44px; height:44px; border-radius:10px;
          background: linear-gradient(135deg,#6366f1,#60a5fa);
          color:white; display:flex; align-items:center; justify-content:center; font-weight:700;
          box-shadow: 0 10px 26px rgba(99,102,241,0.08);
        }
        .brand-title { font-weight:800; }
        .brand-sub { color:#6b7280; font-size:13px; }

        .links a, .contact a, .legal a {
          color:#374151; text-decoration:none; font-size:14px;
        }
        .links a:hover, .contact a:hover, .legal a:hover { color:#0f172a; text-decoration:underline; }

        .social { display:flex; gap:10px; margin-top:6px; }
        .social a { color:#6b7280; display:inline-flex; align-items:center; justify-content:center; width:34px; height:34px; border-radius:8px; background: rgba(15,23,42,0.03); }
        .social svg { display:block; }

        .newsletter .subscribe { display:flex; gap:8px; align-items:center; }
        .subscribe input {
          padding:10px 12px; border-radius:10px; border:1px solid rgba(15,23,42,0.06); min-width:0; flex:1;
          background: #fff;
        }
        .subscribe button {
          padding:10px 14px; border-radius:10px; border:0; background:linear-gradient(90deg,#6366f1,#60a5fa); color:#fff; font-weight:700;
          box-shadow: 0 8px 20px rgba(99,102,241,0.12);
        }

        .legal { margin-top:12px; display:flex; gap:10px; align-items:center; color:#6b7280; font-size:13px; }

        .footer-bottom {
          max-width:1200px; margin:0 auto; padding:10px 20px 22px; text-align:center; color:#6b7280; font-size:13px;
          border-top: 1px solid rgba(15,23,42,0.03);
        }

        .sr-only {
          position: absolute !important;
          width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0;
        }

        @media (min-width: 900px) {
          .footer-inner { grid-template-columns: 1.2fr 1fr 1fr 1fr; align-items:start; }
          .brand-sub { display:block; }
        }
      `}</style>
    </footer>
  );
}

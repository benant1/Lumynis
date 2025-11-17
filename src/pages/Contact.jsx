import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation envoi (à remplacer par appel API)
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", company: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const contactMethods = [
    {
      icon: "✉️",
      title: "E-mail",
      desc: "Pour une demande rapide",
      value: "hello@lumynis.com"
    },
    {
      icon: "📱",
      title: "Téléphone",
      desc: "Appel direct",
      value: "+33 (0)1 23 45 67 89"
    },
    {
      icon: "📍",
      title: "Adresse",
      desc: "Notre siège",
      value: "Paris, France"
    },
  ];

  return (
    <main className="contact-root" aria-labelledby="contact-heading">
      <header className="contact-hero">
        <div className="hero-inner">
          <p className="eyebrow">Contact</p>
          <h1 id="contact-heading" className="hero-title">Parlons de votre projet</h1>
          <p className="hero-lead">Nous répondons généralement sous 24h. Dites-nous comment on peut vous aider.</p>
        </div>
      </header>

      <div className="contact-container">
        <section className="contact-form-section">
          <h2>Envoyez-nous un message</h2>

          {submitted ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h3>Merci !</h3>
              <p>Votre message a été envoyé avec succès. Nous vous recontacterons bientôt.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nom complet *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Jean Dupont"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">E-mail *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="jean@company.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="company">Entreprise</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Votre entreprise"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Sujet *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">— Sélectionnez un sujet —</option>
                  <option value="audit">Audit produit</option>
                  <option value="design">Design & UX</option>
                  <option value="dev">Développement</option>
                  <option value="strategy">Stratégie</option>
                  <option value="other">Autre</option>
                </select>
              </div>

              <div className="form-group full">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Décrivez votre projet et vos objectifs..."
                  rows="6"
                />
              </div>

              <button type="submit" className="btn primary submit-btn">Envoyer le message</button>
              <p className="form-note">On traite vos données conformément au RGPD.</p>
            </form>
          )}
        </section>

        <section className="contact-info-section">
          <h2>Infos de contact</h2>
          <div className="contact-methods">
            {contactMethods.map((method, i) => (
              <div key={i} className="contact-method">
                <div className="method-icon">{method.icon}</div>
                <div className="method-body">
                  <h3>{method.title}</h3>
                  <p className="method-desc">{method.desc}</p>
                  <a href={method.title === "E-mail" ? `mailto:${method.value}` : "#"} className="method-link">
                    {method.value}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="response-time">
            <div className="rt-icon">⏱️</div>
            <div>
              <h4>Temps de réponse</h4>
              <p>Généralement sous 24h en semaine.</p>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        :root {
          --max: 1200px;
          --accent1: #4f46e5;
          --accent2: #06b6d4;
          --text: #061220;
          --text-strong: #030812;
          --muted: #4b5563;
          --card: #fff;
          --radius: 12px;
          --shadow: 0 16px 50px rgba(16,24,40,0.06);
        }

        .contact-root {
          font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial;
          color: var(--text-strong);
          -webkit-font-smoothing: antialiased;
        }

        /* HERO */
        .contact-hero {
          background: linear-gradient(180deg, #f8fbff, #ffffff);
          padding: 48px 16px;
          text-align: center;
        }
        .hero-inner { max-width: 900px; margin: 0 auto; }
        .eyebrow {
          text-transform: uppercase;
          color: var(--muted);
          font-weight: 700;
          letter-spacing: 0.12em;
          font-size: 12px;
          margin-bottom: 8px;
        }
        .hero-title {
          font-size: clamp(26px, 4.5vw, 40px);
          margin: 0 0 10px;
          font-weight: 900;
          line-height: 1.06;
          color: var(--text-strong);
        }
        .hero-lead {
          color: var(--text-strong);
          font-size: 17px;
          line-height: 1.7;
          max-width: 62ch;
          margin: 0 auto;
          font-weight: 500;
        }

        /* CONTAINER */
        .contact-container {
          max-width: var(--max);
          margin: 28px auto;
          padding: 0 16px;
          display: grid;
          gap: 32px;
          grid-template-columns: 1fr;
        }
        @media(min-width: 1024px) {
          .contact-container { grid-template-columns: 1.2fr 1fr; }
        }

        /* FORM SECTION */
        .contact-form-section h2, .contact-info-section h2 {
          font-size: 20px;
          font-weight: 800;
          margin: 0 0 18px;
          color: var(--text-strong);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }
        .form-group.full { grid-column: 1 / -1; }

        .form-group label {
          font-weight: 700;
          margin-bottom: 6px;
          color: var(--text-strong);
          font-size: 14px;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 12px 14px;
          border: 1px solid rgba(15,23,42,0.1);
          border-radius: 10px;
          background: #fff;
          font-family: inherit;
          font-size: 15px;
          color: var(--text-strong);
          transition: border-color .14s ease, box-shadow .14s ease;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--accent1);
          box-shadow: 0 0 0 3px rgba(79,70,229,0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          align-self: flex-start;
          margin-top: 6px;
        }

        .form-note {
          color: var(--muted);
          font-size: 13px;
          margin: 0;
        }

        /* SUCCESS MESSAGE */
        .success-message {
          text-align: center;
          padding: 40px 28px;
          background: linear-gradient(180deg, #ecfdf5, #f0fdf4);
          border-radius: 12px;
          border: 1px solid rgba(34,197,94,0.2);
        }
        .success-icon {
          font-size: 48px;
          margin-bottom: 12px;
        }
        .success-message h3 {
          margin: 0 0 8px;
          font-size: 18px;
          font-weight: 800;
          color: #166534;
        }
        .success-message p {
          margin: 0;
          color: #15803d;
          font-size: 15px;
          line-height: 1.6;
        }

        /* INFO SECTION */
        .contact-info-section {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .contact-method {
          display: flex;
          gap: 14px;
          padding: 16px;
          background: linear-gradient(180deg, var(--card), #fff);
          border-radius: 12px;
          border: 1px solid rgba(15,23,42,0.04);
          box-shadow: 0 10px 30px rgba(16,24,40,0.04);
          transition: transform .14s ease;
        }
        .contact-method:hover { transform: translateY(-3px); }

        .method-icon {
          font-size: 32px;
          min-width: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .method-body { flex: 1; }
        .method-body h3 {
          margin: 0 0 4px;
          font-size: 16px;
          font-weight: 800;
          color: var(--text-strong);
        }
        .method-desc {
          margin: 0 0 8px;
          color: var(--muted);
          font-size: 13px;
        }
        .method-link {
          color: var(--accent1);
          text-decoration: none;
          font-weight: 700;
          font-size: 14px;
        }
        .method-link:hover { text-decoration: underline; }

        /* RESPONSE TIME */
        .response-time {
          display: flex;
          gap: 14px;
          padding: 16px;
          background: linear-gradient(135deg, rgba(79,70,229,0.05), rgba(6,182,212,0.05));
          border-radius: 12px;
          border: 1px solid rgba(79,70,229,0.1);
        }
        .rt-icon { font-size: 28px; min-width: 32px; }
        .response-time h4 {
          margin: 0 0 4px;
          font-size: 15px;
          font-weight: 800;
          color: var(--text-strong);
        }
        .response-time p {
          margin: 0;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.6;
        }

        /* BUTTON */
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 16px;
          border-radius: 10px;
          border: none;
          font-weight: 700;
          cursor: pointer;
          text-decoration: none;
          font-size: 15px;
          transition: all .14s ease;
        }
        .btn.primary {
          color: #fff;
          background: linear-gradient(90deg, var(--accent1), var(--accent2));
          box-shadow: var(--shadow);
        }
        .btn.primary:hover { transform: translateY(-2px); }
        .btn.primary:active { transform: translateY(0); }

        /* MOBILE */
        @media(max-width: 1023px) {
          .contact-container { grid-template-columns: 1fr; }
        }

        @media(max-width: 639px) {
          .contact-form { gap: 14px; }
          .form-group input,
          .form-group select,
          .form-group textarea { font-size: 16px; } /* prevents zoom on iOS */
        }

        :focus-visible { outline: 3px solid rgba(79,70,229,0.14); outline-offset: 3px; border-radius: 8px; }
      `}</style>
    </main>
  );
}

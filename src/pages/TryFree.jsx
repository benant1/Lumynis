import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TryFree() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    plan: "starter",
    agree: false,
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!form.name || !form.email || !form.agree) {
      setError("Veuillez renseigner votre nom, e‑mail et accepter les conditions.");
      return;
    }

    setLoading(true);
    // Simulation d'appel API
    setTimeout(() => {
      // enregistrer essai localement (remplacer par appel serveur réel)
      const trial = {
        id: Date.now(),
        ...form,
        startedAt: new Date().toISOString(),
        status: "active",
      };
      localStorage.setItem("trial", JSON.stringify(trial));
      setLoading(false);
      setSent(true);
    }, 900);
  };

  if (sent) {
    return (
      <main className="try-root" aria-labelledby="try-heading">
        <div className="try-inner">
          <h1 id="try-heading">Essai gratuit activé</h1>
          <p className="lead">Merci — votre essai gratuit a bien démarré. Nous vous avons envoyé un e‑mail de confirmation.</p>
          <div className="actions">
            <button className="btn" onClick={() => navigate("/")}>Retour à l'accueil</button>
            <button className="btn ghost" onClick={() => navigate("/contact")}>Nous contacter</button>
          </div>
        </div>

        <style>{`
          .try-root { font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial; padding:48px 16px; display:flex; justify-content:center; }
          .try-inner { max-width:760px; width:100%; background:#fff; padding:28px; border-radius:12px; border:1px solid rgba(0,0,0,0.06); box-shadow:0 18px 50px rgba(16,24,40,0.06); text-align:center; }
          h1 { margin:0 0 8px; font-size:22px; font-weight:900; color:#000; }
          .lead { margin:0 0 18px; color:#0f172a; font-size:16px; line-height:1.6; }
          .actions { display:flex; gap:12px; justify-content:center; margin-top:18px; }
          .btn { padding:10px 16px; border-radius:10px; font-weight:800; cursor:pointer; border:none; background:linear-gradient(90deg,#4f46e5,#06b6d4); color:#fff; }
          .btn.ghost { background:transparent; border:1px solid rgba(15,23,42,0.06); color:#0b1220; }
        `}</style>
      </main>
    );
  }

  return (
    <main className="try-root" aria-labelledby="try-heading">
      <div className="try-inner">
        <h1 id="try-heading">Essayer gratuitement — 14 jours</h1>
        <p className="lead">Testez nos services sans engagement. Aucune carte bancaire requise pour l’essai.</p>

        {error && <div className="error">{error}</div>}

        <form className="try-form" onSubmit={handleSubmit} aria-live="polite">
          <div className="row">
            <label>
              Nom complet *
              <input name="name" value={form.name} onChange={handleChange} required />
            </label>

            <label>
              E‑mail *
              <input type="email" name="email" value={form.email} onChange={handleChange} required />
            </label>
          </div>

          <div className="row">
            <label>
              Entreprise
              <input name="company" value={form.company} onChange={handleChange} />
            </label>

            <label>
              Téléphone
              <input name="phone" value={form.phone} onChange={handleChange} />
            </label>
          </div>

          <label className="full">
            Forfait souhaité
            <select name="plan" value={form.plan} onChange={handleChange}>
              <option value="starter">Starter — 1 projet</option>
              <option value="pro">Pro — multi‑projets</option>
              <option value="enterprise">Enterprise — sur‑mesure</option>
            </select>
          </label>

          <label className="agree">
            <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} />
            J'accepte que mes données soient utilisées pour activer l'essai (RGPD).
          </label>

          <div className="form-actions">
            <button type="submit" className="btn" disabled={loading}>
              {loading ? "Activation..." : "Démarrer l'essai gratuit"}
            </button>
            <button type="button" className="btn ghost" onClick={() => navigate("/contact")}>Parler à un conseiller</button>
          </div>
        </form>
      </div>

      <style>{`
        .try-root { font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial; padding:48px 16px; display:flex; justify-content:center; }
        .try-inner { max-width:760px; width:100%; background:#fff; padding:28px; border-radius:12px; border:1px solid rgba(0,0,0,0.06); box-shadow:0 18px 50px rgba(16,24,40,0.06); }
        h1 { margin:0 0 6px; font-size:22px; font-weight:900; color:#000; }
        .lead { margin:0 0 18px; color:#0f172a; font-size:16px; line-height:1.6; }
        .error { background:#fee2e2; color:#991b1b; padding:10px 12px; border-radius:8px; margin-bottom:12px; font-weight:700; }
        .try-form { display:flex; flex-direction:column; gap:12px; }
        .row { display:flex; gap:12px; }
        label { display:flex; flex-direction:column; flex:1; font-weight:700; font-size:13px; color:#0b1220; }
        input, select { margin-top:8px; padding:10px 12px; border-radius:10px; border:1px solid rgba(0,0,0,0.08); font-size:15px; }
        .full { width:100%; }
        .agree { display:flex; gap:10px; align-items:center; font-weight:600; margin-top:4px; }
        .form-actions { display:flex; gap:12px; margin-top:6px; }
        .btn { padding:10px 16px; border-radius:10px; font-weight:800; cursor:pointer; border:none; background:linear-gradient(90deg,#4f46e5,#06b6d4); color:#fff; }
        .btn.ghost { background:transparent; border:1px solid rgba(15,23,42,0.06); color:#0b1220; }
        @media(max-width:720px){ .row { flex-direction:column; } .form-actions { flex-direction:column; } }
      `}</style>
    </main>
  );
}
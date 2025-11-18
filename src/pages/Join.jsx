import React, { useState } from "react";

export default function Join() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    message: "",
    cv: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Merci ! Votre candidature a été envoyée avec succès.");
    console.log("Candidature:", formData);
  };

  const types = [
    "Emploi Tech",
    "Emploi Design",
    "Emploi Market",
    "Emploi Spirit",
    "Partenariat",
    "Bénévolat",
    "Stage",
    "Ambassadeur Lumynis"
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--gray-50)', padding: 'clamp(3rem, 8vw, 5rem) 1.5rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', marginBottom: '1rem' }}>
            👤 Rejoindre Lumynis
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--gray-600)' }}>
            Faites partie de l'aventure Lumynis
          </p>
        </div>

        <div className="card" style={{ padding: 'clamp(2rem, 5vw, 3rem)' }}>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                Nom complet *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  border: '2px solid var(--gray-200)',
                  borderRadius: 'var(--border-radius)',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  border: '2px solid var(--gray-200)',
                  borderRadius: 'var(--border-radius)',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                Téléphone *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  border: '2px solid var(--gray-200)',
                  borderRadius: 'var(--border-radius)',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                Type de candidature *
              </label>
              <select
                required
                value={formData.type}
                onChange={(e) => setFormData({...formData, type: e.target.value})}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  border: '2px solid var(--gray-200)',
                  borderRadius: 'var(--border-radius)',
                  fontSize: '1rem'
                }}
              >
                <option value="">Sélectionner...</option>
                {types.map((type, idx) => (
                  <option key={idx} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                Message / Motivation
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows="5"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  border: '2px solid var(--gray-200)',
                  borderRadius: 'var(--border-radius)',
                  fontSize: '1rem',
                  fontFamily: 'inherit'
                }}
              />
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                CV (PDF) *
              </label>
              <input
                type="file"
                required
                accept=".pdf"
                onChange={(e) => setFormData({...formData, cv: e.target.files[0]})}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  border: '2px solid var(--gray-200)',
                  borderRadius: 'var(--border-radius)',
                  fontSize: '1rem'
                }}
              />
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', fontSize: '1.125rem' }}>
              Envoyer ma candidature
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

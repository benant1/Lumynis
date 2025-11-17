import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Auth({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isSignup, setIsSignup] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Simulation API (remplacer par vrai backend)
    setTimeout(() => {
      if (isSignup && (!email || !password || !name)) {
        setError("Tous les champs sont requis");
        setLoading(false);
        return;
      }
      if (!isSignup && (!email || !password)) {
        setError("E-mail et mot de passe requis");
        setLoading(false);
        return;
      }

      // Sauvegarder dans localStorage
      localStorage.setItem("user", JSON.stringify({
        name: isSignup ? name : email.split("@")[0],
        email,
        loggedIn: true
      }));

      setLoading(false);

      // prévenir App.jsx que l'utilisateur est connecté
      if (typeof onLogin === "function") onLogin();

      // rediriger vers la page d'accueil
      navigate("/");
    }, 800);
  };

  return (
    <main className="auth-root">
      <div className="auth-container">
        <div className="auth-card">
          <h1 className="auth-title">
            {isSignup ? "Créer un compte" : "Se connecter"}
          </h1>
          <p className="auth-subtitle">
            {isSignup
              ? "Rejoignez Lumynis pour accéder aux ressources"
              : "Connectez-vous à votre compte"}
          </p>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit} className="auth-form">
            {isSignup && (
              <div className="form-group">
                <label htmlFor="name">Nom complet</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jean Dupont"
                  required={isSignup}
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="vous@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>

            <button type="submit" className="btn primary submit-btn" disabled={loading}>
              {loading ? "Chargement..." : isSignup ? "Créer mon compte" : "Se connecter"}
            </button>
          </form>

          <div className="auth-toggle">
            <p>
              {isSignup ? "Déjà inscrit ?" : "Pas encore inscrit ?"}
              <button
                type="button"
                className="toggle-btn"
                onClick={() => {
                  setIsSignup(!isSignup);
                  setError("");
                }}
              >
                {isSignup ? "Se connecter" : "Créer un compte"}
              </button>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .auth-root {
          font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background: linear-gradient(135deg, #f8fbff, #ffffff);
          padding: 20px;
        }

        .auth-container {
          width: 100%;
          max-width: 420px;
        }

        .auth-card {
          background: #ffffff;
          border-radius: 14px;
          border: 1px solid rgba(0,0,0,0.08);
          padding: 40px 28px;
          box-shadow: 0 20px 60px rgba(16,24,40,0.08);
        }

        .auth-title {
          font-size: 24px;
          font-weight: 900;
          margin: 0 0 8px;
          color: #000000;
        }

        .auth-subtitle {
          font-size: 15px;
          color: #333333;
          margin: 0 0 24px;
          line-height: 1.6;
        }

        .error-message {
          background: #fee2e2;
          border: 1px solid #fca5a5;
          color: #991b1b;
          padding: 12px 14px;
          border-radius: 10px;
          margin-bottom: 20px;
          font-size: 14px;
          font-weight: 600;
        }

        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 24px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          font-weight: 800;
          margin-bottom: 8px;
          color: #000000;
          font-size: 14px;
        }

        .form-group input {
          padding: 12px 14px;
          border: 1.5px solid rgba(0,0,0,0.12);
          border-radius: 10px;
          background: #ffffff;
          font-family: inherit;
          font-size: 16px;
          color: #000000;
          line-height: 1.6;
          transition: border-color .14s ease, box-shadow .14s ease;
        }

        .form-group input::placeholder {
          color: #888888;
        }

        .form-group input:focus {
          outline: none;
          border-color: #4f46e5;
          box-shadow: 0 0 0 3px rgba(79,70,229,0.15);
        }

        .submit-btn {
          margin-top: 8px;
          padding: 12px 16px;
          min-height: 44px;
          font-size: 16px;
          font-weight: 800;
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .auth-toggle {
          text-align: center;
          padding-top: 20px;
          border-top: 1px solid rgba(0,0,0,0.08);
        }

        .auth-toggle p {
          margin: 0;
          font-size: 14px;
          color: #333333;
        }

        .toggle-btn {
          background: none;
          border: none;
          color: #4f46e5;
          font-weight: 800;
          cursor: pointer;
          text-decoration: none;
          margin-left: 6px;
          font-size: 14px;
        }

        .toggle-btn:hover {
          text-decoration: underline;
        }

        @media(max-width: 639px) {
          .auth-card {
            padding: 28px 20px;
          }
          .auth-title {
            font-size: 20px;
          }
        }
      `}</style>
    </main>
  );
}
import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";

export default function Navbar({ onLogout }) {
  const [open, setOpen] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);
  const location = useLocation();

  // Changer de couleur toutes les 10 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex(prev => (prev + 1) % colors.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    function onKey(e) { if (e.key === "Escape") setOpen(false); }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const linkClass = ({ isActive }) =>
    "navbar-link " + (isActive ? "active" : "");

  const colors = [
    { bg: "rgba(255,255,255,0.72)", gradient: "linear-gradient(90deg, #4f46e5, #06b6d4)" },
    { bg: "rgba(255,240,245,0.72)", gradient: "linear-gradient(90deg, #ec4899, #f43f5e)" },
    { bg: "rgba(240,253,250,0.72)", gradient: "linear-gradient(90deg, #10b981, #14b8a6)" },
    { bg: "rgba(255,250,235,0.72)", gradient: "linear-gradient(90deg, #f59e0b, #f97316)" },
    { bg: "rgba(243,232,255,0.72)", gradient: "linear-gradient(90deg, #8b5cf6, #a78bfa)" },
  ];

  const currentColor = colors[colorIndex];

  return (
    <>
      <header className="navbar-root" style={{ background: currentColor.bg }} role="banner" aria-label="Barre de navigation">
        <div className="navbar-inner">
          <div className="navbar-left">
            <Link to="/" className="nav-brand" aria-label="Accueil">
              <img src={Logo} alt="Lumynis" className="nav-logo" />
              <span className="nav-brand-text">Lumynis</span>
            </Link>
          </div>

          <nav className="navbar-center" aria-label="Navigation principale">
            <NavLink to="/" className={linkClass}>Accueil</NavLink>
            <NavLink to="/about" className={linkClass}>À propos</NavLink>
            <NavLink to="/services" className={linkClass}>Services</NavLink>
            <NavLink to="/blog" className={linkClass}>Blog</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
            <NavLink to="/Marketplace" className={linkClass}>Marketplace</NavLink>
          </nav>

          <div className="navbar-right">
            <Link to="/try" className="btn primary" style={{ background: currentColor.gradient }}>Essayer gratuitement</Link>

            <button
              aria-label="Ouvrir le menu"
              aria-expanded={open}
              onClick={() => setOpen(v => !v)}
              className="navbar-hamburger"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        <div className={`navbar-mobile ${open ? "open" : ""}`} role="menu" aria-label="Menu mobile">
          <NavLink to="/" className={linkClass} onClick={() => setOpen(false)}>Accueil</NavLink>
          <NavLink to="/about" className={linkClass} onClick={() => setOpen(false)}>À propos</NavLink>
          <NavLink to="/services" className={linkClass} onClick={() => setOpen(false)}>Services</NavLink>
          <NavLink to="/blog" className={linkClass} onClick={() => setOpen(false)}>Blog</NavLink>
          <NavLink to="/contact" className={linkClass} onClick={() => setOpen(false)}>Contact</NavLink>
          <NavLink to="/Marketplace" className={linkClass} onClick={() => setOpen(false)}>Marketplace</NavLink>
          <Link to="/try" className="btn primary" style={{ background: currentColor.gradient }} onClick={() => setOpen(false)}>Essayer gratuitement</Link>
        </div>
      </header>

      <style>{`
        :root {
          --bg: #ffffff;
          --muted: #6b7280;
          --accent-1: #6366f1;
          --accent-2: #60a5fa;
          --glass: rgba(255,255,255,0.72);
          --shadow: 0 10px 30px rgba(16,24,40,0.08);
          --radius: 10px;
        }

        .navbar-root {
          position: sticky;
          top: 0;
          z-index: 60;
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          border-bottom: 1px solid rgba(15,23,42,0.04);
          box-shadow: var(--shadow);
          transition: background 0.8s ease-in-out;
        }

        .navbar-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 12px 20px;
          display: flex;
          gap: 16px;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-left { display: flex; align-items: center; }

        .nav-brand {
          display: flex;
          gap: 8px;
          align-items: center;
          text-decoration: none;
          color: inherit;
          transition: opacity .14s ease;
        }
        .nav-brand:hover { opacity: 0.8; }

        .nav-logo {
          width: 36px;
          height: 36px;
          object-fit: contain;
          display: block;
          flex-shrink: 0;
        }

        .nav-brand-text {
          font-weight: 800;
          font-size: 14px;
          color: #0b1220;
          letter-spacing: -0.01em;
        }

        /* Center nav (desktop) */
        .navbar-center { display: none; gap: 12px; align-items: center; }
        .navbar-link {
          position: relative;
          padding: 8px 10px;
          color: #374151;
          text-decoration: none;
          font-weight: 500;
          font-size: 14px;
          transition: color .18s ease;
        }
        .navbar-link:hover { color: #0f172a; }
        .navbar-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          height: 3px;
          width: 0%;
          background: linear-gradient(90deg, var(--accent-1), var(--accent-2));
          border-radius: 3px;
          transition: width .22s ease;
        }
        .navbar-link:hover::after { width: 50%; }
        .navbar-link.active::after { width: 100%; }

        /* Right side */
        .navbar-right { display: flex; gap: 10px; align-items: center; }

        .btn.primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 14px;
          border-radius: 10px;
          color: white;
          text-decoration: none;
          font-weight: 700;
          box-shadow: 0 10px 26px rgba(99,102,241,0.12);
          border: none;
          cursor: pointer;
          font-size: 14px;
          transition: all 0.8s ease-in-out;
        }
        .btn.primary:hover { filter: brightness(1.03); transform: translateY(-1px); transition: transform .12s; }

        .navbar-hamburger {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
          border-radius: 8px;
          background: transparent;
          border: 0;
          color: #374151;
          cursor: pointer;
        }
        .navbar-hamburger:hover { background: rgba(15,23,42,0.03); }

        /* Mobile menu (hidden by default) */
        .navbar-mobile {
          display: none;
          max-width: 1200px;
          margin: 0 auto;
          padding: 12px 20px 20px;
          border-top: 1px solid rgba(15,23,42,0.03);
          background: linear-gradient(180deg, rgba(255,255,255,0.98), rgba(255,255,255,0.96));
          gap: 10px;
          box-shadow: none;
          flex-direction: column;
        }
        .navbar-mobile.open { display: flex; animation: slideDown .16s ease; }
        .navbar-mobile .navbar-link { padding: 10px 8px; font-size: 15px; }

        @keyframes slideDown { from { transform: translateY(-6px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }

        /* Responsive */
        @media (min-width: 768px) {
          .navbar-center { display: flex; }
          .navbar-hamburger { display: none; }
          .navbar-mobile { display: none !important; }
        }

        /* Hide brand text on mobile */
        @media (max-width: 640px) {
          .nav-brand-text { display: none; }
          .nav-logo { width: 32px; height: 32px; }
        }

        /* Accessibility focus */
        .navbar-link:focus, .btn.primary:focus, .navbar-hamburger:focus {
          outline: 3px solid rgba(99,102,241,0.14);
          outline-offset: 3px;
          border-radius: 8px;
        }

        /* Small polish for very small screens */
        @media (max-width: 420px) {
          .nav-logo { width: 28px; height: 28px; }
          .btn.primary { padding: 8px 12px; font-size: 12px; }
        }

      `}</style>
    </>
  );
}
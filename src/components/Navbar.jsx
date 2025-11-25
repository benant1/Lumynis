import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [divisionsOpen, setDivisionsOpen] = useState(false);

  // Définir colors AVANT les useEffect
  const colors = [
    { bg: "rgba(255,255,255,0.72)", gradient: "linear-gradient(90deg, #4f46e5, #06b6d4)" },
    { bg: "rgba(255,240,245,0.72)", gradient: "linear-gradient(90deg, #ec4899, #f43f5e)" },
    { bg: "rgba(240,253,250,0.72)", gradient: "linear-gradient(90deg, #10b981, #14b8a6)" },
    { bg: "rgba(255,250,235,0.72)", gradient: "linear-gradient(90deg, #f59e0b, #f97316)" },
    { bg: "rgba(243,232,255,0.72)", gradient: "linear-gradient(90deg, #8b5cf6, #a78bfa)" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => {
        const newIndex = (prev + 1) % colors.length;
        // Envoyer un événement pour synchroniser avec Home
        window.dispatchEvent(new CustomEvent('navbarColorChange', { detail: { colorIndex: newIndex } }));
        return newIndex;
      });
    }, 10000);
    return () => clearInterval(interval);
  }, [colors.length]);

  useEffect(() => {
    const handleLocationChange = () => setOpen(false);
    // Écouter les changements de location
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  useEffect(() => {
    function onKey(e) { 
      if (e.key === "Escape") setOpen(false);
      // Ctrl+K pour focus sur la recherche
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        document.getElementById("navbar-search")?.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const handleVoiceSearch = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert("La reconnaissance vocale n'est pas supportée par votre navigateur");
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.lang = 'fr-FR';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearchQuery(transcript);
      setIsListening(false);
    };

    recognition.onerror = () => {
      setIsListening(false);
      alert("Erreur lors de la reconnaissance vocale");
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Recherche:", searchQuery);
      // Ajouter ici la logique de recherche
    }
  };

  const linkClass = ({ isActive }) =>
    "navbar-link " + (isActive ? "active" : "");

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
            <div className="dropdown-wrapper" onMouseEnter={() => setDivisionsOpen(true)} onMouseLeave={() => setDivisionsOpen(false)}>
              <button className="navbar-link dropdown-trigger">
                Divisions
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px', transition: 'transform 0.2s', transform: divisionsOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
              {divisionsOpen && (
                <div className="dropdown-menu">
                  <NavLink to="/tech" className="dropdown-item" onClick={() => setDivisionsOpen(false)}>
                    <span className="dropdown-icon" style={{background: 'linear-gradient(135deg, #4F46E5, #06B6D4)'}}>💻</span>
                    <div>
                      <div className="dropdown-item-title">Lumynis Tech</div>
                      <div className="dropdown-item-desc">Innovation & Technologie</div>
                    </div>
                  </NavLink>
                  <NavLink to="/design" className="dropdown-item" onClick={() => setDivisionsOpen(false)}>
                    <span className="dropdown-icon" style={{background: 'linear-gradient(135deg, #EC4899, #8B5CF6)'}}>🎨</span>
                    <div>
                      <div className="dropdown-item-title">Lumynis Design</div>
                      <div className="dropdown-item-desc">Création & Design</div>
                    </div>
                  </NavLink>
                  <NavLink to="/market" className="dropdown-item" onClick={() => { setDivisionsOpen(false); console.log('Navbar: navigate to /market'); }}>
                    <span className="dropdown-icon" style={{background: 'linear-gradient(135deg, #10B981, #14B8A6)'}}>🛒</span>
                    <div>
                      <div className="dropdown-item-title">Lumynis Market</div>
                      <div className="dropdown-item-desc">E-commerce & Marketplace</div>
                    </div>
                  </NavLink>
                  <NavLink to="/spirit" className="dropdown-item" onClick={() => setDivisionsOpen(false)}>
                    <span className="dropdown-icon" style={{background: 'linear-gradient(135deg, #8B5CF6, #A78BFA)'}}>✨</span>
                    <div>
                      <div className="dropdown-item-title">Lumynis Spirit</div>
                      <div className="dropdown-item-desc">Développement Personnel</div>
                    </div>
                  </NavLink>
                </div>
              )}
            </div>
            <NavLink to="/services" className={linkClass}>Services</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          </nav>

          <div className="navbar-right">
            <form onSubmit={handleSearchSubmit} className="navbar-search-form desktop-search">
              <div className="search-input-wrapper">
                <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                </svg>
                <input
                  id="navbar-search"
                  type="text"
                  placeholder="Rechercher..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
                <button
                  type="button"
                  onClick={handleVoiceSearch}
                  className={`voice-btn ${isListening ? 'listening' : ''}`}
                  title="Recherche vocale"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                    <line x1="12" x2="12" y1="19" y2="22"/>
                  </svg>
                </button>
              </div>
            </form>

            <form onSubmit={handleSearchSubmit} className="mobile-search-inline">
              <button
                type="button"
                onClick={handleVoiceSearch}
                className={`voice-btn-mobile ${isListening ? 'listening' : ''}`}
                title="Recherche vocale"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                  <line x1="12" x2="12" y1="19" y2="22"/>
                </svg>
              </button>
            </form>

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
          <form onSubmit={handleSearchSubmit} className="mobile-search-form">
            <div className="search-input-wrapper">
              <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <button
                type="button"
                onClick={handleVoiceSearch}
                className={`voice-btn ${isListening ? 'listening' : ''}`}
                title="Recherche vocale"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                  <line x1="12" x2="12" y1="19" y2="22"/>
                </svg>
              </button>
            </div>
          </form>
          
          <NavLink to="/" className={linkClass} onClick={() => setOpen(false)}>Accueil</NavLink>
          <NavLink to="/about" className={linkClass} onClick={() => setOpen(false)}>À propos</NavLink>
          
          <div className="mobile-section-title">Nos Divisions</div>
          <NavLink to="/tech" className={linkClass} onClick={() => setOpen(false)}>💻 Lumynis Tech</NavLink>
          <NavLink to="/design" className={linkClass} onClick={() => setOpen(false)}>🎨 Lumynis Design</NavLink>
          <NavLink to="/market" className={linkClass} onClick={() => { setOpen(false); console.log('Navbar: navigate to /market (mobile)'); }}>🛒 Lumynis Market</NavLink>
          <NavLink to="/spirit" className={linkClass} onClick={() => setOpen(false)}>✨ Lumynis Spirit</NavLink>
          
          <div className="mobile-section-title">Navigation</div>
          <NavLink to="/services" className={linkClass} onClick={() => setOpen(false)}>Services</NavLink>
          <NavLink to="/contact" className={linkClass} onClick={() => setOpen(false)}>Contact</NavLink>
          <NavLink to="/blog" className={linkClass} onClick={() => setOpen(false)}>Blog</NavLink>
          <NavLink to="/innovation" className={linkClass} onClick={() => setOpen(false)}>✨ Innovation & Projets</NavLink>
          <NavLink to="/portfolio" className={linkClass} onClick={() => setOpen(false)}>🎨 Portfolio Design</NavLink>
          
          <div className="mobile-section-title">Outils & Support</div>
          <NavLink to="/assistant" className={linkClass} onClick={() => setOpen(false)}>🤖 Assistant IA</NavLink>
          <NavLink to="/marketplace" className={linkClass} onClick={() => setOpen(false)}>🛍️ Marketplace</NavLink>
          <NavLink to="/support" className={linkClass} onClick={() => setOpen(false)}>📞 Centre d'Assistance</NavLink>
          
          <div className="mobile-section-title">Compte</div>
          <NavLink to="/member" className={linkClass} onClick={() => setOpen(false)}>👤 Espace Membre</NavLink>
          <NavLink to="/join" className={linkClass} onClick={() => setOpen(false)}>🚀 Rejoindre Lumynis</NavLink>
          <NavLink to="/admin" className={linkClass} onClick={() => setOpen(false)}>🔐 Admin</NavLink>
          
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
        .navbar-center { 
          display: none; 
          gap: 8px; 
          align-items: center; 
          flex-wrap: wrap;
        }
        
        .navbar-search-form {
          flex-shrink: 0;
          width: 220px;
        }

        .search-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          background: rgba(255,255,255,0.9);
          border: 2px solid rgba(15,23,42,0.08);
          border-radius: 10px;
          padding: 6px 10px;
          gap: 6px;
          transition: all .2s ease;
        }

        .search-input-wrapper:focus-within {
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102,126,234,0.15);
          background: white;
        }

        .search-icon {
          color: #6b7280;
          flex-shrink: 0;
        }

        .search-input {
          flex: 1;
          border: none;
          outline: none;
          background: transparent;
          font-size: 13px;
          color: #0f172a;
          min-width: 0;
        }

        .search-input::placeholder {
          color: #9ca3af;
        }

        .voice-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6px;
          border-radius: 8px;
          background: transparent;
          border: none;
          color: #6b7280;
          cursor: pointer;
          transition: all .2s ease;
          flex-shrink: 0;
        }

        .voice-btn:hover {
          background: rgba(102,126,234,0.1);
          color: #667eea;
        }

        .voice-btn.listening {
          background: rgba(239,68,68,0.1);
          color: #ef4444;
          animation: pulse 1.5s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .navbar-link {
          position: relative;
          padding: 8px 8px;
          color: #374151;
          text-decoration: none;
          font-weight: 500;
          font-size: 13.5px;
          transition: color .18s ease;
          white-space: nowrap;
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

        .mobile-search-inline {
          display: none;
        }

        .voice-btn-mobile {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
          border-radius: 8px;
          background: rgba(255,255,255,0.9);
          border: 2px solid rgba(15,23,42,0.08);
          color: #6b7280;
          cursor: pointer;
          transition: all .2s ease;
        }

        .voice-btn-mobile:hover {
          background: white;
          border-color: #667eea;
          color: #667eea;
        }

        .voice-btn-mobile.listening {
          background: rgba(239,68,68,0.1);
          border-color: #ef4444;
          color: #ef4444;
          animation: pulse 1.5s ease-in-out infinite;
        }

        .btn.primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 14px;
          border-radius: 12px;
          color: white;
          text-decoration: none;
          font-weight: 700;
          box-shadow: 0 10px 26px rgba(102,126,234,0.25);
          border: none;
          cursor: pointer;
          font-size: 14px;
          transition: all 0.8s ease-in-out;
        }
        .btn.primary:hover { filter: brightness(1.05); transform: translateY(-2px); box-shadow: 0 15px 35px rgba(102,126,234,0.3); transition: transform .2s; }

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

        .mobile-search-form {
          width: 100%;
          margin-bottom: 8px;
        }

        @keyframes slideDown { from { transform: translateY(-6px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }

        /* Responsive */
        @media (min-width: 768px) {
          .navbar-center { display: flex; }
          .navbar-hamburger { display: none; }
          .navbar-mobile { display: none !important; }
          .desktop-search { display: block; }
        }

        @media (max-width: 768px) {
          .navbar-search-form {
            display: none;
          }
          
          .mobile-search-inline {
            display: block;
          }
          
          .navbar-inner {
            padding: 10px 16px;
          }
          
          .btn.primary {
            padding: 8px 12px;
            font-size: 13px;
          }
        }

        /* Hide brand text on mobile */
        @media (max-width: 640px) {
          .nav-brand-text { display: none; }
          .nav-logo { width: 32px; height: 32px; }
        }

        /* Accessibility focus */
        .navbar-link:focus, .btn.primary:focus, .navbar-hamburger:focus {
          outline: 3px solid rgba(102,126,234,0.2);
          outline-offset: 3px;
          border-radius: 8px;
        }

        /* Dropdown styles */
        .dropdown-wrapper {
          position: relative;
          display: inline-block;
        }

        .dropdown-trigger {
          display: flex;
          align-items: center;
          background: transparent;
          border: none;
          cursor: pointer;
          font-family: inherit;
        }

        .dropdown-menu {
          position: absolute;
          top: calc(100% + 12px);
          left: 50%;
          transform: translateX(-50%);
          background: white;
          border-radius: 12px;
          box-shadow: 0 20px 40px rgba(15,23,42,0.12), 0 0 0 1px rgba(15,23,42,0.04);
          padding: 8px;
          min-width: 280px;
          animation: dropdownSlide 0.2s ease;
          z-index: 100;
        }

        @keyframes dropdownSlide {
          from { opacity: 0; transform: translateX(-50%) translateY(-8px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }

        .dropdown-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          border-radius: 8px;
          text-decoration: none;
          color: #374151;
          transition: all 0.15s ease;
        }

        .dropdown-item:hover {
          background: rgba(102,126,234,0.08);
          color: #0f172a;
        }

        .dropdown-item.active {
          background: rgba(102,126,234,0.12);
          color: #667eea;
        }

        .dropdown-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          flex-shrink: 0;
        }

        .dropdown-item-title {
          font-weight: 600;
          font-size: 14px;
          color: #0f172a;
        }

        .dropdown-item-desc {
          font-size: 12px;
          color: #6b7280;
          margin-top: 2px;
        }

        .mobile-section-title {
          font-weight: 700;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #9ca3af;
          margin-top: 16px;
          margin-bottom: 8px;
          padding: 0 8px;
        }

        .mobile-section-title:first-child {
          margin-top: 0;
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
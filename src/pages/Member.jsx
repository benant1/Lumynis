import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Member() {
  const [colorIndex, setColorIndex] = useState(0);
  const [user, setUser] = useState({ name: 'Utilisateur', email: 'user@lumynis.com', level: 'Silver', points: 1250 });
  const [notifications, setNotifications] = useState([
    { id: 1, text: "Bienvenue sur votre espace membre!", time: "Il y a 2h", unread: true },
    { id: 2, text: "Nouveau badge débloqué: Explorateur", time: "Il y a 1j", unread: true },
    { id: 3, text: "Votre commande #1234 a été livrée", time: "Il y a 3j", unread: false }
  ]);
  const [activeTab, setActiveTab] = useState('dashboard');

  // Synchroniser avec Navbar
  useEffect(() => {
    const handleColorChange = (e) => {
      setColorIndex(e.detail.colorIndex);
    };
    
    window.addEventListener('navbarColorChange', handleColorChange);
    return () => window.removeEventListener('navbarColorChange', handleColorChange);
  }, []);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user')) || user;
    setUser(savedUser);
  }, []);

  const colors = [
    { bg: 'rgba(255,255,255,0.72)', accent: '#4f46e5', gradient: 'linear-gradient(135deg, #4f46e5, #06b6d4)', light: 'rgba(79, 70, 229, 0.08)' },
    { bg: 'rgba(255,240,245,0.72)', accent: '#ec4899', gradient: 'linear-gradient(135deg, #ec4899, #f43f5e)', light: 'rgba(236, 72, 153, 0.08)' },
    { bg: 'rgba(240,253,250,0.72)', accent: '#10b981', gradient: 'linear-gradient(135deg, #10b981, #14b8a6)', light: 'rgba(16, 185, 129, 0.08)' },
    { bg: 'rgba(255,250,235,0.72)', accent: '#f59e0b', gradient: 'linear-gradient(135deg, #f59e0b, #f97316)', light: 'rgba(245, 158, 11, 0.08)' },
    { bg: 'rgba(243,232,255,0.72)', accent: '#8b5cf6', gradient: 'linear-gradient(135deg, #8b5cf6, #a78bfa)', light: 'rgba(139, 92, 246, 0.08)' },
  ];

  const currentColor = colors[colorIndex];

  const badges = [
    { name: "Pionnier", icon: "🏆", unlocked: true, desc: "Premier membre" },
    { name: "Explorateur", icon: "🧭", unlocked: true, desc: "5 pages visitées" },
    { name: "Actif", icon: "⚡", unlocked: true, desc: "7 jours consécutifs" },
    { name: "Expert", icon: "💎", unlocked: false, desc: "1000 points requis" },
    { name: "Leader", icon: "👑", unlocked: false, desc: "Niveau Gold" },
    { name: "Visionnaire", icon: "🔮", unlocked: false, desc: "20 formations" }
  ];

  const activities = [
    { action: "Connexion à votre espace", date: "Aujourd'hui 14:30", icon: "🔐" },
    { action: "Téléchargement: Guide Entrepreneuriat", date: "Hier 16:45", icon: "📥" },
    { action: "Participation: Formation IA", date: "23 Nov 2024", icon: "🎓" },
    { action: "Achat: Pack Design Pro", date: "20 Nov 2024", icon: "🛍️" },
    { action: "Badge débloqué: Explorateur", date: "18 Nov 2024", icon: "⭐" }
  ];

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: currentColor.bg,
      backdropFilter: 'blur(6px)',
      padding: 'clamp(1.5rem, 3vw, 3rem) 1.5rem',
      transition: 'background 0.8s ease-in-out'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Header avec profil */}
        <div style={{ 
          background: `linear-gradient(135deg, ${currentColor.accent}15, ${currentColor.accent}08)`,
          borderRadius: '24px',
          padding: 'clamp(2rem, 4vw, 3rem)',
          marginBottom: '2rem',
          color: '#1a1a1a',
          boxShadow: `0 10px 40px ${currentColor.accent}10`,
          border: `1px solid ${currentColor.accent}20`,
          backdropFilter: 'blur(10px)',
          transition: 'all 0.8s ease-in-out'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{ 
              width: '100px', 
              height: '100px', 
              borderRadius: '20px', 
              background: 'rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)',
              border: '3px solid rgba(255,255,255,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '3rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
            }}>
              👤
            </div>
            <div style={{ flex: 1 }}>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginBottom: '0.5rem', fontWeight: '900', letterSpacing: '-0.025em' }}>
                Bienvenue, {user.name} 👋
              </h1>
              <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', opacity: 0.9, fontWeight: '500' }}>
                {user.email} • Membre depuis Nov 2024
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <div style={{ 
                background: 'rgba(255,255,255,0.2)', 
                padding: '1.25rem 1.75rem', 
                borderRadius: '16px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.3)',
                textAlign: 'center',
                minWidth: '100px'
              }}>
                <div style={{ fontSize: '2.25rem', fontWeight: '900' }}>{user.points}</div>
                <div style={{ fontSize: '0.875rem', opacity: 0.9, fontWeight: '600' }}>Points</div>
              </div>
              <div style={{ 
                background: 'rgba(255,255,255,0.2)', 
                padding: '1.25rem 1.75rem', 
                borderRadius: '16px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.3)',
                textAlign: 'center',
                minWidth: '100px'
              }}>
                <div style={{ fontSize: '2.25rem', fontWeight: '900' }}>{user.level}</div>
                <div style={{ fontSize: '0.875rem', opacity: 0.9, fontWeight: '600' }}>Niveau</div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation par onglets */}
        <div style={{ 
          display: 'flex', 
          gap: '0.75rem', 
          marginBottom: '2rem', 
          flexWrap: 'wrap',
          background: 'rgba(255,255,255,0.7)',
          backdropFilter: 'blur(10px)',
          padding: '1rem',
          borderRadius: '16px',
          boxShadow: `0 4px 20px ${currentColor.accent}10`,
          transition: 'all 0.8s ease-in-out'
        }}>
          {['dashboard', 'activite', 'badges', 'notifications', 'parametres'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '0.875rem 1.5rem',
                background: activeTab === tab ? currentColor.gradient : 'rgba(255,255,255,0.5)',
                color: activeTab === tab ? 'white' : '#0f172a',
                border: activeTab === tab ? 'none' : `2px solid ${currentColor.accent}20`,
                borderRadius: '12px',
                fontWeight: '700',
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: activeTab === tab ? `0 8px 20px ${currentColor.accent}30` : 'none'
              }}
              onMouseOver={(e) => {
                if (activeTab !== tab) {
                  e.target.style.background = currentColor.light;
                  e.target.style.transform = 'translateY(-2px)';
                }
              }}
              onMouseOut={(e) => {
                if (activeTab !== tab) {
                  e.target.style.background = 'rgba(255,255,255,0.5)';
                  e.target.style.transform = 'translateY(0)';
                }
              }}
            >
              {tab === 'dashboard' && '📊 Tableau de bord'}
              {tab === 'activite' && '📜 Activité'}
              {tab === 'badges' && '⭐ Badges'}
              {tab === 'notifications' && `🔔 Notifications ${notifications.filter(n => n.unread).length > 0 ? `(${notifications.filter(n => n.unread).length})` : ''}`}
              {tab === 'parametres' && '⚙️ Paramètres'}
            </button>
          ))}
        </div>

        {/* Contenu selon l'onglet */}
        {activeTab === 'dashboard' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            
            {/* Statistiques */}
            <div style={{ 
              background: 'rgba(255,255,255,0.8)', 
              backdropFilter: 'blur(10px)',
              padding: '2rem', 
              borderRadius: '20px',
              boxShadow: `0 8px 30px ${currentColor.accent}10`,
              border: `1px solid ${currentColor.accent}10`,
              transition: 'all 0.8s ease-in-out'
            }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: '800', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                📈 Vos statistiques
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ 
                  padding: '1.25rem', 
                  background: currentColor.light, 
                  borderRadius: '14px', 
                  textAlign: 'center',
                  border: `1px solid ${currentColor.accent}15`,
                  transition: 'all 0.8s ease-in-out'
                }}>
                  <div style={{ fontSize: '2.25rem', fontWeight: '900', color: currentColor.accent }}>12</div>
                  <div style={{ fontSize: '0.875rem', color: '#475569', fontWeight: '600', marginTop: '0.25rem' }}>Formations</div>
                </div>
                <div style={{ 
                  padding: '1.25rem', 
                  background: currentColor.light, 
                  borderRadius: '14px', 
                  textAlign: 'center',
                  border: `1px solid ${currentColor.accent}15`,
                  transition: 'all 0.8s ease-in-out'
                }}>
                  <div style={{ fontSize: '2.25rem', fontWeight: '900', color: currentColor.accent }}>5</div>
                  <div style={{ fontSize: '0.875rem', color: '#475569', fontWeight: '600', marginTop: '0.25rem' }}>Achats</div>
                </div>
                <div style={{ 
                  padding: '1.25rem', 
                  background: currentColor.light, 
                  borderRadius: '14px', 
                  textAlign: 'center',
                  border: `1px solid ${currentColor.accent}15`,
                  transition: 'all 0.8s ease-in-out'
                }}>
                  <div style={{ fontSize: '2.25rem', fontWeight: '900', color: currentColor.accent }}>18</div>
                  <div style={{ fontSize: '0.875rem', color: '#475569', fontWeight: '600', marginTop: '0.25rem' }}>Jours actif</div>
                </div>
                <div style={{ 
                  padding: '1.25rem', 
                  background: currentColor.light, 
                  borderRadius: '14px', 
                  textAlign: 'center',
                  border: `1px solid ${currentColor.accent}15`,
                  transition: 'all 0.8s ease-in-out'
                }}>
                  <div style={{ fontSize: '2.25rem', fontWeight: '900', color: currentColor.accent }}>3</div>
                  <div style={{ fontSize: '0.875rem', color: '#475569', fontWeight: '600', marginTop: '0.25rem' }}>Badges</div>
                </div>
              </div>
            </div>

            {/* Activité récente */}
            <div style={{ 
              background: 'rgba(255,255,255,0.8)', 
              backdropFilter: 'blur(10px)',
              padding: '2rem', 
              borderRadius: '20px',
              boxShadow: `0 8px 30px ${currentColor.accent}10`,
              border: `1px solid ${currentColor.accent}10`,
              transition: 'all 0.8s ease-in-out'
            }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: '800', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                📜 Activité récente
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {activities.slice(0, 5).map((activity, i) => (
                  <div key={i} style={{ 
                    padding: '1rem', 
                    background: currentColor.light,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    border: `1px solid ${currentColor.accent}10`,
                    transition: 'all 0.3s'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateX(5px)';
                    e.currentTarget.style.boxShadow = `0 4px 12px ${currentColor.accent}15`;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  >
                    <div style={{ fontSize: '1.75rem' }}>{activity.icon}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: '600', color: '#0f172a', fontSize: '0.95rem' }}>{activity.action}</div>
                      <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.25rem' }}>{activity.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Badges */}
            <div style={{ 
              background: 'rgba(255,255,255,0.8)', 
              backdropFilter: 'blur(10px)',
              padding: '2rem', 
              borderRadius: '20px',
              boxShadow: `0 8px 30px ${currentColor.accent}10`,
              border: `1px solid ${currentColor.accent}10`,
              gridColumn: 'span 1',
              transition: 'all 0.8s ease-in-out'
            }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: '800', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                ⭐ Vos badges
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '1rem' }}>
                {badges.map((badge, i) => (
                  <div key={i} style={{ 
                    padding: '1.25rem 0.75rem', 
                    background: badge.unlocked ? currentColor.gradient : 'rgba(148,163,184,0.1)',
                    borderRadius: '14px',
                    textAlign: 'center',
                    opacity: badge.unlocked ? 1 : 0.5,
                    border: badge.unlocked ? 'none' : '2px dashed #cbd5e1',
                    transition: 'all 0.3s',
                    cursor: 'pointer'
                  }}
                  onMouseOver={(e) => {
                    if (badge.unlocked) {
                      e.currentTarget.style.transform = 'scale(1.05) translateY(-5px)';
                      e.currentTarget.style.boxShadow = `0 12px 30px ${currentColor.accent}30`;
                    }
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'scale(1) translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  title={badge.desc}
                  >
                    <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{badge.icon}</div>
                    <div style={{ fontSize: '0.8rem', fontWeight: '700', color: badge.unlocked ? 'white' : '#64748b' }}>{badge.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'activite' && (
          <div style={{ 
            background: 'rgba(255,255,255,0.8)', 
            backdropFilter: 'blur(10px)',
            padding: '2rem', 
            borderRadius: '20px',
            boxShadow: `0 8px 30px ${currentColor.accent}10`,
            border: `1px solid ${currentColor.accent}10`,
            transition: 'all 0.8s ease-in-out'
          }}>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', fontWeight: '800', color: '#0f172a' }}>
              📜 Historique complet
            </h3>
            {activities.map((activity, i) => (
              <div key={i} style={{ 
                padding: '1.25rem', 
                background: currentColor.light,
                borderRadius: '14px',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                border: `1px solid ${currentColor.accent}10`,
                transition: 'all 0.3s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateX(8px)';
                e.currentTarget.style.boxShadow = `0 6px 20px ${currentColor.accent}20`;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <div style={{ fontSize: '2rem' }}>{activity.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: '700', color: '#0f172a', fontSize: '1rem' }}>{activity.action}</div>
                  <div style={{ fontSize: '0.875rem', color: '#64748b', marginTop: '0.35rem' }}>{activity.date}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'badges' && (
          <div style={{ 
            background: 'rgba(255,255,255,0.8)', 
            backdropFilter: 'blur(10px)',
            padding: '2rem', 
            borderRadius: '20px',
            boxShadow: `0 8px 30px ${currentColor.accent}10`,
            border: `1px solid ${currentColor.accent}10`,
            transition: 'all 0.8s ease-in-out'
          }}>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', fontWeight: '800', color: '#0f172a' }}>
              ⭐ Collection de badges
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1.5rem' }}>
              {badges.map((badge, i) => (
                <div key={i} style={{ 
                  padding: '2rem 1.5rem', 
                  background: badge.unlocked ? currentColor.gradient : 'rgba(148,163,184,0.1)',
                  borderRadius: '16px',
                  textAlign: 'center',
                  opacity: badge.unlocked ? 1 : 0.5,
                  border: badge.unlocked ? 'none' : '2px dashed #cbd5e1',
                  transition: 'all 0.3s',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  if (badge.unlocked) {
                    e.currentTarget.style.transform = 'scale(1.08) translateY(-8px)';
                    e.currentTarget.style.boxShadow = `0 15px 40px ${currentColor.accent}35`;
                  }
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1) translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                >
                  <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{badge.icon}</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: '800', color: badge.unlocked ? 'white' : '#64748b', marginBottom: '0.5rem' }}>{badge.name}</div>
                  <div style={{ fontSize: '0.85rem', color: badge.unlocked ? 'rgba(255,255,255,0.9)' : '#94a3b8' }}>{badge.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'notifications' && (
          <div style={{ 
            background: 'rgba(255,255,255,0.8)', 
            backdropFilter: 'blur(10px)',
            padding: '2rem', 
            borderRadius: '20px',
            boxShadow: `0 8px 30px ${currentColor.accent}10`,
            border: `1px solid ${currentColor.accent}10`,
            transition: 'all 0.8s ease-in-out'
          }}>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', fontWeight: '800', color: '#0f172a' }}>
              🔔 Notifications
            </h3>
            {notifications.map(notif => (
              <div key={notif.id} style={{ 
                padding: '1.25rem', 
                background: notif.unread ? currentColor.light : 'rgba(241,245,249,0.5)',
                borderRadius: '14px',
                marginBottom: '1rem',
                borderLeft: notif.unread ? `4px solid ${currentColor.accent}` : '4px solid transparent',
                transition: 'all 0.3s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateX(8px)';
                e.currentTarget.style.boxShadow = `0 6px 20px ${currentColor.accent}15`;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <div style={{ fontWeight: notif.unread ? '700' : '600', color: '#0f172a', fontSize: '1rem' }}>{notif.text}</div>
                <div style={{ fontSize: '0.875rem', color: '#64748b', marginTop: '0.35rem' }}>{notif.time}</div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'parametres' && (
          <div style={{ 
            background: 'rgba(255,255,255,0.8)', 
            backdropFilter: 'blur(10px)',
            padding: '2rem', 
            borderRadius: '20px',
            boxShadow: `0 8px 30px ${currentColor.accent}10`,
            border: `1px solid ${currentColor.accent}10`,
            transition: 'all 0.8s ease-in-out'
          }}>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', fontWeight: '800', color: '#0f172a' }}>
              ⚙️ Paramètres du compte
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ padding: '1.5rem', background: currentColor.light, borderRadius: '14px', border: `1px solid ${currentColor.accent}10` }}>
                <div style={{ fontWeight: '700', color: '#0f172a', marginBottom: '0.75rem', fontSize: '1.05rem' }}>📧 Adresse email</div>
                <input type="email" value={user.email} readOnly style={{ 
                  width: '100%', 
                  padding: '0.875rem', 
                  borderRadius: '10px', 
                  border: `2px solid ${currentColor.accent}20`,
                  fontSize: '0.95rem',
                  background: 'white',
                  fontWeight: '500'
                }} />
              </div>
              <div style={{ padding: '1.5rem', background: currentColor.light, borderRadius: '14px', border: `1px solid ${currentColor.accent}10` }}>
                <div style={{ fontWeight: '700', color: '#0f172a', marginBottom: '0.75rem', fontSize: '1.05rem' }}>👤 Nom d'utilisateur</div>
                <input type="text" value={user.name} readOnly style={{ 
                  width: '100%', 
                  padding: '0.875rem', 
                  borderRadius: '10px', 
                  border: `2px solid ${currentColor.accent}20`,
                  fontSize: '0.95rem',
                  background: 'white',
                  fontWeight: '500'
                }} />
              </div>
              <button style={{ 
                padding: '1rem 2rem', 
                background: currentColor.gradient, 
                color: 'white', 
                border: 'none', 
                borderRadius: '12px', 
                fontWeight: '700',
                fontSize: '1rem',
                cursor: 'pointer',
                boxShadow: `0 8px 24px ${currentColor.accent}30`,
                transition: 'all 0.3s'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = `0 12px 32px ${currentColor.accent}40`;
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = `0 8px 24px ${currentColor.accent}30`;
              }}
              >
                💾 Enregistrer les modifications
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

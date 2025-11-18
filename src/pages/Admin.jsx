import React, { useState } from "react";

export default function Admin() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const stats = [
    { label: "Utilisateurs totaux", value: "2,547", icon: "👥", color: "#4f46e5", change: "+12%" },
    { label: "Commandes ce mois", value: "189", icon: "🛍️", color: "#10b981", change: "+23%" },
    { label: "Revenus (€)", value: "45,230", icon: "💰", color: "#f59e0b", change: "+8%" },
    { label: "Formations actives", value: "24", icon: "🎓", color: "#06b6d4", change: "+3" }
  ];

  const recentUsers = [
    { name: "Marie Kouassi", email: "marie@example.com", date: "17 Nov 2024", status: "Actif" },
    { name: "Jean Ahoua", email: "jean@example.com", date: "16 Nov 2024", status: "Actif" },
    { name: "Sarah Mensah", email: "sarah@example.com", date: "15 Nov 2024", status: "Inactif" }
  ];

  const recentOrders = [
    { id: "#2847", customer: "Alice Koné", product: "Formation IA", amount: "149€", status: "Complété" },
    { id: "#2846", customer: "Bob Traoré", product: "Pack Design Pro", amount: "299€", status: "En cours" },
    { id: "#2845", customer: "Clara Diop", product: "Abonnement Premium", amount: "49€/mois", status: "Complété" }
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#0f172a', padding: 'clamp(1.5rem, 3vw, 2rem)', color: 'white' }}>
      <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ 
          background: 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)',
          borderRadius: '15px',
          padding: 'clamp(1.5rem, 3vw, 2rem)',
          marginBottom: '2rem',
          boxShadow: '0 20px 50px rgba(79, 70, 229, 0.3)'
        }}>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: '900', marginBottom: '0.5rem' }}>
            🔐 Admin Dashboard
          </h1>
          <p style={{ fontSize: 'clamp(0.9rem, 2vw, 1.125rem)', opacity: 0.9 }}>
            Gestion complète de la plateforme Lumynis
          </p>
        </div>

        {/* Navigation */}
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          marginBottom: '2rem',
          flexWrap: 'wrap'
        }}>
          {['dashboard', 'utilisateurs', 'commandes', 'contenu', 'analytics'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '0.75rem 1.5rem',
                background: activeTab === tab ? 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)' : '#1e293b',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: activeTab === tab ? '0 10px 30px rgba(79, 70, 229, 0.4)' : 'none',
                transition: 'all 0.3s',
                textTransform: 'capitalize'
              }}
            >
              {tab === 'dashboard' && '📊 '}
              {tab === 'utilisateurs' && '👥 '}
              {tab === 'commandes' && '🛍️ '}
              {tab === 'contenu' && '📝 '}
              {tab === 'analytics' && '📈 '}
              {tab}
            </button>
          ))}
        </div>

        {/* Dashboard Stats */}
        {activeTab === 'dashboard' && (
          <>
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              {stats.map((stat, i) => (
                <div
                  key={i}
                  style={{
                    background: '#1e293b',
                    borderRadius: '15px',
                    padding: '1.5rem',
                    border: '1px solid #334155'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                    <div style={{ 
                      width: '50px',
                      height: '50px',
                      borderRadius: '10px',
                      background: `${stat.color}20`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem'
                    }}>
                      {stat.icon}
                    </div>
                    <div style={{ 
                      padding: '0.25rem 0.75rem',
                      background: '#10b98120',
                      color: '#10b981',
                      borderRadius: '20px',
                      fontSize: '0.75rem',
                      fontWeight: '700'
                    }}>
                      {stat.change}
                    </div>
                  </div>
                  <div style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '0.25rem', color: stat.color }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
              <div style={{ background: '#1e293b', borderRadius: '15px', padding: '1.5rem', border: '1px solid #334155' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                  👥 Derniers utilisateurs
                </h3>
                {recentUsers.map((user, i) => (
                  <div key={i} style={{ 
                    padding: '1rem',
                    background: '#0f172a',
                    borderRadius: '10px',
                    marginBottom: '0.75rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div>
                      <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>{user.name}</div>
                      <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>{user.email}</div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>{user.date}</div>
                    </div>
                    <div style={{ 
                      padding: '0.25rem 0.75rem',
                      background: user.status === 'Actif' ? '#10b98120' : '#64748b20',
                      color: user.status === 'Actif' ? '#10b981' : '#64748b',
                      borderRadius: '20px',
                      fontSize: '0.75rem',
                      fontWeight: '600'
                    }}>
                      {user.status}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ background: '#1e293b', borderRadius: '15px', padding: '1.5rem', border: '1px solid #334155' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                  🛍️ Dernières commandes
                </h3>
                {recentOrders.map((order, i) => (
                  <div key={i} style={{ 
                    padding: '1rem',
                    background: '#0f172a',
                    borderRadius: '10px',
                    marginBottom: '0.75rem'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span style={{ fontWeight: '700', color: '#4f46e5' }}>{order.id}</span>
                      <span style={{ 
                        padding: '0.25rem 0.75rem',
                        background: order.status === 'Complété' ? '#10b98120' : '#f59e0b20',
                        color: order.status === 'Complété' ? '#10b981' : '#f59e0b',
                        borderRadius: '20px',
                        fontSize: '0.75rem',
                        fontWeight: '600'
                      }}>
                        {order.status}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.9375rem', marginBottom: '0.25rem' }}>{order.customer}</div>
                    <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>{order.product}</div>
                    <div style={{ fontSize: '1.125rem', fontWeight: '700', color: '#10b981', marginTop: '0.5rem' }}>
                      {order.amount}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {activeTab === 'utilisateurs' && (
          <div style={{ background: '#1e293b', borderRadius: '15px', padding: '2rem', border: '1px solid #334155' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem' }}>
              👥 Gestion des utilisateurs
            </h3>
            <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem' }}>
              <input
                type="text"
                placeholder="Rechercher un utilisateur..."
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  borderRadius: '10px',
                  border: '1px solid #334155',
                  background: '#0f172a',
                  color: 'white',
                  fontSize: '1rem'
                }}
              />
              <button style={{
                padding: '0.75rem 1.5rem',
                background: 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                fontWeight: '600',
                cursor: 'pointer'
              }}>
                Ajouter
              </button>
            </div>
            <p style={{ color: '#94a3b8' }}>Tableau de gestion des utilisateurs (à développer)</p>
          </div>
        )}

        {activeTab === 'commandes' && (
          <div style={{ background: '#1e293b', borderRadius: '15px', padding: '2rem', border: '1px solid #334155' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem' }}>
              🛍️ Gestion des commandes
            </h3>
            <p style={{ color: '#94a3b8' }}>Liste complète des commandes et leur statut</p>
          </div>
        )}

        {activeTab === 'contenu' && (
          <div style={{ background: '#1e293b', borderRadius: '15px', padding: '2rem', border: '1px solid #334155' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem' }}>
              📝 Gestion du contenu
            </h3>
            <p style={{ color: '#94a3b8' }}>Modifier les pages, articles et formations</p>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div style={{ background: '#1e293b', borderRadius: '15px', padding: '2rem', border: '1px solid #334155' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem' }}>
              📈 Analytics
            </h3>
            <p style={{ color: '#94a3b8' }}>Statistiques détaillées et rapports</p>
          </div>
        )}

      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";

export default function Support() {
  const [activeSection, setActiveSection] = useState('faq');
  const [chatMessage, setChatMessage] = useState("");
  const [ticketForm, setTicketForm] = useState({ subject: "", message: "", priority: "normal" });
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const handleColorChange = (e) => {
      setColorIndex(e.detail.colorIndex);
    };
    window.addEventListener('navbarColorChange', handleColorChange);
    return () => window.removeEventListener('navbarColorChange', handleColorChange);
  }, []);

  const colors = [
    { bg: "rgba(255,255,255,0.72)", gradient: "linear-gradient(135deg, #4f46e5, #06b6d4)", accent: "#4f46e5" },
    { bg: "rgba(255,240,245,0.72)", gradient: "linear-gradient(135deg, #ec4899, #f43f5e)", accent: "#ec4899" },
    { bg: "rgba(240,253,250,0.72)", gradient: "linear-gradient(135deg, #10b981, #14b8a6)", accent: "#10b981" },
    { bg: "rgba(255,250,235,0.72)", gradient: "linear-gradient(135deg, #f59e0b, #f97316)", accent: "#f59e0b" },
    { bg: "rgba(243,232,255,0.72)", gradient: "linear-gradient(135deg, #8b5cf6, #a78bfa)", accent: "#8b5cf6" },
  ];

  const currentColor = colors[colorIndex];

  const faqs = [
    { q: "Qu'est-ce que le Groupe Lumynis?", a: "Lumynis est une entreprise moderne dédiée à la transformation digitale en Afrique, proposant des solutions dans le digital, la formation, l'entrepreneuriat et l'accompagnement." },
    { q: "Comment rejoindre Lumynis?", a: "Visitez notre page Carrières pour voir les offres d'emploi ou devenir partenaire. Vous pouvez aussi créer un compte membre gratuitement." },
    { q: "Les services sont-ils accessibles internationalement?", a: "Oui! Nos services sont disponibles partout dans le monde. Nous sommes basés au Togo mais opérons internationalement." },
    { q: "Quels sont les modes de paiement acceptés?", a: "Nous acceptons: Mobile Money (MTN, Moov, Flooz), Cartes bancaires (Visa, Mastercard), PayPal et virements bancaires." },
    { q: "Y a-t-il des formations en ligne?", a: "Oui! Nous proposons des formations 100% en ligne sur divers sujets: IA, développement, design, entrepreneuriat, etc." },
    { q: "Comment contacter le support?", a: "Par email (contact@lumynis.com), téléphone (+228 XX XX XX XX), chat en direct ou en créant un ticket de support." }
  ];

  const tickets = [
    { id: "#2847", subject: "Problème de connexion", status: "En cours", date: "15 Nov 2024", priority: "Urgent" },
    { id: "#2846", subject: "Question sur facturation", status: "Résolu", date: "14 Nov 2024", priority: "Normal" },
    { id: "#2845", subject: "Demande de fonctionnalité", status: "Nouveau", date: "13 Nov 2024", priority: "Faible" }
  ];

  const handleSubmitTicket = (e) => {
    e.preventDefault();
    alert("Ticket créé avec succès! Notre équipe vous répondra sous 24h.");
    setTicketForm({ subject: "", message: "", priority: "normal" });
  };

  return (
    <div style={{ minHeight: '100vh', background: currentColor.bg, padding: 'clamp(2rem, 5vw, 3rem) 1.5rem', transition: 'background 0.8s ease-in-out', backdropFilter: 'blur(6px)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ 
          background: currentColor.bg,
          borderRadius: '32px',
          padding: 'clamp(2.5rem, 6vw, 5rem)',
          marginBottom: '2rem',
          color: '#18181b',
          textAlign: 'center',
          boxShadow: `0 20px 60px ${currentColor.accent}20`,
          backdropFilter: 'blur(16px)',
          border: `1.5px solid ${currentColor.bg}`,
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.8s ease-in-out'
        }}>
          <div style={{ position: 'absolute', inset: 0, background: currentColor.gradient, opacity: 0.10, zIndex: 0, borderRadius: '32px', transition: 'background 0.8s ease-in-out' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '900', marginBottom: '0.5rem', letterSpacing: '-0.03em', textShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
              📞 Centre d'Assistance
            </h1>
            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', opacity: 0.92, fontWeight: 500 }}>
              Nous sommes là pour vous aider 24h/7j
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          marginBottom: '2rem',
          flexWrap: 'wrap'
        }}>
          {[
            { id: 'faq', label: '❓ FAQ', icon: '❓' },
            { id: 'chat', label: '💬 Chat en direct', icon: '💬' },
            { id: 'ticket', label: '🎫 Créer un ticket', icon: '🎫' },
            { id: 'mes-tickets', label: '📋 Mes tickets', icon: '📋' }
          ].map(section => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              style={{
                padding: '0.85rem 1.8rem',
                background: activeSection === section.id ? currentColor.gradient : 'rgba(255,255,255,0.85)',
                color: activeSection === section.id ? 'white' : '#18181b',
                border: activeSection === section.id ? 'none' : '1.5px solid rgba(0,0,0,0.08)',
                borderRadius: '28px',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.8s ease',
                boxShadow: activeSection === section.id ? `0 8px 24px ${currentColor.accent}40` : '0 4px 16px rgba(0,0,0,0.06)',
                backdropFilter: 'blur(10px)',
                fontSize: '0.95rem',
                letterSpacing: '-0.01em'
              }}
              onMouseOver={(e) => {
                if (activeSection !== section.id) {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
                }
              }}
              onMouseOut={(e) => {
                if (activeSection !== section.id) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.06)';
                }
              }}
            >
              {section.icon} {section.label}
            </button>
          ))}
        </div>

        {/* FAQ */}
        {activeSection === 'faq' && (
          <div>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', fontWeight: '700', letterSpacing: '-0.02em' }}>
              Questions Fréquentes
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {faqs.map((faq, i) => (
                <details 
                  key={i}
                  style={{ 
                    padding: '1.75rem', 
                    cursor: 'pointer',
                    background: 'rgba(255,255,255,0.85)',
                    backdropFilter: 'blur(12px)',
                    borderRadius: '20px',
                    border: '1.5px solid rgba(0,0,0,0.06)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.10)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)';
                  }}
                >
                  <summary style={{ 
                    fontWeight: '700', 
                    fontSize: '1.15rem',
                    marginBottom: '1rem',
                    color: currentColor.accent,
                    listStyle: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    letterSpacing: '-0.01em',
                    transition: 'color 0.8s ease-in-out'
                  }}>
                    {faq.q}
                    <span style={{ fontSize: '1.3rem', opacity: 0.6 }}>▼</span>
                  </summary>
                  <p style={{ color: '#444', lineHeight: '1.8', marginTop: '0.5rem', fontSize: '1.02rem' }}>
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        )}

        {/* Chat */}
        {activeSection === 'chat' && (
          <div style={{ 
            padding: '2rem',
            background: 'rgba(255,255,255,0.85)',
            backdropFilter: 'blur(12px)',
            borderRadius: '24px',
            border: '1.5px solid rgba(0,0,0,0.06)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.08)'
          }}>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', fontWeight: '700', letterSpacing: '-0.02em' }}>
              💬 Chat en direct
            </h2>
            <div style={{ 
              height: '400px',
              background: `linear-gradient(135deg, ${currentColor.accent}08, ${currentColor.accent}03)`,
              borderRadius: '18px',
              padding: '1.5rem',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: '1rem',
              border: `1.5px solid ${currentColor.accent}15`,
              transition: 'all 0.8s ease-in-out'
            }}>
              <div style={{ fontSize: '4rem' }}>💬</div>
              <p style={{ fontSize: '1.125rem', color: '#444', fontWeight: 600 }}>
                Un agent sera bientôt avec vous...
              </p>
              <div style={{ fontSize: '0.875rem', color: '#666' }}>
                Temps d'attente moyen: 2 minutes
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Tapez votre message..."
                style={{
                  flex: 1,
                  padding: '1rem 1.25rem',
                  borderRadius: '16px',
                  border: '1.5px solid rgba(0,0,0,0.08)',
                  fontSize: '1rem',
                  background: 'rgba(255,255,255,0.9)',
                  transition: 'all 0.3s ease'
                }}
              />
              <button className="btn-primary" style={{
                background: currentColor.gradient,
                padding: '1rem 2rem',
                borderRadius: '16px',
                border: 'none',
                color: 'white',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: `0 4px 16px ${currentColor.accent}30`,
                transition: 'all 0.8s ease-in-out'
              }}>
                Envoyer
              </button>
            </div>
          </div>
        )}

        {/* Créer Ticket */}
        {activeSection === 'ticket' && (
          <div style={{ 
            padding: '2rem',
            background: 'rgba(255,255,255,0.85)',
            backdropFilter: 'blur(12px)',
            borderRadius: '24px',
            border: '1.5px solid rgba(0,0,0,0.06)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.08)'
          }}>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', fontWeight: '700', letterSpacing: '-0.02em' }}>
              🎫 Créer un ticket de support
            </h2>
            <form onSubmit={handleSubmitTicket} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.95rem' }}>Sujet</label>
                <input
                  type="text"
                  required
                  value={ticketForm.subject}
                  onChange={(e) => setTicketForm({...ticketForm, subject: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1.1rem',
                    borderRadius: '14px',
                    border: '1.5px solid rgba(0,0,0,0.08)',
                    fontSize: '1rem',
                    background: 'rgba(255,255,255,0.9)',
                    transition: 'all 0.3s ease'
                  }}
                  placeholder="Ex: Problème de connexion"
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.95rem' }}>Priorité</label>
                <select
                  value={ticketForm.priority}
                  onChange={(e) => setTicketForm({...ticketForm, priority: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1.1rem',
                    borderRadius: '14px',
                    border: '1.5px solid rgba(0,0,0,0.08)',
                    fontSize: '1rem',
                    background: 'rgba(255,255,255,0.9)',
                    cursor: 'pointer'
                  }}
                >
                  <option value="faible">Faible</option>
                  <option value="normal">Normal</option>
                  <option value="urgent">Urgent</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.95rem' }}>Message</label>
                <textarea
                  required
                  value={ticketForm.message}
                  onChange={(e) => setTicketForm({...ticketForm, message: e.target.value})}
                  rows="6"
                  style={{
                    width: '100%',
                    padding: '0.85rem 1.1rem',
                    borderRadius: '14px',
                    border: '1.5px solid rgba(0,0,0,0.08)',
                    fontSize: '1rem',
                    fontFamily: 'inherit',
                    background: 'rgba(255,255,255,0.9)',
                    resize: 'vertical'
                  }}
                  placeholder="Décrivez votre problème..."
                />
              </div>
              <button type="submit" style={{ 
                width: 'fit-content',
                background: currentColor.gradient,
                color: 'white',
                padding: '1rem 2.5rem',
                fontSize: '1.05rem',
                fontWeight: 700,
                borderRadius: '18px',
                boxShadow: `0 8px 24px ${currentColor.accent}30`,
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.8s ease-in-out'
              }}>
                📤 Envoyer le ticket
              </button>
            </form>
          </div>
        )}

        {/* Mes Tickets */}
        {activeSection === 'mes-tickets' && (
          <div>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', fontWeight: '700', letterSpacing: '-0.02em' }}>
              📋 Mes tickets de support
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {tickets.map(ticket => (
                <div key={ticket.id} style={{ 
                  padding: '1.75rem',
                  background: 'rgba(255,255,255,0.85)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: '20px',
                  border: '1.5px solid rgba(0,0,0,0.06)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.10)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)';
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: '1rem' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                        <span style={{ fontWeight: '700', color: currentColor.accent, transition: 'color 0.8s ease-in-out' }}>{ticket.id}</span>
                        <span style={{ 
                          padding: '0.35rem 0.85rem',
                          background: ticket.status === 'Résolu' ? '#d1fae5' : ticket.status === 'En cours' ? '#dbeafe' : '#fef3c7',
                          color: ticket.status === 'Résolu' ? '#065f46' : ticket.status === 'En cours' ? '#1e40af' : '#92400e',
                          borderRadius: '24px',
                          fontSize: '0.78rem',
                          fontWeight: '700',
                          letterSpacing: '-0.01em'
                        }}>
                          {ticket.status}
                        </span>
                        <span style={{ 
                          padding: '0.35rem 0.85rem',
                          background: ticket.priority === 'Urgent' ? '#fee2e2' : '#f3f4f6',
                          color: ticket.priority === 'Urgent' ? '#991b1b' : '#6b7280',
                          borderRadius: '24px',
                          fontSize: '0.78rem',
                          fontWeight: '700',
                          letterSpacing: '-0.01em'
                        }}>
                          {ticket.priority}
                        </span>
                      </div>
                      <h3 style={{ fontSize: '1.18rem', fontWeight: '700', marginBottom: '0.35rem', letterSpacing: '-0.01em' }}>
                        {ticket.subject}
                      </h3>
                      <p style={{ fontSize: '0.9rem', color: '#666', fontWeight: 500 }}>
                        Créé le {ticket.date}
                      </p>
                    </div>
                    <button style={{ 
                      fontSize: '0.9rem',
                      padding: '0.7rem 1.5rem',
                      background: 'rgba(255,255,255,0.9)',
                      border: `1.5px solid ${currentColor.accent}40`,
                      color: currentColor.accent,
                      borderRadius: '14px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 0.8s ease-in-out'
                    }}>
                      Voir détails
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact rapide */}
        <div style={{ 
          padding: '2.5rem',
          marginTop: '3rem',
          background: currentColor.bg,
          backdropFilter: 'blur(16px)',
          borderRadius: '32px',
          border: `1.5px solid ${currentColor.bg}`,
          boxShadow: `0 20px 60px ${currentColor.accent}20`,
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.8s ease-in-out'
        }}>
          <div style={{ position: 'absolute', inset: 0, background: currentColor.gradient, opacity: 0.08, zIndex: 0, borderRadius: '32px', transition: 'background 0.8s ease-in-out' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h3 style={{ fontSize: '1.65rem', fontWeight: '700', marginBottom: '2rem', textAlign: 'center', letterSpacing: '-0.02em' }}>
              Autres moyens de nous contacter
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3.2rem', marginBottom: '0.75rem' }}>✉️</div>
                <div style={{ fontWeight: '700', marginBottom: '0.5rem', fontSize: '1.05rem', letterSpacing: '-0.01em' }}>Email</div>
                <div style={{ color: currentColor.accent, fontSize: '0.98rem', fontWeight: 600, transition: 'color 0.8s ease-in-out' }}>contact@lumynis.com</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3.2rem', marginBottom: '0.75rem' }}>📱</div>
                <div style={{ fontWeight: '700', marginBottom: '0.5rem', fontSize: '1.05rem', letterSpacing: '-0.01em' }}>Téléphone</div>
                <div style={{ color: currentColor.accent, fontSize: '0.98rem', fontWeight: 600, transition: 'color 0.8s ease-in-out' }}>+228 XX XX XX XX</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3.2rem', marginBottom: '0.75rem' }}>🏢</div>
                <div style={{ fontWeight: '700', marginBottom: '0.5rem', fontSize: '1.05rem', letterSpacing: '-0.01em' }}>Bureau</div>
                <div style={{ color: currentColor.accent, fontSize: '0.98rem', fontWeight: 600, transition: 'color 0.8s ease-in-out' }}>Lomé, Togo</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

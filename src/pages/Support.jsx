import React, { useState } from "react";

export default function Support() {
  const [activeSection, setActiveSection] = useState('faq');
  const [chatMessage, setChatMessage] = useState("");
  const [ticketForm, setTicketForm] = useState({ subject: "", message: "", priority: "normal" });

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
    <div style={{ minHeight: '100vh', background: 'var(--gray-50)', padding: 'clamp(2rem, 5vw, 3rem) 1.5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ 
          background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
          borderRadius: 'var(--border-radius-lg)',
          padding: 'clamp(2rem, 5vw, 3rem)',
          marginBottom: '2rem',
          color: 'white',
          textAlign: 'center'
        }}>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '900', marginBottom: '0.5rem' }}>
            📞 Centre d'Assistance
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', opacity: 0.9 }}>
            Nous sommes là pour vous aider 24h/7j
          </p>
        </div>

        {/* Navigation */}
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          marginBottom: '2rem',
          flexWrap: 'wrap',
          borderBottom: '2px solid #e5e7eb',
          paddingBottom: '1rem'
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
                padding: '0.75rem 1.5rem',
                background: activeSection === section.id ? 'var(--primary)' : 'white',
                color: activeSection === section.id ? 'white' : 'var(--gray-700)',
                border: 'none',
                borderRadius: '10px',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: activeSection === section.id ? 'var(--shadow-md)' : 'none',
                transition: 'all 0.3s'
              }}
            >
              {section.icon} {section.label}
            </button>
          ))}
        </div>

        {/* FAQ */}
        {activeSection === 'faq' && (
          <div>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', fontWeight: '700' }}>
              Questions Fréquentes
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {faqs.map((faq, i) => (
                <details 
                  key={i}
                  className="card"
                  style={{ padding: '1.5rem', cursor: 'pointer' }}
                >
                  <summary style={{ 
                    fontWeight: '700', 
                    fontSize: '1.125rem',
                    marginBottom: '1rem',
                    color: 'var(--primary)',
                    listStyle: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    {faq.q}
                    <span style={{ fontSize: '1.5rem' }}>▼</span>
                  </summary>
                  <p style={{ color: 'var(--gray-700)', lineHeight: '1.7', marginTop: '0.5rem' }}>
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        )}

        {/* Chat */}
        {activeSection === 'chat' && (
          <div className="card" style={{ padding: '2rem' }}>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', fontWeight: '700' }}>
              💬 Chat en direct
            </h2>
            <div style={{ 
              height: '400px',
              background: '#f9fafb',
              borderRadius: '10px',
              padding: '1.5rem',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <div style={{ fontSize: '4rem' }}>💬</div>
              <p style={{ fontSize: '1.125rem', color: 'var(--gray-600)' }}>
                Un agent sera bientôt avec vous...
              </p>
              <div style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>
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
                  padding: '1rem',
                  borderRadius: '10px',
                  border: '1px solid #e5e7eb',
                  fontSize: '1rem'
                }}
              />
              <button className="btn-primary">
                Envoyer
              </button>
            </div>
          </div>
        )}

        {/* Créer Ticket */}
        {activeSection === 'ticket' && (
          <div className="card" style={{ padding: '2rem' }}>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', fontWeight: '700' }}>
              🎫 Créer un ticket de support
            </h2>
            <form onSubmit={handleSubmitTicket} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Sujet</label>
                <input
                  type="text"
                  required
                  value={ticketForm.subject}
                  onChange={(e) => setTicketForm({...ticketForm, subject: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '10px',
                    border: '1px solid #e5e7eb',
                    fontSize: '1rem'
                  }}
                  placeholder="Ex: Problème de connexion"
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Priorité</label>
                <select
                  value={ticketForm.priority}
                  onChange={(e) => setTicketForm({...ticketForm, priority: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '10px',
                    border: '1px solid #e5e7eb',
                    fontSize: '1rem'
                  }}
                >
                  <option value="faible">Faible</option>
                  <option value="normal">Normal</option>
                  <option value="urgent">Urgent</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Message</label>
                <textarea
                  required
                  value={ticketForm.message}
                  onChange={(e) => setTicketForm({...ticketForm, message: e.target.value})}
                  rows="6"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '10px',
                    border: '1px solid #e5e7eb',
                    fontSize: '1rem',
                    fontFamily: 'inherit'
                  }}
                  placeholder="Décrivez votre problème..."
                />
              </div>
              <button type="submit" className="btn-primary" style={{ width: 'fit-content' }}>
                📤 Envoyer le ticket
              </button>
            </form>
          </div>
        )}

        {/* Mes Tickets */}
        {activeSection === 'mes-tickets' && (
          <div>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', fontWeight: '700' }}>
              📋 Mes tickets de support
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {tickets.map(ticket => (
                <div key={ticket.id} className="card" style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: '1rem' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                        <span style={{ fontWeight: '700', color: 'var(--primary)' }}>{ticket.id}</span>
                        <span style={{ 
                          padding: '0.25rem 0.75rem',
                          background: ticket.status === 'Résolu' ? '#d1fae5' : ticket.status === 'En cours' ? '#dbeafe' : '#fef3c7',
                          color: ticket.status === 'Résolu' ? '#065f46' : ticket.status === 'En cours' ? '#1e40af' : '#92400e',
                          borderRadius: '20px',
                          fontSize: '0.75rem',
                          fontWeight: '600'
                        }}>
                          {ticket.status}
                        </span>
                        <span style={{ 
                          padding: '0.25rem 0.75rem',
                          background: ticket.priority === 'Urgent' ? '#fee2e2' : '#f3f4f6',
                          color: ticket.priority === 'Urgent' ? '#991b1b' : '#6b7280',
                          borderRadius: '20px',
                          fontSize: '0.75rem',
                          fontWeight: '600'
                        }}>
                          {ticket.priority}
                        </span>
                      </div>
                      <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.25rem' }}>
                        {ticket.subject}
                      </h3>
                      <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)' }}>
                        Créé le {ticket.date}
                      </p>
                    </div>
                    <button className="btn-outline" style={{ fontSize: '0.875rem' }}>
                      Voir détails
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact rapide */}
        <div className="card" style={{ padding: '2rem', marginTop: '3rem', background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', textAlign: 'center' }}>
            Autres moyens de nous contacter
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>✉️</div>
              <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Email</div>
              <div style={{ color: 'var(--primary)', fontSize: '0.9375rem' }}>contact@lumynis.com</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>📱</div>
              <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Téléphone</div>
              <div style={{ color: 'var(--primary)', fontSize: '0.9375rem' }}>+228 XX XX XX XX</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🏢</div>
              <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Bureau</div>
              <div style={{ color: 'var(--primary)', fontSize: '0.9375rem' }}>Lomé, Togo</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

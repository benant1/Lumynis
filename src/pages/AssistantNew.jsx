import React, { useState, useRef, useEffect } from "react";

export default function Assistant() {
  const [colorIndex, setColorIndex] = useState(0);
  const [messages, setMessages] = useState([
    { id: 1, text: "Bonjour! Je suis l'Assistant Lumynis IA. Comment puis-je vous aider aujourd'hui?", sender: "bot", time: new Date().toLocaleTimeString() }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Synchroniser avec Navbar
  useEffect(() => {
    const handleColorChange = (e) => {
      setColorIndex(e.detail.colorIndex);
    };
    
    window.addEventListener('navbarColorChange', handleColorChange);
    return () => window.removeEventListener('navbarColorChange', handleColorChange);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const colors = [
    { bg: 'linear-gradient(135deg, rgba(79, 70, 229, 0.03), rgba(6, 182, 212, 0.03))', accent: '#4f46e5', gradient: 'linear-gradient(135deg, #4f46e5, #06b6d4)' },
    { bg: 'linear-gradient(135deg, rgba(236, 72, 153, 0.03), rgba(244, 63, 94, 0.03))', accent: '#ec4899', gradient: 'linear-gradient(135deg, #ec4899, #f43f5e)' },
    { bg: 'linear-gradient(135deg, rgba(16, 185, 129, 0.03), rgba(20, 184, 166, 0.03))', accent: '#10b981', gradient: 'linear-gradient(135deg, #10b981, #14b8a6)' },
    { bg: 'linear-gradient(135deg, rgba(245, 158, 11, 0.03), rgba(249, 115, 22, 0.03))', accent: '#f59e0b', gradient: 'linear-gradient(135deg, #f59e0b, #f97316)' },
    { bg: 'linear-gradient(135deg, rgba(139, 92, 246, 0.03), rgba(167, 139, 250, 0.03))', accent: '#8b5cf6', gradient: 'linear-gradient(135deg, #8b5cf6, #a78bfa)' },
  ];

  const currentColor = colors[colorIndex];

  const quickReplies = [
    { icon: "💼", text: "Services", full: "Voir vos services" },
    { icon: "🎓", text: "Formations", full: "Formations disponibles" },
    { icon: "🛍️", text: "Boutique", full: "Accéder à la boutique" },
    { icon: "📞", text: "Support", full: "Contacter le support" },
    { icon: "🔮", text: "Spirit", full: "Lumynis Spirit" },
    { icon: "💎", text: "Premium", full: "Devenir membre Premium" }
  ];

  const botResponses = {
    "services": "Lumynis propose 5 services principaux :\n\n💻 Développement Digital — Sites web, applications, solutions sur mesure\n🎓 Formations Professionnelles — Certifications, e-learning, coaching\n🚀 Accompagnement & Consulting — Stratégie digitale, transformation\n🎬 Média & Communication — Branding, marketing digital, production\n📋 Services Administratifs — Gestion de projets, support complet\n\nQue souhaitez-vous découvrir ?",
    "formations": "Nos formations couvrent :\n\n🤖 Intelligence Artificielle — Machine Learning, Deep Learning, NLP\n📱 Développement Mobile — React Native, Flutter, applications natives\n🎨 Design & UX/UI — Figma, Adobe XD, principes de design\n💼 Entrepreneuriat — Business model, levée de fonds, scaling\n📊 Marketing Digital — SEO, SEM, Social Media, Analytics\n\nVoulez-vous plus d'informations sur une formation spécifique ?",
    "boutique": "La boutique Lumynis Market propose :\n\n🛍️ Produits Technologiques — Gadgets, équipements, logiciels\n🎨 Designs & Templates — UI kits, mockups, ressources premium\n📚 Livres & E-books — Guides pratiques, formations écrites\n🎓 Formations en Ligne — Accès illimité, certifications reconnues\n💎 Abonnements Premium — Contenus exclusifs, support prioritaire\n\nPaiement sécurisé : Mobile Money, Carte bancaire, PayPal",
    "support": "Contactez notre support :\n\n✉️ Email : contact@lumynis.com\n📱 Téléphone : +228 XX XX XX XX\n🏢 Siège social : Lomé, Togo\n⏰ Disponibilité : 24h/24, 7j/7\n💬 Chat en direct : Disponible maintenant\n\nVous pouvez aussi remplir notre formulaire de contact pour une réponse détaillée !",
    "spirit": "Lumynis Spirit — Notre section unique :\n\n✨ Messages Spirituels — Inspirations du Président Fondateur\n📖 Enseignements & Sagesse — Réflexions profondes, philosophie\n💭 Pensées Inspirantes — Citations quotidiennes, motivation\n🧘 Méditations Guidées — Séances audio, bien-être mental\n🌟 Vision & Mission — Notre raison d'être, nos valeurs\n\nDécouvrez ce qui rend Lumynis unique !",
    "premium": "Devenir membre Premium vous donne :\n\n✓ Accès Illimité — Toutes les formations sans restriction\n✓ Réductions Exclusives — 30% sur tous les produits et services\n✓ Support Prioritaire — Réponse garantie sous 2h\n✓ Contenus Premium — Webinars exclusifs, masterclasses\n✓ Badges Spéciaux — Reconnaissance dans la communauté\n✓ Networking — Accès au réseau privé des membres\n\nRejoignez l'élite Lumynis dès maintenant !"
  };

  const handleSend = () => {
    if (input.trim() === "") return;

    const userMessage = {
      id: messages.length + 1,
      text: input,
      sender: "user",
      time: new Date().toLocaleTimeString()
    };

    setMessages([...messages, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simuler la réponse du bot
    setTimeout(() => {
      const lowerInput = input.toLowerCase();
      let botResponse = "Je n'ai pas bien compris. Pouvez-vous reformuler ou choisir une option rapide ci-dessous? 🤔";

      if (lowerInput.includes("service")) botResponse = botResponses.services;
      else if (lowerInput.includes("formation")) botResponse = botResponses.formations;
      else if (lowerInput.includes("boutique") || lowerInput.includes("acheter")) botResponse = botResponses.boutique;
      else if (lowerInput.includes("contact") || lowerInput.includes("support")) botResponse = botResponses.support;
      else if (lowerInput.includes("spirit") || lowerInput.includes("spirituel")) botResponse = botResponses.spirit;
      else if (lowerInput.includes("premium") || lowerInput.includes("membre")) botResponse = botResponses.premium;
      else if (lowerInput.includes("bonjour") || lowerInput.includes("salut")) botResponse = "Bonjour! Ravi de vous aider. Comment puis-je vous assister aujourd'hui? 😊";
      else if (lowerInput.includes("merci")) botResponse = "Avec plaisir! N'hésitez pas si vous avez d'autres questions. 🙏";

      const newBotMessage = {
        id: messages.length + 2,
        text: botResponse,
        sender: "bot",
        time: new Date().toLocaleTimeString()
      };

      setMessages(prev => [...prev, newBotMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickReply = (reply) => {
    setInput(reply.full);
    setTimeout(() => handleSend(), 100);
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: currentColor.bg,
      padding: 'clamp(2rem, 5vw, 4rem) 1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background 0.8s ease-in-out'
    }}>
      <div style={{ 
        maxWidth: '1000px', 
        width: '100%',
        background: 'rgba(255,255,255,0.98)',
        backdropFilter: 'blur(20px)',
        borderRadius: '24px',
        boxShadow: `0 20px 80px ${currentColor.accent}15, 0 0 0 1px ${currentColor.accent}10`,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '85vh',
        transition: 'all 0.8s ease-in-out'
      }}>
        
        {/* Header */}
        <div style={{ 
          background: currentColor.gradient,
          padding: '1.75rem 2rem',
          color: 'white',
          borderBottom: `2px solid ${currentColor.accent}20`,
          transition: 'background 0.8s ease-in-out'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <div style={{ 
                width: '56px', 
                height: '56px', 
                borderRadius: '16px',
                background: 'rgba(255,255,255,0.2)',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(255,255,255,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.75rem',
                boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
              }}>
                🤖
              </div>
              <div>
                <h1 style={{ fontSize: '1.75rem', fontWeight: '900', marginBottom: '0.35rem', letterSpacing: '-0.025em' }}>Lumynis Assistant IA</h1>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', opacity: 0.95 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981' }}></div>
                    <span>En ligne</span>
                  </div>
                  <span>•</span>
                  <span>Réponse instantanée</span>
                </div>
              </div>
            </div>
            <button style={{
              padding: '0.6rem 1.25rem',
              background: 'rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: '12px',
              color: 'white',
              fontWeight: '600',
              fontSize: '0.9rem',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }} onClick={() => setMessages([messages[0]])}>🔄 Nouveau chat</button>
          </div>
        </div>

        {/* Messages */}
        <div style={{ 
          flex: 1, 
          overflowY: 'auto', 
          padding: '2rem',
          background: 'linear-gradient(to bottom, #fafbfc, #ffffff)',
          position: 'relative'
        }}>
          {messages.map(msg => (
            <div 
              key={msg.id}
              style={{ 
                display: 'flex',
                justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                marginBottom: '1.5rem',
                animation: 'fadeInUp 0.4s ease-out'
              }}
            >
              <div style={{ 
                maxWidth: '75%',
                padding: '1.1rem 1.4rem',
                borderRadius: msg.sender === 'user' ? '20px 20px 4px 20px' : '20px 20px 20px 4px',
                background: msg.sender === 'user' 
                  ? currentColor.gradient
                  : 'white',
                color: msg.sender === 'user' ? 'white' : '#0f172a',
                boxShadow: msg.sender === 'user'
                  ? `0 8px 24px ${currentColor.accent}25`
                  : '0 2px 12px rgba(15,23,42,0.08)',
                border: msg.sender === 'bot' ? `1px solid ${currentColor.accent}10` : 'none',
                whiteSpace: 'pre-line',
                fontSize: '0.95rem',
                lineHeight: '1.6',
                transition: 'all 0.8s ease-in-out'
              }}>
                <div style={{ fontWeight: msg.sender === 'bot' ? '500' : '400' }}>{msg.text}</div>
                <div style={{ 
                  fontSize: '0.72rem', 
                  marginTop: '0.6rem',
                  opacity: 0.65,
                  textAlign: 'right',
                  fontWeight: '500'
                }}>
                  {msg.time}
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.75rem', 
              padding: '1rem 1.25rem',
              background: 'white',
              borderRadius: '20px 20px 20px 4px',
              maxWidth: 'fit-content',
              boxShadow: `0 2px 12px ${currentColor.accent}15`,
              border: `1px solid ${currentColor.accent}10`,
              animation: 'pulse 1.5s ease-in-out infinite'
            }}>
              <div style={{ fontSize: '1.5rem' }}>🤖</div>
              <div style={{ color: '#475569', fontWeight: '500', fontSize: '0.9rem' }}>L'assistant est en train d'écrire</div>
              <div style={{ display: 'flex', gap: '3px' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: currentColor.accent, animation: 'bounce 1s ease-in-out infinite' }}></div>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: currentColor.accent, animation: 'bounce 1s ease-in-out infinite 0.2s' }}></div>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: currentColor.accent, animation: 'bounce 1s ease-in-out infinite 0.4s' }}></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Replies */}
        <div style={{ 
          padding: '1.25rem 2rem',
          background: 'linear-gradient(to top, #ffffff, #fafbfc)',
          borderTop: `1px solid ${currentColor.accent}10`,
          overflowX: 'auto',
          whiteSpace: 'nowrap',
          transition: 'all 0.8s ease-in-out'
        }}>
          <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#64748b', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Suggestions rapides</div>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {quickReplies.map((reply, i) => (
              <button
                key={i}
                onClick={() => handleQuickReply(reply)}
                style={{
                  padding: '0.7rem 1.2rem',
                  background: `${currentColor.accent}08`,
                  border: `1.5px solid ${currentColor.accent}20`,
                  borderRadius: '12px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  whiteSpace: 'nowrap',
                  color: '#0f172a',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = currentColor.gradient;
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = `0 8px 20px ${currentColor.accent}30`;
                }}
                onMouseOut={(e) => {
                  e.target.style.background = `${currentColor.accent}08`;
                  e.target.style.color = '#0f172a';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <span>{reply.icon}</span>
                <span>{reply.text}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div style={{ 
          padding: '1.75rem 2rem',
          background: 'white',
          borderTop: `2px solid ${currentColor.accent}15`,
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
          transition: 'all 0.8s ease-in-out'
        }}>
          <div style={{
            flex: 1,
            position: 'relative',
            display: 'flex',
            alignItems: 'center'
          }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Posez votre question à l'assistant IA..."
              style={{
                width: '100%',
                padding: '1.1rem 1.5rem',
                borderRadius: '16px',
                border: `2px solid ${currentColor.accent}20`,
                fontSize: '0.95rem',
                outline: 'none',
                background: '#fafbfc',
                transition: 'all 0.3s',
                fontWeight: '500'
              }}
              onFocus={(e) => {
                e.target.style.border = `2px solid ${currentColor.accent}`;
                e.target.style.background = 'white';
                e.target.style.boxShadow = `0 0 0 4px ${currentColor.accent}10`;
              }}
              onBlur={(e) => {
                e.target.style.border = `2px solid ${currentColor.accent}20`;
                e.target.style.background = '#fafbfc';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>
          <button
            onClick={handleSend}
            style={{
              padding: '1.1rem 2rem',
              background: currentColor.gradient,
              color: 'white',
              border: 'none',
              borderRadius: '16px',
              fontWeight: '700',
              cursor: 'pointer',
              fontSize: '0.95rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: `0 8px 24px ${currentColor.accent}30`,
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              whiteSpace: 'nowrap'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = `0 12px 32px ${currentColor.accent}40`;
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = `0 8px 24px ${currentColor.accent}30`;
            }}
          >
            <span>Envoyer</span>
            <span>✨</span>
          </button>
        </div>

        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.6;
            }
          }
          
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-8px);
            }
          }
        `}</style>

      </div>
    </div>
  );
}

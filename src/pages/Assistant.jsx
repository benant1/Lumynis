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
    { bg: 'rgba(255,255,255,0.72)', accent: '#4f46e5', gradient: 'linear-gradient(135deg, #4f46e5, #06b6d4)' },
    { bg: 'rgba(255,240,245,0.72)', accent: '#ec4899', gradient: 'linear-gradient(135deg, #ec4899, #f43f5e)' },
    { bg: 'rgba(240,253,250,0.72)', accent: '#10b981', gradient: 'linear-gradient(135deg, #10b981, #14b8a6)' },
    { bg: 'rgba(255,250,235,0.72)', accent: '#f59e0b', gradient: 'linear-gradient(135deg, #f59e0b, #f97316)' },
    { bg: 'rgba(243,232,255,0.72)', accent: '#8b5cf6', gradient: 'linear-gradient(135deg, #8b5cf6, #a78bfa)' },
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
    // Services et offres
    "services": "Lumynis propose 5 services principaux :\n\n💻 Développement Digital — Sites web, applications, solutions sur mesure\n🎓 Formations Professionnelles — Certifications, e-learning, coaching\n🚀 Accompagnement & Consulting — Stratégie digitale, transformation\n🎬 Média & Communication — Branding, marketing digital, production\n📋 Services Administratifs — Gestion de projets, support complet\n\nQue souhaitez-vous découvrir ?",
    
    "formations": "Nos formations couvrent :\n\n🤖 Intelligence Artificielle — Machine Learning, Deep Learning, NLP\n📱 Développement Mobile — React Native, Flutter, applications natives\n🎨 Design & UX/UI — Figma, Adobe XD, principes de design\n💼 Entrepreneuriat — Business model, levée de fonds, scaling\n📊 Marketing Digital — SEO, SEM, Social Media, Analytics\n\nVoulez-vous plus d'informations sur une formation spécifique ?",
    
    "boutique": "La boutique Lumynis Market propose :\n\n🛍️ Produits Technologiques — Gadgets, équipements, logiciels\n🎨 Designs & Templates — UI kits, mockups, ressources premium\n📚 Livres & E-books — Guides pratiques, formations écrites\n🎓 Formations en Ligne — Accès illimité, certifications reconnues\n💎 Abonnements Premium — Contenus exclusifs, support prioritaire\n\nPaiement sécurisé : Mobile Money, Carte bancaire, PayPal",
    
    "support": "Contactez notre support :\n\n✉️ Email : contact@lumynis.com\n📱 Téléphone : +228 XX XX XX XX\n🏢 Siège social : Lomé, Togo\n⏰ Disponibilité : 24h/24, 7j/7\n💬 Chat en direct : Disponible maintenant\n\nVous pouvez aussi remplir notre formulaire de contact pour une réponse détaillée !",
    
    "spirit": "Lumynis Spirit — Notre section unique :\n\n✨ Messages Spirituels — Inspirations du Président Fondateur\n📖 Enseignements & Sagesse — Réflexions profondes, philosophie\n💭 Pensées Inspirantes — Citations quotidiennes, motivation\n🧘 Méditations Guidées — Séances audio, bien-être mental\n🌟 Vision & Mission — Notre raison d'être, nos valeurs\n\nDécouvrez ce qui rend Lumynis unique !",
    
    "premium": "Devenir membre Premium vous donne :\n\n✓ Accès Illimité — Toutes les formations sans restriction\n✓ Réductions Exclusives — 30% sur tous les produits et services\n✓ Support Prioritaire — Réponse garantie sous 2h\n✓ Contenus Premium — Webinars exclusifs, masterclasses\n✓ Badges Spéciaux — Reconnaissance dans la communauté\n✓ Networking — Accès au réseau privé des membres\n\nRejoignez l'élite Lumynis dès maintenant !",
    
    // Prix et tarifs
    "prix": "Nos tarifs varient selon les services :\n\n💻 Développement Web — À partir de 500 000 FCFA\n📱 Application Mobile — À partir de 1 500 000 FCFA\n🎓 Formations — De 25 000 à 200 000 FCFA par module\n💎 Abonnement Premium — 15 000 FCFA/mois ou 150 000 FCFA/an\n🎨 Design Graphique — À partir de 50 000 FCFA\n\nContactez-nous pour un devis personnalisé !",
    
    // Localisation et contact
    "adresse": "Vous pouvez nous trouver ici :\n\n🏢 Siège social : Lomé, Togo\n📍 Adresse complète : Disponible sur demande\n🌍 Présence internationale : En expansion\n📧 Email : contact@lumynis.com\n📱 Téléphone : +228 XX XX XX XX\n\nNous sommes également disponibles en ligne 24h/24 !",
    
    "horaires": "Nos horaires d'ouverture :\n\n🕐 Bureaux : Lundi - Vendredi, 8h - 18h\n🕐 Samedi : 9h - 14h\n🕐 Support en ligne : 24h/24, 7j/7\n📞 Hotline : Disponible en permanence\n💬 Chat : Réponse immédiate\n\nNous sommes toujours là pour vous !",
    
    // Processus et méthodes
    "inscription": "Pour vous inscrire :\n\n1️⃣ Créez votre compte gratuitement\n2️⃣ Complétez votre profil\n3️⃣ Choisissez vos services/formations\n4️⃣ Effectuez le paiement sécurisé\n5️⃣ Accédez immédiatement à vos contenus\n\nBesoin d'aide ? Notre équipe vous accompagne !",
    
    "paiement": "Moyens de paiement acceptés :\n\n💳 Carte Bancaire — Visa, Mastercard\n📱 Mobile Money — Togocel, Moov, Flooz\n💰 PayPal — Paiements internationaux\n🏦 Virement Bancaire — Pour entreprises\n💵 Espèces — À nos bureaux\n\nTous les paiements sont 100% sécurisés !",
    
    "livraison": "Modalités de livraison :\n\n📦 Produits physiques : 2-5 jours ouvrés\n⚡ Produits numériques : Accès instantané\n🎓 Formations : Disponibles immédiatement\n🚚 Livraison gratuite : Commandes +100 000 FCFA\n🌍 Livraison internationale : Disponible\n\nSuivi de commande en temps réel !",
    
    // À propos de Lumynis
    "entreprise": "À propos de Lumynis :\n\n🎯 Mission : Démocratiser l'excellence digitale en Afrique\n🌟 Vision : Devenir leader africain de la transformation digitale\n💪 Valeurs : Innovation, Excellence, Intégrité, Impact\n📅 Création : Entreprise innovante en pleine croissance\n👥 Équipe : Experts passionnés et qualifiés\n\nNous créons l'avenir digital de l'Afrique !",
    
    "equipe": "Notre équipe :\n\n👨‍💼 Direction — Leadership visionnaire\n💻 Développeurs — Experts techniques confirmés\n🎨 Designers — Créatifs talentueux\n📚 Formateurs — Pédagogues professionnels\n🤝 Support — Dévoués à votre satisfaction\n\nUne équipe passionnée à votre service !",
    
    // Technologie
    "technologies": "Technologies que nous utilisons :\n\n⚛️ Frontend : React, Vue.js, Next.js, TypeScript\n🔧 Backend : Node.js, Python, PHP, .NET\n📱 Mobile : React Native, Flutter, Swift, Kotlin\n🗄️ Bases de données : MongoDB, PostgreSQL, MySQL\n☁️ Cloud : AWS, Azure, Google Cloud\n🛠️ Outils : Git, Docker, CI/CD\n\nToujours à la pointe de l'innovation !",
    
    "ia": "Nos solutions en Intelligence Artificielle :\n\n🤖 Chatbots intelligents\n📊 Analyse prédictive de données\n👁️ Reconnaissance d'images\n🗣️ Traitement du langage naturel\n🎯 Recommandations personnalisées\n🔮 Automatisation intelligente\n\nL'IA au service de votre business !",
    
    // Carrière et recrutement
    "emploi": "Rejoignez notre équipe !\n\n💼 Postes ouverts : Développeurs, Designers, Formateurs\n🎓 Stage : Opportunités régulières\n🤝 Freelance : Collaboration possible\n📈 Évolution : Croissance de carrière garantie\n🎁 Avantages : Salaire compétitif, formation continue\n\nConsultez nos offres sur la page Carrières !",
    
    "stage": "Programme de stage :\n\n📅 Durée : 3 à 6 mois\n💰 Rémunération : Gratification attractive\n🎓 Formation : Accompagnement personnalisé\n🏆 Certification : À la fin du stage\n💼 Opportunité : Possibilité d'embauche\n\nPostulez dès maintenant !",
    
    // Projets et portfolio
    "projets": "Nos réalisations :\n\n🌐 Sites web professionnels — +50 projets\n📱 Applications mobiles — +20 apps\n🎨 Identités visuelles — +100 créations\n🎓 Formations dispensées — +1000 apprenants\n🏢 Entreprises accompagnées — +30 clients\n\nDécouvrez notre portfolio complet !",
    
    "references": "Ils nous font confiance :\n\n🏢 Entreprises locales — PME et startups\n🏭 Grandes entreprises — Multinationales\n🎓 Institutions — Écoles et universités\n👥 Particuliers — Entrepreneurs individuels\n🌍 Organisations — ONG et associations\n\nDevenez notre prochain succès !",
    
    // Garanties et qualité
    "garantie": "Nos garanties :\n\n✅ Satisfaction client — 100% garantie\n🔒 Sécurité des données — Protection maximale\n⏱️ Respect des délais — Livraison à temps\n🔄 Support technique — Assistance continue\n💯 Qualité premium — Standards élevés\n📝 Contrats clairs — Transparence totale\n\nVotre réussite est notre priorité !",
    
    "confidentialite": "Protection de vos données :\n\n🔐 Cryptage SSL — Sécurité maximale\n📋 Politique stricte — Respect RGPD\n🔒 Données sécurisées — Serveurs protégés\n👤 Confidentialité — Aucune revente de données\n📊 Transparence — Vous gardez le contrôle\n\nVos informations sont en sécurité !",
    
    // Questions fréquentes
    "duree": "Délais de réalisation :\n\n⚡ Site vitrine : 1-2 semaines\n🌐 Site e-commerce : 3-6 semaines\n📱 Application mobile : 2-4 mois\n🎨 Identité visuelle : 1-3 semaines\n🎓 Formation : Selon module\n\nNous respectons toujours nos engagements !",
    
    "accompagnement": "Notre accompagnement inclut :\n\n👨‍🏫 Formation à l'utilisation\n📚 Documentation complète\n🎥 Tutoriels vidéo\n💬 Support technique illimité\n🔄 Mises à jour régulières\n📈 Conseils stratégiques\n\nVous n'êtes jamais seul avec Lumynis !"
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
      let botResponse = "";

      // Détection intelligente par mots-clés
      if (lowerInput.includes("service") || lowerInput.includes("offre") || lowerInput.includes("propose")) {
        botResponse = botResponses.services;
      } 
      else if (lowerInput.includes("formation") || lowerInput.includes("cours") || lowerInput.includes("apprendre") || lowerInput.includes("étudier") || lowerInput.includes("certification")) {
        botResponse = botResponses.formations;
      } 
      else if (lowerInput.includes("boutique") || lowerInput.includes("acheter") || lowerInput.includes("achète") || lowerInput.includes("produit") || lowerInput.includes("market") || lowerInput.includes("vente")) {
        botResponse = botResponses.boutique;
      } 
      else if (lowerInput.includes("contact") || lowerInput.includes("contacter") || lowerInput.includes("support") || lowerInput.includes("aide") || lowerInput.includes("assistance") || lowerInput.includes("joindre")) {
        botResponse = botResponses.support;
      } 
      else if (lowerInput.includes("spirit") || lowerInput.includes("spirituel") || lowerInput.includes("méditation") || lowerInput.includes("inspiration") || lowerInput.includes("sagesse")) {
        botResponse = botResponses.spirit;
      } 
      else if (lowerInput.includes("premium") || lowerInput.includes("membre") || lowerInput.includes("abonnement") || lowerInput.includes("abonner") || lowerInput.includes("vip")) {
        botResponse = botResponses.premium;
      }
      // Prix et tarifs
      else if (lowerInput.includes("prix") || lowerInput.includes("tarif") || lowerInput.includes("coût") || lowerInput.includes("coute") || lowerInput.includes("combien") || lowerInput.includes("montant")) {
        botResponse = botResponses.prix;
      }
      // Localisation
      else if (lowerInput.includes("adresse") || lowerInput.includes("localisation") || lowerInput.includes("où") || lowerInput.includes("trouve") || lowerInput.includes("situé") || lowerInput.includes("bureau")) {
        botResponse = botResponses.adresse;
      }
      else if (lowerInput.includes("horaire") || lowerInput.includes("heure") || lowerInput.includes("ouvert") || lowerInput.includes("ferme") || lowerInput.includes("disponible") || lowerInput.includes("quand")) {
        botResponse = botResponses.horaires;
      }
      // Processus
      else if (lowerInput.includes("inscription") || lowerInput.includes("inscrire") || lowerInput.includes("compte") || lowerInput.includes("créer") || lowerInput.includes("rejoindre") || lowerInput.includes("commencer")) {
        botResponse = botResponses.inscription;
      }
      else if (lowerInput.includes("paiement") || lowerInput.includes("payer") || lowerInput.includes("moyen") || lowerInput.includes("mobile money") || lowerInput.includes("carte")) {
        botResponse = botResponses.paiement;
      }
      else if (lowerInput.includes("livraison") || lowerInput.includes("livrer") || lowerInput.includes("délai") || lowerInput.includes("recevoir") || lowerInput.includes("shipping")) {
        botResponse = botResponses.livraison;
      }
      // À propos
      else if (lowerInput.includes("entreprise") || lowerInput.includes("société") || lowerInput.includes("à propos") || lowerInput.includes("qui êtes") || lowerInput.includes("présentation") || lowerInput.includes("mission") || lowerInput.includes("vision")) {
        botResponse = botResponses.entreprise;
      }
      else if (lowerInput.includes("équipe") || lowerInput.includes("team") || lowerInput.includes("staff") || lowerInput.includes("personnel") || lowerInput.includes("qui travaille")) {
        botResponse = botResponses.equipe;
      }
      // Technologie
      else if (lowerInput.includes("technologie") || lowerInput.includes("tech") || lowerInput.includes("framework") || lowerInput.includes("langage") || lowerInput.includes("outil") || lowerInput.includes("développement")) {
        botResponse = botResponses.technologies;
      }
      else if (lowerInput.includes("intelligence artificielle") || lowerInput.includes("ia") || lowerInput.includes("ai") || lowerInput.includes("machine learning") || lowerInput.includes("chatbot")) {
        botResponse = botResponses.ia;
      }
      // Carrière
      else if (lowerInput.includes("emploi") || lowerInput.includes("travail") || lowerInput.includes("job") || lowerInput.includes("carrière") || lowerInput.includes("recrutement") || lowerInput.includes("poste") || lowerInput.includes("candidature")) {
        botResponse = botResponses.emploi;
      }
      else if (lowerInput.includes("stage") || lowerInput.includes("stagiaire") || lowerInput.includes("internship")) {
        botResponse = botResponses.stage;
      }
      // Projets
      else if (lowerInput.includes("projet") || lowerInput.includes("réalisation") || lowerInput.includes("portfolio") || lowerInput.includes("exemple") || lowerInput.includes("avez fait")) {
        botResponse = botResponses.projets;
      }
      else if (lowerInput.includes("référence") || lowerInput.includes("client") || lowerInput.includes("témoignage") || lowerInput.includes("avis") || lowerInput.includes("confiance")) {
        botResponse = botResponses.references;
      }
      // Garanties
      else if (lowerInput.includes("garantie") || lowerInput.includes("sécurité") || lowerInput.includes("fiable") || lowerInput.includes("sûr") || lowerInput.includes("qualité")) {
        botResponse = botResponses.garantie;
      }
      else if (lowerInput.includes("confidentialité") || lowerInput.includes("donnée") || lowerInput.includes("data") || lowerInput.includes("protection") || lowerInput.includes("rgpd") || lowerInput.includes("privée")) {
        botResponse = botResponses.confidentialite;
      }
      // Questions pratiques
      else if (lowerInput.includes("durée") || lowerInput.includes("temps") || lowerInput.includes("combien de temps") || lowerInput.includes("rapidement") || lowerInput.includes("deadline")) {
        botResponse = botResponses.duree;
      }
      else if (lowerInput.includes("accompagnement") || lowerInput.includes("accompagner") || lowerInput.includes("suivi") || lowerInput.includes("après") || lowerInput.includes("maintenance")) {
        botResponse = botResponses.accompagnement;
      }
      // Salutations
      else if (lowerInput.includes("bonjour") || lowerInput.includes("salut") || lowerInput.includes("hello") || lowerInput.includes("hey") || lowerInput.includes("bonsoir")) {
        botResponse = "Bonjour ! 👋 Ravi de vous rencontrer ! Je suis l'Assistant Lumynis IA, votre guide complet pour tout savoir sur nos services. Comment puis-je vous aider aujourd'hui ? 😊";
      }
      else if (lowerInput.includes("merci") || lowerInput.includes("thank") || lowerInput.includes("cool") || lowerInput.includes("super") || lowerInput.includes("génial") || lowerInput.includes("parfait")) {
        botResponse = "Avec grand plaisir ! 🙏 Je suis là pour vous aider. N'hésitez surtout pas si vous avez d'autres questions. Votre satisfaction est ma priorité ! 😊";
      }
      else if (lowerInput.includes("au revoir") || lowerInput.includes("bye") || lowerInput.includes("ciao") || lowerInput.includes("à bientôt")) {
        botResponse = "Au revoir ! 👋 Ce fut un plaisir de vous assister. N'hésitez pas à revenir quand vous voulez. Excellente journée ! ✨";
      }
      // Aide générale
      else if (lowerInput.includes("aide") || lowerInput.includes("help") || lowerInput.includes("aidez-moi") || lowerInput.includes("besoin")) {
        botResponse = "Je suis là pour vous aider ! 🤝\n\nVous pouvez me poser des questions sur :\n\n• Nos services et formations\n• Les prix et tarifs\n• L'inscription et les paiements\n• Notre entreprise et notre équipe\n• Les technologies et projets\n• Les opportunités de carrière\n• Et bien plus encore !\n\nQue voulez-vous savoir ?";
      }
      // Réponse par défaut plus intelligente
      else {
        botResponse = "Je suis là pour répondre à toutes vos questions ! 🤔\n\nJe peux vous renseigner sur :\n\n💼 Services et offres\n🎓 Formations disponibles\n💰 Prix et tarifs\n📍 Localisation et contact\n🔧 Technologies utilisées\n💼 Opportunités d'emploi\n🏆 Nos réalisations\n\nN'hésitez pas à reformuler votre question ou à choisir une suggestion rapide ci-dessous ! 😊";
      }

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
      backdropFilter: 'blur(6px)',
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

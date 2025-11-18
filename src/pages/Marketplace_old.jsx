import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Marketplace() {
  const [colorIndex, setColorIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Synchroniser avec Navbar
  useEffect(() => {
    const handleColorChange = (e) => {
      setColorIndex(e.detail.colorIndex);
    };
    
    window.addEventListener('navbarColorChange', handleColorChange);
    return () => window.removeEventListener('navbarColorChange', handleColorChange);
  }, []);

  const colors = [
    { bg: 'rgba(255,255,255,0.72)', accent: '#4f46e5', gradient: 'linear-gradient(90deg, #4f46e5, #06b6d4)' },
    { bg: 'rgba(255,240,245,0.72)', accent: '#ec4899', gradient: 'linear-gradient(90deg, #ec4899, #f43f5e)' },
    { bg: 'rgba(240,253,250,0.72)', accent: '#10b981', gradient: 'linear-gradient(90deg, #10b981, #14b8a6)' },
    { bg: 'rgba(255,250,235,0.72)', accent: '#f59e0b', gradient: 'linear-gradient(90deg, #f59e0b, #f97316)' },
    { bg: 'rgba(243,232,255,0.72)', accent: '#8b5cf6', gradient: 'linear-gradient(90deg, #8b5cf6, #a78bfa)' },
  ];

  const currentColor = colors[colorIndex];

  const categories = [
    { id: "all", name: "Tous les produits", icon: "🛍️" },
    { id: "design", name: "Design & UI/UX", icon: "🎨" },
    { id: "produit", name: "Produits Physiques", icon: "📦" },
    { id: "site", name: "Sites Web", icon: "🌐" },
    { id: "app", name: "Applications", icon: "📱" },
    { id: "autre", name: "Services & Autres", icon: "⭐" }
  ];

  const defaultLumynisPosts = [
    {
      id: 1,
      title: "Interface Dashboard Analytics",
      description: "Dashboard moderne avec graphiques interactifs et KPIs en temps réel.",
      category: "design",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      price: "Gratuit",
      author: "Lumynis",
    },
    {
      id: 2,
      title: "Application Mobile E-commerce",
      description: "App mobile complète avec panier et paiement intégré.",
      category: "app",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
      price: "299€",
      author: "Lumynis",
    },
    {
      id: 3,
      title: "Site Vitrine Restaurant Gastronomique",
      description: "Site web élégant avec réservation en ligne.",
      category: "site",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
      price: "149€",
      author: "Lumynis",
    },
    {
      id: 4,
      title: "Packaging Produit Bio",
      description: "Design d'emballage éco-responsable pour produits bio.",
      category: "produit",
      image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800",
      price: "89€",
      author: "Lumynis",
    },
    {
      id: 5,
      title: "Système de Design Components",
      description: "Bibliothèque complète de composants UI réutilisables.",
      category: "design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
      price: "Gratuit",
      author: "Lumynis",
    },
    {
      id: 6,
      title: "Application Fitness & Nutrition",
      description: "Tracker d'activités physiques avec plans personnalisés.",
      category: "app",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800",
      price: "199€",
      author: "Lumynis",
    },
    {
      id: 7,
      title: "Charte Graphique Complète",
      description: "Identité visuelle complète avec logo et guide d'utilisation.",
      category: "autre",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800",
      price: "249€",
      author: "Lumynis",
    },
    {
      id: 8,
      title: "Portfolio Créatif Interactif",
      description: "Site portfolio avec animations fluides et galerie de projets.",
      category: "site",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800",
      price: "179€",
      author: "Lumynis",
    },
  ];

  useEffect(() => {
    const savedPosts = localStorage.getItem("userMarketplacePosts");
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  useEffect(() => {
    if (posts.length > 0) {
      localStorage.setItem("userMarketplacePosts", JSON.stringify(posts));
    }
  }, [posts]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitPost = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    const newPost = {
      id: Date.now(),
      ...formData,
      author: "Utilisateur",
    };

    setPosts([newPost, ...posts]);
    setFormData({ title: "", description: "", category: "design", image: "", price: "" });
    setShowModal(false);
    alert("Votre publication est maintenant en ligne !");
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    alert("Paiement de 1$ effectué avec succès !");
    setShowPaymentModal(false);
    setShowModal(true);
  };

  const handleAddComment = (postId) => {
    if (!newComment[postId]?.trim()) return;

    const updatedComments = { ...comments };
    if (!updatedComments[postId]) updatedComments[postId] = [];
    
    updatedComments[postId].push({
      id: Date.now(),
      author: "Anonyme",
      text: newComment[postId],
    });

    setComments(updatedComments);
    setNewComment(prev => ({ ...prev, [postId]: "" }));
  };

  const handleOrderClick = (post) => {
    setSelectedPost(post);
    setShowOrderModal(true);
  };

  const handleOrderFormChange = (e) => {
    const { name, value } = e.target;
    setOrderData(prev => ({ ...prev, [name]: value }));
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    alert("Commande envoyée avec succès !");
    setShowOrderModal(false);
    setOrderData({ name: "", email: "", phone: "", address: "", message: "" });
    setSelectedPost(null);
  };

  const categories = [
    { value: "design", label: "Design" },
    { value: "produit", label: "Produit" },
    { value: "site", label: "Site Web" },
    { value: "app", label: "Application" },
    { value: "autre", label: "Autre" },
  ];

  return (
    <main className="marketplace-root">
      <header className="marketplace-hero">
        <div className="hero-inner">
          <h1>Marketplace Lumynis</h1>
          <button className="btn primary" onClick={() => setShowPaymentModal(true)}>
            + Créer une publication
          </button>
        </div>
      </header>

      {showPaymentModal && (
        <div className="modal-overlay" onClick={() => setShowPaymentModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowPaymentModal(false)}>✕</button>
            <h2>Paiement 1$</h2>
            <form onSubmit={handlePaymentSubmit}>
              <input type="text" placeholder="Numéro de carte" required />
              <button type="submit" className="btn primary">Payer</button>
            </form>
          </div>
        </div>
      )}

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>✕</button>
            <h2>Nouvelle publication</h2>
            <form onSubmit={handleSubmitPost}>
              <input
                type="text"
                name="title"
                placeholder="Titre"
                value={formData.title}
                onChange={handleFormChange}
                required
              />
              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleFormChange}
                required
              />
              <select name="category" value={formData.category} onChange={handleFormChange}>
                {categories.map(cat => (
                  <option key={cat.value} value={cat.value}>{cat.label}</option>
                ))}
              </select>
              <input
                type="url"
                name="image"
                placeholder="URL image"
                value={formData.image}
                onChange={handleFormChange}
              />
              <input
                type="text"
                name="price"
                placeholder="Prix"
                value={formData.price}
                onChange={handleFormChange}
              />
              <button type="submit" className="btn primary">Publier</button>
            </form>
          </div>
        </div>
      )}

      {showOrderModal && selectedPost && (
        <div className="modal-overlay" onClick={() => setShowOrderModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowOrderModal(false)}>✕</button>
            <h2>Commander: {selectedPost.title}</h2>
            <p>Prix: {selectedPost.price}</p>
            <form onSubmit={handleOrderSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Nom complet"
                value={orderData.name}
                onChange={handleOrderFormChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={orderData.email}
                onChange={handleOrderFormChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Téléphone"
                value={orderData.phone}
                onChange={handleOrderFormChange}
                required
              />
              <textarea
                name="address"
                placeholder="Adresse"
                value={orderData.address}
                onChange={handleOrderFormChange}
                required
              />
              <button type="submit" className="btn primary">Confirmer</button>
            </form>
          </div>
        </div>
      )}

      <div className="marketplace-grid">
        {defaultLumynisPosts.map(post => (
          <article key={post.id} className="post-card">
            {post.image && <img src={post.image} alt={post.title} />}
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <p className="price">{post.price}</p>
            <p className="author">Par {post.author}</p>
            <button className="btn primary" onClick={() => handleOrderClick(post)}>
              Commander
            </button>
            <div>
              <h4>Commentaires ({(comments[post.id] || []).length})</h4>
              {(comments[post.id] || []).map(comment => (
                <div key={comment.id}>
                  <strong>{comment.author}:</strong> {comment.text}
                </div>
              ))}
              <input
                type="text"
                placeholder="Commenter"
                value={newComment[post.id] || ""}
                onChange={(e) => setNewComment(prev => ({ ...prev, [post.id]: e.target.value }))}
                onKeyPress={(e) => e.key === "Enter" && handleAddComment(post.id)}
              />
            </div>
          </article>
        ))}

        {posts.map(post => (
          <article key={post.id} className="post-card">
            {post.image && <img src={post.image} alt={post.title} />}
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <p className="price">{post.price}</p>
            <p className="author">Par {post.author}</p>
            <button className="btn primary" onClick={() => handleOrderClick(post)}>
              Commander
            </button>
          </article>
        ))}
      </div>

      <style>{`
        .marketplace-root {
          font-family: Arial, sans-serif;
          padding: 20px;
        }
        .marketplace-hero {
          text-align: center;
          margin-bottom: 30px;
        }
        .hero-inner h1 {
          margin-bottom: 20px;
        }
        .btn {
          padding: 10px 20px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: bold;
        }
        .btn.primary {
          background: linear-gradient(90deg, #4f46e5, #06b6d4);
          color: white;
        }
        .marketplace-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }
        .post-card {
          border: 1px solid #ddd;
          border-radius: 12px;
          padding: 15px;
          background: white;
        }
        .post-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 10px;
        }
        .price {
          color: #4f46e5;
          font-weight: bold;
          font-size: 18px;
        }
        .author {
          color: #666;
          font-size: 14px;
        }
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .modal-content {
          background: white;
          padding: 30px;
          border-radius: 12px;
          max-width: 500px;
          width: 100%;
          position: relative;
        }
        .modal-close {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
        }
        .modal-content form {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .modal-content input,
        .modal-content textarea,
        .modal-content select {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 8px;
        }
      `}</style>
    </main>
  );
}

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Marketplace() {
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "design",
    image: "",
    price: "",
  });
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState({});
  const navigate = useNavigate();

  // Charger les posts depuis localStorage au démarrage
  useEffect(() => {
    const savedPosts = localStorage.getItem("marketplacePosts");
    if (savedPosts) setPosts(JSON.parse(savedPosts));
  }, []);

  // Sauvegarder les posts dans localStorage
  useEffect(() => {
    localStorage.setItem("marketplacePosts", JSON.stringify(posts));
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
      author: JSON.parse(localStorage.getItem("user"))?.name || "Anonyme",
      createdAt: new Date().toISOString(),
      likes: 0,
    };

    setPosts([newPost, ...posts]);
    setFormData({ title: "", description: "", category: "design", image: "", price: "" });
    setShowModal(false);
  };

  const handleAddComment = (postId) => {
    if (!newComment[postId]?.trim()) return;

    const updatedComments = { ...comments };
    if (!updatedComments[postId]) updatedComments[postId] = [];
    
    updatedComments[postId].push({
      id: Date.now(),
      author: JSON.parse(localStorage.getItem("user"))?.name || "Anonyme",
      text: newComment[postId],
      createdAt: new Date().toISOString(),
    });

    setComments(updatedComments);
    setNewComment(prev => ({ ...prev, [postId]: "" }));
  };

  const categories = [
    { value: "design", label: "Design" },
    { value: "produit", label: "Produit" },
    { value: "site", label: "Site Web" },
    { value: "app", label: "Application" },
    { value: "autre", label: "Autre" },
  ];

  return (
    <main className="marketplace-root" aria-labelledby="marketplace-heading">
      <header className="marketplace-hero">
        <div className="hero-inner">
          <p className="eyebrow">Marketplace</p>
          <h1 id="marketplace-heading" className="hero-title">Partagez vos créations</h1>
          <p className="hero-lead">Publiez vos designs, produits et sites — Obtenez des retours instantanés de la communauté.</p>
          <button className="btn primary" onClick={() => setShowModal(true)}>+ Créer une publication</button>
        </div>
      </header>

      {/* Modal de création */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>✕</button>
            <h2>Partager une création</h2>
            <form onSubmit={handleSubmitPost}>
              <input
                type="text"
                name="title"
                placeholder="Titre de votre création"
                value={formData.title}
                onChange={handleFormChange}
                required
              />
              <textarea
                name="description"
                placeholder="Décrivez votre création..."
                value={formData.description}
                onChange={handleFormChange}
                rows="4"
                required
              />
              <select name="category" value={formData.category} onChange={handleFormChange}>
                {categories.map(cat => <option key={cat.value} value={cat.value}>{cat.label}</option>)}
              </select>
              <input
                type="url"
                name="image"
                placeholder="URL de l'image (optionnel)"
                value={formData.image}
                onChange={handleFormChange}
              />
              <input
                type="text"
                name="price"
                placeholder="Prix (optionnel)"
                value={formData.price}
                onChange={handleFormChange}
              />
              <button type="submit" className="btn primary">Publier</button>
            </form>
          </div>
        </div>
      )}

      {/* Grille de posts */}
      <div className="marketplace-grid">
        {posts.length === 0 ? (
          <div className="empty-state">
            <p>Aucune publication pour le moment. Soyez le premier à partager ! 🚀</p>
          </div>
        ) : (
          posts.map(post => (
            <article key={post.id} className="post-card">
              {post.image && <img src={post.image} alt={post.title} className="post-image" />}
              <div className="post-body">
                <div className="post-header">
                  <h3>{post.title}</h3>
                  <span className="post-category">{categories.find(c => c.value === post.category)?.label}</span>
                </div>
                <p className="post-description">{post.description}</p>
                {post.price && <p className="post-price">{post.price}</p>}
                <p className="post-author">Par {post.author}</p>

                {/* Section commentaires */}
                <div className="comments-section">
                  <h4>Commentaires ({(comments[post.id] || []).length})</h4>
                  
                  <div className="comments-list">
                    {(comments[post.id] || []).map(comment => (
                      <div key={comment.id} className="comment">
                        <strong>{comment.author}</strong>
                        <p>{comment.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="comment-input">
                    <input
                      type="text"
                      placeholder="Ajouter un commentaire..."
                      value={newComment[post.id] || ""}
                      onChange={(e) => setNewComment(prev => ({ ...prev, [post.id]: e.target.value }))}
                      onKeyPress={(e) => e.key === "Enter" && handleAddComment(post.id)}
                    />
                    <button className="btn small" onClick={() => handleAddComment(post.id)}>Commenter</button>
                  </div>
                </div>
              </div>
            </article>
          ))
        )}
      </div>

      <style>{`
        :root {
          --max: 1200px;
          --accent1: #4f46e5;
          --accent2: #06b6d4;
          --text: #061220;
          --text-strong: #000000;
          --muted: #4b5563;
          --card: #fff;
          --radius: 12px;
          --shadow: 0 16px 50px rgba(16,24,40,0.06);
        }

        .marketplace-root {
          font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial;
          color: var(--text-strong);
          -webkit-font-smoothing: antialiased;
        }

        /* HERO */
        .marketplace-hero {
          background: linear-gradient(180deg, #f8fbff, #ffffff);
          padding: 48px 16px;
          text-align: center;
        }
        .hero-inner { max-width: 900px; margin: 0 auto; }
        .eyebrow {
          text-transform: uppercase;
          color: var(--muted);
          font-weight: 700;
          letter-spacing: 0.12em;
          font-size: 12px;
          margin-bottom: 8px;
        }
        .hero-title {
          font-size: clamp(26px, 4.5vw, 40px);
          margin: 0 0 10px;
          font-weight: 900;
          line-height: 1.06;
        }
        .hero-lead {
          color: var(--text-strong);
          font-size: 18px;
          line-height: 1.7;
          max-width: 62ch;
          margin: 0 auto 20px;
          font-weight: 500;
        }

        /* GRID */
        .marketplace-grid {
          max-width: var(--max);
          margin: 28px auto;
          padding: 0 16px;
          display: grid;
          gap: 24px;
          grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
        }

        .empty-state {
          grid-column: 1 / -1;
          text-align: center;
          padding: 60px 20px;
          color: var(--muted);
          font-size: 18px;
        }

        /* POST CARD */
        .post-card {
          background: var(--card);
          border-radius: var(--radius);
          border: 1px solid rgba(15,23,42,0.04);
          box-shadow: var(--shadow);
          overflow: hidden;
          transition: transform .14s ease, box-shadow .14s ease;
        }
        .post-card:hover { transform: translateY(-6px); box-shadow: 0 26px 60px rgba(16,24,40,0.08); }

        .post-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          display: block;
        }

        .post-body { padding: 18px; display: flex; flex-direction: column; }

        .post-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          gap: 10px;
          margin-bottom: 10px;
        }
        .post-header h3 { margin: 0; font-size: 17px; font-weight: 800; color: var(--text-strong); }
        .post-category {
          background: rgba(79,70,229,0.1);
          color: var(--accent1);
          padding: 4px 8px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 700;
        }

        .post-description { margin: 0 0 8px; color: var(--text-strong); font-size: 15px; line-height: 1.6; }
        .post-price { margin: 0 0 8px; font-weight: 800; color: var(--accent1); font-size: 16px; }
        .post-author { margin: 0 0 12px; color: var(--muted); font-size: 13px; font-weight: 600; }

        /* COMMENTS */
        .comments-section { border-top: 1px solid rgba(15,23,42,0.04); padding-top: 12px; margin-top: 12px; }
        .comments-section h4 { margin: 0 0 10px; font-size: 14px; font-weight: 800; color: var(--text-strong); }

        .comments-list { max-height: 200px; overflow-y: auto; margin-bottom: 10px; }
        .comment {
          padding: 8px;
          background: rgba(15,23,42,0.02);
          border-radius: 8px;
          margin-bottom: 8px;
        }
        .comment strong { color: var(--text-strong); font-size: 13px; }
        .comment p { margin: 4px 0 0; color: var(--text-strong); font-size: 13px; line-height: 1.5; }

        .comment-input {
          display: flex;
          gap: 8px;
        }
        .comment-input input {
          flex: 1;
          padding: 8px 10px;
          border: 1px solid rgba(15,23,42,0.1);
          border-radius: 8px;
          font-size: 13px;
          color: var(--text-strong);
        }
        .comment-input input::placeholder { color: var(--muted); }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 16px;
          border-radius: 10px;
          border: none;
          font-weight: 800;
          cursor: pointer;
          text-decoration: none;
          font-size: 15px;
          transition: all .14s ease;
        }
        .btn.primary {
          color: #fff;
          background: linear-gradient(90deg, var(--accent1), var(--accent2));
          box-shadow: var(--shadow);
        }
        .btn.primary:hover { transform: translateY(-2px); }
        .btn.small { padding: 6px 10px; font-size: 12px; }

        /* MODAL */
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
          padding: 20px;
        }

        .modal-content {
          background: #fff;
          border-radius: 14px;
          padding: 28px;
          max-width: 500px;
          width: 100%;
          box-shadow: 0 40px 80px rgba(0,0,0,0.2);
          position: relative;
        }

        .modal-close {
          position: absolute;
          top: 12px;
          right: 12px;
          background: none;
          border: none;
          font-size: 20px;
          cursor: pointer;
          color: var(--muted);
        }

        .modal-content h2 { margin: 0 0 16px; font-size: 20px; font-weight: 900; color: var(--text-strong); }

        .modal-content form {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .modal-content input,
        .modal-content textarea,
        .modal-content select {
          padding: 10px 12px;
          border: 1px solid rgba(15,23,42,0.1);
          border-radius: 10px;
          font-family: inherit;
          font-size: 14px;
          color: var(--text-strong);
        }

        .modal-content input:focus,
        .modal-content textarea:focus,
        .modal-content select:focus {
          outline: none;
          border-color: var(--accent1);
          box-shadow: 0 0 0 3px rgba(79,70,229,0.1);
        }

        @media(max-width: 768px) {
          .marketplace-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  );
}
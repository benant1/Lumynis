import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const posts = [
    {
      id: 1,
      title: "Comment concevoir un produit qui dure",
      excerpt: "Les principes de durabilité appliqués au design numérique : choix tech, architecture et impact environnemental.",
      category: "design",
      author: "Marie Dupont",
      date: "15 Jan 2025",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1000&q=80",
      slug: "concevoir-produit-durable"
    },
    {
      id: 2,
      title: "MVP vs Prototype : quand lancer ?",
      excerpt: "Comprendre la différence entre un MVP et un prototype pour optimiser votre time-to-market et vos ressources.",
      category: "strategy",
      author: "Jean Martin",
      date: "10 Jan 2025",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80",
      slug: "mvp-vs-prototype"
    },
    {
      id: 3,
      title: "Architecture scalable : les fondations qui comptent",
      excerpt: "Construire une plateforme capable de croître sans refonte majeure. Best practices et pièges à éviter.",
      category: "tech",
      author: "Sophie Lefevre",
      date: "5 Jan 2025",
      readTime: "10 min",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=80",
      slug: "architecture-scalable"
    },
    {
      id: 4,
      title: "Design thinking : de la théorie à la pratique",
      excerpt: "Atelier, facilitation, itération. Comment appliquer le design thinking en équipe pour innover rapidement.",
      category: "design",
      author: "Marie Dupont",
      date: "22 Dec 2024",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80",
      slug: "design-thinking-pratique"
    },
    {
      id: 5,
      title: "Metrics that matter : KPIs pour startups",
      excerpt: "Quels indicateurs vraiment suivre pour valider votre modèle et prendre les bonnes décisions rapidement.",
      category: "strategy",
      author: "Thomas Renaud",
      date: "18 Dec 2024",
      readTime: "9 min",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
      slug: "metrics-kpis"
    },
    {
      id: 6,
      title: "API-first : pourquoi et comment",
      excerpt: "Construire son produit autour d'une API permet flexibilité, intégration et scalabilité. Guide pratique.",
      category: "tech",
      author: "Sophie Lefevre",
      date: "12 Dec 2024",
      readTime: "11 min",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=80",
      slug: "api-first-guide"
    },
  ];

  const categories = [
    { value: "all", label: "Tous les articles" },
    { value: "design", label: "Design" },
    { value: "tech", label: "Technologie" },
    { value: "strategy", label: "Stratégie" },
  ];

  const filtered = selectedCategory === "all"
    ? posts
    : posts.filter(p => p.category === selectedCategory);

  return (
    <main className="blog-root" aria-labelledby="blog-heading">
      <header className="blog-hero">
        <div className="hero-inner">
          <p className="eyebrow">Blog</p>
          <h1 id="blog-heading" className="hero-title">Insights, guides et histoires</h1>
          <p className="hero-lead">Pensées sur design, technologie et stratégie produit — directement du terrain.</p>
        </div>
      </header>

      <div className="blog-filters" aria-label="Filtres de catégorie">
        {categories.map(cat => (
          <button
            key={cat.value}
            onClick={() => setSelectedCategory(cat.value)}
            className={`filter-btn ${selectedCategory === cat.value ? "active" : ""}`}
            aria-pressed={selectedCategory === cat.value}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <section className="blog-grid" aria-label="Articles">
        {filtered.map(post => (
          <article key={post.id} className="post-card">
            <div className="post-image">
              <img src={post.image} alt={post.title} loading="lazy" />
              <div className="post-category">{categories.find(c => c.value === post.category)?.label}</div>
            </div>

            <div className="post-body">
              <h3 className="post-title">{post.title}</h3>
              <p className="post-excerpt">{post.excerpt}</p>

              <div className="post-meta">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>

              <div className="post-footer">
                <Link to={`/blog/${post.slug}`} className="post-link">Lire l'article</Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      {filtered.length === 0 && (
        <div className="no-results">
          <p>Aucun article dans cette catégorie pour le moment.</p>
        </div>
      )}

      <section className="blog-cta">
        <div className="cta-inner">
          <h3>Recevez les nouveautés</h3>
          <p className="muted">Abonnez-vous pour être notifié des nouveaux articles et guides.</p>
          <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert("Inscription confirmée !"); }}>
            <input type="email" placeholder="Votre e-mail" required />
            <button type="submit" className="btn primary">S'abonner</button>
          </form>
        </div>
      </section>

      <style>{`
        :root {
          --max: 1200px;
          --accent1: #4f46e5;
          --accent2: #06b6d4;
          --text: #061220;
          --text-strong: #030812;
          --muted: #4b5563;
          --card: #fff;
          --radius: 12px;
          --shadow: 0 16px 50px rgba(16,24,40,0.06);
        }

        .blog-root {
          font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial;
          color: var(--text-strong);
          -webkit-font-smoothing: antialiased;
        }

        /* HERO */
        .blog-hero {
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
          color: var(--text-strong);
        }
        .hero-lead {
          color: var(--text-strong);
          font-size: 17px;
          line-height: 1.7;
          max-width: 62ch;
          margin: 0 auto;
          font-weight: 500;
        }

        /* FILTERS */
        .blog-filters {
          max-width: var(--max);
          margin: 20px auto;
          padding: 0 16px;
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .filter-btn {
          padding: 8px 14px;
          border: 2px solid rgba(15,23,42,0.1);
          border-radius: 10px;
          background: #fff;
          color: var(--text-strong);
          font-weight: 700;
          cursor: pointer;
          transition: all .14s ease;
          font-size: 15px;
        }
        .filter-btn:hover { background: rgba(15,23,42,0.04); border-color: rgba(15,23,42,0.2); }
        .filter-btn.active {
          background: linear-gradient(90deg, var(--accent1), var(--accent2));
          color: #fff;
          border-color: transparent;
        }

        /* GRID */
        .blog-grid {
          max-width: var(--max);
          margin: 20px auto;
          padding: 0 16px;
          display: grid;
          gap: 24px;
          grid-template-columns: 1fr;
        }
        @media(min-width: 768px) { .blog-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media(min-width: 1100px) { .blog-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }

        /* POST CARD */
        .post-card {
          display: flex;
          flex-direction: column;
          background: linear-gradient(180deg, var(--card), #fff);
          border-radius: 12px;
          border: 1px solid rgba(15,23,42,0.04);
          box-shadow: 0 10px 30px rgba(16,24,40,0.04);
          overflow: hidden;
          transition: transform .14s ease, box-shadow .14s ease;
        }
        .post-card:hover { transform: translateY(-6px); box-shadow: 0 26px 60px rgba(16,24,40,0.08); }

        .post-image {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
          background: #f0f0f0;
        }
        .post-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .28s ease;
          filter: brightness(0.85) contrast(1.02);
        }
        .post-card:hover .post-image img { transform: scale(1.04); }
        .post-category {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(79,70,229,0.95);
          color: #fff;
          padding: 6px 10px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 800;
        }

        .post-body {
          padding: 18px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .post-title {
          margin: 0 0 8px;
          font-size: 17px;
          font-weight: 800;
          color: var(--text-strong);
          line-height: 1.4;
        }
        .post-excerpt {
          margin: 0 0 12px;
          color: var(--text-strong);
          font-size: 15px;
          line-height: 1.65;
          flex: 1;
          font-weight: 500;
        }
        .post-meta {
          display: flex;
          gap: 8px;
          color: var(--muted);
          font-size: 13px;
          margin-bottom: 12px;
          font-weight: 600;
        }

        .post-footer { display: flex; align-items: center; }
        .post-link {
          color: #09203a;
          text-decoration: none;
          font-weight: 800;
          font-size: 15px;
        }
        .post-link:hover { text-decoration: underline; color: var(--accent1); }

        /* NO RESULTS */
        .no-results {
          text-align: center;
          padding: 40px 16px;
          color: var(--muted);
          font-size: 16px;
        }

        /* CTA */
        .blog-cta { background: linear-gradient(90deg, #fbfdff, #ffffff); padding: 34px 16px; margin-top: 28px; }
        .cta-inner { max-width: 900px; margin: 0 auto; text-align: center; }
        .cta-inner h3 {
          margin: 0 0 6px;
          font-size: 18px;
          font-weight: 800;
          color: var(--text-strong);
        }

        .newsletter-form {
          margin-top: 14px;
          display: flex;
          gap: 10px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .newsletter-form input {
          padding: 10px 14px;
          border-radius: 10px;
          border: 1px solid rgba(15,23,42,0.1);
          background: #fff;
          font-size: 15px;
          min-width: 240px;
          color: var(--text-strong);
        }
        .newsletter-form input::placeholder { color: var(--muted); }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 16px;
          border-radius: 10px;
          border: none;
          font-weight: 700;
          cursor: pointer;
          text-decoration: none;
          font-size: 15px;
        }
        .btn.primary {
          color: #fff;
          background: linear-gradient(90deg, var(--accent1), var(--accent2));
          box-shadow: var(--shadow);
        }

        .muted { color: var(--muted); font-size: 16px; font-weight: 500; }

        /* Mobile */
        @media(max-width: 639px) {
          .post-image { height: 160px; }
          .newsletter-form { flex-direction: column; }
          .newsletter-form input { min-width: 100%; }
        }

        :focus-visible { outline: 3px solid rgba(79,70,229,0.14); outline-offset: 3px; border-radius: 8px; }
      `}</style>
    </main>
  );
}
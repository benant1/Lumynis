import React, { useState, useEffect } from "react";

export default function Marketplace() {
  const [colorIndex, setColorIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    console.log('✅ Marketplace component mounted successfully');
    const handleColorChange = (e) => {
      setColorIndex(e.detail.colorIndex);
    };
    window.addEventListener('navbarColorChange', handleColorChange);
    return () => window.removeEventListener('navbarColorChange', handleColorChange);
  }, []);

  const colors = [
    { bg: 'rgba(255,255,255,0.95)', gradient: 'linear-gradient(90deg, #4f46e5, #06b6d4)' },
    { bg: 'rgba(255,240,245,0.95)', gradient: 'linear-gradient(90deg, #ec4899, #f43f5e)' },
    { bg: 'rgba(240,253,250,0.95)', gradient: 'linear-gradient(90deg, #10b981, #14b8a6)' },
    { bg: 'rgba(255,250,235,0.95)', gradient: 'linear-gradient(90deg, #f59e0b, #f97316)' },
    { bg: 'rgba(243,232,255,0.95)', gradient: 'linear-gradient(90deg, #8b5cf6, #a78bfa)' },
  ];

  const currentColor = colors[colorIndex];

  const products = [
    { id: 1, category: 'formations', title: 'Formation React & Vite', author: 'Alex Dev', price: '45 000 FCFA', rating: 4.9, sales: 1234, image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400', badge: 'Bestseller' },
    { id: 2, category: 'templates', title: 'Dashboard UI Kit Pro', author: 'Sarah Design', price: '25 000 FCFA', rating: 4.8, sales: 856, image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400', badge: 'Nouveau' },
    { id: 3, category: 'software', title: 'Tool de Productivité', author: 'Dev Studio', price: '60 000 FCFA', rating: 4.7, sales: 423, image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400', badge: 'Promo -30%' },
    { id: 4, category: 'ebooks', title: 'Guide Complet TypeScript', author: 'Marie Code', price: '15 000 FCFA', rating: 5.0, sales: 2341, image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400', badge: 'Top Ventes' },
    { id: 5, category: 'services', title: 'Consultation Web Dev', author: 'Pro Team', price: '80 000 FCFA', rating: 4.9, sales: 234, image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400', badge: 'Premium' },
    { id: 6, category: 'formations', title: 'Maîtriser Node.js & Express', author: 'John Backend', price: '50 000 FCFA', rating: 4.8, sales: 967, image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400', badge: 'Bestseller' },
    { id: 7, category: 'templates', title: 'Portfolio Moderne 2025', author: 'Creative Lab', price: '20 000 FCFA', rating: 4.6, sales: 654, image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400', badge: 'Nouveau' },
    { id: 8, category: 'software', title: 'CRM Smart Business', author: 'Tech Corp', price: '120 000 FCFA', rating: 4.9, sales: 189, image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400', badge: 'Premium' },
    { id: 9, category: 'ebooks', title: 'Les Secrets du SEO', author: 'Marketing Pro', price: '18 000 FCFA', rating: 4.7, sales: 1432, image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400', badge: '' },
    { id: 10, category: 'services', title: 'Design UI/UX sur mesure', author: 'Studio Design', price: '150 000 FCFA', rating: 5.0, sales: 87, image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400', badge: 'Premium' },
    { id: 11, category: 'formations', title: 'Python pour Data Science', author: 'Data Academy', price: '55 000 FCFA', rating: 4.8, sales: 723, image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400', badge: '' },
    { id: 12, category: 'templates', title: 'E-commerce Template', author: 'Shop Designers', price: '35 000 FCFA', rating: 4.9, sales: 1056, image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400', badge: 'Bestseller' }
  ];

  const categories = [
    { id: 'all', icon: '🛍️', title: 'Tous les produits' },
    { id: 'formations', icon: '🎓', title: 'Formations' },
    { id: 'templates', icon: '🎨', title: 'Templates & Design' },
    { id: 'software', icon: '💻', title: 'Logiciels & Apps' },
    { id: 'ebooks', icon: '📚', title: 'E-books & Guides' },
    { id: 'services', icon: '⭐', title: 'Services Premium' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div style={{
      minHeight: '100vh',
      background: currentColor.bg,
      backdropFilter: 'blur(6px)',
      transition: 'background 0.8s ease-in-out',
      padding: '60px 20px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* ========== SECTION HERO ========== */}
        <section style={{ textAlign: 'center', marginBottom: '80px', padding: '40px 0' }}>
          <h1 style={{
            fontSize: 'clamp(32px, 6vw, 56px)',
            fontWeight: '900',
            background: currentColor.gradient,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '20px',
            lineHeight: '1.2'
          }}>
            🛍️ Lumynis Marketplace
          </h1>
          <p style={{
            fontSize: 'clamp(16px, 3vw, 20px)',
            color: '#6b7280',
            maxWidth: '700px',
            margin: '0 auto 40px',
            lineHeight: '1.6'
          }}>
            Découvrez et vendez vos créations digitales. Formations, templates, logiciels, ebooks et services créés par la communauté.
          </p>
          <button style={{
            background: currentColor.gradient,
            color: 'white',
            padding: '16px 40px',
            fontSize: '18px',
            fontWeight: '700',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            boxShadow: '0 10px 30px rgba(102,126,234,0.3)'
          }}>
            💼 Devenir Vendeur
          </button>
        </section>

        {/* ========== SECTION FILTRES ========== */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '900', color: '#0f172a', marginBottom: '24px', textAlign: 'center' }}>
            📂 Filtrer par catégorie
          </h2>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  background: selectedCategory === cat.id ? currentColor.gradient : 'white',
                  color: selectedCategory === cat.id ? 'white' : '#0f172a',
                  padding: '12px 24px',
                  fontSize: '15px',
                  fontWeight: '600',
                  border: selectedCategory === cat.id ? 'none' : '2px solid #e5e7eb',
                  borderRadius: '12px',
                  cursor: 'pointer'
                }}
              >
                {cat.icon} {cat.title}
              </button>
            ))}
          </div>
        </section>

        {/* ========== SECTION PRODUITS ========== */}
        <section>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '32px'
          }}>
            <h2 style={{ fontSize: '28px', fontWeight: '900', color: '#0f172a' }}>
              🎯 Produits disponibles ({filteredProducts.length})
            </h2>
            <select style={{
              padding: '12px 20px',
              borderRadius: '10px',
              border: '2px solid #e5e7eb',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              background: 'white'
            }}>
              <option>Trier par: Popularité</option>
              <option>Prix croissant</option>
              <option>Prix décroissant</option>
              <option>Nouveautés</option>
              <option>Meilleures notes</option>
            </select>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '32px',
            marginBottom: '80px'
          }}>
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  border: '1px solid rgba(15,23,42,0.06)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
              >
                {product.badge && (
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: product.badge.includes('Bestseller') || product.badge.includes('Top') 
                      ? '#f59e0b' 
                      : product.badge.includes('Nouveau') 
                        ? '#10b981' 
                        : '#8b5cf6',
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    fontSize: '11px',
                    fontWeight: '700',
                    zIndex: 1
                  }}>
                    {product.badge}
                  </div>
                )}

                <div style={{
                  height: '220px',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <img 
                    src={product.image} 
                    alt={product.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>

                <div style={{ padding: '20px' }}>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    color: '#0f172a',
                    marginBottom: '8px',
                    lineHeight: '1.3'
                  }}>
                    {product.title}
                  </h3>
                  <p style={{
                    fontSize: '13px',
                    color: '#6b7280',
                    marginBottom: '12px'
                  }}>
                    Par <strong>{product.author}</strong>
                  </p>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '12px'
                  }}>
                    <div style={{ color: '#f59e0b', fontSize: '14px' }}>
                      {'⭐'.repeat(Math.floor(product.rating))}
                    </div>
                    <span style={{ fontSize: '14px', fontWeight: '600', color: '#0f172a' }}>
                      {product.rating}
                    </span>
                    <span style={{ fontSize: '13px', color: '#9ca3af' }}>
                      ({product.sales} ventes)
                    </span>
                  </div>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: '12px',
                    borderTop: '1px solid #f3f4f6'
                  }}>
                    <div style={{
                      fontSize: '20px',
                      fontWeight: '900',
                      color: '#0f172a'
                    }}>
                      {product.price}
                    </div>
                    <button style={{
                      background: currentColor.gradient,
                      color: 'white',
                      padding: '8px 16px',
                      fontSize: '13px',
                      fontWeight: '700',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer'
                    }}>
                      Acheter
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========== SECTION CTA FINAL ========== */}
        <section style={{
          marginTop: '80px',
          padding: '60px 40px',
          background: 'rgba(255,255,255,0.9)',
          borderRadius: '20px',
          textAlign: 'center',
          boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: '900',
            marginBottom: '16px',
            color: '#0f172a'
          }}>
            Prêt à vendre vos créations ?
          </h2>
          <p style={{ fontSize: '18px', color: '#6b7280', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
            Rejoignez des milliers de créateurs et commencez à monétiser vos compétences dès aujourd'hui
          </p>
          <button style={{
            background: currentColor.gradient,
            color: 'white',
            padding: '16px 40px',
            fontSize: '18px',
            fontWeight: '700',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            boxShadow: '0 10px 30px rgba(102,126,234,0.3)'
          }}>
            Créer mon compte vendeur
          </button>
        </section>
      </div>
    </div>
  );
}

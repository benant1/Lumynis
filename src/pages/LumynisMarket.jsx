import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function LumynisMarket() {
  const [colorIndex, setColorIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

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
    { id: "formations", name: "Formations", icon: "🎓" },
    { id: "templates", name: "Templates & Design", icon: "🎨" },
    { id: "software", name: "Logiciels & Apps", icon: "💻" },
    { id: "ebooks", name: "E-books & Guides", icon: "📚" },
    { id: "services", name: "Services Premium", icon: "⭐" }
  ];

  const products = [
    {
      id: 1,
      name: "Formation Complete IA & Machine Learning",
      category: "formations",
      price: 150000,
      oldPrice: 200000,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=400&q=80",
      rating: 4.9,
      reviews: 234,
      badge: "Bestseller",
      description: "Maîtrisez l'IA de A à Z avec 40h de contenu"
    },
    {
      id: 2,
      name: "Pack Premium Templates UI/UX",
      category: "templates",
      price: 45000,
      oldPrice: 75000,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=400&q=80",
      rating: 4.8,
      reviews: 189,
      badge: "Promo -40%",
      description: "100+ templates professionnels Figma & Adobe XD"
    },
    {
      id: 3,
      name: "App Mobile Complète - Code Source",
      category: "software",
      price: 250000,
      oldPrice: 350000,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&q=80",
      rating: 5.0,
      reviews: 67,
      badge: "Nouveau",
      description: "App React Native full-stack prête à déployer"
    },
    {
      id: 4,
      name: "Guide Entrepreneuriat Digital 2025",
      category: "ebooks",
      price: 25000,
      oldPrice: 40000,
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80",
      rating: 4.7,
      reviews: 456,
      badge: "Populaire",
      description: "Stratégies éprouvées pour réussir en ligne"
    },
    {
      id: 5,
      name: "Développement Web Full-Stack",
      category: "formations",
      price: 180000,
      oldPrice: 250000,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80",
      rating: 4.9,
      reviews: 312,
      badge: "Bestseller",
      description: "De débutant à expert en 3 mois"
    },
    {
      id: 6,
      name: "Dashboard Admin Pro Template",
      category: "templates",
      price: 35000,
      oldPrice: 60000,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
      rating: 4.8,
      reviews: 145,
      badge: "Promo",
      description: "Template React admin moderne et responsive"
    },
    {
      id: 7,
      name: "SEO & Marketing Digital Masterclass",
      category: "formations",
      price: 120000,
      oldPrice: 180000,
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?auto=format&fit=crop&w=400&q=80",
      rating: 4.6,
      reviews: 278,
      badge: "Top Rated",
      description: "Techniques avancées de référencement"
    },
    {
      id: 8,
      name: "Plugin WordPress Premium Pack",
      category: "software",
      price: 55000,
      oldPrice: 90000,
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=400&q=80",
      rating: 4.7,
      reviews: 203,
      badge: "Bundle",
      description: "10 plugins WordPress essentiels"
    },
    {
      id: 9,
      name: "Brand Identity Design Kit",
      category: "templates",
      price: 40000,
      oldPrice: 65000,
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=400&q=80",
      rating: 4.9,
      reviews: 167,
      badge: "Premium",
      description: "Kit complet pour créer votre identité visuelle"
    },
    {
      id: 10,
      name: "Consultation Personnalisée 1h",
      category: "services",
      price: 75000,
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=400&q=80",
      rating: 5.0,
      reviews: 89,
      badge: "VIP",
      description: "Coaching individuel avec nos experts"
    },
    {
      id: 11,
      name: "Python pour Data Science",
      category: "formations",
      price: 140000,
      oldPrice: 200000,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80",
      rating: 4.8,
      reviews: 298,
      badge: "Trending",
      description: "Analyse de données avec Python & Pandas"
    },
    {
      id: 12,
      name: "Landing Page Builder Pro",
      category: "software",
      price: 85000,
      oldPrice: 120000,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
      rating: 4.7,
      reviews: 156,
      badge: "Hot",
      description: "Créez des landing pages en quelques clics"
    }
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => 
        item.id === product.id ? {...item, quantity: item.quantity + 1} : item
      ));
    } else {
      setCart([...cart, {...product, quantity: 1}]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item => 
        item.id === productId ? {...item, quantity: newQuantity} : item
      ));
    }
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: currentColor.bg,
      backdropFilter: 'blur(6px)',
      transition: 'background 0.8s ease-in-out'
    }}>
      <main className="market-root" aria-labelledby="market-heading">
        {/* Hero */}
        <header className="market-hero">
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">Lumynis Market</p>
              <h1 id="market-heading" className="hero-title">Votre boutique digitale de référence</h1>
              <p className="hero-lead">
                Formations, templates, logiciels et services premium pour propulser vos projets. 
                Paiement sécurisé et livraison instantanée.
              </p>

              <div className="hero-stats">
                <div className="stat">
                  <div className="stat-value">500+</div>
                  <div className="stat-label">Produits</div>
                </div>
                <div className="stat">
                  <div className="stat-value">10K+</div>
                  <div className="stat-label">Clients satisfaits</div>
                </div>
                <div className="stat">
                  <div className="stat-value">4.9/5</div>
                  <div className="stat-label">Note moyenne</div>
                </div>
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <img src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80"
                   alt="E-commerce" className="hero-img" loading="lazy" />
            </div>
          </div>
        </header>

        {/* Panier Flottant */}
        <button 
          className="cart-float" 
          onClick={() => setShowCart(!showCart)}
          style={{
            background: currentColor.gradient,
            transition: 'all 0.8s ease-in-out'
          }}
        >
          🛒 
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </button>

        {/* Modal Panier */}
        {showCart && (
          <div className="cart-modal" onClick={() => setShowCart(false)}>
            <div className="cart-content" onClick={(e) => e.stopPropagation()}>
              <div className="cart-header">
                <h3>Votre Panier ({cartCount})</h3>
                <button onClick={() => setShowCart(false)} className="cart-close">✕</button>
              </div>
              
              <div className="cart-items">
                {cart.length === 0 ? (
                  <div className="cart-empty">
                    <div style={{fontSize: '4rem', marginBottom: '1rem'}}>🛒</div>
                    <p>Votre panier est vide</p>
                  </div>
                ) : (
                  cart.map(item => (
                    <div key={item.id} className="cart-item">
                      <img src={item.image} alt={item.name} className="cart-item-img" />
                      <div className="cart-item-info">
                        <h4>{item.name}</h4>
                        <p>{item.price.toLocaleString()} FCFA</p>
                      </div>
                      <div className="cart-item-qty">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="cart-item-remove">🗑️</button>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="cart-footer">
                  <div className="cart-total">
                    <span>Total:</span>
                    <strong>{cartTotal.toLocaleString()} FCFA</strong>
                  </div>
                  <button className="btn-checkout" style={{background: currentColor.gradient}}>
                    Procéder au paiement
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Catégories */}
        <section className="categories-section">
          <div className="categories-scroll">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
                style={selectedCategory === cat.id ? {
                  background: currentColor.gradient,
                  color: 'white',
                  transition: 'all 0.8s ease-in-out'
                } : {}}
              >
                <span className="category-icon">{cat.icon}</span>
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Produits */}
        <section className="products-section">
          <div className="products-header">
            <h2>{categories.find(c => c.id === selectedCategory)?.name || "Tous les produits"}</h2>
            <p>{filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''} disponible{filteredProducts.length > 1 ? 's' : ''}</p>
          </div>

          <div className="products-grid">
            {filteredProducts.map(product => (
              <article key={product.id} className="product-card">
                {product.badge && (
                  <div className="product-badge" style={{background: currentColor.gradient}}>
                    {product.badge}
                  </div>
                )}
                
                <div className="product-image">
                  <img src={product.image} alt={product.name} loading="lazy" />
                </div>

                <div className="product-body">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-desc">{product.description}</p>

                  <div className="product-rating">
                    <span className="rating-stars">⭐ {product.rating}</span>
                    <span className="rating-reviews">({product.reviews} avis)</span>
                  </div>

                  <div className="product-footer">
                    <div className="product-price">
                      <span className="price-current">{product.price.toLocaleString()} FCFA</span>
                      {product.oldPrice && (
                        <span className="price-old">{product.oldPrice.toLocaleString()} FCFA</span>
                      )}
                    </div>
                    <button 
                      className="btn-add-cart"
                      onClick={() => addToCart(product)}
                      style={{
                        background: currentColor.gradient,
                        transition: 'all 0.3s ease'
                      }}
                    >
                      Ajouter
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Paiement */}
        <section className="payment-section">
          <h2>Moyens de paiement sécurisés</h2>
          <div className="payment-methods">
            <div className="payment-method">
              <div className="payment-icon">📱</div>
              <div className="payment-name">Mobile Money</div>
              <div className="payment-desc">Togocel, Moov, Flooz</div>
            </div>
            <div className="payment-method">
              <div className="payment-icon">💳</div>
              <div className="payment-name">Carte bancaire</div>
              <div className="payment-desc">Visa, Mastercard</div>
            </div>
            <div className="payment-method">
              <div className="payment-icon">💰</div>
              <div className="payment-name">PayPal</div>
              <div className="payment-desc">Paiement international</div>
            </div>
            <div className="payment-method">
              <div className="payment-icon">🏦</div>
              <div className="payment-name">Virement</div>
              <div className="payment-desc">Transfert bancaire</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="market-cta">
          <div className="cta-inner">
            <h3>Besoin d'aide pour choisir ?</h3>
            <p className="muted">Notre équipe est là pour vous conseiller et répondre à toutes vos questions</p>
            <Link to="/contact" className="btn primary" style={{background: currentColor.gradient, transition: 'background 0.8s ease-in-out'}}>
              Contacter le support
            </Link>
          </div>
        </section>

        <style>{`
          :root {
            --max:1200px;
            --text:#071220;
            --muted:#4b5563;
            --shadow: 0 16px 50px rgba(16,24,40,0.06);
          }

          .market-root {
            font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial;
            color:var(--text);
            -webkit-font-smoothing:antialiased;
          }

          /* HERO */
          .market-hero { background: linear-gradient(180deg,#f8fbff,#ffffff); padding:48px 16px; }
          .hero-inner { max-width:var(--max); margin:0 auto; display:grid; gap:24px; grid-template-columns: 1fr; align-items:center; }
          @media(min-width:960px) { .hero-inner { grid-template-columns: 1fr 420px; gap:36px; } }

          .eyebrow { text-transform:uppercase; color:var(--muted); font-weight:700; letter-spacing:0.12em; font-size:12px; margin-bottom:8px; }
          .hero-title { font-size:clamp(26px,4.5vw,40px); margin:0 0 10px; font-weight:900; line-height:1.06; }
          .hero-lead { color: #0f172a; margin-bottom:20px; max-width:62ch; font-size:17px; line-height:1.7; }

          .hero-stats { display:flex; gap:24px; margin-top:20px; flex-wrap:wrap; }
          .stat { text-align:left; }
          .stat-value { font-size:28px; font-weight:900; color:#0f172a; }
          .stat-label { font-size:13px; color:var(--muted); margin-top:4px; }

          .hero-visual { display:flex; align-items:center; justify-content:center; }
          .hero-img { width:100%; max-width:420px; border-radius:12px; object-fit:cover; box-shadow:0 20px 50px rgba(16,24,40,0.06); }

          /* CART FLOAT */
          .cart-float {
            position:fixed;
            bottom:24px;
            right:24px;
            width:60px;
            height:60px;
            border-radius:50%;
            border:none;
            color:white;
            font-size:24px;
            cursor:pointer;
            box-shadow:0 8px 30px rgba(0,0,0,0.2);
            z-index:50;
            display:flex;
            align-items:center;
            justify-content:center;
          }
          .cart-float:hover { transform: scale(1.1); }
          .cart-badge {
            position:absolute;
            top:-5px;
            right:-5px;
            background:#ef4444;
            color:white;
            width:24px;
            height:24px;
            border-radius:50%;
            display:flex;
            align-items:center;
            justify-content:center;
            font-size:12px;
            font-weight:700;
          }

          /* CART MODAL */
          .cart-modal {
            position:fixed;
            inset:0;
            background:rgba(0,0,0,0.5);
            z-index:100;
            display:flex;
            align-items:center;
            justify-content:flex-end;
            animation: fadeIn 0.2s;
          }
          @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }

          .cart-content {
            background:white;
            height:100vh;
            width:100%;
            max-width:450px;
            display:flex;
            flex-direction:column;
            animation: slideIn 0.3s;
          }
          @keyframes slideIn { from { transform:translateX(100%); } to { transform:translateX(0); } }

          .cart-header {
            padding:20px;
            border-bottom:1px solid #e5e7eb;
            display:flex;
            justify-content:space-between;
            align-items:center;
          }
          .cart-header h3 { margin:0; font-size:20px; font-weight:800; }
          .cart-close {
            background:none;
            border:none;
            font-size:24px;
            cursor:pointer;
            color:#6b7280;
          }

          .cart-items {
            flex:1;
            overflow-y:auto;
            padding:16px;
          }

          .cart-empty {
            text-align:center;
            padding:60px 20px;
            color:var(--muted);
          }

          .cart-item {
            display:flex;
            gap:12px;
            padding:12px;
            border-radius:12px;
            background:#f9fafb;
            margin-bottom:12px;
            align-items:center;
          }
          .cart-item-img {
            width:60px;
            height:60px;
            object-fit:cover;
            border-radius:8px;
          }
          .cart-item-info {
            flex:1;
          }
          .cart-item-info h4 {
            margin:0 0 4px;
            font-size:14px;
            font-weight:600;
          }
          .cart-item-info p {
            margin:0;
            font-size:13px;
            color:var(--muted);
          }
          .cart-item-qty {
            display:flex;
            gap:8px;
            align-items:center;
          }
          .cart-item-qty button {
            width:28px;
            height:28px;
            border-radius:6px;
            border:1px solid #e5e7eb;
            background:white;
            cursor:pointer;
            font-weight:600;
          }
          .cart-item-remove {
            background:none;
            border:none;
            font-size:18px;
            cursor:pointer;
          }

          .cart-footer {
            padding:20px;
            border-top:1px solid #e5e7eb;
          }
          .cart-total {
            display:flex;
            justify-content:space-between;
            margin-bottom:16px;
            font-size:18px;
          }
          .btn-checkout {
            width:100%;
            padding:14px;
            border:none;
            border-radius:12px;
            color:white;
            font-weight:700;
            font-size:16px;
            cursor:pointer;
          }

          /* CATEGORIES */
          .categories-section {
            max-width:var(--max);
            margin:0 auto;
            padding:24px 16px;
            overflow-x:auto;
          }
          .categories-scroll {
            display:flex;
            gap:12px;
            padding-bottom:8px;
          }
          .category-btn {
            display:flex;
            align-items:center;
            gap:8px;
            padding:10px 18px;
            border-radius:12px;
            border:2px solid #e5e7eb;
            background:white;
            cursor:pointer;
            font-weight:600;
            font-size:14px;
            white-space:nowrap;
            transition:all 0.2s;
          }
          .category-btn:hover { border-color:#667eea; }
          .category-btn.active { border:none; box-shadow:0 8px 20px rgba(0,0,0,0.15); }
          .category-icon { font-size:18px; }

          /* PRODUCTS */
          .products-section {
            max-width:var(--max);
            margin:0 auto;
            padding:32px 16px;
          }
          .products-header {
            margin-bottom:24px;
          }
          .products-header h2 {
            font-size:28px;
            font-weight:900;
            margin:0 0 8px;
          }
          .products-header p {
            color:var(--muted);
            margin:0;
          }

          .products-grid {
            display:grid;
            gap:20px;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          }

          .product-card {
            background:white;
            border-radius:12px;
            overflow:hidden;
            border:1px solid #e5e7eb;
            transition:all 0.2s;
            position:relative;
          }
          .product-card:hover {
            transform:translateY(-4px);
            box-shadow:0 20px 40px rgba(0,0,0,0.1);
          }

          .product-badge {
            position:absolute;
            top:12px;
            right:12px;
            padding:6px 12px;
            border-radius:20px;
            color:white;
            font-size:11px;
            font-weight:700;
            z-index:2;
          }

          .product-image {
            width:100%;
            height:200px;
            overflow:hidden;
            background:#f3f4f6;
          }
          .product-image img {
            width:100%;
            height:100%;
            object-fit:cover;
            transition:transform 0.3s;
          }
          .product-card:hover .product-image img {
            transform:scale(1.05);
          }

          .product-body {
            padding:16px;
          }
          .product-name {
            font-size:16px;
            font-weight:700;
            margin:0 0 8px;
            color:#0f172a;
          }
          .product-desc {
            font-size:13px;
            color:var(--muted);
            margin:0 0 12px;
            line-height:1.5;
          }
          .product-rating {
            display:flex;
            gap:8px;
            align-items:center;
            margin-bottom:12px;
            font-size:13px;
          }
          .rating-stars {
            color:#f59e0b;
            font-weight:600;
          }
          .rating-reviews {
            color:var(--muted);
          }

          .product-footer {
            display:flex;
            justify-content:space-between;
            align-items:center;
            gap:12px;
          }
          .product-price {
            display:flex;
            flex-direction:column;
            gap:4px;
          }
          .price-current {
            font-size:18px;
            font-weight:800;
            color:#0f172a;
          }
          .price-old {
            font-size:13px;
            color:var(--muted);
            text-decoration:line-through;
          }
          .btn-add-cart {
            padding:10px 20px;
            border:none;
            border-radius:10px;
            color:white;
            font-weight:700;
            font-size:14px;
            cursor:pointer;
            white-space:nowrap;
          }

          /* PAYMENT */
          .payment-section {
            max-width:var(--max);
            margin:48px auto;
            padding:0 16px;
            text-align:center;
          }
          .payment-section h2 {
            font-size:28px;
            font-weight:900;
            margin-bottom:32px;
          }
          .payment-methods {
            display:grid;
            gap:16px;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          }
          .payment-method {
            background:white;
            padding:24px;
            border-radius:12px;
            border:1px solid #e5e7eb;
          }
          .payment-icon {
            font-size:40px;
            margin-bottom:12px;
          }
          .payment-name {
            font-weight:700;
            font-size:16px;
            margin-bottom:4px;
          }
          .payment-desc {
            font-size:13px;
            color:var(--muted);
          }

          /* CTA */
          .market-cta {
            background:linear-gradient(90deg,#fbfdff,#ffffff);
            padding:48px 16px;
            text-align:center;
            margin-top:48px;
          }
          .cta-inner {
            max-width:800px;
            margin:0 auto;
          }
          .cta-inner h3 {
            font-size:clamp(24px,4vw,32px);
            font-weight:900;
            margin:0 0 12px;
          }
          .muted {
            color:var(--muted);
            margin-bottom:20px;
          }
          .btn.primary {
            display:inline-flex;
            padding:12px 24px;
            border-radius:12px;
            color:white;
            text-decoration:none;
            font-weight:700;
            font-size:16px;
            border:none;
            cursor:pointer;
          }

          @media(max-width:768px) {
            .products-grid {
              grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
            }
            .hero-stats {
              gap:16px;
            }
            .stat-value {
              font-size:24px;
            }
          }

          :focus-visible {
            outline: 3px solid rgba(79,70,229,0.14);
            outline-offset:3px;
            border-radius:8px;
          }
        `}</style>
      </main>
    </div>
  );
}

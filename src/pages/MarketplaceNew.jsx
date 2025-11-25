import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Marketplace() {
  const [colorIndex, setColorIndex] = useState(0);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '' });
  const navigate = useNavigate();
  const drawerRef = useRef(null);
  const mainRef = useRef(null);
  const prevActiveRef = useRef(null);

  useEffect(() => {
    const handleColorChange = (e) => setColorIndex(e.detail.colorIndex);
    window.addEventListener('navbarColorChange', handleColorChange);
    return () => window.removeEventListener('navbarColorChange', handleColorChange);
  }, []);

  // Manage drawer accessibility and keyboard
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setShowCart(false);
    };

    if (showCart) {
      prevActiveRef.current = document.activeElement;
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKey);
      // set aria-hidden on main content for screen readers
      try { mainRef.current && mainRef.current.setAttribute('aria-hidden', 'true'); } catch (e) { console.debug('MarketplaceNew: set aria-hidden failed', e); }

      // focus drawer when opened and move focus to first focusable element
      setTimeout(() => {
        if (drawerRef.current) {
          const focusable = drawerRef.current.querySelectorAll('a,button,input,select,textarea,[tabindex]:not([tabindex="-1"])');
          const focusables = Array.from(focusable).filter(el => !el.hasAttribute('disabled') && el.offsetParent !== null);
          if (focusables.length) focusables[0].focus();
          else drawerRef.current.focus && drawerRef.current.focus();
        }
      }, 0);

      // trap Tab focus inside drawer
      const trapFocus = (ev) => {
        if (ev.key !== 'Tab') return;
        if (!drawerRef.current) return;
        const nodes = drawerRef.current.querySelectorAll('a,button,input,select,textarea,[tabindex]:not([tabindex="-1"])');
        const focusable = Array.from(nodes).filter(el => !el.hasAttribute('disabled') && el.offsetParent !== null);
        if (!focusable.length) { ev.preventDefault(); return; }
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (ev.shiftKey) {
          if (document.activeElement === first) { ev.preventDefault(); last.focus(); }
        } else {
          if (document.activeElement === last) { ev.preventDefault(); first.focus(); }
        }
      };
      window.addEventListener('keydown', trapFocus);

      // store trap to remove later
      if (drawerRef.current) drawerRef.current.__trapFocusHandler = trapFocus;
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      // remove aria-hidden on main
      try { mainRef.current && mainRef.current.removeAttribute('aria-hidden'); } catch (e) { console.debug('MarketplaceNew: remove aria-hidden failed', e); }
      // remove trap if present
      try {
        const trap = drawerRef.current && drawerRef.current.__trapFocusHandler;
        trap && window.removeEventListener('keydown', trap);
      } catch (e) { console.debug('MarketplaceNew: remove trap failed', e); }
      // restore focus
      try { prevActiveRef.current && prevActiveRef.current.focus && prevActiveRef.current.focus(); } catch (e) { console.debug('MarketplaceNew: restore focus failed', e); }
    };
  }, [showCart]);

  const colors = [
    { bg: 'rgba(255,255,255,0.95)', gradient: 'linear-gradient(90deg, #4f46e5, #06b6d4)', accent: '#4f46e5' },
    { bg: 'rgba(255,240,245,0.95)', gradient: 'linear-gradient(90deg, #ec4899, #f43f5e)', accent: '#ec4899' },
    { bg: 'rgba(240,253,250,0.95)', gradient: 'linear-gradient(90deg, #10b981, #14b8a6)', accent: '#10b981' },
    { bg: 'rgba(255,250,235,0.95)', gradient: 'linear-gradient(90deg, #f59e0b, #f97316)', accent: '#f59e0b' },
    { bg: 'rgba(243,232,255,0.95)', gradient: 'linear-gradient(90deg, #8b5cf6, #a78bfa)', accent: '#8b5cf6' }
  ];

  const currentColor = colors[colorIndex];

  const products = {
    formations: [
      { id: 1, title: 'Formation React & Vite', author: 'Alex Dev', price: 45000, rating: 4.9, sales: 1234, image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400' },
      { id: 6, title: 'Maîtriser Node.js & Express', author: 'John Backend', price: 50000, rating: 4.8, sales: 967, image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400' },
      { id: 11, title: 'Python pour Data Science', author: 'Data Academy', price: 55000, rating: 4.8, sales: 723, image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400' }
    ],
    templates: [
      { id: 2, title: 'Dashboard UI Kit Pro', author: 'Sarah Design', price: 25000, rating: 4.8, sales: 856, image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400' },
      { id: 7, title: 'Portfolio Moderne 2025', author: 'Creative Lab', price: 20000, rating: 4.6, sales: 654, image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400' },
      { id: 12, title: 'E-commerce Template', author: 'Shop Designers', price: 35000, rating: 4.9, sales: 1056, image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400' }
    ],
    software: [
      { id: 3, title: 'Tool de Productivité', author: 'Dev Studio', price: 60000, rating: 4.7, sales: 423, image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400' },
      { id: 8, title: 'CRM Smart Business', author: 'Tech Corp', price: 120000, rating: 4.9, sales: 189, image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400' }
    ],
    ebooks: [
      { id: 4, title: 'Guide Complet TypeScript', author: 'Marie Code', price: 15000, rating: 5.0, sales: 2341, image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400' },
      { id: 9, title: 'Les Secrets du SEO', author: 'Marketing Pro', price: 18000, rating: 4.7, sales: 1432, image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400' }
    ],
    services: [
      { id: 5, title: 'Consultation Web Dev', author: 'Pro Team', price: 80000, rating: 4.9, sales: 234, image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400' },
      { id: 10, title: 'Design UI/UX sur mesure', author: 'Studio Design', price: 150000, rating: 5.0, sales: 87, image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400' }
    ]
  };

  const addToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      setCart(cart.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1} : item));
    } else {
      setCart([...cart, {...product, quantity: 1}]);
    }
    // accessible toast feedback
    setToast({ show: true, message: `${product.title} ajouté au panier` });
    window.setTimeout(() => setToast({ show: false, message: '' }), 2400);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // quick-buy helper is replaced by direct navigation to checkout

  const totalCart = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const ProductCard = ({ product }) => {
    const isTop = product.rating >= 4.85;
    const [hover, setHover] = useState(false);
    return (
      <div className="product-card"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          background: 'white',
          borderRadius: '14px',
          overflow: 'hidden',
          boxShadow: hover ? '0 18px 46px rgba(2,6,23,0.12)' : '0 8px 30px rgba(2,6,23,0.06)',
          transform: hover ? 'translateY(-6px)' : 'translateY(0)',
          transition: 'transform 0.22s ease, box-shadow 0.22s ease',
          cursor: 'pointer',
          position: 'relative'
        }}
      >
        <div style={{position: 'relative'}}>
          <img src={product.image} alt={product.title} style={{width: '100%', height: '200px', objectFit: 'cover', display: 'block'}} />
          {isTop && (
            <div style={{position: 'absolute', top: 12, left: 12, background: 'linear-gradient(90deg,#f59e0b,#f97316)', color: 'white', padding: '6px 8px', borderRadius: '8px', fontSize: '12px', fontWeight: 800}}>Top</div>
          )}
        </div>

        <div style={{padding: '18px'}}>
          <h3 style={{fontSize: '16px', fontWeight: 800, color: '#0f172a', marginBottom: '6px', lineHeight: '1.25'}}>{product.title}</h3>
          <p style={{fontSize: '13px', color: '#6b7280', marginBottom: '10px'}}>Par <strong>{product.author}</strong></p>

          <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px'}}>
            <span style={{color: '#f59e0b', fontWeight: 700}}>⭐ {product.rating}</span>
            <span style={{fontSize: '13px', color: '#9ca3af'}}>• {product.sales} ventes</span>
          </div>

          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '12px', borderTop: '1px solid #f3f4f6'}}>
            <div style={{fontSize: '18px', fontWeight: 900, color: '#0f172a'}}>{product.price.toLocaleString()} FCFA</div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
              <button onClick={() => addToCart(product)} style={{background: 'white', color: '#0f172a', padding: '8px 12px', fontSize: '13px', fontWeight: 800, border: '1px solid #e6e9ef', borderRadius: '10px', cursor: 'pointer', boxShadow: '0 6px 18px rgba(15,23,42,0.06)'}}>Ajouter</button>
              <button onClick={() => { addToCart(product); setShowCart(true); }} style={{background: currentColor.gradient, color: 'white', padding: '8px 12px', fontSize: '13px', fontWeight: 800, border: 'none', borderRadius: '10px', cursor: 'pointer', boxShadow: '0 10px 30px rgba(79,70,229,0.14)'}}>Payer maintenant</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div ref={mainRef} style={{minHeight: '100vh', background: currentColor.bg, backdropFilter: 'blur(6px)', transition: 'background 0.8s ease-in-out', padding: '60px 20px'}}>
      <style>{`
        /* Marketplace visual polish */
        .product-card img{height:200px}
        .product-grid{transition: all 0.3s ease}
        .product-card{transition: transform 0.22s ease, box-shadow 0.22s ease}
        .product-card .actions{display:flex; flex-direction:column; align-items:flex-end}

        /* Drawer styles */
        .drawer-aside{position:absolute; top:0; right:0; height:100%; width:min(420px,100%); background:white; box-shadow:-32px 0 80px rgba(2,6,23,0.12); border-left:1px solid rgba(15,23,42,0.04); display:flex; flex-direction:column; overflow:hidden;}
        .drawer-overlay{position:absolute; inset:0; background:rgba(0,0,0,0.32)}

        /* Footer CTA wrapper to allow styling from class */
        .drawer-footer{position:absolute; bottom:0; left:0; right:0; padding:14px 20px; border-top:1px solid #eef2f7; background:linear-gradient(180deg, rgba(255,255,255,0.98), rgba(255,255,255,1));}
        .drawer-footer button{width:100%; display:block}

        /* Hero gradient text */
        .market-hero-title{background:${currentColor.gradient}; -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; font-weight:900}

        /* Mobile adjustments */
        @media (max-width:600px){
          .product-card img{height:160px}
          .product-grid{grid-template-columns: repeat(1, 1fr) !important}
          .drawer-footer button{width:100% !important}
          .product-card .actions{flex-direction:row; gap:8px}
        }
        @media (max-width:420px){
          .product-card img{height:140px}
          .product-card{border-radius:12px}
          .drawer-aside{width:100%; border-left:none; box-shadow:none}
          /* Mobile spacing & typography */
          body, .product-card, .market-hero-title { -webkit-font-smoothing:antialiased }
          .market-hero-title{font-size:28px}
          .market-hero-sub{font-size:14px}
          .product-card{padding:12px}
          .product-card h3{font-size:15px}
          .product-card p{font-size:13px}
          .product-grid{gap:14px}
          .marketplace-inner{padding:18px}
          .drawer-aside{border-radius:16px 16px 0 0; overflow:hidden}
          .drawer-close{width:48px;height:48px;font-size:22px;border-radius:12px}
        }

        /* Accessible toast */
        .toast {
          position: fixed;
          left: 50%;
          transform: translateX(-50%);
          bottom: 20px;
          background: rgba(15,23,42,0.95);
          color: white;
          padding: 10px 16px;
          border-radius: 999px;
          box-shadow: 0 8px 30px rgba(2,6,23,0.2);
          z-index: 12000;
          font-weight: 700;
          font-size: 13px;
        }
        .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
      `}</style>
      <div style={{maxWidth: '1200px', margin: '0 auto'}}>
        <div className="marketplace-inner">
        
        {/* HERO */}
        <div style={{textAlign: 'center', marginBottom: '72px'}}>
          <h1 style={{fontSize: '44px', marginBottom: '12px', lineHeight: 1.05}} className="market-hero-title">
            Lumynis Marketplace
          </h1>
          <p style={{fontSize: '16px', color: '#6b7280', maxWidth: '760px', margin: '0 auto 28px'}}>
            Sélection de produits digitaux et services créés par la communauté Lumynis — designs, formations, outils et plus.
          </p>
          <div style={{display: 'flex', gap: '14px', justifyContent: 'center'}}>
            <button onClick={() => navigate('/join')} style={{background: 'white', color: '#0f172a', padding: '12px 24px', fontSize: '15px', fontWeight: 800, border: '1px solid #e6e9ef', borderRadius: '10px', cursor: 'pointer', boxShadow: '0 8px 24px rgba(15,23,42,0.06)'}}>
              Devenir Vendeur
            </button>
            <button onClick={() => setShowCart(true)} aria-label={`Ouvrir le panier, ${cart.length} articles`} style={{background: currentColor.gradient, color: 'white', padding: '12px 24px', fontSize: '15px', fontWeight: 800, border: 'none', borderRadius: '10px', cursor: 'pointer', boxShadow: '0 10px 30px rgba(79,70,229,0.14)'}}>
              🛒 Panier ({cart.length})
            </button>
          </div>
        </div>

        {/* FORMATIONS */}
        <div style={{marginBottom: '64px'}}>
          <h2 style={{fontSize: '28px', fontWeight: 900, color: '#0f172a', marginBottom: '10px'}}>🎓 Formations</h2>
          <div style={{height: '6px', width: '120px', borderRadius: '6px', background: currentColor.gradient, marginBottom: '18px'}} />
          <div className="product-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px'}}>
            {products.formations.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>

        {/* TEMPLATES */}
        <div style={{marginBottom: '64px'}}>
          <h2 style={{fontSize: '28px', fontWeight: 900, color: '#0f172a', marginBottom: '10px'}}>🎨 Templates & Design</h2>
          <div style={{height: '6px', width: '120px', borderRadius: '6px', background: currentColor.gradient, marginBottom: '18px'}} />
          <div className="product-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px'}}>
            {products.templates.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>

        {/* SOFTWARE */}
        <div style={{marginBottom: '64px'}}>
          <h2 style={{fontSize: '28px', fontWeight: 900, color: '#0f172a', marginBottom: '10px'}}>💻 Logiciels & Apps</h2>
          <div style={{height: '6px', width: '120px', borderRadius: '6px', background: currentColor.gradient, marginBottom: '18px'}} />
          <div className="product-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px'}}>
            {products.software.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>

        {/* EBOOKS */}
        <div style={{marginBottom: '64px'}}>
          <h2 style={{fontSize: '28px', fontWeight: 900, color: '#0f172a', marginBottom: '10px'}}>📚 E-books & Guides</h2>
          <div style={{height: '6px', width: '120px', borderRadius: '6px', background: currentColor.gradient, marginBottom: '18px'}} />
          <div className="product-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px'}}>
            {products.ebooks.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>

        {/* SERVICES */}
        <div style={{marginBottom: '64px'}}>
          <h2 style={{fontSize: '28px', fontWeight: 900, color: '#0f172a', marginBottom: '10px'}}>⭐ Services Premium</h2>
          <div style={{height: '6px', width: '120px', borderRadius: '6px', background: currentColor.gradient, marginBottom: '18px'}} />
          <div className="product-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px'}}>
            {products.services.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </div>
      </div>

      {/* Accessible toast + aria-live region */}
      {toast.show && (
        <div role="status" aria-live="polite" className="toast">{toast.message}</div>
      )}
      <div className="sr-only" aria-live="polite">{toast.show ? toast.message : ''}</div>

      {/* DRAWER PANIER (ancré à droite) */}
      {showCart && (
        <div role="dialog" aria-label="Panier" style={{position: 'fixed', inset: 0, zIndex: 9999}}>
          {/* Overlay */}
          <div className="drawer-overlay" onClick={() => setShowCart(false)} />

          {/* Drawer */}
          <aside className="drawer-aside"
            ref={drawerRef}
            tabIndex={-1}
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
            style={{
              // inline fallback for older browsers; main styles in <style> tag
              position: 'absolute', top: 0, right: 0, height: '100%', width: 'min(420px,100%)'
            }}
          >
            <div style={{padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <h3 style={{margin: 0, fontSize: '20px', fontWeight: 900}}>🛒 Votre Panier</h3>
              <button className="drawer-close" onClick={() => setShowCart(false)} aria-label="Fermer le panier" style={{background: '#f3f4f6', border: 'none', borderRadius: '10px', width: '44px', height: '44px', fontSize: '20px', cursor: 'pointer'}}>×</button>
            </div>

            {/* Contenu scrollable */}
            <div style={{flex: 1, overflowY: 'auto', padding: '12px 20px', paddingBottom: '140px', display: 'flex', flexDirection: 'column', gap: '12px'}}>
              {cart.length === 0 ? (
                <div style={{padding: '40px 0', textAlign: 'center', color: '#6b7280'}}>Votre panier est vide</div>
              ) : (
                cart.map(item => (
                  <div key={item.id} style={{display: 'flex', gap: '12px', alignItems: 'center', padding: '12px', background: '#f8fafc', borderRadius: '10px'}}>
                    <img src={item.image} alt={item.title} style={{width: '64px', height: '64px', objectFit: 'cover', borderRadius: '8px'}} />
                    <div style={{flex: 1}}>
                      <div style={{fontSize: '14px', fontWeight: 800, color: '#0f172a'}}>{item.title}</div>
                      <div style={{fontSize: '13px', color: '#6b7280'}}>{item.quantity} × {item.price.toLocaleString()} FCFA</div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end'}}>
                      <button onClick={() => {
                        // navigate to checkout with this single item
                        navigate('/checkout', { state: { cart: [{ ...item, quantity: item.quantity || 1 }] } });
                      }} style={{background: currentColor.gradient, color: 'white', padding: '8px 12px', border: 'none', borderRadius: '8px', cursor: 'pointer'}}>Payer cet article</button>
                      <button onClick={() => removeFromCart(item.id)} style={{background: '#fff3f2', color: '#be123c', border: 'none', borderRadius: '8px', padding: '6px 10px', cursor: 'pointer'}}>Retirer</button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer always visible (sticky) */}
            <div style={{position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 20px', borderTop: '1px solid #eef2f7', background: 'linear-gradient(180deg, rgba(255,255,255,0.98), rgba(255,255,255,1))'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px'}}>
                <span style={{fontSize: '16px', fontWeight: 800}}>Total</span>
                <span style={{fontSize: '18px', fontWeight: 900}}>{totalCart.toLocaleString()} FCFA</span>
              </div>
              <button onClick={() => navigate('/checkout', { state: { cart } })} className="drawer-footer" style={{background: currentColor.gradient, color: 'white', padding: '12px', width: '100%', fontSize: '15px', fontWeight: 800, border: 'none', borderRadius: '10px', cursor: 'pointer'}}>Payer maintenant</button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}

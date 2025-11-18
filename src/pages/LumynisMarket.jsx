import React from "react";
import { Link } from "react-router-dom";

export default function LumynisMarket() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--gray-50)' }}>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #10B981 0%, #14B8A6 100%)',
        color: 'white',
        padding: 'clamp(4rem, 10vw, 6rem) 1.5rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '1.5rem', color: 'white' }}>
            🛒 Lumynis Market
          </h1>
          <p style={{ fontSize: 'clamp(1.125rem, 3vw, 1.5rem)', marginBottom: '2rem', opacity: 0.95 }}>
            Votre Marketplace de confiance
          </p>
          <Link to="/marketplace" className="btn-primary" style={{ background: 'white', color: '#10B981' }}>
            Explorer le Market
          </Link>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: 'clamp(3rem, 8vw, 5rem) 1.5rem' }}>
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
          <div className="grid-3" style={{ gap: '2rem' }}>
            <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛍️</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Produits Lumynis</h3>
              <p style={{ color: 'var(--gray-600)' }}>
                Découvrez nos produits exclusifs créés avec excellence
              </p>
            </div>

            <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎓</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Formations</h3>
              <p style={{ color: 'var(--gray-600)' }}>
                Formations professionnelles certifiées Lumynis
              </p>
            </div>

            <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💼</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Services</h3>
              <p style={{ color: 'var(--gray-600)' }}>
                Services professionnels de qualité supérieure
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section style={{ padding: 'clamp(3rem, 8vw, 5rem) 1.5rem', background: 'white' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '2rem' }}>
            Méthodes de Paiement
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--gray-600)', marginBottom: '2rem' }}>
            Payez en toute sécurité avec Mobile Money ou Carte bancaire
          </p>
          <div className="flex" style={{ gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <div className="card" style={{ padding: '1.5rem 2rem' }}>📱 Mobile Money</div>
            <div className="card" style={{ padding: '1.5rem 2rem' }}>💳 Carte Bancaire</div>
            <div className="card" style={{ padding: '1.5rem 2rem' }}>🏦 Virement</div>
          </div>
        </div>
      </section>
    </div>
  );
}

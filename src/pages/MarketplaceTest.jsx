import React from "react";

export default function MarketplaceTest() {
  return (
    <div style={{
      minHeight: '100vh',
      padding: '40px',
      background: '#f0f0f0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }}>
      <h1 style={{ fontSize: '48px', color: '#000', marginBottom: '20px' }}>
        TEST MARKETPLACE
      </h1>
      <p style={{ fontSize: '24px', color: '#333' }}>
        Si vous voyez ce texte, React fonctionne correctement.
      </p>
      <div style={{
        marginTop: '40px',
        padding: '20px',
        background: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <p style={{ fontSize: '18px', color: '#666' }}>
          La route /marketplace-test est fonctionnelle ✅
        </p>
      </div>
    </div>
  );
}

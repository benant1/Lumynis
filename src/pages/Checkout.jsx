import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Checkout(){
  const { state } = useLocation();
  const navigate = useNavigate();
  const cart = (state && state.cart) || [];
  const total = cart.reduce((s,i) => s + (i.price * (i.quantity||1)), 0);

  return (
    <div style={{minHeight: '80vh', padding: '60px 20px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start'}}>
      <div style={{width: '720px', maxWidth: '96%', background: 'white', borderRadius: '12px', padding: '28px', boxShadow: '0 20px 60px rgba(2,6,23,0.08)'}}>
        <h1 style={{marginTop:0, fontSize: '22px'}}>Paiement (mode simulation)</h1>
        <p style={{color:'#6b7280'}}>Ceci est une page de test — aucun paiement réel n'est effectué.</p>

        <div style={{marginTop:20}}>
          {cart.length === 0 ? (
            <div style={{padding:'30px 0', textAlign:'center', color:'#6b7280'}}>Aucun article dans la commande.</div>
          ) : (
            <div style={{display:'flex', flexDirection:'column', gap:'12px'}}>
              {cart.map(item => (
                <div key={item.id} style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'12px', background:'#f8fafc', borderRadius:8}}>
                  <div>
                    <div style={{fontWeight:800}}>{item.title}</div>
                    <div style={{color:'#6b7280'}}>{item.quantity || 1} × {item.price.toLocaleString()} FCFA</div>
                  </div>
                  <div style={{fontWeight:900}}>{(item.price * (item.quantity||1)).toLocaleString()} FCFA</div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:24}}>
          <div style={{fontSize:16, fontWeight:800}}>Total</div>
          <div style={{fontSize:18, fontWeight:900}}>{total.toLocaleString()} FCFA</div>
        </div>

        <div style={{display:'flex', gap:12, marginTop:22}}>
          <button onClick={() => {
            // simulate payment success
            alert('Paiement simulé réussi — Merci !');
            navigate('/marketplace');
          }} style={{background:'#10b981', color:'white', padding:'12px 18px', border:'none', borderRadius:10, fontWeight:800, cursor:'pointer'}}>Simuler paiement</button>

          <button onClick={() => navigate(-1)} style={{background:'white', border:'1px solid #e6e9ef', padding:'12px 18px', borderRadius:10, cursor:'pointer'}}>Retour</button>
        </div>
      </div>
    </div>
  );
}

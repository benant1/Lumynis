# Lumynis Project - GitHub Copilot Instructions

## Architecture Overview

Ce projet est une **application web React multi-divisions** avec un système de couleurs dynamiques et des fonctionnalités e-commerce.

### Structure du Projet

```
Lumynis/
├── src/
│   ├── App.jsx                    # Router principal avec authentification
│   ├── main.jsx                   # Point d'entrée React
│   ├── components/                # Composants réutilisables
│   │   ├── Navbar.jsx            # Navigation avec changement de couleurs
│   │   ├── Footer.jsx
│   │   └── Header.jsx
│   ├── pages/                     # Pages de l'application
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Innovation.jsx        # Projets avec design moderne
│   │   ├── LumynisMarket.jsx     # E-commerce principal
│   │   ├── Marketplace.jsx       # E-commerce communautaire
│   │   ├── Assistant.jsx         # Assistant IA
│   │   ├── LumynisTech.jsx       # Division Tech
│   │   ├── LumynisDesign.jsx     # Division Design
│   │   ├── LumynisSpirit.jsx     # Division Spirit
│   │   └── [autres pages...]
│   └── assets/                    # Images et ressources
├── public/
├── vite.config.js                 # Configuration Vite
└── package.json
```

---

## Patterns de Code Essentiels

### 1. Système de Changement de Couleurs Dynamiques

**Fichiers clés:** `src/components/Navbar.jsx`, `src/pages/Innovation.jsx`, `src/pages/LumynisMarket.jsx`

Toutes les pages utilisent un système de **5 palettes de couleurs** qui changent automatiquement toutes les 10 secondes et se synchronisent avec la Navbar.

#### Pattern à suivre SYSTÉMATIQUEMENT :

```jsx
import React, { useState, useEffect } from "react";

export default function MaPage() {
  const [colorIndex, setColorIndex] = useState(0);

  // 1. Synchronisation avec la Navbar (événement custom)
  useEffect(() => {
    const handleColorChange = (e) => {
      setColorIndex(e.detail.colorIndex);
    };
    
    window.addEventListener('navbarColorChange', handleColorChange);
    return () => window.removeEventListener('navbarColorChange', handleColorChange);
  }, []);

  // 2. Changement automatique toutes les 10s (optionnel selon la page)
  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % 5);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // 3. Définition des 5 palettes (TOUJOURS les mêmes)
  const colors = [
    { bg: 'rgba(255,255,255,0.72)', accent: '#4f46e5', gradient: 'linear-gradient(90deg, #4f46e5, #06b6d4)' },
    { bg: 'rgba(255,240,245,0.72)', accent: '#ec4899', gradient: 'linear-gradient(90deg, #ec4899, #f43f5e)' },
    { bg: 'rgba(240,253,250,0.72)', accent: '#10b981', gradient: 'linear-gradient(90deg, #10b981, #14b8a6)' },
    { bg: 'rgba(255,250,235,0.72)', accent: '#f59e0b', gradient: 'linear-gradient(90deg, #f59e0b, #f97316)' },
    { bg: 'rgba(243,232,255,0.72)', accent: '#8b5cf6', gradient: 'linear-gradient(90deg, #8b5cf6, #a78bfa)' },
  ];

  const currentColor = colors[colorIndex];

  return (
    <div style={{ 
      background: currentColor.bg, 
      backdropFilter: 'blur(6px)',
      transition: 'background 0.8s ease-in-out' 
    }}>
      {/* Utiliser currentColor.gradient pour les boutons */}
      <button style={{ background: currentColor.gradient }}>
        Action
      </button>

      {/* Utiliser currentColor.gradient pour les titres */}
      <h1 style={{ 
        background: currentColor.gradient,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>
        Titre
      </h1>

      {/* Utiliser currentColor.accent pour les bordures */}
      <div style={{ borderTop: `3px solid ${currentColor.accent}` }}>
        Contenu
      </div>
    </div>
  );
}
```

**⚠️ IMPORTANT :** 
- Toujours utiliser **exactement ces 5 palettes** (ordre et valeurs identiques)
- `backdropFilter: 'blur(6px)'` pour l'effet glassmorphism
- `transition: 'background 0.8s ease-in-out'` pour des transitions fluides

---

### 2. Pattern E-commerce (Cart System)

**Fichiers clés:** `src/pages/LumynisMarket.jsx`, `src/pages/Marketplace.jsx`

#### Structure de données produit :

```jsx
const products = [
  {
    id: 1,
    name: "Nom du produit",
    category: "formations", // formations, templates, software, ebooks, services
    price: 150000,          // Prix en FCFA
    oldPrice: 200000,       // Prix barré (optionnel)
    image: "URL_IMAGE",
    rating: 4.9,            // Note sur 5
    reviews: 234,           // Nombre d'avis
    badge: "Bestseller",    // Badge : "Bestseller", "Nouveau", "Promo -40%", etc.
    description: "Description courte",
    inStock: true           // Optionnel, true par défaut
  }
];
```

#### Gestion du panier :

```jsx
const [cart, setCart] = useState([]);
const [showCart, setShowCart] = useState(false);

// Ajouter au panier
const addToCart = (product) => {
  const existingItem = cart.find(item => item.id === product.id);
  if (existingItem) {
    setCart(cart.map(item => 
      item.id === product.id 
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  } else {
    setCart([...cart, { ...product, quantity: 1 }]);
  }
};

// Retirer du panier
const removeFromCart = (productId) => {
  setCart(cart.filter(item => item.id !== productId));
};

// Modifier la quantité
const updateQuantity = (productId, newQuantity) => {
  if (newQuantity === 0) {
    removeFromCart(productId);
  } else {
    setCart(cart.map(item => 
      item.id === productId 
        ? { ...item, quantity: newQuantity }
        : item
    ));
  }
};

// Calculer le total
const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
```

#### Catégories standard :

```jsx
const categories = [
  { id: "all", name: "Tous les produits", icon: "🛍️" },
  { id: "formations", name: "Formations", icon: "🎓" },
  { id: "templates", name: "Templates & Design", icon: "🎨" },
  { id: "software", name: "Logiciels & Apps", icon: "💻" },
  { id: "ebooks", name: "E-books & Guides", icon: "📚" },
  { id: "services", name: "Services Premium", icon: "⭐" }
];
```

---

### 3. Navigation et Routing

**Fichier clé:** `src/App.jsx`

#### Routes actuelles :

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/services" element={<Services />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/blog" element={<Blog />} />
  <Route path="/try" element={<TryFree />} />
  
  {/* Divisions */}
  <Route path="/tech" element={<LumynisTech />} />
  <Route path="/design" element={<LumynisDesign />} />
  <Route path="/market" element={<LumynisMarket />} />
  <Route path="/spirit" element={<LumynisSpirit />} />
  
  {/* E-commerce & Tools */}
  <Route path="/marketplace" element={<Marketplace />} />
  <Route path="/assistant" element={<Assistant />} />
  <Route path="/innovation" element={<Innovation />} />
  <Route path="/portfolio" element={<Portfolio />} />
  
  {/* Compte */}
  <Route path="/join" element={<Join />} />
  <Route path="/member" element={<Member />} />
  <Route path="/support" element={<Support />} />
  <Route path="/admin" element={<Admin />} />
  
  <Route path="*" element={<Navigate to="/" replace />} />
</Routes>
```

#### Pattern de liens :

```jsx
import { Link, NavLink } from "react-router-dom";

// Lien simple
<Link to="/market">Aller au Market</Link>

// Lien avec style actif
<NavLink 
  to="/market" 
  className={({ isActive }) => isActive ? "active" : ""}
>
  Market
</NavLink>
```

---

### 4. Styles CSS-in-JS

Le projet utilise principalement **inline styles** et **style tags** dans les composants.

#### Pattern de styles :

```jsx
<div style={{
  padding: '40px 20px',
  maxWidth: '1200px',
  margin: '0 auto',
  minHeight: '100vh'
}}>
  {/* Contenu */}
</div>

{/* Styles globaux dans <style> tag */}
<style>{`
  .mon-composant {
    transition: all 0.3s ease;
  }
  
  .mon-composant:hover {
    transform: translateY(-4px);
  }
  
  @media (max-width: 768px) {
    .mon-composant {
      padding: 20px;
    }
  }
`}</style>
```

---

### 5. Design System

#### Couleurs principales (hors système dynamique) :

```css
--bg: #ffffff
--muted: #6b7280
--accent-1: #6366f1
--accent-2: #60a5fa
--glass: rgba(255,255,255,0.72)
--shadow: 0 10px 30px rgba(16,24,40,0.08)
--radius: 10px
```

#### Composants UI récurrents :

**Bouton primaire avec gradient :**
```jsx
<button style={{
  background: currentColor.gradient,
  color: 'white',
  padding: '12px 24px',
  borderRadius: '12px',
  border: 'none',
  fontWeight: '700',
  cursor: 'pointer',
  boxShadow: '0 10px 26px rgba(102,126,234,0.25)',
  transition: 'all 0.3s ease'
}}>
  Action
</button>
```

**Card avec effet glassmorphism :**
```jsx
<div style={{
  background: 'rgba(255,255,255,0.9)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  padding: '24px',
  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
  border: '1px solid rgba(15,23,42,0.06)'
}}>
  {/* Contenu */}
</div>
```

**Texte avec gradient :**
```jsx
<h1 style={{
  background: currentColor.gradient,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontSize: '48px',
  fontWeight: '900'
}}>
  Titre
</h1>
```

---

## Règles de Développement

### ✅ À FAIRE

1. **Toujours utiliser les 5 palettes de couleurs** pour la cohérence visuelle
2. **Synchroniser avec la Navbar** via `window.addEventListener('navbarColorChange', ...)`
3. **Utiliser React Hooks** : `useState`, `useEffect` pour la gestion d'état
4. **Responsive design** : mobile-first avec `@media` queries
5. **Transitions fluides** : `transition: all 0.3s ease` sur les interactions
6. **Accessibilité** : `aria-label`, `role`, balises sémantiques
7. **Code français** : commentaires et noms de variables en français

### ❌ À ÉVITER

1. Ne **PAS** modifier les valeurs des 5 palettes de couleurs
2. Ne **PAS** utiliser de frameworks CSS externes (Tailwind est installé mais peu utilisé)
3. Ne **PAS** créer de nouvelles routes sans les ajouter dans `App.jsx`
4. Ne **PAS** oublier les cleanup dans `useEffect` (`return () => clearInterval(...)`)
5. Ne **PAS** mélanger différents systèmes de couleurs sur une même page

---

## Fonctionnalités Spécifiques

### Recherche Vocale (Navbar)

La Navbar inclut une **recherche vocale** avec Web Speech API :

```jsx
const handleVoiceSearch = () => {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  
  recognition.lang = 'fr-FR';
  recognition.continuous = false;
  
  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    setSearchQuery(transcript);
  };
  
  recognition.start();
};
```

### Menu Dropdown (Divisions)

La Navbar utilise un **dropdown au hover** pour les divisions :

```jsx
const [divisionsOpen, setDivisionsOpen] = useState(false);

<div 
  onMouseEnter={() => setDivisionsOpen(true)} 
  onMouseLeave={() => setDivisionsOpen(false)}
>
  <button>Divisions ▼</button>
  {divisionsOpen && (
    <div className="dropdown-menu">
      {/* Items */}
    </div>
  )}
</div>
```

### Authentification Simple

Le système d'authentification utilise **localStorage** :

```jsx
// App.jsx
const [isLoggedIn, setIsLoggedIn] = useState(true);

useEffect(() => {
  const user = localStorage.getItem("user");
  if (!user) {
    localStorage.setItem("user", JSON.stringify({
      name: "Utilisateur",
      email: "user@lumynis.com",
      loggedIn: true
    }));
  }
  setIsLoggedIn(true);
}, []);
```

---

## Technologies & Dépendances

### Stack Technique

- **React** `^19.2.0` - Bibliothèque UI
- **React Router DOM** `^7.9.6` - Routing
- **Vite** `^7.2.2` - Build tool & dev server
- **Tailwind CSS** `^4.1.17` - Utility CSS (peu utilisé)
- **ESLint** - Linting

### Scripts NPM

```bash
npm run dev      # Démarrer le serveur de développement (http://localhost:5173)
npm run build    # Build de production
npm run preview  # Prévisualiser le build
npm run lint     # Vérifier le code
```

---

## Exemples de Composants Types

### Page avec Design Moderne

Voir `src/pages/Innovation.jsx` pour un exemple complet avec :
- Hero section avec statistiques
- Cards de vision avec icônes et bordures colorées
- Cards de projets avec barres de progression
- Effet glassmorphism et gradients

### Page E-commerce

Voir `src/pages/LumynisMarket.jsx` pour un exemple complet avec :
- Hero section avec recherche
- Filtres par catégorie
- Grille de produits responsive
- Modal de panier avec gestion quantité
- Section bénéfices et CTA

---

## Questions Fréquentes

**Q: Comment ajouter une nouvelle page ?**
1. Créer le fichier dans `src/pages/MaPage.jsx`
2. Implémenter le système de couleurs dynamiques
3. Ajouter la route dans `src/App.jsx`
4. Ajouter le lien dans `src/components/Navbar.jsx`

**Q: Pourquoi les couleurs ne changent pas ?**
- Vérifier que les deux `useEffect` sont présents (sync + auto-change)
- Vérifier que le tableau `colors` contient les 5 palettes exactes
- Vérifier que `currentColor` est utilisé dans les styles

**Q: Comment ajouter un produit au Market ?**
- Ajouter l'objet dans le tableau `products` avec tous les champs requis
- Respecter la structure : id, name, category, price, image, rating, reviews, badge, description

**Q: Le serveur ne démarre pas ?**
```bash
# Vérifier Node.js
node --version  # v24.11.1

# Réinstaller les dépendances
npm install

# Démarrer le serveur
npm run dev
```

---

## Maintenance & Bonnes Pratiques

### Organisation du Code

- **Un composant = un fichier** : chaque page dans `src/pages/`, chaque composant dans `src/components/`
- **Imports organisés** : React d'abord, puis React Router, puis composants locaux
- **Nommage cohérent** : PascalCase pour composants, camelCase pour variables

### Performance

- **Lazy loading** : considérer `React.lazy()` pour les pages volumineuses
- **Mémoïzation** : utiliser `useMemo` pour calculs coûteux (ex: filtrage produits)
- **Cleanup** : toujours nettoyer les event listeners et intervals

### Accessibilité

- **Navigation clavier** : tous les éléments interactifs accessibles au clavier
- **ARIA labels** : utiliser `aria-label`, `aria-expanded`, `role`
- **Contraste** : vérifier le contraste des textes sur fonds colorés

---

## Contact & Support

Pour toute question sur l'architecture ou les patterns du projet, consulter :
- Les fichiers de référence : `Navbar.jsx`, `Innovation.jsx`, `LumynisMarket.jsx`
- La documentation React : https://react.dev
- La documentation Vite : https://vitejs.dev

---

**Dernière mise à jour:** 18 novembre 2025  
**Version du projet:** 0.0.0  
**Mainteneur:** Équipe Lumynis

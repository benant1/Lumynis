import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ErrorBoundary from './components/ErrorBoundary.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
import Blog from './pages/Blog.jsx';
import TryFree from './pages/TryFree.jsx';
import Marketplace from './pages/MarketplaceNew.jsx';
import LumynisTech from './pages/LumynisTech.jsx';
import LumynisDesign from './pages/LumynisDesign.jsx';
import LumynisMarket from './pages/LumynisMarket.jsx';
import LumynisSpirit from './pages/LumynisSpirit.jsx';
import Join from './pages/Join.jsx';
import Member from './pages/Member.jsx';
import Assistant from './pages/Assistant.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Support from './pages/Support.jsx';
import Admin from './pages/Admin.jsx';
import Innovation from './pages/Innovation.jsx';
import Checkout from './pages/Checkout.jsx';

function App() {
  console.log('🚀 APP RENDERING');
  
  return (
    <ErrorBoundary>
      <Router>
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
          <Navbar />
          <main style={{ flex: 1 }}>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/try" element={<TryFree />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/tech" element={<LumynisTech />} />
            <Route path="/design" element={<LumynisDesign />} />
            <Route path="/market" element={<LumynisMarket />} />
            <Route path="/spirit" element={<LumynisSpirit />} />
            <Route path="/join" element={<Join />} />
            <Route path="/member" element={<Member />} />
            <Route path="/assistant" element={<Assistant />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/support" element={<Support />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/innovation" element={<Innovation />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </ErrorBoundary>
  );
}

export default App;
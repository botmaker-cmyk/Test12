/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AlgerianShowcase from "./components/AlgerianShowcase";
import ProductGallery from "./components/ProductGallery";
import AboutSection from "./components/AboutSection";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import OrderCartPopup from "./components/OrderCartPopup";
import { CartItem } from "./types";
import { Coffee, ShieldCheck, Sparkles } from "lucide-react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from client-side dynamic local storage for elegant seamless visits
  useEffect(() => {
    const savedCart = localStorage.getItem("oum_mohamed_cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (err) {
        console.error("Failed to parse saved cart", err);
      }
    }
  }, []);

  // Sync to local storage
  const saveCartToStorage = (updatedCart: CartItem[]) => {
    setCart(updatedCart);
    localStorage.setItem("oum_mohamed_cart", JSON.stringify(updatedCart));
  };

  // Cart operations
  const handleAddItemToCart = (newItem: CartItem) => {
    const existingIdx = cart.findIndex(
      (item) =>
        item.product.id === newItem.product.id &&
        item.boxSize === newItem.boxSize &&
        item.notes === newItem.notes
    );

    let updatedCart: CartItem[] = [];
    if (existingIdx > -1) {
      updatedCart = [...cart];
      updatedCart[existingIdx].quantity += newItem.quantity;
    } else {
      updatedCart = [...cart, newItem];
    }
    
    saveCartToStorage(updatedCart);
    // Auto-open cart drawer for supreme user delight feedback
    setTimeout(() => {
      setIsCartOpen(true);
    }, 400);
  };

  const handleRemoveItem = (index: number) => {
    const updated = cart.filter((_, i) => i !== index);
    saveCartToStorage(updated);
  };

  const handleUpdateQty = (index: number, newQty: number) => {
    const updated = [...cart];
    updated[index].quantity = newQty;
    saveCartToStorage(updated);
  };

  return (
    <>
      {isLoading ? (
        <Preloader onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="min-h-screen bg-[#FDFBF7] text-stone-900 selection:bg-amber-100 selection:text-amber-900 overflow-x-hidden antialiased">
          
          {/* Decorative Sticky Floating ribbon announcements */}
          <div className="bg-amber-600 text-[#FCFAF6] py-1.5 px-4 text-center text-[10px] font-mono tracking-[0.2em] uppercase flex items-center justify-center gap-2 relative z-50">
            <Sparkles className="w-3 h-3 animate-spin" />
            <span>Commandes Ouvertes pour l'Aïd et Cérémonies d'Honneur • Livraison Sécurisée sur Alger & Environs</span>
            <Sparkles className="w-3 h-3 animate-pulse" />
          </div>

          {/* Premium global components list */}
          <Navbar
            cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
            onCartClick={() => setIsCartOpen(true)}
            onShowReviews={() => {
              const el = document.getElementById("testimonials");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          />

          <main>
            <Hero />
            <AlgerianShowcase />
            <ProductGallery onAddItemToCart={handleAddItemToCart} />
            <AboutSection />
            <Testimonials />
            <ContactSection />
          </main>

          <Footer />

          {/* Floating Cart Drawer list controls */}
          <OrderCartPopup
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            cartItems={cart}
            onRemoveItem={handleRemoveItem}
            onUpdateQty={handleUpdateQty}
          />

        </div>
      )}
    </>
  );
}

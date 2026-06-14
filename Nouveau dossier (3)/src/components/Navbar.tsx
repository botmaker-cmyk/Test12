import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingBag, Menu, X, Leaf, Sparkles } from "lucide-react";

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  onShowReviews: () => void;
}

export default function Navbar({ cartCount, onCartClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const menuItems = [
    { name: "L'Accueil", id: "home" },
    { name: "Le Showcase", id: "showcase" },
    { name: "La Collection", id: "collection" },
    { name: "Notre Histoire", id: "story" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Nous Contacter", id: "contact" },
  ];

  return (
    <>
      <motion.nav
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-[0_10px_30px_rgba(28,25,23,0.05)] border-b border-[#E5D5B8]/30 py-3"
            : "bg-transparent py-5"
        }`}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo / Brand */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2 group cursor-pointer text-left focus:outline-none"
          >
            <div className="flex flex-col">
              <span className={`font-serif tracking-[0.25em] text-lg font-bold transition-colors ${scrolled ? "text-stone-900" : "text-stone-900"}`}>
                OUM MOHAMED
              </span>
              <span className="text-[9px] font-mono tracking-[0.3em] text-amber-600 font-semibold">
                HAUTE PÂTISSERIE
              </span>
            </div>
          </button>

          {/* Large screens: Menu items */}
          <div className="hidden lg:flex items-center gap-10">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="font-serif text-xs uppercase tracking-widest text-stone-700 hover:text-amber-600 transition-all duration-300 relative py-1 group focus:outline-none cursor-pointer"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-amber-500 transition-all duration-350 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Right side Actions (Cart & Mobile menu trigger) */}
          <div className="flex items-center gap-4">
            {/* Elegant Cart Widget */}
            <button
              id="navbar-cart-trigger"
              onClick={onCartClick}
              className="relative p-2.5 rounded-full border border-[#E5D5B8]/40 bg-white/50 hover:bg-[#FDFBF7] hover:border-amber-500 hover:text-amber-600 hover:shadow-[0_0_15px_rgba(212,175,55,0.1)] transition-all duration-350 group cursor-pointer focus:outline-none"
              aria-label="Open your gourmet box order list"
            >
              <ShoppingBag className="w-5 h-5 text-stone-800 group-hover:text-amber-600 stroke-[1.2]" />
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.div
                    id="cart-badge-counter"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1 -right-1 flex items-center justify-center min-w-5 h-5 px-1 text-[10px] font-bold font-mono text-white bg-amber-600 rounded-full shadow-[0_2px_8px_rgba(217,119,6,0.5)] border border-white"
                  >
                    {cartCount}
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Mobile Menu trigger button */}
            <button
              id="navbar-menu-mobile-trigger"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-full border border-[#E5D5B8]/40 bg-white/50 text-stone-800 hover:border-amber-500 lg:hidden cursor-pointer focus:outline-none"
            >
              <Menu className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Slide-out Panel Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur */}
            <motion.div
              id="mobile-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-stone-905/70 backdrop-blur-sm lg:hidden"
            />

            {/* Mobile Drawer body */}
            <motion.div
              id="mobile-menu-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.55 }}
              className="fixed top-0 right-0 h-full w-[310px] bg-[#FCFAF6] z-50 shadow-[0_0_40px_rgba(0,0,0,0.2)] border-l border-[#E5D5B8]/40 p-8 flex flex-col justify-between lg:hidden"
            >
              <div>
                {/* Header inside drawer */}
                <div className="flex justify-between items-center pb-6 border-b border-[#E5D5B8]/30">
                  <div className="flex flex-col">
                    <span className="font-serif tracking-widest text-md font-bold text-stone-900">
                      OUM MOHAMED
                    </span>
                    <span className="text-[8px] font-mono tracking-[0.25em] text-amber-600">
                      BOUTIQUE DE LUXE
                    </span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full border border-[#E5D5B8]/30 text-stone-700 hover:text-amber-600 cursor-pointer focus:outline-none"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Nav Links */}
                <div className="flex flex-col gap-6 mt-10">
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                      className="text-left font-serif text-sm uppercase tracking-widest text-[#5C5446] hover:text-amber-600 py-1 cursor-pointer focus:outline-none"
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Drawer Footer info */}
              <div className="border-t border-[#E5D5B8]/30 pt-6">
                <div className="flex items-center gap-2 mb-3 text-amber-700">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span className="font-mono text-[9px] uppercase tracking-widest font-bold">100% Handcrafted Artisanry</span>
                </div>
                <p className="text-[11px] text-stone-500 font-serif leading-relaxed">
                  Combining Algerian premium blanched almond flour with natural pure orange blossom extract.
                </p>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onCartClick();
                  }}
                  className="w-full mt-5 flex items-center justify-center gap-2.5 py-3 rounded-full bg-stone-900 text-amber-300 font-serif text-xs uppercase tracking-wider hover:bg-amber-600 hover:text-white transition-all duration-350 shadow-[0_4px_12px_rgba(28,25,23,0.15)] align-middle"
                >
                  <ShoppingBag className="w-4 h-4 stroke-[1.2]" />
                  Voir Mon Panier ({cartCount})
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

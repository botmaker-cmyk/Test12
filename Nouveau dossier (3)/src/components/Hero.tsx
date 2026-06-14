import { motion } from "motion/react";
import { Sparkles, Calendar, ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex items-center bg-[#FDFBF7] pt-24 overflow-hidden"
    >
      {/* Decorative luxury pattern elements */}
      <div className="absolute top-0 right-0 w-[45%] h-full bg-[#FAF5EC] z-0 hidden lg:block" />
      <div className="absolute top-1/2 left-10 w-96 h-96 rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-yellow-400/5 blur-[150px] pointer-events-none" />

      {/* Grid container with content on left, imagery on right */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 py-12">
        
        {/* Left Side: Elegant Text Display */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left max-w-2xl lg:max-w-none">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/5 text-amber-800 text-[10px] font-mono tracking-[0.2em] uppercase w-fit mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
            Tradition Algérienne Haut de Gamme
          </motion.div>

          {/* Main Display Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-stone-900 tracking-tight leading-[1.1]"
          >
            L'art des Douceurs <br />
            <span className="relative inline-block mt-1 font-light italic font-serif text-amber-600">
              d'Oum Mohamed
              <span className="absolute bottom-2 left-0 w-full h-[6px] bg-amber-100/60 -z-10" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 text-stone-600 text-sm sm:text-base md:text-lg leading-relaxed font-serif max-w-xl"
          >
            Chaque pièce d'orfèvrerie est façonnée entièrement à la main. Nous assemblons les amandes de Kabylie, le miel pur de fleurs sauvages et l'essence rare de fleur d'oranger pour honorer vos cérémonies royales.
          </motion.p>

          {/* Floating Luxury Specifications */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 1 }}
            className="grid grid-cols-3 gap-4 border-y border-[#E5D5B8]/40 py-5 my-8 max-w-lg"
          >
            <div>
              <p className="text-amber-600 font-serif text-lg font-bold">100%</p>
              <p className="text-[10px] uppercase font-mono tracking-wider text-stone-500">Mains de Chef</p>
            </div>
            <div className="border-l border-[#E5D5B8]/40 pl-4">
              <p className="text-amber-600 font-serif text-lg font-bold font-mono">Amande</p>
              <p className="text-[10px] uppercase font-mono tracking-wider text-stone-500">Pure & Sélectionnée</p>
            </div>
            <div className="border-l border-[#E5D5B8]/40 pl-4">
              <p className="text-amber-600 font-serif text-lg font-bold">Miel Pur</p>
              <p className="text-[10px] uppercase font-mono tracking-wider text-stone-500">Sans Sucre Ajouté</p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {/* Direct WhatsApp Call to Action */}
            <button
              onClick={() => scrollToSection("collection")}
              className="group flex items-center justify-center gap-3 bg-stone-900 border border-stone-900 text-amber-300 font-serif text-xs uppercase tracking-widest px-8 py-4.5 rounded-full hover:bg-amber-600 hover:text-white hover:border-amber-600 hover:shadow-[0_12px_24px_rgba(217,119,6,0.2)] transition-all duration-350 cursor-pointer text-center"
            >
              Commander la Collection
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-350" />
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="flex items-center justify-center gap-2.5 bg-white border border-[#E5D5B8] text-stone-800 font-serif text-xs uppercase tracking-widest px-8 py-4.5 rounded-full hover:border-amber-600 hover:text-amber-600 transition-all duration-350 cursor-pointer text-center"
            >
              <Calendar className="w-3.5 h-3.5 stroke-[1.5]" />
              Réservation Événements
            </button>
          </motion.div>
        </div>

        {/* Right Side: Spectacular Overlapping Imagery Frame */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.93, rotate: 1 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.25, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-sm sm:max-w-md lg:max-w-none aspect-[16:11] sm:aspect-[16:10] lg:aspect-square rounded-2xl overflow-hidden border-4 border-[#E5D5B8]/30 shadow-[0_25px_60px_rgba(28,25,23,0.12)] bg-stone-100 group"
          >
            {/* The grand showcase image */}
            <img
              src="/src/assets/images/traditional_algerian_cakes_hero_1781397194509.jpg"
              alt="Plateau Traditionnel et Impérial de Gâteaux Algériens par Oum Mohamed"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
              loading="eager"
            />
            {/* Subtle overlay shading */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/20 via-transparent to-transparent pointer-events-none" />
            
            {/* Mini Floating Overlay Card inside hero image */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-xl border border-amber-500/10 shadow-lg flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <div className="text-left">
                  <p className="font-serif text-[11px] font-bold text-stone-900 tracking-wide uppercase">Prendre Commande</p>
                  <p className="font-mono text-[9px] text-stone-500 uppercase tracking-wider">Réponse WhatsApp Instantanée</p>
                </div>
              </div>
              <a
                href="https://wa.me/213550000000" // We can generate customized text on cart orders
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 transition-colors"
                aria-label="Contact directly on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-500" />
              </a>
            </div>
          </motion.div>

          {/* Floating aesthetic frame border */}
          <div className="absolute -inset-1.5 border border-dashed border-amber-500/15 rounded-3xl pointer-events-none -z-10" />

          {/* Luxury label on the side */}
          <div className="absolute -top-6 -right-3 sm:-right-6 bg-[#FCFAF6] border border-amber-500/25 py-2.5 px-4 rounded-lg shadow-md -rotate-6 hidden sm:block">
            <p className="font-serif italic text-xs text-amber-600">Pure Artisanat d'Art</p>
          </div>
        </div>

      </div>
    </section>
  );
}

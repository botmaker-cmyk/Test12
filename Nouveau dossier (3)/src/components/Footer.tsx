import { Check, Facebook, Instagram, MessageCircle, Sparkles } from "lucide-react";

export default function Footer() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-stone-950 text-[#FAF7F0] pt-20 pb-8 relative overflow-hidden">
      {/* Golden subtle lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-amber-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Grid structure */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-stone-850">
          
          {/* Logo brand module columns */}
          <div className="md:col-span-5 text-left space-y-5">
            <h2 className="font-serif tracking-[0.25em] text-xl font-bold">OUM MOHAMED</h2>
            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-amber-500 font-bold">Haute Pâtisserie d'Art Algérienne</p>
            <p className="font-serif text-xs text-stone-400 leading-relaxed max-w-sm">
              Chaque douceur de la maison Oum Mohamed est l'expression d’une dévotion sans limite pour l’art culinaire. Nous assemblons le geste traditionnel aux ingrédients d’une noblesse historique pour couronner vos plus belles noces.
            </p>

            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-stone-800 text-stone-400 hover:border-amber-500 hover:text-amber-400 transition-colors"
                aria-label="Find Oum Mohamed on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-stone-800 text-stone-400 hover:border-amber-500 hover:text-amber-400 transition-colors"
                aria-label="Find Oum Mohamed on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/213550000000"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-stone-800 text-stone-400 hover:border-amber-500 hover:text-amber-400 transition-colors"
                aria-label="Contact Oum Mohamed via WhatsApp direct"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links columns */}
          <div className="md:col-span-3 text-left">
            <h3 className="font-serif text-[11px] font-bold uppercase tracking-[0.2em] text-[#E5D5B8] mb-5">Navigation</h3>
            <ul className="space-y-3 text-xs font-serif text-stone-400">
              {[
                { label: "L'Accueil", id: "home" },
                { label: "Le Showcase Artisanal", id: "showcase" },
                { label: "La Carte des Gâteaux", id: "collection" },
                { label: "Notre Histoire", id: "story" },
                { label: "Avis Clients", id: "testimonials" },
                { label: "Atelier Hydra & Contact", id: "contact" }
              ].map((lnk) => (
                <li key={lnk.id}>
                  <button
                    onClick={() => handleScrollTo(lnk.id)}
                    className="hover:text-amber-500 transition-colors cursor-pointer text-left focus:outline-none"
                  >
                    {lnk.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Luxury Certification note */}
          <div className="md:col-span-4 text-left space-y-4">
            <h3 className="font-serif text-[11px] font-bold uppercase tracking-[0.2em] text-[#E5D5B8] mb-1">Garantie Pureté d ' Amande</h3>
            <div className="p-4 rounded-xl border border-stone-800 bg-[#0F0D0C]/50 text-stone-400 text-xs font-serif leading-relaxed">
              <div className="flex items-center gap-2 mb-2 text-amber-500">
                <Sparkles className="w-4 h-4" />
                <span className="font-mono text-[9px] uppercase tracking-wider font-bold">Fait Mains à 100%</span>
              </div>
              "Nous certifions que tout notre assortiment est fabriqué à base de poudre d'amande douce blanchie naturelle sans amidon, pomme de terre, farines de remplissage ou arômes chimiques."
            </div>
          </div>

        </div>

        {/* Legal copyright elements row */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-[11px] font-mono text-stone-500 space-y-4 sm:space-y-0 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Oum Mohamed Pâtisserie de Luxe. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#home" onClick={() => handleScrollTo("home")} className="hover:text-[#FAF7F0] transition-colors">Politique de Confidentialité</a>
            <a href="#home" onClick={() => handleScrollTo("home")} className="hover:text-[#FAF7F0] transition-colors">Termes de Vente d'Honneur</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

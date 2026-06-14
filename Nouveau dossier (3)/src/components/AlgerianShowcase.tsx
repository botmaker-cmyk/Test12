import { motion } from "motion/react";
import { Sparkles, Flower2, CircleCheck } from "lucide-react";

export default function AlgerianShowcase() {
  const highlights = [
    {
      title: "L'Amande Noble de Kabylie",
      desc: "Nous sélectionnons exclusivement des amandes entières séchées au soleil méditerranéen. Elles sont émondées à blanc et moulues à la commande pour préserver les huiles naturelles parfumées.",
    },
    {
      title: "L'Eau de Fleur d'Oranger",
      desc: "Distillée de manière ancestrale dans des alambics en cuivre traditionnels. Son arôme floral profond imprègne subtilement tous nos sirops de miel et pâtes d'amandes fondantes.",
    },
    {
      title: "La Dentelle de Pâte Façonnée",
      desc: "Chaque pièce est une sculpture miniature. Nos Knidlettes et Dziriettes sont pincées manuellement point par point avec un ustensile en laiton cuivré, créant un plissé incomparable.",
    },
  ];

  return (
    <section id="showcase" className="py-24 bg-[#FAF7F0] relative overflow-hidden">
      {/* Background radial soft light */}
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-amber-500/5 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-16 border-b border-[#E5D5B8]/40 pb-10">
          <div className="lg:col-span-7">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-amber-600 block mb-2 font-bold">
              Collection Signature & Tradition
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-stone-900 tracking-tight leading-none">
              Les Orfèvreries d'Algérie
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-6">
            <p className="text-stone-500 font-serif text-xs sm:text-sm leading-relaxed">
              D’Alger à Constantine, chaque région porte un pan de l'histoire impériale de notre pâtisserie. Décoiffés de sucre glace ou trempés dans de purs sirops de miel doré, découvrez nos joyaux traditionnels.
            </p>
          </div>
        </div>

        {/* Alternate Overlap Section 1: Tcharek Msaker close up */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4:3] rounded-2xl overflow-hidden shadow-[0_15px_35px_rgba(28,25,23,0.08)] border border-[#E5D5B8]/30 bg-stone-100">
              <img
                src="/src/assets/images/tcharek_msaker_powdered_1781397219555.jpg"
                alt="Finest icing powdered Tcharek Msaker close-up"
                className="w-full h-full object-cover select-none"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            {/* Outline Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-40 h-40 border border-amber-500/15 rounded-2xl -z-10" />
          </motion.div>

          <div className="lg:col-span-6 lg:pl-8">
            <div className="flex items-center gap-2 text-stone-900 mb-3">
              <Flower2 className="w-5 h-5 text-amber-600 stroke-[1.2]" />
              <span className="font-serif text-[11px] font-bold tracking-[0.25em] text-amber-700 uppercase">La Neige d ' Alger</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 font-normal leading-tight mb-5">
              Tcharek Msaker impérial
            </h3>
            <p className="text-stone-600 font-serif text-sm leading-relaxed mb-6">
              Nos Tcharek Msaker se révèlent sous une double couche de sucre glace tamisé, rappelant les pics enneigés se dessinant au matin. À l'intérieur, la pâte d'amande parfumée à la cannelle fond délicieusement à la première bouchée, créant une harmonie sans pareille entre croustillant et douceur.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <CircleCheck className="w-4 h-4 text-amber-600 mt-0.5" />
                <p className="text-stone-700 text-xs sm:text-sm font-serif">Arrosé d’authentique distillat d'eau de rose de Blida.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <CircleCheck className="w-4 h-4 text-amber-600 mt-0.5" />
                <p className="text-stone-700 text-xs sm:text-sm font-serif">Idéal pour accompagner le thé à la menthe traditionnel (S'ni).</p>
              </div>
            </div>
          </div>
        </div>

        {/* Alternate Overlap Section 2: Knidlettes d'Or close up */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 lg:order-2 relative">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4:3] rounded-2xl overflow-hidden shadow-[0_15px_35px_rgba(28,25,23,0.08)] border border-[#E5D5B8]/30 bg-stone-100"
            >
              <img
                src="/src/assets/images/knidlettes_dziriette_luxury_1781397233005.jpg"
                alt="Intricate golden Knidlettes selection"
                className="w-full h-full object-cover select-none"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </motion.div>
            <div className="absolute -top-4 -left-4 w-40 h-40 border border-amber-500/15 rounded-2xl -z-10" />
          </div>

          <div className="lg:col-span-6 lg:order-1 lg:pr-8">
            <div className="flex items-center gap-2 text-stone-900 mb-3">
              <Sparkles className="w-4 h-4 text-amber-600 stroke-[1.2]" />
              <span className="font-serif text-[11px] font-bold tracking-[0.25em] text-amber-700 uppercase">Pergola Artisanal</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 font-normal leading-tight mb-5">
              Le façonnage par plissage
            </h3>
            <p className="text-stone-600 font-serif text-sm leading-relaxed mb-6">
              Nos Knidlettes d'Or incarnent le summum de l'orfèvrerie décorative. Chaque petite corolle de pâte ultra-fine est pincée à la main plus de 30 fois, formant une dentelle froncée accueillant un cœur d'amandes parfumées infusé de zeste d'agrumes locaux. Glacée au miel pur, elle est ornée d'une bille argentée.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {highlights.map((hlt, i) => (
                <div key={i} className="bg-white/80 border border-[#E5D5B8]/30 p-4.5 rounded-xl hover:shadow-md transition-shadow">
                  <p className="font-serif text-xs font-semibold text-stone-900 mb-1">{hlt.title}</p>
                  <p className="text-[11px] text-stone-500 leading-relaxed font-serif">{hlt.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

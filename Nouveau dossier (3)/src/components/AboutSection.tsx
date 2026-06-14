import { useState } from "react";
import { motion } from "motion/react";
import { Award, HeartHandshake, History, ShieldAlert, Sparkles, Utensils } from "lucide-react";
import { TIMELINE } from "../data";

export default function AboutSection() {
  const [activeTimelineIdx, setActiveTimelineIdx] = useState<number>(TIMELINE.length - 1);

  const stats = [
    { label: "Années d'Expérience", value: "32+" },
    { label: "Ingrédients Biologiques", value: "100%" },
    { label: "Cérémonies Honorées", value: "800+" },
    { label: "Recettes Ancestrales", value: "15+" },
  ];

  return (
    <section id="story" className="py-24 bg-[#FAF7F0] relative overflow-hidden">
      {/* Decorative vector meshes */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-amber-500/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-yellow-400/5 blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Asymmetrical Overlap Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
          
          {/* Left Panel: Narrative Text & Highlights */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-amber-700 font-bold mb-3">
              Notre Maison & Noblesse
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-stone-900 tracking-tight leading-tight">
              Depuis 1994, Transmettre <br />La Haute Couture du Goût
            </h2>
            <div className="w-12 h-[1px] bg-amber-500 my-6" />

            <div className="space-y-4 font-serif text-stone-600 text-sm leading-relaxed max-w-xl">
              <p>
                L’histoire de notre laboratoire de douceurs s’enracine au cœur d'Alger la Blanche, là où l'eau de fleur d'oranger s'anime près des portes en bois sculpté de la basse Kasbah. C'est ici que Chef <strong className="text-stone-900 font-bold">Oum Mohamed</strong> apprit l'art délicat du pétrissage, de l’ébullition des nectars et du choix de la juste amande.
              </p>
              <p>
                Chaque matin, nos rouleaux façonnent un rêve de finesse. Pour nous, la pâtisserie n'est pas un assemblage mécanique; c'est une formule mystique mariant la douceur d'un sucre perlé blanc à un beurre clarifié d'exception. Nous n'admettons aucun compromis : pas d'arômes de synthèse, pas d'huile industrielle, pas de conservateurs.
              </p>
            </div>

            {/* Statistics Row Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 pt-8 border-t border-[#E5D5B8]/40">
              {stats.map((st, i) => (
                <div key={i} className="text-left">
                  <p className="font-serif text-2xl sm:text-3xl font-normal text-amber-600 mb-1">{st.value}</p>
                  <p className="text-[10px] uppercase font-mono tracking-wider text-stone-500 font-medium leading-none">{st.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel: Showcase of Values Card */}
          <div className="lg:col-span-5 relative">
            <div className="bg-[#FCFAF6] border border-[#E5D5B8]/50 p-8 md:p-10 rounded-2xl shadow-[0_20px_45px_rgba(28,25,23,0.06)]">
              <div className="flex items-center gap-3.5 mb-6 text-amber-600">
                <Award className="w-6 h-6 stroke-[1.2]" />
                <span className="font-serif text-[11px] font-bold tracking-[0.25em] text-stone-900 uppercase">La Charte d'Excellence</span>
              </div>

              <div className="space-y-6 text-left">
                {[
                  {
                    icon: Utensils,
                    title: "Pétrissage à Plat Unique",
                    desc: "Nos pâtes sont étirées à la main afin de préserver l'élasticité naturelle du gluten, rendant l'enveloppe croustillante et fine."
                  },
                  {
                    icon: HeartHandshake,
                    title: "Engagement Locavore d'Or",
                    desc: "Nous soutenons les apiculteurs locaux en achetant des miels de montagne d'une pureté authentique sans miel de sucre industriel."
                  },
                  {
                    icon: Sparkles,
                    title: "Ornementation Personnalisée",
                    desc: "Toutes nos commandes de plateaux cérémoniaux sont décorées à la commande sous l'œil de la cheffe avec des rubans de satin précieux."
                  }
                ].map((val, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="p-2.5 rounded-full bg-amber-500/5 text-amber-600 shrink-0 h-fit border border-amber-500/10">
                      <val.icon className="w-4 h-4 stroke-[1.5]" />
                    </div>
                    <div>
                      <h4 className="font-serif text-xs font-semibold text-stone-900">{val.title}</h4>
                      <p className="text-stone-500 font-serif text-[11px] sm:text-xs leading-relaxed mt-1">{val.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Aesthetic framing border */}
            <div className="absolute -inset-2 border border-dashed border-[#E5D5B8]/30 rounded-3xl pointer-events-none -z-10" />
          </div>

        </div>

        {/* Interactive History Timeline module */}
        <div className="bg-white rounded-2xl border border-[#E5D5B8]/30 p-8 md:p-12 shadow-sm text-center">
          <div className="flex items-center justify-center gap-2 text-stone-900 mb-3">
            <History className="w-4 h-4 text-amber-600 stroke-[1.2]" />
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-amber-700 font-bold">Le Voyage du Goût</span>
          </div>
          <h3 className="font-serif text-2xl text-stone-900 font-normal mb-8">La Lignée d'une Passion Gourmande</h3>

          {/* Timeline Nodes Navigation */}
          <div className="relative flex justify-between items-center max-w-xl mx-auto mb-10">
            {/* Thread Line across */}
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-stone-100 -translate-y-1/2 -z-10" />
            
            {TIMELINE.map((evt, i) => (
              <button
                key={evt.year}
                onClick={() => setActiveTimelineIdx(i)}
                className={`relative flex flex-col items-center group cursor-pointer focus:outline-none`}
              >
                <div
                  className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-xs font-mono font-bold transition-all duration-350 ${
                    activeTimelineIdx === i
                      ? "bg-stone-900 border-amber-500 text-amber-400 shadow-[0_0_12px_rgba(212,175,55,0.4)]"
                      : "bg-white border-stone-200 text-stone-400 hover:border-amber-400 hover:text-amber-600"
                  }`}
                >
                  {evt.year}
                </div>
              </button>
            ))}
          </div>

          {/* Current selected event body card */}
          <div className="max-w-xl mx-auto bg-[#FAFBF8] border border-stone-200 p-6 rounded-xl text-center">
            <motion.div
              key={activeTimelineIdx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h4 className="font-serif text-md font-bold text-stone-900 flex items-center justify-center gap-2 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                {TIMELINE[activeTimelineIdx].title}
              </h4>
              <p className="text-stone-500 font-serif text-xs md:text-sm leading-relaxed">
                {TIMELINE[activeTimelineIdx].description}
              </p>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}

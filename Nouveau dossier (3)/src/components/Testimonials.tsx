import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, MessageCircle, Quote, Sparkles, UserCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-white relative">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#FAF7F0] to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-amber-600 block mb-2 font-bold">
            Témoignages Gourmets
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 tracking-tight">
            Les Éloges de nos Convives
          </h2>
          <div className="w-12 h-[1px] bg-amber-500/50 mt-4" />
        </div>

        {/* Focus Review Carousel Card */}
        <div className="relative bg-[#FCFAF6] border border-[#E5D5B8]/45 p-8 md:p-14 rounded-3xl shadow-[0_15px_40px_rgba(28,25,23,0.05)] text-center max-w-3xl mx-auto">
          
          {/* Decorative Background Quote Marks */}
          <div className="absolute top-10 left-10 text-[#E5D5B8]/20 select-none">
            <Quote className="w-20 h-20 rotate-180 fill-current" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIdx}
              initial={{ opacity: 0, scale: 0.98, y: 5 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -5 }}
              transition={{ duration: 0.45 }}
              className="relative z-10 flex flex-col items-center"
            >
              {/* Star Rating Render */}
              <div className="flex justify-center gap-1 mb-6 text-amber-500">
                {Array.from({ length: TESTIMONIALS[currentIdx].rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current stroke-[1.2]" />
                ))}
              </div>

              {/* Comment quote text */}
              <p className="font-serif text-base sm:text-lg md:text-xl text-stone-850 leading-relaxed font-light italic max-w-2xl px-2">
                " {TESTIMONIALS[currentIdx].comment} "
              </p>

              {/* Client specifications */}
              <div className="mt-8 flex flex-col items-center">
                <div className="flex items-center gap-2 mb-1">
                  <UserCheck className="w-4 h-4 text-amber-600 stroke-[1.5]" />
                  <span className="font-serif text-sm font-bold text-stone-900">
                    {TESTIMONIALS[currentIdx].name}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#5C5446]/70">
                  <span>{TESTIMONIALS[currentIdx].role}</span>
                  <span>•</span>
                  <span className="text-amber-700 font-semibold">{TESTIMONIALS[currentIdx].cakeType}</span>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Nav Controls Overlay */}
          <div className="flex justify-between items-center mt-10 md:mt-2 px-1 relative z-20">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full border border-stone-200 bg-white text-stone-700 hover:border-amber-600 hover:text-amber-600 cursor-pointer transition-colors focus:outline-none"
              aria-label="Previous gourmet testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            {/* Dots navigation */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIdx(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIdx === i ? "bg-amber-600 w-5" : "bg-stone-200"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2.5 rounded-full border border-stone-200 bg-white text-stone-700 hover:border-amber-600 hover:text-amber-600 cursor-pointer transition-colors focus:outline-none"
              aria-label="Next gourmet testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* CTA Banner Section */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <MessageCircle className="w-4 h-4 text-emerald-600" />
          <span className="font-mono text-[10px] uppercase text-stone-500 tracking-wider">
            Rejoignez notre cercle de clients prestigieux en commandant dès aujourd'hui.
          </span>
        </div>

      </div>
    </section>
  );
}

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, Phone, MapPin, Clock, Send, CheckCircle, HelpCircle, Mail, Sparkles } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    deliveryDate: "",
    ceremonyType: "wedding",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);

    // Simulate luxury API message delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        phone: "",
        deliveryDate: "",
        ceremonyType: "wedding",
        message: "",
      });
      // Clear success note after 4 seconds
      setTimeout(() => setSubmitSuccess(false), 4500);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-[#FAF7F0] relative overflow-hidden text-stone-800">
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-amber-600 block mb-2 font-bold">
            Réservations & Inscriptions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 tracking-tight">
            Planifier un Événement d'Exception
          </h2>
          <div className="w-12 h-[1px] bg-amber-500/50 mt-4" />
        </div>

        {/* Double-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Traditional Credentials & Form */}
          <div className="lg:col-span-6 text-left bg-white/70 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-[#E5D5B8]/40 shadow-sm relative">
            <h3 className="font-serif text-xl font-normal text-stone-950 mb-6 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-amber-600 stroke-[1.2]" />
              Faire une Demande d'Information
            </h3>

            <form onSubmit={handleFormSubmit} className="space-y-5">
              
              <div>
                <label className="block text-[10px] font-mono text-stone-400 uppercase tracking-wider mb-1.5 font-bold">Nom Complet <span className="text-rose-500">*</span></label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Ex: Myriam Belkacemi"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#FAF9F5] border border-stone-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-lg p-3 text-xs font-serif placeholder-stone-400 outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono text-stone-400 uppercase tracking-wider mb-1.5 font-bold">Téléphone Mobile <span className="text-rose-500">*</span></label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Ex: 0550 12 34 56"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[#FAF9F5] border border-stone-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-lg p-3 text-xs font-serif placeholder-stone-400 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono text-stone-400 uppercase tracking-wider mb-1.5 font-bold">Date Célébration Souhaitée</label>
                  <input
                    type="date"
                    name="deliveryDate"
                    value={formData.deliveryDate}
                    onChange={handleChange}
                    className="w-full bg-[#FAF9F5] border border-stone-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-lg p-2.5 text-xs font-serif text-stone-700 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono text-stone-400 uppercase tracking-wider mb-1.5 font-bold">Type d'Événement</label>
                <select
                  name="ceremonyType"
                  value={formData.ceremonyType}
                  onChange={handleChange}
                  className="w-full bg-[#FAF9F5] border border-stone-200 focus:border-amber-500 focus:ring-0 rounded-lg p-3 text-xs font-serif text-stone-700 outline-none cursor-pointer"
                >
                  <option value="wedding">Mariage Impérial (Noces)</option>
                  <option value="engagement">Fiançailles (Khtoba)</option>
                  <option value="reunion">Tea Event VIP / Circoncision</option>
                  <option value="other">Autre Célébration Couture</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-mono text-stone-400 uppercase tracking-wider mb-1.5 font-bold">Votre Message / Précisions</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Décrivez-nous vos envies de personnalisation, thèmes de couleurs ou questions particulières..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#FAF9F5] border border-stone-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-lg p-3 text-xs font-serif placeholder-stone-400 outline-none transition-colors"
                />
              </div>

              {/* Success Notification message */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex gap-2.5 p-3.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 text-left items-start"
                  >
                    <CheckCircle className="w-4.5 h-4.5 shrink-0 text-emerald-600 mt-0.5" />
                    <div className="text-xs">
                      <p className="font-bold uppercase font-mono text-[9px]">Demande Transmise !</p>
                      <p className="font-serif leading-relaxed mt-0.5">
                        Votre message a bien été délivré à l'atelier d'Oum Mohamed. Notre responsable de clientèle vous rappellera sous 24h ouvrées.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit CTA action */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 text-xs font-serif uppercase tracking-widest bg-stone-900 border border-stone-900 text-amber-300 hover:bg-amber-600 hover:border-amber-600 hover:text-white transition-all duration-350 rounded-full cursor-pointer flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Transmission en cours...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    Envoyer ma Demande d'Information
                  </>
                )}
              </button>

            </form>
          </div>

          {/* Right Column: Physical Credentials & Real Maps Frame */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-amber-700 font-bold block mb-2">Visite & Coordonnées</span>
              <h3 className="font-serif text-2xl font-normal text-stone-900 mb-4">L'Atelier d'Honneur</h3>
              <p className="text-stone-500 font-serif text-xs leading-relaxed max-w-md">
                Prenez rendez-colloque ou dégustation uniquement sur rendez-vous à notre atelier d'Alger. Nos conseillers vous reçoivent dans un cadre raffiné et intime.
              </p>
            </div>

            {/* Static Credentials details wrapper */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl border border-stone-100 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-xs font-semibold text-stone-900">Notre Adresse Privée</h4>
                  <p className="text-[11px] text-stone-500 font-serif leading-relaxed mt-1">
                    Villa des Amandiers, Chemin El Biar, <br />Hydra, Alger, 16035
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-stone-100 flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-xs font-semibold text-stone-900">Heures d'Accueil</h4>
                  <p className="text-[11px] text-stone-500 font-serif leading-relaxed mt-1">
                    Du Samedi au Jeudi <br />10h00 - 19h00 <br />
                    <span className="text-amber-700 italic font-semibold text-[10px]">Fermé le Vendredi</span>
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-stone-100 flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-xs font-semibold text-stone-900">Ligne Directe</h4>
                  <p className="text-[11px] text-stone-500 font-serif leading-relaxed mt-1">
                    Mobile : +213 (0) 550 00 00 00 <br />
                    Atelier : +213 (0) 21 00 00 00
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-stone-100 flex items-start gap-3">
                <Mail className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-xs font-semibold text-stone-900">Inquiries Email</h4>
                  <p className="text-[11px] text-stone-500 font-serif leading-relaxed mt-1">
                    atelier@oum-mohamed.dz <br />
                    presse@oum-mohamed.dz
                  </p>
                </div>
              </div>
            </div>

            {/* HIGH-FIDELITY MAPS CONTAINER */}
            <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-[0_15px_30px_rgba(28,25,23,0.06)] border border-[#E5D5B8]/40 bg-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12789.761062095874!2d3.0234567!3d36.7543212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fad4de0fdf06b%3A0xe5195e019aa5bd4d!2sHydra!5e0!3m2!1sfr!2sdz!4v1781397233000!5m2!1sfr!2sdz"
                className="w-full h-full border-0 grayscale opacity-85 hover:grayscale-0 transition-all duration-500"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer"
                title="Google Map location of Oum Mohamed Pâtisserie Hydra Alger"
              />
              <div className="absolute bottom-3 left-3 bg-stone-900/90 backdrop-blur-sm text-amber-300 font-serif text-[9px] uppercase tracking-widest py-1 px-3 rounded shadow-md border border-amber-500/10 pointer-events-none">
                📍 Hydra - Alger la blanche
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

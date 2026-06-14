import { motion, AnimatePresence } from "motion/react";
import { X, Trash2, ShoppingBag, Send, AlertCircle, ShoppingCart, Sparkles } from "lucide-react";
import { CartItem } from "../types";

interface OrderCartPopupProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemoveItem: (index: number) => void;
  onUpdateQty: (index: number, newQty: number) => void;
}

export default function OrderCartPopup({
  isOpen,
  onClose,
  cartItems,
  onRemoveItem,
  onUpdateQty,
}: OrderCartPopupProps) {

  // Calculate prices
  const getItemPrice = (item: CartItem) => {
    let base = item.product.pricePerPiece * item.quantity;
    if (item.boxSize === "royal") base += 500;
    if (item.boxSize === "prestige") base += 1500;
    return base;
  };

  const totalCartCost = cartItems.reduce((acc, item) => acc + getItemPrice(item), 0);

  // Generate customized WhatsApp Order text
  const handleSendWhatsAppOrder = () => {
    if (cartItems.length === 0) return;

    let textHeader = `🛎️ *NOUVELLE COMMANDE - OUM MOHAMED PÂTISSERIE* 🛎️\n`;
    textHeader += `Bonjour Chef Oum Mohamed, je souhaite passer une commande d'honneur :\n\n`;

    let textBody = ``;
    cartItems.forEach((item, index) => {
      const lineCost = getItemPrice(item);
      textBody += `*${index + 1}. ${item.product.name}* (${item.product.localName})\n`;
      textBody += `  - Quantité : ${item.quantity} pièces\n`;
      
      const boxLabel = item.boxSize === "royal" ? "Plateau d'Or (+500 DA)" : item.boxSize === "prestige" ? "Coffret Bois d'Honneur (+1500 DA)" : "Carton Royal (Inclus)";
      textBody += `  - Boitage : ${boxLabel}\n`;
      
      if (item.notes) {
        textBody += `  - Instructions : _"${item.notes}"_\n`;
      }
      textBody += `  - Sous-total : *${lineCost.toLocaleString()} DA*\n\n`;
    });

    let textFooter = `🌟 *TOTAL ESTIMÉ DE MA SÉLECTION :* *${totalCartCost.toLocaleString()} DA*\n`;
    textFooter += `-----------------------------------------\n`;
    textFooter += `👤 *Mes Coordonnées :*\n`;
    textFooter += `  - Nom Complet : [Veuillez écrire votre nom]\n`;
    textFooter += `  - Date Souhaitée : [Date de votre célébration]\n`;
    textFooter += `  - Ville de Livraison : [Votre Ville, ex: Alger, Blida...]\n\n`;
    textFooter += `Merci de me recontacter pour confirmer la faisabilité et coordonner la livraison d'honneur ! ✨`;

    const encodedText = encodeURIComponent(textHeader + textBody + textFooter);
    const whatsappUrl = `https://wa.me/213550000000?text=${encodedText}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Glass Overlay panel backdrop */}
          <motion.div
            id="cart-overlay-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-sm"
          />

          {/* Scrolling Cart Drawer Sheet */}
          <motion.div
            id="order-cart-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.55 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[500px] bg-[#FAF8F3] z-50 shadow-[-10px_0_40px_rgba(0,0,0,0.25)] border-l border-[#E5D5B8]/40 flex flex-col justify-between"
          >
            {/* Header Block inside drawer */}
            <div className="p-6 border-b border-[#E5D5B8]/30 flex justify-between items-center bg-white">
              <div className="flex items-center gap-3 text-stone-900">
                <ShoppingBag className="w-5 h-5 text-amber-600 stroke-[1.5]" />
                <div>
                  <h3 className="font-serif text-lg font-normal">Mon Coffret d'Honneur</h3>
                  <p className="text-[10px] font-mono text-[#5C5446]/60 uppercase tracking-widest font-semibold">
                    {cartItems.length} gâteau(x) sélectionné(s)
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full border border-stone-200 text-stone-700 hover:text-amber-600 bg-[#FCFAF6] cursor-pointer focus:outline-none transition-colors"
                aria-label="Close box list"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* List Body items */}
            <div className="flex-grow overflow-y-auto p-6 space-y-4">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-80 text-center">
                  <div className="w-16 h-16 rounded-full bg-stone-105 border border-dashed border-stone-200 flex items-center justify-center text-stone-400 mb-4 animate-bounce">
                    <ShoppingCart className="w-6 h-6 stroke-[1.2]" />
                  </div>
                  <h4 className="font-serif text-md font-semibold text-stone-800">Votre panier est vide</h4>
                  <p className="text-xs text-stone-500 font-serif leading-relaxed mt-2 max-w-xs mx-auto">
                    Explorez notre collection d'art culinaire et ajoutez des plateaux ou douceurs individuelles à votre panier d'exception.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-6 px-6 py-2.5 rounded-full bg-stone-900 text-[#E5D5B8] font-serif text-[10px] uppercase tracking-wider hover:bg-amber-600 hover:text-white transition-colors cursor-pointer focus:outline-none"
                  >
                    Voir la Collection
                  </button>
                </div>
              ) : (
                cartItems.map((item, index) => {
                  const lineCost = getItemPrice(item);
                  return (
                    <motion.div
                      key={`${item.product.id}-${index}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white border border-[#E5D5B8]/30 p-4.5 rounded-xl shadow-sm flex gap-4 relative group hover:border-amber-500/30 transition-all"
                    >
                      {/* Thumbnail frame left */}
                      <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 border border-stone-100 bg-stone-50">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      {/* Content Details right */}
                      <div className="flex-grow text-left relative">
                        {/* Title and delete action row */}
                        <div className="flex justify-between items-start gap-4">
                          <div>
                            <span className="font-mono text-[8px] uppercase tracking-wider text-amber-700 font-bold">{item.product.localName}</span>
                            <h4 className="font-serif text-sm font-semibold text-stone-950 leading-tight">
                              {item.product.name}
                            </h4>
                          </div>

                          <button
                            onClick={() => onRemoveItem(index)}
                            className="text-stone-300 hover:text-rose-600 transition-colors cursor-pointer"
                            aria-label={`Remove ${item.product.name}`}
                          >
                            <Trash2 className="w-4 h-4 stroke-[1.5]" />
                          </button>
                        </div>

                        {/* Specifications rows (Boxes & custom notes) */}
                        <div className="mt-2.5 space-y-1 text-[11px] font-serif text-stone-500">
                          <p className="flex items-center gap-1">
                            <span className="font-mono text-[9px] text-[#AB9E85]/80 uppercase">Finition :</span>
                            <span className="text-stone-700 capitalize text-[10px] bg-[#FAF5EB] px-1.5 py-0.5 rounded border border-[#E5D5B8]/20">
                              {item.boxSize === "royal" ? "Plateau d'Or (+500 DA)" : item.boxSize === "prestige" ? "Coffret d'Honneur Bois (+1500 DA)" : "Carton Royal"}
                            </span>
                          </p>
                          {item.notes && (
                            <p className="italic text-amber-800 bg-amber-500/[0.04] p-1.5 rounded text-[10px] border border-amber-500/10 mt-1 max-w-xs leading-normal">
                              Note : "{item.notes}"
                            </p>
                          )}
                        </div>

                        {/* Quantity and Line subtotal row */}
                        <div className="mt-4 pt-3.5 border-t border-stone-50 flex items-center justify-between">
                          {/* Qty Changer */}
                          <div className="flex items-center gap-2.5">
                            <button
                              onClick={() => {
                                if (item.quantity > item.product.minOrderQuantity) {
                                  onUpdateQty(index, item.quantity - 1);
                                }
                              }}
                              className="w-6 h-6 rounded-full border border-stone-200 hover:border-amber-600 text-stone-600 hover:text-amber-600 flex items-center justify-center text-xs font-mono cursor-pointer"
                              disabled={item.quantity <= item.product.minOrderQuantity}
                            >
                              -
                            </button>
                            <span className="font-mono text-xs font-bold text-stone-900 w-5 text-center">{item.quantity}</span>
                            <button
                              onClick={() => onUpdateQty(index, item.quantity + 1)}
                              className="w-6 h-6 rounded-full border border-stone-200 hover:border-amber-600 text-stone-600 hover:text-amber-600 flex items-center justify-center text-xs font-mono cursor-pointer"
                            >
                              +
                            </button>
                          </div>

                          {/* Line total price */}
                          <span className="font-serif text-xs font-bold text-stone-850">
                            {lineCost.toLocaleString()} DA
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })
              )}
            </div>

            {/* Total Footer panel */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-[#E5D5B8]/30 bg-white space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-serif text-stone-500">
                    <span>Sous-total des gâteaux :</span>
                    <span>{(cartItems.reduce((acc, item) => acc + (item.product.pricePerPiece * item.quantity), 0)).toLocaleString()} DA</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-serif text-stone-500">
                    <span>Finition d'Emballages :</span>
                    <span>{(cartItems.reduce((acc, item) => acc + (item.boxSize === "royal" ? 500 : item.boxSize === "prestige" ? 1500 : 0), 0)).toLocaleString()} DA</span>
                  </div>
                  <div className="h-[1px] bg-[#E5D5B8]/20 my-2" />
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="font-serif text-xs text-stone-700 select-none block leading-none mb-1">Total Général Estimé :</span>
                      <span className="text-[10px] font-mono text-stone-400 capitalize">Prix hors livraison • Facture finale à coordonner</span>
                    </div>
                    <span className="font-serif text-xl font-bold text-amber-600">
                      {totalCartCost.toLocaleString()} DA
                    </span>
                  </div>
                </div>

                {/* Info Disclaimer alert */}
                <div className="flex gap-2.5 p-3 rounded-xl bg-amber-500/5 text-amber-800 border border-amber-500/10 text-left items-start">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <p className="font-serif text-[10px] leading-relaxed">
                    Note : Notre atelier fonctionne uniquement sur commande préalable de 48h à 7 jours. La soumission de cet ordre par WhatsApp lancera un échange direct avec la cheffe pour valider la fabrication.
                  </p>
                </div>

                {/* Submitting Buttons / WhatsApp Anchor */}
                <button
                  onClick={handleSendWhatsAppOrder}
                  className="w-full py-4.5 rounded-full bg-stone-900 border border-stone-900 text-amber-300 font-serif text-xs uppercase tracking-widest hover:bg-emerald-600 hover:border-emerald-600 hover:text-white transition-all duration-350 shadow-[0_5px_15px_rgba(28,25,23,0.15)] cursor-pointer flex items-center justify-center gap-2.5"
                >
                  <Send className="w-4 h-4 stroke-[1.2]" />
                  Envoyer ma Commande WhatsApp
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

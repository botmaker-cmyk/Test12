import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, ShoppingBag, X, Check, Eye, ChevronRight, CornerDownRight, Heart, Sparkles } from "lucide-react";
import { Product, CartItem } from "../types";
import { PRODUCTS } from "../data";

interface ProductGalleryProps {
  onAddItemToCart: (item: CartItem) => void;
}

export default function ProductGallery({ onAddItemToCart }: ProductGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Modal local states
  const [orderQuantity, setOrderQuantity] = useState<number>(10);
  const [selectedBoxStyle, setSelectedBoxStyle] = useState<"standard" | "royal" | "prestige">("standard");
  const [customInstructions, setCustomInstructions] = useState<string>("");
  const [isAddedSuccessfully, setIsAddedSuccessfully] = useState<boolean>(false);

  // Toggle categories list
  const categories = [
    { value: "all", label: "Tout Voir" },
    { value: "traditional", label: "Tradition d'Or" },
    { value: "modern", label: "Créations Modernes" },
    { value: "trays", label: "Plateaux d'Honneur" },
  ];

  // Memoized filter logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.localName.includes(searchQuery) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Open modal handler
  const handleOpenProduct = (product: Product) => {
    setSelectedProduct(product);
    setOrderQuantity(product.minOrderQuantity);
    setSelectedBoxStyle("standard");
    setCustomInstructions("");
    setIsAddedSuccessfully(false);
  };

  // Quantity controllers
  const incrementQty = () => setOrderQuantity(prev => prev + 1);
  const decrementQty = (product: Product) => {
    setOrderQuantity(prev => (prev > product.minOrderQuantity ? prev - 1 : prev));
  };

  // Trigger main cart addition list
  const handleAddToCartSubmit = () => {
    if (!selectedProduct) return;
    setIsAddedSuccessfully(true);

    const newItem: CartItem = {
      product: selectedProduct,
      quantity: orderQuantity,
      notes: customInstructions.trim() ? customInstructions : undefined,
      boxSize: selectedBoxStyle,
    };

    // Callback to App State
    setTimeout(() => {
      onAddItemToCart(newItem);
      setSelectedProduct(null);
      setIsAddedSuccessfully(false);
    }, 850);
  };

  return (
    <section id="collection" className="py-24 bg-white relative">
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#FDFBF7] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-amber-600 font-bold mb-3">La Carte Haute Couture</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-stone-900 tracking-tight leading-tight">
            Notre Collection de Douceurs
          </h2>
          <div className="w-16 h-[1px] bg-amber-500/50 my-5" />
          <p className="text-stone-500 font-serif text-sm leading-relaxed">
            Façonnez votre coffret gourmand sur-mesure. Sélectionnez vos variétés traditionnelles préférées, définissez vos quantités et composez un assortiment d’honneur pour vos convives.
          </p>
        </div>

        {/* Filter Toolbar Block */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12 border-b border-[#E5D5B8]/20 pb-8">
          
          {/* Categories Tab list */}
          <div className="flex flex-wrap gap-2.5 justify-center md:justify-start w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`py-2 px-6 rounded-full font-serif text-xs uppercase tracking-wider transition-all duration-300 border focus:outline-none cursor-pointer ${
                  selectedCategory === cat.value
                    ? "bg-stone-900 border-stone-900 text-[#E5D5B8] shadow-md"
                    : "bg-stone-50 border-stone-200 text-stone-600 hover:border-amber-400 hover:text-amber-700"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Luxury Search Input */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Rechercher Tcharek, Baklawa..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#FAF9F6] border border-[#E5D5B8]/50 rounded-full font-serif text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
            />
            <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-stone-400 stroke-[1.5]" />
          </div>

        </div>

        {/* Products Grid */}
        <motion.div
          id="products-display-grid"
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.55 }}
                className="group relative flex flex-col bg-[#FDFCF9] rounded-2xl border border-[#E5D5B8]/30 overflow-hidden hover:shadow-[0_20px_40px_rgba(28,25,23,0.06)] hover:border-amber-500/50 transition-all duration-500"
              >
                {/* Thumbnail Display */}
                <div className="relative aspect-[4:3] overflow-hidden bg-stone-100">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  {/* Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Badges */}
                  {p.badge && (
                    <span className="absolute top-4 left-4 bg-amber-600 text-white font-serif text-[9px] uppercase tracking-wider py-1 px-3 rounded-full shadow-md font-semibold">
                      {p.badge}
                    </span>
                  )}
                  {/* Min Quantity Tag */}
                  <span className="absolute bottom-4 right-4 bg-stone-900/80 backdrop-blur-sm text-[#F5F1E9] font-mono text-[9px] uppercase tracking-wider py-1 px-2.5 rounded">
                    MIn. {p.minOrderQuantity} pcs
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    {/* Titles */}
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <h3 className="font-serif text-lg text-stone-900 group-hover:text-amber-700 transition-colors">
                        {p.name}
                      </h3>
                      <span className="font-serif text-[11px] text-amber-600 font-bold tracking-wide mt-1">
                        {p.localName}
                      </span>
                    </div>

                    <p className="text-stone-500 font-serif text-xs leading-relaxed line-clamp-2 mb-4">
                      {p.description}
                    </p>
                  </div>

                  {/* Card Bottom Panel / Pricing & Button */}
                  <div className="border-t border-[#E5D5B8]/20 pt-4 mt-auto flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-mono text-stone-400 uppercase tracking-wider">Tarif de Référence</p>
                      <p className="font-serif text-[13px] font-bold text-stone-850">
                        {p.pricePerPiece.toLocaleString()} DA <span className="text-[10px] font-normal text-stone-400">/ pce</span>
                      </p>
                    </div>

                    <button
                      onClick={() => handleOpenProduct(p)}
                      className="p-2.5 rounded-full bg-stone-50 hover:bg-amber-600 hover:text-white border border-[#E5D5B8]/40 hover:border-amber-600 transition-all duration-350 cursor-pointer text-[#5C5446] focus:outline-none flex items-center gap-1.5 text-xs font-serif tracking-wider uppercase px-4"
                    >
                      Commander
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredProducts.length === 0 && (
            <div className="col-span-full py-16 text-center border border-dashed border-[#E5D5B8] rounded-2xl bg-stone-50/50">
              <p className="font-serif text-stone-500 italic">Aucun gâteau ne correspond à votre recherche pour le moment.</p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="mt-4 font-mono text-[10px] text-amber-600 uppercase tracking-widest hover:underline"
              >
                Réinitialiser la recherche
              </button>
            </div>
          )}
        </motion.div>

        {/* Floating VIP catering note */}
        <div className="mt-16 bg-[#FDFCF9] border border-dashed border-[#E5D5B8]/60 p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left max-w-xl">
            <div className="p-3 bg-amber-500/10 text-amber-700 rounded-full shrink-0">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <p className="font-serif text-xs uppercase tracking-widest text-[#E5D5B8]/70 text-amber-700 font-bold mb-1">Catering & Événements prestigieux</p>
              <p className="text-stone-500 font-serif text-xs leading-relaxed">
                Vous organisez de grandes noces, fiançailles ou réceptions ministérielles ? Chef Oum Mohamed propose des formules de service à table complètes et des personnalisations aux couleurs de vos thèmes de mariage.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/213550000000?text=Bonjour,%20je%20souhaite%20des%20informations%20pour%20un%20service%20traiteur%20mariage."
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-6 py-3 border border-stone-850 text-stone-850 hover:bg-stone-850 hover:text-amber-300 font-serif text-[10px] uppercase tracking-widest rounded-full transition-all duration-300 cursor-pointer"
          >
            Discuter De Mon Événement
          </a>
        </div>

      </div>

      {/* Dynamic Detail Modal Panel */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal Glass Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-stone-950/70 backdrop-blur-sm"
            />

            {/* Modal Sheet Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: "spring", bounce: 0, duration: 0.45 }}
              className="relative bg-[#FCFAF6] border border-[#E5D5B8]/50 rounded-2xl shadow-[0_30px_70px_rgba(0,0,0,0.35)] max-w-3xl w-full max-h-[90vh] overflow-y-auto z-10 p-6 md:p-8 flex flex-col"
            >
              {/* Close Button Trigger */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 rounded-full border border-stone-200 hover:border-amber-600 hover:text-amber-600 bg-white shadow-sm cursor-pointer transition-colors focus:outline-none"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Grid Content with media left, form details right */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                
                {/* Media Card left */}
                <div>
                  <div className="relative aspect-[4:3] rounded-xl overflow-hidden border border-[#E5D5B8]/30 max-h-72">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Highlights notes / Ingredients lists */}
                  <div className="mt-5 text-left">
                    <p className="font-serif text-[11px] font-bold text-stone-600 tracking-wider uppercase mb-2">Ingrédients Nobles :</p>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProduct.ingredients.map((ing, i) => (
                        <span key={i} className="font-mono text-[9px] text-[#5C5446] bg-amber-500/5 border border-amber-500/10 px-2 py-1 rounded">
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 text-left bg-[#F5F2EA] p-4 rounded-lg border border-[#E5D5B8]/40">
                    <p className="font-mono text-[9px] uppercase tracking-wider text-amber-800 font-bold mb-1">Un Héritage Artisanal :</p>
                    <p className="text-[11px] text-stone-500 font-serif leading-relaxed">
                      Aucun additif ni conservateur. Nous utilisons un ghee clarifié de première qualité et des fruits entiers émondés manuellement.
                    </p>
                  </div>
                </div>

                {/* Form selectors right */}
                <div className="text-left">
                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-amber-600 font-bold">
                    {selectedProduct.localName}
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-stone-900 leading-tight mt-1 mb-3">
                    {selectedProduct.name}
                  </h3>

                  <p className="text-stone-600 font-serif text-xs leading-relaxed mb-6">
                    {selectedProduct.detailedDescription}
                  </p>

                  <div className="space-y-5 border-t border-[#E5D5B8]/30 pt-4">
                    
                    {/* Packaging selection box */}
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-wider text-stone-400 mb-2">Finition & Boite de Présentation</p>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { val: "standard", lbl: "Carton Royal", cost: "Inclus" },
                          { val: "royal", lbl: "Plateau d'Or", cost: "+500 DA" },
                          { val: "prestige", lbl: "Coffret Bois", cost: "+1500 DA" }
                        ].map((box) => (
                          <button
                            key={box.val}
                            onClick={() => setSelectedBoxStyle(box.val as any)}
                            className={`p-2.5 rounded-lg border text-left flex flex-col justify-between cursor-pointer focus:outline-none transition-all ${
                              selectedBoxStyle === box.val
                                ? "border-amber-500 bg-amber-500/5"
                                : "border-stone-200 bg-white hover:border-stone-400"
                            }`}
                          >
                            <span className="text-[11px] font-serif font-bold text-stone-850">{box.lbl}</span>
                            <span className="text-[9px] font-mono text-amber-600">{box.cost}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Quantity selectors */}
                    <div className="flex justify-between items-center gap-4 bg-white p-3.5 rounded-xl border border-stone-200">
                      <div>
                        <p className="text-[10px] font-mono uppercase text-stone-400">Quantité</p>
                        <p className="text-[9px] font-mono text-stone-500">Min. requis : {selectedProduct.minOrderQuantity} pièces</p>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => decrementQty(selectedProduct)}
                          className="w-8 h-8 rounded-full border border-stone-300 hover:border-amber-600 hover:text-amber-600 cursor-pointer text-stone-700 flex items-center justify-center font-mono font-bold text-lg leading-none"
                        >
                          -
                        </button>
                        <span className="font-mono text-sm font-bold w-6 text-center text-stone-900">{orderQuantity}</span>
                        <button
                          onClick={incrementQty}
                          className="w-8 h-8 rounded-full border border-stone-300 hover:border-amber-600 hover:text-amber-600 cursor-pointer text-stone-700 flex items-center justify-center font-mono font-bold text-lg leading-none"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Dedicated micro text input box */}
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-wider text-stone-400 mb-2">Dédicace / Instructions Particulières</p>
                      <textarea
                        rows={1.5}
                        placeholder="Ex: Éviter la cannelle, Ruban vert d'honneur..."
                        value={customInstructions}
                        onChange={(e) => setCustomInstructions(e.target.value)}
                        className="w-full p-2.5 rounded-lg border border-stone-200 bg-white font-serif text-xs text-stone-850 placeholder-stone-400 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    {/* Calc Estimation Line */}
                    <div className="flex justify-between items-center border-t border-[#E5D5B8]/20 pt-4">
                      <div>
                        <p className="text-[10px] font-mono text-stone-400 uppercase">Tarif Estatif</p>
                        <p className="font-serif text-md font-bold text-[#E5D5B8]/90 text-stone-900">
                          {((selectedProduct.pricePerPiece * orderQuantity) + (selectedBoxStyle === "royal" ? 500 : selectedBoxStyle === "prestige" ? 1500 : 0)).toLocaleString()} DA
                        </p>
                      </div>

                      <button
                        onClick={handleAddToCartSubmit}
                        disabled={isAddedSuccessfully}
                        className={`px-8 py-3.5 rounded-full font-serif text-xs uppercase tracking-widest text-[#E5D5B8] transition-all duration-350 cursor-pointer flex items-center gap-2.5 ${
                          isAddedSuccessfully
                            ? "bg-emerald-600 border-emerald-600 text-white"
                            : "bg-stone-900 border-stone-900 hover:bg-amber-600 hover:border-amber-600"
                        }`}
                      >
                        {isAddedSuccessfully ? (
                          <>
                            <Check className="w-4 h-4 text-white animate-pulse" />
                            Ajouté !
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-4 h-4 text-amber-300 stroke-[1.2]" />
                            Ajouter au Panier
                          </>
                        )}
                      </button>
                    </div>

                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

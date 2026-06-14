import { Product, Testimonial, TimelineEvent } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: "baklawa",
    name: "Baklawa Royale",
    localName: "البقلاوة الملكية",
    category: "traditional",
    description: "Finely layered handcrafted phyllo sheets with organic walnuts and almonds, bathed in lavender honey.",
    detailedDescription: "A masterpiece of traditional Algerian pastry. Made with 36 micro-thin layers of hand-stretched phyllo dough, brushed with pure smen (clarified butter), stuffed with a premium roasted blend of Mediterranean almonds and walnuts, and bathed in organic wild honey with orange blossom water. Trimmed with 24k gold leaf details.",
    ingredients: ["Premium Almonds", "English Walnuts", "Pure Artisanal Honey", "Orange Blossom Water", "Smen Butter", "Organic Wheat Flour"],
    pricePerPiece: 280, // in DZD (or relative luxury currency notation, we can convert easily)
    minOrderQuantity: 10,
    image: "/src/assets/images/baklawa_gold_close_up_1781397206427.jpg",
    badge: "Chef's Signature"
  },
  {
    id: "tcharek-msaker",
    name: "Tcharek Msaker",
    localName: "تشاراك المسكر",
    category: "traditional",
    description: "Delicate melt-in-the-mouth crescent-shaped almond cookies, double-dusted in white icing sugar.",
    detailedDescription: "Translated as 'powdered crescents', these delicate pastries feature soft, buttery almond dough shaped into elegant half-moons. Baked to soft perfection, then carefully soaked in precious orange blossom distillate before being dusted twice in fine white powdered sugar for a snowy, pristine finish.",
    ingredients: ["Finely Ground Almonds", "Orange Blossom Infusion", "Clarified Butter", "Powdered Sugar Accent", "Ceylon Cinnamon"],
    pricePerPiece: 220,
    minOrderQuantity: 12,
    image: "/src/assets/images/tcharek_msaker_powdered_1781397219555.jpg",
    badge: "Traditional Classic"
  },
  {
    id: "dziriette-knidlette",
    name: "Knidlettes d'Or",
    localName: "القنيدلات الذهبية",
    category: "traditional",
    description: "Exquisite hand-pinched pastry cups with orange-zest infused sweet almond filling and gold pearls.",
    detailedDescription: "These miniature lace pastries are a testament to visual storytelling and extreme manual precision. Hand-pinched with a wooden stick upwards of 40 times per piece, forming a delicate fluted cup. Filled with a lush, fragrant almond cream accented with organic Algerian lemon zest, baked until golden, and glazed in clear honey nectar.",
    ingredients: ["Sweet Almonds", "Fresh Citrus Zest", "Orange Blossom Nectar", "Silver & Gold Pearls", "Smen Butter"],
    pricePerPiece: 260,
    minOrderQuantity: 10,
    image: "/src/assets/images/knidlettes_dziriette_luxury_1781397233005.jpg",
    badge: "Bestseller"
  },
  {
    id: "makrout-louz",
    name: "Makrout El Louz",
    localName: "مقروط اللوز",
    category: "traditional",
    description: "Flourless almond diamonds with light lemon zest fragrance, coated in high-purity icing sugar.",
    detailedDescription: "Recipient of international accolades as one of the world's finest cookies. Entirely flourless, consisting of a melt-in-the-mouth, ultra-dense almond dough flavored with fresh organic lemon zest, baked lightly to preserve moisture, then sweetened in syrup and finished with dry sugar dusting.",
    ingredients: ["Blanched Sweet Almonds", "Organic Lemon Zest", "Powdered Sugar Coating", "Egg Whites", "Orange Blossom Syrup"],
    pricePerPiece: 240,
    minOrderQuantity: 10,
    image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=600&q=80",
    badge: "Award Winner"
  },
  {
    id: "mchewek",
    name: "M'chewek aux Amandes",
    localName: "المشوك باللوز",
    category: "traditional",
    description: "Crisp almond domes rolled in toasted slivered almonds, centered with a glossy candied cherry.",
    detailedDescription: "A glorious contrast of textures. A soft, honey-sweetened almond cookie core that is rolled in crispy, fragrant slivered almonds before baking. The high heat toasts the exterior almonds to deep copper, while keeping the inside perfectly soft, moist, and chewy. Crowned with a ruby candied cherry.",
    ingredients: ["Slivered Almonds", "Sweet Almond Paste", "Egg Whites", "Candied Cherries", "Wildflower Honey Syrup"],
    pricePerPiece: 230,
    minOrderQuantity: 12,
    image: "https://images.unsplash.com/photo-1548848221-0c2e497ed557?auto=format&fit=crop&w=600&q=80",
    badge: "Crunchy Texture"
  },
  {
    id: "tcharek-el-aryane",
    name: "Tcharek El Aryane",
    localName: "تشاراك العريان",
    category: "traditional",
    description: "Golden glazed almond crescent horns generously topped with caramelized slivered almonds.",
    detailedDescription: "The 'naked' crescent, highlighting the pure dough and almond skin. Stuffed with a cinnamon-perfumed almond paste and rolled tightly in fine dough. Brushed with free-range egg wash and covered in heaps of raw slivered almonds, which caramelize to a warm nuttiness during baking.",
    ingredients: ["Slivered Almonds", "Cinnamon", "Blanched Almond Paste", "Clarified Butter", "Glaze Butter"],
    pricePerPiece: 220,
    minOrderQuantity: 10,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "ghribia-pistache",
    name: "Ghribia Moderne au Pistache",
    localName: "غريبية الفستق",
    category: "modern",
    description: "Velvety traditional flour-butter cookies elevated with Sicilian pistachio cream and roasted crumbs.",
    detailedDescription: "A luxurious adaptation of the traditional Algerian sandy cookie (Ghribia). This modernized pastry has a melt-away texture achieved through slow-whipped clarified butter and flour, enriched with organic roasted pistachio paste and crushed premium green pistachios, crowned with a whole pistachio nut.",
    ingredients: ["Sicilian Pistachios", "Whipped Clarified Butter", "High-purity Flour", "Raw Sugar Dusting"],
    pricePerPiece: 250,
    minOrderQuantity: 10,
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=600&q=80",
    badge: "Modern Twist"
  },
  {
    id: "coeur-d-amande-fusion",
    name: "Sablé Cœur de Rose",
    localName: "سابليه قلب الورد",
    category: "modern",
    description: "Shortbread hearts sandwiching artisan rose-petal jam and dusted with fragrant freeze-dried berries.",
    detailedDescription: "A romantic modern sablé inspired by the sprawling gardens of Blida. Two layers of buttery melt-in-your-mouth shortbread enclosing a glossy artisanal preserve made from natural damask rose petals. Lightly dusted with white confectionery sugar and edible rose buds.",
    ingredients: ["Damask Rose Jam", "Butter Shortbread", "Vanilla Bean", "Edible Rose Petals", "Organic Flower Syrup"],
    pricePerPiece: 200,
    minOrderQuantity: 15,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "plateau-imperial",
    name: "Le Plateau Impérial",
    localName: "الصينية الإمبراطورية",
    category: "trays",
    description: "A prestigious curated silver tray featuring 48 pieces of Oum Mohamed's signature creations.",
    detailedDescription: "For your most high-profile celebrations. A heavily engraved silver-toned serving tray composed of 48 handmade cakes: 8x Baklawa, 8x Tcharek Msaker, 8x Knidlettes, 8x Makrout El Louz, 8x M'chewek, and 8x Sablé Rose. Packaged in custom velvet ribbons with decorative orange blossom extracts.",
    ingredients: ["Full Assortment of Grand Pastries", "Artisanal Gift Ribbon", "Luxury Gift Box Frame"],
    pricePerPiece: 11000,
    minOrderQuantity: 1,
    image: "/src/assets/images/traditional_algerian_cakes_hero_1781397194509.jpg",
    badge: "Royale Selection"
  },
  {
    id: "plateau-fiancee",
    name: "Plateau d'Honneur de la Fiancée",
    localName: "قسنطينة العروس",
    category: "trays",
    description: "A gold jewelry-like display of 30 selected sweet jewels, packed in silk linings for ceremonies.",
    detailedDescription: "A gorgeous array of 30 finest almond and walnut-laden pastries designed for marriage proposals (Khtoba) or engagement ceremonies. Arranged in circular geometric lines reflecting Algerian mosaic art, decorated with ivory ribbons, and accompanied by a custom card.",
    ingredients: ["Selected Almond Jewels", "Luxury Ceramic Dish", "Silk Ribbon Linings"],
    pricePerPiece: 7500,
    minOrderQuantity: 1,
    image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=600&q=80",
    badge: "Celebrations"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Myriam Belkacemi",
    role: "Bride",
    comment: "The Baklawa and Dziriettes we ordered for my wedding of 150 guests were the highlight of the night! Guests are still asking which chef crafted them. Absolute masterpieces of gold and honey.",
    rating: 5,
    cakeType: "Wedding Banquet Selection",
    date: "May 2026"
  },
  {
    id: "t2",
    name: "Yassine Mansour",
    role: "Corporate Coordinator",
    comment: "Punctuality, perfection, and pure ingredients. We ordered 'Le Plateau Impérial' for an executive VIP tea event and the presentation silenced the room. Outstanding level of luxury.",
    rating: 5,
    cakeType: "Le Plateau Impérial",
    date: "April 2026"
  },
  {
    id: "t3",
    name: "Nabila Merah",
    role: "Gourmet Connoisseur",
    comment: "Her Makrout El Louz absolutely melts the instant it touches your tongue. It has the perfect whisper of organic lemon zest, balanced and never excessively sweet. The best in the region.",
    rating: 5,
    cakeType: "Makrout El Louz",
    date: "June 2026"
  }
];

export const TIMELINE: TimelineEvent[] = [
  {
    year: "1994",
    title: "The Algiers Heritage",
    description: "Chef Oum Mohamed starts her culinary apprenticeship in the Kasbah of Algiers, learning traditional family recipes passed down across multiple generations."
  },
  {
    year: "2010",
    title: "Handcrafted Atelier",
    description: "Opening an exclusive, invite-only sweet atelier catering strictly to traditional family engagements, custom celebrations, and religious feasts (Eid al-Fitr)."
  },
  {
    year: "2018",
    title: "Modern Premium Expansion",
    description: "Blending modern geometric culinary arts and international pastry structures with authentic Algerian pure blanched sweet almonds and lavender honeys."
  },
  {
    year: "2026",
    title: "The Digital Boutique",
    description: "Providing direct premium deliveries of exquisite traditional trays via luxury custom boxes with full customization for local and international culinary enthusiasts."
  }
];

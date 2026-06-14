export interface Product {
  id: string;
  name: string;
  localName: string; // Arabic or traditional name
  category: "traditional" | "modern" | "trays";
  description: string;
  detailedDescription: string;
  ingredients: string[];
  pricePerPiece: number; // in DZD or relative EUR
  minOrderQuantity: number;
  image: string;
  badge?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  notes?: string;
  boxSize: "standard" | "royal" | "prestige";
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  cakeType: string;
  date: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

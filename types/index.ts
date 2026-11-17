export interface Product {
  id: string;
  name: string;
  slug: string;
  style: 'Biker' | 'Bomber' | 'Quilted' | 'Shearling' | 'Blazer' | 'Hooded' | 'Varsity' | 'Trench';
  finish: 'Semi-Aniline' | 'Matte Nappa' | 'Distressed Vintage' | 'Suede Velvet Touch' | 'Pull-Up Glow';
  leatherType: string;
  lining: string;
  hardware: string;
  closure: string;
  description: string;
  features: string[];
  originalPricePKR: number;
  salePricePKR: number;
  discountPercent: number;
  rating: number;
  reviewsCount: number;
  badge?: string;
  primaryImage: string;
  hoverImage: string;
  galleryImages: string[];
  sizes: ('XS' | 'S' | 'M' | 'L' | 'XL' | '2XL' | 'Custom Made')[];
  colors: { name: string; hex: string; class: string }[];
  isBestSeller?: boolean;
  isNewArrival?: boolean;
  estimatedDeliveryDays: string;
}

export interface CartItem {
  product: Product;
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}

export interface Review {
  id: string;
  author: string;
  city: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verifiedBuyer: boolean;
  productName: string;
  avatarBg: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  suggestedAction?: {
    type: 'filter' | 'view_product' | 'open_size_guide';
    payload?: string;
    label: string;
  };
}

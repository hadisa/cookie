import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  cartOpen: boolean;
  toggleCart: () => void;
  itemCount: number;
  cartTotal: number;
}

export interface CartProviderProps {
  children: ReactNode;
}

export interface Cookie {
  id: string;
  name: string;
  price: number;
  description: string;
  rating: number;
  reviewCount: number;
  website: string;
  websiteUrl: string;
  isBestseller?: boolean;
}

export type SortOption = "popularity" | "price-low" | "price-high" | "newest";
export type ViewMode = "grid" | "list";

export interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
  varieties: number;
  popularity: number;
  price: number;
  dateAdded: string;
  badge?: string;
  badgeColor?: string;
}

export interface Feature {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor?: string;
  bgColor?: string;
}

export interface WhyOrderFromUsProps {
  className?: string;
  features?: Feature[];
}

export interface FeatureCardProps {
  feature: Feature;
  index: number;
  variants?: any; // For framer-motion
  initial?: string;
  whileInView?: string;
  viewport?: any;
}


export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQSectionProps {
  className?: string;
  title?: string;
  description?: string;
  faqs?: FAQItem[];
  contactLink?: string;
}

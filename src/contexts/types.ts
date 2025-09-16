import { ReactNode } from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
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
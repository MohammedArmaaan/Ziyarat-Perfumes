import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { Product } from '@/data';

export interface CartItem { product: Product; qty: number; }

interface StoreState {
  cart: CartItem[];
  wishlist: string[];
  addToCart: (p: Product) => void;
  removeFromCart: (id: string) => void;
  toggleWishlist: (p: Product) => void;
  inWishlist: (id: string) => boolean;
  cartCount: number;
  cartOpen: boolean;
  setCartOpen: (v: boolean) => void;
}

const StoreCtx = createContext<StoreState | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = useCallback((p: Product) => {
    setCart((c) => {
      const ex = c.find((i) => i.product.id === p.id);
      if (ex) return c.map((i) => (i.product.id === p.id ? { ...i, qty: i.qty + 1 } : i));
      return [...c, { product: p, qty: 1 }];
    });
    setCartOpen(true);
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setCart((c) => c.filter((i) => i.product.id !== id));
  }, []);

  const toggleWishlist = useCallback((p: Product) => {
    setWishlist((w) => (w.includes(p.id) ? w.filter((x) => x !== p.id) : [...w, p.id]));
  }, []);

  const inWishlist = useCallback((id: string) => wishlist.includes(id), [wishlist]);

  const cartCount = cart.reduce((n, i) => n + i.qty, 0);

  return (
    <StoreCtx.Provider
      value={{ cart, wishlist, addToCart, removeFromCart, toggleWishlist, inWishlist, cartCount, cartOpen, setCartOpen }}
    >
      {children}
    </StoreCtx.Provider>
  );
}

export function useStore() {
  const ctx = useContext(StoreCtx);
  if (!ctx) throw new Error('useStore must be used within StoreProvider');
  return ctx;
}

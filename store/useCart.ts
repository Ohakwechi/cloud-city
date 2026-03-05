import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Product {
  id: number;
  name: string;
  price: number; // Changed to number for math
  image: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface CartStore {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product) => {
        const currentCart = get().cart;
        const existingItem = currentCart.find((item) => item.id === product.id);

        if (existingItem) {
          set({
            cart: currentCart.map((item) =>
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ),
          });
        } else {
          set({ cart: [...currentCart, { ...product, quantity: 1 }] });
        }
      },
      removeFromCart: (productId) => 
        set({ cart: get().cart.filter((item) => item.id !== productId) }),
      clearCart: () => set({ cart: [] }),
      totalItems: () => get().cart.reduce((acc, item) => acc + item.quantity, 0),
      totalPrice: () => get().cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
    }),
    { name: 'cart-storage' } // This saves the cart in LocalStorage automatically!
  )
);
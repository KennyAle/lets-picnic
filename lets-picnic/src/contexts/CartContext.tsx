import { createContext, useContext, useState, type ReactNode } from "react";
import type { Product } from "../types/product.types";

type CartContextType = {
  cartItems: Product[];
  addToCart: (
    item: Omit<Product, "quantity" | "description" | "category_name">
  ) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  total: number;
  cartQuantity: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const cartQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const addToCart = (
    item: Omit<Product, "quantity" | "description" | "category_name">
  ) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((p) => p.id === item.id);

      if (existingItem) {
        return prevItems.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        return [
          ...prevItems,
          {
            ...item,
            quantity: 1,
            description: "",
            category_name: "",
          },
        ];
      }
    });
    console.log(cartItems);
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => {
      const existingItem = prev.find((p) => p.id === id);

      if (!existingItem) return prev;

      if (existingItem.quantity > 1) {
        return prev.map((p) =>
          p.id === id ? { ...p, quantity: p.quantity - 1 } : p
        );
      }

      return prev.filter((item) => item.id !== id);
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        total,
        cartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

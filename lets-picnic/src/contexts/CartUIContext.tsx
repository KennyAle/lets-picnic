import React, {
  createContext,
  useContext,
  useRef,
  useEffect,
  useState,
  type ReactNode,
} from "react";

interface CartUIContextType {
  cartRef: React.RefObject<HTMLDivElement>;
  cartRect: DOMRect | null;
}

const CartUIContext = createContext<CartUIContextType | undefined>(undefined);

export const useCartUI = (): CartUIContextType => {
  const context = useContext(CartUIContext);
  if (!context) {
    throw new Error("useCartUI must be used within a CartUIProvider");
  }
  return context;
};

interface CartUIProviderProps {
  children: ReactNode;
}

export const CartUIProvider = ({ children }: CartUIProviderProps) => {
  const cartRef = useRef<HTMLDivElement>(null);
  const [cartRect, setCartRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    const updateRect = () => {
      if (cartRef.current) {
        setCartRect(cartRef.current.getBoundingClientRect());
      }
    };

    updateRect();
    window.addEventListener("resize", updateRect);

    return () => {
      window.removeEventListener("resize", updateRect);
    };
  }, []);

  return (
    <CartUIContext.Provider value={{ cartRef, cartRect }}>
      {children}
    </CartUIContext.Provider>
  );
};

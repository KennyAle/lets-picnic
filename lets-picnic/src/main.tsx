import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CartProvider } from "./contexts/CartContext.tsx";
import { CartUIProvider } from "./contexts/CartUIContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartUIProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </CartUIProvider>
  </StrictMode>
);

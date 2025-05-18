import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CartProvider } from "./contexts/CartContext.tsx";
import { CartUIProvider } from "./contexts/CartUIContext.tsx";
import { SessionProvider } from "./contexts/SessionContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SessionProvider>
      <CartUIProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </CartUIProvider>
    </SessionProvider>
  </StrictMode>
);

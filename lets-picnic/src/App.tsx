import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProductsList from "./pages/products/ProductsList";
import ProductDetails from "./pages/products/ProductDetails";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import ConfirmOrder from "./pages/ConfirmOrder";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <div className="z-1000">
        <Toaster position="bottom-right" />
      </div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="admin" element={<Admin />} />
            <Route path="order" element={<ConfirmOrder />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="products" element={<Layout />}>
            <Route index element={<ProductsList />} />
            <Route path="category/:categoryParam" element={<ProductsList isCategoryPage />} />
            <Route path="product/:id" element={<ProductDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProductsList from "./pages/products/ProductsList";
import ProductDetails from "./pages/products/ProductDetails";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Admin from "./pages/Admin";
import ConfirmOrder from "./pages/ConfirmOrder";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="admin" element={<Admin />} />
          <Route path="order" element={<ConfirmOrder />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="products" element={<Layout />}>
          <Route index element={<ProductsList />} />
          <Route path="category/:category" element={<ProductsList />} />
          <Route path="product/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

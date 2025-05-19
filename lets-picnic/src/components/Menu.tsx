import type { Category } from "@/types/category.types";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      const res = await fetch("http://localhost:3000/category");
      const data = await res.json();
      setCategories(data);
    };
    getCategories();
  }, []);
  return (
    <motion.div
      className="fixed h-[calc(100vh-68px)] overflow-hidden top-16 left-0 z-1000 flex flex-col w-1/5 bg-teal-950 overflow-y-auto no-scrollbar"
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.4 }}
    >
      <Link to="/" className="text-white font-bold text-xl p-4">
        Home
      </Link>
      <Link to="/products" className="text-white font-bold text-xl px-4 py-3">
        Products
      </Link>
      {categories.length > 0 ? (
        categories.map((category) => (
          <Link
            key={category.id}
            to={`/products/category/${category.id}-${category.category_name}`}
            className="text-gray-100/90 font-semibold text-sm pl-8 pb-3 hover:text-white capitalize"
          >
            {category.category_name}
          </Link>
        ))
      ) : (
        <p className="text-gray-100/90 font-semibold text-sm pl-8 pb-3">
          No categories found
        </p>
      )}
      <Link to="/" className="text-white font-bold text-xl px-4 py-3">
        About Us
      </Link>
      <Link
        to="/"
        className="text-gray-100/90 font-semibold text-sm pl-8 pb-3 hover:text-white"
      >
        About Let's Picnic
      </Link>
      <Link
        to="/"
        className="text-gray-100/90 font-semibold text-sm pl-8 pb-3 hover:text-white"
      >
        Carrers
      </Link>
      <Link
        to="/"
        className="text-gray-100/90 font-semibold text-sm pl-8 pb-3 hover:text-white"
      >
        News & Blog
      </Link>
      <Link to="/products" className="text-white font-bold text-xl px-4 py-3">
        Help
      </Link>
      <Link
        to="/"
        className="text-gray-100/90 font-semibold text-sm pl-8 pb-3 hover:text-white"
      >
        Shopcart Help
      </Link>
      <Link
        to="/"
        className="text-gray-100/90 font-semibold text-sm pl-8 pb-3 hover:text-white"
      >
        Returns
      </Link>
      <Link
        to="/"
        className="text-gray-100/90 font-semibold text-sm pl-8 pb-3 hover:text-white"
      >
        Track Order
      </Link>
      <Link
        to="/"
        className="text-gray-100/90 font-semibold text-sm pl-8 pb-3 hover:text-white"
      >
        Contact Us
      </Link>
    </motion.div>
  );
};

export default Menu;

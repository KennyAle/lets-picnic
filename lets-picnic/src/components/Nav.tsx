import { FaBars, FaShoppingCart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { TiFlash } from "react-icons/ti";
import Cart from "./Cart";
import { useCartUI } from "@/contexts/CartUIContext";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Menu from "./Menu";
import { useNavigate } from "react-router-dom";
import { IoPersonCircleOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import SearchResult from "./SearchResult";
import { type Product } from "../types/product.types";
import { useSession } from "@/contexts/SessionContext";
import toast from "react-hot-toast";
import { useCart } from "@/contexts/CartContext";

const Nav = () => {
  const { cartRef } = useCartUI();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useSession();
  const { cartQuantity } = useCart();

  const onHomePage = () => {
    navigate("/");
  };
  const onLoginPage = () => {
    navigate("/login");
  };

  const [search, setSearch] = useState("");
  const [searched, setSearched] = useState(false);
  const [searchResult, setSearchResult] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch(`http://localhost:3000/product`);
      const data = await res.json();
      setProducts(data);
    };
    getProducts();
  }, []);

  const handleSearch = () => {
    if (search) {
      const searchItems = products.filter((item) =>
        item.productName.toLowerCase().includes(search.toLocaleLowerCase())
      );
      setSearchResult(searchItems);
      setSearched(true);
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (search && e.key === "Enter") {
      handleSearch();
    }
  };
  const clearInput = () => {
    setSearch("");
    setSearchResult([]);
    setSearched(false);
  };

  const [isBouncing, setIsBouncing] = useState(false);

  useEffect(() => {
    if (cartQuantity > 0) {
      setIsBouncing(true);
      const timeout = setTimeout(() => {
        setIsBouncing(false);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [cartQuantity]);

  return (
    <>
      {/* Display search results */}
      {searched && (
        <SearchResult searched={searched} searchResult={searchResult} />
      )}

      {/* Menu animation */}
      <AnimatePresence>
        {isMenuOpen && <Menu />}
        {isMenuOpen && (
          <motion.div
            key="menu-overlay"
            className="fixed top-16 z-100  bg-black w-screen h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsMenuOpen(false)}
          ></motion.div>
        )}
      </AnimatePresence>

      {/* Cart animation */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <Cart key="cart" />
            <motion.div
              key="cart-overlay"
              className="fixed top-16 z-100  bg-black w-screen h-screen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsCartOpen(false)}
            />
          </>
        )}
      </AnimatePresence>

      <nav className="w-full flex justify-between fixed h-16 z-500 bg-teal-950 p-4 ">
        <div className="left-nav flex justify-around items-center gap-5">
          <FaBars
            className="text-white text-2xl hover:text-neutral-400 cursor-pointer"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          />
          <h3
            className="text-white flex justify-center items-center gap-1.5 cursor-pointer"
            onClick={onHomePage}
          >
            <img
              className="w-6 h-6"
              src="https://freepngimg.com/thumb/emoji/64969-emoticon-symbol-face-facebook-whatsapp-emoji.png"
              alt=""
            />
            Let's Picnic
          </h3>
          <div className="flex justify-center items-center bg-white rounded-3xl relative">
            <input
              className="bg-white rounded-3xl w-100 m-1 outline-none focus:ring-0 pl-4 px-2 py-1"
              type="text"
              placeholder="Search item..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            {search && (
              <RxCross2
                className="text-3xs bg-gray-400 text-white absolute right-11 z-10 rounded-sm cursor-pointer"
                onClick={clearInput}
              />
            )}

            <CiSearch
              className="bg-white rounded-3xl w-10 text-2xl absolute right-1 cursor-pointer"
              onClick={handleSearch}
            />
          </div>
        </div>
        <div className="flex justify-around items-center gap-3.5">
          <p className="flex items-center gap-1 text-white text-sm tracking-tight font-semibold">
            <TiFlash className="text-yellow-300" />
            Order now and get it within{" "}
            <span className="text-yellow-200">15 min!</span>
          </p>
          {user ? (
            <div
              className="flex justify-center items-center gap-1 cursor-pointer"
              onClick={async () => {
                try {
                  await logout();
                  toast.success("Log Out Successful");
                  navigate("/");
                } catch (error) {
                  toast.error("Logout failed");
                }
              }}
            >
              <IoPersonCircleOutline className="text-white text-2xl" />
              <p className="text-white text-xs font-bold">Log out</p>
            </div>
          ) : (
            <div
              className="flex flex-col justify-center items-center cursor-pointer"
              onClick={onLoginPage}
            >
              <p className="text-white text-xs font-bold">Log in</p>
              <p className="text-white text-xs font-bold">Sign Up</p>
            </div>
          )}
          <div
            ref={cartRef}
            className="relative flex justify-center items-center rounded-full bg-white w-9 h-9 hover:bg-neutral-400 cursor-pointer"
            onClick={() => setIsCartOpen((prev) => !prev)}
          >
            <FaShoppingCart className="w-full text-teal-800" />
            <motion.span
              animate={isBouncing ? { scale: [1, 1.1, 1], y: [0, -3, 0] } : {}}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex items-center justify-center bg-orange-500 h-4.5 w-4.5 font-semibold tracking-tight absolute -top-1 -right-1 rounded-full text-[11px] text-white"
            >
              {cartQuantity}
            </motion.span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;

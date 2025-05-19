import { useCart } from "../contexts/CartContext";
import ConfirmItem from "./ConfirmItem";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, total } = useCart();

  return (
    <motion.div
      className="fixed h-screen overflow-hidden top-16 right-0 z-1000 flex flex-col w-1/3 bg-white"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex flex-col gap-4 bg-white rounded-lg p-4 h-72">
        <h2 className="text-teal-800 font-bold text-xl">Review Items</h2>
        <div className="flex flex-col gap-3 text-teal-900 font-semibold no-scrollbar overflow-scroll">
          {cartItems.length > 0 ? (
            cartItems.map((product) => (
              <ConfirmItem
                key={product.id}
                id={product.id}
                image={product.image}
                productName={product.productName}
                price={product.price}
                quantity={product.quantity}
              />
            ))
          ) : (
            <p className="text-teal-800">Your cart is empty.</p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-white rounded-lg p-4">
        <h3 className="flex justify-between text-teal-800 font-bold text-lg">
          Total: <span className="text-teal-800 font-bold">${total}</span>
        </h3>
        <Link
          to="/order"
          className="w-full bg-lime-300 text-center text-teal-950 font-semibold p-4 rounded-full text-md"
        >
          Check Order
        </Link>
      </div>
    </motion.div>
  );
};

export default Cart;

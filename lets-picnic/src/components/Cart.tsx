import { useCart } from "../contexts/CartContext";
import ConfirmItem from "./ConfirmItem";

const Cart = () => {
  const { cartItems, total } = useCart();
  
  return (
    <div className="fixed h-screen overflow-hidden right-0 z-100 flex flex-col w-1/3 bg-white">
      <div className="flex flex-col gap-4 bg-white rounded-lg p-4 h-96">
        <h2 className="text-teal-800 font-bold text-xl">Review Items</h2>
        <div className="flex flex-col gap-3 text-teal-900 font-semibold no-scrollbar overflow-scroll">
          {cartItems.map((product) => (
            <ConfirmItem
              key={product.id}
              id={product.id}
              image={product.image}
              product_name={product.product_name}
              weight={12}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-white rounded-lg p-4">
        <h3 className="flex justify-between text-teal-800 font-bold text-lg">
          Total: <span className="text-teal-800 font-bold">${total}</span>
        </h3>
        <button className="w-full bg-lime-300 text-teal-950 font-semibold p-4 rounded-full text-md">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;

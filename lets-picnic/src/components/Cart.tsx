import products from "../assets/product.json";
import ConfirmItem from "./ConfirmItem";

const Cart = () => {
  return (
    <div className="fixed h-screen overflow-hidden right-0 z-100 flex flex-col w-1/3 bg-white">
      <div className="flex flex-col gap-4 bg-white rounded-lg p-4 h-96">
        <h2 className="text-teal-800 font-bold text-xl">Review Items</h2>
        <div className="flex flex-col gap-3 text-teal-900 font-semibold no-scrollbar overflow-scroll">
          {products.products.map((product) => (
            <ConfirmItem
              key={product.id}
              thumbnail={product.thumbnail}
              title={product.title}
              weight={product.weight}
              price={product.price}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-white rounded-lg p-4">
        <h3 className="flex justify-between text-teal-800 font-bold text-lg">
          Total: <span className="text-teal-800 font-bold">$42.65</span>
        </h3>
        <button className="w-full bg-lime-300 text-teal-950 font-semibold p-4 rounded-full text-md">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;

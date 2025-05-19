import { useCart } from "../contexts/CartContext";
import type { Product } from "../types/product.types";

const ConfirmItem = ({
  id,
  image,
  productName,
  price,
  quantity,
}: Omit<Product, "description" | "category_name" | "rating" | "sku" | "category">) => {
  const { addToCart, removeFromCart } = useCart();

  return (
    <div className="flex gap-5 items-center p-5 rounded-lg bg-gray-100 shadow-md">
      <img className="w-1/7" src={image} alt="" />
      <div className="flex flex-col">
        <h3 className="font-bold">{productName}</h3>
        <span className="pt-1 font-bold text-xl">${price}</span>
      </div>
      <div className="flex gap-3 ml-auto justify-center items-center">
        <button
          onClick={() => addToCart({ id, image, price, productName })}
          className="border-2 border-teal-900 rounded-full w-8 h-8 flex justify-center items-center text-md"
        >
          +
        </button>
        <span className="text-2xl">{quantity}</span>
        <button
          onClick={() => removeFromCart(id)}
          className="border-2 border-teal-900 rounded-full flex justify-center items-center w-8 h-8 text-md"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default ConfirmItem;

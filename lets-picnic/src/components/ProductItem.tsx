import { useCart } from "../contexts/CartContext";
import type { Product } from "../types/product.types";

const ProductItem = ({
  id,
  product_name,
  weight,
  image,
  price,
}: Omit<Product, "quantity" | "description" | "category_name">) => {
  const { addToCart, removeFromCart } = useCart();

  return (
    <div className="flex flex-col justify-center items-center p-4 rounded-lg bg-white">
      <img src={image} alt={product_name} />
      <h2 className="text-center text-green-900 font-semibold">{product_name}</h2>
      <p className="text-gray-400 font-semibold">{weight} gm</p>
      <p className="text-green-900 font-bold text-2xl">${price.toFixed(2)}</p>
      <button
        onClick={() => addToCart({ id, product_name, price, image })}
        className="flex justify-center items-center bg-lime-50 w-full text-4xl"
      >
        +
      </button>
    </div>
  );
};

export default ProductItem;

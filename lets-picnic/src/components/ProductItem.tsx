import { useCart } from "../contexts/CartContext";
import type { Product } from "../types/product.types";
import { useCartUI } from "../contexts/CartUIContext";
import { useRef } from "react";
import { Link } from "react-router-dom";

const ProductItem = ({
  id,
  productName,
  image,
  price,
}: Partial<Product>) => {
  const { addToCart } = useCart();
  const { cartRect } = useCartUI();
  const productRef = useRef<HTMLImageElement>(null);

  const handleAddToCart = async () => {
    if (!cartRect || !productRef.current) {
      addToCart({ id, productName, price, image });
      return;
    }

    const productRect = productRef.current.getBoundingClientRect();

    const deltaX =
      cartRect.left +
      cartRect.width / 2 -
      (productRect.left + productRect.width / 2);
    const deltaY =
      cartRect.top +
      cartRect.height / 2 -
      (productRect.top + productRect.height / 2);

    const clone = document.createElement("img");
    clone.src = image ?? "";
    clone.style.position = "fixed";
    clone.style.left = `${productRect.left}px`;
    clone.style.top = `${productRect.top}px`;
    clone.style.width = `${productRect.width}px`;
    clone.style.height = `${productRect.height}px`;
    clone.style.pointerEvents = "none";
    clone.style.zIndex = "1000";
    document.body.appendChild(clone);

    const animation = clone.animate(
      [
        { transform: "translate(0, 0) scale(1)", opacity: 1 },
        {
          transform: `translate(${deltaX * 0.5}px, ${deltaY - 0}px) scale(0.7)`,
          opacity: 0.8,
        },
        {
          transform: `translate(${deltaX}px, ${deltaY}px) scale(0.2)`,
        },
      ],
      {
        duration: 800,
        easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      }
    );

    animation.onfinish = () => {
      clone.remove();
      addToCart({ id, productName, price, image });
    };
  };

  if(!price){price = 0.00}

  return (
    <div className="round-shape-item flex flex-col justify-center items-center p-2.5 rounded-2xl bg-white shadow-sm/5">
      <Link to={`/products/product/${id}`} className="w-full p-2 h-36 flex justify-center items-center">
        <img
          ref={productRef}
          src={image}
          alt={productName}
          className="w-full h-full object-cover"
        />
      </Link>
      <Link to={`/products/product/${id}`} className="text-center tracking-tight text-lg text-teal-900 font-bold mt-2 hover:underline cursor-pointer">
        {productName}
      </Link>
      <h3 className="font-semibold text-sm text-gray-500 tracking-tight">
        Groceries
      </h3>
      <p className="flex text-teal-900 font-bold text-3xl">
        {price < 10 ? `0${Math.floor(price)}` : Math.floor(price)}.
        <span className="flex items-center text-base tracking-tight font-bold self-start">
          {Number(price).toFixed(2).split(".")[1]}$
        </span>
      </p>
      <div className="h-15 round-shape-btn flex justify-center items-center bg-lime-100/50 mt-2 w-full text-4xl">
        <button
          className="w-full h-full cursor-pointer"
          onClick={handleAddToCart}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ProductItem;

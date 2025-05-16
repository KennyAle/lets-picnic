import { motion, useAnimation } from "motion/react";
import { useCart } from "../contexts/CartContext";
import type { Product } from "../types/product.types";
import { useCartUI } from "../contexts/UIContext";
import { useRef } from "react";

const ProductItem = ({
  id,
  product_name,
  weight,
  image,
  price,
}: Omit<Product, "quantity" | "description" | "category_name">) => {
  const { addToCart } = useCart();
  const controls = useAnimation();
  const { cartRect } = useCartUI();
  const productRef = useRef<HTMLImageElement>(null);

  const handleAddToCart = async () => {
    if (!cartRect || !productRef.current) {
      addToCart({ id, product_name, price, image });
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
    clone.src = image;
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
          transform: `translate(${deltaX * 0.5}px, ${
            deltaY - 20
          }px) scale(0.7)`,
          opacity: 0.8,
        },
        {
          transform: `translate(${deltaX}px, ${deltaY}px) scale(0.2)`,
          opacity: 0,
        },
      ],
      {
        duration: 800,
        easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      }
    );

    animation.onfinish = () => {
      clone.remove();
      addToCart({ id, product_name, price, image });
    };
  };

  return (
    <div className="flex flex-col justify-center items-center p-4 rounded-lg bg-white">
      <img ref={productRef} src={image} alt={product_name} />
      <h2 className="text-center text-green-900 font-semibold">
        {product_name}
      </h2>
      <p className="text-gray-400 font-semibold">{weight} gm</p>
      <p className="text-green-900 font-bold text-2xl">${price.toFixed(2)}</p>
      <button
        onClick={handleAddToCart}
        className="flex justify-center items-center bg-lime-50 w-full text-4xl"
      >
        +
      </button>
    </div>
  );
};

export default ProductItem;

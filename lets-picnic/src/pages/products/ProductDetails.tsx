import Timer from "@/components/Timer";
import type { Product } from "@/types/product.types";
import { useEffect, useRef, useState } from "react";
import { FaCheck, FaRegHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "@/contexts/CartContext";
import { useCartUI } from "@/contexts/CartUIContext";

interface productWrapper {
  product: Product;
}

const ProductDetails = () => {
  const [product, setProduct] = useState<productWrapper>();
  const { addToCart } = useCart();
  const { cartRect } = useCartUI();
  const productRef = useRef<HTMLImageElement>(null);
  const { id } = useParams();
  useEffect(() => {
    const getProduct = async () => {
      try {
        let url = `http://localhost:3000/product/${id}`;

        if (!id) {
          const res = await fetch("http://localhost:3000/product");
          const products = await res.json();

          const firstProductWithRating = products.find(
            (productWrapper: productWrapper) => productWrapper.product.rating
          );

          if (firstProductWithRating) {
            url = `http://localhost:3000/product/${firstProductWithRating.product.id}`;
          }
        }

        const res = await fetch(url);
        const data = await res.json();
        setProduct(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    getProduct();
  }, [id]);

  const handleAddToCart = () => {
  if (!cartRect || !productRef.current) {
    if (product) {
      addToCart(product.product);
    }
    return;
  }

  const productRect = productRef.current.getBoundingClientRect();

  const scaleFactor = 0.5;
  const initialWidth = productRect.width * scaleFactor;
  const initialHeight = productRect.height * scaleFactor;

  const deltaX =
    cartRect.left +
    cartRect.width / 2 -
    (productRect.left + initialWidth / 2);
  const deltaY =
    cartRect.top +
    cartRect.height / 2 -
    (productRect.top + initialHeight / 2);

  const clone = document.createElement("img");
  clone.src = productRef.current.src;
  clone.style.position = "fixed";
  clone.style.left = `${productRect.left}px`;
  clone.style.top = `${productRect.top}px`;
  clone.style.width = `${initialWidth}px`;
  clone.style.height = `${initialHeight}px`;
  clone.style.pointerEvents = "none";
  clone.style.zIndex = "1000";
  document.body.appendChild(clone);

  const animation = clone.animate(
    [
      { transform: "scale(1)", opacity: 1 },
      {
        transform: `translate(${deltaX * 0.5}px, ${deltaY * 0.5}px) scale(0.7)`,
        opacity: 0.8,
      },
      {
        transform: `translate(${deltaX}px, ${deltaY}px) scale(0.2)`,
        opacity: 0.5,
      },
    ],
    {
      duration: 800,
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
    }
  );

  animation.onfinish = () => {
    clone.remove();
    if (product) {
      addToCart(product.product);
    }
  };
};


  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.4,
        },
      }}
      className="grid grid-cols-2 gap-10 rounded-3xl bg-white p-10 w-full relative"
    >
      {product?.product.rating ? (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.3,
              delay: 0.05,
            },
          }}
          viewport={{
            once: true,
          }}
          className="leading-none absolute top-5 left-5 bg-sky-900 text-blue-100 rounded-full w-25 h-25 flex flex-col items-center justify-center"
        >
          <p className="leading-none text-4xl font-semibold">
            {product?.product.rating}
            <span className="text-xl pl-0.5">%</span>
          </p>
          <p className="opacity-80 leading-none uppercase pb-2 text-sm">
            Discount
          </p>
        </motion.div>
      ) : (
        ""
      )}
      <div className="w-full bg-gray-100 rounded-3xl">
        <img ref={productRef} src={product?.product.image} alt="" />
      </div>
      <div className="w-full flex flex-col gap-5">
        <div className="flex flex-col gap-0.5">
          <Timer />
          {/* <h3 className="text-gray-500 text-sm font-semibold">Brand</h3> */}
          <div className="flex flex-col gap-2">
            <Link
              to={`/products/product/${product?.product.id}`}
              className="text-2xl text-green-900 tracking-tight font-bold hover:underline"
            >
              {product?.product.productName}
            </Link>
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-300" />
              <p className="text-green-900 font-bold text-base tracking-tight">
                {product?.product.rating} Rating
              </p>
              <p className="text-gray-400 font-semibold underline tracking-tight">
                (15 reviews)
              </p>
            </div>
            <div className="flex text-teal-900 font-bold text-3xl">
              {product?.product?.price !== undefined ? (
                <p className="flex tracking-tighter">
                  {product.product.price < 10
                    ? `0${Math.floor(product.product.price)}`
                    : Math.floor(product.product.price)}
                  .
                  <span className="flex items-center text-base tracking-tight font-bold self-start">
                    {Number(product.product.price).toFixed(2).split(".")[1]}$
                  </span>
                </p>
              ) : (
                <span>Loading...</span>
              )}
            </div>
          </div>
          <div className="flex gap-2 mt-3">
            <button
              onClick={handleAddToCart}
              className="flex gap-2 justify-center items-center bg-gray-200 text-teal-900 font-semibold text-sm py-2 px-6 rounded-4xl tracking-tight cursor-pointer"
            >
              <FaShoppingCart className="text-teal-900" />
              Add to cart
            </button>
            <button className="flex gap-1 justify-center items-center bg-lime-300 text-teal-950 font-semibold text-sm py-2 px-6 rounded-4xl tracking-tight cursor-pointer">
              <MdOutlineShoppingCartCheckout />
              Buy now
            </button>
          </div>
          <div className="flex flex-col gap-3 mt-5 text-teal-900 font-semibold text-md">
            <p className="text-gray-500 font-semibold">
              {product?.product.description}
            </p>
            <ul className="flex gap-1 text-gray-500 font-semibold">
              <li>Categories:</li>
              <li className="underline capitalize">
                {product?.product.category.categoryName},
              </li>
              <li className="underline">
                {product?.product.category.categoryDescription}
              </li>
            </ul>
            <p className="text-gray-500 font-semibold">
              SKU: {product?.product.sku}
            </p>
            <div className="flex items-center gap-1 underline">
              <FaRegHeart />
              <p>ADD TO WISHLIST</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="flex gap-2 text-teal-800 font-bold">
            <FaCheck />
            In stock
          </span>
          <span className="flex gap-2 text-teal-800 font-bold">
            <FaCheck />
            Ships in 3-5 business days
          </span>
          <span className="flex items-center gap-2 text-teal-800 font-bold">
            <FaCheck />1 week warranty
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetails;

import { useEffect, useState } from "react";
import type { Product } from "../../types/product.types";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ProductItem from "@/components/ProductItem";
const API_URL = import.meta.env.VITE_API_URL;

type ProductWrapper = {
  product: Product;
};

type ProductsListProps = {
  section?: "you-might-need" | "weekly-best" | "most-selling" | "just-for-you";
  isCategoryPage?: boolean;
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.04 * index,
    },
  }),
};

const ProductsList = ({ section, isCategoryPage }: ProductsListProps) => {
  const [products, setProducts] = useState<ProductWrapper[]>([]);
  const [forceShow, setForceShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const { categoryParam } = useParams<{ categoryParam: string }>();

  const categoryId = categoryParam?.split("-")[0];
  const categoryName = categoryParam?.split("-")[1];

  useEffect(() => {
    if (isCategoryPage) {
      const timeout = setTimeout(() => {
        setForceShow(true);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [isCategoryPage]);

  const getProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/product`);
      const data = await res.json();
      setTimeout(() => {
        setProducts(data);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  const getProductsByCategory = async (category: string) => {
    setLoading(true);
    try {
      const res = await fetch(
        `${API_URL}/product/category/${category}`
      );
      const data = await res.json();
      setTimeout(() => {
        setProducts(data);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error fetching products by category:", error);
      setLoading(false);
    }
  };

  // ----------> [START] This code is only to get placehold information <----------------
  useEffect(() => {
    if (section) {
      switch (section) {
        case "you-might-need":
          getProductsByCategory("4");
          break;
        case "weekly-best":
          getProductsByCategory("4");
          break;
        case "most-selling":
          getProductsByCategory("2");
          break;
        case "just-for-you":
          getProductsByCategory("1");
          break;
        default:
          getProducts();
          break;
      }
    } else if (!categoryParam || categoryParam === "all") {
      getProducts();
    } else {
      getProductsByCategory(categoryId!);
    }
  }, [categoryParam, section]);

  const renderTitle = () => {
    switch (section) {
      case "you-might-need":
        return "You might need";
      case "weekly-best":
        return "Weekly best selling items";
      case "most-selling":
        return "Most selling products";
      case "just-for-you":
        return "Just for you";
      default:
        return `${
          !categoryName
            ? "Products"
            : `${categoryName[0].toUpperCase() + categoryName.slice(1)}`
        }`;
    }
  };
  // ----------> [END] This code is only to get placehold information <----------------

  const containerStyles = isCategoryPage ? "p-8 rounded-lg shadow-lg" : "mb-8";
  const productLimit =
    section === "most-selling" || section === "just-for-you" ? 5 : 10;

  const skeletonArray = Array.from({ length: productLimit }, (_, i) => i);

  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      {...(forceShow
        ? { animate: "animate" }
        : { whileInView: "animate", viewport: { once: true } })}
      className={containerStyles}
    >
      <h2 className="text-3xl normal-case font-bold tracking-tight mb-4 text-teal-900">
        {renderTitle()}
      </h2>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
        {loading
          ? skeletonArray.map((_, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center p-4 rounded-lg bg-white shadow-lg/5"
              >
                <div className="w-full h-48 bg-gray-100 dark:bg-gray-500 rounded-lg mb-2"></div>
                <div className="w-3/4 h-6 bg-gray-100 dark:bg-gray-500 rounded mb-2"></div>
                <div className="w-1/2 h-6 bg-gray-100 dark:bg-gray-500 rounded"></div>
                <div className="mt-2 w-full h-10 bg-gray-100 dark:bg-gray-500 rounded"></div>
              </div>
            ))
          : products.map(({ product }, index) => (
              <motion.div
                key={product.id}
                variants={fadeInAnimationVariants}
                initial="initial"
                {...(forceShow
                  ? { animate: "animate" }
                  : { whileInView: "animate", viewport: { once: true } })}
                custom={index}
              >
                <ProductItem
                  key={product.id}
                  id={product.id}
                  productName={product.productName}
                  image={product.image}
                  price={product.price}
                />
              </motion.div>
            ))}
      </div>
    </motion.div>
  );
};

export default ProductsList;

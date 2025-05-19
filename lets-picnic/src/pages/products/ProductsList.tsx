import { useEffect, useState } from "react";
import ProductItem from "../../components/ProductItem";
import type { Product } from "../../types/product.types";
import { useParams } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";

type ProductWrapper = {
  product: Product;
};

type ProductsListProps = {
  section?: "you-might-need" | "weekly-best" | "most-selling" | "just-for-you";
  isCategoryPage?: boolean;
};

const ProductsList = ({ section, isCategoryPage }: ProductsListProps) => {
  const [products, setProducts] = useState<ProductWrapper[]>([]);
  const [loading, setLoading] = useState(true);
  const { categoryParam } = useParams<{ categoryParam: string }>();

  const categoryId = categoryParam?.split("-")[0];
  const categoryName = categoryParam?.split("-")[1];
  const isHome = !categoryParam;

  const getProducts = async () => {
    try {
      const res = await fetch("http://localhost:3000/product");
      const data = await res.json();
      setTimeout(() => {
        setProducts(data);
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  const getProductsByCategory = async (category: string) => {
    try {
      const res = await fetch(
        `http://localhost:3000/product/category/${category}`
      );
      const data = await res.json();
      setTimeout(() => {
        setProducts(data);
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.error("Error fetching products by category:", error);
      setLoading(false);
    }
  };

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

  const containerStyles = isCategoryPage ? "p-8 rounded-lg shadow-lg" : "mb-8";
  const productLimit =
    section === "most-selling" || section === "just-for-you" ? 5 : 10;

  const skeletonArray = Array.from({ length: productLimit }, (_, i) => i);

  return (
    <div className={containerStyles}>
      <h2 className="text-3xl normal-case font-bold tracking-tight mb-4 text-teal-900">
        {renderTitle()}
      </h2>

      <div className="grid grid-cols-5 gap-3">
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
          : products.map(({ product }) => (
              <ProductItem
                key={product.id}
                id={product.id}
                productName={product.productName}
                image={product.image}
                price={product.price}
              />
            ))}
      </div>
    </div>
  );
};

export default ProductsList;

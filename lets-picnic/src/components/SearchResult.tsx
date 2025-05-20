import { Link } from "react-router-dom";
import { type Product } from "../types/product.types";
import { motion } from "framer-motion";

type ProductWrapper = {
  product: Product;
};

export interface ISearchResult {
  searched: boolean;
  searchResult: ProductWrapper[];
}

const SearchResult = ({ searched, searchResult }: ISearchResult) => {
  return (
    <motion.div
      className="flex flex-wrap fixed p-5 gap-6 overflow-auto bg-gray-200 top-16 z-100 w-full h-2/3 shadow-md"
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 10,
        duration: 0.2,
      }}
    >
      {searched &&
        (searchResult.length > 0 ? (
          searchResult.map((item) => (
            <Link to={`/products/product/${item.product.id}`}
              key={item.product.id}
              className="w-40 bg-white flex flex-col justify-center items-center p-4 rounded-lg"
            >
              <img
                src={item.product.image}
                alt={item.product.productName}
                className="w-40"
              />
              <h2 className="text-center text-green-900 font-semibold">
                {item.product.productName}
              </h2>
            </Link>
          ))
        ) : (
          <div className="flex w-screen justify-center items-center">
            <img src="images/img_sorry.png" alt="" />
          </div>
        ))}
    </motion.div>
  );
};

export default SearchResult;

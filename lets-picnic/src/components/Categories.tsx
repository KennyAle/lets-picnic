import CategoryItem from "./CategoryItem";
import type { Category } from "../types/category.types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
const API_URL = import.meta.env.VITE_API_URL;

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    const getCategories = async () => {
      const res = await fetch(`${API_URL}/category`);
      const data = await res.json();
      setCategories(data);
    };
    getCategories();
  }, []);
  return (
    <div className="flex overflow-x-auto gap-5 sm:gap-5 sm:overflow-visible">
      {categories.map((category, index) =>
        index < 5 ? (
          <Link
            key={category.id}
            to={`/products/category/${category.id}-${category.category_name}`}
            className="min-w-[220px] flex flex-col relative gap-1 rounded-lg bg-white p-3 shrink-0"
          >
            <CategoryItem
              name={category.category_name}
              description={category.description}
              image={category.image}
            />
          </Link>
        ) : null
      )}
      <Link
        to={`/products/category/all`}
        className="min-w-[150px] flex flex-col items-center justify-center gap-1 rounded-l-lg bg-lime-300 p-4 shadow-md shrink-0"
      >
        <FaArrowRight className="bg-white w-8.5 h-8.5 p-2.5 rounded-full" />
        <h3 className="text-nowrap text-md text-teal-950 font-bold">See all</h3>
      </Link>
    </div>
  );
};

export default Categories;

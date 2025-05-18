import CategoryItem from "./CategoryItem";
import type { Category } from "../types/category.types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    const getCategories = async () => {
      const res = await fetch("http://localhost:3000/category");
      const data = await res.json();
      console.log(data);

      setCategories(data);
    };
    getCategories();
  }, []);
  return (
    <div className="flex gap-5">
      {categories.map((category, index) =>
        index < 5 ? (
          <Link
            key={category.id}
            to={`/products/category/${category.category_name}`}
            className="flex w-full flex-col relative gap-1 rounded-lg bg-white p-3"
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
        className="flex flex-col items-center justify-center gap-1 rounded-l-lg bg-lime-300 p-4 shadow-md"
      >
        <FaArrowRight className="bg-white w-8.5 h-8.5 p-2.5 rounded-full" />
        <h3 className="text-nowrap text-md text-teal-950 font-bold">See all</h3>
      </Link>
    </div>
  );
};

export default Categories;

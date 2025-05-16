import CategoryItem from "./CategoryItem";
import type { Category } from "../types/category.types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    const getCategories = async () => {
      const res = await fetch("http://localhost:3000/category");
      const data = await res.json();
      setCategories(data);
      console.log(data);
    };
    getCategories();
  }, []);
  return (
    <div className="flex gap-5">
      {categories.map((category, index) =>
        index < 5 ? (
          <Link to={`/products/category/${category.category_name}`} className="flex w-full flex-col relative gap-1 rounded-lg bg-white p-3">
            <CategoryItem
              key={category.id}
              name={category.category_name}
              // slug={category.slug}
            />
          </Link>
        ) : null
      )}
      <Link to={`/products/category/all`} className="flex flex-col items-center justify-center gap-2 rounded-lg bg-white p-4 shadow-md">
        <img src="https://placehold.co/40x40" alt="Category" />
        <h3 className="text-nowrap">See all</h3>
      </Link>
    </div>
  );
};

export default Categories;

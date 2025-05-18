import { useEffect, useState } from "react";
import ProductItem from "../../components/ProductItem";
import type { Product } from "../../types/product.types";

const ProductsList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("http://localhost:3000/product");
      const data = await res.json();
      setProducts(data);
      // console.log(data);
    };
    getProducts();
  }, []);
  return (
    <div className="grid grid-cols-5 gap-3">
      {products.slice(0, 10).map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          product_name={product.product_name}
          weight={12}
          image={product.image}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductsList;

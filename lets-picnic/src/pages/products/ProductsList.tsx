import { useEffect, useState } from "react";
import ProductItem from "../../components/ProductItem";
import type { Product } from "../../types/product.types";

type ProductWrapper = {
  product: Product;
};

const ProductsList = () => {
  const [products, setProducts] = useState<ProductWrapper[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("http://localhost:3000/product");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p>Cargando productos...</p>
      </div>
    );
  }

  if (products.length === 0) {
    return <p>No hay productos disponibles.</p>;
  }

  return (
    <div className="grid grid-cols-5 gap-3">
      {products.slice(0, 10).map((product) => (
        <ProductItem
          key={product.product.id}
          id={product.product.id}
          productName={product.product.productName}
          weight={12}
          image={product.product.image}
          price={product.product.price}
        />
      ))}
    </div>
  );
};

export default ProductsList;

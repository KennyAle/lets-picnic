import products from "../assets/product.json";
import ProductItem from "./ProductItem";
const ProductsList = () => {
  return (
    <div className="grid grid-cols-5 gap-3">
      <ProductItem
        name={products.products[0].title}
        weight={products.products[0].weight}
        imageUrl={products.products[0].thumbnail}
        price={products.products[0].price}
      />
      <ProductItem
        name={products.products[0].title}
        weight={products.products[0].weight}
        imageUrl={products.products[0].thumbnail}
        price={products.products[0].price}
      />
      <ProductItem
        name={products.products[0].title}
        weight={products.products[0].weight}
        imageUrl={products.products[0].thumbnail}
        price={products.products[0].price}
      />
      <ProductItem
        name={products.products[0].title}
        weight={products.products[0].weight}
        imageUrl={products.products[0].thumbnail}
        price={products.products[0].price}
      />
      <ProductItem
        name={products.products[0].title}
        weight={products.products[0].weight}
        imageUrl={products.products[0].thumbnail}
        price={products.products[0].price}
      />
      <ProductItem
        name={products.products[0].title}
        weight={products.products[0].weight}
        imageUrl={products.products[0].thumbnail}
        price={products.products[0].price}
      />
      <ProductItem
        name={products.products[0].title}
        weight={products.products[0].weight}
        imageUrl={products.products[0].thumbnail}
        price={products.products[0].price}
      />
      <ProductItem
        name={products.products[0].title}
        weight={products.products[0].weight}
        imageUrl={products.products[0].thumbnail}
        price={products.products[0].price}
      />
      <ProductItem
        name={products.products[0].title}
        weight={products.products[0].weight}
        imageUrl={products.products[0].thumbnail}
        price={products.products[0].price}
      />
    </div>
  );
};

export default ProductsList;

import Banner from "../components/Banner";
import Categories from "../components/Categories";
import ConfirmOrder from "./ConfirmOrder";
import Experience from "../components/Experience";
import ProductsList from "./products/ProductsList";
import DeliverAndMembership from "../components/DeliverAndMembership";
import DiscountAndPromot from "../components/DiscountAndPromot";
import AppDownload from "../components/AppDownload";
import ProductDetails from "./products/ProductDetails";
// import Cart from "./components/Cart";

function Home() {
  return (
    <>
      <Banner />
      <div className="flex flex-col bg-gray-100 gap-15 px-20">
        <Categories />
        <ProductsList />
        <ProductDetails />
        <DiscountAndPromot />
        <ProductsList />
        <DeliverAndMembership />
        <ProductsList />
        <AppDownload />
      </div>
      <Experience />
    </>
  );
}

export default Home;

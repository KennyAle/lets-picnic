import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Experience from "../components/Experience";
import ProductsList from "./products/ProductsList";
import DeliverAndMembership from "../components/DeliverAndMembership";
import DiscountAndPromot from "../components/DiscountAndPromot";
import AppDownload from "../components/AppDownload";
import ProductDetails from "./products/ProductDetails";
import Confirmed from "@/components/Confirmed";

function Home() {
  return (
    <>
      <Confirmed />
      <Banner />
      <div className="flex flex-col bg-gray-100 gap-15 px-4 md:px-20">
        <Categories />
        <ProductsList section="you-might-need" />
        <ProductDetails />
        <DiscountAndPromot />
        <ProductsList section="weekly-best" />
        <DeliverAndMembership />
        <ProductsList section="most-selling" />
        <AppDownload />
        <ProductsList section="just-for-you" />
      </div>
      <Experience />
    </>
  );
}

export default Home;

import Banner from "./components/Banner";
import Categories from "./components/Categories";
import ConfirmOrder from "./components/ConfirmOrder";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import ProductsList from "./components/ProductsList";
import DeliverAndMembership from "./components/DeliverAndMembership";
import DiscountAndPromot from "./components/DiscountAndPromot";
import Nav from "./components/Nav";
import AppDownload from "./components/AppDownload";
import ProductDetails from "./components/ProductDetails";
// import Cart from "./components/Cart";

function App() {
  return (
    <>
      {/* <Cart /> */}
      <header>
        <Nav />
      </header>
      <Banner />
      <main className="flex flex-col bg-gray-100 gap-15 px-20">
        <Categories />
        <ProductsList />
        <ProductDetails />
        <DiscountAndPromot />
        <ProductsList />
        <AppDownload />
        <ProductsList />
        <DeliverAndMembership />
        <ConfirmOrder />
      </main>
      <footer>
        <Experience />
        <Footer />
      </footer>
    </>
  );
}

export default App;

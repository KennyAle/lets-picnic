import Categories from "./components/Categories";
import ConfirmOrder from "./components/ConfirmOrder";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import ProductsList from "./components/ProductsList";

function App() {
  return (
    <main className="bg-gray-100">
      <ConfirmOrder />
      <Categories />
      <ProductsList />
      <Experience />
      <Footer />
    </main>
  );
}

export default App;

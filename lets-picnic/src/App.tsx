import Categories from "./components/Categories";
import Experience from "./components/Experience";
import ProductsList from "./components/ProductsList";

function App() {
  return (
    <main className="bg-gray-100">
      <Experience />
      <Categories />
      <ProductsList />
    </main>
  );
}

export default App;

import Banner from "./components/Banner";
import Categories from "./components/Categories";
import DeliverAndMembership from "./components/DeliverAndMembership";
import DiscountAndPromot from "./components/DiscountAndPromot";
import Nav from "./components/Nav";

function App() {
  return (
    <main className="bg-gray-100">
      <Nav />
      <Banner />
      <Categories />
      <DiscountAndPromot />
      <DeliverAndMembership />
    </main>
  );
}

export default App;

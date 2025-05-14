import Banner from "./components/Banner";
import Categories from "./components/Categories";
import DeliverAndMembership from "./components/DeliverAndMembership";
import Nav from "./components/Nav";

function App() {
  return (
    <main className="bg-gray-100">
      <Nav />
      <Banner />
      <Categories />
      <DeliverAndMembership />
    </main>
  );
}

export default App;

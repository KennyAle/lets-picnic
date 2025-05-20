import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="max-w-full bg-gray-100">
      <header>
        <Nav />
      </header>
      <main className="pt-16 bg-gray-100">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;

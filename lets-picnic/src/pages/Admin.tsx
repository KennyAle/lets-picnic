import { ProductsTable } from "@/components/ProductsTable";
import { useSession } from "@/contexts/SessionContext";
import NotFound from "./NotFound";

const Admin = () => {
  const { user } = useSession();

  if (!user || user.role !== "admin") return <NotFound />;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Admin Dashboard</h1>
      <ProductsTable />
    </div>
  );
};

export default Admin;

import { ProductsTable } from "@/components/ProductsTable";

const Admin = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Admin Dashboard</h1>
      <ProductsTable />
    </div>
  );
};

export default Admin;

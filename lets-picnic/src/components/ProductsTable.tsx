"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { type Product } from "@/types/product.types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";

type ProductWrapper = {
  product: Product;
};

type FormData = {
  productName: string;
  categoryId: number;
  price: number;
  image: string;
  description: string;
  discountPercentage: number;
  rating: number;
  sku: string;
};

export function ProductsTable() {
  const [products, setProducts] = useState<ProductWrapper[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { register, handleSubmit, reset } = useForm<FormData>();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("http://localhost:3000/product");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  const openModal = () => {
    reset();
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const onSubmit = async (data: FormData) => {
    const payload = {
      ...data,
      discountPercentage: data.discountPercentage ?? 0,
    };

    console.log("Submitting data:", payload);

    try {
      const response = await fetch("http://localhost:3000/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Error adding product");

      const updated = await response.json();
      setProducts((prev) => [...prev, { product: updated }]); 

      closeModal();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="w-full overflow-x-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <input
          placeholder="Search product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-1/2 border rounded px-2 py-1"
        />
        <Button onClick={openModal}>Add Product</Button>
      </div>

      <table className="min-w-full bg-white">
        <thead>
          <tr className="w-full border-b">
            <th className="px-6 py-4 text-left">ID</th>
            <th className="px-6 py-4 text-left">Image</th>
            <th className="px-6 py-4 text-left">Name</th>
            <th className="px-6 py-4 text-left">Price</th>
            <th className="px-6 py-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(({ product }) => (
            <tr key={product.id} className="border-b">
              <td className="px-6 py-4">{product.id}</td>
              <td className="px-6 py-4">
                <img
                  src={product.image}
                  alt={product.productName}
                  className="w-12 h-12 object-cover rounded"
                />
              </td>
              <td className="px-6 py-4">{product.productName}</td>
              <td className="px-6 py-4">${product.price}</td>
              <td className="px-6 py-4 space-x-2">
                <Button variant="outline" disabled>
                  Edit
                </Button>
                <Button variant="destructive" disabled>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-sm mx-auto mt-10 max-h-[80vh] overflow-auto rounded-lg">
          <DialogHeader>
            <DialogTitle>Add Product</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="productName" className="block mb-1 font-medium">
                Product Name
              </label>
              <Input
                id="productName"
                {...register("productName", { required: true })}
                placeholder="Product Name"
                required
              />
            </div>

            <div>
              <label htmlFor="categoryId" className="block mb-1 font-medium">
                Category ID
              </label>
              <Input
                id="categoryId"
                {...register("categoryId", {
                  valueAsNumber: true,
                  required: true,
                })}
                placeholder="Category ID"
                type="number"
                min={1}
                required
              />
            </div>
            <div>
              <label htmlFor="rating" className="block mb-1 font-medium">
                Rating
              </label>
              <Input
                id="rating"
                {...register("rating", {
                  valueAsNumber: true,
                  required: true,
                })}
                placeholder="Rating"
                type="number"
                step="0.1"
                min={0}
                max={5}
                required
              />
            </div>

            <div>
              <label htmlFor="price" className="block mb-1 font-medium">
                Price
              </label>
              <Input
                id="price"
                {...register("price", { valueAsNumber: true, required: true })}
                placeholder="Price"
                type="number"
                step="0.01"
                min={0}
                required
              />
            </div>
            <div>
              <label htmlFor="description" className="block mb-1 font-medium">
                Description
              </label>
              <Input
                id="description"
                {...register("description", { required: true })}
                placeholder="Description"
                required
              />
            </div>

            <div>
              <label
                htmlFor="discountPercentage"
                className="block mb-1 font-medium"
              >
                Discount Percentage
              </label>
              <Input
                id="discountPercentage"
                {...register("discountPercentage", {
                  valueAsNumber: true,
                  setValueAs: (value) => (value === "" ? 0 : parseFloat(value)),
                })}
                placeholder="Discount Percentage"
                type="number"
                step="0.01"
                min={0}
                max={100}
              />
            </div>

            <div>
              <label htmlFor="image" className="block mb-1 font-medium">
                Image URL
              </label>
              <Input
                id="image"
                {...register("image", { required: true })}
                placeholder="Image URL"
                required
              />
            </div>

            <div>
              <label htmlFor="sku" className="block mb-1 font-medium">
                SKU
              </label>
              <Input id="sku" {...register("sku")} placeholder="SKU" />
            </div>

            <DialogFooter>
              <Button type="submit">Add</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

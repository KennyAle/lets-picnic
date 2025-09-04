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
  DialogDescription,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { useSession } from "@/contexts/SessionContext";
const API_URL = import.meta.env.VITE_API_URL;

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
  const { user } = useSession();
  const [products, setProducts] = useState<ProductWrapper[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);

  const { register, handleSubmit, reset } = useForm<FormData>();

  if (!user) {
    return <p className="p-4">Please log in to view this page.</p>;
  }

  if (user.role !== "admin") {
    return <p className="p-4 text-red-600">Access denied. Admins only.</p>;
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${API_URL}/product`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const openModal = (product: Product | null) => {
    setSelectedProduct(product);
    if (product) {
      reset({
        productName: product.productName,
        categoryId: product.categoryId,
        price: product.price,
        image: product.image,
        description: product.description,
        discountPercentage: product.discountPercentage,
        rating: product.rating,
        sku: product.sku,
      });
    } else {
      reset({
        productName: "",
        categoryId: 1,
        price: 0,
        image: "",
        description: "",
        discountPercentage: 0,
        rating: 0,
        sku: "",
      });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const onSubmit = async (data: FormData) => {
    const rating = parseFloat(data.rating.toString());

    const payload = {
      ...data,
      discountPercentage: data.discountPercentage ?? 0,
      rating: parseFloat(rating.toFixed(2)),
    };

    console.log("Submitting data:", payload);

    try {
      let response;
      if (selectedProduct) {
        response = await fetch(
          `${API_URL}/product/${selectedProduct.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );
      } else {
        response = await fetch(`${API_URL}/product`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
      }

      if (!response.ok) throw new Error("Error saving product");

      await fetchProducts();

      closeModal();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleDelete = async () => {
    if (!productToDelete) return;

    try {
      const response = await fetch(
        `${API_URL}/product/${productToDelete.id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) throw new Error("Error deleting product");

      await fetchProducts();

      setIsConfirmDialogOpen(false);
    } catch (error) {
      console.error("Error deleting product:", error);
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
        <Button onClick={() => openModal(null)}>Add Product</Button>
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
          {products
            .filter(({ product }) =>
              product.productName
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            )
            .map(({ product }) => (
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
                <td className="px-6 py-4">
                  ${Number(product.price).toFixed(2)}
                </td>
                <td className="px-6 py-4 space-x-2">
                  <Button variant="outline" onClick={() => openModal(product)}>
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={() => {
                      setProductToDelete(product); // 削除する商品をセット
                      setIsConfirmDialogOpen(true); // 確認ダイアログを開く
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <Dialog open={isConfirmDialogOpen} onOpenChange={setIsConfirmDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this product? This action cannot
              be undone.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <Button onClick={() => setIsConfirmDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-sm mx-auto mt-10 max-h-[80vh] overflow-auto rounded-lg">
          <DialogHeader>
            <DialogTitle>
              {selectedProduct ? "Edit Product" : "Add Product"}
            </DialogTitle>
            <DialogDescription>
              {selectedProduct
                ? "Update the product information below."
                : "Fill in the product details to add a new product."}
            </DialogDescription>
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
                // required
              />
            </div>
            <div>
              <label htmlFor="rating" className="block mb-1 font-medium">
                Rating
              </label>
              <Input
                id="rating"
                type="text"
                placeholder="Rating (1.00 - 5.00)"
                pattern="^(5(\.0{1,2})?|[1-4](\.\d{1,2})?)$"
                {...register("rating", {
                  required: true,
                  pattern: {
                    value: /^(5(\.0{1,2})?|[1-4](\.\d{1,2})?)$/,
                    message:
                      "Rating must be a number between 1.00 and 5.00 with up to 2 decimals",
                  },
                })}
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
                type="text"
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
                type="text"
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
              <Button type="submit">
                {selectedProduct ? "Update" : "Add"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

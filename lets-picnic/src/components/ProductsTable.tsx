"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { useForm } from "react-hook-form"

interface Product {
  id: number
  product_name: string
  price: number
  image: string
}

export function ProductsTable() {
  const [products, setProducts] = useState<Product[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editProduct, setEditProduct] = useState<Product | null>(null)

  const { register, handleSubmit, reset } = useForm()

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("http://localhost:3000/product")
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.error("Error fetching products:", error)
      }
    }
    fetchProducts()
  }, [])

  const filteredProducts = products.filter(product =>
    product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const openModal = (product?: Product) => {
    setEditProduct(product || null)
    setIsModalOpen(true)
    reset(product || {})
  }

  const closeModal = () => {
    setIsModalOpen(false)
    reset()
  }

  const onSubmit = async (data: any) => {
    const url = editProduct ? `http://localhost:3000/product/${editProduct.id}` : "http://localhost:3000/product"
    const method = editProduct ? "PUT" : "POST"

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      if (!response.ok) throw new Error("Error")
      closeModal()
    } catch (error) {
      console.error("Error saving product:", error)
    }
  }

  return (
    <div className="w-full overflow-x-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <Input
          placeholder="Search product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-1/2"
        />
        <Button variant="default" onClick={() => openModal()}>Add Product</Button>
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
          {filteredProducts.map((product) => (
            <tr key={product.id} className="border-b">
              <td className="px-6 py-4">{product.id}</td>
              <td className="px-6 py-4">
                <img src={product.image} alt={product.product_name} className="w-12 h-12 object-cover rounded" />
              </td>
              <td className="px-6 py-4">{product.product_name}</td>
              <td className="px-6 py-4">${product.price}</td>
              <td className="px-6 py-4 space-x-2">
                <Button variant="outline" onClick={() => openModal(product)}>Edit</Button>
                <Button variant="destructive">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editProduct ? "Edit Product" : "Add Product"}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input placeholder="Product Name" {...register("productName")} />
            <Input placeholder="Price" type="number" {...register("price")} />
            <Input placeholder="Image URL" {...register("image")} />
            <Input placeholder="Description" {...register("description")} />
            <Input placeholder="Discount Percentage" type="number" {...register("discountPercentage")} />
            <Input placeholder="Rating" type="number" {...register("rating")} />
            <Input placeholder="SKU" {...register("sku")} />
            <Input placeholder="Category ID" type="number" {...register("categoryId")} />
            <DialogFooter>
              <Button type="submit">{editProduct ? "Update" : "Add"}</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

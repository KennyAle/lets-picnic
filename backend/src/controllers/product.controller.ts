import { Request, Response } from "express";
import productModel from "../models/product.model";

// get all products
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await productModel.getAllProducts()
    res.status(200).json(products)
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
}

// get product by id
const getProductById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.productId)
  if (isNaN(id)) {
    res.status(400).json({ error: "Invalid user ID. Must be a number." })
    return
  }
  try {
    const product = await productModel.getProductById(id)
    if (!product) {
      res.status(404).json({ error : "Product not found"})
      return
    }
    res.status(200).json(product)
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch product by id" });
  }
}

// get product by name
const getProductByName = async (req: Request, res: Response) => {
  const productName = req.body.productName
  try {
    const product = await productModel.getProductByName(productName)
    if(!product) {
      res.status(404).json({ error : "Product not found"})
      return
    }
    res.status(200).json(product)
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch product by name" });
  }
}

// add product 
const addProduct = async (req: Request, res: Response) => {
  const { productName, categoryId, price, image, description } = req.body
  if (!productName || !categoryId || !price || !image || !description) {
    res.status(400).json({ error: "Missing required fields" });
    return
  }

  try {
    const newProduct = await productModel.creatProduct({
      productName,
      categoryId,
      price,
      image,
      description
    })
    res.status(201).json(newProduct)
  } catch (err) {
    res.status(500).json({ error: "Failed to create product" });
  }
}

// edit product by id
const editProduct = async (req: Request, res: Response) => {
  const id = parseInt(req.params.productId)
  try {
    const { productName, categoryId, price, image, description } = req.body
    const product = await productModel.editProduct(id, productName, categoryId, price, image, description)

    if (!product) {
      res.status(404).json({ message: "Product not found" })
      return
    }

    res.status(200).json(product)
  } catch (err) {
    res.status(500).json({ error: "Failed to edit product" });
  }
}

// delete product by id
const deleteProduct = async (req: Request, res: Response) => {
  const id = parseInt(req.params.productId)
  try {
    await productModel.deleteProduct(id)
    res.status(200).json({ message: "Product deleted"})
  } catch (err) {
    res.status(500).json({ error: "Failed to delete product" });
  }
}

export default {
  getAllProducts,
  getProductById,
  getProductByName,
  addProduct,
  editProduct,
  deleteProduct
}
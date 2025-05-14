import { createClient } from "../database/dbClient";
import { Product } from "../types/product";

// get all products
const getAllProducts = async () => {
  const client = createClient()
  try {
    await client.connect()
    const result = await client.query(`SELECT * FROM "product" ORDER BY product_name ASC`)
    return result.rows
  } catch (err) {
    console.error(err)
    throw err
  } finally {
    await client.end()
  }
}

// get product by id
const getProductById = async (id: number) => {
  const client = createClient()
  try {
    await client.connect()
    const result = await client.query(`SELECT * FROM "product" WHERE id = $1`, [id])
    return result.rows[0]
  } catch (err) {
    console.error(err)
    throw err
  } finally {
    await client.end()
  }
}

// get product by name
const getProductByName = async (productName: string) => {
  const client = createClient()
  try {
    await client.connect()
    const result = await client.query(`SELECT * FROM "product" WHERE product_name = $1`, [productName])
    return result.rows[0]
  } catch (err) {
    console.error(err)
    throw err
  } finally {
    await client.end()
  }
}

// creat product 
const creatProduct = async (newProduct: Omit<Product, 'id'| 'createdAt' | 'updatedAt'>) => {
  const { productName, categoryId, price, image, description } = newProduct
  const client = createClient()
  try {
    await client.connect()
    const result = await client.query(`INSERT INTO product (product_name, category_id, price, image, description) VALUES ($1, $2, $3, $4, $5) RETURNING *`,  [productName, categoryId, price, image, description])
    return result.rows[0]
  } catch (err) {
    console.error(err)
    throw err
  } finally {
    await client.end()
  }
}

// edit product by id
const editProduct = async (
  id: number,
  productName: string,
  categoryId: number,
  price: number,
  image: string,
  description: string
) => {
  const foundProduct = await getProductById(id)
  if (!foundProduct) return undefined
  const client = createClient()
  try {
    await client.connect()
    const result = await client.query(`UPDATE "product" SET product_name = $1, category_id = $2, price = $3, image = $4, description = $5 WHERE id = $6 RETURNING *`, [productName, categoryId, price, image, description, id])
    return result.rows[0]
  } catch (err) {
    console.error(err)
    throw err
  } finally {
    await client.end()
  }
}

// delete product by id
const deleteProduct = async (id: number) => {
  const foundProduct = await getProductById(id)
  if (!foundProduct) return undefined
  const client = createClient()
  try {
    await client.connect()
    await client.query(`DELETE FROM "product" WHERE id = $1`, [id])
    return true
  } catch (err) {
    console.error(err)
    throw err
  } finally {
    await client.end()
  }
}

export default {
  getAllProducts,
  getProductById,
  getProductByName,
  creatProduct,
  editProduct,
  deleteProduct
}
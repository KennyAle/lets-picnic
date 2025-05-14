import { Router } from "express";
import productController from "../controllers/product.controller";

const productRouter = Router()

productRouter.get('/', productController.getAllProducts)
productRouter.post('/', productController.addProduct)
productRouter.get('/:productId', productController.getProductById)
productRouter.post('/:productName', productController.getProductByName)
productRouter.put('/:productId', productController.editProduct)
productRouter.delete('/:productId', productController.deleteProduct)

export default productRouter
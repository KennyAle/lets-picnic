export type Product = {
    id: number
    productName: string
    price: number
    image: string
    description: string
    discountPercentage: number
    rating: number
    sku: string
    categoryId: number
    category: category
    category_name: string
    quantity:number // not recommend having this here, quantity should be in the cart-item
}

interface category {
    categoryName: string,
    categoryDescription: string,
    categryImage: string
}
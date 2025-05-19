export type Product = {
    id: number
    productName: string
    price: number
    image: string
    description: string
    category_name: string
    quantity: number
    rating: number
    sku: string
    category: category
}

interface category {
    categoryName: string,
    categoryDescription: string,
    categryImage: string
}
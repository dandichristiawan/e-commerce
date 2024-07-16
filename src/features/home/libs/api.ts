import { Products } from "./types"

export async function getAllProducts() {
    const response = await fetch(`https://dummyjson.com/products?limit=12&skip=0`)

    if (!response.ok) {
        throw new Error('Failed to fetch')
    }

    const data = await response.json()

    return data as Products
}
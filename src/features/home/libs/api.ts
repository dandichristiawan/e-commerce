import { Products } from "./types"

export async function getAllProducts(
    skip : number
) {
    const response = await fetch(`https://dummyjson.com/products?limit=${20}&skip=${skip}`)

    if (!response.ok) {
        throw new Error('Failed to fetch')
    }

    const data = await response.json()

    return data as Products
}
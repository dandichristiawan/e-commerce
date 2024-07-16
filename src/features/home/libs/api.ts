import { Products } from "./types"

export async function getAllProducts() {
    const response = await fetch(`https://dummyjson.com/products?limit=10&skip=10`)

    if (!response.ok) {
        throw new Error('Login Failed!')
    }

    const data = await response.json()

    return data as Products
}
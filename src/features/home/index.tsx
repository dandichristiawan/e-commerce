import Card from "@/components/card/card"
import { useEffect } from "react"
import { Products } from "./libs/types"
import { getAllProducts } from "./libs/api"
const Home = () => {
    // const [products, setProducts] = usestate<Products>()
    useEffect(() => {
        async function get(){
            try {
                const getProducts = await getAllProducts()
                console.log(getProducts)
                // setProducts(getProducts)
            } catch (error) {
                console.log(error)
            }
        }
        get()
    },[])
    // console.log(products)
    return(
        <>
            <div>
                <Card/>
            </div>
        </>
    )
}

export default Home

function usestate<T>(): [any, any] {
    throw new Error("Function not implemented.")
}

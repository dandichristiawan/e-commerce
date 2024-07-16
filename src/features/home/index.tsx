import Card from "@/components/card/card"
import { useEffect, useState } from "react"
import { Products } from "./libs/types"
import { getAllProducts } from "./libs/api"
const Home = () => {
    const [data, setData] = useState<Products>()
    useEffect(() => {
        async function get(){
            try {
                const data = await getAllProducts()
                setData(data)
            } catch (error) {
                console.log(error)
            }
        }
        get()
    },[])
    return(
        <>
            <Card product={data?.products}/>
        </>
    )
}

export default Home

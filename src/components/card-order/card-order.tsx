import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card-order-ui";
import { Button } from "../ui/button";
import { ProductDetailResponse } from "@/features/product-detail/libs/definitions";
import { useState } from "react";
import CartAddAlert from "../cart/cart-add-alert";
import Cookies from "js-cookie";
import { AddCarts } from "@/features/product-detail/libs/api";
import { AppDispatch } from "@/store/store";
import { useDispatch } from "react-redux";
import { addToCart } from "@/features/cart/cartSlice";

interface Props{
    data : ProductDetailResponse
}

export default function CardOrder(
    {data}:Props
) {
    const userId = Cookies.get('userId')
    const [sum, setSum] = useState(1)
    const [loading, setLoading] = useState(false)
    const dispatch: AppDispatch = useDispatch()

    const handleClick = async (id:number, quantity:number) => {
      let product = []
      let data = { id : id, quantity : quantity}
      // simulasi keranjang pake redux
      dispatch(addToCart(data))
      // simulasi keranjang pake redux
      product.push(data)
      setLoading(true)
      try {
        await AddCarts(parseInt(userId!), product)
      } catch (error) {
        
      }finally{
        setLoading(false)
      }
    }

  return (
    <>
      <Card className={"w-56"}>
        <CardHeader>
          <CardTitle>Set amounts</CardTitle>
          <CardDescription>Max. purchase {data.stock} pcs</CardDescription>
        </CardHeader>
        <CardContent className="flex my-auto gap-2">
          <div className="border rounded-md w-20 flex justify-between">
            <button className="p-2" onClick={() => setSum(sum == 1? 1 : sum-1)}>-</button>
            <span className="my-auto">{sum}</span>
            <button className="p-2" onClick={()=> setSum(sum == data.stock? sum : sum+1)}>+</button>
          </div>
          <span className="my-auto">Stock : {data.stock}</span>
        </CardContent>
        <CardFooter>
            <div className="">
                <CartAddAlert
                  handleClick={handleClick}
                  data={data}
                  quantity={sum}
                  loading={loading}
                />
                <Button className="w-full bg-white hover:bg-blue-800 hover:text-white text-blue-600 border-blue-600 border-2 hover:border-blue-800">
                    Order Now
                </Button>
            </div>
        </CardFooter>
      </Card>
    </>
  );
}

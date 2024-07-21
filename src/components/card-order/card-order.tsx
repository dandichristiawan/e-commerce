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

interface Props{
    data : ProductDetailResponse
}

export default function CardOrder(
    {data}:Props
) {
    const [sum, setSum] = useState(1)
    const handleClick = (id:number, quantity:number) => {
      console.log('productId :'+id)
      console.log('quantity :'+quantity)
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
                {/* <Button className="my-2 w-full bg-white hover:bg-blue-800 hover:text-white text-blue-600 border-blue-600 border-2 hover:border-blue-800 rounded-md">
                    Add Cart
                </Button> */}
                <CartAddAlert
                  handleClick={handleClick}
                  data={data}
                  quantity={sum}
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

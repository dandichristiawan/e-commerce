import { Button } from "@/components/ui/button";
import { RootState } from "@/store/store";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AddCartsApi } from "./libs/api";
import { Carts } from "./libs/types";
import { Trash2 } from 'lucide-react';

export default function Cart() {

  const userId = Cookies.get('userId')
  const items = useSelector((item : RootState) => item.cart.items)
  const [listCart, setListCart] = useState<Carts>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function addToCart() {
      setLoading(true)
      try {
        const res = await AddCartsApi(parseInt(userId!), items)
        setListCart(res)  
      } catch (error) {
        console.log(error)
      }finally{
        setLoading(false)
      }
    }
    addToCart()
  },[])
  
  if(loading){
    <div className="min-h-dvh">
      <div className="text-center">
        Loading...
      </div>
    </div>
  }else{
    return (
      <>
      <div className="min-h-dvh">
        <div>
          <span className="inline-block w-full text-blue-600 font-semibold text-4xl my-4">
            Shopping Cart
          </span>
        </div>
        <div className="p-4 border rounded my-4 shadow-md">
          <div className="mx-5 grid grid-cols-6 w-full font-semibold">
            <div className="col-span-2">Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Total</div>
            <div>Action</div>
          </div>
        </div>
        <div className="p-4 border rounded my-4 shadow-md">
            {
              listCart && listCart.products?.map((item, i) => (
                <div className="p-4 rounded border-b grid grid-cols-6 w-full">
                  <>
                      <div className="col-span-2">{item.title}</div>
                      <div>${item.price}</div>
                      <div>{item.quantity}</div>
                      <div>${item.total}</div>
                      <div className="mx-10"><Trash2 className="text-red-700"/></div>
                  </>
                </div>
              ))
            }
        </div>
        <div className="p-4 border rounded my-4 shadow-md">
          <div className="flex justify-end mx-3">
            <div className="my-auto mx-4 font-semibold text-lg">Total ({listCart?.totalProducts} Product) : ${listCart?.total}</div>
            <Button className="bg-blue-600 hover:bg-blue-800 rounded-none w-56">Checkout</Button>
          </div>
        </div>
      </div>
      </>
    );
  }
}

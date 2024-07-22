import Cart from "@/features/cart";
import { MainLayout } from "@/layouts/main-layouts";

export default function CartPage(){
  return(
    <>
      <MainLayout>
        <Cart/>
      </MainLayout>
    </>
  )
}
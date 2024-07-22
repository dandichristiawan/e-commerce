import { Button } from "@/components/ui/button";

export default function Cart() {
  return (
    <>
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
        <div className="p-4 rounded border-b grid grid-cols-6 w-full">
          <div className="col-span-2">Baju</div>
          <div>$2000000</div>
          <div>1</div>
          <div>$2000000</div>
          <div>Delete</div>
        </div>
      </div>
      <div className="p-4 border rounded my-4 shadow-md">
        <div className="flex justify-end mx-3">
          <div className="my-auto mx-4 font-semibold text-lg">Total (0 Product) : $0</div>
          <Button className="bg-blue-600 hover:bg-blue-800 rounded-none w-56">Checkout</Button>
        </div>
      </div>
    </>
  );
}

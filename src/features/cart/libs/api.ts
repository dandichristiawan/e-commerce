export async function AddCartsApi(userId: number, products:any[]) {
    const res = await fetch("https://dummyjson.com/carts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: userId,
        products: products
      }),
    });
    return res.json()
  }
export async function GetCurrentProduct(productId: string) {
  const res = await fetch(`https://dummyjson.com/products/${productId}`);
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  const data = res.json();

  return data;
}

export async function AddCarts(userId: number, products:any[]) {
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

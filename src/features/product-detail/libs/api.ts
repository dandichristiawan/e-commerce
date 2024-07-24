export async function GetCurrentProduct(productId: string) {
  const res = await fetch(`https://dummyjson.com/products/${productId}`);
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  const data = res.json();

  return data;
}

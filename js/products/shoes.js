export async function getShoes(limit) {
  const urlShoes = `https://dummyjson.vercel.app/products/nike/shoes?limit=${limit}`;
  const response = await fetch(urlShoes);
  const items = await response.json();

  return items;
}

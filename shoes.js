export async function getShoes(limit) {
    const urlShoes = "https://dummyjson.vercel.app/products/nike/shoes?limit={limit}";
    const response = await fetch(urlShoes)
    const data = await response.json()

    return data;
}

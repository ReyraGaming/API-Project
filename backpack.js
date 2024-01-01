export async function getBag(limit) {
    const urlBag = `https://dummyjson.vercel.app/products/nike/bagpacks?limit=${limit}`;
    const response = await fetch(urlBag)
    const items = await response.json()

    return items;
}

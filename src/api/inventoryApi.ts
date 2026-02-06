export const API_URL =
 "https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory"

export async function fetchInventory() {
 const res = await fetch(API_URL)
 return res.json()
}
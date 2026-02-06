import { http } from "msw"

export const handlers = [
 http.get(
  "https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory",
  () => {
   return new Response(
    JSON.stringify([
     {
      id: 1,
      name: "Bluetooth headset",
      category: "Electronic",
      price: 5,
      quantity: 5
     },
     {
      id: 2,
      name: "Edifier M34560",
      category: "Electronic",
      price: 5,
      quantity: 0
     },
     {
      id: 3,
      name: "Sony 4K 55 inch ultra TV",
      category: "Electronic",
      price: 50,
      quantity: 17
     },
     {
      id: 4,
      name: "Samsung 55 inch TV",
      category: "Electronic",
      price: 500,
      quantity: 50
     },
     {
      id: 5,
      name: "Samsung S24 Ultra",
      category: "Phone",
      price: 50,
      quantity: 0
     }
    ]),
    {
     headers: { "Content-Type": "application/json" }
    }
   )
  }
 )
]

import type { Product } from "../store/inventorySlice"

export const inventoryMock: Product[] = [
 {
  id: 1,
  name: "Bluetooth headset",
  category: "Electronic",
  price: 5,
  quantity: 5,
  disabled: false
 },
 {
  id: 2,
  name: "Edifier M34560",
  category: "Electronic",
  price: 5,
  quantity: 0,
  disabled: false
 },
 {
  id: 3,
  name: "Sony 4K 55 inch ultra TV",
  category: "Electronic",
  price: 50,
  quantity: 17,
  disabled: false
 },
 {
  id: 4,
  name: "Samsung 55 inch TV",
  category: "Electronic",
  price: 500,
  quantity: 50,
  disabled: false
 },
 {
  id: 5,
  name: "Samsung S24 Ultra",
  category: "Phone",
  price: 50,
  quantity: 0,
  disabled: false
 }
]

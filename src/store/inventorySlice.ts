import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { inventoryMock } from "../mocks/inventoryMock"

export interface Product {
 id: number
 name: string
 category: string
 price: number
 quantity: number
 disabled?: boolean
}

const inventorySlice = createSlice({
 name: "inventory",
 initialState: {
  products: inventoryMock,
  role: "admin" as "admin" | "user"
 },
 reducers: {
  setRole(state, action) {
   state.role = action.payload
  },
  updateProduct(state, action: PayloadAction<Product>) {
   const i = state.products.findIndex(p => p.id === action.payload.id)
   if (i !== -1) state.products[i] = action.payload
  },
  deleteProduct(state, action: PayloadAction<number>) {
   state.products = state.products.filter(p => p.id !== action.payload)
  },
  disableProduct(state, action: PayloadAction<number>) {
   const p = state.products.find(p => p.id === action.payload)
   if (p) {
        if(p.disabled) {
            p.disabled = false
        } else {
            p.disabled = true
        }
    }
  }
 }
})

export const {
 setRole,
 updateProduct,
 deleteProduct,
 disableProduct
} = inventorySlice.actions

export default inventorySlice.reducer

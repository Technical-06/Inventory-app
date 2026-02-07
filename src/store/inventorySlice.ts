import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { fetchInventory } from "../api/inventoryApi"

export interface Product {
 id: number
 name: string
 category: string
 price: number
 quantity: number
 disabled?: boolean
}

export const loadInventory = createAsyncThunk(
 "inventory/load",
 async () => {
  const data = await fetchInventory()
  return data
 }
)

interface InventoryState {
 products: Product[]
 role: "admin" | "user"
}

const initialState: InventoryState = {
 products: [],
 role: "admin"
}

const inventorySlice = createSlice({
 name: "inventory",
 initialState,
 reducers: {
  setRole(state, action: PayloadAction<"admin" | "user">) {
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
   if (p) p.disabled = !p.disabled
  }
 },

 extraReducers: builder => {
  builder.addCase(loadInventory.fulfilled, (state, action) => {
   state.products = action.payload
  })
 }
})

export const {
 setRole,
 updateProduct,
 deleteProduct,
 disableProduct
} = inventorySlice.actions

export default inventorySlice.reducer

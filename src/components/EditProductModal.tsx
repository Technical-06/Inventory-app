import "../scss/EditProductModal.scss"

import {
 Dialog,
 DialogContent,
 Typography,
 IconButton,
 Grid,
 TextField,
 Button,
 Box
} from "@mui/material"

import CloseIcon from "@mui/icons-material/Close"

import { useDispatch } from "react-redux"
import { updateProduct } from "../store/inventorySlice"
import { useState } from "react"

export default function EditProductModal({ product, onClose }: any) {
 const dispatch = useDispatch()


 const [initialForm] = useState({
  ...product,
  value: product.price * product.quantity
})

const [form, setForm] = useState(initialForm)

const isDirty =
 form.category !== initialForm.category ||
 form.price !== initialForm.price ||
 form.quantity !== initialForm.quantity


 const handleChange = (key: string, val: number | string) => {
  const updated = { ...form, [key]: val }

  if (key === "price" || key === "quantity") {
   updated.value = Number(updated.price) * Number(updated.quantity)
  }

  setForm(updated)
 }

 const save = () => {
  dispatch(updateProduct(form))
  onClose()
 }

 return (
  <Dialog
   open
   onClose={onClose}
   fullWidth={false}
   slotProps={{
    paper: { className: "edit-modal-paper" }
   }}
  >
   <DialogContent>

    <Box className="edit-modal-header">
     <Box>
      <Typography variant="h5" className="title">
       Edit product
      </Typography>
      <Typography className="subtitle">
       {product.name}
      </Typography>
     </Box>

     <IconButton onClick={onClose}>
      <CloseIcon className="close-icon" />
     </IconButton>
    </Box>

    <Grid container spacing={2} className="edit-form-grid">
     <Grid size={6}>
      <TextField
       fullWidth
       label="Category"
       value={form.category}
       onChange={e => handleChange("category", e.target.value)}
      />
     </Grid>

     <Grid size={6}>
      <TextField
       fullWidth
       label="Price"
       type="number"
       value={form.price}
       onChange={e => handleChange("price", +e.target.value)}
      />
     </Grid>

     <Grid size={6}>
      <TextField
       fullWidth
       label="Quantity"
       type="number"
       value={form.quantity}
       onChange={e => handleChange("quantity", +e.target.value)}
      />
     </Grid>

     <Grid size={6}>
      <TextField
       fullWidth
       label="Value"
       value={form.value}
       disabled
      />
     </Grid>
    </Grid>

    <div className="modal-actions">
     <Button onClick={onClose} className="cancel-btn">
      Cancel
     </Button>

     <Button
 variant="contained"
 onClick={save}
 className="save-btn"
 disabled={!isDirty}
>
 Save
</Button>

    </div>

   </DialogContent>
  </Dialog>
 )
}

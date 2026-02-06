import "../scss/ProductTable.scss"

import {
 Table, TableHead, TableRow, TableCell,
 TableBody, IconButton, Paper, Chip
} from "@mui/material"

import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import VisibilityIcon from "@mui/icons-material/VisibilityOff"

import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../store/store"
import { deleteProduct, disableProduct } from "../store/inventorySlice"
import { useState } from "react"
import EditProductModal from "./EditProductModal"

export default function ProductTable() {
 const { products, role } = useSelector((s: RootState) => s.inventory)
 const dispatch = useDispatch()
 const [edit, setEdit] = useState<any>(null)

 const isUser = role === "user"

 return (
  <>
   <Paper className="product-table-wrapper">

    <Table>

     <TableHead className="table-header">
      <TableRow>
       {["Name","Category","Price","Qty","Value","Action"].map(h => (
        <TableCell key={h}>
         <Chip label={h} size="small" className="header-chip" />
        </TableCell>
       ))}
      </TableRow>
     </TableHead>

     <TableBody>
      {products.map(p => (
       <TableRow
        key={p.id}
        className={p.disabled ? "disabled-row" : ""}
       >
        <TableCell>{p.name}</TableCell>
        <TableCell>{p.category}</TableCell>
        <TableCell>{p.price}</TableCell>
        <TableCell>{p.quantity}</TableCell>
        <TableCell>{p.price * p.quantity}</TableCell>

        <TableCell>

         <IconButton
          disabled={isUser || p.disabled}
          onClick={() => setEdit(p)}
         >
          <EditIcon
           className={`action-icon ${isUser || p.disabled ? "icon-disabled" : "action-edit"}`}
          />
         </IconButton>

         <IconButton
          disabled={isUser}
          onClick={() => dispatch(deleteProduct(p.id))}
         >
          <DeleteIcon
           className={`action-icon ${isUser ? "icon-disabled" : "action-delete"}`}
          />
         </IconButton>

         <IconButton
          disabled={isUser}
          onClick={() => dispatch(disableProduct(p.id))}
         >
          <VisibilityIcon
           className={`action-icon ${isUser ? "icon-disabled" : "action-disable"}`}
          />
         </IconButton>

        </TableCell>
       </TableRow>
      ))}
     </TableBody>

    </Table>
   </Paper>

   {edit && <EditProductModal product={edit} onClose={() => setEdit(null)} />}
  </>
 )
}

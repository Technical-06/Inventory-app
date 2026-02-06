import "../scss/Navbar.scss"

import { AppBar, Toolbar, Switch, Typography} from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../store/store"
import { setRole } from "../store/inventorySlice"

export default function Navbar() {
 const role = useSelector((s: RootState) => s.inventory.role)
 const dispatch = useDispatch()

 return (
  <AppBar position="static" elevation={0} className="navbar">
   <Toolbar className="navbar-toolbar">

    <div className="spacer" />

    <Typography className="role-label">admin</Typography>

    <Switch
     className="green-switch"
     checked={role === "user"}
     onChange={e =>
      dispatch(setRole(e.target.checked ? "user" : "admin"))
     }
    />

    <Typography>user</Typography>

   </Toolbar>
  </AppBar>
 )
}

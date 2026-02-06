import { createTheme } from "@mui/material/styles"

export const darkTheme = createTheme({
 palette: {
  mode: "dark",
  background: {
   default: "#0f1113",
   paper: "#1a1c1f"
  },
  primary: {
   main: "#6cc070"
  }
 },
 shape: {
  borderRadius: 12
 }
})

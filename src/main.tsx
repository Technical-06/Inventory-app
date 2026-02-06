import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { ThemeProvider } from "@mui/material/styles"
import { CssBaseline } from "@mui/material"

import { store } from "./store/store"
import { darkTheme } from "./theme"
import App from "./App"


async function enableMocking() {
 if (import.meta.env.DEV) {
  const { worker } = await import("./mocks/browser")
  return worker.start()
 }
}

enableMocking().then(() => {
 ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
   <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <App />
   </ThemeProvider>
  </Provider>
 )
})


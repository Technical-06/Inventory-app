import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { ThemeProvider } from "@mui/material/styles"
import { CssBaseline } from "@mui/material"

import { store } from "./store/store"
import { darkTheme } from "./theme"
import App from "./App"


async function enableMocking() {
 const shouldMock =
  import.meta.env.DEV ||
  import.meta.env.VITE_ENABLE_MSW === "true"

 if (shouldMock) {
  const { worker } = await import("./mocks/browser")

  return worker.start({
   serviceWorker: {
    url: "/mockServiceWorker.js"
   }
  })
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


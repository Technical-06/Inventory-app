import Navbar from "./components/Navbar"
import StatsCards from "./components/StatsCards"
import ProductTable from "./components/ProductTable"
import { Container } from "@mui/material"

export default function App() {

 return (
  <>
   <Navbar/>
   <Container>
    <StatsCards/>
    <ProductTable/>
   </Container>
  </>
 )
}

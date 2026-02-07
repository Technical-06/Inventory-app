import Navbar from "./components/Navbar"
import StatsCards from "./components/StatsCards"
import ProductTable from "./components/ProductTable"
import { Container } from "@mui/material"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { loadInventory } from "./store/inventorySlice"
import type { AppDispatch } from "./store/store"

export default function App() {

    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
    dispatch(loadInventory())
    }, [dispatch])


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

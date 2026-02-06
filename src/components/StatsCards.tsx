import { useMemo } from "react"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange"
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart"
import CategoryIcon from "@mui/icons-material/Category"

import { useSelector } from "react-redux"
import type { RootState } from "../store/store"

import "../scss/StatsCards.scss"

export default function StatsCards() {
 const products = useSelector((s: RootState) => s.inventory.products)

 const active = useMemo(
  () => products.filter(p => !p.disabled),
  [products]
 )

 const stats = useMemo(() => [
  { label: "Total product", value: active.length, icon: <ShoppingCartIcon /> },
  { label: "Total store value", value: active.reduce((s,p)=>s+p.price*p.quantity,0), icon: <CurrencyExchangeIcon /> },
  { label: "Out of stocks", value: active.filter(p=>p.quantity===0).length, icon: <RemoveShoppingCartIcon /> },
  { label: "No of Category", value: new Set(active.map(p=>p.category)).size, icon: <CategoryIcon /> }
 ], [active])

 return (
  <>
   <div className="stats-title">Inventory stats</div>

   <div className="stats-grid">
    {stats.map(s => (
     <div key={s.label} className="stat-card">
      <div className="stat-content">
       <div className="stat-icon">{s.icon}</div>

       <div>
        <div className="stat-label">{s.label}</div>
        <div className="stat-value">{s.value}</div>
       </div>
      </div>
     </div>
    ))}
   </div>
  </>
 )
}

import { Outlet } from "react-router-dom"
import OwnerSidebar from '../global/OwnerSidebar'
export default function Owner(){
    return (
        <div>
            <h1>Owner layout</h1>
            <OwnerSidebar />
            <Outlet />
        </div>
    )
}
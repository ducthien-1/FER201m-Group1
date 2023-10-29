import { Outlet } from "react-router-dom"
import AdminSidebar from "../global/AdminSidebar"
export default function Admin() {
    return (
        <div>
            <h1>Admin layout</h1>
            <AdminSidebar />
            <Outlet />
        </div>
    )
}
import { Outlet } from "react-router-dom"

export default function CustomerAgent(){
    return (
        <div>
            <h1>CustomerAgent layout</h1>
            <Outlet />
        </div>
    )
}
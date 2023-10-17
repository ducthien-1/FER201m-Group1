import { Outlet } from "react-router-dom";
import Header from "../global/Header";
import Footer from "../global/Footer"

export default function Customer(){
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./components/Footer";


export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
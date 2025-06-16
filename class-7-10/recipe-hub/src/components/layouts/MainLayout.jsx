import Navbar from "../Navbar.jsx";
import { Outlet } from "react-router"; // it is used to pass a component as children from the route itself

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <main className={"main-layout"}>
                <Outlet />
            </main>
        </>
    )
}

export default MainLayout
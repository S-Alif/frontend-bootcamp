import Navbar from "../Navbar";
import { Outlet } from "react-router"; // it is used to pass a component as children from the route itself
import Footer from '../Footer';

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <main className={"main-layout"}>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default MainLayout
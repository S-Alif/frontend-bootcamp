import { Link } from "react-router";
import logo from "../assets/images/logo.png"
import { useState } from "react";
import { AlignLeft, X } from "lucide-react";

const Navbar = () => {

    const [openMobileNav, setOpenMobileNav] = useState(false)

    return (
        <nav className={"navbar"}>
            <div className="container">

                <div className="navbar-content">
                    {/*logo*/}
                    <div>
                        <Link to="/" className="navbar-brand btn link text-deep-green fw-bold">
                            <img src={logo} alt="logo" />
                            <p className={"text-white"}>RecipeHub</p>
                        </Link>
                    </div>

                    {/*menu*/}
                    <div className={"navbar-menu-wrapper"}>

                        {/*links menu*/}
                        <ul className={`navbar-menu ${openMobileNav ? "mobile-nav-open" : ""}`}>
                            <li>
                                <Link to={"/#home"} className={"btn link"}>Home</Link>
                            </li>
                            <li>
                                <Link to={"/#about"} className={"btn link"}>About Us</Link>
                            </li>
                            <li>
                                <Link to={"/#popular"} className={"btn link"}>Popular</Link>
                            </li>
                            <li>
                                <Link to={"/#contact"} className={"btn link"}>Contact</Link>
                            </li>
                        </ul>

                        <div className="navbar-menu-controls">
                            <button
                                className={"text-white"}
                                onClick={() => {
                                    setOpenMobileNav(prev => !prev)
                                }}
                            >
                                {
                                    !openMobileNav ?
                                        <AlignLeft size={28} /> : <X size={28} />
                                }
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </nav>)
}

export default Navbar
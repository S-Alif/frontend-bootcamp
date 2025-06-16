import { Copyright } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <Copyright /> Copyright 2025 <Link to={"/"} className={"link text-white fw-bold"}>RecipeHub</Link> | All Rights Reserved
            </div>
        </footer>
    )
}

export default Footer
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
    return <nav className="nav">
        <a href="/">Home</a>
        <ul>
            <li>
                <Link to={"Raids"}>Find Raids</Link>
            </li>
            <li>
                <Link to={"Profile"}>Profile</Link>
            </li>
            <li>
                <Link to={"Login"}>Login/Register</Link>
            </li>
        </ul>
    </nav>
}
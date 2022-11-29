import "./Navbar.css";
import { Link } from "react-router-dom";
import { AuthContext, logout } from "../../context/authContext"
import React, { useContext } from "react";

export default function Navbar() {
    const { currentUser, logout } = useContext(AuthContext)
    return (
      <nav className="nav">
        <a href="/">Home</a>
        <ul>
          <li>
            <Link to={"Raids"}>Find Raids</Link>
          </li>
          <li>
            <Link to={"Profile"}>Profile</Link>
          </li>
          <li>
            {currentUser?.email ? (
              <Link to={logout}>Logout</Link>
            ) : (
              <Link to={"Login"}>Login/Register</Link>
            )}
          </li>
        </ul>
      </nav>
    );
}
import React from "react";
import logo from "../images/logo.png";
import "../styles/Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <a className="image" href="#">
                    <img src={logo} alt="Logo" />
                </a>
                <ul className="links">
                    <li className="home">
                        <a className="link1" href="#">Home</a>
                    </li>
                    <li className="about">
                        <a className="link2" href="#">About</a>
                    </li>
                    <li className="contact">
                        <a className="link3" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

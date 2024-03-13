import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { AiOutlineMenuFold, AiOutlineClose } from "react-icons/ai";
import logo from "../../assets/images/KARENG2.png"



const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const menuControl = () => {
        setMenu(!menu);
    };
    return (
        <>
            <nav className="nav-main">
                <div className="logo-div">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                </div>
                <div className="menu-div" onClick={menuControl}>
                    {menu ? (
                        <AiOutlineClose className="close-icon" />
                    ) : (
                        <AiOutlineMenuFold className="open-icon" />
                    )}
                </div>
                <ul className={menu ? "openMenu" : "openMenu closeMenu"}>
                    <NavLink to="/">
                        <li onClick={menuControl}>Home</li>
                    </NavLink>
                    <NavLink to="/activities">
                        <li onClick={menuControl}>Activities</li>
                    </NavLink>
                    <NavLink to="/gallery">
                        <li onClick={menuControl}>Gallery</li>
                    </NavLink>
                    <NavLink to="/contact">
                        <li onClick={menuControl}>Contact Us</li>
                    </NavLink>
                    <NavLink to="/login">
                        <li onClick={menuControl} className="last-li">
                            Login/Signup
                        </li>
                    </NavLink>
                </ul>
            </nav>
        </>
    )
}
export default Navbar;
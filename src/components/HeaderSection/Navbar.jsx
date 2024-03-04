import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { AiOutlineMenuFold, AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const menuControl = () => {
        setMenu(!menu);
    };
    return (
        <>
            {/* <div className="d-flex col-12  main-nav justify-content-around">
                <div className="d-flex flex-wrap col-md-4 col-6 main-nav-text">
                    <p className="col-12">Kareng Chapori </p>
                    <p className="col-12">Eco Camp</p>
                </div>
                <div className="d-flex col-7 flex-wrap main-nav-div justify-content-end gap-5 align-items-center">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/activities">Activities</NavLink>
                    <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
                    <NavLink className="nav-link" to="/">Contact</NavLink>
                    <NavLink className="nav-link" to="/">Login/Signup</NavLink>
                </div>
            </div> */}
            <nav className="nav-main">
                <div className="logo-div">
                    <span>Kareng Chapori</span>
                    <span>Eco Camp</span>
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
                        <li onClick={menuControl}>Contact</li>
                    </NavLink>
                    <NavLink to="/">
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
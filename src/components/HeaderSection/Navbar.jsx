import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <div className="d-flex col-12 flex-wrap main-nav justify-content-around">
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
            </div>
        </>
    )
}
export default Navbar;
import React from 'react'
import Footer from "../Footer/Footer"
import Navbar from "../HeaderSection/Navbar"
<<<<<<< HEAD
=======
import "./Layout.css";
>>>>>>> c061410a9eed86e14f9d5509565696cf91fa32de

const Layout = ({ children }) => {
    return (
        <div className='h-auto'>
            <div className='navbar-container'>
                <Navbar />
<<<<<<< HEAD
=======

>>>>>>> c061410a9eed86e14f9d5509565696cf91fa32de
            </div>
            <div className=" full-height">{children}</div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout
import React from 'react'
import Footer from "../Footer/Footer"
import Navbar from "../HeaderSection/Navbar"
import "./Layout.css";
const Layout = ({ children }) => {
    return (
        <div className='layout-container'>
            <div className='layout-nav-container'>
                <Navbar />
            </div>
            <div className='layout-content-container'>{children}</div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout
import React from 'react'
import Footer from "../Footer/Footer"
import Navbar from "../HeaderSection/Navbar"

const Layout = ({ children }) => {
    return (
        <div className='h-auto'>
            <div className='navbar-container'>
                <Navbar />
            </div>
            <div className=" full-height">{children}</div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout
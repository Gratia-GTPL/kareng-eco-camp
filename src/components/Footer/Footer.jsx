import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-logo-container'>
                <h1>Kareng Chapori</h1>
                <h2>Eco Camp</h2>
            </div>
            <div className='footer-about-conatiner'>
                <h4>About</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation.</p>
            </div>
            <div className='footer-address-container'>
                <h4>Address</h4>
                <p>GMHC+CVF, Kareng Chapori PO Mesaki, Sissiborgaon, Assam 786110</p>
            </div>
        </div>
    )
}

export default Footer
import React from 'react'
import "./Activities.css"
import { useNavigate } from "react-router-dom"
import accomm1 from "../Accommodation/accommodationImages/accomm1.png"

const Activities = () => {
    const navigate = useNavigate()
    return (
        <div className='accomm-container'>
            <div className='accomm-img-group'>
                <div className='accomm-img-div-1'>
                    <img src={accomm1} />
                </div>
                <div className='accomm-img-div-2'>
                    <img src={accomm1} />
                </div>
                <div className='accomm-img-div-3'>
                    <img src={accomm1} />
                </div>
            </div>
            <div className='accomm-content-div'>
                <h1>Activities</h1>
                <p>Discover eco-friendly adventures at Kareng Chapori Eco Camp.
                    Explore hiking trails, kayak along the river, and encounter wildlife on guided safaris.
                    Immerse yourself in local culture with traditional fishing and village visits. Your nature escape awaits.
                </p>
                <div className='learn-more-btn-div'>
                    <button onClick={() => navigate("/activities")}>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Activities
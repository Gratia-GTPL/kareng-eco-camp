import React from 'react'
import "./Accommodation.css"
import { useNavigate } from "react-router-dom"
import accomm1 from "./accommodationImages/accomm1.png"
import accomm2 from "./accommodationImages/accomm2.png"
import accomm3 from "./accommodationImages/accomm3.png"

const Accommodation = () => {
    const navigate = useNavigate()
    return (
        <div className='accomm-container'>
            <div className='accomm-content-div'>
                <h1>Accommodations</h1>
                <p>Discover sustainable comfort in our eco-friendly accommodations
                    at Kareng Chapori Eco Camp. From riverside cottages to treehouse retreats,
                    each lodging option offers a unique blend of modern comforts and natural beauty,
                    ensuring a memorable and eco-conscious stay amidst the lush landscapes of Assam, India.
                </p>
                <div className='learn-more-btn-div'>
                    <button onClick={() => navigate("/accommodations")}>Learn More</button>
                </div>
            </div>
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
        </div>
    )
}

export default Accommodation
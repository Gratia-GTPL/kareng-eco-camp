import React from 'react'
import "./AccommodationPage.css"
import Layout from '../../components/Layout/Layout'
import accom1 from "./AccommodationImage/accom1.png"

const AccommodationPage = () => {
    return (
        <Layout>
            <div className='accommodation-container'>
                <div className='accommodation-container-div'>
                    <div className='accom-head-div'>
                        <h1>Accommodations</h1>
                    </div>
                    <div className='accom-content-img-div'>
                        <div className='accom-content'>
                            <h5>Riverside Cottages</h5>
                            <p>
                                Experience rustic charm and modern comfort in our cozy riverside cottages.
                                Nestled along the banks of the Brahmaputra River, these accommodations offer stunning
                                views of the water and surrounding landscapes. Each cottage is thoughtfully designed with eco-friendly
                                materials and amenities for a comfortable stay.
                            </p>
                        </div>
                        <div className='accom-img-div'>
                            <div className='accom-img'>
                                <img src={accom1} />
                            </div>
                        </div>
                    </div>
                    {/* ============================= */}
                    <div className='accom-content-img-div reverse-content'>
                        <div className='accom-img-div'>
                            <div className='accom-img'>
                                <img src={accom1} />
                            </div>
                        </div>
                        <div className='accom-content'>
                            <h5> Eco-Friendly Tents:</h5>
                            <p>
                                Immerse yourself in nature with our eco-friendly tent accommodations.
                                Set amidst lush greenery, these tents provide a unique camping experience
                                without compromising on comfort. Enjoy the sounds of the river and wildlife as
                                you relax in your canvas retreat, complete with cozy bedding and basic amenities.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AccommodationPage
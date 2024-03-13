import React from 'react'
import "./ActivitiesPage.css"
import Layout from '../../components/Layout/Layout'
import kayaking from "../../assets/images/kayaking.jpeg"
import cultural from "../../assets/images/cultural.jpeg"
import cultural2 from "../../assets/images/cultural2.jpeg"
import G2 from "../GalleryPage/GalleryImages/G2.png"
import G3 from "../GalleryPage/GalleryImages/G3.png"

const ActivitiesPage = () => {
    return (
        <Layout>
            <div className='activities-container'>
                <div className='activities-container-div'>
                    <div className='activities-head-div'>
                        <h1>Activities</h1>
                    </div>
                    <div className='activities-content-img-div-1'>
                        <div className='activities-content'>
                            <h5>Kayaking Excursions</h5>
                            <p>
                                Glide along the tranquil waters of the Brahmaputra River on guided kayaking excursions.
                                Experience the serenity of nature as you paddle past pristine landscapes and observe birds and aquatic life.
                            </p>
                        </div>
                        <div className='activities-img-div'>
                            <div className='activities-img'>
                                <img src={kayaking} alt="img" />
                            </div>
                        </div>
                    </div>
                    {/* =============================== */}
                    <div className='activities-content-img-div-2'>
                        <div className='activities-img-div'>
                            <div className='activities-img'>
                                <img src={cultural} alt="img" />
                            </div>
                        </div>
                        <div className='activities-content'>
                            <h5>Cultural Immersion Experiences</h5>
                            <p>
                                Immerse yourself in the vibrant culture of Assam with traditional fishing experiences and visits to local villages.
                                Learn about traditional fishing techniques and interact with villagers to gain insights into their way of life.
                            </p>
                        </div>
                    </div>
                    {/* ========================= */}
                    <div className='activities-content-img-div-3'>
                        <div className='activities-content'>
                            <h5>Cultural Immersion Experiences</h5>
                            <p>
                                Immerse yourself in the vibrant culture of Assam with traditional fishing experiences and visits to local villages.
                                Learn about traditional fishing techniques and interact with villagers to gain insights into their way of life.
                            </p>
                        </div>
                        <div className='activities-img-div'>
                            <div className='activities-img'>
                                <img src={cultural2} alt="img" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ActivitiesPage
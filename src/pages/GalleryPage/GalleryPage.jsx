import React from 'react'
import "./galleryPage.css";
import Layout from '../../components/Layout/Layout'
import G1 from "./GalleryImages/G1.png"
import G2 from "./GalleryImages/G2.png"
import G3 from "./GalleryImages/G3.png"

const GalleryPage = () => {
    const data = [
        {
            "id": 1,
            "image": G1

        },
        {
            "id": 2,
            "image": G2

        },
        {
            "id": 3,
            "image": G3

        }, {
            "id": 4,
            "image": G1

        },
        {
            "id": 5,
            "image": G2

        },
        {
            "id": 6,
            "image": G3

        },
        {
            "id": 7,
            "image": G1

        },
        {
            "id": 8,
            "image": G2

        },
        {
            "id": 9,
            "image": G3

        }, {
            "id": 10,
            "image": G1

        },
        {
            "id": 11,
            "image": G2

        },
        {
            "id": 12,
            "image": G3

        }
    ]
    return (
        <Layout>
            <div className='gallery-container'>
                <div className='gallery-container-div'>
                    <div className='gallery-content-div'>
                        <h1>Gallery</h1>
                        <p>Step into the beauty of Kareng Chapori Eco Camp through our captivating photo gallery.
                            Discover stunning landscapes, eco-friendly accommodations, and unforgettable moments that await your visit.
                            Get inspired for your next adventure with us!</p>
                    </div>
                    <div className='gallery-images-div'>
                        {
                            data?.map((val) => (
                                <div>
                                    <img src={val?.image} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default GalleryPage
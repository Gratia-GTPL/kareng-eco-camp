import React from 'react'
import "./galleryPage.css";
import Layout from '../../components/Layout/Layout'
import img1 from "../../assets/images/img1.jpeg"
import img2 from "../../assets/images/img2.jpeg"
import img3 from "../../assets/images/img3.jpeg"
import img4 from "../../assets/images/img4.jpeg"
import img5 from "../../assets/images/img5.jpeg"
import img6 from "../../assets/images/img6.jpeg"
import img7 from "../../assets/images/img7.jpeg"
import img8 from "../../assets/images/img8.jpeg"
import img9 from "../../assets/images/img9.jpeg"
import img10 from "../../assets/images/img10.jpeg"
import img11 from "../../assets/images/img11.jpeg"
import img12 from "../../assets/images/img12.jpeg"
import img13 from "../../assets/images/img13.jpeg"
import img14 from "../../assets/images/img14.jpeg"
import img15 from "../../assets/images/img15.jpeg"
import img16 from "../../assets/images/img16.jpeg"
import img17 from "../../assets/images/img17.jpeg"
import img18 from "../../assets/images/img18.jpeg"
import img19 from "../../assets/images/img19.jpeg"




const GalleryPage = () => {
    const data = [
        {
            "id": 1,
            "image": img1

        },
        {
            "id": 2,
            "image": img2

        },
        {
            "id": 3,
            "image": img3

        }, {
            "id": 4,
            "image": img4

        },
        {
            "id": 5,
            "image": img5

        },
        {
            "id": 6,
            "image": img6

        },
        {
            "id": 7,
            "image": img7

        },
        {
            "id": 8,
            "image": img8

        },
        {
            "id": 9,
            "image": img9

        }, {
            "id": 10,
            "image": img10

        },
        {
            "id": 11,
            "image": img11

        },
        {
            "id": 12,
            "image": img12

        },
        {
            "id": 13,
            "image": img7

        },
        {
            "id": 14,
            "image": img8

        },
        {
            "id": 15,
            "image": img9

        }, {
            "id": 16,
            "image": img10

        },
        {
            "id": 17,
            "image": img11

        },
        {
            "id": 18,
            "image": img12

        },
        {
            "id": 19,
            "image": img12

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
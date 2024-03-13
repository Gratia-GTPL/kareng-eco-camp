import "./HeaderContent.css";
import camp_img_1 from "./HeaderImages/camp-1.jpg";
import camp_img_2 from "./HeaderImages/camp-2.jpg";
import camp_img_3 from "./HeaderImages/camp-3.jpg";
import camp_img_4 from "./HeaderImages/camp-4.jpg";
const HeaderContent = () => {
    return (
        <div className="d-flex flex-wrap  col-12 justify-content-center gap-2">
            <div className="hero-section-heading-div">
                <h1>Reconnect with <span>Nature</span></h1>
                <h1><span>Recharge</span> Your Soul.</h1>
                <p className="col-12 header-text-des">
                    Discover serenity at Kareng Chapori Eco Camp: Your
                    sustainable escape amidst nature's embrace. Experience
                    eco-friendly lodging, local cuisine, and guided
                    adventures along the Brahmaputra River in Assam,
                    India. Reconnect with the wilderness, rejuvenate your
                    spirit, and leave a lighter footprint on the planet.
                    Welcome to your green getaway.
                </p>
                <button className="header-text-btn">Book Now</button>
            </div>
            {/* <div className="d-flex flex-wrap main-header-text  col-10">
                <div className="d-flex flex-wrap header-text-div col-12">
                    <p className="col-12">Reconnect with Nature</p>
                    <p className="col-12">Recharge Your Soul.</p>
                </div>

                <p className="col-12 header-text-des">
                    Discover serenity at Kareng Chapori Eco Camp: Your
                    sustainable escape amidst nature's embrace. Experience
                    eco-friendly lodging, local cuisine, and guided
                    adventures along the Brahmaputra River in Assam,
                    India. Reconnect with the wilderness, rejuvenate your
                    spirit, and leave a lighter footprint on the planet.
                    Welcome to your green getaway.
                </p>
                <button className="header-text-btn">Book Now</button>
            </div> */}
            {/* <div className="d-flex flex-wrap main-header-img col-md-5 col-10">
                <div className="d-flex col-12 justify-content-center header-img-div">
                    <div className="header-img-div-1">
                        <img src={camp_img_1} className="header-img " alt="camp-1" />
                    </div>
                    <div className="header-img-div-1">
                        <img src={camp_img_2} className="header-img " alt="camp-2" />
                    </div>
                </div>
                <div className="d-flex col-12 justify-content-center header-img-div">
                    <div className="header-img-div-1">
                        <img src={camp_img_3} className="header-img " alt="camp-3" />
                    </div>
                    <div className="header-img-div-1">
                        <img src={camp_img_4} className="header-img " alt="camp-4" />
                    </div>
                </div>
            </div> */}
        </div>
    );
}
export default HeaderContent;
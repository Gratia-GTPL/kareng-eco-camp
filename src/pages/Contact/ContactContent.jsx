import "./ContactContent.css";
import { FaCaretRight } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialGoogle } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";
const ContactContent = () => {
    return (
        <div className="d-flex col-md-3 col-11 flex-wrap justify-content-center main-contact-content">
            <h3 className=" col-11 contact-contetn-h3">Let's get in touch</h3>
            <p className="col-12 contact-icon"><i className="fa-solid fa-caret-left"></i></p>
            <p className="col-11 contact-content-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse recusandae debitis, numquam unde facilis ipsam sapiente voluptates sequi voluptate? Magnam?</p>
            <div className="col-11 d-flex gap-2 contact-content-info">
                <p>
                    <FaAddressCard />
                </p>
                <p>GMHC+CVF, Kareng Chapori PO Mesaki, Sissiborgaon, Assam 786110</p>
            </div>
            <div className="col-11 d-flex gap-2 contact-content-info">
                <p>
                    <MdOutlineEmail />
                </p>
                <p>contact@gmail.com</p>
            </div>
            <div className="col-11 d-flex gap-2 contact-content-info">
                <p>
                    <FaPhoneSquareAlt />
                </p>
                <p>+01 1234567890</p>
            </div>
            <p className="col-11 contact-content-social-p">Contact with us :</p>
            <div className="d-flex flex-wrap gap-2 col-11 justify-content-start contact-content-us">
                <p className="contact-content-social-p" >
                    <TiSocialFacebook />
                </p>
                <p className="contact-content-social-p">
                    <SlSocialGoogle />
                </p>
                <p className="contact-content-social-p">
                    <TiSocialTwitter />
                </p>
            </div>
        </div>
    )
}
export default ContactContent;
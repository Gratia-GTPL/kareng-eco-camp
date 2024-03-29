import "./ContactContent.css";
import { FaCaretRight } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialGoogle } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";
import { FaRegAddressCard } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
const ContactContent = () => {
    return (
        <div className="d-flex col-md-3 col-11 flex-wrap justify-content-center main-contact-content">
            <h3 className=" col-11 contact-contetn-h3">Let's get in touch</h3>
            <p className="col-12 contact-icon"><i className="fa-solid fa-caret-left"></i></p>
            <p className="col-11 contact-content-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse recusandae debitis, numquam unde facilis ipsam sapiente voluptates sequi voluptate? Magnam?</p>
            <div className="col-11 d-flex gap-2 contact-content-info" style={{ lineHeight: '17px' }}>
                <p>
                    <FaRegAddressCard />
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
                    <IoCallOutline />
                </p>
                <p>+91 1234567890</p>
            </div>
            <h6 className="col-11">Contact with us :</h6>
            <div className="d-flex flex-wrap gap-2 col-11 justify-content-start contact-content-us">
                <p className="contact-content-social-p" >
                    <TiSocialFacebook />
                </p>
                <p className="contact-content-social-p">
                    <FaInstagram />
                </p>
                <p className="contact-content-social-p">
                    <TiSocialTwitter />
                </p>
            </div>
        </div>
    )
}
export default ContactContent;
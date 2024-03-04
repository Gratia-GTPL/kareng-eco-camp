import "./ContactForm.css";
const ContactForm = () => {
    return (
        <div className="d-flex col-md-4 col-11 flex-wrap main-contact-form align-content-start justify-content-center">
            <div className="col-11">
                <h1 className="col-12">Contact Us</h1>
            </div>
            <div className="col-11">
                <input type="text" className="contact-form-input col-12" placeholder="Your user name" />
                <input type="email" className="contact-form-input col-12" placeholder="Your email-id" />
                <input type="number" className="contact-form-input col-12" placeholder="Your phone no" />
                <textarea name="" className="contact-form-text col-12" placeholder="Your message for us" ></textarea>
                <button className="contact-form-btn">Send</button>
            </div>
        </div>
    )
}
export default ContactForm;
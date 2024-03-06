import "./ContactForm.css";
const ContactForm = () => {
    return (
        <div className="d-flex col-md-4 col-11 flex-wrap main-contact-form">
            <div className="col-11">
                <div className="col-11">
                    <h1 className="col-12">Contact Us</h1>
                </div>
                <input type="text" className="contact-form-input col-12" placeholder="Full Name" />
                <input type="email" className="contact-form-input col-12" placeholder="Email" />
                <input type="number" className="contact-form-input col-12" placeholder="Phone No." />
                <textarea name="" className="contact-form-text col-12" placeholder="Your Message..." ></textarea>
                <button className="contact-form-btn">Send</button>
            </div>
        </div>
    )
}
export default ContactForm;
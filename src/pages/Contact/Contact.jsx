import Layout from "../../components/Layout/Layout";
import "./Contact.css";
import ContactContent from "./ContactContent";
import ContactForm from "./ContactForm";
import "../../components/UseAssets/rootClass.css";
const Contact = () => {
    return (
        <Layout>
            <div className="d-flex col-12 flex-wrap justify-content-center main-contact">
                <ContactContent />
                <ContactForm />
            </div>
        </Layout>
    );
}
export default Contact;
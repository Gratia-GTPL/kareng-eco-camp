import Layout from "../Layout/Layout";
import Accommodation from "../Accommodation/Accommodation";
import Activities from "../Activities/Activities";
// ---------------- root css file----------------
import "../UseAssets/rootClass.css";
// --------------- header section css file -----------------
import "./HeaderSection.css";
// import Navbar from "./Navbar";
import HeaderContent from "./HeaderContent";
const HeaderSection = () => {
    return (
        <Layout>
            <div className="d-flex flex-wrap main-header">
                {/* -------------------- header content component --------------------- */}
                <HeaderContent />
            </div>
            <div>
                <Accommodation />
                <Activities />
            </div>
        </Layout>
    )
}
export default HeaderSection;
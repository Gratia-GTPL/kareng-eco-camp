// ---------------- root css file----------------
import "../UseAssets/rootClass.css";
// --------------- header section css file -----------------
import "./HeaderSection.css";
import Navbar from "./Navbar";
import HeaderContent from "./HeaderContent";
const HeaderSection = () => {
    return (
        <>
            <div className="d-flex flex-wrap main-header">
                {/* ------------------ navbar component ----------------- */}
                <Navbar />
                {/* -------------------- header content component --------------------- */}
                <HeaderContent />
            </div>
        </>
    )
}
export default HeaderSection;
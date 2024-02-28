import Navbar from "./Navbar";
// ---------------- root css file----------------
import "../UseAssets/rootClass.css";
// --------------- header section css file -----------------
import "./HeaderSection.css";
const HeaderSection = () => {
    return (
        <>
            <div className="d-flex flex-wrap main-header">
                {/* ------------------ navbar component ----------------- */}
                <Navbar />
            </div>
        </>
    )
}
export default HeaderSection;
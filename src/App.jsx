import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import HeaderSection from './components/HeaderSection/HeaderSection';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import ActivitiesPage from './pages/ActivitiesPage/ActivitiesPage';
import AccommodationPage from './pages/AccommodationPage/AccommodationPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact/Contact';
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HeaderSection />} />
          <Route exact path="/gallery" element={<GalleryPage />} />
          <Route exact path="/activities" element={<ActivitiesPage />} />
          <Route exact path="/accommodations" element={<AccommodationPage />} />
          <Route exact path="/contact" element={<Contact />} />
          {/* ----------------- header section component -------------------- */}
        </Routes>
      </Router>
    </>
  )
}

export default App

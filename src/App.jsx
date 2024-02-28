import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import HeaderSection from './components/HeaderSection/HeaderSection';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HeaderSection />} />
          {/* ----------------- header section component -------------------- */}
        </Routes>
      </Router>
    </>
  )
}

export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Home from "./components/Home.jsx";
// import About from "./Components/About";
// import Services from "./Components/Services";
// import NavBar from "./Components/NavBar";
import Contact from "./components/Contact.jsx";
// import Footer from "./Components/Footer";
import './App.css';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  return (
    <div className="App">
      <div id="page-main-container">
        <BrowserRouter>
          <div id="nav-outer-container">
            {/* {<NavBar isMobile={isMobile} />} */}
          </div>
          <div id="page-container">
            
            <Routes>
              <Route exact path="/"
                element={<Home />}
              />
              {/*<Route exact path="/about"
                element={<About />}
              />
              <Route exact path="/services"
                element={<Services />}
              /> */}
              <Route exact path="/contact"
                element={<Contact />}
              />
            </Routes>
          </div>
          <div id="footer-outer-container">
            {/* {<Footer />} */}
          </div>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App;

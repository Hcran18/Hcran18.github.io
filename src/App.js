import React, { useEffect } from "react";
import ReactGA from 'react-ga4';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Pricing from "./Pages/Pricing";
import './App.css';

ReactGA.send('pageview');

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.initialize('G-NB0KBRJ0XQ');
    ReactGA.send('pageview', location.pathname);
  }, [location]);
  
  return (
    <>
      <Navbar />
      <Routes className='Pages'>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer className='footer' />
    </>
  );
}

export default App;


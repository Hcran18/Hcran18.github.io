import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Experience from "./Pages/Experience";
import Contact from "./Pages/Contact";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <Routes className='Pages'>
                <Route index path="/" element={<Home />} />
                {/* <Route path="profile" element={<Profile />} /> */}
                <Route path="/experience" element={<Experience />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
              <Footer className='footer' />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Experience from "./Pages/Experience";
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
              <Routes>
                <Route index path="/" element={<Home />} />
                {/* <Route path="profile" element={<Profile />} /> */}
                <Route path="/experience" element={<Experience />} />
              </Routes>
            </>
          }
        />
      </Routes>
  </Router>
  );
}

export default App;

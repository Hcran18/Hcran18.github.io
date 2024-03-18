import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
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
              </Routes>
            </>
          }
        />
      </Routes>
  </Router>
  );
}

export default App;

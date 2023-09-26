import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import Btech from "./components/Btech";
import Diploma from "./components/Diploma";
import Navbarmenu from "./components/menu/Navbarmenu";

function App() {
  return (
    <div>
      <div>
        <Router>
          {/* Add Menu Component */}
          <Navbarmenu />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Btech" element={<Btech />} />
            <Route path="/Diploma" element={<Diploma />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;

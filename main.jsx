import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import CV from "./CV.jsx"; 
import Kontakt from "./kontakt.jsx"; 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
    </Router>
  </StrictMode>
);

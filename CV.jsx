import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./CV.css";

const CV = () => {
  const cvLink = "https://drive.google.com/uc?export=download&id=1-Myc0k2HboslHft_Z8rgZfcW98vizHFk"; // Podmień na właściwy link

  return (
    <motion.div
      className="cv-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <nav className="navbar">
        <Link to="/" className="nav-link">Strona Główna</Link>
        <Link to="/cv" className="nav-link active">CV</Link>
        <Link to="/kontakt" className="nav-link">Kontakt</Link>
      </nav>
      
      <h1 className="cv-title">Moje CV</h1>
      <p className="cv-info">Poniżej możesz pobrać moje CV.</p>
      
      <motion.a
        href={cvLink}
        download
        className="cv-button"
        whileHover={{ scale: 1.05 }}
      >
        Pobierz CV
      </motion.a>
    </motion.div>
  );
};

export default CV;

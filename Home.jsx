import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.css";
import zdjecie from "./assets/Photo/photo.png";

const Home = () => {
  // Linki do filmów z Google Drive
  const videoUrl1 = "https://drive.google.com/file/d/1kvnMRL743bIwKjQIXClV-5XMPaWi7WPU/preview"; // Projekt 1
  const videoUrl2 = "https://drive.google.com/file/d/1k2IU14cxSmfWIVgay4bAmNoXlUD-e2bn/preview"; // Projekt 2
  const videoUrl3 = "https://drive.google.com/file/d/3LmHiJkABcDeFgNoPqRstUvWxYZxYzUvWq/preview";

  return (
    <motion.div 
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Nagłówek */}
      <header className="header">
        <motion.div className="nav-buttons">
          <Link to="/">
            <motion.button 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.9 }} 
              className="button"
            >
              Mój Profil
            </motion.button>
          </Link>
          <Link to="/cv">
            <motion.button 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.9 }} 
              className="button"
            >
              CV
            </motion.button>
          </Link>
          <Link to="/kontakt">
            <motion.button 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.9 }} 
              className="button"
            >
              Kontakt
            </motion.button>
          </Link>
        </motion.div>
      </header>

      {/* Główna sekcja */}
      <main className="main">
        <motion.div 
          className="content"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <h1 className="title">Cześć, jestem <span className="highlight">Programistą!</span></h1>
          <p className="description">
            Mam doświadczenie w tworzeniu aplikacji webowych oraz mobilnych. 
            Zajmuję się nowoczesnymi technologiami i stale rozwijam swoje umiejętności.
          </p>
        </motion.div>
        <motion.div 
          className="image-container"
          whileHover={{ scale: 1.1 }}
        >
          <img src={zdjecie} alt="Zdjęcie" className="profile-image" />
        </motion.div>
      </main>

      {/* Sekcja projektów */}
      <footer className="footer">
        <h2 className="projects-title">Moje Projekty</h2>
        <div className="projects">
          {[videoUrl1, videoUrl2, videoUrl3].map((video, index) => (
            <motion.div 
              key={index}
              className="project-card"
              whileHover={{ scale: 1.05 }}
            >
              <h3>Projekt {index + 1} - Demo</h3>
              <iframe src={video} width="640" height="360" allow="autoplay" title={`Projekt ${index + 1}`} />
            </motion.div>
          ))}
        </div>
      </footer>
    </motion.div>
  );
};

export default Home;

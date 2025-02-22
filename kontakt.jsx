import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Kontakt.css";

const Kontakt = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <motion.div
      className="kontakt-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
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

      <h1 className="kontakt-title">Skontaktuj się ze mną</h1>
      <p className="kontakt-info">
        Możesz się ze mną skontaktować pod adresem e-mail: <strong>przemekszew2001@gmail.com</strong>
      </p>
      <p className="kontakt-info">Lub wypełnij formularz:</p>

      <motion.form 
        className="kontakt-form" 
        onSubmit={handleSubmit}
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <input 
          type="text" 
          name="name" 
          placeholder="Twoje imię" 
          value={formData.name} 
          onChange={handleChange} 
          required
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Twój e-mail" 
          value={formData.email} 
          onChange={handleChange} 
          required
        />
        <textarea 
          name="message" 
          placeholder="Twoja wiadomość" 
          value={formData.message} 
          onChange={handleChange} 
          required
        ></textarea>
        <motion.button 
          type="submit" 
          className="kontakt-button"
          whileHover={{ scale: 1.05 }}
        >
          Wyślij wiadomość
        </motion.button>
      </motion.form>
      {submitted && <p className="success-message">Dziękuję! Wiadomość została wysłana.</p>}
    </motion.div>
  );
};

export default Kontakt;

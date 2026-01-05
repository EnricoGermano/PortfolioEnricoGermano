/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "rgba(255,255,255,0.75)",
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
        boxSizing: "border-box",
      }}
    >
      {/* Logo/Title */}
      <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>EG</div>

      {/* Hamburger Menu (mobile) */}
      <button
        onClick={toggleMenu}
        style={{
          display: "none",
          background: "none",
          border: "none",
          fontSize: "1.5rem",
          cursor: "pointer",
        }}
        className="hamburger-btn"
      >
        ☰
      </button>

      {/* Navigation links */}
      <nav
        style={{
          display: "flex",
          gap: "2rem",
          justifyContent: "center",
        }}
        className="nav-links"
      >
        <a href="#home">Início</a>
        <a href="#about">Sobre</a>
        <a href="#portfolio">Portfólio</a>
        <a href="#footer">Contato</a>
      </nav>

      <style>{`
        @media (max-width: 600px) {
          .hamburger-btn {
            display: block !important;
          }

          .nav-links {
            display: ${menuOpen ? "flex" : "none"} !important;
            flex-direction: column;
            position: absolute;
            top: 60px;
            left: 0;
            right: 0;
            background: rgba(255, 255, 255, 0.95);
            padding: 1rem;
            gap: 1rem;
            border-bottom: 1px solid #ddd;
          }
        }
      `}</style>
    </div>
  );
};

export default Header;

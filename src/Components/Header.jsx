import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((currentValue) => !currentValue);
  };

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a className="site-brand" href="#home" aria-label="Ir para o início">
          EG
        </a>

        <button
          type="button"
          onClick={toggleMenu}
          className="menu-button"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
        >
          Menu
        </button>

        <nav id="site-navigation" className={`site-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navegação principal">
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Início
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            Perfil
          </a>
          <a href="#curriculum" onClick={() => setMenuOpen(false)}>
            Currículo
          </a>
          <a href="#portfolio" onClick={() => setMenuOpen(false)}>
            Projetos
          </a>
          <a href="#activities" onClick={() => setMenuOpen(false)}>
            Atividades
          </a>
          <a href="#footer" onClick={() => setMenuOpen(false)}>
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

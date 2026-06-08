import React from "react";
import PropTypes from "prop-types";

import homeIllustration from "../images/home-illustration.svg";
import arrowSvg from "../images/down-arrow.svg";

const Home = ({ name, title, objective }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src={homeIllustration} alt="" aria-hidden="true" />
      <div className="home-text">
        <h1>{name}</h1>
        <h2>{title}</h2>
        <p className="hero-objective">{objective}</p>
      </div>
      <div className="home-arrow">
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt="seta apontando para baixo" />
      </div>
    </section>
  );
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  objective: PropTypes.string.isRequired,
};

export default Home;

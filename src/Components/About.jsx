import React from "react";
import PropTypes from "prop-types";

import image from "../images/about-pattern.svg";

const imageAltText = "padrão abstrato verde e azul";

const About = ({ profileText, hardSkills }) => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div className="about-box">
        <h2>Sobre mim</h2>
        <p className="large">{profileText}</p>
        <hr />
        <h3>Competências técnicas</h3>
        <ul className="skills-list">
          {hardSkills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

About.propTypes = {
  profileText: PropTypes.string.isRequired,
  hardSkills: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default About;

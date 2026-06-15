import React from "react";
import PropTypes from "prop-types";

const About = ({ profileText, hardSkills, softSkills }) => {
  return (
    <section className="padding" id="about">
      <div className="about-box">
        <h2>Sobre mim</h2>
        <p className="large">{profileText}</p>
        <hr />
        <h3>Competências técnicas (Hard Skills)</h3>
        <ul className="skills-list">
          {hardSkills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <h3>Competências comportamentais (Soft Skills)</h3>
        <ul className="skills-list">
          {softSkills && softSkills.map((skill) => (
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
  softSkills: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default About;

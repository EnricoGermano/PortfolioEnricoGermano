import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import homeIllustration from "../images/home-illustration.svg";
import PropTypes from "prop-types";

const imageAltText = "seta apontando para baixo";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src={homeIllustration} alt="" aria-hidden="true" />
      <div style={{ position: "absolute", top: "5rem", left: "2rem", width: "17rem" }} className="home-text">
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .home-text {
            top: 7rem !important;
            left: 1rem !important;
            width: auto !important;
          }
        }

        @media (max-width: 600px) {
          .home-text {
            top: 6rem !important;
            left: 0.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;

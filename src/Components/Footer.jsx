import React from "react";
import PropTypes from "prop-types";
import envelopeIcon from "../images/socials/envelope.svg";
import gitHubIcon from "../images/socials/github.svg";
import linkedInIcon from "../images/socials/linkedin.svg";

const Footer = (props) => {
  const { gitHub, linkedIn, email, name, primaryColor } = props;

  return (
    <footer
      id="footer"
      className="site-footer"
      style={{ "--footer-bg": primaryColor }}
    >
      <div className="site-footer-copy">
        <p className="eyebrow" style={{ color: "#cbd5e1" }}>
          Contato
        </p>
        <h2 style={{ color: "white" }}>Vamos conversar</h2>
        <p className="section-copy" style={{ color: "#cbd5e1" }}>
          Perfil acadêmico em evolução, com foco em desenvolvimento web, back-end.
        </p>
      </div>

      <div className="social-links">
        {gitHub && (
          <a href={`https://github.com/${gitHub}`} target="_blank" rel="noopener noreferrer">
            <img src={gitHubIcon} alt="GitHub" className="socialIcon" />
          </a>
        )}
        {email && (
          <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
            <img src={envelopeIcon} alt="Email" className="socialIcon" />
          </a>
        )}
        {linkedIn && (
          <a
            href={`https://www.linkedin.com/in/${linkedIn}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedInIcon} alt="LinkedIn" className="socialIcon" />
          </a>
        )}
      </div>
      <p className="small site-footer-note">
        Criado por {name}
      </p>
    </footer>
  );
};

Footer.propTypes = {
  gitHub: PropTypes.string,
  linkedIn: PropTypes.string,
  name: PropTypes.string.isRequired,
  primaryColor: PropTypes.string,
  email: PropTypes.string,
};

export default Footer;

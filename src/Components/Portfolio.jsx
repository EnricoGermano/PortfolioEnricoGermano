import React from "react";
import PropTypes from "prop-types";

const Portfolio = ({ projects }) => {
  return (
    <section className="padding" id="portfolio">
      <div className="section-heading">
        <p className="eyebrow">Projetos</p>
        <h2>Trabalhos selecionados</h2>
        <p className="section-copy">Projetos que mostram experiência prática em diferentes contextos.</p>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="box project-card" key={project.title}>
            <img className="project-image" src={project.image} alt={project.title} />
            <a href={project.repository} target="_blank" rel="noopener noreferrer">
              <h3>{project.title}</h3>
            </a>
            <p className="small">{project.description}</p>
            <div className="project-section">
              <h4>Problema resolvido</h4>
              <p>{project.problem}</p>
            </div>
            <div className="project-section">
              <h4>Contribuição</h4>
              <p>{project.contribution}</p>
            </div>
            <div className="project-section">
              <h4>Tecnologias utilizadas</h4>
              <ul className="project-tech-list">
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </div>
            <a className="project-link" href={project.repository} target="_blank" rel="noopener noreferrer">
              Ver repositório
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

Portfolio.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      problem: PropTypes.string.isRequired,
      technologies: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      contribution: PropTypes.string.isRequired,
      repository: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Portfolio;

import React from "react";

import portfolioIllustration from "../images/portfolio-illustration.svg";

const imageAltText = "ilustração de portfólio";

const projectList = [
  {
    title: "Plataforma de Gestão Empresarial",
    description:
      "Plataforma de Gestão Integrada para centralizar processos, automatizar tarefas manuais e fornecer dashboards com indicadores-chave, garantindo maior controle e eficiência para a empresa.",
    url: "https://github.com/CodexDSM/CodeX",
  },
  {
    title: "Ferramenta de consulta de dados de exportação/importação",
    description:
      "Aplicação web de consulta e análise dos dados públicos de exportação/importações dos municípios de São Paulo.",
    url: "https://github.com/EnricoGermano/DSM---Projeto-de-API-1-Semestre",
  },
  {
    title: "Plataforma de Gerenciamento de Transporte",
    description: "Solução para gerenciamento de transporte e logística.",
    url: "https://github.com/EnricoGermano/YourTruck",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfólio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem", gap: "2rem" }} className="portfolio-container">
        <div style={{ maxWidth: "40%", alignSelf: "center" }} className="portfolio-image">
          <img
            src={portfolioIllustration}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container portfolio-projects">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .portfolio-container {
            flex-direction: column !important;
            gap: 1rem !important;
          }

          .portfolio-image {
            max-width: 100% !important;
          }

          .portfolio-projects {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Portfolio;

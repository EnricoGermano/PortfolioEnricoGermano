import React from "react";
import image from "../images/about-pattern.svg";

const imageAltText = "padrão abstrato verde e azul";

const description =
  "Sou desenvolvedor Full Stack com foco em aplicações web. Trabalho com Python, React e Node.js, entre outras tecnologias. Atualmente curso DSM na FATEC SJC.";

const skillsList = [
  "Python",
  "React",
  "Node.js",
  "JavaScript",
  "APIs REST",
  "MySQL",
  "Docker",
  "Testes automatizados",
];

const detailOrQuote =
  "Tenho paixão por resolver problemas e entregar soluções escaláveis e com boa experiência de usuário. Busco aprender continuamente e colaborar em projetos que gerem impacto.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>Sobre mim</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;

import React from "react";

import About from "./Components/About";
import Curriculum from "./Components/Curriculum";
import Events from "./Components/Events";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

import projectOneImage from "../projetos/api3semeste.gif";
import projectTwoImage from "../projetos/api2semeste.gif";
import projectThreeImage from "../projetos/api1semestre.gif";

const siteProps = {
  name: "Enrico Germano",
  title: "Desenvolvedor Full Stack",
  objective: "Aprender e crescer como profissional, com foco em desenvolvimento web e back-end.",
  gitHub: "EnricoGermano",
  email: "enricogerano@hotmail.com",
  linkedIn: "enrico-de-chiara-germano-022894204",
};

const primaryColor = "#4E567E";

const profileText =
  "Atuo com desenvolvimento web e back-end, buscando evoluir constantemente na construção de soluções objetivas, organizadas e funcionais. Meu foco está em aprender com cada projeto, colaborar com equipes e transformar problemas em entregas consistentes.";

const hardSkills = ["Python", "Java", "React", "MongoDB", "Node.js", "TypeScript", "JavaScript", "HTML", "CSS", "MySQL"];

const education = [
  {
    institution: "FATEC",
    course: "Tecnólogo em Desenvolvimento de Software Multiplataforma",
    period: "2025/Jan - em andamento",
    location: "Brasil",
    status: "Em andamento",
  },
  {
    institution: "Milestones International College",
    course: "Certificate III in I.C.T. (Tecnologia da Informação e Comunicação)",
    period: "2023/Jun - 2024/Jun",
    location: "Austrália",
    status: "Concluído",
  },
  {
    institution: "Colégio Técnico Opção",
    course: "Ensino Médio e Curso Técnico de T.I.",
    period: "2019/Jan - 2021/Dez",
    location: "Brasil",
    status: "Concluído",
  },
];

const projects = [
  {
    title: "Controle de Apontamento de Horas - GSW",
    description:
      "Plataforma de apontamento de horas que permite aos colaboradores registrar de forma simples o tempo dedicado às tarefas, enquanto os gestores acompanham o esforço aplicado em cada projeto, os custos envolvidos e os valores a faturar.",
    problem:
      "A solução substitui registros dispersos em planilhas, mensagens e anotações, reunindo as informações em um único sistema para facilitar o acompanhamento das atividades.",
    technologies: ["Java", "React", "Node.js", "TypeScript", "JavaScript", "HTML", "CSS", "MySQL"],
    contribution:
      "Atuei no desenvolvimento da API e na integração com o front-end, estruturando endpoints para apontamento de horas, validações de regras de negócio e consultas para acompanhamento gerencial.",
    repository: "https://github.com/Team-Chronos/API-DSM-3SEMESTRE-2026",
    image: projectOneImage,
  },
  {
    title: "Plataforma de Gestão Integrada - Newe Log",
    description:
      "Plataforma web integrada para centralizar processos, automatizar tarefas manuais e disponibilizar dashboards com indicadores-chave, aumentando o controle e a eficiência operacional.",
    problem:
      "A principal dor era a falta de uma ferramenta única, o que impactava a agilidade na tomada de decisão e a eficiência das equipes.",
    technologies: ["React", "JavaScript", "Node.js", "Next.js", "HTML", "CSS", "MySQL"],
    contribution:
      "Atuei como Product Owner, conduzindo levantamento de requisitos, priorização do backlog e alinhamento entre equipe técnica e área de negócio para garantir entregas de maior impacto.",
    repository: "https://github.com/CodexDSM/CodeX",
    image: projectTwoImage,
  },
  {
    title: "Ferramenta de consulta de dados de exportação/importação",
    description:
      "Aplicação web para consulta e análise dos dados públicos de exportação e importação dos municípios de São Paulo.",
    problem:
      "O projeto oferece uma ferramenta para consultas intuitivas e análises comparativas dos dados públicos de importação e exportação.",
    technologies: ["Google Colab", "Python", "AWS", "Pandas", "Plotly", "HTML", "CSS"],
    contribution:
      "Atuei no back-end, com foco na análise e limpeza dos dados no Google Colab, tratamento de inconsistências e criação de scripts para gráficos interativos com Plotly.",
    repository: "https://github.com/Templasan/DSM---Projeto-de-API-1-Semestre",
    image: projectThreeImage,
  },
];

const activities = [
  {
    title: "Maratona de Programação Fatec 2025",
    subtitle: "Competição acadêmica",
    period: "2025",
    description: "6º lugar, com foco em resolução de problemas, lógica e trabalho em equipe.",
  },
  {
    title: "Curso de Inglês Avançado - ICBEU",
    subtitle: "Curso complementar",
    period: "2016/Jan - 2020/Dez",
    description: "Formação em inglês avançado com ênfase em comunicação escrita e oral.",
  },
  {
    title: "Business English - Milestones International College",
    subtitle: "Curso complementar",
    period: "2022/Dez - 2023/Mai",
    description: "Capacitação em inglês para contexto profissional e corporativo.",
  },
  {
    title: "Power Platform Fundamentals - Microsoft",
    subtitle: "Certificação",
    period: "11/06/2025",
    description: "Certificado de fundamentos da Power Platform com foco em soluções low-code.",
  },
  {
    title: "JavaScript - Fundação Bradesco",
    subtitle: "Certificação",
    period: "23/02/2021",
    description: "Certificado de JavaScript com base em lógica, sintaxe e desenvolvimento web.",
  },
];

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} objective={siteProps.objective} />
      <About profileText={profileText} hardSkills={hardSkills} />
      <Curriculum education={education} />
      <Portfolio projects={projects} />
      <Events activities={activities} />
      <Footer {...siteProps} primaryColor={primaryColor} />
    </div>
  );
};

export default App;

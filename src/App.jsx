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

import certBradesco from "url:../projetos/certificados/Certificado_Bradesco_JavaScript.pdf";
import certICBEU from "url:../projetos/certificados/Certificado_ICBEU_English.pdf";
import certMicrosoft from "url:../projetos/certificados/Certificado_Microsoft_PL900.pdf";

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

const softSkills = ["Trabalho em Equipe", "Comunicação", "Liderança", "Organização", "Proatividade", "Resolução de Problemas"];

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
      "Plataforma de apontamento de horas que centraliza o registro de tempo dedicado às tarefas. O sistema permite aos gestores acompanharem o esforço por projeto, incluindo os custos e os faturamentos.",
    problem:
      "A solução elimina o uso de planilhas dispersas e anotações manuais, reunindo todas as informações em um único sistema web para simplificar e agilizar o acompanhamento de atividades.",
    technologies: ["Java", "React", "Node.js", "TypeScript", "JavaScript", "HTML", "CSS", "MySQL"],
    contribution:
      "Atuei no back-end desenvolvendo a API em Java e na integração com o front-end, criando os endpoints de apontamentos e as validações de regras de negócio essenciais para a gerência.",
    repository: "https://github.com/Team-Chronos/API-DSM-3SEMESTRE-2026",
    image: projectOneImage,
    softSkills: "Trabalho em Equipe e Comunicação: Durante a integração, os payloads do front-end causavam falhas no banco. Para resolver, propus uma reunião rápida onde alinhamos a estrutura do JSON. Isso resolveu o problema sem atritos e reduziu o retrabalho de ambos os lados.",
    metodologia: "Scrum",
    desafios: "Integrar uma API complexa em Java com a interface em React e garantir a precisão dos dados recebidos do usuário.",
    resultados: "Redução do tempo gasto com registros manuais e maior clareza visual para a gestão dos custos operacionais do projeto.",
  },
  {
    title: "Plataforma de Gestão Integrada - Newe Log",
    description:
      "Plataforma web integrada para centralizar processos de logística, automatizar tarefas manuais e disponibilizar dashboards interativos com indicadores-chave para eficiência operacional.",
    problem:
      "A principal dor do cliente era a ausência de uma ferramenta única de gestão, o que fragmentava as informações, atrasava a tomada de decisão gerencial e diminuía a eficiência da equipe.",
    technologies: ["React", "JavaScript", "Node.js", "Next.js", "HTML", "CSS", "MySQL"],
    contribution:
      "Atuei como Product Owner, conduzindo levantamentos de requisitos, priorização de backlog e fazendo a ponte de comunicação entre a equipe técnica e a área de negócios para as entregas.",
    repository: "https://github.com/CodexDSM/CodeX",
    image: projectTwoImage,
    softSkills: "Liderança e Organização: Diante de um conflito onde a equipe técnica desejava refatorar o banco de dados e o cliente exigia dashboards, exerci liderança mediando a negociação. Priorizamos o painel e agendamos a refatoração como dívida técnica formalizada.",
    metodologia: "Scrum",
    desafios: "Mediar e equilibrar as demandas de refatoração técnica da equipe de desenvolvimento com a extrema urgência do cliente.",
    resultados: "Criação de indicadores automatizados que melhoraram a eficiência da equipe e trouxeram grande visibilidade ao cliente.",
  },
  {
    title: "Ferramenta de consulta de dados de exportação",
    description:
      "Aplicação web desenvolvida para possibilitar a consulta rápida e a análise interativa dos dados públicos oficiais sobre a exportação e importação de todos os municípios de São Paulo.",
    problem:
      "As bases do governo são complexas e de difícil leitura. O projeto criou uma plataforma amigável que facilita consultas intuitivas e gera análises comparativas dinâmicas dos dados brutos.",
    technologies: ["Google Colab", "Python", "AWS", "Pandas", "Plotly", "HTML", "CSS"],
    contribution:
      "Trabalhei no back-end do projeto, concentrando-me na mineração e limpeza de grandes bases de dados usando Python e Pandas, preparando o terreno para a criação de gráficos interativos.",
    repository: "https://github.com/Templasan/DSM---Projeto-de-API-1-Semestre",
    image: projectThreeImage,
    softSkills: "Resolução de Problemas e Proatividade: A base do governo veio com inconsistências que quebravam nossos gráficos. Tomei a iniciativa de mergulhar no Pandas e desenvolvi algoritmos de limpeza eficientes, aprendendo a quebrar grandes problemas em tarefas testáveis.",
    metodologia: "Scrum",
    desafios: "Lidar com a limpeza e estruturação de dados governamentais que eram altamente irregulares e cheios de anomalias nulas.",
    resultados: "Desenvolvimento de scripts de higienização de dados que permitiram a geração de gráficos complexos totalmente sem bugs.",
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
    link: certICBEU
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
    link: certMicrosoft
  },
  {
    title: "JavaScript - Fundação Bradesco",
    subtitle: "Certificação",
    period: "23/02/2021",
    description: "Certificado de JavaScript com base em lógica, sintaxe e desenvolvimento web.",
    link: certBradesco
  },
];

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} objective={siteProps.objective} />
      <About profileText={profileText} hardSkills={hardSkills} softSkills={softSkills} />
      <Curriculum education={education} />
      <Portfolio projects={projects} />
      <Events activities={activities} />
      <Footer {...siteProps} primaryColor={primaryColor} />
    </div>
  );
};

export default App;

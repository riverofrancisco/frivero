import DevsL from './Images/DevsLearningLanding.png'
import PIH from './Images/PIHome.png'
import QuizL from './Images/QUIZLanding.png'
import JSlogo from './Images/JavaScript.png'
import TSlogo from './Images/Typescript.png'
import REACTlogo from './Images/React.png'
import MUIlogo from './Images/MaterialUI.png'
import REDUXlogo from './Images/Redux.png'
import CSSlogo from './Images/CSS.png'
import HTMLlogo from './Images/HTML.png'
import NODElogo from './Images/NODE.png'
import EXlogo from './Images/Express.png'
import PYlogo from './Images/Python.png'
import ProfilePicture from './Images/ProfilePicture.jpg'
import CUIlogo from './Images/logoCUI.png'

import proactiveDARK from './Images/SkillsDarkTheme/proactiveDARK.png';
import goalDARK from './Images/SkillsDarkTheme/goalDARK.png';
import planningDARK from './Images/SkillsDarkTheme/planningDARK.png';
import empathyDARK from './Images/SkillsDarkTheme/empathyDARK.png';
import speakingDARK from './Images/SkillsDarkTheme/speakingDARK.png';
import teamDARK from './Images/SkillsDarkTheme/teamDARK.png';
import leaderDARK from './Images/SkillsDarkTheme/leaderDARK.png';


export const navItems = [
  "Inicio",
  "Proyectos",
  "Habilidades",
  "Formacion",
  "Contacto",
];



export const ProfileIMG: any = ProfilePicture

export interface Skill {
    name: string,
    image: any,
    imageDark: any
}

export const techSkills: Skill[] = [{
      name: "Javascript",
      image: JSlogo,
      imageDark: JSlogo
    },
    {
      name: "Typescript",
      image: TSlogo,
      imageDark: TSlogo
    },
    {
      name: "React",
      image: REACTlogo,
      imageDark: REACTlogo
    },
    {
      name: "Redux",
      image: REDUXlogo,
      imageDark: REDUXlogo
    },
    {
      name: "Material UI",
      image: MUIlogo,
      imageDark: MUIlogo
    },
    {
      name: "CSS",
      image: CSSlogo,
      imageDark: CSSlogo
    },
    {
      name: "HTML",
      image: HTMLlogo,
      imageDark: HTMLlogo
    },
    {
      name: "Node.js",
      image: NODElogo,
      imageDark: NODElogo
    },
    {
      name: "Express",
      image: EXlogo,
      imageDark: EXlogo
    },
    {
      name: "PostgreSQL",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png",
      imageDark: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"
    },
    {
      name: "Python",
      image: PYlogo,
      imageDark: PYlogo
    }
  ];
  

  export const softSkills : Skill[] = [
        {
          name: "Proactividad",
          image: "https://cdn-icons-png.flaticon.com/512/8510/8510043.png",
          imageDark: proactiveDARK
        },
        {
          name: "Orientación a objetivos",
          image: "https://static.thenounproject.com/png/5930172-200.png",
          imageDark: goalDARK
        },
        {
          name: "Planificación",
          image: "https://static.thenounproject.com/png/2525806-200.png",
          imageDark: planningDARK
        },
        {
          name: "Empatía",
          image: "https://cdn-icons-png.flaticon.com/512/5895/5895798.png",
          imageDark: empathyDARK
        },
        {
          name: "Hablar en público",
          image: "https://static.thenounproject.com/png/1748490-200.png",
          imageDark: speakingDARK
        },
        {
          name: "Trabajo en Equipo",
          image: "https://static.thenounproject.com/png/1347720-200.png",
          imageDark: teamDARK
        },
        {
          name: "Liderazgo",
          image: "https://static.thenounproject.com/png/4145410-200.png",
          imageDark: leaderDARK
        },
       
  ];
  

  export interface Background {
    institution: string,
    image: string,
    degree: string, 
    timePeriod: string,
    description: any,
    link: string,
  }

  const aptitudesHenry = [
    "TypeScript",
    "Node.js",
    "JavaScript",
    "React.js",
    "Redux.js",
    "Express.js",
    "Sequelize.js",
    "PostgreSQL",
    "HTML",
    "Scrum",
    "Planificación de proyectos",
    "Hablar en público",
    "Trabajo en equipo"
  ]

  export const myBackground : Background[] = [
    {    institution: "Henry Bootcamp",
         image: "https://www.soyhenry.com/_next/image?url=https%3A%2F%2Fassets.soyhenry.com%2Fhenry-landing%2Fassets%2FHenry%2Flogo-white.png&w=128&q=75",
         degree: "FullStack Developer", 
         timePeriod: "ago 2022 - mar 2023",
         description: aptitudesHenry,
         link: "https://www.soyhenry.com/"
        },
    {    institution: "Universidad de Buenos Aires",
         image: "https://exactas.uba.ar/wp-content/uploads/2022/08/logo-2022.png",
         degree: "Licenciatura en Ciencias Físicas", 
         timePeriod: "ago 2020 - jul 2022",
         description: ["20% completo", "Promedio 6.86/10"],
         link: "https://exactas.uba.ar/"
        },  
    {    institution: "Centro Universitario de Idiomas",
        image: CUIlogo,
        degree: "Inglés", 
        timePeriod: "mar 2019 - jul 2023",
        description: ["Nivel C1"],
        link: "https://cui.edu.ar/"
       },  
  ]

  export interface Project {
    name: string,
    period: string,
    image: any,
    link: string,
    description: string,
    video: string,
    tech: any,
  }

  export const Projects : Project[] = [
    {
      name: "Devs Learning",
      period: "ene. 2023 - mar. 2023",
      image: DevsL,
      link: "https://devslearning.vercel.app/",
      video: "https://www.youtube.com/watch?v=ZU7n8LiP5OE&t=201s",
      description: "Junto con 7 compañeros, aplicando la metodología ágil de SCRUM, desarrollamos la plataforma responsive de venta de cursos online Devs Learning. Para el mismo utilizamos tecnologías como Typescript, React, Redux Toolkits, Material UI, PostgreSQL, Sequelize, Node, Express, Firebase, Checkbox Mercadopago, entre otras.",
      tech: ["Typescript", "React", "Redux Toolkits", "Material UI", "CSS", "HTML", "Express", "Node", "Checkbox Mercadopago", "Firebase", "PostgreSQL", "Sequelize"]
    },
    {
      name: "Food App",
      period: "dic. 2022 - ene. 2023",
      image: PIH,
      link: "https://food-individualproyect.vercel.app/",
      video: "https://www.youtube.com/watch?v=Du9Dp3LO-Vk",
      description: "Aplicación que muestra, filtra, busca y ordena un catalogo de recetas. Para el desarrollo de la misma utilicé las tecnologías de Javascript, React, Redux, HTML y CSS puro para el front-end y la UI; y Node, Express, Sequelize y PostgreSQL para el back-end y base de datos.",
      tech: ["Javascript", "React", "Redux", "CSS", "HTML", "Express", "Node", "PostgreSQL", "Sequelize"]
    },
    {
      name: "Quiz Demo",
      period: "Sep. 2023",
      image: QuizL,
      link: "https://frivero-quiz-demo.vercel.app/",
      video: "https://frivero-quiz-demo.vercel.app/",
      description: "AppWeb responsive que modela un perfil de usuario con acceso a un quiz por categorias. Suma puntajes y devuelve al finalizar las preguntas el puntaje alcanzado.",
      tech: ["Typescript", "React", "Redux", "CSS", "HTML", "Material UI", "Node"]
    },
  
  ]
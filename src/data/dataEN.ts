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
  "Home",
  "Projects",
  "Skills",
  "Background",
  "Contact",
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
          name: "Proactive",
          image: "https://cdn-icons-png.flaticon.com/512/8510/8510043.png",
          imageDark: proactiveDARK
        },
        {
          name: "Goal Achievement",
          image: "https://static.thenounproject.com/png/5930172-200.png",
          imageDark: goalDARK
        },
        {
          name: "Planning",
          image: "https://static.thenounproject.com/png/2525806-200.png",
          imageDark: planningDARK
        },
        {
          name: "Empathy",
          image: "https://cdn-icons-png.flaticon.com/512/5895/5895798.png",
          imageDark: empathyDARK
        },
        {
          name: "Public speaking",
          image: "https://static.thenounproject.com/png/1748490-200.png",
          imageDark: speakingDARK
        },
        {
          name: "Team player",
          image: "https://static.thenounproject.com/png/1347720-200.png",
          imageDark: teamDARK
        },
        {
          name: "Leadership",
          image: "https://static.thenounproject.com/png/4145410-200.png",
          imageDark: leaderDARK
        }
       
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
    "Planning",
    "Public Speaking",
    "Team Player"
  ]

  export const myBackground : Background[] = [
    {    institution: "Henry Bootcamp",
         image: "https://www.soyhenry.com/_next/image?url=https%3A%2F%2Fassets.soyhenry.com%2Fhenry-landing%2Fassets%2FHenry%2Flogo-white.png&w=128&q=75",
         degree: "FullStack Developer", 
         timePeriod: "aug 2022 - mar 2023",
         description: aptitudesHenry,
         link: "https://www.soyhenry.com/"
        },
    {    institution: "University of Buenos Aires",
         image: "https://exactas.uba.ar/wp-content/uploads/2022/08/logo-2022.png",
         degree: "Degree in Physics", 
         timePeriod: "aug 2020 - jul 2022",
         description: ["20% complete","Average mark 6,86/10"],
         link: "https://exactas.uba.ar/"
        },  
    {    institution: "University Language Center",
        image: CUIlogo,
        degree: "English", 
        timePeriod: "mar 2019 - jul 2023",
        description: ["C1 Level"],
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
      period: "jan. 2023 - mar. 2023",
      image: DevsL,
      link: "https://devslearning.vercel.app/",
      video: "https://www.youtube.com/watch?v=ZU7n8LiP5OE&t=201s",
      description: 'E-commerce App of online courses which includes: authentication, searches, combined filtering, ordering, banning users, email submissions, controlled forms, online purchases, shopping cart system, user and administrator profile, among other functions.',
      tech: ["Typescript", "React", "Redux Toolkits", "Material UI", "CSS", "HTML", "Express", "Node", "Checkbox Mercadopago", "Firebase", "PostgreSQL", "Sequelize"]
    },
    {
      name: "Food App",
      period: "dec. 2022 - jan. 2023",
      image: PIH,
      link: "https://food-individualproyect.vercel.app/",
      video: "https://www.youtube.com/watch?v=Du9Dp3LO-Vk",
      description: "Design and development of a recipes App which includes searching, combined filtering, ordering, controlled forms, among other functions. Project developed individually.",
      tech: ["Javascript", "React", "Redux", "CSS", "HTML", "Express", "Node", "PostgreSQL", "Sequelize"]
    },
    {
      name: "Quiz Demo",
      period: "Sep. 2023",
      image: QuizL,
      link: "https://frivero-quiz-demo.vercel.app/",
      video: "https://frivero-quiz-demo.vercel.app/",
      description: "Responsive AppWeb that models a user profile with access to a quiz by categories. Add scores and return the score achieved at the end of the questions.",
      tech: ["Typescript", "React", "Redux", "CSS", "HTML", "Material UI", "Node"]
    },
  
  ]
import { Skill, Project, Background } from "../interfaces/interfaces";

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

export const AllSkills: Skill[] = [
        {
          name: { en: "JavaScript", es: "JavaScript" },
          type: "tech",
          imageLight: JSlogo,
          imageDark: JSlogo,
        },
        {
          name: { en: "TypeScript", es: "TypeScript" },
          type: "tech",
          imageLight: TSlogo,
          imageDark: TSlogo,
        },
        {
          name: { en: "React", es: "React" },
          type: "tech",
          imageLight: REACTlogo,
          imageDark: REACTlogo,
        },
        {
          name: { en: "Redux", es: "Redux" },
          type: "tech",
          imageLight: REDUXlogo,
          imageDark: REDUXlogo,
        },
        {
          name: { en: "Material UI", es: "Material UI" },
          type: "tech",
          imageLight: MUIlogo,
          imageDark: MUIlogo,
        },
        {
          name: { en: "CSS", es: "CSS" },
          type: "tech",
          imageLight: CSSlogo,
          imageDark: CSSlogo,
        },
        {
          name: { en: "HTML", es: "HTML" },
          type: "tech",
          imageLight: HTMLlogo,
          imageDark: HTMLlogo,
        },
        {
          name: { en: "Node.js", es: "Node.js" },
          type: "tech",
          imageLight: NODElogo,
          imageDark: NODElogo,
        },
        {
          name: { en: "Express", es: "Express" },
          type: "tech",
          imageLight: EXlogo,
          imageDark: EXlogo
        },
        {
          name: { en: "PostgreSQL", es: "PostgreSQL" },
          type: "tech",
          imageLight: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png",
          imageDark: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png",
        },
        {
          name: { en: "Python", es: "Python" },
          type: "tech",
          imageLight: PYlogo,
          imageDark: PYlogo,
        },  {
            name: { en: "Proactive", es: "Proactividad" },
            type: "soft",
            imageLight: "https://cdn-icons-png.flaticon.com/512/8510/8510043.png",
            imageDark: proactiveDARK,
          },
          {
            name: { en: "Goal Achievement", es: "Orientación a objetivos" },
            type: "soft",
            imageLight: "https://static.thenounproject.com/png/5930172-200.png",
            imageDark: goalDARK,
          },
          {
            name: { en: "Planning", es: "Planificación" },
            type: "soft",
            imageLight: "https://static.thenounproject.com/png/2525806-200.png",
            imageDark: planningDARK,
          },
          {
            name: { en: "Empathy", es: "Empatía" },
            type: "soft",
            imageLight: "https://cdn-icons-png.flaticon.com/512/5895/5895798.png",
            imageDark: empathyDARK,
          },
          {
            name: { en: "Public speaking", es: "Hablar en público" },
            type: "soft",
            imageLight: "https://static.thenounproject.com/png/1748490-200.png",
            imageDark: speakingDARK,
          },
          {
            name: { en: "Team player", es: "Trabajo en Equipo" },
            type: "soft",
            imageLight: "https://static.thenounproject.com/png/1347720-200.png",
            imageDark: teamDARK,
          },
          {
            name: { en: "Leadership", es: "Liderazgo" },
            type: "soft",
            imageLight: "https://static.thenounproject.com/png/4145410-200.png",
            imageDark: leaderDARK,
          },
  
      
]

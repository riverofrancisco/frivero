import { createSlice } from "@reduxjs/toolkit";
import { PaletteMode } from '@mui/material';
import { Background, Skill, Project, emptyBackground, emptyProject, emptySkill } from "../../interfaces/interfaces";

interface InitialState {
    visits: number,
    status: string,
    projects: {
        selected: Project,
        list: Project[]
    },
    background: {
        selected: Background,
        list: Background[]
    },
    skills: {
        selected: Skill,
        list: Skill[]
    },
    mode: PaletteMode,
    language: string,
    isAuth: boolean
}

const initialState: InitialState = {
visits: 0,
status: "ok",
mode: "dark",
language: "en",
projects: {
    selected: emptyProject,
    list:[],
},
background: {
    selected: emptyBackground,
    list: []
},
skills: {
    selected:emptySkill,
    list: []
},
isAuth: false
}

export const global = createSlice({
    name: "global",
initialState,
reducers: {
    valueAdder: (state, {payload}) => {
        state.visits = state.visits + payload
    },
    changeStatus: (state, {payload}) => {
        if(state.status === "ok"){
            state.status = "loading"
        } else if(state.status === "loading")
        state.status = "ok"
    },
    changeMode: (state) => {
        if(state.mode === "light"){
            state.mode = "dark"
        } else if(state.mode === "dark")
        state.mode = "light"
    },
    changeLanguage: (state) => {
        if(state.language === "en"){
            state.language = "es"
        } else if(state.language === "es")
        state.language = "en"
    },
    skillsListUpdate: (state, {payload}) => {
        state.skills.list = payload
    },
    selectedSkill: (state, {payload}) => {
        state.skills.selected = payload
    },
    projectsListUpdate: (state, {payload}) => {
        state.projects.list = payload
    },
    selectedProject: (state, {payload}) => {
        state.projects.selected = payload
    },
    setIsAuth: (state, {payload}) => {
        state.isAuth = payload
    },
    backgroundListUpdate: (state, {payload}) => {
        state.background.list = payload
    },
    selectedBG: (state, {payload}) => {
        state.background.selected = payload
    }
}

})

export const reducer = global.actions;
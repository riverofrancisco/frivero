export interface Languages {
    en: string,
    es: string
};

export const emptyLanguages : Languages = {
    en: "",
    es: ""
};

export interface SortableItem {
    id: number,
    name: string
};

export interface Skill {
    name: Languages,
    type: "soft" | "tech" | "tool",
    imageLight: string,
    imageDark: string,
    [key: string]: any;
};

export const emptySkill: Skill = {
    name: emptyLanguages,
    type: "tech",
    imageLight: "",
    imageDark: "",
}

export interface Project {
    name: Languages,
    period: Languages,
    image: string,
    link: string,
    description: Languages,
    video: string,
    tech: {
        en: SortableItem[],
        es: SortableItem[]},
    [key: string]: any;
}

export const emptyProject: Project = {
    name: emptyLanguages,
    period: emptyLanguages,
    image: "",
    link: "",
    description: emptyLanguages,
    video: "",
    tech: {en: [], es: []},
}

export interface Background {
    institution: Languages,
    image: string,
    certificate: string,
    degree: Languages, 
    timePeriod: Languages,
    description: {
        en: SortableItem[],
        es: SortableItem[]},
    link: string,
    [key: string]: any;
}

export const emptyBackground: Background = {
    institution: emptyLanguages,
    image: "",
    degree: emptyLanguages, 
    timePeriod: emptyLanguages,
    description: {en: [], es: []},
    link: "",
    certificate: ""
}

export interface Contact {
    name: string,
    lastName: string,
    location: string, 
    email: string,
    [key: string]: any;

}
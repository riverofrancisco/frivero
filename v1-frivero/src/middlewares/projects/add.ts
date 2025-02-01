import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../config/firebase";
import { Project } from "../../interfaces/interfaces";

export const addProject = async (project: Project) => {
    try{
        await addDoc(collection(db, "projects"), {
            ...project
             })
        console.log(`Project ${project.name.en} added Succesfully`)
    } catch(error) {
        console.log(error)
    }

}

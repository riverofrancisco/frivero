import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../../config/firebase";
import { Project } from "../../interfaces/interfaces";


export const setProject = async (id: string, project: any) => {
    await setDoc(doc(db, "projects", id), {
...project
      });
      console.log(`Project ${project.name.en} updated succesfully.`)
}
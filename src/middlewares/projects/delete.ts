import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../config/firebase";


export const deleteProject = async (id: string) => {
   try{
    await deleteDoc(doc(db, "projects", id));
    console.log("Project deleted Succesfully")
   }catch(error){
    console.log({Error: error})
   }
}
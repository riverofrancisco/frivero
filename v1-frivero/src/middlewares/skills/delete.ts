import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../config/firebase";


export const deleteSkill = async (id: string) => {
   try{
    await deleteDoc(doc(db, "skills", id));
    console.log("Skill deleted Succesfully")
   }catch(error){
    console.log({Error: error})
   }
}
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../config/firebase";


export const deleteBackground = async (id: string) => {
   try{
    await deleteDoc(doc(db, "background", id));
    console.log("Background Item deleted Succesfully")
   }catch(error){
    console.log({Error: error})
   }
}
import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../../config/firebase";
import { Background } from "../../interfaces/interfaces";


export const setBackground = async (id: string, bgitem: any) => {
    await setDoc(doc(db, "background", id), {
...bgitem
      });
      console.log(`BackGround ${bgitem.name.en} updated succesfully.`)
}
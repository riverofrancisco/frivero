import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../config/firebase";
import { Background } from "../../interfaces/interfaces";

export const addBackground = async (bgitem: Background) => {
    try{
        await addDoc(collection(db, "background"), {
            ...bgitem
             })
        console.log(`Background ${bgitem.name.en} added Succesfully`)
    } catch(error) {
        console.log(error)
    }

}

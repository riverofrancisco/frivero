import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../config/firebase";
import { Skill } from "../../interfaces/interfaces";

export const addSkill = async (skill: Skill) => {
    try{
        await addDoc(collection(db, "skills"), {
            ...skill
             })
        console.log(`Skill ${skill.name.en} added Succesfully`)
    } catch(error) {
        console.log(error)
    }

}

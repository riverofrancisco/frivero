import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../../config/firebase";
import { Skill } from "../../interfaces/interfaces";


export const setSkill = async (id: string, skill: any) => {
    await setDoc(doc(db, "skills", id), {
...skill
      });
      console.log(`Skill ${skill.name.en} updated succesfully.`)
}
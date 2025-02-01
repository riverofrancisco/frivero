import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";


export const getSkills = async () => {
    const querySnapshot = await getDocs(collection(db, "skills"));
    const myData = querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})
    );
    return myData
}
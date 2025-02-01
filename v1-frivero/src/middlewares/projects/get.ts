import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";

export const getProjects = async () => {
  const querySnapshot = await getDocs(collection(db, "projects"));
  const myData = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return myData;
};

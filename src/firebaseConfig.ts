import { initializeApp } from "firebase/app";
import {getFirestore, getDocs, addDoc,collection} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBM7MOyoSUmSkRCHOFqk5tVGCGtHjKHPqk",
  authDomain: "sphere-3b8a9.firebaseapp.com",
  projectId: "sphere-3b8a9",
  storageBucket: "sphere-3b8a9.appspot.com",
  messagingSenderId: "1063773883036",
  appId: "1:1063773883036:web:432e3837d153391335fb59"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export const sendData = async (nameVar:string, letterVar:string, colorVar:string) => {
    try{
      const info = {
        name:nameVar,
        letter:letterVar,
        color:colorVar,
      }

      const where = collection(db,"tasks")
      await addDoc(where,info)
    }
    catch{}
}

export const getInfo = async () => {
    try{
      const where = collection(db,"tasks")
      const getGet = await getDocs(where)

      const array:any = []

      getGet.forEach((element)=>
        array.push(element)
      );

      return array
    }
    catch{}
}
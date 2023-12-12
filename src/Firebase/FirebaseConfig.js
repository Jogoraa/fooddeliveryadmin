// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
       apiKey: "AIzaSyCSPxptSrqkhb4RH-q-THO18cBfiY5ekfw",
  authDomain: "hu-eats-2f662.firebaseapp.com",
  projectId: "hu-eats-2f662",
  storageBucket: "hu-eats-2f662.appspot.com",
  messagingSenderId: "175497629710",
  appId: "1:175497629710:web:622f69ffaa7deb49afec5f",
  measurementId: "G-QFK8YTQLP9"}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);


export { storage, db };

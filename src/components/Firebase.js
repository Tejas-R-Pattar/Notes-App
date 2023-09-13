// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyBG0Y00xMKU-v2csnToTvl3QeqGToVHEAI",
  authDomain: "notes-app-22e03.firebaseapp.com",
  projectId: "notes-app-22e03",
  storageBucket: "notes-app-22e03.appspot.com",
  messagingSenderId: "1094573115722",
  appId: "1:1094573115722:web:2d81ab8482941a56de59b3",
  measurementId: "G-L17EHDHRC4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider=new GoogleAuthProvider();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// console.log(import.meta.env.VITE_apiKey)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.VITE_appId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// apiKey: "AIzaSyA6Yfbv4_NELKrX_XvAydjTWo7Q2PKko68",
//   authDomain: "chatapp-ccd90.firebaseapp.com",
//   projectId: "chatapp-ccd90",
//   storageBucket: "chatapp-ccd90.appspot.com",
//   messagingSenderId: "33739634177",
//   appId: "1:33739634177:web:69f6bc80438b430786f200"
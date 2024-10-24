// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-38b25.firebaseapp.com",
  projectId: "mern-estate-38b25",
  storageBucket: "mern-estate-38b25.appspot.com",
  messagingSenderId: "1087020825572",
  appId: "1:1087020825572:web:cb806fbd14433acba125f1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

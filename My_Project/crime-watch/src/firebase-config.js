// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "crime-watch-1ee7d.firebaseapp.com",
  projectId: "crime-watch-1ee7d",
  storageBucket: "crime-watch-1ee7d.appspot.com",
  messagingSenderId: "134240363851",
  appId: "1:134240363851:web:e53bd4d0fc8eff6a18f4ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
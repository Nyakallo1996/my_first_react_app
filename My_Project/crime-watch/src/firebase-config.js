// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVQXi40UQe1S9JyyNUjTAcg41edjXCt7E",
  authDomain: "crime-watch-2bd95.firebaseapp.com",
  projectId: "crime-watch-2bd95",
  storageBucket: "crime-watch-2bd95.appspot.com",
  messagingSenderId: "543580262956",
  appId: "1:543580262956:web:e5012ddcaf572c9ad57789"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app);
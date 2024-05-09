import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyArATWTN6H662aQb9R2WkikjAlv932Rlwo",
  authDomain: "myreactapp-12cad.firebaseapp.com",
  projectId: "myreactapp-12cad",
  storageBucket: "myreactapp-12cad.appspot.com",
  messagingSenderId: "414711721599",
  appId: "1:414711721599:web:3bdd18ab866df177b8994a"
}; 
  
  firebase.initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

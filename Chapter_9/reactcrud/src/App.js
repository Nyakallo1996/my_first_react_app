//import logo from "./logo.svg";
//import "./App.css";
import React, { Component } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import User from "./User";

class App extends Component {
  constructor() {
    super();
    console.log(firebase);
  }
  render() {
    return (
      <div>
        <User />
      </div>
    );
  }
}

export default App;

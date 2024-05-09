//import logo from "./logo.svg";
//import "./App.css";
import React, { Component } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import User from "./User";
import "bootstrap/dist/css/bootstrap.min.css";
import UserForm from './UserForm';
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    console.log(firebase);
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/edit/:id" component={UserForm} />
              <Route path="/add" component={UserForm} />
              <Route exact path="/" component={User} />
              <Route path="/*" component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;

class NotFound extends Component { 
  render(){ 
  return <div>Not Found</div> 
  } 
  }

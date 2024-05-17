import React from "react";
import Products from "./Products";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Rating from "./Rating";
import JumbotronComponent from "./JumbotronComponent";
import UserForm from "./UserForm";

const formatName = (user) => {
  return user.firstName + " " + user.lastName;
};

const App = () => {
  const user = {
    firstName: "Greg",
    lastName: "Lim",
  };

  return (
    <div className="App">
      <UserForm />
      
    </div>
  );
};

export default App;

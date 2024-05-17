import React from "react";
import Products from "./Products";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Rating from "./Rating";
import JumbotronComponent from "./JumbotronComponent";

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
      <JumbotronComponent>
        This is a long sentence, and I want to insert content into the jumbotron
        component from the outside.
      </JumbotronComponent>
    </div>
  );
};

export default App;

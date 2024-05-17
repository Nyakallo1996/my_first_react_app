import React from "react";
import Products from "./Products";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Rating from "./Rating";

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
      <h1>Hello, {formatName(user)}</h1>
      <Products />
      <Rating rating="1" />
      <Rating rating="2" />
      <Rating rating="3" />
      <Rating rating="4" />
      <Rating rating="5" />
      <Button variant="primary" disabled>
        Default
      </Button>
    </div>
  );
};

export default App;

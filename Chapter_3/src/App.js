import React, { Component } from "react";
import Products from "./Products";
import { Button } from "react-bootstrap";
import Rating from "./Rating";

class App extends Component {
  render() {
    return (
      <div>
        <h1>
          My first react app!
          <Products />
          <Button variant="outline-danger">Default</Button>
          <div>
            <Rating rating="1" />
            <Rating rating="2" />
            <Rating rating="3" />
            <Rating rating="4" />
            <Rating rating="5" />
          </div>
        </h1>
      </div>
    );
  }
}

export default App;

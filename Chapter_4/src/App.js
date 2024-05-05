import React, { Component } from "react";
import Products from "./Products";
import { Button } from "react-bootstrap";
import Rating from "./Rating";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Products />
        <Button variant="outline-danger">Default</Button>
      </div>
    );
  }
}

export default App;

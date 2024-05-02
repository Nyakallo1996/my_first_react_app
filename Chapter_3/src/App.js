import React, { Component } from 'react'; 
import Products from "./Products";
import { Button } from 'react-bootstrap'; 

class App extends Component{
  render() {

    return <div>
      <h1>
        My first react app!
        <Products />
        <Button variant='danger'>Default</Button>
      </h1>
    </div>;
  }
    
  
}

export default App;

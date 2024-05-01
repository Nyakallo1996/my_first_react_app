import React, { Component } from 'react'; 
import Products from "./Products";

class App extends Component{
  render() {
    return <div>
      <h1>
        My first react app!
        <Products />
      </h1>
    </div>;
  }
    
  
}

export default App;

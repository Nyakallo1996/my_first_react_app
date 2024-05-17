import React from "react";
import Products from "./Products";

const formatName = (user) => {
  return user.firstName + " " + user.lastName;
}

const App = () => {

const user = { 
firstName:'Greg', 
lastName:'Lim',
};

  return (
    <div className="App">
      <h1>
      Hello, {formatName(user)} 
      </h1>
      <Products />
    </div>
  );
}

export default App;

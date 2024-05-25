import { useState } from "react";
import Basket from "./components/Basket";
import Header from "./components/Header";
import Main from "./components/Main";
import data from "./data";


function App() {

  const [cartItems, setCartItems] = useState([]);
  const {products} = data;
  const onAdd = (product) => {

  }
  
  const onRemove = (product) => {

  }

  return (
    <div>
      <Header />
      <div className="row">
         <Main onAdd = {onAdd} onRemove = {onRemove} products = {products}/>
         <Basket />
      </div>
    </div>
  );
}

export default App;

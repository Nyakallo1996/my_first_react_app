import { useState } from "react";
import Basket from "./components/Basket";
import Header from "./components/Header";
import Main from "./components/Main";
import data from "./data";

function App() {

 const [cartItems, setCartItems] = useState([]);

  const{products} = data;//getting products from data.js
  
  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if (exist) {
      const newCartItems = cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty + 1} : x);
    }
  }

  const onRemove = (product) => {

  }

  return (
    <div>
      <Header />
      <div className="row">
        <Main onAdd={onAdd} onRemove={onRemove} products = {products}/> {/*passing products from data.js to Main.js*/}
        <Basket />
      </div>
    </div>
  );
}

export default App;

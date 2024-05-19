import React, {useContext} from 'react';
import './App.css';
import { UserContext } from './index';

function App() {
  const value = useContext(UserContext)
  return (
    <div className="App">
      
        Received, {value}
      
    </div>
  );
}

export default App;

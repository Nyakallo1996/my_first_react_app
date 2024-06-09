import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import { useState } from "react";
import { signOut } from "firebase/auth";

import {auth} from "./firebase-config";


function App() {

  const [isAuth, setIsAuth] = useState(false);

 

  const signUserOut = () => {
     signOut(auth).then (() => {
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname= "/Login";
      
     });
  };

  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Home</Link>
          
          {!isAuth ? (
            <Link to="/Login">Login</Link>
            ) : (
              <>
            <Link to="/Createpost">Create</Link>  
            <button onClick={signUserOut}>LogOut</button>
            </>
            )}
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Createpost" element={<CreatePost/>}/>
          <Route path="/Login" element={<Login setIsAuth={setIsAuth}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

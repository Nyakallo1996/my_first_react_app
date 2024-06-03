import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import { signOut } from 'firebase/auth';
import './index.css';
import { auth } from './firebase-config';


const App = () => {
  
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

 
//Creating my logout function
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname = "/Login";
    })
  }

  return (
    <div className="App">
      <div>
        <Router>
          <nav>
            <h1>Crime Watch</h1>
            <Link to="/"> Home </Link>
            
            {!isAuth ? (
            <Link to="/Login"> Login </Link>
            ) : (
              <>
            <Link to="/CreatePost"> Create Post </Link>
            <button onClick={signUserOut}> LogOut </button>
             </>
            )}
          </nav>
          <Routes>
            <Route path='/' element={<Home isAuth={isAuth}/>} />
            <Route path='/CreatePost' element={<CreatePost/>} isAuth={isAuth}/>
            <Route path="/Login" element={<Login setIsAuth={setIsAuth}/>} />
          </Routes>
        </Router>
      </div>
     
    </div>
  );
};

export default App;

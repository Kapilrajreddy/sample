import React from 'react'
import Customer from './Components/CustomerSignUp/index.js'
import Login from './Components/Login/index.js'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    
    <BrowserRouter> 
       <Routes>  
        <Route path="/" element={<Login/>}></Route>             
        <Route path="signup" element={<Customer/>}></Route>     
       </Routes>    
    </BrowserRouter>
  );
}

export default App;

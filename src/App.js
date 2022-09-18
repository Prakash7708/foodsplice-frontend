import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Adminhome from "./Admin/Adminhome";
import Register from "./Login/Register";
import Userlogin from "./Login/Userlogin";
import Dashboard from "./Users/Dashboard";
import Home from './Users/Home'
import Hotelhome from "./Users/Hotelhome";
import Orders from "./Users/Orders";
function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Home/>} />    
    <Route path="/dashboard/:id" element={<Dashboard/>} />
    <Route path="/hotel/:id" element={<Hotelhome/>} />
    <Route path="/admin" element={<Adminhome/>} />
    <Route path="/login" element={<Userlogin/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/orders" element={<Orders/>} /> 

    </Routes>
  </BrowserRouter>
  );
}

export default App;

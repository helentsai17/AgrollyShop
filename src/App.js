import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Navbar from "./components/navbar"
import farmerLogin from "./components/farmer/farmer.login"
import homePage from './components/homepage'
import cropSell from './components/farmer/ShoppingPages/CropSell'
import cropCreate from "./components/farmer/ShoppingPages/CreateSell"
import farmerProfile from './components/farmer/FarmerProfile'

function App() {
  return (
    <div>
      
      <Router >
      <Navbar/>
      <Route path ="/" exact component = {homePage} />
      <Route path ="/farmer/login" exact component = {farmerLogin} />
      <Route path ="/farmer/cropSell" exact component = {cropSell} />
      <Route path ="/farmer/cropCreate" exact component = {cropCreate} />
      <Route path ="/farmer/profile" exact component = {farmerProfile} />
     
     
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Navbar from "./components/navbar"
import farmerLogin from "./components/farmer/farmer.login"
import register from "./components/farmer/register"
import homePage from './components/homePage/homepageOld'
import cropSell from './components/farmer/ShoppingPages/CropSell'
import cropCreate from "./components/farmer/ShoppingPages/CreateSell"
import farmerProfile from './components/farmer/FarmerProfile'
import shopper from './components/shopper/Shopping'
import OneTimePassword from './components/farmer/OneTimePassword'

function App() {
  return (
    <div>
      
      <Router >
      <Navbar/>
      <Route path ="/" exact component = {homePage} />
      <Route path ="/shop" exact component = {shopper} />
      <Route path ="/register" exact component = {register} />
      <Route path ="/farmer/login" exact component = {farmerLogin} />
      <Route path ="/farmer/cropSell" exact component = {cropSell} />
      <Route path ="/farmer/cropCreate" exact component = {cropCreate} />
      <Route path ="/farmer/profile" exact component = {farmerProfile} />
      <Route path ="/farmer/onetimepassword" exact component = {OneTimePassword} />
     
      </Router>
    </div>
  );
}

export default App;

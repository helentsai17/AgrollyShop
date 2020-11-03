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
import technology from './components/aboutPage/technology'
import forgetPassword from './components/farmer/forgetPassword'
import resetPassword from './components/farmer/resetPassword'
import profileEdit from './components/farmer/editProfile'
import Allforum from './components/forum/displaychat'
import joinchat from './components/forum/joinOneChat'
import askquestion from './components/forum/askquestion/askquestion'
import MyQuestionList from './components/forum/myquestion'
import editquestion from './components/forum/editquestion';
import annaulweather from './components/weatherPage/annualpage'
import weeklyweather from './components/weatherPage/weeklyweather'
import hourlyweather from './components/weatherPage/hourlyweather'
import riskpage from './components/riskManagement/riskpage'
import requiresearch from './components/riskManagement/requireSearch'


function App() {
  return (
    <div>
      
      <Router >
      <Navbar/>
      <Route path ="/" exact component = {homePage} />
      <Route path ="/shop" exact component = {shopper} />
      <Route path ="/register" exact component = {register} />
      <Route path ="/farmer/login" exact component = {farmerLogin} />
      <Route path ="/farmer/forgetpassword" exact component = {forgetPassword} />
      <Route path ="/farmer/resetpassword" component = {resetPassword}/>
      <Route path ="/farmer/profileEdit" component = {profileEdit}/>
      <Route path ="/farmer/profile" exact component = {farmerProfile} />
      <Route path ="/farmer/onetimepassword" exact component = {OneTimePassword} />

      <Route path ="/forum/brazil" exact component = {Allforum} />
      {/* <Route path ="/forum/askquestion" exact component = {askquestion} /> */}
      <Route path ="/forum/myquesiton" exact component = {MyQuestionList} />
      <Route path ="/forum/joinchat/:id" exact component = {joinchat} />
      <Route path ="/forum/editquestion/:id" exact component = {editquestion} />

      <Route path ="/weather/annaul" exact component = {annaulweather} />
      <Route path ="/weather/weekly" exact component = {weeklyweather} />
      <Route path ="/weather/hourly" exact component = {hourlyweather} />

      <Route path ="/farmer/cropSell" exact component = {cropSell} />
      <Route path ="/farmer/cropCreate" exact component = {cropCreate} />
      
      <Route path ="/croprisk" exact component = {requiresearch} />
      <Route path ="/croprisk/display" exact component = {riskpage} />
      


      <Route path ="/about/technology" exact component = {technology} />
      </Router>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import axios from 'axios';
import WeeklyCard from './weeklyCard'


export default class weeklyweather extends Component {

  constructor(props) {
    super(props);

    // App State
    this.state = {
      lat: 0,
      lng: 0,


      DayOFWeek:[],
      temperatureMax:[],
      temperatureMin:[],
      iconCode:[],
      narrative:[],
      sunsetTimeLocal:[],
      daynarrative:[]

    }
  };

  componentDidMount() {

    const success = position => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      this.setState({
        lat: latitude.toFixed(4),
        lng: longitude.toFixed(4)
      });
    };
    const error = () => {
      console.log("Unable to retrieve your location");
    };
    navigator.geolocation.getCurrentPosition(success, error);


    const languageList = "en-US"
    const APIkey = "da328055e2e940d8b28055e2e9e0d851"
    axios.get('https://api.weather.com/v3/wx/forecast/daily/5day?geocode=' + this.state.lat + ',' + this.state.lng + '&format=json&units=m&language=' + languageList + '&apiKey=' + APIkey)
      .then(response => {
        console.log(response.data.daypart[0].narrative)
        this.setState({ DayOFWeek: response.data.dayOfWeek , 
          temperatureMax:response.data.temperatureMax, 
          temperatureMin:response.data.temperatureMin,
          iconCode:response.data.daypart[0].iconCode,
          narrative:response.data.daypart[0].narrative,
          sunsetTimeLocal:response.data.sunsetTimeLocal,
          daynarrative:response.data.daypart[0].narrative
          })
      })
  }

  weeklyweatherList(){
    const alldata = this.state.IBMdata.dayOfWeek 
    // this.setState({ DayOFWeek: alldata})
    console.log(alldata)
    // console.log(alldata.temperatureMax)
    
  }



  render() {
    return (
      <div>
        this page are for weekly weather
        <div className = "row">
        
        <WeeklyCard DayOFWeek={this.state.DayOFWeek[1]} temperatureMax={this.state.temperatureMax[1]} temperatureMin={this.state.temperatureMin[1]} dayiconCode={this.state.iconCode[2]} nighticonCode={this.state.iconCode[3]} narrative={this.state.narrative[2]} narrativenight={this.state.narrative[3]} sunsetTimeLocal={this.state.sunsetTimeLocal[1]} />
        <WeeklyCard DayOFWeek={this.state.DayOFWeek[2]} temperatureMax={this.state.temperatureMax[2]} temperatureMin={this.state.temperatureMin[2]} dayiconCode={this.state.iconCode[4]} nighticonCode={this.state.iconCode[5]} narrative={this.state.narrative[4]} narrativenight={this.state.narrative[5]} sunsetTimeLocal={this.state.sunsetTimeLocal[2]} />
        <WeeklyCard DayOFWeek={this.state.DayOFWeek[3]} temperatureMax={this.state.temperatureMax[3]} temperatureMin={this.state.temperatureMin[3]} dayiconCode={this.state.iconCode[6]} nighticonCode={this.state.iconCode[7]} narrative={this.state.narrative[6]} narrativenight={this.state.narrative[7]} sunsetTimeLocal={this.state.sunsetTimeLocal[3]} />
        <WeeklyCard DayOFWeek={this.state.DayOFWeek[4]} temperatureMax={this.state.temperatureMax[4]} temperatureMin={this.state.temperatureMin[4]} dayiconCode={this.state.iconCode[8]} nighticonCode={this.state.iconCode[9]} narrative={this.state.narrative[8]} narrativenight={this.state.narrative[9]} sunsetTimeLocal={this.state.sunsetTimeLocal[4]} />
        <WeeklyCard DayOFWeek={this.state.DayOFWeek[5]} temperatureMax={this.state.temperatureMax[5]} temperatureMin={this.state.temperatureMin[5]} dayiconCode={this.state.iconCode[10]} nighticonCode={this.state.iconCode[11]} narrative={this.state.narrative[10]} narrativenight={this.state.narrative[11]} sunsetTimeLocal={this.state.sunsetTimeLocal[5]} />
       
        </div>
        {/* <div>{this.state.DayOFWeek[0]}</div>
        <div>{this.state.lng}</div>
        <div>{this.state.lat}</div>
        <div>{this.state.DayOFWeek.map(day=>{return <div>{day}</div>})}</div>
        <h1>{this.state.temperatureMax.map(temp =>{return <div>{temp}</div>})}</h1>
        <h1>{this.state.temperatureMin.map(temp =>{return <div>{temp}</div>})}</h1> */}
        
        {/* {this.weeklyweatherList()} */}
      </div>
    )
  }
}
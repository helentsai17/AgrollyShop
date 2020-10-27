import React, { Component } from 'react';
import axios from 'axios';


export default class weeklyweather extends Component {

    constructor(props) {
        super(props);
      
        // App State
        this.state = {
          lat: 0,
          lng: 0,
          IBMdata:[]
        }
      };
      
      componentDidMount() {
        // Get location of user
        const success = position => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
        //   console.log(latitude, longitude);
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
            axios.get('https://api.weather.com/v3/wx/forecast/daily/5day?geocode='+ this.state.lat + ',' + this.state.lng + '&format=json&units=m&language=' + languageList + '&apiKey='+APIkey)
                .then(response => {
                    console.log(response.data)
                    this.setState({IBMdata:response.data})
                })
      }


    
    render() {
        return (
            <div>
                this page are for weekly weather
                <div>{this.state.lng}</div>
                <div>{this.state.lat}</div>
            </div>
        )
    }
}
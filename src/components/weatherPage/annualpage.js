import React, { Component } from 'react';
import axios from 'axios'
import style from './weatherpage.module.css'
import WeatherCard from './weathercardAnnual'



export default class Annualpage extends Component {

    constructor(props) {
        super(props);

        var token = localStorage.getItem('usertoken');
        var localdata = JSON.parse(token)

        this.onChangeCountry = this.onChangeCountry.bind(this)
        this.OnChangeState = this.OnChangeState.bind(this)
        this.OnChnageCity = this.OnChnageCity.bind(this)
        this.OnSubmit = this.OnSubmit.bind(this)

        this.state = {
            Country: '',
            State: localdata.state,
            city: localdata.city,
            getcitiescode: [],
            currentcitycode: '',
            weatherdata: [],

        }
        // console.log(this.state.city)

    }

    componentDidMount() {
        axios.get('http://agrolly.tech/get_cities.php')
            .then(response => {
                const getcities = response.data
                // console.log(getcities)
                this.setState({ getcitiescode: getcities })
                this.getCityCode();
                this.getCityName();
            }).catch((error) => {
                console.log("error from get cities: " + error)
            })
        axios.get('http://agrolly.tech/annualForecast.php?country=Brazil')
            .then(response => {
                // console.log(response.data)
                const weatherdata = response.data
                this.setState({ weatherdata: weatherdata })

            }).catch((error) => {
                console.log("error from get cities: " + error)
            })

    }

    getCityName(){
        this.state.getcitiescode.map((currentcity)=>{
            console.log(currentcity.City)
            return<option value={currentcity.City}>{currentcity.City}</option>
        })
    }

    getCityCode() {
        this.state.getcitiescode.map((currentcity) => {
            if (currentcity.City == this.state.city) {
                const currentcitycode = currentcity.Code
                console.log(currentcitycode)
                this.setState({ currentcitycode: currentcitycode })
            }
        })
    }

    WeatherList() {
        return this.state.weatherdata.map((data, index) => {
            const citycode = this.state.currentcitycode
            const MAXtemperature = "TEMPMAX_fcast_" + citycode
            const MINtemperature = "TEMPMIN_fcast_" + citycode
        // const AVAtemperature = "TEMPMEDIA_fcast_" + citycode
            const rainfall = "fcast_class_" + citycode
            const rainorno = "rained_" + citycode + "_yN"
            const icon = "icon_" + citycode
            
            // console.log(data["Date.fcst"])
            return <WeatherCard 
            key={index} 
            data={data}  
            MAXtemperature={data[MAXtemperature]}
            MINtemperature={data[MINtemperature]}
            rainfall={data[rainfall]} 
            rainorno={data[rainorno]}
            icon = {data[icon]}
            dateinyear={data["Date.fcst"]}
            />

        })
    }

    onChangeCountry(e) {
        this.setState({
            Country: e.target.value
        })
    }

    OnChangeState(e) {
        this.setState({
            state: e.target.value
        })
    }

    OnChnageCity(e) {
        this.setState({
            city: e.target.value
        })
    }

    OnSubmit(e) {
        this.getCityCode();
        this.WeatherList();
    }

    render() {
        return (
            <div >
                <div className={style.formStyle}>
                    <form onSubmit={this.onSubmit} >
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="inputTime">Month</label>
                            </div>
                            <select className="custom-select" id="inputTime">
                                <option selected>Choose...</option>
                                <option value="Brazil">2020-09</option>
                                <option value="Mongolia">2020-10</option>
                                <option value="USA">2020-11</option>
                                <option value="Taiwan">2020-12</option>
                            </select>
                        </div>

                        {/* <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="inputstate">State</label>
                            </div>
                            <select className="custom-select" id="inputstate">
                                <option selected>Choose...</option>
                                <option value="Brazil">Brazil</option>
                                <option value="Mongolia">Mongolia</option>
                                <option value="USA">United State</option>
                                <option value="Taiwan">Taiwan</option>
                            </select>
                        </div> */}

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="inputCity">City</label>
                            </div>
                            <select className="custom-select" id="inputCity" value={this.state.city} onChange={this.OnChnageCity}>
                                <option selected>Choose...</option>
                                {this.state.getcitiescode.map((allcity) => { return <option value={allcity.City}>{allcity.City}</option> })}
                            </select>
                        </div>

                        <div className="form-group">
                            <input type="submit" value="search"
                                className="btn btn-primary" />
                        </div>
                    </form>
                </div>
                <h5>{this.state.city}</h5>
                <div className="row">
                    {this.WeatherList()}
                </div>
            </div>
        )
    }
}
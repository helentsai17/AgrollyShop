import React, { Component } from 'react';
import axios from 'axios'
import style from './weatherpage.module.css'
import WeatherCard from './weathercardAnnual'



export default class Annualpage extends Component {

    constructor(props) {
        super(props);

        var token = localStorage.getItem('usertoken');
        var localdata = JSON.parse(token)

        
        this.OnChangeState = this.OnChangeState.bind(this)
        this.OnChnageCity = this.OnChnageCity.bind(this)
        this.OnChnageMonth = this.OnChnageMonth.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            Country: '',
            // State: localdata.state,
            city:'',
            getcitiescode: [],
            currentcitycode: '',
            weatherdata: [],
            MonthinYear:[],
            month:"",
        }
        // console.log(this.state.city)

    }

    componentDidMount() {

        var token = localStorage.getItem('usertoken');
        var localdata = JSON.parse(token)
        this.setState({city:localdata.city})

        axios.get('http://agrolly.tech/get_cities.php')
            .then(response => {
                const getcities = response.data
                // console.log(getcities)
                this.setState({ getcitiescode: getcities })
                this.getCityName();
                this.getCityCode();
                
                
            }).catch((error) => {
                console.log("error from get cities: " + error)
            })

            
        axios.get('http://agrolly.tech/annualForecast.php?country=Brazil')
            .then(response => {
                console.log(response.data)
                const weatherdata = response.data
                this.setState({ weatherdata: weatherdata })
                this.getMonth();
            }).catch((error) => {
                console.log("error from get cities: " + error)
            })

    }

    getCityName(){
        this.state.getcitiescode.map((currentcity)=>{
            // console.log(currentcity.City)
            return<option value={currentcity.City}>{currentcity.City}</option>
        })

    }

    getMonth(){
        this.state.weatherdata.map((data) =>{
            const themonth = data["Date.fcst"]
            // console.log(themonth.substring(0, 7))
            if (!this.state.MonthinYear.includes(themonth.substring(0, 7))) {
                this.state.MonthinYear.push(themonth.substring(0, 7))
            }
        })
    }

    getCityCode() {
        this.state.getcitiescode.map((currentcity) => {
            if (currentcity.City == this.state.city) {
                const currentcitycode = currentcity.Code
                // console.log(currentcitycode)
                this.setState({ currentcitycode: currentcitycode })
            }
        })
    }

    WeatherList() {
        const filtermonth = this.state.weatherdata.filter(
            (findmonth) =>{
                console.log(findmonth["Date.fcst"].includes(this.state.month))
                return findmonth["Date.fcst"].includes(this.state.month)
            }
        )

        return filtermonth.map((data, index) => {

            const citycode = this.state.currentcitycode
            const MAXtemperature = "TEMPMAX_fcast_" + citycode
            const MINtemperature = "TEMPMIN_fcast_" + citycode
        //  const AVAtemperature = "TEMPMEDIA_fcast_" + citycode
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

   OnChnageMonth(e){
       this.setState({
           month:e.target.value
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

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state.month)
        console.log(this.state.city)
        this.getCityCode()
        this.WeatherList()
    }

    render() {
        return (
            <div >
                {this.getMonth()}
                <div className={style.formStyle}>
                    <form onSubmit={this.onSubmit} >
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="inputTime">Month</label>
                            </div>
                            <select className="custom-select" id="inputTime" value={this.state.month} onChange={this.OnChnageMonth}>
                                <option selected>Choose...</option>
                                {this.state.MonthinYear.map((month) => { return <option value={month}>{month}</option> })}
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
                {/* <h5>{this.state.city}</h5> */}
                <div className="row">
                    {this.WeatherList()}
                </div>
            </div>
        )
    }
}
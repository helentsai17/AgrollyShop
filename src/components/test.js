import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";

class Navbar extends Component {


    logOut(e) {
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
    }


    render() {
        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/farmer/login" className="nav-link">
                        Login
                </Link>
                </li>
            </ul>
        )

        const userLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/farmer/cropSell" className="nav-link">
                        my sell
                </Link>
                </li>
                <li className="nav-item">
                    <a onClick={this.logOut.bind(this)} className="nav-link">
                        Logout
                </a>
                </li>
            </ul>
        )

        return (

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li>
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>

                    </ul>
                    {localStorage.usertoken ? userLink : loginRegLink}
                </div>
            </nav>
        );
    }

}
export default withRouter(Navbar)

// const citycode = this.state.currentcitycode
        // const MAXtemperature = "TEMPMAX_fcast_" + citycode
        // const MINtemperature = "TEMPMIN_fcast_" + citycode
        // const AVAtemperature = "TEMPMEDIA_fcast_" + citycode
        // const rainfall = "fcast_class_" + citycode
        // const rainorno = "rained_" + citycode + "_yN"
        // const icon = "icon_" + citycode


        // const postion = navigator.geolocation.getCurrentPosition(function (position) {
        //     const lat = position.coords.latitude
        //     const long = position.coords.longitude

        //     console.log(lat)
        //     return lat

            // const languageList = "en-US"
            // const APIkey = "da328055e2e940d8b28055e2e9e0d851"
            // axios.get('https://api.weather.com/v1/geocode/' + position.coords.latitude + '/' + position.coords.longitude + '/forecast/intraday/3day.json?units=m&language=' + languageList + '&apiKey=' + APIkey)
            //     .then(response => {
            //         console.log(response.data.forecasts)
            //     })


        // });

        // console.log(postion)


        AverageTemp() {

            let theMonth = this.state.month
                if(theMonth<10){
                    theMonth = "0"+theMonth
                }
                // console.log(theMonth)
            let month1 =1, count1 = 0
            let month2 =2, count2 = 0
            let month3 =0, count3 = 0
            let month4 =0, count4 = 0
            let month5 =0, count5 = 0
            let month6 =0, count6 = 0
            let month7 =0, count7 = 0
            let month8 =0, count8 = 0
            let month9 =0, count9 = 0
            let month10 =0, count10 = 0
            let month11 =0, count11 = 0
            let month12 =0, count12 = 0
            
            return this.state.weatherdata.map(data => {
                const date = data["Date.fcst"]
                // console.log(date)
                const AVAtemperature = "TEMPMEDIA_fcast_" + this.state.CityCode
                // console.log(data[AVAtemperature])
                if(date.substring(5, 7).includes("01")){
                    month1 = data[AVAtemperature] + month1
                    count1++
                }else if(date.substring(5, 7).includes("02")){
                    month2 = data[AVAtemperature] + month2
                    count2++
                }else if(date.substring(5, 7).includes("03")){
                    month3 = data[AVAtemperature] + month3
                    count3++
                }else if(date.substring(5, 7).includes("04")){
                    month4 = data[AVAtemperature] + month4
                    count4++
                }else if(date.substring(5, 7).includes("05")){
                    month5 = data[AVAtemperature] + month5
                    count5++
                }else if(date.substring(5, 7).includes("06")){
                    month6 = data[AVAtemperature] + month6
                    count6++
                }else if(date.substring(5, 7).includes("07")){
                    month7 = data[AVAtemperature] + month7
                    count7++
                }else if(date.substring(5, 7).includes("08")){
                    month8 = data[AVAtemperature] + month8
                    count8++
                }else if(date.substring(5, 7).includes("09")){
                    month9 = data[AVAtemperature] + month9
                    count9++
                }else if(date.substring(5, 7).includes("10")){
                    month10 = data[AVAtemperature] + month10
                    count10++
                }else if(date.substring(5, 7).includes("11")){
                    month11 = data[AVAtemperature] + month11
                    count11++
                }else if(date.substring(5, 7).includes("12")){
                    month12 = data[AVAtemperature] + month12
                    count12++
                }
                
                // console.log(month1/count1)
                // this.state.avaTemp.push(month2),
                // this.state.avaTemp.push(month3),
                // this.state.avaTemp.push(month4),
                // this.state.avaTemp.push(month5/count5),
                // this.state.avaTemp.push(month6/count6),
                // this.state.avaTemp.push(month7/count7),
                // this.state.avaTemp.push(month8/count8),
                // this.state.avaTemp.push(month9/count9),
                // this.state.avaTemp.push(month10/count10),
                // this.state.avaTemp.push(month11/count11),
                // this.state.avaTemp.push(month12/count12)
            })
            
                
            
        }
        avg2: getavg2, avg3: getavg3,
        avg4: getavg4, avg5: getavg5, avg6: getavg6,
        avg7: getavg7, avg8: getavg8, avg9: getavg9,
        avg10: getavg10, avg11: getavg11, avg12: getavg12,
        AverageTemp(theMonth) {
            if (theMonth < 10) {
                theMonth = "0" + theMonth
            }
    
            const thismonth = this.state.weatherdata.filter((monthdata)=>{
                // console.log(monthdata["Date.fcst"].substring(5, 7).includes(theMonth))
                return monthdata["Date.fcst"].substring(5, 7).includes(theMonth)
            })
            const month =0;
            // const tempdata = [];
            return thismonth.map(data =>{
                const AVAtemperature = "TEMPMEDIA_fcast_" + this.state.CityCode
                return this.state.monthava.push(data[AVAtemperature])
            })
            
            var i;
            for(i = 0; i < this.state.monthava.length; i++){
                month = this.state.monthava[i]+month
            }
    
            console.log(month)
            
            // const monthava = this.state.weatherdata.filter(data => {
            //     const date = data["Date.fcst"]
            //     const AVAtemperature = "TEMPMEDIA_fcast_" + this.state.CityCode
            //     if (date.substring(5, 7).includes(theMonth)) {
            //         return {}
            //         // month = data[AVAtemperature] + month
            //         // count++
            //     }   
                
            // })
            // console.log(allavatemp)
            // return monthava
        }
        
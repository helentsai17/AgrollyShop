import React, { Component } from 'react';
import axios from 'axios'

export default class requireSearch extends Component {

    constructor(props) {
        super(props);

        this.OnChnageCity = this.OnChnageCity.bind(this)
        this.OnChnageMonth = this.OnChnageMonth.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            city: '',
            month: '',
            allcity: [],
            po_place: '',
            CityCode: '',
            weatherdata: [],

            avg1: '',
            avg2: '',
            avg3: '',
            avg4: '',
            avg5: '',
            avg6: '',
            avg7: '',
            avg8: '',
            avg9: '',
            avg10: '',
            avg11: '',
            avg12: '',

            allcityLong: [],
        }

    }

    componentDidMount() {
        axios.get('http://agrolly.tech/get_cities.php')
            .then(response => {
                const getcities = response.data
                this.setState({ allcity: getcities })


            }).catch((error) => {
                console.log("error from get cities: " + error)
            })
        axios.get('http://www.agrolly.tech/po_value.php')
            .then(res => {
                const po = res.data
                this.setState({ allcityLong: po })

            }).catch(error => {
                console.log(error)
            })


    }

    getCityCode() {
        this.state.allcity.map((currentcity) => {
            if (currentcity.City == this.state.city) {
                const currentcitypo = currentcity.po_place
                // console.log(currentcitypo)
                const CityCode = currentcity.Code
                if (currentcity.po_place != this.state.po_place) {
                    this.setState({ po_place: currentcitypo })
                    this.setState({ CityCode: CityCode })
                }

            }
        })
        // this.getLong();
    }

    OnChnageMonth(e) {
        this.setState({
            month: e.target.value
        })

    }

    OnChnageCity(e) {
        this.setState({
            city: e.target.value
        })

    }

    componentDidUpdate() {
        { this.getCityCode() }
        { this.countAvarageTemp() }
    }


    countAvarageTemp() {
        axios.get('http://agrolly.tech/annualForecast.php?country=Brazil')
            .then(responsedata => {
                // console.log(responsedata)
                const weatherdata = responsedata.data
                this.setState({ weatherdata: weatherdata })
            })

        let month1 = 0, count1 = 0, getavg1 = 0
        let month2 = 0, count2 = 0, getavg2 = 0
        let month3 = 0, count3 = 0, getavg3 = 0
        let month4 = 0, count4 = 0, getavg4 = 0
        let month5 = 0, count5 = 0, getavg5 = 0
        let month6 = 0, count6 = 0, getavg6 = 0
        let month7 = 0, count7 = 0, getavg7 = 0
        let month8 = 0, count8 = 0, getavg8 = 0
        let month9 = 0, count9 = 0, getavg9 = 0
        let month10 = 0, count10 = 0, getavg10 = 0
        let month11 = 0, count11 = 0, getavg11 = 0
        let month12 = 0, count12 = 0, getavg12 = 0

        
        const monthlyava = this.state.weatherdata.map((data, index) => {

            const date = data["Date.fcst"]
            // console.log(date)
            const AVAtemperature = "TEMPMEDIA_fcast_" + this.state.CityCode
            // console.log(data[AVAtemperature])
            if (date.substring(5, 7).includes("01")) {
                month1 = data[AVAtemperature] + month1
                count1++
                getavg1 = month1 / count1;
            } else if (date.substring(5, 7).includes("02")) {
                month2 = data[AVAtemperature] + month2
                count2++
                getavg2 = month2 / count2;
            } else if (date.substring(5, 7).includes("03")) {
                month3 = data[AVAtemperature] + month3
                count3++
                getavg3 = month3 / count3;
            } else if (date.substring(5, 7).includes("04")) {
                month4 = data[AVAtemperature] + month4
                count4++
                getavg4 = month4 / count4;
            } else if (date.substring(5, 7).includes("05")) {
                month5 = data[AVAtemperature] + month5
                count5++
                getavg5 = month5 / count5;
            } else if (date.substring(5, 7).includes("06")) {
                month6 = data[AVAtemperature] + month6
                count6++
                getavg6 = month6 / count6;
            } else if (date.substring(5, 7).includes("07")) {
                month7 = data[AVAtemperature] + month7
                count7++
                getavg7 = month7 / count7;
            } else if (date.substring(5, 7).includes("08")) {
                month8 = data[AVAtemperature] + month8
                count8++
                getavg8 = month8 / count8;
            } else if (date.substring(5, 7).includes("09")) {
                month9 = data[AVAtemperature] + month9
                count9++
                getavg9 = month9 / count9;
            } else if (date.substring(5, 7).includes("10")) {
                month10 = data[AVAtemperature] + month10
                count10++
                getavg10 = month10 / count10;
            } else if (date.substring(5, 7).includes("11")) {
                month11 = data[AVAtemperature] + month11
                count11++
                getavg11 = month11 / count11;
            } else if (date.substring(5, 7).includes("12")) {
                month12 = data[AVAtemperature] + month12
                count12++
                getavg12 = month12 / count12;
            }
        })
    
        new Promise(resolve => {
            setTimeout(() => {
                resolve()
                if (Math.floor(getavg1) !== Math.floor(this.state.avg1) && getavg1 !== 0) {
                    this.setState({
                        avg1: getavg1
                    })
                }
                if (Math.floor(getavg2) !== Math.floor(this.state.avg2) && getavg2 !== 0) {
                    this.setState({
                        avg2: getavg2
                    })
                }
                if (Math.floor(getavg3) !== Math.floor(this.state.avg3) && getavg3 !== 0) {
                    this.setState({
                        avg3: getavg3,
                    })
                }
                if (Math.floor(getavg4) !== Math.floor(this.state.avg4) && getavg4 !== 0) {
                    this.setState({
                        avg4: getavg4,
                    })
                }
                if (Math.floor(getavg5) !== Math.floor(this.state.avg5) && getavg5 !== 0) {
                    this.setState({ avg5: getavg5 })
                }
                if (Math.floor(getavg6) !== Math.floor(this.state.avg6) && getavg6 !== 0) {
                    this.setState({
                        avg6: getavg6
                    })
                }
                if (Math.floor(getavg7) !== Math.floor(this.state.avg7) && getavg7 !== 0) {
                    this.setState({
                        avg7: getavg7
                    })
                }
                if (Math.floor(getavg8) !== Math.floor(this.state.avg8) && getavg8 !== 0) {
                    this.setState({
                        avg8: getavg8
                    })
                }
                if (Math.floor(getavg9) !== Math.floor(this.state.avg9) && getavg9 !== 0) {
                    this.setState({
                        avg9: getavg9
                    })
                }
                if (Math.floor(getavg10) !== Math.floor(this.state.avg10) && getavg10 !== 0) {
                    this.setState({
                        avg10: getavg10
                    })
                }
                if (Math.floor(getavg11) !== Math.floor(this.state.avg11) && getavg11 !== 0) {
                    this.setState({
                        avg11: getavg11
                    })
                }
                if (Math.floor(getavg12) !== Math.floor(this.state.avg12) && getavg12 !== 0) {
                    this.setState({
                        avg12: getavg12,
                    })
                }
                
            }, 5 * 1000)
        })

            // if (getavg1 !== this.state.avg1 && getavg1 !== 0) {
            //     this.setState({
            //         avg1: getavg1
            //     })
            // }
            
            

        
    }




    onSubmit(e) {
        e.preventDefault();
        // this.getCityCode();
        const datainfo = {
            po_place: this.state.po_place,
            month: this.state.month,
            CityCode: this.state.CityCode,
            avg1: this.state.avg1,
            avg2: this.state.avg2,
            avg3: this.state.avg3,
            avg4: this.state.avg4,
            avg5: this.state.avg5,
            avg6: this.state.avg6,
            avg7: this.state.avg7,
            avg8: this.state.avg8,
            avg9: this.state.avg9,
            avg10: this.state.avg10,
            avg11: this.state.avg11,
            avg12: this.state.avg12,
        }


        this.props.history.push({
            pathname: '/croprisk/display',
            state: { detail: datainfo }
        })
    }


    render() {
        return (
            <div style={{ "margin": "2% 30%" }}>
                <h1>test: {this.state.avg5}</h1>
                <form onSubmit={this.onSubmit} >
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="inputTime">Month</label>
                        </div>
                        <select className="custom-select" id="inputTime" value={this.state.month} onChange={this.OnChnageMonth}>
                            <option selected>Choose...</option>
                            <option value="1">January</option>
                            <option value="2">February</option>
                            <option value="3">March</option>
                            <option value="4">April</option>
                            <option value="5">May</option>
                            <option value="6">June</option>
                            <option value="7">July</option>
                            <option value="8">Auguest</option>
                            <option value="9">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                        </select>
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="inputCity">City</label>
                        </div>
                        <select className="custom-select" id="inputCity" value={this.state.city} onChange={this.OnChnageCity}>
                            <option selected>Choose...</option>
                            {this.state.allcity.map((allcity) => { return <option value={allcity.City}>{allcity.City}</option> })}
                        </select>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="search"
                            className="btn btn-primary" />
                    </div>
                </form>

            </div>
        )
    }
}
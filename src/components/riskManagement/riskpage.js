import React, { Component } from 'react';
import axios from 'axios'
import VegetablesCard from './vegetableCard'




export default class riskpage extends Component {

    constructor(props) {
        super(props);

        this.OnChnageCity = this.OnChnageCity.bind(this)
        this.OnChnageMonth = this.OnChnageMonth.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            city: '',
            month: '',
            vegetables: [],
            allcity: [],
            po_place: '',
            allcityLong: [],
            citydata: []
        }

    }

    componentDidMount() {
        //get city
        var token = localStorage.getItem('usertoken');
        var localdata = JSON.parse(token)
        this.setState({ city: localdata.city })

        // to get all the city for the option 
        axios.get('http://agrolly.tech/get_cities.php')
            .then(response => {
                const getcities = response.data
                this.setState({ allcity: getcities })
                this.getCityCode();

            }).catch((error) => {
                console.log("error from get cities: " + error)
            })

        //get crop detail
        axios.get('http://www.agrolly.tech/cropdata.php')
            .then(res => {
                // console.log(res.data)
                const vegetables = res.data
                this.setState({ vegetables: vegetables })
            })
            .catch(error => {
                console.log('error come from get crop api: ' + error)
            })
    }
    //get the city code like S_25
    getCityCode() {
        this.state.allcity.map((currentcity) => {
            if (currentcity.City == this.state.city) {
                const currentcitypo = currentcity.po_place
                // const cityname = currentcity.City
                // console.log(currentcitypo)
                this.setState({ po_place: currentcitypo })
            }
        })
        // this.getLong();
    }

    // getLong() {
    //     axios.get('http://www.agrolly.tech/po_value.php')
    //         .then(res => {
    //             // console.log(res.data)
    //             const po = res.data
    //             this.setState({ allcityLong: po })
    //             this.findcityLong()
    //         }).catch(error => {
    //             console.log(error)
    //         })
    // }

    // findcityLong() {
    //     const long = this.state.po_place.slice(2)
    //     return this.state.allcityLong.filter(citylong => {
    //         if (citylong.city_long === long) {
    //             // console.log(citylong)
    //             this.setState({ citydata: citylong })
    //         }
    //     })
    // }

    vegetablesList() {
        return this.state.vegetables.map((vege,index) => {
            return <VegetablesCard
                key={index}
                vege={vege}
                cityCode={this.state.po_place} 
                selectMount={this.state.month} />
        })
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

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state.month)
        console.log(this.state.city)
        this.getCityCode();

    }
    render() {
        return (
            <div>
                {this.vegetablesList()}

            </div>
        )
    }
}
import React, { Component, useState } from 'react';
import axios from 'axios'
import VegetablesCard from './vegetableCard'
import style from './riskpage.module.css'



export default class riskpage extends Component {

    constructor(props) {
        super(props);

        const state = this.props.location.state.detail;
        this.state = {
            month: state.month,
            po_place: state.po_place,
            CityCode: state.CityCode,
            avg1: state.avg1,
            avg2: state.avg2,
            avg3: state.avg3,
            avg4: state.avg4,
            avg5: state.avg5,
            avg6: state.avg6,
            avg7: state.avg7,
            avg8: state.avg8,
            avg9: state.avg9,
            avg10: state.avg10,
            avg11: state.avg11,
            avg12: state.avg12,

            rainfall1: state.rainfall1,
            rainfall2: state.rainfall2,
            rainfall3: state.rainfall3,
            rainfall4: state.rainfall4,
            rainfall5: state.rainfall5,
            rainfall6: state.rainfall6,
            rainfall7: state.rainfall7,
            rainfall8: state.rainfall8,
            rainfall9: state.rainfall9,
            rainfall10: state.rainfall10,
            rainfall11: state.rainfall11,
            rainfall12: state.rainfall12,

            vegetables: [],
            allcityLong: [],
            citydata: [],

            weatherdata: [],
            avaTemp: [],
            placedata: "",
            monthava: [],

        }

    }

    componentDidMount() {
        axios.get('http://www.agrolly.tech/po_value.php')
            .then(res => {
                // console.log(res.data)
                const po = res.data
                this.setState({ allcityLong: po })
                this.findcityLong()
                this.GetplaceMonth()
            }).catch(error => {
                console.log(error)
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


    findcityLong() {
        const long = this.state.po_place.slice(2)
        return this.state.allcityLong.filter(citylong => {
            if (citylong.city_long === long) {
                // console.log(citylong)
                this.setState({ citydata: citylong })
            }
        })

    }



    vegetablesList() {
        return this.state.vegetables.map((vege, index) => {
            // console.log(vege)
            return <VegetablesCard
                key={index}
                vege={vege}
                placedata={this.state.placedata}
                citydata={this.state.citydata}
                po_place={this.state.po_place}
                selectMount={this.state.month}
                avg1={this.state.avg1}
                avg2={this.state.avg2}
                avg3={this.state.avg3}
                avg4={this.state.avg4}
                avg5={this.state.avg5}
                avg6={this.state.avg6}
                avg7={this.state.avg7}
                avg8={this.state.avg8}
                avg9={this.state.avg9}
                avg10={this.state.avg10}
                avg11={this.state.avg11}
                avg12={this.state.avg12}
                rainfall1={this.state.rainfall1}
                rainfall2={this.state.rainfall2}
                rainfall3={this.state.rainfall3}
                rainfall4={this.state.rainfall4}
                rainfall5={this.state.rainfall5}
                rainfall6={this.state.rainfall6}
                rainfall7={this.state.rainfall7}
                rainfall8={this.state.rainfall8}
                rainfall9={this.state.rainfall9}
                rainfall10={this.state.rainfall10}
                rainfall11={this.state.rainfall11}
                rainfall12={this.state.rainfall12}
            />
        })
    }


    render() {
        return (
            <div className={style.riskbackground}>
                {this.vegetablesList()}
            </div>
        )
    }
}
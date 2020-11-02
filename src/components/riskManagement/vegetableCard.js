import React, { Component } from 'react';
import axios from 'axios'



export default class VegetableCard extends Component {

    constructor(props){
        super(props);
        
        this.state = {         
            crop_name: props.vege.Crop_English,
            Crop_Mongolian_name: props.vege.Crop_Mongolian,
            Crop_Portuguese_name: props.vege.Crop_Portuguese,
            Max_temp:props.vege.Geral_air_Temp_max,
            Min_temp:props.vege.Geral_air_Temp_min,
            growPeriod_Max:props.vege["Total.growing.period_days_max"],
            growPeriod_Min:props.vege["Total.growing.period_days_min"],
            cover:props.vege.Cover,

            cityCode:props.cityCode,
            selectMount:props.selectMount,

            allcityLong:[],
            citydata:[],
        }
    }

    componentDidMount(){
        this.getLong();
    }

    getLong() {
        axios.get('http://www.agrolly.tech/po_value.php')
            .then(res => {
                // console.log(res.data)
                const po = res.data
                this.setState({ allcityLong: po })
                this.findcityLong()
            }).catch(error => {
                console.log(error)
            })
    }

    findcityLong() {
        const long = this.state.cityCode.slice(2)
        return this.state.allcityLong.filter(citylong => {
            if (citylong.city_long === long) {
                console.log(citylong)
                // this.setState({ citydata: citylong })
            }
        })
    }

    ETCrop(){
        const placemonth = this.GetplaceMonth();
        const Irrigation = placemonth;
    }

    GetplaceMonth(){
        const month = this.state.selectMount
        const search = "S_"+month
        const placeCode = this.state.citydata
        console.log(placeCode);
    }


    // ET crop selected month=   (pplace+month // selected the month and find in the long  (0.46 T2M selected month/place   // annual weather focast + 8) × Kccrop/1st number. //kc_month1: 0.45 for the first mont  (mm/day))*30


    
    render() {
        return (
            <div>  
                <h5>{this.state.crop_name} | {this.state.Crop_Portuguese_name} | {this.state.Crop_Mongolian_name}</h5>
                <p>possible tolerant temperature: {this.state.Min_temp}.C~{this.state.Max_temp}.C </p>
                <p>growing Period: {this.state.growPeriod_Min}~{this.state.growPeriod_Max}</p>
                <p>Cover: {this.state.cover}</p>
                <p>{this.state.cityCode}</p>
                {this.GetplaceMonth()}
                {/* {this.getLong()} */}
            </div>
        )
    }
}
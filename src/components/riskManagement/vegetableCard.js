import React, { Component } from 'react';
import axios from 'axios'




export default class VegetableCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            crop_name: props.vege.Crop_English,
            Crop_Mongolian_name: props.vege.Crop_Mongolian,
            Crop_Portuguese_name: props.vege.Crop_Portuguese,
            Max_temp: props.vege.Geral_air_Temp_max,
            Min_temp: props.vege.Geral_air_Temp_min,
            growPeriod_Max: props.vege["Total.growing.period_days_max"],
            growPeriod_Min: props.vege["Total.growing.period_days_min"],
            cover: props.vege.Cover,
            kc_month1: props.vege.kc_month1,
            avg1: props.avg1,
            avg2: props.avg2,
            avg3: props.avg3,
            avg4: props.avg4,
            avg5: props.avg5,
            avg6: props.avg6,
            avg7: props.avg7,
            avg8: props.avg8,
            avg9: props.avg9,
            avg10: props.avg10,
            avg11: props.avg11,
            avg12: props.avg12,
           
            cityPo: props.cityPo,
            selectMount: props.selectMount,
            citydata: props.citydata,
            CityCode: props.CityCode,

            weatherdata: [],
        }
    }

    componentDidMount() {
        { this.GetplaceMonth() }

    }

    ETCrop() {
        const mountparam = this.GetplaceMonth();
        const avaragetemp = this.state.avg1
        console.log(avaragetemp)
        const vegedata = this.state.kc_month1
        console.log(vegedata)
        console.log(mountparam)
        const Irrigation = (mountparam * (0.46 * avaragetemp +8) * vegedata) *30
        
        // console.log(Irrigation);
        return Irrigation
    }

    // first parameter 
    GetplaceMonth() {
        // const NorS = this.state.cityPo
        const themonth = this.state.selectMount
        const search = "S_" + themonth
        const placeCode = this.state.citydata[search]
        // console.log(placeCode)
        return placeCode
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
                {this.ETCrop()}

            </div>
        )
    }
}
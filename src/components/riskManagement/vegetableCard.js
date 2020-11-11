import React, { Component } from 'react';
import style from './riskpage.module.css'

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
            kc_month:props.vege,
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

            rainfall1: props.rainfall1,
            rainfall2: props.rainfall2,
            rainfall3: props.rainfall3,
            rainfall4: props.rainfall4,
            rainfall5: props.rainfall5,
            rainfall6: props.rainfall6,
            rainfall7: props.rainfall7,
            rainfall8: props.rainfall8,
            rainfall9: props.rainfall9,
            rainfall10: props.rainfall10,
            rainfall11: props.rainfall11,
            rainfall12: props.rainfall12,

            selectMount:props.selectMount,
            placedata:props.placedata,
            citydata: props.citydata,
            CityCode: props.CityCode,
            po_place:props.po_place,
            weatherdata: [],
        }
    }

 

    ETCrop() {
        let mountparam = this.GetplaceMonth(this.state.selectMount)
        const startmonth = "avg"+this.state.selectMount
        const rainmonth = "rainfall"+ this.state.selectMount
        const predictrain = this.state[rainmonth]
        const avaragetemp = this.state[startmonth]
        const vegedata = this.state.kc_month1   
        const Irrigation = (mountparam * (0.46 * avaragetemp + 8) * vegedata) * 30
        // if(Irrigation<predictrain)
        {/* <div style={ Irrigation<predictrain ? { backgroundColor:'green'} : { backgroundColor:'red'}}>{Math.floor(Irrigation)}</div> */}
        return <p style={Irrigation>predictrain ? { "background-color": "red" }:{ "background-color": "green" }}>{Math.floor(Irrigation)} |  {predictrain}</p>
    }

    ETCropsecond() {
        let secondmonth = parseInt(this.state.selectMount)+1
        if(secondmonth != 12) secondmonth = secondmonth%12
        const mountparam = this.GetplaceMonth(secondmonth)
        const startmonth = "avg"+ secondmonth
        const rainmonth = "rainfall"+ secondmonth
        const predictrain = this.state[rainmonth]
        const avaragetemp = this.state[startmonth]
        // console.log(startmonth)
        const vegedata = this.state.kc_month.kc_month2 
        const Irrigation = (mountparam * (0.46 * avaragetemp + 8) * vegedata) * 30
        return <p style={Irrigation>predictrain ? { "background-color": "red" }:{ "background-color": "green" }}>{Math.floor(Irrigation)} |  {predictrain}</p>
    }

    ETCropThire() {
        let thiremonth = parseInt(this.state.selectMount)+2
        if(thiremonth != 12) thiremonth = thiremonth%12
        const mountparam = this.GetplaceMonth(thiremonth)
        const startmonth = "avg"+thiremonth
        const rainmonth = "rainfall"+ thiremonth
        const predictrain = this.state[rainmonth]
        const avaragetemp = this.state[startmonth]
        // console.log(startmonth)
        const vegedata = this.state.kc_month.kc_month3 
        const Irrigation = (mountparam * (0.46 * avaragetemp + 8) * vegedata) * 30
        if(Irrigation !== 0){
            return <p style={Irrigation>predictrain ? { "background-color": "red" }:{ "background-color": "green" }}>{Math.floor(Irrigation)} |  {predictrain}</p>
        }else{
            return null
        }
    }

    ETCropFour() {
        let fourmonth = (parseInt(this.state.selectMount)+3)
        if(fourmonth != 12) fourmonth = fourmonth%12
        const mountparam = this.GetplaceMonth(fourmonth)
        const startmonth = "avg"+fourmonth
        const rainmonth = "rainfall"+ fourmonth
        const predictrain = this.state[rainmonth]
        const avaragetemp = this.state[startmonth]
        // console.log(startmonth)
        const vegedata = this.state.kc_month.kc_month4
        const Irrigation = (mountparam * (0.46 * avaragetemp + 8) * vegedata) * 30
        if(Irrigation !== 0){
            return <p style={Irrigation>predictrain ? { "background-color": "red" }:{ "background-color": "green" }}>{Math.floor(Irrigation)} |  {predictrain}</p>
        }else{
            return null
        }
        
    }
   
    ETCropFive() {
        let fivemonth = (parseInt(this.state.selectMount)+4)
        if(fivemonth != 12) fivemonth = fivemonth%12
        const mountparam = this.GetplaceMonth(fivemonth)
        const startmonth = "avg"+fivemonth
        const rainmonth = "rainfall"+ fivemonth
        const predictrain = this.state[rainmonth]
        const avaragetemp = this.state[startmonth]
        // console.log(startmonth)
        const vegedata = this.state.kc_month.kc_month5
        const Irrigation = (mountparam * (0.46 * avaragetemp + 8) * vegedata) * 30
        if(Irrigation !== 0){
            return<p style={Irrigation>predictrain ? { "background-color": "red" }:{ "background-color": "green" }}>{Math.floor(Irrigation)} |  {predictrain}</p>
        }else{
            return null
        }
        
    }

    ETCropSix() {
        let sixmonth = (parseInt(this.state.selectMount)+5)
        if(sixmonth != 12) sixmonth = sixmonth%12
        const mountparam = this.GetplaceMonth(sixmonth)
        const startmonth = "avg"+sixmonth
        const rainmonth = "rainfall"+ sixmonth
        const predictrain = this.state[rainmonth]
        const avaragetemp = this.state[startmonth]
        // console.log(startmonth)
        const vegedata = this.state.kc_month.kc_month6
        const Irrigation = (mountparam * (0.46 * avaragetemp + 8) * vegedata) * 30
        if(Irrigation !== 0){
            return <p style={Irrigation>predictrain ? { "background-color": "red" }:{ "background-color": "green" }}>{Math.floor(Irrigation)} |  {predictrain}</p>
        }else{
            return null
        }
        
    }
    ETCropSeven(){
        let sevenmonth = (parseInt(this.state.selectMount)+6)
        if(sevenmonth != 12) sevenmonth = sevenmonth%12
        const mountparam = this.GetplaceMonth(sevenmonth)
        const startmonth = "avg"+sevenmonth
        const rainmonth = "rainfall"+ sevenmonth
        const predictrain = this.state[rainmonth]
        const avaragetemp = this.state[startmonth]
        // console.log(startmonth)
        const vegedata = this.state.kc_month.kc_month7
        const Irrigation = (mountparam * (0.46 * avaragetemp + 8) * vegedata) * 30
        if(Irrigation !== 0){
            return <p style={Irrigation>predictrain ? { "background-color": "red" }:{ "background-color": "green" }}>{Math.floor(Irrigation)} |  {predictrain}</p>
        }else{
            return null
        }
    }
    
    ETCropEight(){
        let eightmonth = (parseInt(this.state.selectMount)+7)
        if(eightmonth != 12) eightmonth = eightmonth%12
        const mountparam = this.GetplaceMonth(eightmonth)
        const startmonth = "avg"+eightmonth
        const rainmonth = "rainfall"+ eightmonth
        const predictrain = this.state[rainmonth]
        console.log(rainmonth)
        const avaragetemp = this.state[startmonth]
        // console.log(startmonth)
        const vegedata = this.state.kc_month.kc_month8
        const Irrigation = (mountparam * (0.46 * avaragetemp + 8) * vegedata) * 30
        if(Irrigation !== 0){
            return <p style={Irrigation>predictrain ? { "background-color": "red" }:{ "background-color": "green" }}>{Math.floor(Irrigation)} |  {predictrain}</p>
        }else{
            return null
        }
    }

    ETCropNine(){
        let ninemonth = (parseInt(this.state.selectMount)+8)
        if(ninemonth != 12) ninemonth = ninemonth%12
        const mountparam = this.GetplaceMonth(ninemonth)
        const startmonth = "avg"+ninemonth
        const rainmonth = "rainfall"+ ninemonth
        const predictrain = this.state[rainmonth]
        const avaragetemp = this.state[startmonth]
        // console.log(startmonth)
        const vegedata = this.state.kc_month.kc_month9
        const Irrigation = (mountparam * (0.46 * avaragetemp + 8) * vegedata) * 30
        if(Irrigation !== 0){
            return <p style={Irrigation>predictrain ? { "background-color": "red" }:{ "background-color": "green" }}>{Math.floor(Irrigation)} |  {predictrain}</p>
        }else{
            return null
        }
    }

    ETCropTen(){
        let Tenmonth = (parseInt(this.state.selectMount)+9)
        if(Tenmonth != 12) Tenmonth = Tenmonth%12
        const mountparam = this.GetplaceMonth(Tenmonth)
        const startmonth = "avg"+Tenmonth
        const rainmonth = "rainfall"+ Tenmonth
        const predictrain = this.state[rainmonth]
        const avaragetemp = this.state[startmonth]
        // console.log(startmonth)
        const vegedata = this.state.kc_month.kc_month10
        const Irrigation = (mountparam * (0.46 * avaragetemp + 8) * vegedata) * 30
        if(Irrigation !== 0){
            return <p style={Irrigation>predictrain ? { "background-color": "red" }:{ "background-color": "green" }}>{Math.floor(Irrigation)} |  {predictrain}</p>
        }else{
            return null
        }
    }

    ETCropEleven(){
        let elevenmonth = (parseInt(this.state.selectMount)+10)
        if(elevenmonth != 12) elevenmonth = elevenmonth%12
        const mountparam = this.GetplaceMonth(elevenmonth)
        const startmonth = "avg"+elevenmonth
        const rainmonth = "rainfall"+ elevenmonth
        const predictrain = this.state[rainmonth]
        const avaragetemp = this.state[startmonth]
        // console.log(startmonth)
        const vegedata = this.state.kc_month.kc_month11
        const Irrigation = (mountparam * (0.46 * avaragetemp + 8) * vegedata) * 30
        if(Irrigation !== 0){
            return <p style={Irrigation>predictrain ? { "background-color": "red" }:{ "background-color": "green" }}>{Math.floor(Irrigation)} |{predictrain}</p>
        }else{
            return null
        }
    }

    ETCropTwelve(){
        let twelvemonth = (parseInt(this.state.selectMount)+11)
        if(twelvemonth != 12) twelvemonth = twelvemonth%12
        const mountparam = this.GetplaceMonth(twelvemonth)
        const startmonth = "avg"+twelvemonth
        const rainmonth = "rainfall"+ twelvemonth
        const predictrain = this.state[rainmonth]
        const avaragetemp = this.state[startmonth]
        // console.log(startmonth)
        const vegedata = this.state.kc_month.kc_month12
        const Irrigation = (mountparam * (0.46 * avaragetemp + 8) * vegedata) * 30
        if(Irrigation !== 0){
            return <p style={Irrigation>predictrain ? { "background-color": "red" }:{ "background-color": "green" }}>{Math.floor(Irrigation)} |  {predictrain}</p>
        }else{
            return null
        }
    }
    // first parameter 
    GetplaceMonth(month) {
        const NorS = this.state.po_place.charAt(0)
        const themonth = month
        const search = NorS+ "_" + themonth
        const placeCode = this.state.citydata[search]
        // console.log(placeCode)
        return placeCode
    }


    render() {
        return (
            <div className ={style.vegetableCard}>
                <h5>{this.state.crop_name} | {this.state.Crop_Portuguese_name} | {this.state.Crop_Mongolian_name}</h5>
                <p>possible tolerant temperature: {this.state.Min_temp}.C~{this.state.Max_temp}.C </p>
                <p>growing Period: {this.state.growPeriod_Min}~{this.state.growPeriod_Max}</p>
                <p>Cover: {this.state.cover}</p>
                <p>{this.state.cityCode}</p>
                <div>{this.ETCrop()}</div>
                <div>{this.ETCropsecond()}</div>
                <div>{this.ETCropThire()}</div>
                <div>{this.ETCropFour()}</div>
                <div>{this.ETCropFive()}</div>
                <div>{this.ETCropSix()}</div>
                <div>{this.ETCropSeven()}</div>
                <div>{this.ETCropEight()}</div>
                <div>{this.ETCropNine()}</div>
                <div>{this.ETCropTen()}</div>
                <div>{this.ETCropEleven()}</div>
                <div>{this.ETCropTwelve()}</div>
            </div>
        )
    }
}
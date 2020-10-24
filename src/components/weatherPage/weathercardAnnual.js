import React from 'react';
import style from './weatherpage.module.css'


function ChatCard(props) {
    const Absent = require('../../weatherIcon/Absent.svg')
    const high = require('../../weatherIcon/high.svg')
    const moderate = require('../../weatherIcon/moderate.svg')
    const veryhigh = require('../../weatherIcon/veryhigh.svg')
    const low = require('../../weatherIcon/low.svg')

    const MAXtemperature = "TEMPMAX_fcast_" + props.citycode
    
        let imagedisplay = (<img src={low} alt=""/>) 
        const weatherdata = props.icon
        if( weatherdata == "veryhigh"){
            imagedisplay = (<img className={style.weatherimg} src={veryhigh} alt="Absent"/>)
        }else if(weatherdata == "Absent"){
            imagedisplay = (<img className={style.weatherimg} src={Absent} alt="Absent"/>)
        }else if(weatherdata == "low"){
            imagedisplay = (<img className={style.weatherimg} src={low} alt="low"/>)
        }else if(weatherdata == "high"){
            imagedisplay = (<img className={style.weatherimg} src={high} alt="high"/>)
        }else if(weatherdata == "moderate"){
            imagedisplay = (<img className={style.weatherimg} src={moderate} alt="moderate"/>)
        }
       

    return (
        <div className="col-md-2">
            <p className={style.infotext}>{props.dateinyear}</p>
            {imagedisplay}
            <p className={style.infotext}>Max Temp : {props.MAXtemperature}</p>
            <p className={style.infotext}>Min Temp : {props.MINtemperature}</p>
            <p className={style.infotext}>Precipitation : {props.rainfall}</p>
            <p className={style.infotext}>Rain: {props.rainorno}</p>
        </div>
    )
}

export default ChatCard;
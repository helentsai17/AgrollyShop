import React from 'react';

function WeeklyCard(props) {
    

    return (
        <div className="col-md-3">
        <img src={`/weatherIcon/${props.dayiconCode}.svg`} />
        <img src={`/weatherIcon/${props.nighticonCode}.svg`} />
        <div>{props.sunsetTimeLocal}</div>
            <div>{props.DayOFWeek}</div>
            <div>Max Temperature:{props.temperatureMax}</div>
            <div>Min Temperature:{props.temperatureMin}</div>
            <p>day: {props.narrative}</p>
            <p>night: {props.narrativenight}</p>
        </div>
    )
}

export default WeeklyCard;
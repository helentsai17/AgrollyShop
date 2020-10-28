import React from 'react';



function hourlyCard(props) {

    return (
        <div className="col-md-3">
            <img src={`/weatherIcon/${props.hourly.icon_code}.svg`} />
            
            <h5>{props.hourly.daypart_name}</h5>
            <h5>Temperature:{props.hourly.temp}</h5>
        </div>
    )
}

export default hourlyCard;
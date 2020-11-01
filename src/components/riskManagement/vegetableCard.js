import React, { Component } from 'react';




export default class VegetableCard extends Component {

    constructor(props){
        super(props);
        console.log()
        this.state = {         
            crop_name: props.vege.Crop_English
        }
    }

    
    render() {
        return (
            <div>  
                <h5>{this.state.crop_name}</h5>
            </div>
        )
    }
}
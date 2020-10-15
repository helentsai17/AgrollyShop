import React, { Component } from 'react';
import Card from "./serviceCard"


export default class homePage extends Component {




    render() {
        return (
            <div style = {{"text-align": "center"}}>
                <div className='row' style ={{"margin":"3% 15%"}}>
                    <div className = "col-md-3"><Card /></div>
                    <div className = "col-md-3"><Card /></div>
                    <div className = "col-md-3"><Card /></div>
                    <div className = "col-md-3"><Card /></div>
                </div>
            </div>
        )
    }
}

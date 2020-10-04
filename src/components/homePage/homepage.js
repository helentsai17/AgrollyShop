import React, { Component } from 'react';
import Card from "./serviceCard"


export default class homePage extends Component {




    render() {
        return (
            <div style = {{"text-align": "center"}}>
                <div className='row'>
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        )
    }
}

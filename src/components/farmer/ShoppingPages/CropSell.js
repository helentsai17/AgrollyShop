import React, { Component } from 'react';
import { Link } from "react-router-dom";



export default class CropSell extends Component {

    
    render() {
        return (
            <div>
                <Link className="btn btn-success" to="/farmer/cropCreate">Create Sells</Link>
                <h5>create a new sell</h5>
            </div>
        )
    }
}
import React, { Component } from 'react';
import jwt_decode from 'jwt-decode'

export default class FarmerProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user_id: '',
            name: '',
            country: '',
            city: '',
            state: '',
            user: '',
        }
    }

    componentDidMount(){
        var token = localStorage.getItem('usertoken');
        // console.log(token)
        var localdata = JSON.parse(token)
        this.setState({
            user_id: localdata.user_id,
            name: localdata.name,
            country: localdata.country,
            city: localdata.city,
            state: localdata.state,
            user: localdata.user,
          })
    }
    
    render() {
        return (
            <div>
            <h1 >{this.state.name} </h1>
            <h1 >{this.state.user} </h1>
            <h1 >{this.state.country} </h1>
            </div>
        )
    }
}

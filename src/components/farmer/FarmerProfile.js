import React, { Component } from 'react';
import jwt_decode from 'jwt-decode'
import style from '../farmer/register.module.css';

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

    componentDidMount() {
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
                <div className = {style.ProfileCard}>
                    <h1>Your Profile</h1>
                    <h3>{this.state.name}</h3>
                    <hr />
                    <h5>Account Email</h5>
                    <p>{this.state.user}</p>
                    <hr />
                    <h5>Country</h5>
                    <p>{this.state.country} </p>
                    <hr />
                    <h5>State</h5>
                    <p>{this.state.state} </p>
                    <hr />
                    <h5>City</h5>
                    <p>{this.state.city} </p>
                </div>
            </div>
        )
    }
}

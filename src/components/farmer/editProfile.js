import React, { Component } from 'react';
import style from '../farmer/register.module.css';
import axios from 'axios';

export default class ProfileEdit extends Component {
    constructor(props) {
        super(props)

        this.onChangeName = this.onChangeName.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onChangeCountry = this.onChangeCountry.bind(this)

        this.state = {
            user_id: '',
            name: '',
            country: '',
            city: '',
            state: '',
            user: '',
            upassword:''
        }
    }

    componentDidMount() {
        var token = localStorage.getItem('usertoken');
        var passwordtoken = localStorage.getItem('passwordtoken')
        console.log(passwordtoken)
        console.log(token)
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

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeCountry(e){
        this.setState({
            country: e.target.value
        })
    }

    onChangePassword(e){
        this.setState({
            upassword: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        const EditProfile = {
            uid: this.state.user_id,
            uname: this.state.name,
            upassword: this.state.upassword,
            uemail: this.state.user,
            ucountry: this.state.country,
            ustate: this.state.state,
            ucity: this.state.city,
        }

        axios
            .post('http://agrolly.tech/profile.php', EditProfile,{
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded'
                }
            })
            .then(response => {
                console.log(response.data)
                
            })
            .catch(err => {
                console.log(err)
            })
            
            
    }


    render() {
        return (
            <div>
                <div className = {style.ProfileCard}>
                    <form onSubmit={this.onSubmit}>
                    <h1>Your Profile</h1>
                    <input type="text" className="form-control"
                            placeholder="Email"
                            value={this.state.name}
                            onChange={this.onChangeName} />
                    <hr />
                    <h5>Account Email</h5>
                    <p>{this.state.user}</p>
                    <hr />
                    <h5>Country</h5>
                    <div className="input-group mb-3">
                        <select className="custom-select" id="inputGroupSelect02"  value={this.state.country} onChange={this.onChangeCountry}  >
                            <option selected>Choose...</option>
                            <option value="brazil">Brazil</option>
                            <option value="mongolia">Mongolia</option>
                            <option value="USA">United State</option>
                        </select>
                        <div className="input-group-append">
                            <label className="input-group-text" htmlFor="inputGroupSelect02">Country</label>
                        </div>
                    </div>
                    <p>{this.state.country} </p>
                    <hr />
                    <h5>State</h5>
                    <p>{this.state.state} </p>
                    <hr />
                    <h5>City</h5>
                    <p>{this.state.city} </p>
                    <hr />
                    <input type="text" className="form-control"
                            placeholder="please enter you password to confrim"
                            value={this.state.upassword}
                            onChange={this.onChangePassword} />

                    <div className="form-group">
                        <input type="submit" value="Edit"
                            className="btn btn-primary" />
                    </div>

                    </form>
                </div>
            </div>
        )
    }
}

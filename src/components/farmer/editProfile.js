import React, { Component } from 'react';
import style from '../farmer/register.module.css';
import axios from 'axios';

import stateData from '../../components/statesData'
import MongoliaCityData from '../../components/MongoliaCityData'

export default class ProfileEdit extends Component {
    constructor(props) {
        super(props)

        this.onChangeName = this.onChangeName.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onChangeCountry = this.onChangeCountry.bind(this)
        this.onChangeState = this.onChangeState.bind(this)
        this.onchangeCity = this.onChangeCity.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            user_id: '',
            name: '',
            country: '',
            city: '',
            state: '',
            user: '',
            upassword: '',

            states: [],
            stateset: [],
            cities: [],
            Brazilcities: []
        }
        
    }

    componentDidMount() {
        var token = localStorage.getItem('usertoken');
        // var passwordtoken = localStorage.getItem('passwordtoken')
        // console.log(passwordtoken)
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
        { this.getState() }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeCountry(e) {
        this.setState({
            country: e.target.value
        })
        { this.getState() }
    }

    onChangeState(e) {
        this.setState({
            state: e.target.value
        });

    }

    onChangeCity(e) {
        this.setState({
            city: e.target.value
        });
    }


    onChangePassword(e) {
        this.setState({
            upassword: e.target.value
        });
    }

    componentDidUpdate() {
        { this.getState()}
        { this.getCity()}

    }



    getState() {
        const StateData = { stateData }
        if (this.state.usercountry === "Brazil") {

            axios.get("http://agrolly.tech/get_cities.php")
                .then(response => {
                    console.log(response.data)
                    const states = response.data;
                    this.setState({ states: states });

                })
                .catch((error) => {
                    console.log("error come from resgister: " + error)
                })

            const brazilset = StateData.stateData.Brazil
            if (this.state.stateset !== brazilset) {
                this.setState({ stateset: brazilset })
                
            }


        } else if (this.state.usercountry === "Mongolia") {

            const Mongoliaset = StateData.stateData.Mongolia
            if (this.state.stateset !== Mongoliaset) {
                this.setState({ stateset: Mongoliaset })
            }


        } else if (this.state.usercountry === "USA") {
            const USAset = StateData.stateData.USA
            if (this.state.stateset !== USAset) {
                this.setState({ stateset: USAset })
            }

        } else if (this.state.usercountry === "Taiwan") {
            const TaiwanSet = StateData.stateData.Taiwan
            if (this.state.stateset !== TaiwanSet) {
                this.setState({ stateset: TaiwanSet })
            }
        }

    }

    getBrazilCity() {
        this.state.states.map((allcity) => {
            if (allcity.State === "Parana") {
                if (!this.state.Brazilcities.includes(allcity.City)) {
                    this.state.Brazilcities.push(allcity.City)
                }
            }
        })
    }

    getCity() {

        if (this.state.usercountry === "Brazil") {
            if (this.state.userstate == "Parana") {
                {this.getBrazilCity()}
                const BrazilCity = this.state.Brazilcities
                console.log(BrazilCity);
                if (this.state.cities !== BrazilCity) {
                    this.setState({ cities: BrazilCity })
                    console.log(BrazilCity);
                }
               
            }

        } else if (this.state.usercountry === "Mongolia") {
            const MongoliaData = { MongoliaCityData }
            if (this.state.userstate === "Dornod") {
                const DornodSet = MongoliaData.MongoliaCityData.Dornod
                if (this.state.cities !== DornodSet) {
                    this.setState({ cities: DornodSet })
                }
            } else if (this.state.userstate === "Sukhbaatar") {
                const SukhbaatarSet = MongoliaData.MongoliaCityData.Sukhbaatar
                if (this.state.cities !== SukhbaatarSet) {
                    this.setState({ cities: SukhbaatarSet })
                }
            } else if (this.state.userstate === "Khentii") {
                const KhentiiSet = MongoliaData.MongoliaCityData.Khentii
                if (this.state.cities !== KhentiiSet) {
                    this.setState({ cities: KhentiiSet })
                }
            }
        }
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
            .post('http://agrolly.tech/profile.php', EditProfile, {
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
                <div className={style.ProfileCard}>
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
                            <select className="custom-select" id="inputGroupSelect02" value={this.state.country} onChange={this.onChangeCountry}  >
                                <option selected>Choose...</option>
                                <option value="Brazil">Brazil</option>
                                <option value="Mongolia">Mongolia</option>
                                <option value="USA">United State</option>
                                <option value="Taiwan">Taiwan</option>
                            </select>
                            <div className="input-group-append">
                                <label className="input-group-text" htmlFor="inputGroupSelect02">Country</label>
                            </div>
                        </div>
                        <p>{this.state.country} </p>
                        <hr />
                        <h5>State</h5>
                        <input type="text" className="form-control"
                            value={this.state.state}
                            onChange={this.onChangeState} />
                        <p>{this.state.state} </p>
                        <hr />
                        <h5>City</h5>
                        <input type="text" className="form-control"
                            placeholder="Email"
                            value={this.state.city}
                            onChange={this.onChangeCity} />
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

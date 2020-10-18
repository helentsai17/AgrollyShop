import React, { Component, useState } from 'react';
import axios from 'axios';
import style from './register.module.css';
import backgroundImage from '../../Image/background/register.png'
import logo from '../../Image/Agrolly/Agrolly logo.png'

import stateData from '../../components/statesData'
import MongoliaCityData from '../../components/MongoliaCityData'

export default class Register extends Component {


    constructor(props) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangeName = this.onChangeName.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onChangeCountry = this.onChangeCountry.bind(this)
        this.onChangeState = this.onChangeState.bind(this)
        this.onchangeCity = this.onchangeCity.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            useremail: "",
            username: "",
            userpassword: "",
            usercountry: "",
            userstate: "",
            usercity: "",
            states: [],
            stateset: [],
            cities: [],
            onetimepassword: "",
            AllState: [],
            Brazilcities:[]
        }
    }

    onChangeEmail(e) {
        this.setState({
            useremail: e.target.value
        });
    }
    onChangeName(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            userpassword: e.target.value
        });
    }

    onChangeCountry(e) {
        this.setState({
            usercountry: e.target.value
        });

    }

    onChangeState(e) {
        this.setState({
            userstate: e.target.value
        });
        // {this.getCity()}

    }

    onchangeCity(e) {
        this.setState({
            usercity: e.target.value
        });
    }


    getState() {
        const StateData = { stateData }
        if (this.state.usercountry === "brazil") {

            axios.get("http://agrolly.tech/get_cities.php")
                .then(response => {
                    // console.log(response.data)
                    const states = response.data;
                    this.setState({ states: states });
                })
                .catch((error) => {
                    console.log("error come from resgister: " + error)
                })

            const brazilset = StateData.stateData.Brazil
            if (this.state.stateset !== brazilset) {
                this.setState({ stateset: brazilset })
                {this.getBrazilCity()}
            }


        } else if (this.state.usercountry === "mongolia") {

            const Mongoliaset = StateData.stateData.Mongolia
            if (this.state.stateset !== Mongoliaset) {
                this.setState({ stateset: Mongoliaset })
            }


        } else if (this.state.usercountry === "USA") {
            const USAset = StateData.stateData.USA
            if (this.state.stateset !== USAset) {
                this.setState({ stateset: USAset })
            }

        } else if (this.state.usercountry === "taiwan") {
            const TaiwanSet = StateData.stateData.Taiwan
            if (this.state.stateset !== TaiwanSet) {
                this.setState({ stateset: TaiwanSet })
            }
        }

    }

    getBrazilCity(){
        this.state.states.map((allcity) => {
            if (allcity.State === "Parana") {
                if(!this.state.Brazilcities.includes(allcity.City)){
                this.state.Brazilcities.push(allcity.City)
            }
            }
        })
    }

    getCity() {

        if (this.state.usercountry === "brazil") {
            if (this.state.userstate == "Parana") {
                {this.getBrazilCity()}
                const BrazilCity = this.state.Brazilcities
                // console.log(BrazilCity);
                if (this.state.cities !== BrazilCity) {
                    this.setState({ cities: BrazilCity })
                    console.log(BrazilCity);
                }
               
            }

        } else if (this.state.usercountry === "mongolia") {
            const MongoliaData = { MongoliaCityData }
            if (this.state.userstate == "Dornod") {
                const DornodSet = MongoliaData.MongoliaCityData.Dornod
                if (this.state.cities !== DornodSet) {
                    this.setState({ cities: DornodSet })
                }
            } else if (this.state.userstate == "Sukhbaatar") {
                const SukhbaatarSet = MongoliaData.MongoliaCityData.Sukhbaatar
                if (this.state.cities !== SukhbaatarSet) {
                    this.setState({ cities: SukhbaatarSet })
                }
            } else if (this.state.userstate == "Khentii") {
                const KhentiiSet = MongoliaData.MongoliaCityData.Khentii
                if (this.state.cities !== KhentiiSet) {
                    this.setState({ cities: KhentiiSet })
                }
            }
        }
    }

    componentDidUpdate() {
        { this.getState() }
        { this.getCity() }

    }


    onSubmit(e) {
        e.preventDefault();

        var val = Math.floor(1000 + Math.random() * 9000);
        console.log(val);
        const userRegister = {
            useremail: this.state.useremail,
            userpassword: this.state.userpassword,
            username: this.state.username,
            usercountry: this.state.usercountry,
            userstate: this.state.userstate,
            usercity: this.state.usercity,
            onetimepassword: val
        }

        const mailcheck = {
            useremail: this.state.useremail,
            onetimepassword: val
        }
        console.log(mailcheck)


        axios
            .post('http://agrolly.tech/mail.php', mailcheck, {
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded'
                }
            })
            .then(response => {
                console.log(response.data)
                this.props.history.push({
                    pathname: '/farmer/onetimepassword',
                    state: { detail: userRegister }
                })

            })
            .catch(err => {
                console.log(err)
            })


    }

    render() {
        return (

            <div styles={{ backgroundImage: `url(${backgroundImage})` }} >
                <div className={style.backgroundRegister}>
                    <div className={style.formcontainer}>
                        <img style={{ "width": "40%", "marginBottom": "10px" }} src={logo} alt="logo" />
                        <form onSubmit={this.onSubmit} >
                            <div className="form-group">
                                <input type="text" className="form-control"
                                    placeholder="Email"
                                    value={this.state.useremail}
                                    onChange={this.onChangeEmail} />
                            </div>
                            <div className="form-group">

                                <input type="text" className="form-control"
                                    placeholder="please enter your full name"
                                    value={this.state.username}
                                    onChange={this.onChangeName} />
                            </div>

                            <div className="form-group">
                                <input type="password" className="form-control"
                                    placeholder="please set up a password"
                                    value={this.state.userpassword}
                                    onChange={this.onChangePassword} />
                            </div>

                            <div className="input-group mb-3">
                                <select className="custom-select" id="inputGroupSelect02" value={this.state.usercountry} onChange={this.onChangeCountry}  >
                                    <option selected>Choose...</option>
                                    <option value="brazil">Brazil</option>
                                    <option value="mongolia">Mongolia</option>
                                    <option value="USA">United State</option>
                                    <option value="taiwan">Taiwan</option>
                                </select>
                                <div className="input-group-append">
                                    <label className="input-group-text" htmlFor="inputGroupSelect02">Country</label>
                                </div>
                            </div>

                            {/* {this.setState()} */}
                            {/* {this.getCity} */}

                            <div className="input-group mb-3">
                                <select className="custom-select" id="inputGroupSelect03" value={this.state.userstate} onChange={this.onChangeState} >
                                    <option selected>Choose...</option>
                                    {this.state.stateset.map((allstate) => { return <option value={allstate}>{allstate}</option> })}
                                </select>
                                <div className="input-group-append">
                                    <label className="input-group-text" htmlFor="inputGroupSelect03">State</label>
                                </div>
                            </div>


                            <div className="input-group mb-3">
                                <select className="custom-select" id="inputGroupSelect04" value={this.state.usercity} onChange={this.onchangeCity}>
                                    <option selected>Choose...</option>
                                    {this.state.cities.map((allstate) => { return <option value={allstate}>{allstate}</option> })}
                                </select>
                                <div className="input-group-append">
                                    <label className="input-group-text" htmlFor="inputGroupSelect04">City</label>
                                </div>
                            </div>

                            <div className="form-group">
                                <input type="submit" value="register"
                                    className="btn btn-primary" />
                            </div>

                        </form>


                    </div>
                </div>
            </div>
        );
    }
}
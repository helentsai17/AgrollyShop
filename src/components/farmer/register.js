import React, { Component } from 'react';
import axios from 'axios';
import style from './register.module.css';
import backgroundImage from '../../Image/background/register.png'
import logo from '../../Image/Agrolly/Agrolly logo.png'

import stateData from '../../components/statesData'
import MongoliaCityData from '../../components/MongoliaCityData'

import Alert from '../layout/alerts'
import Dialog from '../layout/Dialog'

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
            // AllState: [],
            Brazilcities: [],
            checked: false,
            errorMessage: "",
            isOpen:false
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
    }

    onchangeCity(e) {
        this.setState({
            usercity: e.target.value
        });
    }

    handleChange = (e) => {
        const { checked } = e.target
        this.setState({
            checked: checked
        })
    }



    getState() {
        const StateData = { stateData }
        if (this.state.usercountry === "Brazil") {

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
                { this.getBrazilCity() }
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
                { this.getBrazilCity() }
                const BrazilCity = this.state.Brazilcities
                // console.log(BrazilCity);
                if (this.state.cities !== BrazilCity) {
                    this.setState({ cities: BrazilCity })
                    console.log(BrazilCity);
                }

            }

        } else if (this.state.usercountry === "Mongolia") {
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

        if (this.state.checked === true) {
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
                    if(response.data.result === "successful" ){
                        console.log(response.data)
                        this.props.history.push({
                            pathname: '/farmer/onetimepassword',
                            state: { detail: userRegister }
                        })
                    }else{
                        this.setState({ errorMessage: "register fail, please try again" })
                    }
                    
                })
                .catch(err => {
                    console.log(err)
                })


        } else {
            this.setState({ errorMessage: "place agree with the agreement to move on and register" })
            console.log("place agree with the agreement to move on and register")
        }
    }



    render() {
        const message = this.state.errorMessage
        const alert = <Alert message={message} />
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
                                    <option value="Brazil">Brazil</option>
                                    <option value="Mongolia">Mongolia</option>
                                    <option value="USA">United State</option>
                                    <option value="Taiwan">Taiwan</option>
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
                                    {this.state.cities.map((allcity) => { return <option value={allcity}>{allcity}</option> })}
                                </select>
                                <div className="input-group-append">
                                    <label className="input-group-text" htmlFor="inputGroupSelect04">City</label>
                                </div>
                            </div>
                            

                            
                            <input type="checkbox" onChange={e => this.handleChange(e)} defaultChecked={this.state.checked} name="checkbox1" />
                            <label htmlFor="checkbox1">click<button className = {style.infoButton} onClick={(e)=> this.setState({isOpen:true})}>here</button>to read the agreement</label>

                            <Dialog isOpen={this.state.isOpen} onClose={(e)=> this.setState({isOpen:false})}>
                                <p>1.	I accept Agrolly’s Terms and Conditions <br/>
                                 2.	All information on this app or on Agrolly’ s website site is provided "as is", with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information. You assume full responsibility for your use of the information, and understand and agree that Agrolly is neither responsible, nor liable, to you in any manner whatsoever for any decision made or action or non-action taken by you in reliance upon the information provided through this app or web site.</p>
                            </Dialog>
                            
                            <div>{alert}</div>

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
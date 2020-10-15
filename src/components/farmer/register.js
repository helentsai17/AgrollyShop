import React, { Component } from 'react';
import axios from 'axios';
import Emailcheck from './OneTimePassword'


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
            states:[],
            cities:[],
            onetimepassword:"",
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

    


    getState() {
        if(this.state.usercountry == "brazil"){
            axios.get("http://agrolly.tech/get_cities.php")
            .then(response=>{
                // console.log(response.data)
                const states = response.data;
                this.setState({ states: states });
            })
            .catch((error)=>{
                console.log("error come from resgister: "+ error)
            })

        }
        
    }

    getCity(){
//if country == bazil and state != null ->
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
            <div className="container" >
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
                        <select className="custom-select" id="inputGroupSelect02"  value={this.state.usercountry} onChange={this.onChangeCountry}>
                            <option selected>Choose...</option>
                            <option value="brazil">Brazil</option>
                            <option value="mongolia">Mongolia</option>
                            <option value="USA">United State</option>
                        </select>
                        <div className="input-group-append">
                            <label className="input-group-text" htmlFor="inputGroupSelect02">Country</label>
                        </div>
                    </div>
                   
                    {/* {this.getState}
                    <div class="input-group mb-3">
                        <select class="custom-select" id="inputGroupSelect02" value={this.state.userstate} onChange={this.onChangeState}>
                            <option selected>Choose...</option>
                            
                        </select>
                        <div class="input-group-append">
                            <label class="input-group-text" htmlFor="inputGroupSelect02">City</label>
                        </div>
                    </div>  */}

                    
                    <div className="form-group">
                        <input type="text" className="form-control"
                            placeholder="the state you are in"
                            value={this.state.userstate}
                            onChange={this.onChangeState} />
                    </div>

                    <div class="input-group mb-3">
                        <select class="custom-select" id="inputGroupSelect02" value={this.state.usercity} onChange={this.onchangeCity}>
                            <option selected>Choose...</option>
                            <option value="Marechal Cândido Rondon">Marechal Cândido Rondon</option>
                        </select>
                        <div class="input-group-append">
                            <label class="input-group-text" htmlFor="inputGroupSelect02">City</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="register"
                            className="btn btn-primary" />
                    </div>

                </form>

                
                

            </div>
        );
    }
}
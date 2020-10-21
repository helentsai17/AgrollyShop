import React, { Component } from 'react';
import axios from 'axios';
import style from './register.module.css';

import logo from '../../Image/Agrolly/Agrolly logo.png'
import Alert from '../layout/alerts'

export default class UserLogin extends Component {

    constructor(props) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            useremail: '',
            userpassword: '',
            errorMessage: '',
        }
    }

    onChangeEmail(e) {
        this.setState({
            useremail: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            userpassword: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const userlogin = {
            useremail: this.state.useremail,
            userpassword: this.state.userpassword,
        }

        axios
            .post('http://agrolly.tech/login.php', userlogin, {
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded'
                }})
            .then(response => {
                console.log(response.data)
                if(response.data.result === "successful" ){
                localStorage.setItem('usertoken', JSON.stringify(response.data))
                localStorage.setItem('passwordtoken', JSON.stringify(this.state.userpassword))
                // console.log(response.data)
                window.location = "/farmer/cropSell"
                }else{
                    this.setState({ errorMessage: "email or password is worng please try again" })
                }
            })
            .catch(err => {
                console.log(err)
            })


    }




    render() {
        const message = this.state.errorMessage
        const alert = <Alert message={message} />
        return (
            <div className={style.backgroundLogin} >

            <div className={style.formcontainer}>
                <img style = {{"width":"40%", "marginBottom":"10px"}} src={logo} alt="logo"/>
                <form onSubmit={this.onSubmit} >
                    <div className="form-group">
                        <input type="text" className="form-control"
                            placeholder="Email"
                            value={this.state.useremail}
                            onChange={this.onChangeEmail} />
                    </div>


                    <div className="form-group">
                        <input type="password" className="form-control"
                            placeholder="password"
                            value={this.state.userpassword}
                            onChange={this.onChangePassword} />
                    </div>
                    {alert}
                    <div className="form-group">
                        <input type="submit" value="login"
                            className="btn btn-primary" />
                    </div>

                </form>
               
                <h6>don't have an account yet? click <a style ={{"color": "blue"}} href="/register">here</a> to register one</h6>
                <h6><a style ={{"color": "blue"}} href="/farmer/forgetpassword">forget password</a></h6>
                </div>

            </div>
        );
    }
}
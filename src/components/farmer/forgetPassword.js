import React, { Component } from 'react';
import axios from 'axios';
import style from './register.module.css';



export default class forgetPassword extends Component {

    constructor(props) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            useremail: '',
            userpassword: '',
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
        var val = Math.floor(1000 + Math.random() * 9000);
        console.log(val);

        const mailcheck = {
            useremail: this.state.useremail,
            onetimepassword: val
        }

        const reset = {
            useremail: this.state.useremail,
            userpassword: this.state.userpassword,
            onetimepassword: val
        }

        axios
            .post('http://agrolly.tech/mail.php', mailcheck, {
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded'
                }})
            .then(response => {
                console.log(response.data)
                this.props.history.push({
                    pathname: '/farmer/resetpassword',
                    state: { detail: reset }
                  })
            })
            .catch(err => {
                console.log(err)
            })


    }




    render() {
        return (
            <div className={style.backgroundforgetPassword} >

            <div className={style.formcontainer}>
               
                <form onSubmit={this.onSubmit} >
                    <div className="form-group">
                        <input type="text" className="form-control"
                            placeholder="you email account"
                            value={this.state.useremail}
                            onChange={this.onChangeEmail} />
                    </div>


                    <div className="form-group">
                        <input type="password" className="form-control"
                            placeholder="New password"
                            value={this.state.userpassword}
                            onChange={this.onChangePassword} />
                    </div>

                    <div className="form-group">
                        <input type="password" className="form-control"
                            placeholder="Confirm password"
                            value={this.state.userpassword}
                            onChange={this.onChangePassword} />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="reset"
                            className="btn btn-primary" />
                    </div>

                </form>

               
                </div>

            </div>
        );
    }
}
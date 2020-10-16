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

        const reset = {
            useremail: this.state.useremail,
            userpassword: this.state.userpassword,
        }

        axios
            .post('http://agrolly.tech/mail.php', reset, {
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded'
                }})
            .then(response => {
                console.log(response.data)
                this.props.history.push({
                    pathname: '/farmer/passwordreset',
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
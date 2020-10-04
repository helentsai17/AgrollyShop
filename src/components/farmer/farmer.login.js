import React, { Component } from 'react';
import axios from 'axios';


export default class UserLogin extends Component {

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
                localStorage.setItem('usertoken', JSON.stringify(response.data))
                console.log(response.data)
                window.location = "/farmer/cropSell"
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
                        <input type="password" className="form-control"
                            placeholder="password"
                            value={this.state.userpassword}
                            onChange={this.onChangePassword} />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="login"
                            className="btn btn-primary" />
                    </div>

                </form>

            </div>
        );
    }
}
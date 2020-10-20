import React, { Component } from 'react';
import axios from 'axios'
import Register from './register';


export default class OneTimePassword extends Component {

    constructor(props) {
        super(props);

        this.onChangeOneTime = this.onChangeOneTime.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        const state = this.props.location.state.detail;

        this.state = {
            useremail: state.useremail,
            username: state.username,
            userpassword: state.userpassword,
            usercountry: state.usercountry,
            userstate: state.userstate,
            usercity: state.usercity,
            onetimepassword: state.onetimepassword,
            enterpassword: ""
        }

    }

    onChangeOneTime(e) {
        this.setState({
            enterpassword: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state.enterpassword)

        if(this.state.enterpassword == this.state.onetimepassword){
            const userRegister = {
                useremail: this.state.useremail,
                username: this.state.username,
                userpassword: this.state.userpassword,
                usercountry: this.state.usercountry,
                userstate: this.state.userstate,
                usercity: this.state.usercity,
            }
            axios
                .post('http://agrolly.tech/register.php', userRegister, {
                    headers: {
                        'Content-type': 'application/x-www-form-urlencoded'
                    }
                })
                .then(response => {
                    console.log(response.data)
                    window.location = "/farmer/login"
                })
                .catch(err => {
                    console.log(err)
                })
    
        }else{
            console.log("register fail")
            window.location = "/register"
        }
        

    }




    render() {
        // const { data } = this.props.location
        return (

            <div className="container" >
                <form onSubmit={this.onSubmit} >

                    <div className="form-group">
                        <input type="text" className="form-control"
                            placeholder="One Time password"
                            value={this.state.enterpassword}
                            onChange={this.onChangeOneTime} />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="submit"
                            className="btn btn-primary" />
                    </div>

                </form>

            </div>
        );
    }
}
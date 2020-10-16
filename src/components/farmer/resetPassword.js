import React, { Component } from 'react';
import axios from 'axios'



export default class resetPassword extends Component {

    constructor(props) {
        super(props);

        this.onChangeOneTime = this.onChangeOneTime.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        const state = this.props.location.state.detail;

        this.state = {
            useremail: state.useremail,
            userpassword: state.userpassword,
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
            const resetpasswordsend = {
                useremail: this.state.useremail,
                userpassword: this.state.userpassword,
            }
            axios
                .post('http://agrolly.tech/forgotpassword.php', resetpasswordsend, {
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
            console.log("password reset fail")
            window.location = "/farmer/forgetpassword"
        }
        

    }




    render() {
        
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
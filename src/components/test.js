import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";

class Navbar extends Component {


    logOut(e) {
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
    }


    render() {
        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/farmer/login" className="nav-link">
                        Login
                </Link>
                </li>
            </ul>
        )

        const userLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/farmer/cropSell" className="nav-link">
                        my sell
                </Link>
                </li>
                <li className="nav-item">
                    <a onClick={this.logOut.bind(this)} className="nav-link">
                        Logout
                </a>
                </li>
            </ul>
        )

        return (

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li>
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>

                    </ul>
                    {localStorage.usertoken ? userLink : loginRegLink}
                </div>
            </nav>
        );
    }

}
export default withRouter(Navbar)
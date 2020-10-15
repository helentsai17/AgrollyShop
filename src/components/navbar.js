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
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        about
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Technology</a>
                        <a className="dropdown-item" href="#">media</a>
                    </div>
                </li>


                <li className="nav-item">
                    <Link to="/shop" className="nav-link">
                        Shops
                </Link>
                </li>
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
                    <Link to="/farmer/profile" className="nav-link">
                        Profile
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

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Agrolly</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
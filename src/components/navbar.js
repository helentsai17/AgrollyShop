import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";

import { withTranslation } from 'react-i18next';

class navbar extends Component {

    logOut(e) {
        localStorage.removeItem('usertoken')
        // this.props.history.push('/')
        window.location = '/'
    }

    // const { t, i18n } = useTranslation();

    // function LanguageClick(lang) {
    //     i18n.changeLanguage(lang)
    // }

    render() {
    const { t } = this.props;
    const loginRegLink = (

        <ul className="navbar-nav">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {t('about.1')}
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="/about/technology">Technology</a>
                    <a className="dropdown-item" href="/work-with-us">work with us</a>
                    <a className="dropdown-item" href="#">media</a>
                </div>
            </li>


            <li className="nav-item">
                <Link to="/shop" className="nav-link">
                    {t("shop.1")}
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/farmer/login" className="nav-link">
                    {t("login.1")}
                </Link>
            </li>
        </ul>
    )

    const userLink = (
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link to="/farmer/cropSell" className="nav-link">
                {t("sell.1")}
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/croprisk" className="nav-link">
                    {t("cropRisk.1")}
                </Link>
            </li>

            <li className="nav-item dropdown">
                {/* <Link to="/weather/annaul" className="nav-link">weather</Link> */}
                <a className="nav-link dropdown-toggle" href="#" id="WeatherDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{t("weather.1")}</a>
                <div className="dropdown-menu" aria-labelledby="WeatherDropdown">
                    <a className="dropdown-item" href="/weather/hourly">hour</a>
                    <a className="dropdown-item" href="/weather/weekly">Weekly</a>
                    <a className="dropdown-item" href="/weather/annaul">Annaul</a>
                </div>
            </li>

            <li className="nav-item dropdown">
                {/* <Link to="/forum/brazil" className="nav-link">discussion</Link> */}
                <a className="nav-link dropdown-toggle" href="#" id="ForumDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {t("forum.1")}
                </a>
                <div className="dropdown-menu" aria-labelledby="ForumDropdown">
                    <a className="dropdown-item" href="/forum/brazil">discussion</a>
                    <a className="dropdown-item" href="/forum/myquesiton">my question</a>
                </div>
            </li>

            <li className="nav-item">
                <Link to="/farmer/profile" className="nav-link">
                    {t("profile.1")}
                </Link>
            </li>
            <li className="nav-item">
                <a onClick={this.logOut.bind(this)} className="nav-link">
                    {t("logout.1")}
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
                            {t("home.1")}
                        </Link>
                    </li>
                    <li>
                        <Link to="/news" className="nav-link">
                            {t("news.1")}
                        </Link>
                    </li>

                </ul>
                {localStorage.usertoken ? userLink : loginRegLink}

            </div>

        </nav>
    );
    }

}
let Navbar = withTranslation()(navbar)
    // Navbar = withRouter(navbar)

export default Navbar

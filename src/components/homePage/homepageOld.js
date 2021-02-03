import React, { Component } from 'react';
import style from './homepageOld.module.css';

import Footer from '../footer/footer'
import Feature from './prefeature'
import CountryButoon from './countrybutton'
import HomepageWorldNews from './homepageWorldNews'
import News from './agrollynews'

import Partnerlogo from './partnerlogo';


export default class homePageOld extends Component {

    render() {
        return (
            <div>
                <section className={style.cover}>
                    <div className="row">
                        <div className={`col-md-6 ${style.titletext}`} >
                            <h1>Helping farmers to effectively plant the right crops in the right place and weather</h1>
                            <button type="button" className={`btn btn-dark btn-lg ${style.googlebtn}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href = 'https://play.google.com/store/apps/details?id=com.coakum.agrolly';
                                }}><i className="fab fa-google-play"></i> Download</button>
                            <button type="button" className={`btn btn-dark btn-lg ${style.googlebtn}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href = 'https://www.youtube.com/watch?v=VT4RKHwQ1hQ&feature=youtu.be';
                                }}><i className="fas fa-film"></i> Video</button>
                        </div>
                    </div>
                </section>

                <section className={style.agrollyAffiliates}>
                    <h3>Agrolly Affiliates</h3>
                    <CountryButoon/>
                </section>

                <section className={style.agrollyDescription}>
                    <h1>what is agrolly</h1>
                    <h5>Agrolly is a solution that help Rural household farmers to fight climate change, it private information and technology for farmer to handle risk, gaining farming knowledge and get to know others.  Agrolly provide open source solution and local connection to the country.</h5>
                </section>

                <section className={style.homepagenews}>
                    <h3>World News</h3>
                    <HomepageWorldNews/>
                    <h3>Agrolly News</h3>
                    <News/>
                </section>

                <Feature/>

                <section className={style.partnerlogo}>
                   <Partnerlogo/>
                </section>
                    
                <Footer />

            </div>
        )
    }
}

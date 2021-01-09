import React, { Component } from 'react';
import style from './homepageOld.module.css';


import phoneimage from '../../Image/phoneImage/phoneimg.png'
import codeForCode from '../../Image/partner/2020_callforcode_logo.png'
import BgovermentLogo from '../../Image/partner/Bazil goverment logo.png'
import CampoLogo from '../../Image/partner/campo_real_logo.png'

import Footer from '../footer/footer'
import Feature from '../aboutPage/prefeature'
import CountryButoon from './countrybutton'


export default class homePageOld extends Component {

    render() {
        return (
            <div>
                <section className={style.title}>
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
                        <div className={`col-md-6 ${style.imagediv}`}>
                            <img className={style.cellphoneimg} src={phoneimage} alt="our app"></img>
                        </div>
                    </div>
                </section>

                <section>
                    <h1>Agrolly Affiliates</h1>
                    <CountryButoon/>
                </section>

                <section className={style.agrollyDescription}>
                    <h1>what is agrolly</h1>
                    <p>Agrolly is a solution that help Rural household farmers to fight climate change, it private information and technology for farmer to handle risk, gaining farming knowledge and get to know others.  Agrolly provide open source solution and local connection to the country.</p>
                </section>

                <section className={style.news}>
                    <h1>we put the news here</h1>
                </section>

                <Feature/>

                <section className={style.partnership}>
                    <div>
                        <img className={style.partnerImage} height="110px" src={codeForCode} alt="2020 call for code" />
                        <img className={style.partnerImage} height="110px" src={BgovermentLogo} alt="Bazil goverment logo" />
                        <img className={style.partnerImage} height="110px" src={CampoLogo} alt="campo real" />
                    </div>
                </section>
                    
                <Footer />

            </div>
        )
    }
}

import React, { Component } from 'react';
import style from './homepageOld.module.css';


import phoneimage from '../../Image/phoneImage/phoneimg.png'
import codeForCode from '../../Image/partner/2020_callforcode_logo.png'
import BgovermentLogo from '../../Image/partner/Bazil goverment logo.png'
import CampoLogo from '../../Image/partner/campo_real_logo.png'

import Footer from '../footer/footer'


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

                {/* what we do */}
                <section className={style.feature} id="whatWeDo">
                    <div>
                        <div className="row">

                            <div className={`col-lg-2 ${style.skillBox}`}>

                                <i className={`fas fa-bell fa-3x ${style.icon}`}></i>
                                <h5>Real Time Weather</h5>
                                <p className={style.iconText}>Want to know about the local weather forecast? Agrolly gives you real-time prevision of rain, storm, ice & snow reports. Hourly and daily forecast.</p>

                            </div>

                            <div className={`col-lg-2 ${style.skillBox}`}>

                                <i className={`fas fa-cloud fa-3x ${style.icon}`}></i>
                                <h5>Long Term Weather Forecast</h5>
                                <p className={style.iconText}>Want to efficiently plan your plantation? We provide you one-year rainfall (mm) and temperature forecast by city. We periodically run several models to give you better accuracy. </p>
                            </div>

                            <div className={`col-lg-2 ${style.skillBox}`}>

                                <i className={`fas fa-lemon fa-3x ${style.icon}`}></i>
                                <h5>Crops Risk</h5>
                                <p className={style.iconText}>Want to know the impacts that the weather can have on your plan? We combine the weather forecast with the crop water requirements using FAO* standards, which are tailored for the location of each farmer, type of crop, and stage of the plantation.  In a visual and interactive scream.</p>

                            </div>

                            <div className={`col-lg-2 ${style.skillBox}`}>
                                <i className={`fas fa-mobile-alt fa-3x ${style.icon}`}></i>
                                <h5>Get connected</h5>
                                <p className={style.iconText}>Want to connect to other farmers, agronomists, experts, and bankers?
                                Agrolly can support you to network with others whom you can learn and exchange know-how.</p>
                            </div>

                            <div className={`col-lg-2 ${style.skillBox}`}>
                                <i className={`fas fa-phone-volume fa-3x ${style.icon}`}></i>
                                <h5>*Contact specialist</h5>

                                <p className={style.iconText}>Need professional help? Agrolly can help you to talk to agronomists and experts.</p>
                                <small>(coming up)</small>
                            </div>

                            <div className={`col-lg-2 ${style.skillBox}`}>

                                <i className={`fas fa-leaf fa-3x ${style.icon}`}></i>
                                <h5>*Services & Sells</h5>
                                <p className={style.iconText}>Want to sell your old machine? Or want to share the price of a specialist consult? Agrolly provides a place where you can sell, exchange or buy everything with other farmers.</p>
                                <small>(coming up)</small>
                            </div>


                        </div>
                    </div>
                </section>

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

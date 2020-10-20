import React, { Component } from 'react';
import style from './homepageOld.module.css';

import Ajinkya from '../../Image/us/Ajinkya Photo.jpeg'
import Manoela from '../../Image/us/Manoela Photo.jpg'
import Chimka from '../../Image/us/Chimegsaikhan Munkhbayar.jpg'
import Helen from '../../Image/us/Helen.jpeg'
import phoneimage from '../../Image/phoneImage/phoneimg.png'

import watson from '../../Image/icon/IBM watson.png'
import IBMdata from '../../Image/icon/IBM database.png'
import cordova from '../../Image/icon/cordova_logo.png'
import Ionic from '../../Image/icon/Ionic.png'
import Rlogo from '../../Image/icon/R_logo.png'

import Footer from '../../components/footer'


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

                {/* about us */}
                <section id={style.whoWeAre}>
                    <div className="row">
                        <div className={`col-md-3 ${style.cardView}`}>
                            <img src={Manoela} className={style.projectImage} alt="Manoela" />
                            <div>
                                <p className="name-text"> Manoela Morais</p>
                                <p className="title-text">CEO</p>
                                <p className="info-text">BS in Chemical Engineering, MBA in Business. MS in Automation and MS in Financial Risk Management. Certified PMP, SCOR-P, APICS and Six Sigma.</p>
                                <a href="https://www.linkedin.com/in/ajinkya-datalkar/">
                                    <i className="fab fa-linkedin fa-2x linkicon"></i></a>
                            </div>
                        </div>
                        <div className={`col-md-3 ${style.cardView}`}>
                            <img src={Ajinkya} className={style.projectImage} alt="Ajinkya" />
                            <div>
                                <p className="name-text"> Ajinkya Datalkar</p>
                                <p className="title-text">CTO</p>
                                <p className="info-text">Bachelor of Engineering in Electronics & Telecommunication and MS in Computer Science. Specialized in C++, PHP, Javascript, AJAX, MSQL.</p>
                                <a href="https://www.linkedin.com/in/ajinkya-datalkar/">
                                    <i className="fab fa-linkedin fa-2x linkicon"></i></a>
                            </div>
                        </div>
                        <div className={`col-md-3 ${style.cardView}`}>
                            <img src={Chimka} className={style.projectImage} alt="Chimegsaikhan" />
                            <div>
                                <p className="name-text">Chimka Munkhbayar</p>
                                <p className="title-text">Asia Head of Sales & Marketing</p>
                                <p className="info-text">BA in Informatics and MBA in Entrepreneurship. Fulbright scholar 2018-2020.</p>
                                <a href="https://www.linkedin.com/in/chimka-munkhbayar-0ab421b5/"><i
                                    className="fab fa-linkedin fa-2x linkicon"></i></a>
                            </div>
                        </div>
                        <div className={`col-md-3 ${style.cardView}`}>

                            <img src={Helen} className={style.projectImage} alt="Helen" />
                            <div >
                                <p className="name-text">Helen Tsai</p>
                                <p className="title-text">Web developer Lead</p>
                                <p className="info-text">Master in computer science, AIOT and Software developer intern in Mitac Taiwan, Specialized in Java, Javascript, C#, MySQL, MongoDB and node.js</p>
                                <a href="https://www.linkedin.com/in/helen-tsai-teyi/"><i
                                    className="fab fa-linkedin fa-2x linkicon"></i></a>

                            </div>
                        </div>
                    </div>
                </section>
                {/* use tech */}
                <section id={style.useTech}>
                    <div>
                        <img height="110px" src={watson} alt="IBM watson" />
                        <img height="110px" src={IBMdata} alt="IBM Database" />
                        <img height="110px" src={cordova} alt="cordova" />
                        <img height="110px" src={Ionic} alt="Ionic" />
                        <img height="110px" src={Rlogo} alt="R" />

                    </div>
                </section>

                <Footer/>

            </div>
        )
    }
}

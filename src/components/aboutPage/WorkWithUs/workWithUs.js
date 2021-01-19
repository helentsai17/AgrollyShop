import React, { Component } from 'react';
import style from '../about.module.css';

import watson from '../../../Image/icon/IBM watson.png'
import IBMdata from '../../../Image/icon/IBM database.png'
import cordova from '../../../Image/icon/cordova_logo.png'
import Ionic from '../../../Image/icon/Ionic.png'
import Rlogo from '../../../Image/icon/R_logo.png'

import Partner from './partnerComponent'
import Footer from '../../footer/footer'
import OpenSourelink from './openSource';


export default class workWithUs extends Component {
    render() {
        return (
            <div>
                <section className={style.workwithusTitle}>
                    <h1>Join The Open Souce and Work with us</h1>
                </section>
                
                <OpenSourelink />
                <Partner />

                <section id={style.useTech}>
                    <div>
                        <img height="110px" src={watson} alt="IBM watson" />
                        <img height="110px" src={IBMdata} alt="IBM Database" />
                        <img height="110px" src={cordova} alt="cordova" />
                        <img height="110px" src={Ionic} alt="Ionic" />
                        <img height="110px" src={Rlogo} alt="R" />
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}
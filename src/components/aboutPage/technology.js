import React, { Component } from 'react';
import ForcaseImage from '../../Image/TechPageImage/FunctionImage.png'
import ForumImage from '../../Image/TechPageImage/PhoneImage.png'
import RiskManagement from '../../Image/TechPageImage/DesktopImage.png'

import Footer from '../footer/footer'
import style from './technology.module.css'


export default class technology extends Component {
    render() {


        return (
            <div>
                <section className={style.FocaseSection}>
                    <div>
                        <h1>weather forcase</h1>
                        <p className={style.featureContent}>With the help of IBM weather company data and the NASA weatehr data, Agrolly are able to generate and prodict the Anunal weather forcase and also provide weekly forcase to the local farmer.</p>
                        <ul>
                            <li className={style.featureContent}>annual weather prodiction</li>
                            <li className={style.featureContent}>weekly weather forcast</li>
                        </ul>
                    </div>
                    <div className={style.ForcaseImage}>
                        <img src={ForcaseImage} alt="Forcase Image" />
                    </div>
                </section>

                <section className={style.ForumSection}>
                    <div className={style.ForumImage}>
                        <img src={ForumImage} alt="Forum Image" />
                    </div>
                    <div>
                        <h1>Farmer forum</h1>
                        <p className={style.featureContent}>have agriculture quesion but no place to ask? <br></br>you are not alone, Agrolly provide a place for you to ask you question to other farmer, some time even farmer specialist to answer you question. you are also free to answer other farmers question from your experience and impove ther famring socility </p>
                    </div>
                </section>

                <section className={style.RickSection}>
                    <div>
                        <h1>Risk management system</h1>
                        <p className={style.featureContent}>The most special about agrolly is the feature of recommenting the right crop to plant. with our whether forcase and the crop data knowleage, we generate the suggestion for every specific and how to maintain with the right supprt to help farmer to reduce the risk. </p>
                    </div>
                    <div className={style.ForcaseImage}>
                        <img src={RiskManagement} alt="" />
                    </div>

                </section>



                <Footer />

            </div>

        )
    }
}
import React, { Component } from 'react';
import style from './feedbackpage.module.css'

import logo from '../../Image/Agrolly/Agrolly logo.png'
import Footer from '../footer/footer'

export default class FeedbackPage extends Component {


    render() {
        return (
            <div className={style.feedbackbackground}>
                <div className={style.titleContainer}>
                    <h3 className={style.titletext}>Agrolly thank you for your feedback</h3>
                </div>
                <div className={style.feedbackcontainer}>
                    <section className={style.agrollyLogo}>
                        <img className={style.logoimage} src={logo} alt="agrolly logo" />
                    </section>
                    <div className={style.feedbackform}>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Phone Number</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div>

                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="inputGroupSelect01">Country</label>
                            <select className="form-select" id="inputGroupSelect01">
                                <option value="Mongolia">Mongolia</option>
                                <option value="Brazil">Brazil</option>
                                <option value="India">India</option>
                                <option value="Taiwan">Taiwan</option>
                                <option value="Agrolly">Agrolly</option>
                            </select>
                        </div>

                        <div className="form-floating">
                            <label htmlFor="floatingTextarea">Please give us your feedback here</label>
                            <textarea className="form-control" placeholder="thank you for your feedback, your feedback will help us grow" id="floatingTextarea" style={{ "height": "300px" }}></textarea>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
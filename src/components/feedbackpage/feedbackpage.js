import React, { Component } from 'react';


export default class FeedbackPage extends Component {


    render() {
        return (
            <div>
                <section>
                    <h1>thank you for your feedback</h1>
                </section>
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
                    <label htmlFor="floatingTextarea">Your Feedback</label>
                    <textarea className="form-control" placeholder="thank you for your feedback, your feedback will help us alot" id="floatingTextarea" style={{"height":"100px"}}></textarea>
                </div>
            </div>
        )
    }
}
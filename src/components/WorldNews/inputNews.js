import React, { Component } from 'react';
import style from './inputNews.module.css'

export default class InputNews extends Component {


    render() {
        return (
            <div className={style.container}>
                <section>
                    <h1>What New</h1>
                </section>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">News Headline</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Image URL</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Reference Link</span>
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
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">City</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>

                <div className="form-floating">
                    <label htmlFor="floatingTextarea">News Content</label>
                    <textarea className="form-control" placeholder="Put your news content" id="floatingTextarea" style={{"height":"100px"}}></textarea>
                </div>
            </div>
        )
    }
}
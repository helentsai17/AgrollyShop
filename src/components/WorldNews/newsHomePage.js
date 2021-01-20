import React, { Component } from 'react';
import NewsComponent from './newsComponent'
import style from './newsCards.module.css'

export default class newsHomePage extends Component {



    render() {
        return (
            <div>
                <section>
                    <h1>NEWS</h1>
                </section>
                <section>
                    <label htmlFor="Country">Country:</label>
                    <select name="Country" id="Country">
                        <option value="Mongolia">Mongolia</option>
                        <option value="Brazil">Brazil</option>
                        <option value="India">India</option>
                        <option value="Taiwan">Taiwan</option>
                        <option value="Agrolly">Agrolly</option>
                    </select>
                </section>

                <section >
                    <NewsComponent />
                </section>
            </div>
        )
    }
}
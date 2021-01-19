import React, { Component } from 'react';

export default class newsHomePage extends Component {

    

    render() {
        return (
            <div>
                <section>
                    <h1>NEWS</h1>
                </section>
                <section>
                    <label for="Country">Country:</label>
                    <select name="Country" id="Country">
                        <option value="Mongolia">Mongolia</option>
                        <option value="Brazil">Brazil</option>
                        <option value="India">India</option>
                        <option value="Taiwan">Taiwan</option>
                        <option value="Agrolly">Agrolly</option>
                    </select>
                </section>
                <section>

                </section>
            </div>
        )
    }
}
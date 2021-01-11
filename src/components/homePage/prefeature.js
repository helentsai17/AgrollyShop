import React from 'react';
import { Component } from 'react';
import style from './Prefeature.module.css'



export default class prefeature extends Component {
    render() {
        return (
            <div className={style.accordion}>
                <ul>
                    <li tabindex="1">
                        <div>
                            <a href="#">
                                <h2>Annual Data Prodiction</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </a>
                        </div>
                    </li>
                    <li tabindex="2">
                        <div>
                            <a href="#">
                                <h2>Crop Plantting Sugguestion</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </a>
                        </div>
                    </li>
                    <li tabindex="3">
                        <div>
                            <a href="#">
                                <h2>Farmer Forum</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </a>
                        </div>
                    </li>
                   
                    
                </ul>
            </div>
        )
    }


}


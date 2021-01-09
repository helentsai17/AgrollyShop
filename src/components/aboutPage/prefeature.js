import React from 'react';
import { Component } from 'react';
import style from './Prefeature.module.css'
import $ from "jquery"


export default class prefeature extends Component {
    render() {
        return (
            <div className={style.accordion}>
                <ul>
                    <li tabindex="1">
                        <div>
                            <a href="#">
                                <h2>Lorem Ipsum</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </a>
                        </div>
                    </li>
                    <li tabindex="2">
                        <div>
                            <a href="#">
                                <h2>Lorem Ipsum</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </a>
                        </div>
                    </li>
                    <li tabindex="3">
                        <div>
                            <a href="#">
                                <h2>Lorem Ipsum</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </a>
                        </div>
                    </li>
                   
                    
                </ul>
            </div>
        )
    }


}


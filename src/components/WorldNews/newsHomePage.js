import React, { Component } from 'react';
import NewsComponent from './newsComponent'
import style from './newsHomePage.module.css'

export default class newsHomePage extends Component {



    render() {
        return (
            <div>
                <section className={style.newsTitle}>
                    <h1>NEWS</h1>
                </section>
                
                <section >
                    <NewsComponent />
                </section>
            </div>
        )
    }
}
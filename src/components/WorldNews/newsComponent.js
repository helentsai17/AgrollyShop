import React, { Component } from 'react'
import axios from 'axios';
import NewsCards from './newsCards'
import style from './newsCards.module.css'

export default class NewsComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { news: [] };
    }

    componentDidMount() {

        axios.get('http://localhost:5000/news/allnews')
            .then(response => {
                console.log(response.data)
                const news = response.data;
                this.setState({ news });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    NewsList() {
        return this.state.news.map(currentnews => {
            if (currentnews.news_id !== null) {
                return <NewsCards key={currentnews.news_id} news={currentnews} />;
            }
        })
    }



    render() {
        return (
            <div className={style.site}>
                {this.NewsList()}
            </div>
        )
    }
}
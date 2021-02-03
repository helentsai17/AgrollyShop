import React, { Component } from 'react'
import Card from './newsTemplet'
import style from './newsTemplet.module.css'
import axios from 'axios';

export default class HomepageWorldNews extends Component {

    constructor(props) {
        super(props);
        this.countrySearch = this.countrySearch.bind(this)
        this.state = { 
            news: [],
            search:"Agrolly"
        };
    }

    componentDidMount() {

        axios.get('http://localhost:5000/news/allnews')
            .then(response => {
                // console.log(response.data)
                const news = response.data;
                this.setState({ news :news });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    countrySearch(e){
        this.setState({search:e.target.value})
    }

    NewsList() {
        let filterCountry = this.state.news.filter(
            (countries) =>{
                // console.log(countries.country.toLowerCase().includes(this.state.search.toLowerCase() != -1))
                return countries.country.toLowerCase()!= (this.state.search.toLowerCase())
            }
        )
        return filterCountry.slice(0, 4).map(currentnews => {
            if (currentnews.news_id !== null) {
                return <Card key={currentnews.news_id} news={currentnews} />;
            }
        })
    }

    render() {
        return (
            <div className={style.site}>
               { this.NewsList()}
            </div>
        )
    }
}
import React, { Component } from 'react'
import axios from 'axios';
import NewsCards from './newsCards'
import style from './newsCards.module.css'


export default class NewsComponent extends Component {

    constructor(props) {
        super(props);
        this.countrySearch = this.countrySearch.bind(this)
        this.state = { 
            news: [],
            search:"" 
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
                console.log(countries.country.toLowerCase().includes(this.state.search.toLowerCase() != -1))
                return countries.country.toLowerCase().includes(this.state.search.toLowerCase())
            }
        )
        return filterCountry.map(currentnews => {
            if (currentnews.news_id !== null) {
                return <NewsCards key={currentnews.news_id} news={currentnews} />;
            }
        })
    }



    render() {
        return (
            <div>
                <section className={style.countryfilter} >
                    <label htmlFor="Country">Country:</label>
                    <select name="Country" id="Country" value={this.state.search} onChange={this.countrySearch}>
                        <option defaultValue value="">All</option>
                        <option value="Mongolia">Mongolia</option>
                        <option value="Brazil">Brazil</option>
                        <option value="India">India</option>
                        <option value="Taiwan">Taiwan</option>
                        <option value="United State">United State</option>
                        <option value="Agrolly">Agrolly</option>
                    </select>
                </section>
                <div className={style.site}>
                    {this.NewsList()}
                </div>
            </div>
        )
    }
}
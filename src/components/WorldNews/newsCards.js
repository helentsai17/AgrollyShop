import React from 'react';
import style from './newsCards.module.css'


function NewsCards(props) {

    return (
        <div>
            <img className={style.newsImage} src={props.news.imageURL} alt=""/>
            <h4 >{props.news.title}</h4>
            <p>{props.news.city} {props.news.country}  {props.news.date}</p>
        </div>
    )
}

export default NewsCards;
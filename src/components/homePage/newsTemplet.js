import React from 'react';
import style from './newsTemplet.module.css'
import { Link } from 'react-router-dom';


function NewsPreview(props) {

    return (
        <div className={style.newsCard}>
            <div>
                <Link className={style.editButton} to={"/happened/" + props.news.news_id}>
                    <img className={style.newsImage} src={props.news.imageURL} alt="" />
                    <h4 className={style.titleText}>{props.news.title}</h4>
                    <p>{props.news.city} {props.news.country} <small>{props.news.date}</small></p>
                </Link>
            </div>
        </div>

    )
}

export default NewsPreview;






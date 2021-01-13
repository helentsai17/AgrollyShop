import React from 'react';
import style from './newsTemplet.module.css'



function NewsPreview(props) {

    return (
        <div className={style.newsCard}>
            <a href={props.link}>
                <img className={style.newsImage} src={props.image} alt="" />
                <h4 className={style.titleText}>{props.title}</h4>
                <p>{props.city} {props.country} <small>{props.date}</small></p>
            </a>
        </div>
    )
}

export default NewsPreview;






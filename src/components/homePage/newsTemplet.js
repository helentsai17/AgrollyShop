import React from 'react';
import style from './newsTemplet.module.css'



function NewsPreview(props) {

    return (
        <div>
            <a href="">
            <img className={style.newsImage} src={props.image} alt="" />
            <h4>{props.title}</h4>
            <p>{props.country}</p>
            <p>{props.date}</p>
            </a>
        </div>
    )
}

export default NewsPreview;






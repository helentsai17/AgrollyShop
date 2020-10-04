import React from 'react';
// import { Link } from 'react-router-dom';
import style from './famerCard.module.css'

function ProductCard(props) {

    return (
        
        <div className = {style.card}>
            <div className = {style.imageCard}>
                <img className={style.piture}  src={props.imageurl} alt=""/>
            </div>
            
            <a href=""><h5>{props.farmerName}</h5></a>
            <p>Location</p>
            <p>The price of the item is based on weight.</p>
        </div>
        
    )
}

export default ProductCard;
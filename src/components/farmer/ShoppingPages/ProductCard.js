import React from 'react';
// import { Link } from 'react-router-dom';
import style from './ProductCard.module.css'

function ProductCard(props) {

    return (
        <div className = {style.card}>
            <div className = {style.imageCard}>
                <img className={style.piture}  src="https://images-na.ssl-images-amazon.com/images/I/91Daqildo4L._SL1500_.jpg" alt=""/>
            </div>
            
            <a href=""><h5>Apple Gala Conventional, 1 Each</h5></a>
            <p>$0.89/lb</p>
            <p>The price of the item is based on weight.</p>
        </div>
    )
}

export default ProductCard;
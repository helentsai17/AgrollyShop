import React from 'react';
import style from './ServiceCard.module.css'
import image from '../../Image/potato.png'

function ServiceCard(props) {

    return (
        <div className="col-large-4" >
            <div className={style.card} style={{ "backgroundColor": "#90EE90" }}>
                <div>
                    <img className={style.images} src={image} alt="" />
                </div>
                <h5>Fruits & vegetables</h5>

            </div>
        </div>
    )
}

export default ServiceCard;
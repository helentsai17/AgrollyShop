import React from 'react';
import style from './countrybutton.module.css'


function countryButton(props) {
    const partner1 = require('../../Image/partnerImage/partner1.png')
    const partner2 = require('../../Image/partnerImage/partner2.png')
    return (
        <div >
            <ul className={style.cards}>
                <li figure className={style.card}>
                    <a href="#">
                        <figure className={style.card}>
                            <img className={style.partnerImg} src={partner1} alt="Lines on a tropical leaf." />
                            <figcaption className={style.caption}>
                                <h3 class={style.captionTitle}>Mongolian</h3>
                            </figcaption>
                        </figure>
                    </a>
                </li>
                <li >
                    <a href="">
                        <figure className={style.card}>
                            <img className={style.partnerImg} src={partner2} alt="" />
                            <figcaption className={style.caption}>
                                <h3 className={style.partnerTitle}>Barzil</h3>
                            </figcaption>
                        </figure>
                    </a>
                </li>
                <li >
                    <a href="">
                        <figure className={style.card}>
                            <img className={style.partnerImg} src={partner2} alt="" />
                            <figcaption className={style.caption}>
                                <h3 className={style.partnerTitle}>India</h3>
                            </figcaption>
                        </figure>
                    </a>
                </li>
                <li >
                    <a href="#">
                        <figure className={style.card}>
                            <img className={style.partnerImg} src={partner1} alt="Lines on a tropical leaf." />
                            <figcaption className={style.caption}>
                                <h3 class={style.captionTitle}>Taiwan</h3>
                            </figcaption>
                        </figure>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default countryButton;
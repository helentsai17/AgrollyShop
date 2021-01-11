import React from 'react';
import style from './countrybutton.module.css'


function countryButton(props) {
    const Mongolia = require('../../Image/Country/Mongolia.png')
    const Brazil = require('../../Image/Country/Brazil.png')
    const India = require('../../Image/Country/India.png')
    const Taiwan = require('../../Image/Country/Taiwan.png')
    return (
        <div >
            <ul className={style.cards}>
                <li >
                    <a href="">
                        <figure className={style.card}>
                            <img className={style.partnerImg} src={Mongolia} alt="" />
                            <figcaption className={style.caption}>
                                <h3 className={style.partnerTitle}>Mongolia</h3>
                            </figcaption>
                        </figure>
                    </a>
                </li>
                <li >
                    <a href="">
                        <figure className={style.card}>
                            <img className={style.partnerImg} src={Brazil} alt="" />
                            <figcaption className={style.caption}>
                                <h3 className={style.partnerTitle}>Barzil</h3>
                            </figcaption>
                        </figure>
                    </a>
                </li>
                <li >
                    <a href="">
                        <figure className={style.card}>
                            <img className={style.partnerImg} src={India} alt="" />
                            <figcaption className={style.caption}>
                                <h3 className={style.partnerTitle}>India</h3>
                            </figcaption>
                        </figure>
                    </a>
                </li>
                <li >
                    <a href="#">
                        <figure className={style.card}>
                            <img className={style.partnerImg} src={Taiwan} alt="Lines on a tropical leaf." />
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
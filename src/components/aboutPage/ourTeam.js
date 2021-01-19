import React, { Component } from 'react';
import style from './ourTeam.module.css';

import Ajinkya from '../../Image/us/Ajinkya Photo.jpeg'
import Manoela from '../../Image/us/Manoela Photo.jpg'
import Chimka from '../../Image/us/Chimegsaikhan Munkhbayar.jpg'
import Helen from '../../Image/us/Helen.jpeg'

import Footer from '../footer/footer'

export default class OurTeam extends Component {
    render() {
        return (
            <div>

                <section className={style.ourStory}>
                    <img className={style.ourStoryImg} src="https://3kda485d4m0mmprok50zsd5m-wpengine.netdna-ssl.com/wp-content/uploads/2020/10/hero-video-bg-oct19.png" alt=""/>
                    <div className={style.ourStoryText}>
                    <h3>Our story</h3>
                    <p>Four individuals come from for different countries with different backgrounds and met in “The New York City” while studying in the same university graduate school they actively join multiple competition and strengthen their skill,  all of them have the same goal is to contribute to their country and the people they love and make the world a better place. </p>
                    <p>2020 four of them join up and get involve in IBM Call for Code and answer the Call, with the faith of helping their country fighting for climate change they came up with the solution to help local farmer to gain planting knowledge and making risk management. Now Agrolly is moving forward to more countries and helping and improving local farmer day by day.</p>
                </div>
                </section>

                <section id={style.whoWeAre}>
                    <div className={style.titles}>
                        <h3>The Agrolly Team</h3>
                    </div>

                    <div className={style.memberContainer}>

                        <div className={style.personImg}>
                            <img src={Manoela} className={style.projectImage} alt="Manoela" />
                        </div>
                        <div className={style.personaContain}>
                            <p className={style.nameText}>Manoela Morais</p>
                            <p className={style.titleText}>CEO</p>
                            <p className={style.infoText}>BS in Chemical Engineering, MBA in Business. MS in Automation and MS in Financial Risk Management. Certified PMP, SCOR-P, APICS and Six Sigma.</p>
                            <a href="https://www.linkedin.com/in/ajinkya-datalkar/">
                                <i className="fab fa-linkedin fa-1x linkicon"></i></a>
                        </div>

                        <div className={style.personImg}>
                            <img src={Ajinkya} className={style.projectImage} alt="Ajinkya" />
                        </div>
                        <div className={style.personaContain}>
                            <p className={style.nameText}>Ajinkya Datalkar</p>
                            <p className={style.titleText}>CTO</p>
                            <p className={style.infoText}>Bachelor of Engineering in Electronics & Telecommunication and MS in Computer Science. Specialized in C++, PHP, Javascript, AJAX, MSQL.</p>
                            <a href="https://www.linkedin.com/in/ajinkya-datalkar/">
                                <i className="fab fa-linkedin fa-1x linkicon"></i></a>
                        </div>


                        <div className={style.personImg}>
                            <img src={Chimka} className={style.projectImage} alt="Chimegsaikhan" />
                        </div>
                        <div className={style.personaContain}>
                            <p className={style.nameText}>Chimka Munkhbayar</p>
                            <p className={style.titleText}>COO</p>
                            <p className={style.infoText}>BA in Informatics and MBA in Entrepreneurship. Fulbright scholar 2018-2020.</p>
                            <a href="https://www.linkedin.com/in/chimka-munkhbayar-0ab421b5/"><i className="fab fa-linkedin fa-1x linkicon"></i></a>
                        </div>

                        <div className={style.personaContain}>
                            <img src={Helen} className={style.projectImage} alt="Helen" />
                        </div>
                        <div className={style.personaContain}>
                            <p className={style.nameText}>Helen Tsai</p>
                            <p className={style.titleText}>Web developer Lead</p>
                            <p className={style.infoText}>Master in computer science, AIOT and Software developer intern in Mitac Taiwan, Specialized in Java, Javascript, C#, MySQL, MongoDB and node.js</p>
                            <a href="https://www.linkedin.com/in/helen-tsai-teyi/"><i className="fab fa-linkedin fa-1x linkicon"></i></a>
                        </div>

                    </div>
                </section>
                <Footer/>
            </div>
        )
    }
}
import React from 'react';
import style from './foot.module.css'

function Footer(props) {
    return (
        <div className={style.footerBG}>
            <div className={style.site}>

                <section >
                    <div>
                        <h5>Agrolly</h5>
                        <a href="">Annual Data Prodiction</a> <br />
                        <a href="">Crop Plantting Suguestion </a> <br />
                        <a href="">Farmer Forum</a>
                    </div>
                </section>

                <section >
                    <div >
                        <h5>About</h5>
                        <a href="/our-team">Our Team</a> <br/>
                        <a href="/work-with-us">Work With Us</a><br/>
                        <a href="/feedback">feedback & contact</a>
                    </div>
                </section>

                <section>
                    <div>
                        <h5>Countries</h5> 
                        <a href="">Mongolia</a> <br/>
                        <a href="">Brazil</a> <br/>
                        <a href="">India</a> <br/>
                        <a href="">Taiwan</a> <br/>
                    </div>
                </section>

                <section>
                    <div>
                        <div >
                            <h5>Contact</h5>
                            <a href="mailto:agrolly.tech@outlook.com?Subject=Contact%20from%20Website">Agrolly.tech@outlook.com</a> <br/>
                            <a className = {style.iconlink}href="https://www.youtube.com/channel/UC3O0AvJgDWX8VzO7SVOwy3Q?view_as=subscriber"><i class="fab fa-facebook-square fa-2x"></i></a>
                            <a className = {style.iconlink}href="https://www.youtube.com/channel/UC3O0AvJgDWX8VzO7SVOwy3Q?view_as=subscriber" ><i className="fab fa-youtube-square fa-2x"></i></a>
                            <a className = {style.iconlink}href="https://instagram.com/agrolly.tech?igshid=1dqswbkcu823x" ><i className="fab fa-instagram fa-2x"></i></a>
                            <a className = {style.iconlink}href="https://www.linkedin.com/company/agrolly/about/?viewAsMember=true" ><i className="fab fa-linkedin fa-2x"></i></a>

                        </div>
                    </div>
                </section>

            </div>


        </div>
    )
}

export default Footer;
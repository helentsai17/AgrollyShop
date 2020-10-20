import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <div>
            <div className="row">
                <div class="col-lg-3">
                    <h6>ABOUT</h6>
                    <a href="">meet the Team</a>
                </div>
                <div className="row">
                <div className="col-lg-3">
                    <h6>CONTACT</h6>
                    
                    <a href="mailto:agrolly.tech@outlook.com?Subject=Contact%20from%20Website">Agrolly.tech@outlook.com</a>
                    <div >
                    <a style={{"display":"inline-block"}} href="https://www.youtube.com/channel/UC3O0AvJgDWX8VzO7SVOwy3Q?view_as=subscriber"><i className="fab fa-youtube-square fa-2x"></i></a>
                    <a style={{"display":"inline-block"}} href="https://instagram.com/agrolly.tech?igshid=1dqswbkcu823x"><i className="fab fa-instagram fa-2x"></i></a>
                    <a style={{"display":"inline-block"}} href="https://www.linkedin.com/company/agrolly/about/?viewAsMember=true"><i className="fab fa-linkedin fa-2x"></i></a>
                    </div>
                </div>
            </div>
            </div>
            

        </div>
    )
}

export default Footer;
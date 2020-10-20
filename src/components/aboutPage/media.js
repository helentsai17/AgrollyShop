import React from 'react';

export default class Media extends Component {
    render() {
        return (
            <div>
                <section id='video'>
                    <div class="row youtube">
                        <div class="col-lg-3 video-card">
                            <a href="https://www.youtube.com/watch?v=VT4RKHwQ1hQ&t=2s">
                                <iframe class="video-image" src="https://www.youtube.com/embed/VT4RKHwQ1hQ"></iframe>
                                <h5><b>Farming Technology - Introduction video</b></h5>
                                <p>Shows our platfrom and initial technologies</p>
                            </a>
                        </div>
                        <div class="col-lg-3 video-card">
                            <a href="https://www.youtube.com/watch?v=_mRERF0wa1Y">
                                <iframe class="video-image" src="https://www.youtube.com/embed/Mbpxn4i3JjA"></iframe>
                                <h5><b>How to use the Forum and Weather Forecast in the APP</b></h5>
                                <p>Shows step by step how to use the the forum and the weather forecast in the APP.</p>
                            </a>
                        </div>
                        <div class="col-lg-3 video-card">
                            <a href="https://www.youtube.com/watch?v=Ms2gvm8JcK8">
                                <iframe class="video-image" src="https://www.youtube.com/embed/Ms2gvm8JcK8"></iframe>
                                <h5><b>Commercial Folder</b></h5>
                                <p>Commercial folder showing the APP features’ and the benefits of using. </p>
                            </a>
                        </div>
                        <div class="col-lg-3 video-card">
                            <a href="https://www.youtube.com/watch?v=_mRERF0wa1Y">
                                <iframe class="video-image" src="https://www.youtube.com/embed/_mRERF0wa1Y"></iframe>
                                <h5><b>Agrolly - Mongolia- Pilot Feedback </b></h5>
                                <p>Feedback from Agrolly Mongolia Pilot. Bilguuntur, the director of the Alt Margad, a small agricultural farming company in Kherlen soum, Khentii province.</p>
                            </a>
                        </div>

                    </div>
                </section>
            </div>
        )
    }
}
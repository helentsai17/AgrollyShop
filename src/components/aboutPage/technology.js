import React, { Component } from 'react';

export default class technology extends Component {
    render() {

        function myFunction(btn) {
            var x = document.getElementById("av-1");
            var y = document.getElementById("av-2");
            var z = document.getElementById("av-3");
            if (btn == 1) {
                x.style.display = "block";
                y.style.display = "none";
                z.style.display = "none";
            } else if(btn == 2) {
                x.style.display = "none";
                y.style.display = "block";
                z.style.display = "none";
            }else if(btn == 3){
                x.style.display = "none";
                y.style.display = "none";
                z.style.display = "block";
            }else{
                x.style.display = "none";
                y.style.display = "none";
                z.style.display = "none";
            }
        }

        return (
            <div>
                <section id="wheatherF" class="row">
                    <div class="col-md-6 crop-image">
                        <img class="wheather-phone" src="image/phone/weather.png" alt="weather daily and weekly" />
                    </div>
                    <div class="col-md-6 wheather-text">
                        <h3>We provide the weather forecast (daily, weekly, and annually)</h3>
                        <ul>
                            <li style={{ "padding-top": "20px", "padding-bottom": "20px" }}>Real-time weather monitoring (text and visual).</li>
                            <div>
                                <img style={{ "float": "left", "margin-right": "30px" }} class="weather-image" src="image/icon/tech_weatericon_2.png" alt="" />
                                <li style={{ "padding-top": "20px", "padding-bottom": "20px" }}> Long-Term weather forecast (temperature and precipitation).</li>
                            </div>
                            <div>
                                <img style={{ "float": "right", "margin-left": "20px;" }} class="weather-image" src="image/icon/tech_brainicon.png" alt="" />
                                <li style={{ "padding-top": "30px", "padding-bottom": "30px;" }}>Regression + Machine learning models being tested monthly for better accuracy.</li>
                            </div>
                            <div>
                                <img class="weather-image" style={{ "float": "left", "margin-right": "30px" }} src="image/icon/tech_eyesicon_4.png" alt="" />
                                <li style={{ "padding-top": "20px", "padding-bottom": "20px" }}>Weather forecast designed especially for the needs of the small farmer</li>
                            </div>
                            <a href="research/DIsclosure Risk Assessment.pdf" download>
                                <button style={{ "float": " right", "margin-top": "40px;" }} type="button" class="btn btn-outline-light">Read Diclosure</button>
                            </a>
                        </ul>
                    </div>

                </section>

                <section id="suggestion" class="row">
                    <div class="col-md-6 crop-image">
                        <img class="suggest-phone" src="image/phone/crop_management.png" alt="get started" />
                    </div>
                    <div class="col-md-6 featurebtn">
                        <h3>Weather Forecast + Crops Needs + FAO </h3>
                        <div class="accordion" id="accordionExample">
                            <div>
                                <div id="heading">
                                    <h4 class="mb-0 stepbtn">
                                        <button class="btn btn-block btn-link text-left" type="button" data-toggle="collapse"
                                            data-target="#collapse" aria-expanded="true" aria-controls="collapse">
                                            <h5>feature</h5>
                                        </button>
                                    </h4>
                                </div>
                                <div id="collapse" class="collapse show" aria-labelledby="heading" data-parent="#accordionExample">
                                    <div class="card-body">
                                        <ul>
                                            <li>We provide a crop risk Assessment in an easy, visual, and interactive way.</li>
                                            <li>Our algroithms do the heavy lifting, bringing the best-fitted result of weather prediction and crop risk assessment to farmers' hands.</li>
                                            <li>Automatic data generated and tailored for the location, the type of crop, the growing stage of the crop, and forecast weather.</li>
                                            <li>We use the guideline from the Food and Agriulture Organization for the United Nation(FAO) to calculate water needs. </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div id="headingOne">
                                    <h4 class="mb-0 stepbtn">
                                        <button class="btn btn-block btn-link text-left collapsed" type="button"
                                            data-toggle="collapse" data-target="#collapseOne" aria-expanded="false"
                                            aria-controls="collapseOne">
                                            <h5>step 1</h5>
                                        </button>
                                    </h4>
                                </div>
                                <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div class="card-body">
                                        <img class="step-img" src="/image/phone/select.png" alt="" />
                                        <p>Select the year and the day you want to start planting. Choose the place and crop you want to plant and press: "Fetch data" </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div id="headingTwo">
                                    <h4 class="mb-0 stepbtn">
                                        <button class="btn btn-block btn-link text-left collapsed" type="button"
                                            data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"
                                            aria-controls="collapseTwo">
                                            <h5>step 2</h5>
                                        </button>
                                    </h4>
                                </div>
                                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                    <div class="card-body">
                                        <img class="step-img" src="/image/phone/crop.png" alt="" />
                                        <p>The crop will display the temperature and water necessary condition for crop growth. Tailored by month, crop and stage of the crop.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div id="headingThree">
                                    <h4 class="mb-0 stepbtn">
                                        <button class="btn btn-link btn-block text-left collapsed" type="button"
                                            data-toggle="collapse" data-target="#collapseThree" aria-expanded="false"
                                            aria-controls="collapseThree">
                                            <h5>step 3</h5>
                                        </button>
                                    </h4>
                                </div>
                                <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
                                    data-parent="#accordionExample">
                                    <div class="card-body">
                                        <img class="step-img" src="/image/phone/prodic.png" alt="" />
                                        <p>We compare the crop water requried by the crop in the month and forcasted of the rainfall in the month.
                                        GREEN shows that the paramether is satisfactory of has a lower probability of having an issue during the plaining duration
                                        RED shows that the paramether might be an issue in the farmer's plants.</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </section>

                <section id="structure" class="row">

                    <div class="col-md-6">
                        <img class="structure-imge" src="image/structure.png" alt="our structure" />
                    </div>

                    <div class="col-md-6 structure-text">
                        <ol style={{ "color": "white" }}>
                            <li>App uses <b>IBM’s Weather Company</b> to display hourly and weekly forecasts based on the location
                    of the user.</li>
                            <li>We collect the weather information for the past 5 years from <b>NASA</b> and we generate annual
                    predictions with the help of the IBM Watson studio.</li>
                            <li>For more information related regression , please read <a href="research/Write Paper_Mongolia’s Rainfall Forecast using Rstudio.pdf" download>our article</a> here</li>
                            <li>We use FAO's guideline for the Risk Mangament caulcualtion for more information see <a
                                href="http://www.fao.org/3/s2022e/s2022e00.htm">guideline</a> here</li>
                        </ol>

                    </div>

                </section>

                <section id="availabletime" class="row">

                    <div class="col-md-6">
                        <img class="structure-imge" src="image/available map.png" alt="" />
                    </div>

                    <div class="col-md-6" style={{ "padding-top": "30px" }}>
                        <button class="ava-btn" onclick="myFunction(1)" style={{ "background-color": "#9ACBB1" }}>Available now</button>
                        <button class="ava-btn" onclick="myFunction(2)" style={{ "background-color": "#4DB27D" }}>September 2020</button>
                        <button class="ava-btn" onclick="myFunction(3)" style={{ "background-color": "#029246" }}>January 2021</button>

                        <p id="av-1" class="ava-text">For the 1st Phase, we focused on given farmers tools and knowledge to fight against changes in the weather</p>
                        <p id="av-2" class="ava-text" style={{ "display": "none" }}>The 2nd phase is planned to focus on the interactions between farmers so they can increase
                        their relationship. This will enable them to know what others are planting and explore their options. We
                        are also planning to integrate some tools so the farmers can leverage their know-how, such as the expert
                        advice feature will allow farmers to get in touch with specialists and trends in the agriculture sector.</p>
                        <p id="av-3" class="ava-text" style={{ "display": "none" }}>Our 3rd goal is to connect small farmers with banks and customers, by implementing QR code for food traceability and farming credit score algorithms.</p>
                    </div>

                </section>




            </div>
        )
    }
}
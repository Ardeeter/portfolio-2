import React from "react";
import { FaCheck } from "react-icons/fa";
import { Container } from "react-grid-system";
import { Link } from 'react-router-dom'
// Components
import GoBack from "../../../components/common/GoBack";

function Swatch() {
    return (
        <section className="section section-single-post section-single-post-1">
            <div className="display-spacing">
                <Container>
                    <div className="max-w-768 div-center">
                        <div className="post">
                            <div className="post-head">
                                <div class="post-info">
                                    <GoBack />
                                    <h1>
                                        Neighborhood Swatch
                                    </h1>
                                    
                                </div>
                            </div>
                            <div className="post-body">
                                <div className="post-image">
                                    <img src="../assets/images/portfolio/neighborhood.png" alt="Single Post" />
                                </div>
                                <div className="post-content">
                                    <p>Purchasing a home is a huge undertaking and the process can become overwhelming when also relocating to a new city. Neighborhood Swatch was created to give users a place to start their search.</p>
                                    {/* <p>Bugout is a full-stack application made to help the current bootcamp student achieve success. It has 6 different code editors, each for a different language, where students can write notes or copy and paste code blocks from lecture. Students can save these notes to their Google Drive. Once saved, students can update and delete them these notes from there Google Drive via our application. Below each code editor, there are tips and tricks for each language, as well as a check in form. The right sidebar features call resources that can be updated by the instructor. The last feature is a job board bootcampers can use to get a head start on the job hunt by searching for a available jobs in their city. </p> */}
                                    <p>
                                        <b>Key Features:</b>
                                    </p>
                                    <ul class="el-list-check">
                                        <li>
                                            <FaCheck className="icon" />
                                            3 Neighborhood Recommendations
                                        </li>
                                        <li>
                                            <FaCheck className="icon" />
                                            Neighborhood Age Demographic
                                        </li>
                                        <li>
                                            <FaCheck className="icon" />
                                            Neighborhood Housing Vacancy
                                        </li>
                                        <li>
                                            <FaCheck className="icon" />
                                            Neighborhood Average Income
                                        </li>
                                        <li>
                                            <FaCheck className="icon" />
                                            Home Buying Resources
                                        </li>
                                    </ul>
                                    <p>This front-end website was created for people who are looking to relocate and purchase a home in the Atlanta area. It recommends three neighborhoods based on income and populates graphs for age demographics, housing vacancy, and income. After populating data for the three matches, the user is provided with resources that explain the home buying process. Links are also available for each zip code where the user can browse homes in each area on Realtor.com.</p>
                                    <p><b>My Role: </b>I handled two different API fetches using async and await patterns. The data I retrieved from the Realtor API was threaded into the fetch for the Census API. I then used the data I got back from the Census API to create line, doughnut, and bar graphs through Chart.js. I also wrote the JavaScript logic for the homepage where users can access the recommendations for neighborhoods.</p>
                                    {/* <p></p>
                                    <p></p> */}
                                </div>
                                <div>
                                    <span><b>Technologies:</b></span>
                                    <ul>
                                        <li>
                                            JavaScript
                                        </li>
                                        <li>
                                            Firebase
                                        </li>
                                        <li>
                                            jQuery
                                        </li>
                                        <li>
                                            RESTful APIs
                                        </li>
                                        <li>
                                            Bootstrap
                                        </li>
                                        <li>
                                            HTML
                                        </li>
                                        <li>
                                            CSS
                                        </li>
                                    </ul>
                                </div>
                                <div className="el-icon">
                                        <span className={`el-icon-icon`}><i class="devicon-github-original"></i> <a href="https://github.com/anjatmyers/teamRedProject" target="_blank" rel="noopener noreferrer">View Code</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default Swatch;
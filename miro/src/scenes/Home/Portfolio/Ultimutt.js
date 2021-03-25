import React from "react";
import { FaCheck } from "react-icons/fa";
import { Container } from "react-grid-system";
import { Link } from 'react-router-dom'
// Components
import GoBack from "../../../components/common/GoBack";

function Ultimutt() {
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
                                        Ultimutt Match
                                    </h1>
                                    
                                </div>
                            </div>
                            <div className="post-body">
                                <div className="post-image">
                                    <img src="../assets/images/portfolio/ultimutt.png" alt="Single Post" />
                                </div>
                                <div className="post-content">
                                    <p>"A person who has never owned a dog has missed a wonderful part of life." -Bob Barker</p>
                                    {/* <p>Bugout is a full-stack application made to help the current bootcamp student achieve success. It has 6 different code editors, each for a different language, where students can write notes or copy and paste code blocks from lecture. Students can save these notes to their Google Drive. Once saved, students can update and delete them these notes from there Google Drive via our application. Below each code editor, there are tips and tricks for each language, as well as a check in form. The right sidebar features call resources that can be updated by the instructor. The last feature is a job board bootcampers can use to get a head start on the job hunt by searching for a available jobs in their city. </p> */}
                                    <p>
                                        <b>Key Features:</b>
                                    </p>
                                    <ul class="el-list-check">
                                        <li>
                                            <FaCheck className="icon" />
                                            35 Breeds
                                        </li>
                                        <li>
                                            <FaCheck className="icon" />
                                            7 Zip Codes
                                        </li>
                                        <li>
                                            <FaCheck className="icon" />
                                            Filter by Gender
                                        </li>
                                        <li>
                                            <FaCheck className="icon" />
                                            Filter by Age
                                        </li>
                                        <li>
                                            <FaCheck className="icon" />
                                            Filter by Size
                                        </li>
                                        <li>
                                            <FaCheck className="icon" />
                                            Like Dogs to Save for Later
                                        </li>
                                    </ul>
                                    <p>Ultimutt Match is an application designed to match prospective dog owners with furbabies in the Santa Barbara Area. This website allows the dogs to be filtered by zip code, breed, age, gender, or size. It also allows the user to favorite dogs in order to come back to them later. Each dog has a description made by the shelter and an email link to contact them. If you've been wanting a dog, please have a look at some of these cute little faces. I promise you will not be dissappointed.</p>
                                    <p><b>My Role: </b>This was a solo project build with React.js, to compartmentalize components, and Redux, to store and update state with the use of reducers. I came up with the idea and then could not find an API that worked for me, so I made the API myself and hosted it through Heroku using test data.</p>
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
                                            React.js
                                        </li>
                                        <li>
                                            Redux
                                        </li>
                                        <li>
                                            HTML
                                        </li>
                                        <li>
                                            CSS
                                        </li>
                                        <li>
                                            Bootstrap
                                        </li>
                                        <li>
                                            React Bootstrap
                                        </li>
                                        <li>
                                            RESTful API
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <a href="https://github.com/Ardeeter/Ultimutt-match" target="_blank" rel="noopener noreferrer"><i class="devicon-github-original"></i><b>View Code</b></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default Ultimutt;
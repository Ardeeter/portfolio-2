import React from "react";
import { FaCheck } from "react-icons/fa";
import { Container } from "react-grid-system";
import { Link } from 'react-router-dom'
// Components
import GoBack from "../../../components/common/GoBack";

function Layrfive() {
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
                                        LayrFIVE
                                    </h1>
                                    
                                </div>
                            </div>
                            <div className="post-body">
                                <div className="post-image">
                                    <img src="../assets/images/portfolio/layrfive.png" alt="Single Post" />
                                </div>
                                <div className="post-content">
                                    <p>A collaborative social development site for software developers.</p>
                                    {/* <p>Bugout is a full-stack application made to help the current bootcamp student achieve success. It has 6 different code editors, each for a different language, where students can write notes or copy and paste code blocks from lecture. Students can save these notes to their Google Drive. Once saved, students can update and delete them these notes from there Google Drive via our application. Below each code editor, there are tips and tricks for each language, as well as a check in form. The right sidebar features call resources that can be updated by the instructor. The last feature is a job board bootcampers can use to get a head start on the job hunt by searching for a available jobs in their city. </p> */}
                                    <p>
                                        <b>Key Features:</b>
                                    </p>
                                    <ul class="el-list-check">
                                        <li>
                                            <FaCheck className="icon" />
                                            User Profiles
                                        </li>
                                        <li>
                                            <FaCheck className="icon" />
                                            Get Feedback on Your Project with Comments
                                        </li>
                                        <li>
                                            <FaCheck className="icon" />
                                            Thumbs up Languages Used
                                        </li>
                                        <li>
                                            <FaCheck className="icon" />
                                            Filter Projects By Language
                                        </li>
                                    </ul>
                                    <p>The purpose of LayrFIVE is to give developers a place to share their projects. Other users can comment and rate the quality of code for each language used in the project. Users can post projects, collaborate with others, display different computer language skills, and provide feedback on others’ projects via comments.</p>
                                    <p><b>My Role: </b>My main role in the project was with APIs and data manipulation. I sourced data from the Github API to post to the server side of our application and into our database through Sequelize, an ORM for PostgreSQL. I took the form data from the registration page and submissions page and also posted it to the server side to store in our database. I wrote JavaScript logic to allow users to “like” other projects to implement a leaderboard. I also helped set up EJS routes.</p>
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
                                            Node.js
                                        </li>
                                        <li>
                                            Express
                                        </li>
                                        <li>
                                            EJS
                                        </li>
                                        <li>
                                            Sequelize
                                        </li>
                                        <li>
                                            PostgreSQL
                                        </li>
                                        <li>
                                            RESTful API
                                        </li>
                                        <li>
                                            AWS
                                        </li>
                                        <li>
                                            HTML
                                        </li>
                                        <li>
                                            CSS
                                        </li>
                                        <li>
                                            Sass
                                        </li>
                                        <li>
                                            Bootstrap
                                        </li>
                                    </ul>
                                </div>
                                <div className="el-icon">
                                        <span className={`el-icon-icon`}><i class="devicon-github-original"></i> <a href="https://github.com/laynemag/LayrFIVE" target="_blank" rel="noopener noreferrer">View Code</a></span>
                                </div>
                                {/* <div>
                                    <a href="https://github.com/laynemag/LayrFIVE" target="_blank" rel="noopener noreferrer"><i class="devicon-github-original"></i><b>View Code</b></a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default Layrfive;
import React from "react";
import { FaCheck } from "react-icons/fa";
import { Container } from "react-grid-system";
import { Link } from 'react-router-dom'
// Components
import GoBack from "../../../components/common/GoBack";

function Hero() {
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
                                        Hero Role Playing Game
                                    </h1>
                                    
                                </div>
                            </div>
                            <div className="post-body">
                                <div className="post-image">
                                    <img src="../assets/images/portfolio/hero.jpg" alt="Single Post" />
                                </div>
                                <div className="post-content">
                                    <p>Role-playing fantasy game coded with object-oriented programming.</p>
                                    {/* <p>Bugout is a full-stack application made to help the current bootcamp student achieve success. It has 6 different code editors, each for a different language, where students can write notes or copy and paste code blocks from lecture. Students can save these notes to their Google Drive. Once saved, students can update and delete them these notes from there Google Drive via our application. Below each code editor, there are tips and tricks for each language, as well as a check in form. The right sidebar features call resources that can be updated by the instructor. The last feature is a job board bootcampers can use to get a head start on the job hunt by searching for a available jobs in their city. </p> */}
                                    <p>
                                        <b>Key Features:</b>
                                    </p>
                                    <ul class="el-list-check">
                                        <li>
                                            <FaCheck className="icon" />
                                            6 Enemies
                                        </li>
                                        <li>
                                            <FaCheck className="icon" />
                                            5 Magical Powers for Purchase
                                        </li>
                                        <li>
                                            <FaCheck className="icon" />
                                            Bounty For Each Kill
                                        </li>
                                    </ul>
                                    <p>This is a single player game where the player is the Hero and has to battle six different enemies, each with their own special power. The Hero collects money for each enemy he/she defeats. Between each battle, the Hero has the option to enter a store where he/she can purchase five different special powers available at different prices.</p>
                                    <p><b>My Role: </b>This was a solo project where I used object-oriented programming to build a role playing game. There was a parent class for the basic characteristics for a character. The Hero and each enemy were child classes. Within each child class, the characters had their own methods depending on their magical powers. The Hero has the defeat all the enemies in order to save the village.</p>
                                    {/* <p></p>
                                    <p></p> */}
                                </div>
                                <div>
                                    <span><b>Technologies:</b></span>
                                    <ul>
                                        <li>
                                            Python
                                        </li>
                                    </ul>
                                </div>
                                <div className="el-icon">
                                        <span className={`el-icon-icon`}><i class="devicon-github-original"></i> <a href="https://github.com/Ardeeter/hero-rpg" target="_blank" rel="noopener noreferrer">View Code</a></span>
                                </div>
                                {/* <div>
                                    <a href="https://github.com/Ardeeter/hero-rpg" target="_blank" rel="noopener noreferrer"><i class="devicon-github-original"></i><b>View Code</b></a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default Hero;
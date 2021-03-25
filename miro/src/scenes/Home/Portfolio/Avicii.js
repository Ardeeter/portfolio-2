import React from "react";
import { FaCheck } from "react-icons/fa";
import { Container } from "react-grid-system";
import { Link } from 'react-router-dom'
// Components
import GoBack from "../../../components/common/GoBack";

function Avicii() {
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
                                        Avicii Band Website
                                    </h1>
                                    
                                </div>
                            </div>
                            <div className="post-body">
                                <div className="post-image">
                                    <img src="../assets/images/portfolio/band.png" alt="Single Post" />
                                </div>
                                <div className="post-content">
                                    <p>A band website in memoriam of Avicii.</p>
                                    {/* <p>Bugout is a full-stack application made to help the current bootcamp student achieve success. It has 6 different code editors, each for a different language, where students can write notes or copy and paste code blocks from lecture. Students can save these notes to their Google Drive. Once saved, students can update and delete them these notes from there Google Drive via our application. Below each code editor, there are tips and tricks for each language, as well as a check in form. The right sidebar features call resources that can be updated by the instructor. The last feature is a job board bootcampers can use to get a head start on the job hunt by searching for a available jobs in their city. </p> */}
                                    <p>
                                        <b>Key Features:</b>
                                    </p>
                                    <ul class="el-list-check">
                                        <li>
                                            <FaCheck className="icon" />
                                            Features All 3 Albums
                                        </li>
                                        <li>
                                            <FaCheck className="icon" />
                                            Biography
                                        </li>
                                        <li>
                                            <FaCheck className="icon" />
                                            Spotify Playlist
                                        </li>
                                        <li>
                                            <FaCheck className="icon" />
                                            Feedback Page
                                        </li>
                                        <li>
                                            <FaCheck className="icon" />
                                            Chatroom
                                        </li>
                                    </ul>
                                    <p>This is a musician website detailing biography and music produced. It features a tab for feedback, a chat using Socket.io, and a Spotify playlist. This website was developed using templating through Node.js with Express and EJS.</p>
                                    <p><b>My Role: </b>This is a server side solo project built with JavaScript using Node.js. I used Express to make six different routes and EJS for the client side rendering. With Socket.io, the chat updates in real time allowing users to interact from different computers. The feedback page allows users to leave comments that display their name, date, subject of the comment, and of course the comment itself. Each album has the title, artwork, tracklist, year, summary, a link to the ablum on Apple Music, and a link to the ablum on Spotify Music. </p>
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
                                            jQuery
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
                                        <span className={`el-icon-icon`}><i class="devicon-github-original"></i> <a href="https://github.com/Ardeeter/band-project" target="_blank" rel="noopener noreferrer">View Code</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default Avicii;
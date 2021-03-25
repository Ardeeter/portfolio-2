import React from "react";
import { FaCheck } from "react-icons/fa";
import { Container } from "react-grid-system";
// Components
import GoBack from "../../../components/common/GoBack";

function BlogSinglePost() {
    return (
        <section className="section section-single-post section-single-post-1">
            <div className="display-spacing">
                <Container>
                    <div className="max-w-768 div-center">
                        <div className="post">
                            <div className="post-head">
                                <div class="post-info">
                                    <GoBack />
                                    <h1>Bugout: Bootcamp Survival Guide</h1>
                                    
                                </div>
                            </div>
                            <div className="post-body">
                                <div className="post-image">
                                    <img src="../assets/images/portfolio/bugout.png" alt="Single Post" />
                                </div>
                                <div className="post-content">
                                    <p>Learning two years of material in anything is hard enough, and coding is no exception. It requires a lot of late nights, determination, and organization. That third thing is where we come in.</p>
                                    {/* <p>Bugout is a full-stack application made to help the current bootcamp student achieve success. It has 6 different code editors, each for a different language, where students can write notes or copy and paste code blocks from lecture. Students can save these notes to their Google Drive. Once saved, students can update and delete them these notes from there Google Drive via our application. Below each code editor, there are tips and tricks for each language, as well as a check in form. The right sidebar features call resources that can be updated by the instructor. The last feature is a job board bootcampers can use to get a head start on the job hunt by searching for a available jobs in their city. </p> */}
                                    <p>
                                        <b>Key Features:</b>
                                    </p>
                                    <ul class="el-list-check">
                                        <li>
                                            <FaCheck className="icon" />
                                            6 Code Editors
                                        </li>
                                        <li>
                                            <FaCheck className="icon" />
                                            Tips and Tricks For Each Language
                                        </li>
                                        <li>
                                            <FaCheck className="icon" />
                                            Language Check In
                                        </li>
                                        <li>
                                            <FaCheck className="icon" />
                                            Resources
                                        </li>
                                        <li>
                                            <FaCheck className="icon" />
                                            Job Board
                                        </li>
                                    </ul>
                                    <p>Bugout is a full-stack application made to help the current bootcamp student achieve success. It has six different code editors, each for a different language, where students can write notes or copy and paste code blocks from lecture. Students can save these notes to their Google Drive. Once saved, students can update and delete them from their Google Drive via our application.</p>
                                    <p>Below each code editor, there are tips and tricks for each language, as well as a check-in form. The right sidebar features class resources that can be updated by the instructor. The last feature is a job board bootcampers can use to get a head start on the job hunt by searching for a available jobs in their city.</p>
                                    <p><b>My Role: </b>My main role in this project was API integration. I used the Google Drive API to create, update, and delete files and folders within the user's google drive. The first time a user saves a file, a Bootcamp Survival Guide folder is created along with a folder inside for the language they are working in. The file they are saving is saved inside the folder of that language.</p>
                                    <p>I integrated the Google Picker API for the UI/UX aspect. The user is able to see into their Google Drive on our application and pick which files they would like to update or delete with the press of a button.</p>
                                    <p>The last API I used was the Adzuna API. Users can input keywords and location into the job board form and with some data manipulation, jobs will populate matching that criteria.</p>
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
                                            React
                                        </li>
                                        <li>
                                            Redux
                                        </li>
                                        <li>
                                            PostgreSQL
                                        </li>
                                        <li>
                                            Sequelize
                                        </li>
                                        <li>
                                            Material UI
                                        </li>
                                        <li>
                                            HTML
                                        </li>
                                        <li>
                                            CSS
                                        </li>
                                        <li>
                                            Google OAuth2
                                        </li>
                                        <li>
                                            CodeMirror2
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default BlogSinglePost;
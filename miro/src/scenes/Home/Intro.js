import React from "react";
import TextLoop from "react-text-loop";
import Particles from "react-particles-js";
import { Container } from "react-grid-system";
import {Link} from 'react-router-dom'
import { Document } from 'react-pdf';

function Intro() {

    // const downloadFile = () => {
    //     window.location.href = "https://localhost.com/src/assets/files/Resume.pdf"
    // }

    return (
        <section className="section section-hero section-hero-1 overlay-image" style={{ backgroundImage: `url(/assets/images/hero/pier-sb2.jpg)` }}>
            {/* <Particles
                params={{
                    particles: {
                        number: {
                            value: 120,
                        },
                        size: {
                            value: 3,
                        },
                    },
                    interactivity: {
                        events: {
                            onhover: {
                                enable: true,
                                mode: "repulse",
                            },
                        },
                    },
                }}
                className="el-particles"
            /> */}
            {/* <Particles
                params={{
                    particles: {
                        number: {
                            value: 300,
                            density: {
                                enable: true,
                            },
                        },
                        size: {
                            value: 5,
                            random: true,
                        },
                        move: {
                            direction: "bottom",
                            out_mode: "out",
                        },
                        line_linked: {
                            enable: false,
                        },
                    },
                    interactivity: {
                        events: {
                            onhover: {
                                enable: true,
                                mode: "bubble"
                            },
                            onclick: {
                                enable: true,
                                mode: "repulse"
                            }
                        },
                        modes: {
                            bubble: {
                                distance: 250,
                                duration: 2,
                                size: 3,
                            },
                            repulse: {
                                distance: 400,
                                duration: 4
                            }
                        }
                    }
                }}
            /> */}
            <div className="display-center">
                <Container>
                    <div className="el-heading">
                        <p className="el-icon">
                            <span className="el-icon-title">I'm Ally Deeter.</span>
                        </p>
                        <h1>
                            I'm a {" "}
                            <TextLoop>
                                <span>Web Developer</span>
                                {/* <span>Graphic Designer</span> */}
                                <span>Coder</span>
                            </TextLoop>
                            <br />
                            <h5>Based in Santa Barbara</h5>
                        </h1>
                        <button className="button button-lg button-primary">
                            <span className="wave"></span>
                            <span className="text"><a href="https://drive.google.com/file/d/1gytyPxV1ECUppjLrBZutpkT6HxtTs_H6/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></span>
                            {/* <span className="text"><Document file="./assets/files/Resume.pdf">Resume</Document></span> */}
                            
                        </button>
                        <button className="button button-lg">
                            <span className="text"><a href="mailto:allydeeter6639@gmail.com">Contact Me</a></span>
                        </button>
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default Intro;

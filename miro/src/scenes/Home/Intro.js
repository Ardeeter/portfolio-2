import React from "react";
import TextLoop from "react-text-loop";
import Particles from "react-particles-js";
import { Container } from "react-grid-system";
import {Link} from 'react-router-dom'
import { Document } from 'react-pdf';

function Intro() {

    const downloadFile = () => {
        window.location.href = "https://localhost.com/src/assets/files/Resume.pdf"
    }

    return (
        <section className="section section-hero section-hero-1 overlay-image" style={{ backgroundImage: `url(/assets/images/hero/tech-light2.jpg)` }}>
            <Particles
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
            />
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
                            {/* Based in Santa Barbara */}
                        </h1>
                        <button className="button button-lg button-primary" onClick={downloadFile}>
                            <span className="wave"></span>
                            <span className="text"><Link to="./assets/files/Resume.pdf" download>Download CV</Link></span>
                            {/* <span className="text"><Document file="./assets/files/Resume.pdf">Resume</Document></span> */}
                            
                        </button>
                        <button className="button button-lg">
                            <span className="text">Contact Me</span>
                        </button>
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default Intro;

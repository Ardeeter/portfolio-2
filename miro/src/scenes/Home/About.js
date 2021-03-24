import React from "react";
import { Container, Hidden, Row, Col } from "react-grid-system";

function About() {
    return (
        <section className="section section-about section-about-1">
            <div className="display-spacing">
                <Container>
                    <Row>
                        <Hidden xs sm md>
                            <Col lg={5}>
                                <div className="about-image">
                                    <div className="image overlay-image border border-dark" style={{ backgroundImage: `url(/assets/images/about/me.jpg)` }}></div>
                                </div>
                            </Col>
                        </Hidden>
                        <Col lg={7}>
                            <div className="about-content">
                                <header className="el-heading">
                                    <h2 className="el-icon">
                                        <span className="el-icon-title">ABOUT ME</span>
                                    </h2>
                                    <h3>
                                        <span>Hello, I am Ally Deeter.</span>
                                    </h3>
                                    <div className="divider divider-1"></div>
                                    <p>I am recent graduate of a 16 week immmersive full-stack software engineering bootcamp at DigitalCrafts. I decided to switch careers after one summer Python course I took at my local community college. As soon as I felt the rush and satisfaction of solving my first algorithm, I knew I was hooked. I thrive on critical thinking and problem solving. I look forward to pursuing my career and using my professional skill set to show how I can be an asset to your business.</p>
                                    <p>In my free time, I don't go anywhere without my husky pit named Buddha. We enjoy adventuring in the wilderness and swimming at the beach. I also enjoy surfing, rock climbing, and kayaking.</p>
                                </header>
                                <Row className="pt-30 justify-content-sm-center">
                                    <Col xs={2} sm={1} md={1} className="m-2">
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon"><i class="devicon-javascript-plain"></i></span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={2} sm={1} md={1} className="m-2">
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon"><i class="devicon-python-plain"></i></span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={2} sm={1} md={1} className="m-2">
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon"><i class="devicon-java-plain"></i></span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={2} sm={1} md={1} className="m-2">
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon"><i class="devicon-nodejs-plain"></i></span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={2} sm={1} md={1} className="m-2">
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon"><i class="devicon-express-original"></i></span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={2} sm={1} md={1} className="m-2">
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon"><i class="devicon-react-original"></i></span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={2} sm={1} md={1} className="m-2">
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon"><i class="devicon-redux-original"></i></span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={2} sm={1} md={1} className="m-2">
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon"><i class="devicon-postgresql-plain"></i></span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={2} sm={1} md={1} className="m-2">
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon"><i class="devicon-sequelize-plain"></i></span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={2} sm={1} md={1} className="m-2">
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon"><i class="devicon-git-plain"></i></span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={2} sm={1} md={1} className="m-2">
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon"><i class="devicon-npm-original-wordmark"></i></span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={2} sm={1} md={1} className="m-2">
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon"><i class="devicon-amazonwebservices-original"></i></span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={2} sm={1} md={1} className="m-2">
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon"><i class="devicon-html5-plain"></i></span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={2} sm={1} md={1} className="m-2">
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon"><i class="devicon-css3-plain"></i></span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={2} sm={1} md={1} className="m-2">
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon"><i class="devicon-bootstrap-plain"></i></span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default About;

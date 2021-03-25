import React from "react";
import Slider from "react-slick";
import { Container } from "react-grid-system";
import { Link, useRouteMatch } from "react-router-dom";
// Components
import Headline from "../../components/common/Headline";

const posts = [
    {
        title: "Bugout",
        image: "/assets/images/portfolio/bugout.png",
        date: "Team",
        link: "/bugout",
        icon: <i class="devicon-javascript-plain"></i>,
        github: "https://github.com/anjatmyers/capstone"
    },
    {
        title: "Ultimutt Match",
        image: "/assets/images/portfolio/ultimutt.png",
        date: "Solo",
        link: "/ultimutt",
        icon: <i class="devicon-react-original"></i>,
        github: "https://github.com/ardeeter/ultimutt-match"
    },
    {
        title: "LayrFIVE",
        image: "/assets/images/portfolio/layrfive.png",
        date: "Team",
        link: "/layrfive",
        icon: <i class="devicon-nodejs-plain"></i>,
        github: "https://github.com/laynemag/LayrFIVE"
    },
    {
        title: "Hero RPG",
        image: "/assets/images/portfolio/hero.jpg",
        date: "Solo",
        link: "/hero",
        icon: <i class="devicon-python-plain"></i>,
        github: "https://github.com/Ardeeter/hero-rpg"
    },
    {
        title: "Avicii Band Site",
        image: "/assets/images/portfolio/band.png",
        date: "Solo",
        link: "/avicii",
        icon: <i class="devicon-express-original"></i>,
        github: "https://github.com/Ardeeter/band_project"
    },
    {
        title: "N. Swatch",
        image: "/assets/images/portfolio/neighborhood.png",
        date: "Team",
        link: "/swatch",
        icon: <i class="devicon-bootstrap-plain"></i>,
        github: "https://github.com/anjatmyers/teamRedProject"
    }
];

function Blog() {
    let sliderSettings = {
        dots: true,
        speed: 500,
        arrows: false,
        infinite: false,
        initialSlide: 0,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerPadding: 30,
        draggable: false,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const { path } = useRouteMatch();

    return (
        <section className="section section-blog section-blog-1">
            <div className="display-spacing">
                <Container className="container">
                    <Headline label="Portfolio" title="Let's See My Work" divider_1={true} position="center" />
                    <Slider className="el-slider el-slider-plr--15" {...sliderSettings}>
                        {posts.map((item, index) => (
                            <div key={index} className="post-item">
                                <Link to={`${path}${item.link}`.replace(/([^:])(\/\/+)/g, "$1/")}>
                                    <div className="post-image" style={{ backgroundImage: `url(${item.image})` }}></div>
                                </Link>
                                <div className="post-content">
                                    <div className="el-icon">
                                        <span className={`el-icon-icon`}>{item.icon}</span>
                                    </div>
                                    <div className="post-data">
                                        <h4 className="post-title">
                                            <Link to={`${path}${item.link}`.replace(/([^:])(\/\/+)/g, "$1/")}>{item.title}</Link>
                                        </h4>
                                        <a className="post-date" href={item.github} target="_blank" rel="noopener noreferrer">
                                        <i class="devicon-github-original"></i>
                                            View Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </Container>
            </div>
        </section>
    );
}

export default Blog;

import React from 'react'
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap'
import styled from 'styled-components'
import AnimatedHeading from 'components/animated-heading'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import servicebackgroundimage from '../../../../../static/polygonz.png'
import './Projects.css'

class Projects extends React.Component {
    render() {
        const Section = styled.section`
            position: relative;
            overflow: hidden;
            background-image: url(${servicebackgroundimage});
            background-size: cover;
            .heading {
                width: 100%;
            }
          }
        `

        const ServiceContainer = styled.div`
            padding: 50px 0;
            @media (max-width:767px) {
                padding: 20px 0;
            }
        `
        const TeamContainer = styled.div`
            text-Align: center;
            margin: 0px 30px;
            @media (max-width:767px) {
                margin: 0px 15px;
            }
        `
        const settings = {
            centerMode: true,
            centerPadding: "150px",
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        centerPadding: "20px",
                        slidesToShow: 1,
                    }
                },
            ]
        };

        return (
            <Section>
                <ServiceContainer>
                    <Container className="projects_con">
                        <AnimatedHeading text="What Our Clients Say?" />
                        <Row className="projects_row">
                            <Col md={2} sm={12} xs={12}></Col>
                            <Col className="client_review_col" md={8} sm={12} xs={12}>
                                <div className="client_info_div">
                                    <div className="client_icon_div">
                                        <FontAwesomeIcon className="reviewIcon" icon={faUser} />
                                    </div>
                                    <div className="client_Name_div">
                                        <p className="client_Name_p">Muhammad Kashan Aftab</p>
                                        <p className="client_Name_p2">
                                            <FontAwesomeIcon className="reviewIconStar" icon={faStar} />
                                            <FontAwesomeIcon className="reviewIconStar" icon={faStar} />
                                            <FontAwesomeIcon className="reviewIconStar" icon={faStar} />
                                            <FontAwesomeIcon className="reviewIconStar" icon={faStar} />
                                            <FontAwesomeIcon className="reviewIconStar" icon={faStar} />
                                        </p>
                                    </div>
                                </div>
                                <div className="client_review_detail">
                                    <p className="review">Truly the best IT professionals.</p>
                                </div>
                            </Col>
                            <Col md={2} sm={12} xs={12}></Col>
                        </Row>
                        {/* <Row className="projects_row">
                            <Col className="service_img_col" md={5} sm={12} xs={12}>
                                <a href="/Webdevelopment" className="read_more_link"><img className="service_img" src={servicebackgroundimage} alt="Web-devlopment" /></a>
                            </Col>
                            <Col className="service_text_col" md={7} sm={12} xs={12}>
                                <a href="/Webdevelopment" className="read_more_link"><h1 className="service_heading">Web development</h1></a>
                                <div className="service_separator"></div>
                                <p className="project_para">It refers to the work related to developing websites and their hosting through the use of the internet. The process of web development includes web content development, web design, network security and marketing.</p>
                                <a href="/Webdevelopment" className="read_more_link">Read More</a>
                            </Col>
                        </Row> */}
                    </Container>
                    <TeamContainer>
                        <Slider {...settings}>
                            <div className="Blog_div">
                                <a className="light_box" href="/">
                                    <img className="blog_img" src={servicebackgroundimage} alt={"Blog"} />
                                    <div className="blog_heading">Marketing<span className="blog_title">Online Media Management</span></div>
                                </a>
                            </div>
                            <div className="Blog_div">
                                <a className="light_box" href="/">
                                    <img className="blog_img" src={servicebackgroundimage} alt={"Blog"} />
                                    <div className="blog_heading">Marketing<span className="blog_title">Online Media Management</span></div>
                                </a>
                            </div>
                            <div className="Blog_div">
                                <a className="light_box" href="/">
                                    <img className="blog_img" src={servicebackgroundimage} alt={"Blog"} />
                                    <div className="blog_heading">Marketing<span className="blog_title">Online Media Management</span></div>
                                </a>
                            </div>
                            <div className="Blog_div">
                                <a className="light_box" href="/">
                                    <img className="blog_img" src={servicebackgroundimage} alt={"Blog"} />
                                    <div className="blog_heading">Marketing<span className="blog_title">Online Media Management</span></div>
                                </a>
                            </div>
                            <div className="Blog_div">
                                <a className="light_box" href="/">
                                    <img className="blog_img" src={servicebackgroundimage} alt={"Blog"} />
                                    <div className="blog_heading">Marketing<span className="blog_title">Online Media Management</span></div>
                                </a>
                            </div>
                            <div className="Blog_div">
                                <a className="light_box" href="/">
                                    <img className="blog_img" src={servicebackgroundimage} alt={"Blog"} />
                                    <div className="blog_heading">Marketing<span className="blog_title">Online Media Management</span></div>
                                </a>
                            </div>
                        </Slider>
                    </TeamContainer>
                </ServiceContainer>
            </Section>
        )
    }

}

export default Projects;
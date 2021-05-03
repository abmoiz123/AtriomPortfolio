import React from 'react'
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap'
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import AnimationContainer from 'components/animation-container'
import AnimatedHeading from 'components/animated-heading'
import mobslide1 from '../EcommerceSolution/imagesforservice/mobileslide/slide1.png'
import mobslide2 from '../EcommerceSolution/imagesforservice/mobileslide/slide2.png'
import mobslide3 from '../EcommerceSolution/imagesforservice/mobileslide/slide3.png'
import tabslide1 from '../EcommerceSolution/imagesforservice/tabletslide/slide1.png'
import tabslide2 from '../EcommerceSolution/imagesforservice/tabletslide/slide2.png'
import tabslide3 from '../EcommerceSolution/imagesforservice/tabletslide/slide3.png'
import webimg1 from './webimages/webimg1.png'
import webimg2 from './webimages/webimg2.png'
import './webdevlopment.css'
class Webdevelopment extends React.Component {
    render() {
        const Section = styled.section`
            position: relative;
            overflow: hidden;
            .heading {
                width: 100%;
            }
          }
        `

        const ServiceContainer = styled.div`
            padding: 50px 0px 0px 0px;
            @media (max-width:767px) {
                padding: 20px 0px 0px 0px;
            }
        `

        const settings2 = {
            arrows: false,
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 5000,
            autoplay: true,
        };
        return (
            <Section>
                <ServiceContainer>
                    <Container>
                        <AnimatedHeading text="Web Development" />
                        <Row className="services_inside_row">
                            <Col className="serviceinsdie_text_col" lg={6} md={6} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInLeft" delay={800}>
                                    <div className="serviceinsdie_text_div">
                                        <h4 className="service_heading_style">Develop Responsive & UserFriendly Web</h4>
                                        <p className="service_para_style">
                                            They is designed to help you conduct your business electronically. Some of the solutions we offer include answers to a given problem. Such features will come in handy to enable you to carry out your eCommerce transactions efficiently. Therefore, if you are an online merchant looking to improve your business with clients, then you have come to the right place.
                                            They is designed to help you conduct your business electronically. Some of the solutions we offer include answers to a given problem. Such features will come in handy to enable you to carry out your eCommerce transactions efficiently.
                                        </p>
                                    </div>
                                </AnimationContainer>
                            </Col>
                            <Col className="animationcol" lg={6} md={6} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInRight" delay={800}>
                                    <div className="tabletanimation">
                                        <div className="animated_tablet_inside_div">
                                            <Slider {...settings2}>
                                                <img className="animated_tablet_img" src={tabslide1} alt="tabslide1" />
                                                <img className="animated_tablet_img" src={tabslide2} alt="tabslide2" />
                                                <img className="animated_tablet_img" src={tabslide3} alt="tabslide3" />
                                            </Slider>
                                        </div>
                                    </div>
                                </AnimationContainer>
                                <div className="mobileanimation">
                                    <div className="animated_mobile_inside_div">
                                        <Slider {...settings2}>
                                            <img className="animated_mobile_inside" src={mobslide1} alt="mobslide1" />
                                            <img className="animated_mobile_inside" src={mobslide2} alt="mobslide2" />
                                            <img className="animated_mobile_inside" src={mobslide3} alt="mobslide3" />
                                        </Slider>
                                    </div>
                                </div>
                                <AnimationContainer animation="fadeInDown" delay={800}>
                                    <div className="laptopanimation">
                                        <div className="animated_laptop_inside_div">
                                            <Slider {...settings2}>
                                                <img className="animated_laptop_img" src={tabslide1} alt="tabslide1" />
                                                <img className="animated_laptop_img" src={tabslide2} alt="tabslide2" />
                                                <img className="animated_laptop_img" src={tabslide3} alt="tabslide3" />
                                            </Slider>
                                        </div>
                                    </div>
                                </AnimationContainer>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="animationcol" lg={6} md={6} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInUp" delay={800}>
                                    <img className="webimage_for_slide" src={webimg1} alt="webdevelopment" />
                                </AnimationContainer>
                            </Col>
                            <Col lg={6} md={6} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInRight" delay={800}>
                                    <div className="serviceinsdie_text_div">
                                        <h4 className="service_heading_style">Develop Your ecommerce website with us and Enjoy the Benefits</h4>
                                        <p className="service_para_style">
                                            The end product we give to our clients includes our commitment, quality, integrity, and care. We understand your business is important to you, thus, we want to help you and your business to grow by coming up with an end product that will surely satisfy you and boost your brand image.
                                        </p>
                                    </div>
                                </AnimationContainer>
                            </Col>
                        </Row>
                        <Row className="services_inside_row_web">
                            <Col lg={6} md={6} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInLeft" delay={800}>
                                    <div className="serviceinsdie_text_div">
                                        <h4 className="service_heading_style">A Web App Development Agency You Should Definitely Invest</h4>
                                        <p className="service_para_style">
                                            Any business that operates online knows how competitive the internet arena is. Therefore, in order to achieve good conversions and better sales, our web based application development services will enable you to stand your ground in this particular industry.
                                        </p>
                                    </div>
                                </AnimationContainer>
                            </Col>
                            <Col className="animationcol" lg={6} md={6} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInUp" delay={800}>
                                    <img className="webimage_for_slide" src={webimg2} alt="webdevelopment" />
                                </AnimationContainer>
                            </Col>
                        </Row>
                    </Container>
                </ServiceContainer>
            </Section>
        )
    }

}

export default Webdevelopment;
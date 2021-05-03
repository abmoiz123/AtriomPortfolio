import React from 'react'
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import AnimationContainer from 'components/animation-container'
import AnimatedHeading from 'components/animated-heading'
import mobimg1 from './mobappimages/mobapp1.png'
import mobimg2 from './mobappimages/mobapp2.png'
import mobimg3 from './mobappimages/mobapp3.png'
import mobimg4 from './mobappimages/mobapp4.png'

class Mad2 extends React.Component {
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
        return (
            <Section>
                <ServiceContainer>
                    <Container>
                        <AnimatedHeading text="Mobile App Development" />
                        <Row className="services_inside_row">
                            <Col className="serviceinsdieseo_text_col" lg={6} md={6} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInLeft" delay={800}>
                                    <div className="serviceinsdie_text_div">
                                        <h4 className="service_heading_style">We Provide iOS App Development Service for Every Apple Device</h4>
                                        <p className="service_para_style">
                                            Our team offers iOS app development services to add captivative and useful products for your target audience. Our iOS app design team works for both enterprise and consumer level business to provide engaging mobile experience.
                                        </p>
                                    </div>
                                </AnimationContainer>
                            </Col>
                            <Col className="animationcol" lg={6} md={6} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInUp" delay={800}>
                                    <img className="webimage_for_slide" src={mobimg1} alt="mobApp" />
                                </AnimationContainer>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="animationcol" lg={6} md={6} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInUp" delay={800}>
                                    <img className="webimage_for_slide" src={mobimg2} alt="mobApp" />
                                </AnimationContainer>
                            </Col>
                            <Col lg={6} md={6} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInRight" delay={800}>
                                    <div className="serviceinsdie_text_div">
                                        <h4 className="service_heading_style">Our Premium Android Application Development Services</h4>
                                        <p className="service_para_style">
                                            No one can serve you better in Karachi than we do. We develop your demanded android applications accurately with a team of android experts.
                                            No one can serve you better in Karachi than we do. We develop your demanded android applications accurately with a team of android experts.
                                        </p>
                                    </div>
                                </AnimationContainer>
                            </Col>
                        </Row>
                        <Row className="services_inside_row_web">
                            <Col lg={6} md={6} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInLeft" delay={800}>
                                    <div className="serviceinsdie_text_div">
                                        <h4 className="service_heading_style">We Worth For Your Investment in Our iOS App Development Services</h4>
                                        <p className="service_para_style">
                                            We are a team of efficient iOS app designers in Karachi. Our expert iOS developers produce highly optimized iOS applications. We work closely on efficiency and the outlook of the application while being on a budget. Our work in developing iOS apps.
                                        </p>
                                    </div>
                                </AnimationContainer>
                            </Col>
                            <Col className="animationcol" lg={6} md={6} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInUp" delay={800}>
                                    <img className="webimage_for_slide" src={mobimg3} alt="mobApp" />
                                </AnimationContainer>
                            </Col>
                        </Row>
                        <Row className="services_inside_row_web2">
                            <Col className="animationcol" lg={6} md={6} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInUp" delay={800}>
                                    <img className="webimage_for_slide" src={mobimg4} alt="mobApp" />
                                </AnimationContainer>
                            </Col>
                            <Col lg={6} md={6} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInRight" delay={800}>
                                    <div className="serviceinsdie_text_div">
                                        <h4 className="service_heading_style">We Professionally and Powerfully Create App with Flutter</h4>
                                        <p className="service_para_style">
                                            Digital Graphiks has been a well-known name in providing web designing services across Karachi. We have all the way experienced web developers that work according to the clients' needs. Like we have proven ourselves on other grounds; one of our expertises also lies in app development with Flutter.
                                        </p>
                                    </div>
                                </AnimationContainer>
                            </Col>
                        </Row>
                    </Container>
                </ServiceContainer>
            </Section>
        )
    }

}

export default Mad2;
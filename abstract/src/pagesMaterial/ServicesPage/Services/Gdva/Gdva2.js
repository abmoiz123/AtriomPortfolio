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
import gdva1 from './gdvaimages/gdva1.png'
import gdva2 from './gdvaimages/gdva2.png'
import gdva3 from './gdvaimages/gdva3.png'

class Gdva2 extends React.Component {
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
                        <AnimatedHeading text="Graphic Design & Video Animation" />
                        <Row className="services_inside_row">
                            <Col className="serviceinsdieseo_text_col" lg={6} md={6} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInLeft" delay={800}>
                                    <div className="serviceinsdie_text_div">
                                        <h4 className="service_heading_style">Our Experts Provide Animated Video Creation Services</h4>
                                        <p className="service_para_style">
                                            We strive towards customer satisfaction; thus, we make sure to create a strong bond with our clients. We wish to make them feel comfortable and enjoy the whole process while also making sure that in the end, we give them something that exceeds their expectations.
                                        </p>
                                    </div>
                                </AnimationContainer>
                            </Col>
                            <Col className="animationcol" lg={6} md={6} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInUp" delay={800}>
                                    <img className="webimage_for_slide" src={gdva1} alt="gdva" />
                                </AnimationContainer>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="animationcol" lg={6} md={6} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInUp" delay={800}>
                                    <img className="webimage_for_slide" src={gdva2} alt="gdva" />
                                </AnimationContainer>
                            </Col>
                            <Col lg={6} md={6} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInRight" delay={800}>
                                    <div className="serviceinsdie_text_div">
                                        <h4 className="service_heading_style">Digital Graphiks is The Best Custom Logo Design Company</h4>
                                        <p className="service_para_style">
                                            We ensure to give our clients the best logo design according to their requirements and needs.
                                            We ensure to give our clients the best logo design according to their requirements and needs.
                                            We ensure to give our clients the best logo design according to their requirements and needs.
                                        </p>
                                    </div>
                                </AnimationContainer>
                            </Col>
                        </Row>
                        <Row className="services_inside_row_web">
                            <Col lg={6} md={6} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInLeft" delay={800}>
                                    <div className="serviceinsdie_text_div">
                                        <h4 className="service_heading_style">Digital Graphiks is The Best Custom Logo Design Company</h4>
                                        <p className="service_para_style">
                                            We ensure to give our clients the best logo design according to their requirements and needs.
                                            We ensure to give our clients the best logo design according to their requirements and needs.
                                            We ensure to give our clients the best logo design according to their requirements and needs.
                                        </p>
                                    </div>
                                </AnimationContainer>
                            </Col>
                            <Col className="animationcol" lg={6} md={6} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInUp" delay={800}>
                                    <img className="webimage_for_slide" src={gdva3} alt="gdva" />
                                </AnimationContainer>
                            </Col>
                        </Row>
                    </Container>
                </ServiceContainer>
            </Section>
        )
    }

}

export default Gdva2;
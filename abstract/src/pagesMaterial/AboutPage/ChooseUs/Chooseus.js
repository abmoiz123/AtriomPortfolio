import React from 'react'
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap'
import styled from 'styled-components'
import AnimationContainer from 'components/animation-container'
import AnimatedHeading from 'components/animated-heading'
import webimage from '../../../../static/WEBDEVELOPMENT.png'
import mobimage from '../../../../static/MOBDEVELOPMENT.png'
import seoimage from '../../../../static/SEO2.png'
import emailimage from '../../../../static/EMAILS.png'
import networkimage from '../../../../static/NETWORK2.png'
import sketchimage from '../../../../static/UIUX.png'
import servicebackgroundimage from '../../../../static/polygonz.png'
import './ChooseUs.css'

class ChooseUs extends React.Component {


    shouldComponentUpdate() {
        return false
    }

    render() {
        const Section = styled.section`
            position: relative;
            overflow: hidden;
            // background-image: url(${servicebackgroundimage});
            background-size: cover;
            // background-repeat: no-repeat;
            .heading {
                width: 100%;
            }
          }
        `

        const ServiceContainer = styled.div`
            padding: 300px 0 100px 0;
            @media (max-width:767px) {
                padding: 20px 0;
            }
        `


        const ServiceElement = styled.div`
            // margin-bottom: 20px;
            text-align: center;
            height: 320px !important;
            padding: 40px;
            border-radius: 20px;
            transition: .2s;
            &:hover {
                background-color: #013567;
                // box-shadow: 0 28px 60px rgb(4, 229, 229, .1);
                box-shadow: 0 28px 60px rgb(255,255,255, .3);
                transform: translateY(-10px);
            }
            @media (max-width:767px) {
                height: 180px !important;
                padding: 10px 0px;
                background-color: #013567;
                // box-shadow: 0 28px 60px rgb(4, 229, 229, .1);
                box-shadow: 0 28px 60px rgb(255,255,255, .3);
                transform: translateY(-10px);
            }
        `
        const ServiceHeading = styled.h4`
            font-size: 35px;
            font-weight: 500;
            font-family: Teko;
            margin-top: 20px;
            color: #fff;
            // color: #f6b10a;
            @media (max-width:767px) {
                font-size: 20px;
            }
        `
        const ServiceSeparator = styled.div`
            height: 5px;
            width: 50px;
            // background-color: #04e5e5;
            background-color: #00468b;
            margin-bottom: 10px;
            margin: auto;
         `
        const ServiceIcon = styled.div`
            margin-bottom: 20px;
            img {
                max-height: 130px;
            }
            @media (max-width:767px) {    
                margin-bottom: 10px;
                img {
                    max-height: 70px;
                }
            }
        `

        return (
            <Section>
                <ServiceContainer>
                    <Container>
                        <AnimatedHeading text="Why Choose Us" />
                        <Row>
                            <Col className="service_col" md={4} sm={6} xs={6}>
                                <AnimationContainer animation="fadeInLeft" delay={200}>
                                    <ServiceElement className="service_element"> 
                                        <ServiceIcon>
                                            <img src={mobimage} alt="Mobile App Development" />
                                        </ServiceIcon>
                                        <ServiceSeparator />
                                        <ServiceHeading>
                                            Timely Completion Of Projects
                                            </ServiceHeading>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col className="service_col" md={4} sm={6} xs={6}>
                                <AnimationContainer animation="fadeInRight" delay={600}>
                                    <ServiceElement className="service_element">
                                        <ServiceIcon>
                                            <img src={emailimage} alt="Email Marketing" />
                                        </ServiceIcon>
                                        <ServiceSeparator />
                                        <ServiceHeading>
                                            Expert Developers
                                        </ServiceHeading>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col className="service_col" md={4} sm={6} xs={6}>
                                <AnimationContainer animation="fadeInDown" delay={400}>
                                    <ServiceElement className="service_element">
                                        <ServiceIcon>
                                            <img src={webimage} alt="Web Development" />
                                        </ServiceIcon>
                                        <ServiceSeparator />
                                        <ServiceHeading>
                                            Customer Service
                                        </ServiceHeading>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col className="service_col" md={4} sm={6} xs={6}>
                                <AnimationContainer animation="fadeInLeft" delay={800}>
                                    <ServiceElement className="service_element">
                                        <ServiceIcon>
                                            <img src={seoimage} alt="seo experts" />
                                        </ServiceIcon>
                                        <ServiceSeparator />
                                        <ServiceHeading>
                                            Affordable Packages
                                        </ServiceHeading>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col className="service_col" md={4} sm={6} xs={6}>
                                <AnimationContainer animation="fadeInUp" delay={1000}>
                                    <ServiceElement className="service_element">
                                        <ServiceIcon>
                                            <img src={networkimage} alt="Network Management" />
                                        </ServiceIcon>
                                        <ServiceSeparator />
                                        <ServiceHeading>
                                            Professional E-Commerce Management Team
                                        </ServiceHeading>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col className="service_col" md={4} sm={6} xs={6}>
                                <AnimationContainer animation="fadeInRight" delay={1200}>
                                    <ServiceElement className="service_element">
                                        <ServiceIcon>
                                            <img src={sketchimage} alt="UI/UX Development" />
                                        </ServiceIcon>
                                        <ServiceSeparator />
                                        <ServiceHeading>
                                            Provision Of SEO Services
                                            </ServiceHeading>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                        </Row>
                    </Container>
                </ServiceContainer>
            </Section>
        )
    }

}
export default ChooseUs;
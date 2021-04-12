import React from 'react'
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap'
import styled from 'styled-components'
import AnimatedHeading from 'components/animated-heading'
import AnimationContainer from 'components/animation-container'
import servicebackgroundimage from '../../../../../static/polygonz.png'
import webservice from '../../Servicesimg/webdevelopservice.jpg'
import './webdevlopment.css'

class Webdevlopment extends React.Component {
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

        return (
            <Section>
                <ServiceContainer>
                    <Container>
                        <AnimatedHeading text="Our Services" />
                        <Row className="services_row">
                            <Col className="service_img_col" md={5} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInLeft" delay={400}>
                                    <a href="/Webdevelopment" className="read_more_link"><img className="service_img" src={webservice} alt="Web-devlopment" /></a>
                                </AnimationContainer>
                            </Col>
                            <Col className="service_text_col" md={7} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInDown" delay={600}>
                                    <a href="/Webdevelopment" className="read_more_link"><h1 className="service_heading">Web development</h1></a>
                                    <div className="service_separator"></div>
                                    <p className="service_para">It refers to the work related to developing websites and their hosting through the use of the internet. The process of web development includes web content development, web design, network security and marketing.</p>
                                    <a href="/Webdevelopment" className="read_more_link">Read More</a>
                                </AnimationContainer>
                            </Col>
                        </Row>
                    </Container>
                </ServiceContainer>
            </Section>
        )
    }

}

export default Webdevlopment;
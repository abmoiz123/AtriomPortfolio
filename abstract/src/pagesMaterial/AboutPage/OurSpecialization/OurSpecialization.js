import React from 'react'
import {
    Container,
    Col,
    Navbar
} from 'react-bootstrap'
import styled from 'styled-components'
import AnimatedHeading from 'components/animated-heading'
import servicebackgroundimage from '../../../../static/polygonz.png'
import './OurSpecialization.css'

class OurSpecialization extends React.Component {
    render() {
        const Section = styled.section`
            position: relative;
            overflow: hidden;
            background-image: url(${servicebackgroundimage});
            background-size: cover;
            // background-repeat: no-repeat;
            .heading {
                width: 100%;
            }
          }
        `

        const ServiceContainer = styled.div`
            // background-color: rgba(0,0,0,.9);
            // background-color: #fff;
            padding: 100px 0;
            @media (max-width:767px) {
                padding: 20px 0;
            }
        `
        return (
            <Section>
                <ServiceContainer>
                    <Container>
                        <AnimatedHeading text="Our Secialization" />
                        <div className="service_main_div">
                            <Col md={10} className="special_div">
                                <div className="special_img_div"><img className="special_img" src={servicebackgroundimage} alt="e-commerce solution" /> </div>
                                <div className="special_text_div">
                                    <h1 className="special_heading">E-Commerce Solutions</h1>
                                    <div className="special_separator"></div>
                                    <p className="special_text">We Design Your E-Commerce Website With Complete Optimization that ensure the website is uder friendly and easy to use that catches the audience eyes. we are providing the safe, secure and user friendly payment gateway integration that means, the payment gateway plug in that has been designed to create smooth payment transactions.</p>
                                </div>
                            </Col>
                            <Col md={10} className="special_div2">
                                <div className="special_img_div"><img className="special_img" src={servicebackgroundimage} alt="e-commerce solution" /> </div>
                                <div className="special_text_div">
                                    <h1 className="special_heading">E-Commerce Solutions</h1>
                                    <div className="special_separator"></div>
                                    <p className="special_text">We Design Your E-Commerce Website With Complete Optimization that ensure the website is uder friendly and easy to use that catches the audience eyes. we are providing the safe, secure and user friendly payment gateway integration that means, the payment gateway plug in that has been designed to create smooth payment transactions.</p>
                                </div>
                            </Col>
                            <Col md={10} className="special_div">
                                <div className="special_img_div"><img className="special_img" src={servicebackgroundimage} alt="e-commerce solution" /> </div>
                                <div className="special_text_div">
                                    <h1 className="special_heading">E-Commerce Solutions</h1>
                                    <div className="special_separator"></div>
                                    <p className="special_text">We Design Your E-Commerce Website With Complete Optimization that ensure the website is uder friendly and easy to use that catches the audience eyes. we are providing the safe, secure and user friendly payment gateway integration that means, the payment gateway plug in that has been designed to create smooth payment transactions.</p>
                                </div>
                            </Col>
                            <Col md={10} className="special_div2">
                                <div className="special_img_div"><img className="special_img" src={servicebackgroundimage} alt="e-commerce solution" /> </div>
                                <div className="special_text_div">
                                    <h1 className="special_heading">E-Commerce Solutions</h1>
                                    <div className="special_separator"></div>
                                    <p className="special_text">We Design Your E-Commerce Website With Complete Optimization that ensure the website is uder friendly and easy to use that catches the audience eyes. we are providing the safe, secure and user friendly payment gateway integration that means, the payment gateway plug in that has been designed to create smooth payment transactions.</p>
                                </div>
                            </Col>
                        </div>
                    </Container>
                </ServiceContainer>
            </Section>
        )
    }

}

export default OurSpecialization;
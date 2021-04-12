import React from 'react'
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap'
import styled from 'styled-components'
// import AnimatedHeading from 'components/animated-heading'
// import servicebackgroundimage from '../../../../../static/polygonz.png'
import socialservice from '../../Servicesimg/socialservice.jpg'
import AnimationContainer from 'components/animation-container'

class Smm extends React.Component {
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
            padding: 50px 0;
            @media (max-width:767px) {
                padding: 20px 0;
            }
        `

        return (
            <Section>
                <ServiceContainer>
                    <Container>
                        <Row className="services_row2">
                            <Col className="service_img_col" md={5} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInRight" delay={1600}>
                                    <a href="/SocialMediaMarketing" className="read_more_link"><img className="service_img" src={socialservice} alt="Web-devlopment" /></a>
                                </AnimationContainer>

                            </Col>
                            <Col className="service_text_col" md={7} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInUp" delay={1800}>
                                    <a href="/SocialMediaMarketing" className="read_more_link"><h1 className="service_heading">Social Media Marketing</h1></a>
                                    <div className="service_separator"></div>
                                    <p className="service_para">Through this technique, we help you to reach your targeted social media users and other suitable applications that will help you spread brand awareness. Social media marketing is popular and widely used all over the countries.</p>
                                    <a href="/SocialMediaMarketing" className="read_more_link">Read More</a>
                                </AnimationContainer>
                            </Col>
                        </Row>
                    </Container>
                </ServiceContainer>
            </Section>
        )
    }

}

export default Smm;
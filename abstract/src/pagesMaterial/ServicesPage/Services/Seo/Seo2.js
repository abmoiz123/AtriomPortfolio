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
import seoimg1 from './seoimages/seo1.png'
import seoimg2 from './seoimages/seo2.png'
import seoimg3 from './seoimages/seo3.png'
import './Seo.css'

class Seo2 extends React.Component {
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
                        <AnimatedHeading text="Search Engine Optimization" />
                        <Row className="services_inside_row">
                            <Col className="serviceinsdieseo_text_col" lg={6} md={6} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInLeft" delay={800}>
                                    <div className="serviceinsdie_text_div">
                                        <h4 className="service_heading_style">Top SEO Company supplying Performance Oriented Solutions</h4>
                                        <p className="service_para_style">
                                            Other than SEO expert Karachi, our experts are also SEO consultant Karachi. They help you in gaining top ranking in google search results. Among one of the top leading digital marketing companies in Karachi, we have been providing high-quality work to our clients for the past several years.
                                        </p>
                                    </div>
                                </AnimationContainer>
                            </Col>
                            <Col className="animationcol" lg={6} md={6} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInUp" delay={800}>
                                    <img className="seoimage_for_slide" src={seoimg1} alt="seoimg" />
                                </AnimationContainer>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="animationcol" lg={6} md={6} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInUp" delay={800}>
                                    <img className="webimage_for_slide" src={seoimg2} alt="seoimg" />
                                </AnimationContainer>
                            </Col>
                            <Col lg={6} md={6} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInRight" delay={800}>
                                    <div className="serviceinsdie_text_div">
                                        <h4 className="service_heading_style">Increasing Visibility of Your Website with Our SEO Services Karachi</h4>
                                        <p className="service_para_style">
                                            Indeed, we are the best SEO company in Karachi we provide, unique marketing strategies and effective SEO services globally. We understand that the success of our client’s business depends on the number of traffic on the website.
                                        </p>
                                    </div>
                                </AnimationContainer>
                            </Col>
                        </Row>
                        <Row className="services_inside_row">
                            <Col lg={6} md={6} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInLeft" delay={800}>
                                    <div className="serviceinsdie_text_div">
                                        <h4 className="service_heading_style">Top SEO Company in Karachi that Grow Traffic for your Website</h4>
                                        <p className="service_para_style">
                                            Do you know that effective Search Engine Optimization practices can increase the engagement of your website effectively? Being a top SEO company, our experts do a wide-ranging competitor research and market analysis to see which technique of SEO is the best for our client.
                                        </p>
                                    </div>
                                </AnimationContainer>
                            </Col>
                            <Col className="animationcol" lg={6} md={6} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInUp" delay={800}>
                                    <img className="webimage_for_slide" src={seoimg3} alt="seoimg" />
                                </AnimationContainer>
                            </Col>
                        </Row>
                    </Container>
                </ServiceContainer>
            </Section>
        )
    }

}

export default Seo2;
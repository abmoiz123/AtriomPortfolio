import React from 'react'
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap'
import styled from 'styled-components'
import servicebackgroundimage from '../../../../../static/polygonz.png'
import '../projects/Projects.css'

class Webdevlopment3 extends React.Component {
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
                        <Row className="services_define_row">
                            <Col className="service_define_text_col" md={6} sm={12} xs={12}>
                                <h3 className="service_define_heading">Here Web Development Specialists Add Perfection In Your Project</h3>
                                <div className="service_separator"></div>
                                <p className="service_define_para">When it comes to growing a business in the current era, you must need your own website. If you want to have a successful business, you must need a responsive website immediately. Here at Digital Graphiks, our website development solutions are onboard to attract your desired audience.
                                </p>
                                <p className="service_define_para">Our web page development specialists aim to develop a customer-centric and tangible website for your business. Balanced information about any product on a web page is what we aim for; hence, it does get a bit challenging, but we overcome it seamlessly.
                                </p>
                            </Col>
                            <Col className="service_define_img_col" md={6} sm={12} xs={12}>
                                <img className="service_define_img" src={servicebackgroundimage} alt="Web-devlopment" />
                            </Col>
                        </Row>
                        <Row className="services_define_row">
                            <Col className="service_define_text_col" md={6} sm={12} xs={12}>
                                <h3 className="service_define_heading">Award Winning Best Web Development Company In Karachi, Pakistan</h3>
                                <div className="service_separator"></div>
                                <p className="service_define_para">While being one of the top web development companies, we are also well-known because of the outsource web development services. Website experts in our company have vast experience in web languages like C++, Python, PHP, and many more. We work dedicatedly on every project to make sure our client gets his work done quickly and efficiently.
                                </p>
                                <p className="service_define_para">Indeed, a satisfied client is what our agency wants, and during every web development project, we do face a number of challenges. Our clients consider us as the best website development company because our development team never gives up on any challenge; they accept and win their target seamlessly.
                                </p>
                                <p className="service_define_para">Throughout a website development journey, our team full of experts ensure that our clients will get frequent updates. By frequent updates means we can make any changes accordingly without delaying further.
                                </p>
                            </Col>
                            <Col className="service_img_col" md={6} sm={12} xs={12}>
                                <h3 className="service_define_heading">You Want an Efficient Landing Page Development; You Got it!</h3>
                                <div className="service_separator"></div>
                                <p className="service_define_para">Nowadays, every business owner wishes to increase his business and brand to be known around the world. For such achievement, you need a website that is easily accessible and functional on mobile and other devices. We are the experts in bringing the best platform for web development in every project. Even our basic web development procedure aims to bring responsiveness to it.
                                </p>
                                <p className="service_define_para">Web development online is also our expertise. By delivering an optimal performance with high-quality features that will appear on multiple devices without hanging, we show the world that we are the best responsive web developers of all. Starting our journey from basic web development to a high-performance site is completed when we get our client’s satisfaction.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </ServiceContainer>
            </Section>
        )
    }

}

export default Webdevlopment3;
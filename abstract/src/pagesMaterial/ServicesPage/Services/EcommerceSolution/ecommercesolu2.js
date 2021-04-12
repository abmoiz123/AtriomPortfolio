import React from 'react'
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap'
import styled from 'styled-components'
import AnimatedHeading from 'components/animated-heading'
import servicebackgroundimage from '../../../../../static/polygonz.png'
import './ecommercesolu.css'
import phoneslide from './imagesforservice/phoneslide.jpg'
import tabletslide from './imagesforservice/tabletslide.jpg'

class Ecommercesolu2 extends React.Component {
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
                        <AnimatedHeading text="E-Commerce Solutions" />
                        <Row className="services_inside_row">
                            <Col className="serviceinsdie_text_col" md={5} sm={12} xs={12}>
                                <h4 className="para_heading">Managed E-Commerce Solutions</h4>
                                <p className="service_para">
                                    They is designed to help you conduct your business electronically. Some of the solutions we offer include answers to a given problem. Such features will come in handy to enable you to carry out your eCommerce transactions efficiently. Therefore, if you are an online merchant looking to improve your business with clients, then you have come to the right place.
                                </p>
                                {/* <p className="service_para">
                                    Through eCommerce solutions, we help you get e-commerce services that help you to conduct business digitally. The range of eCommerce is broad, including traditional designs and creative websites, dropshipping stores. Our e-commerce solutions include:
                                </p>
                                <ul>
                                    <li>
                                        <h4 className="para_heading">Amazon Services</h4>
                                        <p className="service_para">
                                            Amazon's eCommerce services entail making money through retail, web services, and subscriptions. Retail is the primary source of revenue for Amazon when both online and physical stores contributing huge income. Advertising is also one of the fastest-growing businesses. Therefore, if you need any of these services, we are right here to help you to achieve them.
                                        </p>
                                    </li>
                                    <li>
                                        <h4 className="para_heading">Dropshipping Solution</h4>
                                        <p className="service_para">
                                            Dropshipping is a business transaction that involves the vendor who fulfils the orders for the third party, and they are shipped directly to the owner. The vendor will pay the discounted price for the item to the manufacturer; they make a profit through then the difference between the item cost and its selling price. So, dropshipping is one worth idea for your business, and you get assisted to achieve it with Atriom technologies. With all the resources you have at your disposal, this is doable, and you will reap from it profitably.
                                        </p>
                                    </li>
                                </ul> */}
                            </Col>
                            <Col className="animationcol" md={7} sm={12} xs={12}>
                                <div className="mobileanimation">
                                    <div className="animated_mobile_inside_div">
                                        <img className="animated_mobile_inside" src={phoneslide} alt="Business Software Solutions" />
                                    </div>
                                </div>
                                <div className="tabletanimation">
                                    <div className="animated_tablet_inside_div">
                                        <img className="animated_tablet_img" src={tabletslide} alt="Business Software Solutions" />
                                    </div>
                                </div>
                                <div className="laptopanimation">
                                    {/* <div className="animated_tablet_inside_div">
                                        <img className="animated_tablet_img" src={tabletslide} alt="Business Software Solutions" />
                                    </div> */}
                                </div>
                                {/* <img className="service_img" src={phone} alt="Business Software Solutions" /> */}
                            </Col>
                        </Row>
                    </Container>
                </ServiceContainer>
            </Section>
        )
    }

}

export default Ecommercesolu2;
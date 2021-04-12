import React from 'react'
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap'
import styled from 'styled-components'
// import servicebackgroundimage from '../../../../../static/polygonz.png'
import ecommerceservice from '../../Servicesimg/ecommerceservice.jpg'
import AnimationContainer from 'components/animation-container'

// import './webdevlopment.css'

class Ecommercesolu extends React.Component {
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
                                <AnimationContainer animation="fadeInRight" delay={800}>
                                    <a href="/EcommerceSolutions" className="read_more_link"><img className="service_img" src={ecommerceservice} alt="E-commerceservice" /></a>
                                </AnimationContainer>
                            </Col>
                            <Col className="service_text_col" md={7} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInUp" delay={1000}>
                                    <a href="/EcommerceSolutions" className="read_more_link"><h1 className="service_heading">E-Commerce Solutions</h1></a>
                                    <div className="service_separator"></div>
                                    <p className="service_para">Through eCommerce solutions, we help you get e-commerce services that help you to conduct business digitally. The range of eCommerce is broad, including traditional designs and creative websites, dropshipping stores. Our e-commerce solutions include:</p>
                                    <a href="/EcommerceSolutions" className="read_more_link">Read More</a>
                                </AnimationContainer>
                            </Col>
                        </Row>
                    </Container>
                </ServiceContainer>
            </Section>
        )
    }

}

export default Ecommercesolu;
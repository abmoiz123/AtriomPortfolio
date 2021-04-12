import React from 'react'
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap'
import styled from 'styled-components'
import servicebackgroundimage from '../../../../../static/polygonz.png'
import seoservice from '../../Servicesimg/seoservice.jpg'
import AnimationContainer from 'components/animation-container'

class Seo extends React.Component {
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
                        <Row className="services_row">
                            <Col className="service_img_col" md={5} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInLeft" delay={1200}>
                                    <a href="/SearchEngineOptimization" className="read_more_link"><img className="service_img" src={seoservice} alt="SEO" /></a>
                                </AnimationContainer>
                            </Col>
                            <Col className="service_text_col" md={7} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInDown" delay={1400}>
                                    <a href="/SearchEngineOptimization" className="read_more_link"><h1 className="service_heading">Search Engine Optimization</h1></a>
                                    <div className="service_separator"></div>
                                    <p className="service_para">It is an aggregate of strategies, tactics, and techniques utilized to increase traffic flow to your website. It happens through ranking in search engine results, including Bing, Google, and Yahoo. Therefore,</p>
                                    <a href="/SearchEngineOptimization" className="read_more_link">Read More</a>
                                </AnimationContainer>
                            </Col>
                        </Row>
                    </Container>
                </ServiceContainer>
            </Section>
        )
    }

}

export default Seo;
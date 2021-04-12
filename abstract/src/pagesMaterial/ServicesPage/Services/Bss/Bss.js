import React from 'react'
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap'
import styled from 'styled-components'
import servicebackgroundimage from '../../../../../static/polygonz.png'
import softwareservice from '../../Servicesimg/softwareservice.jpg'
import AnimationContainer from 'components/animation-container'


class Bss extends React.Component {
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
                                <AnimationContainer animation="fadeInLeft" delay={2000}>
                                    <a href="/BusinessSoftwareSolutions" className="read_more_link"><img className="service_img" src={softwareservice} alt="Web-devlopment" /></a>
                                </AnimationContainer>

                            </Col>
                            <Col className="service_text_col" md={7} sm={12} xs={12}>
                                <AnimationContainer animation="fadeInDown" delay={2200}>
                                    <a href="/BusinessSoftwareSolutions" className="read_more_link"><h1 className="service_heading">Business Software Solutions</h1></a>
                                    <div className="service_separator"></div>
                                    <p className="service_para">It is a set of computer programs that businesses use to perform various functions. The applications are useful in increasing productivity and also measuring the production of the company to see which areas need improvement.</p>
                                    <a href="/BusinessSoftwareSolutions" className="read_more_link">Read More</a>
                                </AnimationContainer>
                            </Col>
                        </Row>
                    </Container>
                </ServiceContainer>
            </Section>
        )
    }

}

export default Bss;
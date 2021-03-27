import React from 'react'
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap'
import styled from 'styled-components'
import AnimatedHeading from 'components/animated-heading'
import servicebackgroundimage from '../../../../../static/polygonz.png'

class Bss2 extends React.Component {
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
                        <AnimatedHeading text="Business Software Solutions" />
                        <Row className="services_row">
                            <Col className="service_img_col" md={6} sm={12} xs={12}>
                                <img className="service_img" src={servicebackgroundimage} alt="Business Software Solutions" />
                            </Col>
                            <Col className="service_text_col" md={6} sm={12} xs={12}>
                                <p className="service_para">
                                It is a set of computer programs that businesses use to perform various functions. The applications are useful in increasing productivity and also measuring the production of the company to see which areas need improvement.
                                <br />
                                Therefore, we help you combine ideas that will help you achieve your set objectives. The solution could be in the form of marketing, auditing, payroll, and market analysis and research, amongst other business-related activities that will help solve problems with your company.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </ServiceContainer>
            </Section>
        )
    }

}

export default Bss2;
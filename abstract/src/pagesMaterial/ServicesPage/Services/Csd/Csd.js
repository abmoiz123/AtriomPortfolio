import React from 'react'
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap'
import styled from 'styled-components'
import servicebackgroundimage from '../../../../../static/polygonz.png'

class Csd extends React.Component {
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
                                <a href="/CustomizedSoftwareDevelopment" className="read_more_link"><img className="service_img" src={servicebackgroundimage} alt="Web-devlopment" /></a>
                            </Col>
                            <Col className="service_text_col" md={7} sm={12} xs={12}>
                                <a href="/CustomizedSoftwareDevelopment" className="read_more_link"><h1 className="service_heading">Customized Software Development</h1></a>
                                <div className="service_separator"></div>
                                <p className="service_para">Through this technique, we help you to reach your targeted social media users and other suitable applications that will help you spread brand awareness. Social media marketing is popular and widely used all over the countries.</p>
                                <a href="/CustomizedSoftwareDevelopment" className="read_more_link">Read More</a>
                            </Col>
                        </Row>
                    </Container>
                </ServiceContainer>
            </Section>
        )
    }

}

export default Csd;
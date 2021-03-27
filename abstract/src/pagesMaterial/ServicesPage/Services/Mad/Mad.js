import React from 'react'
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap'
import styled from 'styled-components'
import servicebackgroundimage from '../../../../../static/polygonz.png'

class Mad extends React.Component {
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
                                <a href="/MobileAppDevelopment" className="read_more_link"><img className="service_img" src={servicebackgroundimage} alt="Web-devlopment" /></a>
                            </Col>
                            <Col className="service_text_col" md={7} sm={12} xs={12}>
                                <a href="/MobileAppDevelopment" className="read_more_link"><h1 className="service_heading">Mobile App Development</h1></a>
                                <div className="service_separator"></div>
                                <p className="service_para">It entails the process through which a new application is made to be run on devices such as the android operating system or IOS. Mobile app development is not so notable, but if you necessitate it for your business, we chip in to offer you our expertise in developing mobile apps.</p>
                                <a href="/MobileAppDevelopment" className="read_more_link">Read More</a>
                            </Col>
                        </Row>
                    </Container>
                </ServiceContainer>
            </Section>
        )
    }

}

export default Mad;
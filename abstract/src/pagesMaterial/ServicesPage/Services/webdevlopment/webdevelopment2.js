import React from 'react'
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap'
import styled from 'styled-components'
import AnimatedHeading from 'components/animated-heading'
import servicebackgroundimage from '../../../../../static/polygonz.png'
import '../projects/Projects.css'

class Webdevlopment extends React.Component {
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
                        <AnimatedHeading text="Web Development" />
                        <Row className="services_define_row">
                            <Col className="service_define_img_col" md={6} sm={12} xs={12}>
                                <img className="service_define_img" src={servicebackgroundimage} alt="Web-devlopment" />
                            </Col>
                            <Col className="service_define_text_col" md={6} sm={12} xs={12}>
                                <p className="service_define_para">It refers to the work related to developing websites and their hosting through the use of the internet. The process of web development includes web content development, web design, network security and marketing. <br />Therefore, Atriom Technologies offer you web development services to assist you to generate more product according to awareness, communicating with your potential clients, generating leads to promote or sell your product and services.
                                    Through it, you will be able to reach out to many consumers in addition to selling your product and services online. You can also avail information about your clients’ needs so that they can purchase easily with no hassle what so ever. A well updated and maintained website will give you a competitive advantage in the market by improving your business image.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </ServiceContainer>
            </Section>
        )
    }

}

export default Webdevlopment;
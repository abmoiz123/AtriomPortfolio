import React from 'react'
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap'
import styled from 'styled-components'
import AnimatedHeading from 'components/animated-heading'
import servicebackgroundimage from '../../../../../static/polygonz.png'

class Gdva2 extends React.Component {
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
                        <AnimatedHeading text="Graphic Design & Video Animation" />
                        <Row className="services_row">
                            <Col className="service_img_col" md={6} sm={12} xs={12}>
                                <img className="service_img" src={servicebackgroundimage} alt="Graphic Design" />
                            </Col>
                            <Col className="service_text_col" md={6} sm={12} xs={12}>
                                <p className="service_para">
                                    There is no limit what so ever to what you can get designed at Atriom Technologies. The art of varying motion of either flat cell animation or as drawn animation or animation consisting of photographs either in whole or partially. Motion graphics are essential in helping to make it easy to remember concepts. With graphic designing services you can easily reach out to your potential clients quick and rapid in a more attractive way. It is a modern way of representing data, creating awareness, and call to action for potential customers.
                                <br />
                                Having noted the significance of graphic design and animation, we offer the service to you so that you can use it to meet your business goals. So, contact us now and get the design you’ll like!
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </ServiceContainer>
            </Section>
        )
    }

}

export default Gdva2;
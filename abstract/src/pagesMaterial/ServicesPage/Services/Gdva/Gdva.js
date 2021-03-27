import React from 'react'
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap'
import styled from 'styled-components'
import servicebackgroundimage from '../../../../../static/polygonz.png'

class Gdva extends React.Component {
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
                                <a href="/GraphicDesignandVideoAnimation" className="read_more_link"><img className="service_img" src={servicebackgroundimage} alt="Web-devlopment" /></a>
                            </Col>
                            <Col className="service_text_col" md={7} sm={12} xs={12}>
                                <a href="/GraphicDesignandVideoAnimation" className="read_more_link"><h1 className="service_heading">Graphic Design and Video Animation</h1></a>
                                <div className="service_separator"></div>
                                <p className="service_para">There is no limit what so ever to what you can get designed at Atriom Technologies. The art of varying motion of either flat cell animation or as drawn animation or animation consisting of photographs either in whole or partially.</p>
                                <a href="/GraphicDesignandVideoAnimation" className="read_more_link">Read More</a>
                            </Col>
                        </Row>
                    </Container>
                </ServiceContainer>
            </Section>
        )
    }

}

export default Gdva;
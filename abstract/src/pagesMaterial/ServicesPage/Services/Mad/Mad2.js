import React from 'react'
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap'
import styled from 'styled-components'
import AnimatedHeading from 'components/animated-heading'
import servicebackgroundimage from '../../../../../static/polygonz.png'

class Mad2 extends React.Component {
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
                        <AnimatedHeading text="Mobile App Development" />
                        <Row className="services_row">
                            <Col className="service_img_col" md={6} sm={12} xs={12}>
                                <img className="service_img" src={servicebackgroundimage} alt="Mobile App Development" />
                            </Col>
                            <Col className="service_text_col" md={6} sm={12} xs={12}>
                                <p className="service_para">
                                    It entails the process through which a new application is made to be run on devices such as the android operating system or IOS.
                                <br />
                                Mobile app development is not so notable, but if you necessitate it for your business, we chip in to offer you our expertise in developing mobile apps. We have a team of specialists who hold these skills and convenient to you; upon specifying the kind of app you need; you can be sure to have it at a reasonable period and price.
                                <br />
                                So, for any app you think would be beneficial for your business, just get in touch with us. Atriom Technologies takes contentment in proposing these services.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </ServiceContainer>
            </Section>
        )
    }

}

export default Mad2;
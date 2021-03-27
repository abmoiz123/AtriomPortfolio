import React from 'react'
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap'
import styled from 'styled-components'
import AnimatedHeading from 'components/animated-heading'
import servicebackgroundimage from '../../../../../static/polygonz.png'

class Csd2 extends React.Component {
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
                    <AnimatedHeading text="Customized Software Development" />
                    <Container>
                        <Row className="services_row">
                            <Col className="service_img_col" md={6} sm={12} xs={12}>
                                <img className="service_img" src={servicebackgroundimage} alt="Business Software Solutions" />
                            </Col>
                            <Col className="service_text_col" md={6} sm={12} xs={12}>
                                <p className="service_para">
                                    Through this technique, we help you to reach your targeted social media users and other suitable applications that will help you spread brand awareness. Social media marketing is popular and widely used all over the countries. The same case with your business, establishing an online presence for your business is a significant step. We help you create shareable content, including advertorials. We will help you generate more revenue by engaging your targeted audience using a platform such as Facebook, LinkedIn, and Instagram. It is a worthwhile tactic of digital marketing that increases customer engagement, increase leads, and also increase social awareness of your brand, agility.
                                <br />
                                Social marketing is the way to connect with your audience, increase brand awareness, drive traffic to your website, and generate more leads.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </ServiceContainer>
            </Section>
        )
    }

}

export default Csd2;
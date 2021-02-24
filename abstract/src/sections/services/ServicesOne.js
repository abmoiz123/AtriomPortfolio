import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import AnimationContainer from 'components/animation-container'
import AnimatedHeading from 'components/animated-heading'
import webimage from '../../../static/WEBDEVELOPMENT.png'
import mobimage from '../../../static/MOBDEVELOPMENT.png'
import seoimage from '../../../static/SEO2.png'
import emailimage from '../../../static/EMAILS.png'
import networkimage from '../../../static/NETWORK2.png'
import sketchimage from '../../../static/UIUX.png'
// import servicebackgroundimage from '../../../static/servicebackground.jpg'
import servicebackgroundimage from '../../../static/polygonz.png'


class ServicesOne extends React.Component {


    shouldComponentUpdate() {
        return false
    }


    render() {
        const Section = styled.section`
            position: relative;
            overflow: hidden;
            // background-color: #111;
            // background-image: url(${this.props.background.childImageSharp.fluid.src});
            background-image: url(${servicebackgroundimage});
            background-size: cover;
            // background-repeat: no-repeat;
            .heading {
                width: 100%;
            }
          }
        `

        const ServiceContainer = styled.div`
            // background-color: rgba(0,0,0,.9);
            // background-color: #fff;
            padding: 100px 0;
        `


        const ServiceElement = styled.div`
            margin-bottom: 20px;
            text-align: center;
            padding: 40px;
            border-radius: 20px;
            transition: .2s;
            &:hover {
                background-color: #013567;
                // box-shadow: 0 28px 60px rgb(4, 229, 229, .1);
                box-shadow: 0 28px 60px rgb(255,255,255, .3);
                transform: translateY(-10px);
            }
        `
        const ServiceHeading = styled.h4`
            font-size: 30px;
            font-weight: 500;
            font-family: Teko;
            // color: #fff;
            color: #f6b10a;
        `
        const ServiceSeparator = styled.div`
            height: 5px;
            width: 50px;
            // background-color: #04e5e5;
            background-color: #00468b;
            margin-bottom: 10px;
            margin: auto;
         `
        const ServiceIcon = styled.div`
            margin-bottom: 20px;
            img {
                max-height: 90px;
            }
        `

        const ServiceList = styled.ul`
            padding: 0;
            margin: 11px 0 0 0;
        `

        const ServiceListElement = styled.li`
            list-style: none;
            color: #fff;
            // color: #013567;
            font-weight: 300;
            font-size: 14px;
            margin: 5px 0px;
            &::before {
                display: inline-block;
                content: '';
                border-radius: 2.5px;
                height: 5px;
                width: 5px;
                margin-right: 10px;
                // background-color:#04e5e5;
                background-color:#f6b10a;
                position: relative;
                bottom: 2.5px;
            }
        `

        return (
            <Section id="services">
                <ServiceContainer>
                    <Container>
                        <AnimatedHeading text="Our Services" />
                        <Row>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInLeft" delay={200}>
                                    <ServiceElement>
                                        <ServiceIcon>
                                            {/* <img src={this.props.mobile.childImageSharp.fluid.src} alt="Mobile App Development" />
                                                      */}
                                            <img src={mobimage} alt="Mobile App Development" />
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            Mobile App Development
                                            </ServiceHeading>
                                        <ServiceSeparator />
                                        <ServiceList>
                                            <ServiceListElement>
                                                Lorem ipsum dolor sit amet
                                                </ServiceListElement>
                                            <ServiceListElement>
                                                In vitae ultricies lacus vitae
                                                </ServiceListElement>
                                            <ServiceListElement>
                                                Pellentesque blandit libero
                                                </ServiceListElement>
                                        </ServiceList>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInDown" delay={400}>
                                    <ServiceElement>
                                        <ServiceIcon>
                                            {/* <img src={this.props.web.childImageSharp.fluid.src} alt="Mobile App Development" /> */}
                                            <img src={webimage} alt="Web Development" />
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            Web  Development
                                        </ServiceHeading>
                                        <ServiceSeparator />
                                        <ServiceList>
                                            <ServiceListElement>
                                                Lorem ipsum dolor sit amet
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                In vitae ultricies lacus vitae
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                Pellentesque blandit libero
                                            </ServiceListElement>
                                        </ServiceList>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInRight" delay={600}>
                                    <ServiceElement>
                                        <ServiceIcon>
                                            {/* <img src={this.props.email.childImageSharp.fluid.src} alt="Mobile App Development" /> */}
                                            <img src={emailimage} alt="Email Marketing" />
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            Email Marketing
                                        </ServiceHeading>
                                        <ServiceSeparator />
                                        <ServiceList>
                                            <ServiceListElement>
                                                Lorem ipsum dolor sit amet
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                In vitae ultricies lacus vitae
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                Pellentesque blandit libero
                                            </ServiceListElement>
                                        </ServiceList>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInLeft" delay={800}>
                                    <ServiceElement>
                                        <ServiceIcon>
                                            {/* <img src={this.props.seo.childImageSharp.fluid.src} alt="Mobile App Development" /> */}
                                            <img src={seoimage} alt="seo experts" />
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            Search Engine Optimization
                                        </ServiceHeading>
                                        <ServiceSeparator />
                                        <ServiceList>
                                            <ServiceListElement>
                                                Lorem ipsum dolor sit amet
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                In vitae ultricies lacus vitae
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                Pellentesque blandit libero
                                            </ServiceListElement>
                                        </ServiceList>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInUp" delay={1000}>
                                    <ServiceElement>
                                        <ServiceIcon>
                                            {/* <img src={this.props.network.childImageSharp.fluid.src} alt="Mobile App Development" /> */}
                                            <img src={networkimage} alt="Network Management" />
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            Network Management
                                        </ServiceHeading>
                                        <ServiceSeparator />
                                        <ServiceList>
                                            <ServiceListElement>
                                                Lorem ipsum dolor sit amet
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                In vitae ultricies lacus vitae
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                Pellentesque blandit libero
                                            </ServiceListElement>
                                        </ServiceList>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInRight" delay={1200}>
                                    <ServiceElement>
                                        <ServiceIcon>
                                            {/* <img src={this.props.ui.childImageSharp.fluid.src} alt="Mobile App Development" /> */}
                                            <img src={sketchimage} alt="UI/UX Development" />
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            UI/UX Development
                                            </ServiceHeading>
                                        <ServiceSeparator />
                                        <ServiceList>
                                            <ServiceListElement>
                                                Lorem ipsum dolor sit amet
                                                </ServiceListElement>
                                            <ServiceListElement>
                                                In vitae ultricies lacus vitae
                                                </ServiceListElement>
                                            <ServiceListElement>
                                                Pellentesque blandit libero
                                                </ServiceListElement>
                                        </ServiceList>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                        </Row>
                    </Container>
                </ServiceContainer>
            </Section>
        )
    }

}

export default props => (
    <StaticQuery
        query={graphql`
      query {
        background: file(relativePath: {eq: "bg2.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 4000, quality: 100) {
              src
            }
          }
        }
        web: file(relativePath: {eq: "icons/web.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        mobile: file(relativePath: {eq: "icons/mobile.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        seo: file(relativePath: {eq: "icons/seo2.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        email: file(relativePath: {eq: "icons/email.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        ui: file(relativePath: {eq: "icons/sketch.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        network: file(relativePath: {eq: "icons/network.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
      }      
      `}
        render={({
            background,
            web,
            mobile,
            seo,
            email,
            ui,
            network }) => <ServicesOne
                background={background}
                web={web}
                mobile={mobile}
                seo={seo}
                email={email}
                ui={ui}
                network={network}
                {...props} />}
    />
)
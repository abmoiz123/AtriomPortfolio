import React from 'react'
import {
    Container,
    Row,
    Col,
    Navbar
} from 'react-bootstrap'
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
import servicebackgroundimage from '../../../static/polygonz.png'
import './ServiceOne.css'

class ServicesOne extends React.Component {

    shouldComponentUpdate() {
        return false
    }

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
            padding: 100px 0;
            @media (max-width:992px) {
                padding: 50px 0;
            }
            @media (max-width:767px) {
                padding: 50px 10px;
            }
        `


        const ServiceElement = styled.div`
            // margin-bottom: 20px;
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
            @media (max-width:992px) {
                padding: 20px;
                background-color: #013567;
                box-shadow: 0 28px 60px rgb(255,255,255, .3);
                transform: translateY(-10px);
            }
            @media (max-width:767px) {
                padding: 10px 0px;
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
            @media (max-width:992px) {
                font-size: 30px;
            }
            @media (max-width:767px) {
                font-size: 25px;
                padding: 10px 0px;
            }
            @media (max-width:400px) {
                padding: 0px;
            }
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
            @media (max-width:767px) {    
                margin: 10px 0px;
                img {
                    max-height: 70px;
                }
            }
            @media (max-width:400px) {    
                margin: 5px 0px;
                img {
                    max-height: 50px;
                }
            }
        `

        const ServiceList = styled.ul`
            text-Align: left;
            padding: 0;
            margin: 11px 0 0 0;
            @media (max-width:767px) {    
                margin: 11px 5px 0 10px;
            }
        `

        const ServiceListElement = styled.li`
            // overflow: hidden;
            // text-overflow: ellipsis;
            // text-Align: justify;
            list-style: none;
            color: #fff;
            // color: #013567;
            font-weight: 300;
            font-size: 13px;
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
            @media (max-width:767px) {    
                font-size: 11px;
            }
        `

        return (
            <Section id="services">
                <ServiceContainer>
                    <Container>
                        <AnimatedHeading text="Our Services" />
                        <Row>
                            <Col className="service_col" md={4} sm={6} xs={6}>
                                <AnimationContainer animation="fadeInLeft" delay={200}>
                                    <ServiceElement>
                                        <ServiceIcon>
                                            <img src={mobimage} alt="Mobile App Development" />
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            Mobile App Development
                                            </ServiceHeading>
                                        <ServiceSeparator />
                                        <Navbar className="readmore_con" expand="lg">
                                            <Navbar.Toggle className="nav_toggle2" aria-controls="basic-navbar-nav">Read More</Navbar.Toggle>
                                            <Navbar.Collapse className="readmore_col" id="basic-navbar-nav">
                                                <ServiceList>
                                                    <ServiceListElement>
                                                        End to end develop Android/IOS apps
                                                    </ServiceListElement>
                                                    <ServiceListElement>
                                                        Dart, Flutter, DevOps, ReactNative
                                                    </ServiceListElement>
                                                    <ServiceListElement>
                                                        Agile and Linear Development
                                                    </ServiceListElement>
                                                </ServiceList>
                                            </Navbar.Collapse>
                                        </Navbar>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col className="service_col" md={4} sm={6} xs={6}>
                                <AnimationContainer animation="fadeInRight" delay={600}>
                                    <ServiceElement>
                                        <ServiceIcon>
                                            {/* <img src={this.props.email.childImageSharp.fluid.src} alt="Mobile App Development" /> */}
                                            <img src={emailimage} alt="Email Marketing" />
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            E-Commerce Solution
                                        </ServiceHeading>
                                        <ServiceSeparator />
                                        <Navbar className="readmore_con" expand="lg">
                                            <Navbar.Toggle className="nav_toggle2" aria-controls="basic-navbar-nav">Read More</Navbar.Toggle>
                                            <Navbar.Collapse className="readmore_col" id="basic-navbar-nav">
                                                <ServiceList>
                                                    <ServiceListElement>
                                                        Custom E-commerce Development
                                                    </ServiceListElement>
                                                    <ServiceListElement>
                                                        Amazon and DropShipping Services
                                                    </ServiceListElement>
                                                    <ServiceListElement>
                                                        Business Performance Optimization
                                                    </ServiceListElement>
                                                </ServiceList>
                                            </Navbar.Collapse>
                                        </Navbar>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col className="service_col" md={4} sm={6} xs={6}>
                                <AnimationContainer animation="fadeInDown" delay={400}>
                                    <ServiceElement>
                                        <ServiceIcon>
                                            {/* <img src={this.props.web.childImageSharp.fluid.src} alt="Mobile App Development" /> */}
                                            <img src={webimage} alt="Web Development" />
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            Website Development
                                        </ServiceHeading>
                                        <ServiceSeparator />
                                        <Navbar className="readmore_con" expand="lg">
                                            <Navbar.Toggle className="nav_toggle2" aria-controls="basic-navbar-nav">Read More</Navbar.Toggle>
                                            <Navbar.Collapse className="readmore_col" id="basic-navbar-nav">
                                                <ServiceList>
                                                    <ServiceListElement>
                                                        WordPress, Shopify, Magento
                                                    </ServiceListElement>
                                                    <ServiceListElement>
                                                        JS, Laravel and PHP Web Development
                                                    </ServiceListElement>
                                                    <ServiceListElement>
                                                        Responsive, UserFriendly Cross-Platform
                                                    </ServiceListElement>
                                                </ServiceList>
                                            </Navbar.Collapse>
                                        </Navbar>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col className="service_col" md={4} sm={6} xs={6}>
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
                                        <Navbar className="readmore_con" expand="lg">
                                            <Navbar.Toggle className="nav_toggle2" aria-controls="basic-navbar-nav">Read More</Navbar.Toggle>
                                            <Navbar.Collapse className="readmore_col" id="basic-navbar-nav">
                                                <ServiceList>
                                                    <ServiceListElement>
                                                        Link Building and Speed Optimization
                                                    </ServiceListElement>
                                                    <ServiceListElement>
                                                        Content Optimization
                                                    </ServiceListElement>
                                                    <ServiceListElement>
                                                        Complete Keyword Analysis 
                                                    </ServiceListElement>
                                                </ServiceList>
                                            </Navbar.Collapse>
                                        </Navbar>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col className="service_col" md={4} sm={6} xs={6}>
                                <AnimationContainer animation="fadeInUp" delay={1000}>
                                    <ServiceElement>
                                        <ServiceIcon>
                                            {/* <img src={this.props.network.childImageSharp.fluid.src} alt="Mobile App Development" /> */}
                                            <img src={networkimage} alt="Network Management" />
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            Software Development
                                        </ServiceHeading>
                                        <ServiceSeparator />
                                        <Navbar className="readmore_con" expand="lg">
                                            <Navbar.Toggle className="nav_toggle2" aria-controls="basic-navbar-nav">Read More</Navbar.Toggle>
                                            <Navbar.Collapse className="readmore_col" id="basic-navbar-nav">
                                                <ServiceList>
                                                    <ServiceListElement>
                                                        Develop and Modify Your Application
                                                    </ServiceListElement>
                                                    <ServiceListElement>
                                                        Software Testing and Management
                                                    </ServiceListElement>
                                                    <ServiceListElement>
                                                        Advance Custom Development
                                                    </ServiceListElement>
                                                </ServiceList>
                                            </Navbar.Collapse>
                                        </Navbar>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col className="service_col" md={4} sm={6} xs={6}>
                                <AnimationContainer animation="fadeInRight" delay={1200}>
                                    <ServiceElement>
                                        <ServiceIcon>
                                            {/* <img src={this.props.ui.childImageSharp.fluid.src} alt="Mobile App Development" /> */}
                                            <img src={sketchimage} alt="UI/UX Development" />
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            Graphics/Video Animation
                                            </ServiceHeading>
                                        <ServiceSeparator />
                                        <Navbar className="readmore_con" expand="lg">
                                            <Navbar.Toggle className="nav_toggle2" aria-controls="basic-navbar-nav">Read More</Navbar.Toggle>
                                            <Navbar.Collapse className="readmore_col" id="basic-navbar-nav">
                                                <ServiceList>
                                                    <ServiceListElement>
                                                        Corporate and Animated Videos
                                                    </ServiceListElement>
                                                    <ServiceListElement>
                                                        3D Creature and Character Animation 
                                                    </ServiceListElement>
                                                    <ServiceListElement>
                                                        Commercial and Visual Effects
                                                    </ServiceListElement>
                                                </ServiceList>
                                            </Navbar.Collapse>
                                        </Navbar>
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
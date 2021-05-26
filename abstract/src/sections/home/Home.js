import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
// import Typewriter from 'typewriter-effect'
// import LoopVideo from './assets/loop.mp4'
// import LoopVideo from './assets/intro_video.mp4'
import homeimg from './assets/mock2.jpg'
// import webimage from '../../../static/web.png'
// import mobimage from '../../../static/mobile.png'
// import seoimage from '../../../static/seo.png'
import newwebimage from '../../../static/WEBDEVELOPMENT.png'
import newmobimage from '../../../static/MOBDEVELOPMENT.png'
import newseoimage from '../../../static/SEO2.png'
class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            height: 0,
            width: 0
        }
    }
    updateDimensions = () => {
        if (this.state.height !== window.innerHeight) {
            this.setState({ height: window.innerHeight })
        }
        if (this.state.width !== window.innerWidth) {
            this.setState({ width: window.innerWidth })
        }
    }


    componentDidMount() {
        this.setState({ height: window.innerHeight, width: window.innerWidth })
        window.addEventListener('resize', this.updateDimensions)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions)
    }

    render() {

        const Section = styled.section`
            position: relative;
        `
        // const Section = styled.section`
        //     // border: 5px solid black;
        //     position: relative;
        //     .particles {
        //         position: absolute;
        //         width: 100%;
        //         height: 100%;
        //     }

        //     background-size: cover;
        //     background-repeat: no-repeat;
        // `



        const CompanyImage = styled.div`
            width: 100%;
            display: flex;
            align-items: center;
            overflow: hidden;
            position: relative;
            // background-color: #fff;
            // background-image: linear-gradient(0deg, grey, #fff);
            img {
                // position: absolute;
                width: 100%;
                // opacity: 0.7;
            }
        `
        // const VideoContainer = styled.div`
        //     width: 100%;
        //     display: flex;
        //     align-items: center;
        //     overflow: hidden;
        //     position: relative;
        //     video {
        //         position: absolute;
        //         width: 100%;
        //         opacity: 0.7;
        //         // z-index: 1;
        //     }
        // `
        // const Heading1 = styled.h1`
        //     font-size: 80px;
        //     font-family: Teko;
        //     line-height: 40px;
        //     color: #fff;
        //     font-weight: 400;
        //     text-transform: uppercase;
        //     @media (min-width:768px) {
        //         margin-left: 4px;
        //     }
        //     @media (max-width:767px) {
        //         margin-left: 2px;
        //     }
        //     @media (min-width:768px) and (max-width:1500px) {
        //         font-size: 40px;
        //     }
        //     @media (max-width:767px) {
        //         font-size: 20px;
        //         line-height: 20px;
        //     }
        // `

        // const Heading2 = styled.h2`
        //     font-size: 120px;
        //     color: #fff;
        //     font-weight: 700;
        //     text-transform: uppercase;
        //     background: -webkit-linear-gradient(left, #00ffff , #007a7a);
        //     background: -o-linear-gradient(right, #00ffff, #007a7a);
        //     background: -moz-linear-gradient(right, #00ffff, #007a7a);
        //     background: linear-gradient(to right, #00ffff , #007a7a); 
        //    -webkit-background-clip: text;
        //    -webkit-text-fill-color: transparent;
        //    @media (max-width:767px) {
        //         font-size: 40px;
        //         line-height: 40px;
        //     }
        //    @media (min-width:768px) and (max-width:1500px) {
        //         font-size: 70px;
        //     }
        // `
        // const Heading2 = styled.h2`
        //     font-size: 120px;
        //     // color: rgb(246, 177, 10);
        //     // color: #013567;
        //     color: #f6b10a;
        //     font-weight: 700;
        //     text-transform: uppercase;
        //    @media (max-width:767px) {
        //         font-size: 30px;
        //         line-height: 40px;
        //     }
        //    @media (min-width:768px) and (max-width:1500px) {
        //         font-size: 70px;
        //     }
        // `

        // const Type = styled.div`
        //     font-size: 50px;
        //     line-height: 50px;
        //     color: #fff;
        //     text-transform: uppercase;
        //     @media (min-width:768px) {
        //         margin-left: 6px;
        //     }
        //     @media (max-width:767px) {
        //         margin-left: 2px;
        //     }
        //     @media (min-width:768px) and (max-width:1500px) {
        //         font-size: 23px;
        //         line-height: 20px;
        //     }
        //     @media (max-width:767px) {
        //         font-size: 20px;
        //         line-height: 20px;
        //     }
        //     span {
        //         font-family: Teko;
        //     }
        // `
        // const Content = styled.div`
        //     position: relative;
        //     z-index: 10
        // `

        // const Separator = styled.div`
        //     height: 5px;
        //     width: 50px;
        //     // background-color: rgb(246, 177, 10);
        //     background-color: #013567;
        //     margin-bottom: 30px;
        //     @media (min-width:768px) {
        //         margin-left: 6px;
        //     }
        //     @media (max-width:767px) {
        //         margin-left: 2px;
        //     }
        // `

        const BottomContent = styled.div`
            position: absolute;
            width: 100%;
            bottom: -14%;
            z-index: 2;
            @media (min-width:1025px) and (max-width: 1400px) {    
                bottom: -35%;
            }
            @media (max-width:992px) {
                bottom: -15%;
            }
            @media (max-width:767px) {
                display: none;
            } 
            // @media (min-width:768px) and (max-width: 1023px) {    
            //     bottom: -25%;
            // }
        `

        const ServiceCol = styled(Col)`
            text-Align: center;
            padding: 0;
            border-right: #444;
            &.no-border {
                border-right: none;
            }
            @media (max-width:500px) {
                border-right:none;
            }
        `

        const Service = styled.div`
            background-color: #00468b;
            transition: .2s;
            display: flex;
            justify-content: center;
            flex-direction: column;
            box-shadow: 0px 20px 30px rgb(255,255,255,.2);
            &:hover {
                box-shadow: 0 28px 50px rgb(255,255,255,.5);
            }
            @media (max-width:992px) {
                min-height: 280px;
                max-height: 280px;
                overflow: hidden;
            } 
        `
        const ServiceContent = styled.div`
            padding: 40px;
            color: #fff;
            p {
                font-size: 14px;
                font-weight: 300;
                color: #efefef;
            }
            @media (max-width:992px) {
                padding: 10px;
                p {
                    font-size: 13px;
                }
            } 
        `
        const ServiceHeading = styled.h4`
            font-size: 30px;
            font-weight: 400;
            font-family: Teko;
            color: #f6b10a;
            @media (max-width:992px) {
                margin-top: 10px;
                font-size: 22px;
            } 
        `
        const ServiceSeparator = styled.div`
            height: 5px;
            width: 50px;
            background-color: #013567;
            margin-bottom: 10px;
        `

        const ServiceIcon = styled.div`
            margin-bottom: 20px;
            img {
                max-height: 80px;
            }
            @media (max-width:992px) {
                margin-bottom: 0px;
                img {
                    max-height: 50px;
                }
            } 
        `

        const ServiceText = styled.p`
            text-align: justify;
            overflow: hidden;
            width: 100%;
            text-overflow: ellipsis;
            font-size: 14px;
            font-weight: 300;
            color: #c5c5c5;
        `

        return (
            <Section id="home">
                <CompanyImage style={{ height: `${this.state.width > 500 ? this.state.height : 350}px` }}>
                    <img src={homeimg} style={{ height: `${this.state.width >= 300 && this.state.width < 1200 ? "100%" : "auto"}` }} alt="companyimg" />
                </CompanyImage>
                {/* <CompanyImage style={{ height: `${this.state.width > 767 ? this.state.height : 500}px` }}>
                    <img src={homeimg} style={{ height: `${this.state.width >= 300 && this.state.width < 1200 ? "100%" : "auto"}` }} alt="companyimg" />
                </CompanyImage> */}
                {/* <VideoContainer style={{ height: `${this.state.width > 500 ? this.state.height : 350}px` }}>
                    <video autoPlay="autoplay" loop="loop" muted style={{ height: `${this.state.width >= 1024 && this.state.width < 1200 ? "100%" : "auto"}` }}>
                        <source src={LoopVideo} type="video/mp4" />
                    </video>
                    <Container>
                        <Content>
                            <Heading1>
                                Creative
                            </Heading1>
                            <Heading2>
                                Digital Agency
                            </Heading2>
                            <Separator/>
                            <Type>
                                <Typewriter
                                    options={{
                                    strings: [
                                        'App Developers',
                                        'Web Designers',
                                        'UX Designers',
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    }}
                                />
                            </Type>
                        </Content>
                    </Container>
                </VideoContainer> */}
                <BottomContent>
                    <Container>
                        <Row>
                            <ServiceCol md={4} style={{ borderRight: this.state.width > 500 ? "1px solid #444" : "none" }}>
                                <Service>
                                    <ServiceContent>
                                        <ServiceIcon>
                                            <img src={newwebimage} alt="web experts" />
                                        </ServiceIcon>
                                        <ServiceHeading>Digital Marketing</ServiceHeading>
                                        <ServiceSeparator />
                                        <ServiceText>
                                            We offer a full service of digital marketing that provides a diverse range of capabilities. We offer SEO, Social Media Marketing, Mobile advertising and Premium content to gain more visitors and buyers to your business.
                                        </ServiceText>
                                    </ServiceContent>
                                </Service>
                            </ServiceCol>
                            <ServiceCol md={4} style={{ borderRight: this.state.width > 500 ? "1px solid #444" : "none" }}>
                                <Service>
                                    <ServiceContent>
                                        <ServiceIcon>
                                            <img src={newmobimage} alt="mobile experts" />
                                        </ServiceIcon>
                                        <ServiceHeading>E-Commerce Solution</ServiceHeading>
                                        <ServiceSeparator />
                                        <ServiceText>
                                            Through eCommerce solutions, we help you get e-commerce services that help you to conduct business digitally. The range of eCommerce is broad, including traditional designs and creative websites, dropshipping stores.
                                        </ServiceText>
                                    </ServiceContent>
                                </Service>
                            </ServiceCol>
                            <ServiceCol md={4}>
                                <Service>
                                    <ServiceContent>
                                        <ServiceIcon>
                                            <img src={newseoimage} alt="seo experts" />
                                        </ServiceIcon>
                                        <ServiceHeading>Software Development</ServiceHeading>
                                        <ServiceSeparator />
                                        <ServiceText>
                                            We work on industry-specific technology, experienced to deliver highly flexible, scalable, and interoperable mobile, desktop, hybrid and web applications. With our software development services, you will surely empower your business.
                                        </ServiceText>
                                    </ServiceContent>
                                </Service>
                            </ServiceCol>
                        </Row>
                    </Container>
                </BottomContent>
            </Section>
        )
    }
}

export default props => (
    <StaticQuery
        query={graphql`
      query {
        background: file(relativePath: {eq: "background-poly.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              src
            }
          }
        }
        webexpertIcon: file(relativePath: {eq: "icons/web.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        mobileIcon: file(relativePath: {eq: "icons/mobile.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        seoIcon: file(relativePath: {eq: "icons/seo.png"}) {
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
            webexpertIcon,
            mobileIcon,
            seoIcon }) => <Home
                background={background}
                webexpertIcon={webexpertIcon}
                mobileIcon={mobileIcon}
                seoIcon={seoIcon}
                {...props} />}
    />
)
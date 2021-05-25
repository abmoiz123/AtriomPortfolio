import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import styled from 'styled-components'
import AnimatedHeading from 'components/animated-heading'
import Navbar from '../../components/navbar/Navbar'
import homeimg from './mock3.jpg'
// import LoopVideo from '../../sections/hero/assets/intro_video.mp4'
import newwebimage from '../../../static/WEBDEVELOPMENT.png'
import newmobimage from '../../../static/MOBDEVELOPMENT.png'

class AboutPage extends React.Component {

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
        //     background-size: cover;
        //     background-repeat: no-repeat;
        // `

        const CompanyImage = styled.div`
        width: 100%;
        display: flex;
        align-items: center;
        overflow: hidden;
        position: relative;
        background-color: #fff;
        background-image: linear-gradient(0deg, grey, #fff);
        img {
            // position: absolute;
            width: 100%;
            opacity: 0.7;
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

        const BottomContent = styled.div`
            position: absolute;
            width: 100%;
            bottom: -14%;
            z-index: 2;
            @media (min-width:1025px) and (max-width: 1400px) {    
                bottom: -35%;
            }
            @media (max-width:767px) {
                position: relative;
                bottom: 0;
                z-index: 0;
                // display: none;
            } 
            @media (min-width:768px) and (max-width: 1023px) {    
                bottom: -25%;
            }
        `

        const ServiceCol = styled(Col)`
            // overflow: scroll;
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
            height: 350px;
            min-height: 350px;
            // background-color: #111;
            background-color: #00468b;
            transition: .2s;
            display: flex;
            justify-content: center;
            flex-direction: column;
            box-shadow: 0px 20px 30px rgb(255,255,255,.2);
            &:hover {
                box-shadow: 0 28px 50px rgb(255,255,255,.5);
                // background-color: #013567;
                // opacity: 0.7;
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
        `
        const ServiceHeading = styled.h4`
            font-size: 30px;
            font-weight: 400;
            font-family: Teko;
            color: #f6b10a;
        `
        const ServiceSeparator = styled.div`
            height: 5px;
            width: 50px;
            background-color: #013567;
            margin-bottom: 10px;
        `

        const ServiceIcon = styled.div`
            text-Align: center;
            margin-bottom: 20px;
            img {
                max-height: 80px;
            }
        `

        const ServiceText = styled.p`
            text-transform: capitalize;
            font-size: 14px;
            font-weight: 300;
            color: #c5c5c5;
            @media (max-width:767px) {
                font-size: 11px !important;
            } 
        `

        return (
            <Section> 
                <Navbar />
                <div className="ourcaseheading"><AnimatedHeading text="About Us" /></div>
                <CompanyImage style={{ height: `${this.state.width > 500 ? this.state.height : 350}px` }}>
                    <img src={homeimg} style={{ height: `${this.state.width >= 300 && this.state.width < 1200 ? "100%" : "auto"}` }} alt="companyimg" />
                </CompanyImage>
                {/* <VideoContainer style={{ height: `${this.state.width > 500 ? this.state.height : 350}px` }}>
                    <video autoPlay="autoplay" loop="loop" muted style={{ height: `${this.state.width >= 1024 && this.state.width < 1200 ? "100%" : "auto"}` }}>
                        <source src={LoopVideo} type="video/mp4" />
                    </video>
                </VideoContainer> */}
                <BottomContent>
                    <Container>
                        <Row>
                            <ServiceCol md={6} style={{ borderRight: this.state.width > 500 ? "1px solid #444" : "none" }}>
                                <Service>
                                    <ServiceContent>
                                        <ServiceIcon>
                                            <img src={newwebimage} alt="web experts" />
                                        </ServiceIcon>
                                        <ServiceHeading>Misson Statement</ServiceHeading>
                                        <ServiceSeparator />
                                        <ServiceText>
                                            a creative IT firm, we at Atriom Technologies has the motives to deliver innovative solutions that would allow you to achieve your goals and even surpass them, as well as will help you to gain visibility for your business. we at atriom understand the customer's point of view and treat those in a friendly manner while providing an environment that will ensure we leave a great impression.
                                            </ServiceText>
                                    </ServiceContent>
                                </Service>
                            </ServiceCol>
                            <ServiceCol md={6} style={{ borderRight: this.state.width > 500 ? "1px solid #444" : "none" }}>
                                <Service>
                                    <ServiceContent>
                                        <ServiceIcon>
                                            <img src={newmobimage} alt="mobile experts" />
                                        </ServiceIcon>
                                        <ServiceHeading>Company Development</ServiceHeading>
                                        <ServiceSeparator />
                                        <ServiceText>
                                            atriom technologies have been in existance for a while, with the primary goal being provision of consultancy and steady development of your business, be in anything we strive to give the best solutions to our customers. 
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
export default AboutPage;
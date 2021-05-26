import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import styled from 'styled-components'
// import AnimatedHeading from 'components/animated-heading'
import RevealContent from 'components/reveal-content'
import Counter from 'components/counter'
import AnimationContainer from 'components/animation-container'
import Particles from 'react-particles-js';
class AboutOne extends React.Component {

  shouldComponentUpdate() {
    return false
  }

  render() {
    const Section = styled.section`
            position: relative;
            overflow: hidden; 
            background-color: #013567;
            .particles {
                position: absolute;
                width: 100%;
                height: 100%;
            }

        `

    const AboutContainer = styled(Container)`
            padding: 350px 0px 100px 0px;
            @media (max-width:992px) {
              padding: 200px 0px 100px 0px;
            }
            @media (max-width:767px) {
                padding: 100px 10px 100px 10px;
            }
            @media (max-width:576px) {
              padding: 70px 10px 70px 10px;
            }
            @media (max-width:400px) {
              padding: 50px 10px 50px 10px;
            }
        `
    const Heading = styled.h1`
            font-size: 100px;
            line-height: 90px;
            font-family: Teko;
            color: #fff;
            text-transform: uppercase;
            @media (min-width:768px) and (max-width:1399px) {
                font-size: 70px;
                line-height: 70px;
            }
            @media (max-width:992px) {
                text-align: center;
            }
            @media (max-width:767px) {
                font-size: 30px;
                line-height: 30px;
                text-align: center;
            }
            @media (max-width:576px) {
                text-align: center;
            }
        `
    const Color = styled.span`
            color: #f6b10a;
            font-size: 120px;
            line-height: 100px;
            font-family: Teko;
            text-transform: uppercase;
            letter-spacing: 2px;
            @media (min-width:768px) and (max-width:1399px) {
                font-size: 80px;
                line-height: 80px;
            }
            @media (max-width:767px) {
                font-size: 40px;
                line-height: 40px;
            }
        `
    const CounterComponent = styled.div`
            margin: 30px 0;
            .value {
                font-size: 120px;
                font-family: Teko;
                color: #fff;
                line-height: 90px;
            }
            .text {
                font-size: 20px;
                color: #fff;
            }
            .symbol {
                // color: #04e5e5;
                color: rgb(246, 177, 10);
                position: absolute;
                font-size: 39px;
                top: -28px;
            }
            @media (max-width:992px) {
                text-align:center;
            }
            @media (max-width:767px) {
                margin: 10px 0;
                text-align:center;
                .value {
                    font-size: 60px;
                    font-family: Teko;
                    color: #fff;
                    line-height: 90px;
                }
                .text {
                    font-size: 17px;
                    color: #fff;
                }
                .symbol {
                    // color: #04e5e5;
                    color: rgb(246, 177, 10);
                    position: absolute;
                    font-size: 39px;
                    top: -10px;
                }
            }

        `
    const LeftCol = styled(Col)`
            display: flex;
            align-items: center;
        `
    return (
      <Section id="about">
        <Particles
          className="particles"
          params={{
            "particles": {
              "number": {
                "value": 100,
                "density": {
                  "enable": true,
                  "value_area": 2000
                }
              },
              "color": {
                // "value": ["#03afaf", "#04e5e5"]
                "value": ["#f6b10a", "#f6b10a"]
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 0,
                  "color": "#fff"
                }
              },
              "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                  "enable": true,
                  "speed": 0.5,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 8.017060304327615,
                "random": true,
                "anim": {
                  "enable": true,
                  "speed": 12.181158184520175,
                  "size_min": 0.1,
                  "sync": true
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 150,
                "color": this.context.theme === "dark" ? "#fff" : "#555",
                // "color": this.context.theme === "dark" ? "#fff" : "#fff",
                "opacity": 0.5,
                "width": 1
              },
              "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "bounce",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": false,
                  "mode": "repulse"
                },
                "onclick": {
                  "enable": false,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 400,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true
          }} />
        <AboutContainer>
          <Row>
            <LeftCol lg={6} md={12} sm={12}>
              <RevealContent>
                <Heading>
                  Renowned <Color>Software</Color> Company From <Color>London</Color>
                </Heading>
              </RevealContent>
            </LeftCol>
            {/* <Col lg={6} md={12} sm={12}>
              <AnimatedHeading text="Renowned Software Company From London" />
            </Col> */}
            <Col lg={6} md={12} sm={12} >
              <Row>
                <Col md={6} sm={6} xs={6}>
                  <AnimationContainer animation="fadeInLeft" delay={1000}>
                    <CounterComponent>
                      <Counter value={5} duration={5} delay={1000} symbol="+" text="5 Years of Experience" />
                    </CounterComponent>
                  </AnimationContainer>
                </Col>
                <Col md={6} sm={6} xs={6}>
                  <AnimationContainer animation="fadeInRight" delay={1000}>
                    <CounterComponent>
                      <Counter value={300} duration={5} delay={1000} symbol="+" text="Clients Worked With" />
                    </CounterComponent>
                  </AnimationContainer>
                </Col>
                <Col md={6} sm={6} xs={6}>
                  <AnimationContainer animation="fadeInLeft" delay={1000}>
                    <CounterComponent>
                      <Counter value={20} duration={5} delay={1000} text="Team Members" />
                    </CounterComponent>
                  </AnimationContainer>
                </Col>
                <Col md={6} sm={6} xs={6}>
                  <AnimationContainer animation="fadeInRight" delay={1000}>
                    <CounterComponent>
                      <Counter value={10} duration={5} delay={1000} symbol="+" text="Honourable Awards" />
                    </CounterComponent>
                  </AnimationContainer>
                </Col>
              </Row>
            </Col>
          </Row>
        </AboutContainer>
      </Section>
    )
  }

}

export default AboutOne
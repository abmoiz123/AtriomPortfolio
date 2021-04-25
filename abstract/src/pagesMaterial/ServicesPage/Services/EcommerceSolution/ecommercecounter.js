import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import styled from 'styled-components'
import RevealContent from 'components/reveal-content'
import Counter from 'components/counter'
import AnimationContainer from 'components/animation-container'

class Ecommercecounter extends React.Component {

  shouldComponentUpdate() {
    return false
  }

  render() {
    const Section = styled.section`
            position: relative;
            overflow: hidden; 
            background-color: #f6b10a;
        `

    const AboutContainer = styled(Container)`
            padding: 50px 0px;
            @media (min-width:600px) and (max-width:768px) {
                padding: 50px 0px;
            }
            @media (min-width:769px) and (max-width:1024px) {
              padding: 50px 0px;
            }
            @media (min-width:1025px) and (max-width:1399px) {
              padding: 50px 0px;
            }
            @media (max-width:767px) {
                padding: 30px 20px;
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
            @media (max-width:767px) {
                font-size: 30px;
                line-height: 30px;
                text-align: center;
            }
        `
    const Color = styled.span` 
            color: #00468b;
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
                color:  #00468b;
                line-height: 90px;
            }
            .text {
                font-size: 20px;
                color: #fff;
            }
            .symbol {
                color: #fff;
                position: absolute;
                font-size: 39px;
                top: -28px;
            }
            @media (max-width:767px) {
                margin: 10px 0;
                text-align:center;
                .value {
                    font-size: 60px;
                    font-family: Teko;
                    line-height: 90px;
                }
                .text {
                    font-size: 20px;
                }
                .symbol {
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
        <AboutContainer>
          <Row>
            <LeftCol md={6}>
              <RevealContent>
                <Heading>
                  Renowned <Color>Software</Color> Company From <Color>London</Color>
                </Heading>
              </RevealContent>
            </LeftCol>
            <Col md={6}>
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

export default Ecommercecounter;
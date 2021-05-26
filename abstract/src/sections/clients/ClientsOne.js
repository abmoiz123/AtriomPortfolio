import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { StaticQuery, graphql } from 'gatsby'
import AnimatedHeading from 'components/animated-heading'
import styled from 'styled-components'
import AnimationContainer from 'components/animation-container'
import Slider from 'react-slick'
import backgroundImage from '../../../static/polygonz.png'

class ClientsOne extends React.Component {


  shouldComponentUpdate() {
    return false
  }


  render() {
    const Section = styled.section`
            position: relative;
            overflow: hidden;
            background-image: url(${backgroundImage});
            background-size: cover;
            // padding: 100px 0; 
            .heading {
                width: 100%;
            }
          }
        `
    const ContainerStyle = styled(Container)`
            padding: 100px 0;
            @media (max-width:767px) {
              padding: 50px 0;
            }
        `
    const Mob = styled(Col)`
          display: none;
          @media (max-width:767px) {
            padding: 10px 30px;
            display: block;
          }
      `

    const Web = styled(Col)`
          display: block;
          @media (max-width:767px) {
            display: none;
          }
      `
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };


    return (
      <Section id="clients">
        <ContainerStyle>
          <Row>
            <Col lg={6} md={12}>
              <AnimatedHeading text="Clients We Worked With" />
            </Col>
            <Col lg={6} md={12}>
              <Mob>
                <Slider {...settings}>
                  {this.clients()}
                </Slider>
              </Mob>
              <Web>
                <Row>
                  {this.clients()}
                </Row>
              </Web>
            </Col>
          </Row>
        </ContainerStyle>
      </Section>
    )
  }

  clients() {
    return this.props.clients.map((value, index) => {
      const Client = styled.img`
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 100px;
            height: 100px;
        `

      const ClientCol = styled(Col)`
            text-align: center;
            padding: 20px 0;
            border-color: #efefef;
            border-left: none;
            border-top: none;
            transition: .1s;
            &:hover {
              transform: scale(1.1);
              background-color: #f6b10a;
              z-index: 5;
              border-radius: 10px;
            }
            @media (max-width: 767px) {
              // text-align: center;
              margin: 10px 0px;
              padding: 5px;
              transition: .1s;
              &:hover {
                // transform: scale(1.1);
                background-color: #f6b10a;
                z-index: 1;
                border-radius: 10px;
              }
            }
        `
      return (
        <ClientCol md={3} key={index} style={{ borderRight: (index + 1) % 4 === 0 ? "none" : "1px solid", borderBottom: index < 8 ? "1px solid" : "none" }}>
          <AnimationContainer animation="fadeIn slower" delay={index * 200}>
            <Client
              src={value.node.childImageSharp.fluid.src}
              alt="Client"
            />
          </AnimationContainer>
        </ClientCol>
      )
    })
  }

}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        clients: allFile(filter: {extension: {regex: "/(png)/"}, relativeDirectory: {eq: "clients"}}) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 500) {
                  src
                }
              }
            }
          }
        }
      }      
      `}
    render={({ clients }) => <ClientsOne clients={clients.edges} {...props} />}
  />
)
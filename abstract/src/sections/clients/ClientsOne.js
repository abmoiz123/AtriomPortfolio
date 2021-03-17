import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import AnimationContainer from 'components/animation-container'
import Slider from 'react-slick'
import backgroundImage from '../../../static/polygonz.png'
import Particles from 'react-particles-js';

class ClientsOne extends React.Component {


  shouldComponentUpdate() {
    return false
  }


  render() {
    const Section = styled.section`
            position: relative;
            overflow: hidden; 
            // background-color: #000;
            background-color: #013567;
            .particles {
                position: absolute;
                width: 100%;
                height: 100%;
            }
            // background-image: url(${backgroundImage});
            // background-size: cover;
            // padding: 100px 0; 
            .heading {
                width: 100%;
            }
            @media (max-width:767px) {   
              .particles {
                display: none;
              }
            }
          }
        `


    const Heading = styled.h1`
            font-size: 110px;
            line-height: 100px;
            font-family: Teko;
            // color: #fff;
            color: #f6b10a;
            text-transform: uppercase;
            text-align: center;
            width: 100%;
            @media (min-width:768px) and (max-width:1399px) {
                font-size: 70px;
                line-height: 70px;
            }
            @media (max-width:767px) {
                font-size: 40px;
                line-height: 40px;
                text-align: center;
            }
        `
    const Color = styled.span`
          // color:  #04e5e5;
          color:  #fff;
          font-size: 120px;
          line-height: 80px;
          font-family: Teko;
          text-transform: uppercase;
          letter-spacing: 2px;
          @media (min-width:768px) and (max-width:1399px) {
              font-size: 70px;
              line-height: 70px;
          }
          @media (max-width:767px) {
              font-size: 40px;
              line-height: 40px;
          }
      `

      const ContainerStyle = styled(Container)`
            padding: 100px 0;
            @media (max-width:767px) {
              padding: 50px 0;
            }
        `

    const LeftCol = styled(Col)`
          display: flex;
          align-items: center;
          // @media (max-width:767px) {
          //   margin: 30px;
          // }
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
      cssEase: "linear"
    };


    return (
      <Section id="clients">
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
        <ContainerStyle>
          <Row>
            <LeftCol md={6}>
              <Heading>
                <Color>Clients</Color> we worked with
                        </Heading>
            </LeftCol>
            <Col md={6}>
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
            height: 100px;
            width: 100px
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
import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { StaticQuery, graphql } from 'gatsby'
import RevealContent from 'components/reveal-content'
// import AnimatedHeading from 'components/animated-heading'
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
    const Heading = styled.h1`
              font-size: 100px;
              line-height: 90px;
              font-family: Teko;
              color: #fff;
              text-transform: uppercase;
              @media (min-width:991px) and (max-width:1399px) {
                  font-size: 90px;
                  line-height: 80px;
              }
              @media (min-width:768px) and (max-width:992px) {
                  font-size: 70px;
                  line-height: 70px;
                  text-align: center;
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
              @media (min-width:991px) and (max-width:1399px) {
                  font-size: 110px;
                  line-height: 90px;
              }
              @media (min-width:768px) and (max-width:992px) {
                  font-size: 80px;
                  line-height: 80px;
              }
              @media (max-width:767px) {
                  font-size: 40px;
                  line-height: 40px;
              }
          `
    const LeftCol = styled(Col)`
              display: flex;
              align-items: center;
              @media (max-width:992px) {
                justify-content: center;
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
      responsive: [
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
    };


    return (
      <Section id="clients">
        <ContainerStyle>
          <Row>
            <LeftCol lg={6} md={12} sm={12}>
              <RevealContent>
                <Heading>
                  Clients <Color> We </Color> Worked <Color> With </Color>
                </Heading>
              </RevealContent>
            </LeftCol>
            {/* <Col lg={6} md={12}>
              <AnimatedHeading text="Clients We Worked With" />
            </Col> */}
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
            max-width: 100px;
            height: 100px;
            transform:scale(1.2);
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
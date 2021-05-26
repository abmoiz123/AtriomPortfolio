import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Col, Container } from 'react-bootstrap'
import styled from 'styled-components'
import TeamItem from 'sections/team/parts/TeamItem.js'
import AnimationContainer from 'components/animation-container'
import AnimatedHeading from 'components/animated-heading'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// import backgroundImage from '../../../static/servicebackground2.jpg'
import backgroundImage from '../../../static/polygonz.png'
class TeamOne extends React.Component {

  shouldComponentUpdate() {
    return false
  }

  render() {

    const Section = styled.section`
          background-color: #013567;
          // background-image: url(${backgroundImage});
          // background-size: cover;
          padding: 100px 0;
          position: relative;
          @media (max-width:767px) {
              padding: 50px 0px;
          } 

        `

    const Overlay = styled.div`
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          // background-color: rgba(0,70,140,.3);
        `
    const TeamContainer = styled.div`
            @media (max-width:767px) {
              padding: 0px;
            }
            .slick-dots {
              li button:before,.slick-dots li.slick-active button:before {
                // color: #04e5e5;
                color: #f6b10a;
              }
            }
        `

    const settings = {
      dots: true,
      swipe: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      arrows: false,
      autoplay: true,
      // autoplaySpeed: 10000,
      autoplaySpeed: 5000,
      loop: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 576,
          settings: {
            centerMode: true,
            centerPadding: "110px",
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    }

    return (
      <Section id="team">
        <Overlay />
        <Col md={12}>
          <Container>
            <AnimatedHeading text="Team members" />
          </Container>
          <TeamContainer>
            <Container>
              <AnimationContainer animation="fadeIn">
                <Slider {...settings}>
                  {this.team()}
                </Slider>
              </AnimationContainer>
            </Container>
          </TeamContainer>
        </Col>
      </Section>
    )
  }

  team() {
    const { items } = this.props

    return items.map((value, index) => {
      return (
        <TeamItem
          key={index}
          index={index}
          image={value.content.frontmatter.image.childImageSharp.fluid.src}
          name={value.content.frontmatter.name}
          profession={value.content.frontmatter.profession}
          facebook={value.content.frontmatter.facebook}
          twitter={value.content.frontmatter.twitter}
          linkedin={value.content.frontmatter.linkedin}
          github={value.content.frontmatter.github}
          type="slider"
        />
      )
    })
  }
}

export default props => (
  <StaticQuery
    query={graphql`
          query {
            background: file(relativePath: {eq: "bg3.jpg"}) {
              childImageSharp {
                fluid(maxWidth: 4000, quality: 100) {
                  src
                }
              }
            }
            items: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(team)/"}}, sort: {fields: [frontmatter___id], order: ASC}, limit: 8) {
              edges {
                content: node {
                  frontmatter {
                    id
                    name
                    profession
                    facebook
                    twitter
                    linkedin
                    github
                    image {
                      childImageSharp {
                        fluid(maxWidth: 800) {
                          src
                        }
                      }
                    }
                  }
                }
              }
            }
          }                    
          `}
    render={({ items, background }) => <TeamOne items={items.edges} background={background} {...props} />}
  />
)
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Row, Col, Container } from 'react-bootstrap'
import styled from 'styled-components'
import PortfolioItem from 'sections/portfolio/parts/PortfolioItem.js'
import AnimatedHeading from 'components/animated-heading'
import Slider from 'react-slick'


class PortfolioOne extends React.Component {

  render() {

    const Section = styled.section`
          // background-color: #050505;
          background-color: #013567;
          padding: 100px 0;
          @media (max-width:992px) {
            padding: 50px 0;
          }
          @media (max-width:767px) {
            padding: 30px 0;
          }
        `
    const PortfolioContainer = styled.div`
            padding: 0 50px;
            @media (max-width:767px) {
              padding: 0px;
            }
        `

    const Mobile = styled.div`
        display: none;
        @media (max-width:767px) {
          display: block;
        }
    `

    const Web = styled.div`
        display: block;
        @media (max-width:767px) {
          display: none;
        }
    `

    const settings = {
      dots: true,
      swipe: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
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
            slidesToShow: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            className: "center",
            centerMode: true,
            centerPadding: "130px",
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            className: "center",
            centerMode: true,
            centerPadding: "50px",
            slidesToShow: 1,
          }
        }
      ]
    }

    return (
      <Section id="portfolio">
        <Col md={12}>
          <Container>
            <AnimatedHeading text="Recent Projects" />
          </Container>
          <PortfolioContainer>
            <Mobile>
              <Slider {...settings}>
                {this.portfolio()}
              </Slider>
            </Mobile>
            <Web>
              <Row>
                {this.portfolio()}
              </Row>
            </Web>
          </PortfolioContainer>
        </Col>
      </Section>
    )
  }

  portfolio() {
    const { items } = this.props

    return items.map((value, index) => {
      return (
        <Col md={4} key={index}>
          <PortfolioItem
            index={index}
            image={value.content.frontmatter.image.childImageSharp.fluid.src}
            text={value.content.frontmatter.title}
            category={value.content.frontmatter.category}
            link={value.content.frontmatter.link}
            type="col"
          />
        </Col>
      )
    })
  }
}

export default props => (
  <StaticQuery
    query={graphql`
          query {
              items: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(portfolio)/"}}, sort: {fields: [frontmatter___id], order: ASC}, limit: 6) {
                edges {
                  content: node {
                    frontmatter {
                      id
                      title
                      category
                      link
                      image {
                        childImageSharp {
                          fluid(maxWidth: 1000) {
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
    render={({ items }) => <PortfolioOne items={items.edges} {...props} />}
  />
)
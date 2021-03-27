import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import styled from 'styled-components'
import PortfolioItem from '../../sections/portfolio/parts/PortfolioItem.js'
import AnimatedHeading from 'components/animated-heading'
import Slider from 'react-slick'
import portimage from '../../../content/portfolio/item-1/Portfolio1.png'

class PortfolioPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            portfolio: [
                {
                    id: 1,
                    image: portimage,
                    title: "Perfect Sleeps",
                    category: "Magento",
                    link: "http://perfectsleeps.co.uk/",
                },
                {
                    id: 2,
                    image: portimage,
                    title: "Perfect Sleeps",
                    category: "Magento",
                    link: "http://perfectsleeps.co.uk/",
                },
                {
                    id: 3,
                    image: portimage,
                    title: "Perfect Sleeps",
                    category: "Magento",
                    link: "http://perfectsleeps.co.uk/",
                },
                {
                    id: 4,
                    image: portimage,
                    title: "Perfect Sleeps",
                    category: "Magento",
                    link: "http://perfectsleeps.co.uk/",
                },
                {
                    id: 5,
                    image: portimage,
                    title: "Perfect Sleeps",
                    category: "Magento",
                    link: "http://perfectsleeps.co.uk/",
                },
                {
                    id: 6,
                    image: portimage,
                    title: "Perfect Sleeps",
                    category: "Magento",
                    link: "http://perfectsleeps.co.uk/",
                },
            ]
        }
    }

    render() {

        const Section = styled.section`
          // background-color: #050505;
          background-color: #013567;
          padding: 100px 0;
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
                        slidesToShow: 3,
                        initialSlide: 3
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
                        <AnimatedHeading text="Our Portfolio" />
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
        let items = this.state.portfolio
        return items.map((value, index) => {
            return (
                <Col md={4} key={index}>
                    <PortfolioItem
                        index={index}
                        image={value.image}
                        text={value.title}
                        category={value.category}
                        link={value.link}
                        type="col"
                    />
                </Col>
            )
        })
    }
}
export default PortfolioPage;
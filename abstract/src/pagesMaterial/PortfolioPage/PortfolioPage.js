import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import styled from 'styled-components'
import AnimatedHeading from 'components/animated-heading'
import Slider from 'react-slick'
import portimage from './PortfolioImages'

class PortfolioPage extends React.Component {

    constructor() {
        super()
        this.state = {
            portfolio: [
                {
                    id: 1,
                    image: portimage.project1,
                    title: "A2Z Utility",
                    category: "WordPress",
                    link: "https://a2zutility.com/",
                },
                {
                    id: 2,
                    image: portimage.project2,
                    title: "AK Cell",
                    category: "Woo Commerce",
                    link: "http://akcelltrader.com/",
                },
                {
                    id: 3,
                    image: portimage.project3,
                    title: "Arina Decor",
                    category: "Magento",
                    link: "/Portfolio",
                },
                {
                    id: 4,
                    image: portimage.project4,
                    title: "The Beauty Stocks",
                    category: "SHOPIFY",
                    link: "https://thebeautystocks.com/",
                },
                {
                    id: 5,
                    image: portimage.project5,
                    title: "Be Buyer",
                    category: "SHOPIFY",
                    link: "https://bebuyer.co.uk/",
                },
                {
                    id: 6,
                    image: portimage.project6,
                    title: "Big Mape Apparel",
                    category: "Woo Commerce",
                    link: "https://bigmapeapparel.com/",
                },
                {
                    id: 7,
                    image: portimage.project7,
                    title: "Big Map Clothing",
                    category: "Woo Commerce",
                    link: "https://bigmapclothing.com.pk",
                },
                {
                    id: 8,
                    image: portimage.project8,
                    title: "big Map Steel",
                    category: "WordPress",
                    link: "https://bigmapsteel.com.pk/",
                },
                {
                    id: 9,
                    image: portimage.project9,
                    title: "ASJ",
                    category: "Fintech",
                    link: "http://asj-accountants.co.uk/",
                },
                // {
                //     id: 10,
                //     image: portimage.project10,
                //     title: "Perfect Sleeps",
                //     category: "Magento",
                //     link: "http://perfectsleeps.co.uk/",
                // },
                {
                    id: 11,
                    image: portimage.project11,
                    title: "DishTv",
                    category: "WordPress",
                    link: "/Portfolio",
                },
                {
                    id: 12,
                    image: portimage.project12,
                    title: "District Properties",
                    category: "WordPress",
                    link: "http://www.districtproperties.co.uk/",
                },
                // {
                //     id: 13,
                //     image: portimage.project13,
                //     title: "Perfect Sleeps",
                //     category: "Magento",
                //     link: "http://perfectsleeps.co.uk/",
                // },
                {
                    id: 14,
                    image: portimage.project14,
                    title: "Pyramid Granite",
                    category: "WordPress",
                    link: "https://pyramidgranite.co.uk/",
                },
                {
                    id: 15,
                    image: portimage.project15,
                    title: "ESales Forum",
                    category: "Woo Commerce",
                    link: "https://esalesforum.com/",
                },
                {
                    id: 16,
                    image: portimage.project16,
                    title: "Ewholesalers",
                    category: "Woo Commerce",
                    link: "https://ewholesalers.co.uk/",
                },
                {
                    id: 17,
                    image: portimage.project17,
                    title: "Fbl Global",
                    category: "Woo Commerce",
                    link: "https://fbl-global.com/",
                },
                {
                    id: 18,
                    image: portimage.project18,
                    title: "GadgetryTown",
                    category: "Woo Commerce",
                    link: "https://gadgetrytown.com/",
                },
                // {
                //     id: 19,
                //     image: portimage.project19,
                //     title: "Perfect Sleeps",
                //     category: "Magento",
                //     link: "http://perfectsleeps.co.uk/",
                // },
                {
                    id: 20,
                    image: portimage.project20,
                    title: "Golden Vape",
                    category: "SHOPIFY",
                    link: "https://goldenvape.co.uk/",
                },
                // {
                //     id: 21,
                //     image: portimage.project21,
                //     title: "Perfect Sleeps",
                //     category: "Magento",
                //     link: "http://perfectsleeps.co.uk/",
                // },
                // {
                //     id: 22,
                //     image: portimage.project22,
                //     title: "Perfect Sleeps",
                //     category: "Magento",
                //     link: "http://perfectsleeps.co.uk/",
                // },
                {
                    id: 23,
                    image: portimage.project23,
                    title: "MTC Japan",
                    category: "WordPress",
                    link: "https://mtcjapan.net/",
                },
                {
                    id: 24,
                    image: portimage.project24,
                    title: "Mush Editions",
                    category: "SHOPIFY",
                    link: "https://www.musheditions.com/",
                },
                // {
                //     id: 25,
                //     image: portimage.project25,
                //     title: "Perfect Sleeps",
                //     category: "Magento",
                //     link: "http://perfectsleeps.co.uk/",
                // },
                {
                    id: 26,
                    image: portimage.project26,
                    title: "Optus Store",
                    category: "Woo Commerce",
                    link: "https://optusstore.com/",
                },
                {
                    id: 27,
                    image: portimage.project27,
                    title: "Perfect Sleeps",
                    category: "Magento",
                    link: "http://perfectsleeps.co.uk/",
                },
                {
                    id: 28,
                    image: portimage.project28,
                    title: "Petsy Bugs",
                    category: "Woo Commerce",
                    link: "https://petsybugs.com/",
                },
                {
                    id: 29,
                    image: portimage.project29,
                    title: "Petsy Mart",
                    category: "SHOPIFY",
                    link: "https://petsymart.com/",
                },
                {
                    id: 30,
                    image: portimage.project30,
                    title: "Rolling Creek",
                    category: "WordPress",
                    link: "https://rollingcreekcarwashandlubecenter.com/",
                },
                {
                    id: 31,
                    image: portimage.project31,
                    title: "Shah Catering",
                    category: "WordPress",
                    link: "http://www.shahcatering.co.uk/",
                },
                {
                    id: 32,
                    image: portimage.project32,
                    title: "SKF",
                    category: "WordPress",
                    link: "http://sparkhillfreight.co.uk/",
                },
                {
                    id: 33,
                    image: portimage.project33,
                    title: "SR Dealz",
                    category: "Woo Commerce",
                    link: "https://srdealz.com/",
                },
                {
                    id: 34,
                    image: portimage.project34,
                    title: "The Factory Stock",
                    category: "SHOPIFY",
                    link: "https://thefactorystock.com/",
                },
                {
                    id: 35,
                    image: portimage.project35,
                    title: "The Brand Station",
                    category: "Woo Commerce",
                    link: "https://thebrandstation.pk/",
                },
                {
                    id: 36,
                    image: portimage.project36,
                    title: "Tolwat Ford",
                    category: "WordPress",
                    link: "https://www.tolwatford.com/",
                },
                {
                    id: 37,
                    image: portimage.project37,
                    title: "Tourist Planet",
                    category: "WordPress",
                    link: "https://www.apricottours.pk/",
                },
                {
                    id: 38,
                    image: portimage.project38,
                    title: "Aberdeen Architects",
                    category: "WordPress",
                    link: "/Portfolio",
                },
                {
                    id: 39,
                    image: portimage.project39,
                    title: "Vape Source",
                    category: "SHOPIFY",
                    link: "https://vapesource.uk/",
                },
                // {
                //     id: 40,
                //     image: portimage.project40,
                //     title: "Perfect Sleeps",
                //     category: "Magento",
                //     link: "http://perfectsleeps.co.uk/",
                // },
                {
                    id: 41,
                    image: portimage.project41,
                    title: "Voxly Decor",
                    category: "SHOPIFY",
                    link: "https://voxlydecor.co.uk/",
                },
                {
                    id: 42,
                    image: portimage.project42,
                    title: "Waha Industries",
                    category: "Magento",
                    link: "https://wahaind.co.uk/",
                },
                {
                    id: 43,
                    image: portimage.project43,
                    title: "World Travel4u",
                    category: "WordPress",
                    link: "https://worldtravel4u.net/",
                },
                {
                    id: 44,
                    image: portimage.project44,
                    title: "Xport Buy",
                    category: "SHOPIFY",
                    link: "https://xportbuy.com/",
                },
                {
                    id: 45,
                    image: portimage.project45,
                    title: "ZAC Traderltd",
                    category: "Woo Commerce",
                    link: "https://zactraderltd.com/",
                },
                {
                    id: 46,
                    image: portimage.project46,
                    title: "Zaiqa Delivery",
                    category: "Woo Commerce",
                    link: "https://zaiqadelivery.com/",
                },
                {
                    id: 47,
                    image: portimage.project47,
                    title: "Zubair Coals",
                    category: "WordPress",
                    link: "https://www.zubaircoals.com/",
                },
            ],
        }
    }
    render() {

        const Section = styled.section`
          // background-color: #050505;
          background-color: #013567;
          padding: 50px 0;
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
        const ProjectImg = styled.img` 
            width: 100%;
            height: 600px;
            transition: .5s;
            height: 700px;
            @media (max-width:600px) {
                height: 400px;
                width: 100%;
                // object-fit: cover;
            }
        `
        const Text = styled.div` 
        transform: translateY(70px);
        transition: .5s;
        width: 100%;
        text-align: center;
    `
        const Heading = styled.h4`
        color: #fff;
        font-weight: 600;
        font-size: 25px;
        @media (max-width:600px) {
            color: #013567;
            font-weight: 500;
            font-size: 20px;
        }
    `

        const SubHeading = styled.h5`
        color: #fff;
        font-size: 20px;
        font-weight: 400;
        text-transform: uppercase;
        @media (max-width:600px) {
            color: #013567;
            font-size: 15px;
            font-weight: 400;
        }
    `

        const MobileContent = styled.div`
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        // opacity: 0 !important;
        transition: .5s;
        display: flex;
        align-items: flex-end;
        visibility: visible;
        ${Text} {
            transform: translateY(-10px);
        }
        @media (min-width:1025px) {
            display: none !important;
        }
    `

        const DesktopContent = styled.div`
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            // opacity: 0 !important;
            transition: .5s;
            display: flex;
            align-items: flex-end;
            visibility: visible;
            &:hover {
                background-image: linear-gradient(to top, rgba(0,70,140,1), rgba(255, 255, 255, 0));
            }
        `
        const Item = styled.div`
        position: relative;
        min-height: 95%;
        max-height: 95%;
        @media (max-width:1500px) {
            min-height: 95%;
            max-height: 95%;
        }
        @media (max-width:1024px) {
            min-height: 95%;
            max-height: 95%;
        }
        overflow: hidden;
        max-width: 95%;
        border-radius: 10px;
        &:hover {
            ${Text} {
                transform: translateY(-10px);
            }
            img {
                transform: scale(1.1);
            }
            ${MobileContent} {
                opacity: 1 !important;
            }
            ${DesktopContent} {
                opacity: 1 !important;
            }
        }
    `

        const settings = {
            // dots: true,
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
        let items = this.state.portfolio
        return (
            <Section id="portfolio">
                <Col md={12}>
                    <Container>
                        <AnimatedHeading text="Our Portfolio" />
                    </Container>
                    <PortfolioContainer>
                        <Mobile>
                            <Slider {...settings}>
                                {items.map((v, i) => {
                                    return (
                                        <Col md={4} key={i}>
                                            <a href={v.link} target="_blank" rel="noopener noreferrer" id={v.id}>
                                                <Item>
                                                    <ProjectImg src={v.image} alt={v.title} />
                                                    <MobileContent>
                                                        <Text>
                                                            <Heading>{v.title}</Heading>
                                                            <SubHeading>{v.category}</SubHeading>
                                                        </Text>
                                                    </MobileContent>
                                                </Item>
                                            </a>
                                        </Col>
                                    )
                                })}
                            </Slider>
                        </Mobile>
                        <Web>
                            <Row>
                                {items.map((v, i) => {
                                    return (
                                        <Col md={4} key={i}>
                                            <a href={v.link} target="_blank" rel="noopener noreferrer" id={v.id}>
                                                <Item>
                                                    <ProjectImg src={v.image} alt={v.title} />
                                                    <DesktopContent>
                                                        <Text>
                                                            <Heading>{v.title}</Heading>
                                                            <SubHeading>{v.category}</SubHeading>
                                                        </Text>
                                                    </DesktopContent>
                                                </Item>
                                            </a>
                                        </Col>
                                    )
                                })}
                            </Row>
                        </Web>
                    </PortfolioContainer>
                </Col>
            </Section>
        )
    }
}
export default PortfolioPage;
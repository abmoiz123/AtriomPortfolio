import React from 'react'
import { Col, Container } from 'react-bootstrap'
import styled from 'styled-components'
import AnimatedHeading from 'components/animated-heading'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import backgroundImage from '../../../static/polygonz.png'
import Blog1 from '../../../static/blog1.jpg'
import './Blog.css'
class Blog extends React.Component {

    shouldComponentUpdate() {
        return false
    }

    render() {

        const Section = styled.section`
        //   background-color: #013567;
          background-image: url(${backgroundImage});
          background-size: cover;
          padding: 100px 0;
          position: relative;
          @media (max-width:992px) {
            padding: 50px 0px;
            }
          @media (max-width:767px) {
              padding: 30px 0px;
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
            text-Align: center;
            margin: 0px 20px;
            @media (max-width:767px) {
                margin: 0px 15px;
            }
        `
        const settings = {
            centerMode: true,
            centerPadding: "65px",
            dots: true,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            speed: 4000,
            autoplaySpeed: 4000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        centerPadding: "100px",
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        centerPadding: "110px",
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        centerPadding: "100px",
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]
        };

        return (
            <Section id="Blog">
                <Overlay />
                <Col md={12}>
                    <Container>
                        <AnimatedHeading text="Our Case Studies" />
                    </Container>
                    <TeamContainer>
                        <Slider {...settings}>
                            <div className="Blog_div">
                                <a className="light_box" href="/">
                                    <img className="blog_img" src={Blog1} alt={"Blog"} />
                                    <div className="blog_heading">Marketing<span className="blog_title">Online Media Management</span></div>
                                </a>
                            </div>
                            <div className="Blog_div">
                                <a className="light_box" href="/">
                                    <img className="blog_img" src={Blog1} alt={"Blog"} />
                                    <div className="blog_heading">Marketing<span className="blog_title">Online Media Management</span></div>
                                </a>
                            </div>
                            <div className="Blog_div">
                                <a className="light_box" href="/">
                                    <img className="blog_img" src={Blog1} alt={"Blog"} />
                                    <div className="blog_heading">Marketing<span className="blog_title">Online Media Management</span></div>
                                </a>
                            </div>
                            <div className="Blog_div">
                                <a className="light_box" href="/">
                                    <img className="blog_img" src={Blog1} alt={"Blog"} />
                                    <div className="blog_heading">Marketing<span className="blog_title">Online Media Management</span></div>
                                </a>
                            </div>
                            <div className="Blog_div">
                                <a className="light_box" href="/">
                                    <img className="blog_img" src={Blog1} alt={"Blog"} />
                                    <div className="blog_heading">Marketing<span className="blog_title">Online Media Management</span></div>
                                </a>
                            </div>
                            <div className="Blog_div">
                                <a className="light_box" href="/">
                                    <img className="blog_img" src={Blog1} alt={"Blog"} />
                                    <div className="blog_heading">Marketing<span className="blog_title">Online Media Management</span></div>
                                </a>
                            </div>
                        </Slider>
                    </TeamContainer>
                </Col>
            </Section>
        )
    }
}
export default Blog;
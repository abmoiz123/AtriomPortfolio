import React from 'react'
import {
    Container,
    Col,
    Navbar
} from 'react-bootstrap'
import styled from 'styled-components'
import AnimatedHeading from 'components/animated-heading'
import eCommerce from '../../../../static/ecommerce.png' 
import webdev from '../../../../static/websitedev.png' 
import digimark from '../../../../static/digimarketing.png' 
import softwaredev from '../../../../static/softwaredev.png' 
import servicebackgroundimage from '../../../../static/polygonz.png'
import './OurSpecialization.css'

class OurSpecialization extends React.Component {
    render() {
        const Section = styled.section`
            position: relative;
            overflow: hidden;
            background-image: url(${servicebackgroundimage});
            background-size: cover;
            .heading {
                width: 100%;
            }
          }
        `

        const ServiceContainer = styled.div`
            padding: 100px 0;
            @media (max-width:992px) {
                padding: 50px 0;
            }
            @media (max-width:767px) {
                padding: 20px 0;
            }
        `
        return (
            <Section>
                <ServiceContainer>
                    <Container>
                        <AnimatedHeading text="Our Secialization" />
                        <div className="service_main_div">
                            <Col md={12} className="special_div">
                                <div className="special_img_div"><img className="special_img" src={eCommerce} alt="e-commerce solution" /> </div>
                                <div className="special_text_div">
                                    <h1 className="special_heading">E-Commerce Solutions with Amazon, Dropshipping and Digital Marketing Services</h1>
                                    <div className="special_separator"></div>
                                    <p className="special_text">We design eCommerce websites with complete optimization that ensures it is user friendly and easy to use and catches the public eyes. We are providing the safe, secure and user-friendly Payment Gateway Integration that means, the payment gateway feature that provides secure and fast transaction with an easy return.Further, Atriom Technologies offers PHP, ASP.NET eCommerce solutions. At Atriom Technologies, we develop Third-Party Applications, that offers various new features and options to your business website or application like marketing, analytics, monetization, etc. We make sure that the services we provide are well planned and managed with all the necessary complete essentials. More on, we provide dedicated services of drop shipping and FBA. We believe in the satisfaction of our clients, and for this, we are available 24/7 support at your desk.</p>
                                </div>
                            </Col>
                            <Col md={12} className="special_div2">
                                <div className="special_img_div"><img className="special_img" src={webdev} alt="Website-Development" /> </div>
                                <div className="special_text_div">
                                    <h1 className="special_heading">Website Development Including Open-Source Content Management System (CMS)</h1>
                                    <div className="special_separator"></div>
                                    <p className="special_text">It is a tool on your web that will help create content and also manage information on your site's webpage, mainly when dealing with huge audiences around the world. Open content refers to the work that other people can modify or copy while attributing content to the original creator but without necessarily having to seek permission. Through our web creation services, you can be sure to access the CMS services.</p>
                                </div>
                            </Col> 
                            <Col md={12} className="special_div">
                                <div className="special_img_div"><img className="special_img" src={digimark} alt="Custom Business" /> </div>
                                <div className="special_text_div">
                                    <h1 className="special_heading">Custom Business/ Enterprise Development</h1>
                                    <div className="special_separator"></div>
                                    <p className="special_text">We at Atriom offers you an enterprise application that enables, to serve the needs of your enterprise. The enterprise development is harnessed towards guaranteeing your internal business needs are met while meeting the necessities of the consumers.</p>
                                </div>
                            </Col>
                            <Col md={12} className="special_div2">
                                <div className="special_img_div"><img className="special_img" src={softwaredev} alt="Custom Static Business" /> </div>
                                <div className="special_text_div">
                                    <h1 className="special_heading">Custom Static Business/ Enterprise Website</h1>
                                    <div className="special_separator"></div>
                                    <p className="special_text">We provide site development for an organization like charities, businesses, clubs, government entities, and groups based according to their aims and objectives. Our content management system brings about the difference. By using various combination of tools, we create a robust platform that meant to handle a variety of your requirements. Further, we take deep dive into the design that enhances site cleanliness, brand focus, and SEO needs. Through the enterprise website, you have a variety of features and facilities at your disposal, enabling you to accomplish much for your business, meeting the current and future needs.As a well-reputed IT Firm, we’re committed to helping you achieve excellence, which results to help you grow your online visibility and increase revenue. We understand all the methods and techniques which accelerates the website to work and grow! Nevertheless, the best solution for all your business needs is Atriom Technologies!</p>
                                </div>
                            </Col>
                        </div>
                    </Container>
                </ServiceContainer>
            </Section>
        )
    }

}

export default OurSpecialization;
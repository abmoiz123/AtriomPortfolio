import React from 'react'
import styled from 'styled-components'
import {
    Container,
    Row,
    Col,
    Navbar,
    InputGroup,
    FormControl,
    Button
} from 'react-bootstrap'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import "./Footer2.css"
import Paymentpic from '../../../../static/paymentfooter.png'
import googlepartner from '../../../../static/googlepartner.png'
import hubspot from '../../../../static/hubspot.png'
import ppc from '../../../../static/ppc.png'
import bingads from '../../../../static/bingads.png'
import facebookpartner from '../../../../static/facebookpartner.png'
import review from '../../../../static/review.png'
import shopify from '../../../../static/shopify.jpg'



class Footer2 extends React.Component {
    constructor() {
        super()
        this.state = {
            tags: ['Web Development', 'E-Commerce Solution', 'Search Engine Optimization', 'Social Media Marketing', 'Business Software Solutions', 'Mobile App Development', 'Customized Software Development', 'Graphic Design & Video Animation']
        }
    }
    render() {
        const Separator = styled.div`
                height: 5px;
                width: 50px;
                // background-color: #04e5e5;
                background-color: #00468b;
                // margin-bottom: 10px;
                margin-left: 6px;
            `

        return (
            <Container fluid className="footer_container">
                <Row>
                    <Col lg={3} md={3} sm={12}>
                        <Navbar className="info_col" expand="lg">
                            <Navbar.Toggle className="nav_toggle" aria-controls="basic-navbar-nav">
                                <div className="about_us_div">
                                    <p className="about_us_p">About Us</p>
                                    <FontAwesomeIcon className="plusicon" icon={faPlusCircle} />
                                </div>
                            </Navbar.Toggle>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <div>
                                    <h3 className="About_Us_heading">About Us</h3>
                                    <Separator className="About_Us_heading" />
                                    <ul className="info_ul">
                                        <li className="info_li">Perfect sleep has the perfect sleep solution for you.</li>
                                        <li className="info_li">000000000000000</li>
                                        <li className="info_li">atriomtechnology@gmail.com</li>
                                        <li className="info_li">7 Days a week from 10-00 am to 6-00 pm</li>
                                    </ul>
                                </div>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                    <Col lg={2} md={2} sm={12}>
                        <Navbar className="info_col" expand="lg">
                            <Navbar.Toggle className="nav_toggle" aria-controls="basic-navbar-nav">
                                <div className="about_us_div">
                                    <p className="about_us_p">Information</p>
                                    <FontAwesomeIcon className="plusicon" icon={faPlusCircle} />
                                </div>
                            </Navbar.Toggle>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <div>
                                    <h3 className="About_Us_heading">Information</h3>
                                    <Separator className="About_Us_heading" />
                                    <ul className="info_ul">
                                        <li className="info_li"><Link to="/About" className="info_li_link">About Us</Link></li>
                                        <li className="info_li"><Link to="/About" className="info_li_link">Buying Guide</Link></li>
                                        <li className="info_li"><Link to="/About" className="info_li_link">Care Guide</Link></li>
                                        <li className="info_li"><Link to="/About" className="info_li_link">Measure Guide</Link></li>
                                        <li className="info_li"><Link to="/About" className="info_li_link">My Account</Link></li>
                                        <li className="info_li"><Link to="/About" className="info_li_link">Register</Link></li>
                                    </ul>
                                </div>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                    <Col lg={2} md={2} sm={12}>
                        <Navbar className="info_col" expand="lg">
                            <Navbar.Toggle className="nav_toggle" aria-controls="basic-navbar-nav">
                                <div className="about_us_div">
                                    <p className="about_us_p">Policies</p>
                                    <FontAwesomeIcon className="plusicon" icon={faPlusCircle} />
                                </div>
                            </Navbar.Toggle>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <div>
                                    <h3 className="About_Us_heading">Policies</h3>
                                    <Separator className="About_Us_heading" />
                                    <ul className="info_ul">
                                        <li className="info_li"><Link to="/About" className="info_li_link">Privacy Policy</Link></li>
                                        <li className="info_li"><Link to="/About" className="info_li_link">Customer Services</Link></li>
                                        <li className="info_li"><Link to="/About" className="info_li_link">FAQs</Link></li>
                                        <li className="info_li"><Link to="/About" className="info_li_link">Mattress recycle</Link></li>
                                        <li className="info_li"><Link to="/About" className="info_li_link">Manufacture Guarantee</Link></li>
                                        <li className="info_li"><Link to="/About" className="info_li_link">Terms and Conditions</Link></li>
                                    </ul>
                                </div>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                    <Col lg={5} md={5} sm={12}>
                        <Navbar className="info_col" expand="lg">
                            <Navbar.Toggle className="nav_toggle" aria-controls="basic-navbar-nav">
                                <div className="about_us_div">
                                    <p className="about_us_p">Subscribe Newsletter</p>
                                    <FontAwesomeIcon className="plusicon" icon={faPlusCircle} />
                                </div>
                            </Navbar.Toggle>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <div className="subscribediv">
                                    <h3 className="About_Us_heading">Subscribe Newsletter</h3>
                                    <Separator className="About_Us_heading" />
                                    <InputGroup className="subscribeinputgroup">
                                        <FormControl
                                            className="subscribeinput"
                                            placeholder="Your Email Address"
                                            // aria-label="Recipient's username"
                                            aria-describedby="basic-addon2"
                                        />
                                        <InputGroup.Append>
                                            <Button className="subscribe_btn">Send</Button>
                                        </InputGroup.Append>
                                    </InputGroup>
                                    <h6 className="About_Us_heading">Follow Us</h6>
                                    <Separator className="About_Us_heading" />
                                    <ul className="social_btn_icon">
                                        <li className="social_btn_li"><a className="social_btn_a" href="https://www.facebook.com/">
                                            <FaFacebookF className="social_icon" />
                                        </a>
                                        </li>
                                        <li className="social_btn_li"><a className="social_btn_a" href="https://www.facebook.com/">
                                            <FaInstagram className="social_icon" />
                                        </a>
                                        </li>
                                        <li className="social_btn_li"><a className="social_btn_a" href="https://www.facebook.com/">
                                            <FaTwitter className="social_icon" />
                                        </a>
                                        </li>
                                        <li className="social_btn_li"><a className="social_btn_a" href="https://www.facebook.com/">
                                            <FaLinkedinIn className="social_icon" />
                                        </a>
                                        </li>
                                    </ul>
                                </div>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                    <Col lg={12} md={12} sm={12}>
                        <Navbar className="info_col" expand="lg">
                            <Navbar.Toggle className="nav_toggle" aria-controls="basic-navbar-nav">
                                <div className="about_us_div">
                                    <p className="about_us_p">Our Partners</p>
                                    <FontAwesomeIcon className="plusicon" icon={faPlusCircle} />
                                </div>
                            </Navbar.Toggle>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <div className="subscribediv">
                                    <h3 className="About_Us_heading">Our Partners</h3>
                                    <Separator className="About_Us_heading" />
                                    <ul className="partners_ul">
                                       <li className="partners_li"><img src={googlepartner} alt="Partners" className="partners_pic" /></li> 
                                       <li className="partners_li"><img src={hubspot} alt="Partners" className="partners_pic" /></li> 
                                       <li className="partners_li"><img src={ppc} alt="Partners" className="partners_pic" /></li> 
                                       <li className="partners_li"><img src={bingads} alt="Partners" className="partners_pic" /></li> 
                                       <li className="partners_li"><img src={facebookpartner} alt="Partners" className="partners_pic" /></li> 
                                       <li className="partners_li"><img src={shopify} alt="Partners" className="partners_pic" /></li> 
                                    </ul>
                                </div>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                    <Col lg={12} md={12} sm={12}>
                        <Navbar className="info_col" expand="lg">
                            <Navbar.Toggle className="nav_toggle" aria-controls="basic-navbar-nav">
                                <div className="about_us_div">
                                    <p className="about_us_p">Popular Tags</p>
                                    <FontAwesomeIcon className="plusicon" icon={faPlusCircle} />
                                </div>
                            </Navbar.Toggle>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <div className="subscribediv">
                                    <h3 className="About_Us_heading">Popular Tags</h3>
                                    <Separator className="About_Us_heading" />
                                    <ul className="popular_tags_ul">
                                        {this.state.tags.map((v, i) =>
                                            <li className="popular_tags_li" key={i}><a className="popular_tags_a" href="/">{v}</a></li>
                                        )}
                                        {/* <li className="popular_tags_li"><a className="popular_tags_a" href="/">Atriom Technologies</a></li>
                                        <li className="popular_tags_li"><a className="popular_tags_a" href="/">Atriom Technologies</a></li> */}
                                    </ul>
                                </div>
                            </Navbar.Collapse>
                        </Navbar>
                        <div className="copyright_div">
                            <p className="copyright_p"><a className="atriom_copyright_link" href="https://www.facebook.com/">Atriom Technologies</a> © 2021 . All Rights Reserved.</p>
                            <img src={Paymentpic} alt="Payments" className="paymentpic" />
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Footer2
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AnimationContainer from 'components/animation-container'
import styled from 'styled-components'
// import AnimatedHeading from 'components/animated-heading'
import img1 from './CaseStudyImages/Case1/img1.jpg'
import img2 from './CaseStudyImages/Case1/img2.png'
import './CaseStudy.css'

class CaseStudy extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            height: 0,
            width: 0,
            forQuotation: false,
        }
    }
    updateDimensions = () => {
        if (this.state.height !== window.innerHeight) {
            this.setState({ height: window.innerHeight })
        }
        if (this.state.width !== window.innerWidth) {
            this.setState({ width: window.innerWidth })
        }
    }


    componentDidMount() {
        this.setState({ height: window.innerHeight, width: window.innerWidth })
        window.addEventListener('resize', this.updateDimensions)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions)
    }

    showQuotationbtn = () => {
        if (this.state.forQuotation === false) {
            this.setState({
                forQuotation: true,
            })
        }
        else {
            this.setState({
                forQuotation: false,
            })
        }
    }

    render() {

        const Section = styled.section`
            position: relative;
        `
        return (
            <Section>
                <div className="Case_img_div">
                    <img className="Case_img" src={img1} alt="companyimg" />
                    <div className="case_content_anima_div">
                        <AnimationContainer animation="fadeInDown" delay={800}>
                            <img className="case_logo" src={img2} alt="companyimg" />
                            <p className="case_title_p">Fintech App Rebrands, Uses Automation To Profitably Grow Customer Base</p>
                        </AnimationContainer>
                    </div>
                </div>
                <Container fluid>
                    <Row className="case_row">
                        <Col lg={9} md={9} sm={12} xs={12}>
                            <div>
                                <p className="case_text_p">Want to know the one thing that every successful digital marketer does first to ensure they get the biggest return on their marketing budget? It’s simple: goal-setting. This is an absolutely essential practice for any digital marketer who knows how to execute their campaigns in a productive, cost-effective way. With a few. With a few simple tips, you can be doing the same in no time! In this blog, we’ll walk you through the first steps every savvy digital marketer takes to ensure that they’re on target to hit all their marketing objectives. Get ready for revenue!</p>
                                <p className="case_text_p">Remember: even if the channel you’re considering is all the rage right now, it might not fit your brand. Always make informed decisions that directly relate to your company. Otherwise, your message won’t be delivered to its intended audience and you’ll have wasted time, effort and money.</p>
                                <h3 className="case_heading">Know Your Digital Goals</h3>
                                <p className="case_text_p">The first step is clearly identifying which goals you want to achieve. Get specific. Do you want to increase brand awareness? Are you all about locking in leads? Do you want to establish a strong network of influencers that can help you be discovered? How about pushing engagement on social media?</p>
                                <h3 className="case_heading">Get Specific</h3>
                                <p className="case_text_p">A useful tool for narrowing down your goals to ensure they’re viable is the SMART mnemonic. It’s important to get specific to understand exactly what you’re working towards, and help you break down the process of hitting your targets. This is exactly what this mnemonic helps you to achieve.</p>
                                <ul className="case_text_ul">
                                    <li className="case_text_li">Does the channel reach my intended audience?</li>
                                    <li className="case_text_li">Is the channel sustainable and affordable within my company’s marketing budget?</li>
                                    <li className="case_text_li">Will I be able to measure the success of the channel?</li>
                                    <li className="case_text_li">Does the channel allow me to express my brand’s intended message?</li>
                                    <li className="case_text_li">Do the channels I’m considering work together to convey my message?</li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={3} md={3} sm={12} xs={12}>
                            <div>
                                <h4 className="case_categories_heading">Categories</h4>
                                <ul className="case_categories_ul">
                                    <li className="case_categories_li"><a href="/" className="case_categories_a">web development</a></li>
                                    <li className="case_categories_li"><a href="/" className="case_categories_a">e-commerce solutions</a></li>
                                    <li className="case_categories_li"><a href="/" className="case_categories_a">Search Engine Optimization</a></li>
                                    <li className="case_categories_li"><a href="/" className="case_categories_a">social media marketing</a></li>
                                    <li className="case_categories_li"><a href="/" className="case_categories_a">business software solutions</a></li>
                                    <li className="case_categories_li"><a href="/" className="case_categories_a">customized software development</a></li>
                                    <li className="case_categories_li"><a href="/" className="case_categories_a">mobile app development</a></li>
                                    <li className="case_categories_li"><a href="/" className="case_categories_a">graphic design and video animation</a></li>
                                </ul>
                                <h4 className="case_categories_heading">Recent Posts</h4>
                                <div className="recent_posts_div">
                                    <div className="recent_posts_img_div">
                                        <a href="/"><img className="recent_posts_img" src={img1} alt="companyimg" /></a>
                                    </div>
                                    <div className="recent_posts_text_div">
                                        <p className="recent_posts_date">April 6, 2021</p>
                                        <p className="recent_posts_text"><a className="recent_posts_text_a" href="/">Reshaped Leadership Team to Emerge Shop Buyout</a></p>
                                    </div>
                                </div>
                                <div className="recent_posts_div">
                                    <div className="recent_posts_img_div">
                                        <a href="/"><img className="recent_posts_img" src={img1} alt="companyimg" /></a>
                                    </div>
                                    <div className="recent_posts_text_div">
                                        <p className="recent_posts_date">April 6, 2021</p>
                                        <p className="recent_posts_text"><a className="recent_posts_text_a" href="/">Reshaped Leadership Team to Emerge Shop Buyout</a></p>
                                    </div>
                                </div>
                                <div className="recent_posts_div">
                                    <div className="recent_posts_img_div">
                                        <a href="/"><img className="recent_posts_img" src={img1} alt="companyimg" /></a>
                                    </div>
                                    <div className="recent_posts_text_div">
                                        <p className="recent_posts_date">April 6, 2021</p>
                                        <p className="recent_posts_text"><a className="recent_posts_text_a" href="/">Reshaped Leadership Team to Emerge Shop Buyout</a></p>
                                    </div>
                                </div>
                                <h4 className="case_categories_heading">Popular Requests</h4>
                                <div className="popular_req_tag_div">
                                    <p className="popular_req_tag_p"><a className="popular_req_tag_a" href="/">branding</a></p>
                                    <p className="popular_req_tag_p"><a className="popular_req_tag_a" href="/">digital</a></p>
                                    <p className="popular_req_tag_p"><a className="popular_req_tag_a" href="/">marketing</a></p>
                                    <p className="popular_req_tag_p"><a className="popular_req_tag_a" href="/">planing</a></p>
                                    <p className="popular_req_tag_p"><a className="popular_req_tag_a" href="/">seo</a></p>
                                    <p className="popular_req_tag_p"><a className="popular_req_tag_a" href="/">web</a></p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Section >
        )
    }
}

export default CaseStudy;
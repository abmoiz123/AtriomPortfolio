import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import AnimationContainer from 'components/animation-container'
import styled from 'styled-components'
import TeamImages from './teamimages'
import AnimatedHeading from 'components/animated-heading'
import './teampage.css'

class TeamPage extends React.Component {

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

        const CompanyImage = styled.div`
            width: 100%;
            display: flex;
            align-items: center;
            overflow: hidden;
            position: relative;
            img {
                // position: absolute;
                width: 100%;
                // opacity: 0.7;
            }
        `
        const Separator = styled.div`
                height: 5px;
                width: 50px;
                // background-color: #04e5e5;
                background-color: #00468b;
                // margin-bottom: 10px;
                margin-left: 6px;
            `
        return (
            <Section>
                <div className="ourteamheading"><AnimatedHeading text="Our Team" /></div>
                <CompanyImage style={{ height: `${this.state.width > 500 ? this.state.height : 350}px` }}>
                    <button onClick={this.showQuotationbtn} className="quotation_btn_cmp_img">
                        <img className="quotation_img" src={TeamImages.quotation} alt="quotation" />
                    </button>
                    <img className={this.state.forQuotation ? 'cmp_img_1_edit' : 'cmp_img_1'} src={TeamImages.img0} style={{ height: `${this.state.width >= 300 && this.state.width < 1200 ? "100%" : "auto"}` }} alt="companyimg" />
                    <div className={this.state.forQuotation ? 'company_text_div_edit' : 'company_text_div'}>
                        <AnimationContainer animation="fadeInUp" delay={600}>
                            <p className="company_text_p">We moved into our new headquarters in October 2019. Having a building to call our own is wonderful. Especially the early check-in and late check-out policy. Talk about 5 star accommodations!</p>
                        </AnimationContainer>
                    </div>
                </CompanyImage>
                <Container fluid>
                    <Row className="images_row">
                        <Col className="images_col" lg={6} md={6} sm={6} xs={12}>
                            <AnimationContainer animation="fadeInUp" delay={600}>
                                <button onClick={this.showQuotationbtn} className="quotation_btn">
                                    <img className="quotation_img" src={TeamImages.quotation} alt="quotation" />
                                </button>
                                <img className={this.state.forQuotation ? 'img_1_edit' : 'img_1'} src={TeamImages.img1} alt="img1" />
                                <div className={this.state.forQuotation ? 'anima_text_div_edit' : 'anima_text_div'}>
                                    <AnimationContainer animation="fadeInUp" delay={1800}>
                                        <p className="anima_text_p">Our CEO, Isaac Rudansky founded AdVenture Media in 2012 after earning his Masters Degree in Industrial / Organizational Psychology from Hofstra University.</p>
                                    </AnimationContainer>
                                </div>
                            </AnimationContainer>
                        </Col>
                        <Col className="images_col" lg={6} md={6} sm={6} xs={12}>
                            <AnimationContainer animation="fadeInUp" delay={1200}>
                                <img className="img_2" src={TeamImages.img2} alt="img2" />
                            </AnimationContainer>
                        </Col>
                    </Row>
                    <Row className="ceo_images_row">
                        <Col className="ceo_intro_col" lg={6} md={6} sm={12} xs={12}>
                            <AnimationContainer animation="fadeInUp" delay={600}>
                                <p className="leadership_status">SENIOR LEADERSHIP</p>
                                <p className="ceo_name_status">Isaac Rudansky, Founder And CEO</p>
                                <Separator />
                                <div className="ceo_intro_para_div">
                                    <p className="ceo_intro_para">Isaac Rudansky founded AdVenture Media in 2012 after earning his Masters Degree in Industrial Psychology from Hofstra University.</p>
                                    <p className="ceo_intro_para">Under Isaac's leadership, AdVenture Media grew more than 100% year over year throughout its first four years in business.</p>
                                    <p className="ceo_intro_para">Isaac and the AdVenture team have worked with 500+ companies including multiple publicly traded companies and billion dollar brands.</p>
                                    <p className="ceo_intro_para">Isaac's digital advertising training is the most popular paid search and social ads training on the internet, with over 200,000 students enrolled from around the globe.</p>
                                </div>
                            </AnimationContainer>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <AnimationContainer animation="fadeInUp" delay={1200}>
                                <img className="ceo_img" src={TeamImages.img3} alt="img3" />
                            </AnimationContainer>
                        </Col>
                    </Row>
                    <Row className="images_row">
                        <Col className="slide_text_box_div" lg={2} md={4} sm={12} xs={12}>
                            <p className="slide_text_box">Collaborative workspaces spark the conversations, arguments and all out brawls that spark the most creative ideas and solutions to complex problems. And if it takes riding a Google bike in figure 8's around the office to help a client ... well, then that's what it takes.</p>
                        </Col>
                        <Col lg={10} md={8} sm={12} xs={12}>
                            <AnimationContainer animation="fadeInUp" delay={600}>
                                <img className="img_2" src={TeamImages.img4} alt="img3" />
                            </AnimationContainer>
                        </Col>
                    </Row>
                    <Row className="images_row">
                        <Col className="images_col" lg={4} md={4} sm={6} xs={12}>
                            <AnimationContainer animation="fadeInUp" delay={600}>
                                <div>
                                    <button onClick={this.showQuotationbtn} className="quotation_btn">
                                        <img className="quotation_img" src={TeamImages.quotation} alt="quotation" />
                                    </button>
                                    <img className={this.state.forQuotation ? 'img_5_edit' : 'img_5'} src={TeamImages.img5} alt="img5" />
                                    <div className={this.state.forQuotation ? 'anima_text_div_edit' : 'anima_text_div'}>
                                        <AnimationContainer animation="fadeInUp" delay={600}>
                                            <p className="anima_text_p">Ronnie Cardno and Esti Nadoff, two of our senior account strategists celebrating some fine ROI.</p>
                                        </AnimationContainer>
                                    </div>
                                </div>
                            </AnimationContainer>
                        </Col>
                        <Col className="images_col" lg={8} md={8} sm={6} xs={12}>
                            <AnimationContainer animation="fadeInUp" delay={600}>
                                <img className="img_6" src={TeamImages.img6} alt="img6" />
                            </AnimationContainer>
                        </Col>
                    </Row>
                    <Row className="images_row">
                        <Col lg={10} md={8} sm={12} xs={12}>
                            <img className="img_2" src={TeamImages.img7} alt="img3" />
                        </Col>
                        <Col className="slide_text_box_div" lg={2} md={4} sm={12} xs={12}>
                            <p className="slide_text_box_2">Collaborative workspaces spark the conversations, arguments and all out brawls that spark the most creative ideas and solutions to complex problems. And if it takes riding a Google bike in figure 8's around the office to help a client ... well, then that's what it takes.</p>
                        </Col>
                    </Row>
                    <Row className="images_row">
                        <Col className="images_col" lg={4} md={4} sm={6} xs={12}>
                            <button onClick={this.showQuotationbtn} className="quotation_btn">
                                <img className="quotation_img" src={TeamImages.quotation} alt="quotation" />
                            </button>
                            <img className={this.state.forQuotation ? 'img_5_edit' : 'img_5'} src={TeamImages.img8} alt="img8" />
                            <div className={this.state.forQuotation ? 'anima_text_div_edit' : 'anima_text_div'}>
                                <AnimationContainer animation="fadeInUp" delay={600}>
                                    <p className="anima_text_p">Isaac's digital advertising online courses have been studied by over 200,000 students worldwide.</p>
                                </AnimationContainer>
                            </div>
                        </Col>
                        <Col className="images_col" lg={8} md={8} sm={6} xs={12}>
                            <img className="img_6" src={TeamImages.img9} alt="img9" />
                        </Col>
                    </Row>
                    <Row className="ceo_images_row">
                        <Col className="ceo_intro_col" lg={5} md={12} sm={12} xs={12}>
                            <p className="leadership_status">SENIOR LEADERSHIP</p>
                            <p className="ceo_name_status">Meet Patrick Gilbert, Director Of Client Services</p>
                            <Separator />
                            <div className="ceo_intro_para_div">
                                <p className="ceo_intro_para">Patrick earned a B.S. in Marketing from Penn State University. Patrick is the world's preeminent expert on Google Ad's machine learning, having written a series of articles that went viral inside Google. That led to his being invited by Google to lecture in Dublin, London, New York and Brazil.</p>
                                <p className="ceo_intro_para">If the Buffalo Bills ever win a Super Bowl, he hopes you think of him and say, “Good for him. He never gave up on that terrible franchise.”</p>
                            </div>
                        </Col>
                        <Col lg={7} md={12} sm={12} xs={12}>
                            <div className="img_10_div"><img className="img_10" src={TeamImages.img10} alt="img3" /></div>
                            <div className="img_11_div"><img className="img_10" src={TeamImages.img11} alt="img3" /></div>
                        </Col>
                    </Row>
                </Container>
            </Section>
        )
    }
}

export default TeamPage;
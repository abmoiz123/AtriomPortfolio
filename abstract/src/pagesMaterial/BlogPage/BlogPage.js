import React from 'react'
// import { Row, Col, Container } from 'react-bootstrap'
import AnimationContainer from 'components/animation-container'
import styled from 'styled-components'
import AnimatedHeading from 'components/animated-heading'
import backgroundimg from './BlogPageImages/img0.jpeg'
import './BlogPage.css'
import { Container } from 'react-bootstrap'

class BlogPage extends React.Component {

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
            background-color: #fff;
            background-image: linear-gradient(0deg, grey, #fff);
            img {
                // position: absolute;
                width: 100%;
                opacity: 0.2;
            }
        `
        return (
            <Section>
                <div className="ourteamheading"><AnimatedHeading text="Our Case Studies" /></div>
                <CompanyImage style={{ height: `${this.state.width > 500 ? this.state.height : 350}px` }}>
                    <img src={backgroundimg} style={{ height: `${this.state.width >= 300 && this.state.width < 1200 ? "100%" : "auto"}` }} alt="companyimg" />
                </CompanyImage>
                <div className="blogpage_company_text_div">
                    <AnimationContainer animation="fadeInUp" delay={800}>
                        <h1 className="blogpage_company_text_h1">Let’s Talk Results</h1>
                        <p className="blogpage_company_text_p">From AdWords management to remarketing to conversion rate optimization, <strong>we help our clients get better results</strong> with our creative and data-driven approach to online advertising.</p>
                    </AnimationContainer>
                </div>
                {/* <Container>

                </Container> */}
            </Section>
        )
    }
}

export default BlogPage;
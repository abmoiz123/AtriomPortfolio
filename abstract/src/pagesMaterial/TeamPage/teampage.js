import React from 'react'
// import { Row, Col, Container } from 'react-bootstrap'
import styled from 'styled-components'
import TeamImages from './teamimages'

class TeamPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            height: 0,
            width: 0
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
                position: absolute;
                width: 100%;
                opacity: 0.7;
            }
        `
        return (
            <Section>
                <CompanyImage style={{ height: `${this.state.width > 500 ? this.state.height : 350}px` }}>
                    <img src={TeamImages.img0} style={{ height: `${this.state.width >= 1024 && this.state.width < 1200 ? "100%" : "auto"}` }} alt="companyimg" />
                </CompanyImage>
            </Section>
        )
    }
}

export default TeamPage;
import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import AnimationContainer from 'components/animation-container'
import ContactForm2 from '../parts/ContactForm2/ContactForm2'
import ContactSection from '../parts/ContactSection/ContactSection2'
import servicebackgroundimage from '../../../../static/polygonz.png'
import "./ContactCreative2.css"
class ContactCreative2 extends React.Component {


  render() {

    const Section = styled.section`
            position: relative;
            overflow: hidden;
            background-image: url(${servicebackgroundimage});
            background-size: cover;
            // background-color: #000;
            background-color: #013567;
            padding: 100px 0;
        `

    const FormRow = styled(Row)`
           background-color: #111;
        `

    const ContactCol = styled(Col)`
            // min-height: 600px;
            // max-height: 600px;
            padding: 0;
            display: flex;
            align-items: center;
        `

    const Map = styled.iframe`
            border: none;
            height: 100%;
            width: 100%;
        `

    const IconRow = styled(Row)`
            margin-top: 150px;
        `

    const IconCol = styled(Col)`
            @media (max-width: 500px) {
              margin-bottom: 140px;
            }
        `

    const IconContainer = styled.div`
            width: 150px;
            height: 150px;
            margin: auto;
            padding: 35px;
            text-align: center;
            position: relative;
            bottom: 75px;
            // background-color: #04e5e5;
            background-color: #013567;
            border-radius: 150px;
            transition: .5s;
        `

    const InfoPart = styled.div`
            min-height: 250px;
            background-color: #111;
            border: 2px solid #444;
            &:hover ${IconContainer} {
              background-color: #009e9e;
            }
        `
    const Icon = styled.img`
            height: 70px;
            width: 70px;
            object-fit: contain;
        `

    const InfoTitle = styled.h4`
            font-size: 35px;
            // color: #fff;
            color: #f6b10a;
            font-family: Teko;
            text-align: center;
        `

    const Info = styled.div`
            position: relative;
            bottom: 30px;
        `

    const InfoLinkContainer = styled.div`
            text-align: center;
        `

    const InfoLink = styled.a`
            // color: #04e5e5;
            color: #fff;
            transition: .5s;
            &:hover {
              color: #fff;
              text-decoration: none;
            }
        `

    return (
      <Section id="contact">
        <Container>
          <AnimationContainer animation="fadeIn">
            <FormRow className="formRow">
              <Col md={8}><ContactForm2 /></Col>
              <Col md={4}><ContactSection /></Col>
              {/* <ContactCol md={8}>
                <ContactForm2 />
              </ContactCol>
              <ContactCol md={4}>
                <ContactSection />
              </ContactCol> */}
            </FormRow>
          </AnimationContainer>
        </Container>
      </Section>
    )
  }

}

export default props => (
  <StaticQuery
    query={graphql`
    query {
      emailIcon: file(relativePath: {eq: "icons/email2.png"}) {
        childImageSharp {
          fluid(maxWidth: 500) {
            src
          }
        }
      }
      mapIcon: file(relativePath: {eq: "icons/map.png"}) {
        childImageSharp {
          fluid(maxWidth: 500) {
            src
          }
        }
      }
      phoneIcon: file(relativePath: {eq: "icons/phone.png"}) {
        childImageSharp {
          fluid(maxWidth: 500) {
            src
          }
        }
      }
    }
    `}
    render={({
      emailIcon,
      mapIcon,
      phoneIcon }) => <ContactCreative2
        emailIcon={emailIcon}
        mapIcon={mapIcon}
        phoneIcon={phoneIcon}
        {...props} />}
  />
)
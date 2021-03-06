import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { graphql, StaticQuery } from 'gatsby'
import AnimationContainer from 'components/animation-container'
import ContactForm2 from '../parts/ContactForm2/ContactForm2'
import ContactSection from '../parts/ContactSection/ContactSection2'
import "./ContactCreative2.css"
class ContactCreative2 extends React.Component {


  render() {

    return (
      <Container fluid className="creative_container">
        <AnimationContainer animation="fadeIn">
          <Row className="formRow">
            <Col className="form_col" lg={8} md={8} sm={12}><ContactForm2 /></Col>
            <Col className="form_col" lg={4} md={4} sm={12}><ContactSection /></Col>
          </Row>
        </AnimationContainer>
      </Container>
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
import React from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'
import AnimatedHeading from 'components/animated-heading'

class ContactPage extends React.Component {
    render() {
        const Section = styled(Container)`
                position: absolute;
                top: 90px;
                left: 100px;
                Right: 100px;
            `
        return (
            <Section>
                <AnimatedHeading text="Contact Us" />
            </Section>
        )
    }
}
export default ContactPage;
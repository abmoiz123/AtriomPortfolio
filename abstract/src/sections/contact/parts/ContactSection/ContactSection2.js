import React from 'react'
import styled from 'styled-components'

import {Col, Container} from 'react-bootstrap'
import "./ContactSection.css";
class ContactSection extends React.Component {
    render() {
        const Separator = styled.div`
        height: 3px;
        width: 50px;
        background-color: #00468b;
        margin-bottom: 10px;
        margin-left: 6px;
    `

        return (
            <Container className="contact_detail_container">
                <Col className="contact_detail_col" md={12}>
                    <img className="atmlogo" src="/img/Atriom-Logo-2.png" alt="Atriom" />
                    <p className="com_info">KoderLabs is a custom software development company that offers services ranging from Website Designing, Mobile Application Development, Ecommerce solutions to Business Data Analysis.</p>
                    <h5 className="infoheding">Locate</h5>
                    <Separator />
                    <p className="com_info">950 E Hwy 114, Suite<br /> 160,<br />Southlake, TX 76092</p>
                    <br />
                    <p className="com_info">950 E Hwy 114, Suite<br /> 160,<br />Southlake, TX 76092</p>
                    <h5 className="infoheding">Contact</h5>
                    <Separator />
                    <p className="com_info">contact@koderlabs.com<br />+1-800-515-3181</p>
                </Col>
            </Container>
        )
    }

}

export default ContactSection;
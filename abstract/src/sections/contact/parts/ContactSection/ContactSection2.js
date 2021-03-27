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
                    <p className="com_info">
                        We Promise the Growth of your Business!
                        <br />
                        At Atriom Technologies, we deliver innovative solutions that allow you to reach your goals and  surpass them, with us it’s a complete roadmap to success.</p>
                    <h5 className="infoheding">Locate</h5>
                    <Separator />
                    <p className="com_info">3rd Floor, R-209, Saba Avenue, Main Road, Block 13 D 2 Gulshan-e-Iqbal, Karachi City, Sindh 75300</p>
                    <br />
                    <p className="com_info">International House, 12 Constance Street, London, United Kingdom</p>
                    <h5 className="infoheding">Contact</h5>
                    <Separator />
                    <p className="com_info">contact@atriom.co.uk<br />+447401379573, +923020825699</p>
                </Col>
            </Container>
        )
    }

}

export default ContactSection;
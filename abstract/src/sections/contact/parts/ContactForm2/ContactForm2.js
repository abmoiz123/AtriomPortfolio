import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Row, Col, Container } from 'react-bootstrap'

import "./ContactForm2.css"
class ContactForm2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      company: "",
      phone: "",
      email: "",
      services: [],
      message: "",
      error: false
    }
  }

  formSubmit() {
    if (this.state.name === "" || this.state.email === "" || this.state.message === "") {
      this.setState({ error: true })
    } else {
      this.setState({ error: false })
    }
    this.forceUpdate()
  }

  check(val) {
    if (this.state.error && val === "") {
      return false
    } else {
      return true
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  serviceSelect = (e) => {
    let services = e.target.id
    this.setState({
      services: services
    })
    // alert('hello')
    // e.target.style
    console.log(this.state.services)

    // console.log(e.target)
  }
  render() {



    const Separator = styled.div`
            height: 5px;
            width: 50px;
            // background-color: #04e5e5;
            background-color: #00468b;
            margin-bottom: 10px;
            margin-left: 6px;
        `

    const ContactForm = styled.div`
            padding: 40px;
            width: 100%;
        `

    const Heading = styled.h2`
            font-size: 70px;
            font-family: Teko;
            // color: #fff;
            color: #013567;
        `

    const InputElement = styled.div`
            margin: 10px 0;
        `

    const ErrorInputAnimation = keyframes`
            0% {
              border-bottom: 1px solid #111;
            }
            100% {
              border-bottom: 1px solid #ff0000;
            }
        `


    const Input = styled.input`
            width: 100%;
            border: none;
            border-bottom: 1px solid #444;
            padding: 10px 5px;
            border-radius: 0;
            color: #fff;
            transition: .5s;
            &:focus {
              // border-bottom: 1px solid #04e5e5;
              border-bottom: 1px solid #fff;
              outline: none;
            }
            &.error {
              animation: ${ErrorInputAnimation} 1s forwards;
            }
        `

    const Textarea = styled.textarea`
            width: 100%;
            background-color: #111;
            border: none;
            border-bottom: 1px solid #444;
            padding: 10px 5px;
            border-radius: 0;
            color: rgb(255, 255, 255);
            transition: all 0.5s ease 0s;
            min-height: 100px;
            margin-top: 0px;
            margin-bottom: 0px;
            height: 100px;
            &:focus {
              // border-bottom: 1px solid #04e5e5;
              border-bottom: 1px solid #013567;
              outline: none;
            }
        `

    const Submit = styled.button`
            display: block;
            height: 50px;
            width: 186px;
            position: relative;
            border: none;
            overflow: hidden;
            transition: .5s;
            &::after {
              position: absolute;
              content:'';
              display: inline-block;
              // background: rgba(59,173,227,1);
              background: rgba(0,70,140,1);
              // background: linear-gradient(45deg, rgba(41, 153, 153, 1) 0%, rgba(50, 189, 189, 1) 25%, rgba(4, 229, 229, 1) 51%, rgba(41, 153, 153, 1) 100%);
              background: linear-gradient(45deg, rgba(10,70,140, 1) 0%, rgba(250,219,42, 1) 25%, rgba(10,70,140, 1) 51%, rgba(250,219,42, 1) 100%);
              height: 100%;
              width:  140%;
              top: 0;
              left: 0;
              transition: .5s;
            }
            
            &:hover {
              &::after {
                transform: translateX(-20%);
              }
            }
            span {
              position: relative;
              top: 0;
              color: #fff;
              z-index: 10;
              text-transform: uppercase;
              letter-spacing: 2px;
            }
        `
    return (
      <ContactForm>
        <Heading className="Heading">
          Let's Think Together
              </Heading>
        <Separator />
        <Row>
          <Col md={6}>
            <InputElement className="inputdiv">
              <Input type="text" defaultValue={this.state.name} className={`name ${this.check(this.state.name) ? "" : "error"}`} placeholder="Your Name*" onChange={e => this.setState({ name: e.target.value })} />
            </InputElement>
          </Col>
          <Col md={6}>
            <InputElement className="inputdiv">
              <Input type="text" defaultValue={this.state.email} className={`email ${this.check(this.state.email) ? "" : "error"}`} placeholder="Company" onChange={e => this.setState({ email: e.target.value })} />
            </InputElement>
          </Col>
          <Col md={6}>
            <InputElement className="inputdiv">
              <Input type="text" defaultValue={this.state.phone} className="phone" placeholder="Phone" onChange={e => this.setState({ phone: e.target.value })} />
            </InputElement>
          </Col>
          <Col md={6}>
            <InputElement className="inputdiv">
              <Input type="text" defaultValue={this.state.email} className={`email ${this.check(this.state.email) ? "" : "error"}`} placeholder="Email" onChange={e => this.setState({ email: e.target.value })} />
            </InputElement>
          </Col>
          <Col md={12}>
            <p className="service">Services</p>
            <div className="serviceslist">
              {/* {this.state.services.map((i, v) =>
                <div key={v}>
                  <input type="checkbox" onChange={this.serviceSelect} id={i.id} className="selectable" />
                  <label className="selectable2" htmlFor={i.service}>
                    {i.service}
                  </label>
                </div>
              )} */}
              <div>
                <input type="checkbox" onClick={this.serviceSelect} id="Design" className="selectable" />
                <label className="selectable2" htmlFor="Design">
                  Design
                </label>
              </div>
              <div>
                <input type="checkbox" onClick={this.serviceSelect} id="Website Development" className="selectable" />
                <label className="selectable2" htmlFor="Website Development">
                Website Development
                </label>
              </div>
              <div>
                <input type="checkbox" onClick={this.serviceSelect} id="Mobile Application" className="selectable" />
                <label className="selectable2" htmlFor="Mobile Application">
                Mobile Application
                </label>
              </div>
              <div>
                <input type="checkbox" onClick={this.serviceSelect} id="Branding" className="selectable" />
                <label className="selectable2" htmlFor="Branding">
                Branding
                </label>
              </div>
              <div>
                <input type="checkbox" onClick={this.serviceSelect} id="Marketing" className="selectable" />
                <label className="selectable2" htmlFor="Marketing">
                Marketing
                </label>
              </div>
              <div>
                <input type="checkbox" onClick={this.serviceSelect} id="Other" className="selectable" />
                <label className="selectable2" htmlFor="Other">
                Other
                </label>
              </div>
              {/* <p className="serviceselect" id="Design" onClick={this.serviceSelect}>Design</p>
                <p className="serviceselect" id="Website Development" onClick={this.serviceSelect}>Website Development</p>
                <p className="serviceselect" id="Mobile Application" onClick={this.serviceSelect}>Mobile Application</p>
                <p className="serviceselect" id="Branding" onClick={this.serviceSelect}>Branding</p>
                <p className="serviceselect" id="Marketing" onClick={this.serviceSelect}>Marketing</p>
                <p className="serviceselect" id="Other" onClick={this.serviceSelect}>Other</p> */}
            </div>
          </Col>
        </Row>
        {/* <InputElement className="inputdiv">
                <Input type="text" defaultValue={this.state.name} className={`name ${this.check(this.state.name) ? "" : "error"}`} placeholder="Name" onChange={e => this.setState({name: e.target.value})} />
              </InputElement>
              <InputElement className="inputdiv">
                <Input type="text" defaultValue={this.state.email} className={`email ${this.check(this.state.email) ? "" : "error"}`} placeholder="Email" onChange={e => this.setState({email: e.target.value})} />
              </InputElement>
              <InputElement className="inputdiv">
                <Input type="text" defaultValue={this.state.phone} className="phone" placeholder="Phone" onChange={e => this.setState({phone: e.target.value})} />
              </InputElement>
              <InputElement className="inputdiv">
                <Textarea placeholder="Message" defaultValue={this.state.message}  className={`message ${this.check(this.state.message) ? "" : "error"}`} onChange={e => this.setState({message: e.target.value})} />
              </InputElement> */}
        <Submit onClick={() => this.formSubmit()}>
          <span>
            Submit
                </span>
        </Submit>
      </ContactForm>
    )
  }

}

export default ContactForm2
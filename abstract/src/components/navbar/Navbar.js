import React from 'react'
import styled from 'styled-components'
// import { Container } from 'react-bootstrap'
import Menubtn from './menubtn/menubtn'


var scrollToElement = require('scroll-to-element')

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          collapse: false,
          sticky: false,
          sections: this.props.sections ? this.props.sections : ['home', 'about', 'services', 'portfolio', 'testimonials', 'clients', 'team', 'blog', 'contact']
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, { passive: true })
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (window.pageYOffset >= 50 && this.state.sticky) {
            if (this.state.collapse !== nextState.collapse) {
                return true
            }
            return false
        } else {
            return true
        }
    }

    handleScroll = event => {
        if (window.pageYOffset >= 50) {
            this.setState({ sticky: true })
        } else {
            this.setState({ sticky: false })
        }
    }

    collapseNav() {
        console.log(this.state, 'col')
        if (!this.state.collapse) {
            this.setState({ collapse: true })
        } else {
            this.setState({ collapse: false })
        }
    }
    

    render() {

        const NavbarWrapper = styled.div`
            position: absolute;
            z-index: 50;
            width: 100%;
            padding: 15px 30px;
            @media (max-width: 992px) {
                padding: 10px 30px;
            }
            @media (max-width: 400px) {
                padding: 10px 15px;
            }
        `

        const NavbarContainer = styled.div`
            display: flex;
            position: relative;
            
        `

        const LogoWrapper = styled.div`
            flex: 0 0 30%;
            max-width: 30%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            @media (max-width: 576px) {
                flex: 0 0 40%;
                max-width: 40%;
            }
            @media (max-width: 400px) {
                flex: 0 0 45%;
                max-width: 45%;
            }   
        `

        const Logo = styled.img`
            height: auto !important;
            width: 100%;
            @media (max-width: 576px) {
                height: auto !important;
                width: 100%;
            }
            @media (max-width: 576px) {
                height: auto !important;
                width: 100%;
            }
        `
        
        
        return(
            <NavbarWrapper className={`header${this.state.sticky === true ? ' sticky' : ''}`}>
                <NavbarContainer>
                    <LogoWrapper className="logo">
                        <a href="/"><Logo src="/img/Atriom-Logo-2.png" alt="Atriom" /></a>
                    </LogoWrapper>
                    <Menubtn/>
                </NavbarContainer>
            </NavbarWrapper>
        )
    }
}

export default Navbar
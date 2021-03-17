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
            @media (max-width: 500px) {
                padding: 10px 30px;
            }
            // z-index: 100;
            // &.sticky {
            //     position: fixed;
            //     background-color: rgb(0,53,105);
            //     padding: 0 0;
            //     @media (max-width: 500px) {
            //         padding: 20px 0;
            //     }
            // }
        `

        const NavbarContainer = styled.div`
            display: flex;
            position: relative;
            @media (max-width: 500px) {
                display: block;
                padding: 0;
            }
            
        `

        const LogoWrapper = styled.div`
            flex: 0 0 30%;
            max-width: 30%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            @media (max-width: 500px) {
                flex: 0 0 100%;
                max-width: 100%;
                // justify-content: center;
            }
        `

        const Logo = styled.img`
            height: 100%;
            @media (max-width: 1023px) {
                height: 40px;
            }
            @media (max-width: 500px) {
                height: 50px;
            }
        `
        
        
        return(
            <NavbarWrapper className={`header${this.state.sticky === true ? ' sticky' : ''}`}>
                <NavbarContainer>
                    <LogoWrapper className="logo">
                        <Logo src="/img/Atriom-Logo-2.png" alt="Atriom" />
                    </LogoWrapper>
                    <Menubtn/>
                </NavbarContainer>
            </NavbarWrapper>
        )
    }
}

export default Navbar
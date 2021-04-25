import React from 'react'
import styled from 'styled-components'
import Menubtn from '../../../components/navbar/menubtn/menubtn'



class Header extends React.Component {
    render() {

        const NavbarWrapper = styled.div`
            // position: absolute;
            background-color: #013567;
            // z-index: 50;
            width: 100%;
            padding: 8px 30px;
            @media (max-width: 500px) {
                padding: 10px 30px;
            }
        `

        const NavbarContainer = styled.div`
            display: flex;
            position: relative;
            @media (max-width: 500px) {
                // display: block;
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


        return (
            <NavbarWrapper>
                <NavbarContainer>
                    <LogoWrapper className="logo">
                        <a href="/"><Logo src="/img/Atriom-Logo-2.png" alt="Atriom" /></a>
                    </LogoWrapper>
                    <Menubtn />
                </NavbarContainer>
            </NavbarWrapper>
        )
    }
}

export default Header
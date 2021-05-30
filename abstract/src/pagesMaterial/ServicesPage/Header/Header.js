import React from 'react'
import styled from 'styled-components'
import Menubtn from '../../../components/navbar/menubtn/menubtn'



class Header extends React.Component {
    render() {

        const NavbarWrapper = styled.div`
            background-color: #013567;
            width: 100%;
            padding: 8px 30px;
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
            // @media (max-width: 500px) {
            //     padding: 0;
            // }
            
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
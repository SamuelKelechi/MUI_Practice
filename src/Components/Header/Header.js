import React from 'react'
import Styled from 'styled-components'
import { NavLink } from 'react-router-dom'



const Header = () => {
    return(
        <MainContainer>
            <Navigation>
                <Nav to ="/">
                    Home
                </Nav>
                <Nav to ="/about">
                    About
                </Nav>
               
            </Navigation>
        </MainContainer>

    )
}

export default Header;

const MainContainer = Styled.div`
background-color: black;
height: 80px;
`

const Navigation = Styled.div`
display: flex;
align-items: center;
height: 100%;
width: 300px;
justify-content: space-around
`
const Nav = Styled(NavLink)`
color: white;
cursor: pointer;
text-decoration: none;
`
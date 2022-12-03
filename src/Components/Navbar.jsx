import React from 'react'
import styled from 'styled-components'
const Nav = styled.div`
display: flex;
align-items: center;
background: black;
color: white;
font-family: Helvetica;
font-weight: 300;
width:100%;
`;
const Nt=styled.div`
margin: auto;
    font-size: 150%;
    padding: 12px 16px;`;

const Navbar = () => (
    <Nav className='navbar'>
        <Nt className='navbar__title navbar__item'><em><b>TrackUP</b></em></Nt>     
    </Nav>
);
export default Navbar;
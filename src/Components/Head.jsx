import React from 'react'
import styled from 'styled-components'
import { useState,useEffect } from "react";
const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
margin:5px 0 18px;
`;
const Headerr = styled.h2`
color:white;
width:380px;
margin:auto;
font-size:10px;
font-weight:bold;
text-align:center;
align-items:center;
`;
const Addx=styled.button`
background:#1A191E;
padding:8px 5px;
color:white;
text-align:center;
border-radius:8px;
font-size: 14px;
width:360px;
margin:auto;
`;
const Val=styled.p`
font-size:20px;
`;
const Header = (props) => {
  return (

    <Container>
      <Addx> TOTAL BALANCE <Val>Rs {props.income - props.expense}</Val></Addx>
    </Container>
  )
}

export default Header;

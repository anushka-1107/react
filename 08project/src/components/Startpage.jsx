import styled from 'styled-components'
import React from 'react'

const Startpage = ({toggle}) => {
  return (
    <Container>
        <div>
        <img src='/images/dices.png' alt='dices'/>
        </div>
        <div>
            <h1>Dice Game</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

export default Startpage


const Container = styled.div`
max-width: 1180;
display: flex;
max-height:100vh ;
margin: 0 auto;
align-items: center;
`;
const Button = styled.button`
color:white;
padding: 10px 18px;
background: black;
border-radius: 5px;
min-width: 220px;
font-size: 24px;
    border: 1px solid transparent;
    transition: 0.4s background ease-in ;
    cursor: pointer; ;

&:hover{
    background-color: whitesmoke;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in ;
}`;
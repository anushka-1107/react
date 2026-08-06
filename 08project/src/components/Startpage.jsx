import styled from 'styled-components'
import React from 'react'

const Startpage = () => {
  return (
    <container>
        <img src='/images/dices.png' alt='dices'/>
        <div>
            <h1>Dice Game</h1>
            <Button>Play Now</Button>
        </div>
    </container>
  )
}

export default Startpage


const container = styled.div`
max-width: 1180
`;
const Button = styled.button`
display: flex;
flex-direction : column;
justify-content: center;
align-items: center;
color:white;
padding: 10px 18px;
background: black;
border-radius: 5px;
min-width:220px;`;
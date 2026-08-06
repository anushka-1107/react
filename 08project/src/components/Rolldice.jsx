import { useState } from "react"
import styled from "styled-components"


const Rolldice = ({currentdice,diceimage}) => {
    


  return (
    <Dicecontainer>
    <div className="dice" onClick={diceimage}>
        <img src={`/images/dice/dice_${currentdice}.png`}  />
        </div>
        <p>Click on Dice to Roll</p>
        </Dicecontainer>
  )
}

export default Rolldice


const Dicecontainer = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        font-size: 24px;
    }
    .dice{
        cursor: pointer;
    }
`;
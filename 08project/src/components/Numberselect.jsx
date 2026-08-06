import styled from 'styled-components'
import { useState } from 'react'


const Numberselect = ({error,selectnum,setSelectnum}) => {
    const arr=[1,2,3,4,5,6]
  return (
    <NumberSelector>
        <p>{error}</p>
        <div className = "flex">
            {
            arr.map((value , i)=>(
               <Box isSelected={value==selectnum} key = {i} onClick={()=>setSelectnum(value)}>{value}</Box>

            ))
        }
        </div>
        <p>Select Number</p>
        


    </NumberSelector>
  )
}

export default Numberselect

const NumberSelector = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    .flex{
        display: flex;
        gap: 24px;

    }
    p{
        font-size: 24px;
        font-weight: 500;
    }
`

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid white;
    display: grid;
    place-items:center;
    font-size: 25px;
    font-weight: 700;
    background-color: ${(props)=>(props.isSelected ? "black":"white")};
    color: ${(props)=>(props.isSelected ? "white":"black")};

`;
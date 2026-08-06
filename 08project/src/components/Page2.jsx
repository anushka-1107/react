import Totalscore from './Totalscore'
import Numberselect from './Numberselect'
import styled from 'styled-components'
import Rolldice from './Rolldice'
import { useState } from 'react'

const Page2 = () => {
    const [selectnum,setSelectnum]= useState()
    const [currentdice,setCurrentdice]= useState(1)
    const [error,setError] = useState("")
    const [score,setScore]=useState(0)

    const randomdice =(min, max) => {
        return Math.floor(Math.random()
            * (max - min) + min);
        console.log(randomdice)
    };
    const diceimage=()=>{

        if(!selectnum) {
            setError("you have to select a number")
            return
        }
        setError("")
       const randomNumber= randomdice(1,7)
       setCurrentdice((prev)=> randomNumber)

       if (selectnum==randomNumber){
        setScore((prev)=>prev+randomNumber)
       } else{
        setScore((prev)=>prev-2)
       }

       setSelectnum(undefined)
    }

  return (
    <Maincontainer>

      <div className='top_section'>
          <Totalscore score={score}/>
            <Numberselect error={error} selectnum={selectnum} setSelectnum={setSelectnum} />
      </div>
      <div>
        <Rolldice currentdice={currentdice} diceimage={diceimage}/>
      </div>
    </Maincontainer>
  )
}

export default Page2

const Maincontainer= styled.main`
display: flex;
justify-content: space-evenly;
.top_section{
    display: flex;
    justify-content: space-around;
    align-items: end;
}
`
import styled from 'styled-components'


const Totalscore = ({score}) => {
  return (
    <Scorebox>
            <h1>{score}</h1>
            <p>Total Score</p>
        </Scorebox>
  )
}

export default Totalscore


const Scorebox = styled.div`
max-width: 100px;
text-align: center;
   h1{
    font-size: 100px;
    line-height:60px ;
   } 
   p{
    font-size: 24px;
    font-weight: 700;
   };
`
import React from 'react'
import { useNavigate } from 'react-router-dom'
import detail from '../data/edata'

const Employee = () => {
   
const nav = useNavigate()

  return (
    <div className='container'>

        {detail.map((detail)=>
        <div key={detail.id}  className = 'card'>
            
            <p>{detail.id}</p>
            <p>{detail.name}</p>
           <button onClick={()=>nav(`/Employee/${detail.id}`)} className='view-btn'>view details </button>


         </div>   
    )}
    </div>
  )
}

export default Employee
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Employee = () => {
   
const nav = useNavigate()

const detail = useSelector((state)=>state.emp.Empdata)

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
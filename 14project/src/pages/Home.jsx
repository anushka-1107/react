import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
 const nav = useNavigate()

  return (
    <>
    <div>Home</div>

    <button onClick={()=>nav('/Employee')} className='view-btn '>Employee Details</button>
    <button onClick={()=>nav('/Addemployee')} className='view-btn '>Add Employee</button>

    </> 
  )
}

export default Home
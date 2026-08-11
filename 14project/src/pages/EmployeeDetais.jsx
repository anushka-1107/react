import React from 'react'
import { useSelector } from 'react-redux'

import { useParams } from 'react-router-dom'

const EmployeeDetais = () => {
  const {id} = useParams()
  const detail = useSelector((state)=>state.emp.Empdata)
  
  const emp = detail.find((employee)=>employee.id==id)
  return (
    <>
    <h1>ID : {emp.id}</h1>
    <h1>Name : {emp.name}</h1>
    <h1>Email : {emp.email}</h1>
    <h1>Department : {emp.department}</h1>
     <h1>Position : {emp.position}</h1>
    <h1>Mobile No. : {emp.mobileno}</h1>
    <h1>Joining Date : {emp.joining}</h1>
    <h1>Salary : {emp.salary}</h1>
    

    </>
  )
}

export default EmployeeDetais

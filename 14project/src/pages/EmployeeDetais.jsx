import React from 'react'
import detail from '../data/edata'

import { useParams } from 'react-router-dom'

const EmployeeDetais = () => {
  const {id} = useParams()
  
  const emp = detail.find((employee=>employee.id==Number(id)))
  return (
    <>
    <h1>ID : {emp.id}</h1>
    <h1>Name : {emp.name}</h1>
    <h1>Department : {emp.department}</h1>
    <h1>Position : {emp.position}</h1>
    

    </>
  )
}

export default EmployeeDetais

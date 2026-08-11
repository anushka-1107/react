import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addEmp } from '../data/edata'

const Addemployee = () => {
const [detail, setDetail] = useState({
    id:0,
    name:"",
    email:"",
    mobileno:"" ,
    department:"",
    position:"",
    joining:"",
    salary:0,


})

const dispatch = useDispatch()

const handleChange = (e) => {
  setDetail({
    ...detail,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit=(e)=>{
    e.preventDefault()
   dispatch(addEmp(detail))
}




  return (

    <form onSubmit={handleSubmit} className="employee-form">

  <h2>Add Employee</h2>

  <div className="form-group">
    <label htmlFor="name">Employee Name</label>
    <input
      type="text"
      id="name"
      name="name"
      value={detail.name}
      onChange={handleChange}
      placeholder="Enter employee name"
    />
  </div>

  <div className="form-group">
    <label htmlFor="email">Email</label>
    <input
      type="email"
      id="email"
      name="email"
      value={detail.email}
      onChange={handleChange}
      placeholder="Enter email address"
    />
  </div>

  <div className="form-group">
    <label htmlFor="mobileno">Mobile Number</label>
    <input
      type="tel"
      id="mobileno"
      name="mobileno"
      value={detail.mobileno}
      onChange={handleChange}
      placeholder="Enter mobile number"
    />
  </div>

  <div className="form-group">
    <label htmlFor="department">Department</label>
    <select id="department" name="department" value = {detail.department} onChange={handleChange}>
      <option value="">Select Department</option>
      <option value="Sales">Sales</option>
      <option value="Marketing">Marketing</option>
      <option value="IT">IT</option>
      <option value="HR">HR</option>
      <option value="Finance">Finance</option>
    </select>
  </div>

  <div className="form-group">
    <label htmlFor="position">Position</label>
    <input
      type="text"
      id="position"
      name="position"
      value={detail.position}
      onChange={handleChange}
      placeholder="Enter position"
    />
  </div>

  <div className="form-group">
    <label htmlFor="joining">Joining Date</label>
    <input
      type="date"
      id="joining"
      name="joining"
      value={detail.joining}
      onChange={handleChange}
    />
  </div>

  <div className="form-group">
    <label htmlFor="salary">Salary</label>
    <input
      type="number"
      id="salary"
      name="salary"
      value={detail.salary}
      onChange={handleChange}
      placeholder="Enter salary"
    />
  </div>

  <button type="submit" className="submit-btn">
    Add Employee
  </button>

</form>
    
  )
}

export default Addemployee
import React from 'react'
import { useState } from 'react'

const Addemployee = () => {
const [detail, setDetail] = useState({
    id:0,
    name:"",
    email:"",
    mobileno:undefined ,
    department:"",
    position:"",
    joining:null,
    salary:0,


})

const handleSubmit=(e)=>{
    e.prevent.default()
    setDetail(()=>e.target.value)
}

  return (

    <form onSubmit={handleSubmit(e)} class="employee-form">

  <h2>Add Employee</h2>

  <div class="form-group">
    <label for="name">Employee Name</label>
    <input
      type="text"
      id="name"
      name="name"
      placeholder="Enter employee name"
    />
  </div>

  <div class="form-group">
    <label for="email">Email</label>
    <input
      type="email"
      id="email"
      name="email"
      placeholder="Enter email address"
    />
  </div>

  <div class="form-group">
    <label for="mobileno">Mobile Number</label>
    <input
      type="tel"
      id="mobileno"
      name="mobileno"
      placeholder="Enter mobile number"
    />
  </div>

  <div class="form-group">
    <label for="department">Department</label>
    <select id="department" name="department">
      <option value="">Select Department</option>
      <option value="Sales">Sales</option>
      <option value="Marketing">Marketing</option>
      <option value="IT">IT</option>
      <option value="HR">HR</option>
      <option value="Finance">Finance</option>
    </select>
  </div>

  <div class="form-group">
    <label for="position">Position</label>
    <input
      type="text"
      id="position"
      name="position"
      placeholder="Enter position"
    />
  </div>

  <div class="form-group">
    <label for="joining">Joining Date</label>
    <input
      type="date"
      id="joining"
      name="joining"
    />
  </div>

  <div class="form-group">
    <label for="salary">Salary</label>
    <input
      type="number"
      id="salary"
      name="salary"
      placeholder="Enter salary"
    />
  </div>

  <button type="submit" class="submit-btn">
    Add Employee
  </button>

</form>
    
  )
}

export default Addemployee
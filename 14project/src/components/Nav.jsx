import { Link } from "react-router-dom";


import React from 'react'

const Nav = () => {
  return (
    <nav className="navbar">
  <div className="logo">
    Employee Management
  </div>

  <div className="nav-links">
    <Link to ='/Home'>Home</Link>
    <Link to = '/Employee'>Employees</Link>
    
  </div>

  <button className="login-btn">
    Login
  </button>
</nav>
  )
}

export default Nav




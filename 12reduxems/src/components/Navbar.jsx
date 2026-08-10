import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { employees } = useSelector((state) => state.employees);
  const activeCount = employees.filter((emp) => emp.status === 'Active').length;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top border-bottom border-secondary">
      <div className="container-fluid px-4">
        {/* Brand Link */}
        <Link className="navbar-brand d-flex align-items-center gap-2 fw-bold text-white fs-4" to="/">
          <span className="bg-primary text-white rounded-3 px-2 py-1 fs-5 d-inline-flex align-items-center">
            <i className="bi bi-people-fill"></i>
          </span>
          <span>StaffPortal</span>
        </Link>

        {/* Quick Info & Actions */}
        <div className="d-flex align-items-center gap-3">
        
          <Link to="/employees/add" className="btn btn-primary btn-sm rounded-pill px-3 d-flex align-items-center gap-2 shadow-sm">
            <i className="bi bi-plus-lg"></i>
            <span>Add Employee</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import EmployeeTable from '../components/EmployeeTable';

const DEPARTMENTS = [
  'All Departments',
  'Engineering',
  'Product',
  'Design',
  'Human Resources',
  'Marketing',
  'Sales',
  'Finance'
];

const Employees = () => {
  const { employees } = useSelector((state) => state.employees);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments');
  const [selectedStatus, setSelectedStatus] = useState('All Statuses');

  // Filter employees based on search, department, and status
  const filteredEmployees = employees.filter((emp) => {
    const matchesSearch =
      emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDept =
      selectedDepartment === 'All Departments' || emp.department === selectedDepartment;

    const matchesStatus =
      selectedStatus === 'All Statuses' || emp.status === selectedStatus;

    return matchesSearch && matchesDept && matchesStatus;
  });

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedDepartment('All Departments');
    setSelectedStatus('All Statuses');
  };

  return (
    <div className="container-fluid py-2">
      {/* Header */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
        <div>
          <h2 className="fw-bold text-dark mb-1">Employee Directory</h2>
          <p className="text-muted mb-0"></p>
        </div>
        <div>
          <Link to="/employees/add" className="btn btn-primary rounded-3 px-3 py-2 d-flex align-items-center gap-2 shadow-sm">
            <i className="bi bi-plus-lg"></i>
            <span>Add New Employee</span>
          </Link>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="card border-0 shadow-sm rounded-3 p-3 mb-4 bg-white">
        <div className="row g-3 align-items-center">
          {/* Search Input */}
          <div className="col-12 col-md-5">
            <label htmlFor="searchEmp" className="form-label small text-muted fw-medium mb-1">
              Search Employee
            </label>
            <div className="input-group">
              <span className="input-group-text bg-light text-muted border-end-0">
                <i className="bi bi-search"></i>
              </span>
              <input
                id="searchEmp"
                type="text"
                className="form-control bg-light border-start-0 ps-0"
                placeholder="Search by name, email"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  className="btn btn-light border"
                  type="button"
                  onClick={() => setSearchTerm('')}
                >
                  <i className="bi bi-x"></i>
                </button>
              )}
            </div>
          </div>

          {/* Department Filter */}
          <div className="col-12 col-sm-6 col-md-3">
            <label htmlFor="deptFilter" className="form-label small text-muted fw-medium mb-1">
              Filter by Department
            </label>
            <select
              id="deptFilter"
              className="form-select bg-light"
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
            >
              {DEPARTMENTS.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>

          {/* Status Filter */}
          <div className="col-12 col-sm-6 col-md-3">
            <label htmlFor="statusFilter" className="form-label small text-muted fw-medium mb-1">
              Filter by Status
            </label>
            <select
              id="statusFilter"
              className="form-select bg-light"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="All Statuses">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          {/* Reset Filters button if any active */}
          {(searchTerm || selectedDepartment !== 'All Departments' || selectedStatus !== 'All Statuses') && (
            <div className="col-12 text-end">
              <button
                className="btn btn-link btn-sm text-secondary text-decoration-none p-0"
                onClick={clearFilters}
              >
                <i className="bi bi-arrow-counterclockwise me-1"></i> Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Employee List Table */}
      <EmployeeTable employees={filteredEmployees} />
    </div>
  );
};

export default Employees;

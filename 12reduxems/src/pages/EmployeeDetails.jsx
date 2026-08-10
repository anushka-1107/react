import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteEmployee } from '../features/employees/employeeSlice';

const EmployeeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Find employee from Redux state using useSelector
  const employee = useSelector((state) =>
    state.employees.employees.find((emp) => emp.id === id)
  );

  if (!employee) {
    return (
      <div className="container-fluid py-5 text-center">
        <div className="card border-0 shadow-sm p-5 mx-auto" style={{ maxWidth: '500px' }}>
          <i className="bi bi-exclamation-circle text-warning display-4 mb-3"></i>
          <h4 className="fw-bold text-dark">Employee Not Found</h4>
          <p className="text-muted">No employee matching ID <code>{id}</code> was found in the Redux store.</p>
          <div>
            <Link to="/employees" className="btn btn-primary rounded-pill px-4">
              Return to Employee List
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleDelete = () => {
    dispatch(deleteEmployee(employee.id));
    navigate('/employees');
  };

  const formatSalary = (salary) => {
    if (!salary) return '$0';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(Number(salary));
  };

  return (
    <div className="container-fluid py-2">
      {/* Header Back Button */}
      <div className="mb-4">
        <button
          className="btn btn-link text-decoration-none p-0 text-secondary mb-2 d-inline-flex align-items-center gap-1"
          onClick={() => navigate('/employees')}
        >
          <i className="bi bi-arrow-left"></i> Back to Employee List
        </button>
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3">
          <h2 className="fw-bold text-dark mb-0">Employee Profile</h2>
          <div className="d-flex gap-2">
            <button
              className="btn btn-outline-danger d-flex align-items-center gap-1"
              onClick={() => setShowDeleteModal(true)}
            >
              <i className="bi bi-trash"></i>
              <span>Delete Employee</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Profile Card */}
      <div className="row g-4">
        {/* Left Column: Avatar & Quick Info */}
        <div className="col-12 col-md-4">
          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white text-center h-100">
            <div
              className="rounded-circle bg-primary bg-opacity-10 text-primary fw-bold mx-auto mb-3 d-flex align-items-center justify-content-center"
              style={{ width: '90px', height: '90px', fontSize: '2.5rem' }}
            >
              {employee.name ? employee.name.charAt(0).toUpperCase() : 'E'}
            </div>
            <h4 className="fw-bold text-dark mb-1">{employee.name}</h4>
            <p className="text-primary fw-medium mb-2">{employee.position}</p>
            <div className="mb-3">
              <span className={`badge px-3 py-2 rounded-pill ${
                employee.status === 'Active' ? 'bg-success-subtle text-success border border-success' : 'bg-secondary-subtle text-secondary border border-secondary'
              }`}>
                <i className={`bi ${employee.status === 'Active' ? 'bi-check-circle-fill' : 'bi-dash-circle-fill'} me-1`}></i>
                {employee.status} Status
              </span>
            </div>

            <hr className="my-3 border-light-subtle" />

            <div className="text-start">
              <div className="small text-muted mb-1">Employee ID</div>
              <div className="font-monospace fw-bold text-dark mb-3">{employee.id}</div>

              <div className="small text-muted mb-1">Department</div>
              <div className="fw-semibold text-dark mb-0">{employee.department}</div>
            </div>
          </div>
        </div>

        {/* Right Column: Detailed Grid */}
        <div className="col-12 col-md-8">
          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white h-100">
            <h5 className="fw-bold text-dark border-bottom pb-3 mb-4 d-flex align-items-center gap-2">
              <i className="bi bi-person-vcard text-primary"></i>
              Personal Information & Employment Details
            </h5>

            <div className="row g-4">
              {/* Full Name */}
              <div className="col-12 col-sm-6">
                <div className="p-3 bg-light rounded-3">
                  <div className="text-muted small mb-1">Full Name</div>
                  <div className="fw-semibold text-dark">{employee.name}</div>
                </div>
              </div>

              {/* Email Address */}
              <div className="col-12 col-sm-6">
                <div className="p-3 bg-light rounded-3">
                  <div className="text-muted small mb-1">Email Address</div>
                  <div className="fw-semibold text-dark text-break">{employee.email}</div>
                </div>
              </div>

              {/* Phone Number */}
              <div className="col-12 col-sm-6">
                <div className="p-3 bg-light rounded-3">
                  <div className="text-muted small mb-1">Phone Number</div>
                  <div className="fw-semibold text-dark">{employee.phone || 'N/A'}</div>
                </div>
              </div>

              {/* Department */}
              <div className="col-12 col-sm-6">
                <div className="p-3 bg-light rounded-3">
                  <div className="text-muted small mb-1">Department</div>
                  <div className="fw-semibold text-dark">{employee.department}</div>
                </div>
              </div>

              {/* Job Position */}
              <div className="col-12 col-sm-6">
                <div className="p-3 bg-light rounded-3">
                  <div className="text-muted small mb-1">Job Position</div>
                  <div className="fw-semibold text-dark">{employee.position}</div>
                </div>
              </div>

              {/* Annual Salary */}
              <div className="col-12 col-sm-6">
                <div className="p-3 bg-light rounded-3">
                  <div className="text-muted small mb-1">Annual Salary</div>
                  <div className="fw-bold text-success fs-5">{formatSalary(employee.salary)}</div>
                </div>
              </div>

              {/* Joining Date */}
              <div className="col-12 col-sm-6">
                <div className="p-3 bg-light rounded-3">
                  <div className="text-muted small mb-1">Date Joined</div>
                  <div className="fw-semibold text-dark">
                    {employee.joiningDate ? new Date(employee.joiningDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'N/A'}
                  </div>
                </div>
              </div>

              {/* Status */}
              <div className="col-12 col-sm-6">
                <div className="p-3 bg-light rounded-3">
                  <div className="text-muted small mb-1">Employment Status</div>
                  <div className="fw-semibold text-dark">{employee.status}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Deletion Confirmation */}
      {showDeleteModal && (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content shadow border-0">
              <div className="modal-header bg-danger text-white">
                <h5 className="modal-title d-flex align-items-center gap-2">
                  <i className="bi bi-trash-fill"></i>
                  Delete Employee Record
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setShowDeleteModal(false)}
                ></button>
              </div>
              <div className="modal-body p-4 text-dark">
                Are you sure you want to permanently delete <strong>{employee.name}</strong>?
                <p className="text-muted small mt-2 mb-0">
                  This action will remove the record from Redux state and sync with localStorage.
                </p>
              </div>
              <div className="modal-footer bg-light border-0">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowDeleteModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleDelete}
                >
                  Confirm Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeDetails;

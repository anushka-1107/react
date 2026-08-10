import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteEmployee } from '../features/employees/employeeSlice';

const EmployeeTable = ({ employees = [], isDashboard = false }) => {
  const dispatch = useDispatch();
  const [deleteTarget, setDeleteTarget] = useState(null);

  const handleDeleteConfirm = () => {
    if (deleteTarget) {
      dispatch(deleteEmployee(deleteTarget.id));
      setDeleteTarget(null);
    }
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
    <>
      <div className="table-responsive bg-white rounded-3 shadow-sm border border-light-subtle">
        <table className="table table-hover align-middle mb-0">
          <thead className="table-light text-secondary text-uppercase small">
            <tr>
              <th scope="col" className="ps-3">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Department</th>
              <th scope="col">Position</th>
              <th scope="col">Salary</th>
              <th scope="col">Status</th>
              <th scope="col" className="text-end pe-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.length === 0 ? (
              <tr>
                <td colSpan="8" className="text-center py-4 text-muted">
                  <i className="bi bi-inbox fs-3 d-block mb-2"></i>
                  No employees found matching the criteria.
                </td>
              </tr>
            ) : (
              employees.map((emp) => (
                <tr key={emp.id}>
                  <td className="ps-3 fw-medium text-dark font-monospace" style={{ fontSize: '0.875rem' }}>
                    {emp.id}
                  </td>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <div
                        className="rounded-circle bg-primary bg-opacity-10 text-primary fw-bold d-flex align-items-center justify-content-center"
                        style={{ width: '36px', height: '36px', fontSize: '0.875rem' }}
                      >
                        {emp.name ? emp.name.charAt(0).toUpperCase() : 'E'}
                      </div>
                      <div>
                        <div className="fw-semibold text-dark">{emp.name}</div>
                        {isDashboard && <small className="text-muted">{emp.position}</small>}
                      </div>
                    </div>
                  </td>
                  <td className="text-muted">{emp.email}</td>
                  <td>
                    <span className="badge bg-light text-dark border border-secondary-subtle px-2.5 py-1.5 font-sans">
                      {emp.department}
                    </span>
                  </td>
                  <td className="text-muted">{emp.position}</td>
                  <td className="fw-semibold text-dark">{formatSalary(emp.salary)}</td>
                  <td>
                    <span
                      className={`badge px-2.5 py-1.5 rounded-pill ${
                        emp.status === 'Active'
                          ? 'bg-success-subtle text-success border border-success-subtle'
                          : 'bg-secondary-subtle text-secondary border border-secondary-subtle'
                      }`}
                    >
                      <i className={`bi ${emp.status === 'Active' ? 'bi-check-circle-fill' : 'bi-dash-circle-fill'} me-1`}></i>
                      {emp.status}
                    </span>
                  </td>
                  <td className="text-end pe-3">
                    <div className="btn-group btn-group-sm" role="group">
                      <Link
                        to={`/employees/${emp.id}`}
                        className="btn btn-outline-info"
                        title="View Details"
                      >
                        <i className="bi bi-eye"></i>
                      </Link>
                      <button
                        type="button"
                        className="btn btn-outline-danger"
                        title="Delete Employee"
                        onClick={() => setDeleteTarget(emp)}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteTarget && (
        <div className="modal show d-block tab-modal-backdrop" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content shadow border-0">
              <div className="modal-header bg-danger text-white">
                <h5 className="modal-title d-flex align-items-center gap-2">
                  <i className="bi bi-exclamation-triangle-fill"></i>
                  Confirm Deletion
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setDeleteTarget(null)}
                ></button>
              </div>
              <div className="modal-body p-4 text-dark">
                Are you sure you want to delete employee <strong>{deleteTarget.name}</strong> ({deleteTarget.id})?
                <p className="text-muted small mt-2 mb-0">This action will remove the record from Redux state and localStorage.</p>
              </div>
              <div className="modal-footer bg-light border-0">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setDeleteTarget(null)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleDeleteConfirm}
                >
                  Yes, Delete Employee
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EmployeeTable;

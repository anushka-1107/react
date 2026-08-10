import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addEmployee } from '../features/employees/employeeSlice';
import EmployeeForm from '../components/EmployeeForm';

const AddEmployee = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = (formData) => {
    // Generate unique employee ID e.g. EMP-2401
    const uniqueId = `EMP-${Math.floor(1000 + Math.random() * 9000)}`;

    const newEmployee = {
      ...formData,
      id: uniqueId
    };

    // Dispatch Redux action
    dispatch(addEmployee(newEmployee));

    // Navigate back to employees list
    navigate('/employees');
  };

  return (
    <div className="container-fluid py-2">
      <div className="mb-4">
        <button
          className="btn btn-link text-decoration-none p-0 text-secondary mb-2 d-inline-flex align-items-center gap-1"
          onClick={() => navigate('/employees')}
        >
          <i className="bi bi-arrow-left"></i> Back to Employees List
        </button>
        <h2 className="fw-bold text-dark mb-1">Create New Employee</h2>
        <p className="text-muted mb-0">Fill out the details below to add a new employee to the Redux store</p>
      </div>

      <div className="row">
        <div className="col-12 col-lg-10 col-xl-8">
          <EmployeeForm onSubmitHandler={handleFormSubmit} isEditMode={false} />
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;

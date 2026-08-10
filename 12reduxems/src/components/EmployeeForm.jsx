import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DEPARTMENTS = [
  'Engineering',
  'Product',
  'Design',
  'Human Resources',
  'Marketing',
  'Sales',
  'Finance'
];

const EmployeeForm = ({ initialValues, onSubmitHandler, isEditMode = false }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'Engineering',
    position: '',
    salary: '',
    joiningDate: '',
    status: 'Active'
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialValues) {
      setFormData(initialValues);
    }
  }, [initialValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    // Clear validation error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.department) newErrors.department = 'Department selection is required';
    if (!formData.position.trim()) newErrors.position = 'Job Position is required';
    if (!formData.salary || Number(formData.salary) <= 0) {
      newErrors.salary = 'Valid positive salary is required';
    }
    if (!formData.joiningDate) newErrors.joiningDate = 'Joining Date is required';
    if (!formData.status) newErrors.status = 'Status is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmitHandler(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-3 shadow-sm border border-light-subtle">
      <h4 className="border-bottom pb-3 mb-4 text-dark font-semibold">
        <i className={`bi ${isEditMode ? 'bi-pencil-square' : 'bi-person-plus'} text-primary me-2`}></i>
        {isEditMode ? 'Edit Employee Details' : 'Add New Employee'}
      </h4>

      <div className="row g-3">
        {/* Name */}
        <div className="col-md-6">
          <label htmlFor="name" className="form-label fw-medium text-secondary">
            Full Name <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            placeholder="e.g. John Doe"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        {/* Email */}
        <div className="col-md-6">
          <label htmlFor="email" className="form-label fw-medium text-secondary">
            Email Address <span className="text-danger">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            placeholder="john.doe@company.com"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        {/* Phone */}
        <div className="col-md-6">
          <label htmlFor="phone" className="form-label fw-medium text-secondary">
            Phone Number <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
            placeholder="+1 (555) 000-0000"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
        </div>

        {/* Department */}
        <div className="col-md-6">
          <label htmlFor="department" className="form-label fw-medium text-secondary">
            Department <span className="text-danger">*</span>
          </label>
          <select
            id="department"
            name="department"
            className={`form-select ${errors.department ? 'is-invalid' : ''}`}
            value={formData.department}
            onChange={handleChange}
          >
            {DEPARTMENTS.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
          {errors.department && <div className="invalid-feedback">{errors.department}</div>}
        </div>

        {/* Position */}
        <div className="col-md-6">
          <label htmlFor="position" className="form-label fw-medium text-secondary">
            Job Position <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            id="position"
            name="position"
            className={`form-control ${errors.position ? 'is-invalid' : ''}`}
            placeholder="e.g. Senior Software Engineer"
            value={formData.position}
            onChange={handleChange}
          />
          {errors.position && <div className="invalid-feedback">{errors.position}</div>}
        </div>

        {/* Salary */}
        <div className="col-md-6">
          <label htmlFor="salary" className="form-label fw-medium text-secondary">
            Annual Salary ($) <span className="text-danger">*</span>
          </label>
          <div className="input-group">
            <span className="input-group-text">Rs</span>
            <input
              type="number"
              id="salary"
              name="salary"
              className={`form-control ${errors.salary ? 'is-invalid' : ''}`}
              placeholder="85000"
              value={formData.salary}
              onChange={handleChange}
            />
            {errors.salary && <div className="invalid-feedback">{errors.salary}</div>}
          </div>
        </div>

        {/* Joining Date */}
        <div className="col-md-6">
          <label htmlFor="joiningDate" className="form-label fw-medium text-secondary">
            Joining Date <span className="text-danger">*</span>
          </label>
          <input
            type="date"
            id="joiningDate"
            name="joiningDate"
            className={`form-control ${errors.joiningDate ? 'is-invalid' : ''}`}
            value={formData.joiningDate}
            onChange={handleChange}
          />
          {errors.joiningDate && <div className="invalid-feedback">{errors.joiningDate}</div>}
        </div>

        {/* Status */}
        <div className="col-md-6">
          <label htmlFor="status" className="form-label fw-medium text-secondary">
            Status <span className="text-danger">*</span>
          </label>
          <div className="pt-2">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="status"
                id="statusActive"
                value="Active"
                checked={formData.status === 'Active'}
                onChange={handleChange}
              />
              <label className="form-check-label text-success fw-medium" htmlFor="statusActive">
                Active
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="status"
                id="statusInactive"
                value="Inactive"
                checked={formData.status === 'Inactive'}
                onChange={handleChange}
              />
              <label className="form-check-label text-secondary fw-medium" htmlFor="statusInactive">
                Inactive
              </label>
            </div>
          </div>
          {errors.status && <div className="text-danger small mt-1">{errors.status}</div>}
        </div>
      </div>

      {/* Buttons */}
      <div className="d-flex justify-content-end gap-3 mt-4 pt-3 border-top">
        <button
          type="button"
          className="btn btn-outline-secondary px-4 rounded-2"
          onClick={() => navigate('/employees')}
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-primary px-4 rounded-2 d-flex align-items-center gap-2">
          <i className="bi bi-check-circle"></i>
          <span>{isEditMode ? 'Update Employee' : 'Save Employee'}</span>
        </button>
      </div>
    </form>
  );
};

export default EmployeeForm;

import React from 'react'

const Addemp = () => {
  return (
    <div>

    <div class="container py-5">

        <div class="row justify-content-center">

            <div class="col-lg-8 col-md-10">

                <div class="card shadow border-0">

                    
                    <div class="card-header bg-primary text-white text-center py-3">
                        <h3 class="mb-0">Employee Details</h3>
                        <small>Enter employee information</small>
                    </div>

                    
                    <div class="card-body p-4">

                        <form>

                           
                            <div class="mb-3">
                                <label for="employeeName" class="form-label fw-semibold">
                                    Employee Name
                                </label>

                                <input
                                    type="text"
                                    class="form-control"
                                    id="employeeName"
                                    name="employeeName"
                                    placeholder="Enter employee name"
                                    required
                                />
                            </div>

                            
                            <div class="row">

                                <div class="col-md-6 mb-3">
                                    <label for="email" class="form-label fw-semibold">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        class="form-control"
                                        id="email"
                                        name="email"
                                        placeholder="example@email.com"
                                        required
                                    />
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label for="mobile" class="form-label fw-semibold">
                                        Mobile Number
                                    </label>

                                    <input
                                        type="tel"
                                        class="form-control"
                                        id="mobile"
                                        name="mobile"
                                        placeholder="Enter mobile number"
                                        maxlength="10"
                                        required
                                    />
                                </div>

                            </div>

                            
                            <div class="row">

                                <div class="col-md-6 mb-3">
                                    <label for="salary" class="form-label fw-semibold">
                                        Salary
                                    </label>

                                    <div class="input-group">
                                        <span class="input-group-text">₹</span>

                                        <input
                                            type="number"
                                            class="form-control"
                                            id="salary"
                                            name="salary"
                                            placeholder="Enter salary"
                                            min="0"
                                            required
                                        />
                                    </div>
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label for="department" class="form-label fw-semibold">
                                        Department
                                    </label>

                                    <select
                                        class="form-select"
                                        id="department"
                                        name="department"
                                        required
                                    >
                                        <option value="">Select Department</option>
                                        <option value="hr">Human Resources</option>
                                        <option value="it">Information Technology</option>
                                        <option value="finance">Finance</option>
                                        <option value="marketing">Marketing</option>
                                        <option value="sales">Sales</option>
                                        <option value="operations">Operations</option>
                                    </select>
                                </div>

                            </div>

                            <div class="row">

                                <div class="col-md-6 mb-3">
                                    <label for="position" class="form-label fw-semibold">
                                        Position
                                    </label>

                                    <input
                                        type="text"
                                        class="form-control"
                                        id="position"
                                        name="position"
                                        placeholder="e.g. Software Developer"
                                        required
                                    />
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label for="status" class="form-label fw-semibold">
                                        Status
                                    </label>

                                    <select
                                        class="form-select"
                                        id="status"
                                        name="status"
                                        required
                                    >
                                        <option value="">Select Status</option>
                                        <option value="active">Active</option>
                                        <option value="inactive">Inactive</option>
                                        <option value="on-leave">On Leave</option>
                                    </select>
                                </div>

                            </div>

                            <hr class="my-4"/>

                            
                            <div class="d-flex justify-content-end gap-2">

                                <button
                                    type="reset"
                                    class="btn btn-secondary px-4"
                                >
                                    Reset
                                </button>

                                <button
                                    type="submit"
                                    class="btn btn-primary px-4"
                                >
                                    Save Employee
                                </button>

                            </div>

                        </form>

                    </div>

                    
                    <div class="card-footer text-muted text-center">
                        Employee Management System
                    </div>

                </div>

            </div>

        </div>

    </div>

    <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js">
    </script>
    </div>

)
}

export default Addemp
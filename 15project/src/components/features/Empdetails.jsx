import React from "react";

const Empdetails = () => {
  const employees = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      mobile: "9876543210",
      salary: 50000,
      department: "IT",
      position: "Software Developer",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      mobile: "9876543211",
      salary: 60000,
      department: "HR",
      position: "HR Manager",
      status: "Active",
    },
    {
      id: 3,
      name: "Robert Brown",
      email: "robert@example.com",
      mobile: "9876543212",
      salary: 45000,
      department: "Finance",
      position: "Accountant",
      status: "Inactive",
    },
  ];

  const handleEdit = (employee) => {
    console.log("Edit Employee:", employee);
  };

  const handleDelete = (id) => {
    console.log("Delete Employee ID:", id);
  };

  return (
    <div className="container mt-5">

      <div className="card shadow border-0">

        <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
          <h4 className="mb-0">Employee List</h4>

          <button className="btn btn-light btn-sm">
            + Add Employee
          </button>
        </div>

        <div className="card-body">

          <div className="table-responsive">

            <table className="table table-bordered table-hover align-middle">

              <thead className="table-light">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Salary</th>
                  <th>Department</th>
                  <th>Position</th>
                  <th>Status</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>

              <tbody>

                {employees.map((employee, index) => (
                  <tr key={employee.id}>

                    <td>{index + 1}</td>

                    <td className="fw-semibold">
                      {employee.name}
                    </td>

                    <td>{employee.email}</td>

                    <td>{employee.mobile}</td>

                    <td>₹{employee.salary.toLocaleString()}</td>

                    <td>{employee.department}</td>

                    <td>{employee.position}</td>

                    <td>
                      <span
                        className={`badge ${
                          employee.status === "Active"
                            ? "bg-success"
                            : "bg-danger"
                        }`}
                      >
                        {employee.status}
                      </span>
                    </td>

                    <td className="text-center">

                      {/* Edit Button */}
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary me-2"
                        onClick={() => handleEdit(employee)}
                        title="Edit"
                      >
                        <i className="bi bi-pencil-square"></i>
                      </button>

                      {/* Delete Button */}   
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDelete(employee.id)}
                        title="Delete"
                      >
                        <i className="bi bi-trash"></i>
                      </button>

                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Empdetails;
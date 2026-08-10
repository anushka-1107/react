import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar-container bg-dark text-white border-end border-secondary p-3">
      <div className="text-uppercase text-muted fw-bold small mb-3 px-3">
       
      </div>
      <nav className="nav nav-pills flex-column gap-2">

        <NavLink
          to="/employees"
          end
          className={({ isActive }) =>
            `nav-link d-flex align-items-center gap-3 px-3 py-2.5 rounded-3 transition-all ${
              isActive ? 'active bg-primary text-white fw-semibold shadow' : 'text-light text-opacity-75 hover-bg-secondary'
            }`
          }
        >
          <i className="bi bi-person-lines-fill fs-5"></i>
          <span>Employee List</span>
        </NavLink>

        <NavLink
          to="/employees/add"
          className={({ isActive }) =>
            `nav-link d-flex align-items-center gap-3 px-3 py-2.5 rounded-3 transition-all ${
              isActive ? 'active bg-primary text-white fw-semibold shadow' : 'text-light text-opacity-75 hover-bg-secondary'
            }`
          }
        >
          <i className="bi bi-person-plus-fill fs-5"></i>
          <span>Add Employee</span>
        </NavLink>
      </nav>

      <hr className="border-secondary my-4" />

      
    </aside>
  );
};

export default Sidebar;

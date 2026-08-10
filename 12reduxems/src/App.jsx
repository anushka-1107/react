import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

import Employees from './pages/Employees';
import AddEmployee from './pages/AddEmployee';
import EmployeeDetails from './pages/EmployeeDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container d-flex flex-column min-vh-100 bg-light">
        {/* Persistent Top Navbar */}
        <Navbar />

        {/* Main Body Area: Sidebar + Page Content */}
        <div className="d-flex flex-grow-1">
          {/* Persistent Sidebar Navigation */}
          <Sidebar />

          {/* Dynamic Page Content */}
          <main className="main-content flex-grow-1 p-3 p-md-4">
            <Routes>
              <Route path="/" element={<Navigate to="/employees" replace />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/employees/add" element={<AddEmployee />} />
              <Route path="/employees/:id" element={<EmployeeDetails />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

import { createSlice } from '@reduxjs/toolkit';

// Initial dummy data for first launch
const dummyEmployees = [
  {
    id: 'EMP-1001',
    name: 'Sarah Jenkins',
    email: 'sarah.jenkins@company.com',
    phone: '+1 (555) 234-5678',
    department: 'Engineering',
    position: 'Senior Frontend Engineer',
    salary: '95000',
    joiningDate: '2023-03-15',
    status: 'Active'
  },
  {
    id: 'EMP-1002',
    name: 'Michael Chen',
    email: 'michael.chen@company.com',
    phone: '+1 (555) 876-5432',
    department: 'Product',
    position: 'Product Manager',
    salary: '105000',
    joiningDate: '2022-08-01',
    status: 'Active'
  },
  {
    id: 'EMP-1003',
    name: 'Emily Rodriguez',
    email: 'emily.rodriguez@company.com',
    phone: '+1 (555) 345-6789',
    department: 'Design',
    position: 'UI/UX Designer',
    salary: '82000',
    joiningDate: '2023-11-10',
    status: 'Active'
  },
  {
    id: 'EMP-1004',
    name: 'David Kim',
    email: 'david.kim@company.com',
    phone: '+1 (555) 654-9870',
    department: 'Human Resources',
    position: 'HR Specialist',
    salary: '68000',
    joiningDate: '2021-05-20',
    status: 'Inactive'
  },
  {
    id: 'EMP-1005',
    name: 'Amanda Taylor',
    email: 'amanda.taylor@company.com',
    phone: '+1 (555) 432-1098',
    department: 'Marketing',
    position: 'Marketing Strategist',
    salary: '75000',
    joiningDate: '2024-01-08',
    status: 'Active'
  }
];

// Load initial state from localStorage if available, otherwise use dummy data
const loadEmployeesFromStorage = () => {
  try {
    const stored = localStorage.getItem('employees');
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (error) {
    console.error('Error loading employees from localStorage:', error);
  }
  // Save initial dummy data to localStorage on first run
  localStorage.setItem('employees', JSON.stringify(dummyEmployees));
  return dummyEmployees;
};

const initialState = {
  employees: loadEmployeesFromStorage()
};

// Helper function to save to localStorage
const saveToLocalStorage = (employees) => {
  try {
    localStorage.setItem('employees', JSON.stringify(employees));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    setEmployees: (state, action) => {
      state.employees = action.payload;
      saveToLocalStorage(state.employees);
    },
    addEmployee: (state, action) => {
      // Add new employee to the beginning of the list
      state.employees.unshift(action.payload);
      saveToLocalStorage(state.employees);
    },
    updateEmployee: (state, action) => {
      const updated = action.payload;
      const index = state.employees.findIndex((emp) => emp.id === updated.id);
      if (index !== -1) {
        state.employees[index] = updated;
        saveToLocalStorage(state.employees);
      }
    },
    deleteEmployee: (state, action) => {
      const idToDelete = action.payload;
      state.employees = state.employees.filter((emp) => emp.id !== idToDelete);
      saveToLocalStorage(state.employees);
    }
  }
});

export const { setEmployees, addEmployee, updateEmployee, deleteEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;

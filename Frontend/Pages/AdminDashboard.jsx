import React, { useState } from 'react';
// import { NavLink, Route, Routes } from 'react-router-dom';
import DashboardNavbar from '../Components/DashboardNavbar';
import { NavLink, Routes, Route, useNavigate } from 'react-router-dom';
import EmployeeAddForm from './EmployeeAddFrom';
// import EmployeeAddForm from '../Pages/EmployeeAddForm';
import Sidebar from '../Components/Sidebar';
import Button from '../Components/Button';
import AdminTaskList from './AdminTaskList';
import CreateTaskForm from '../Components/CreateTaskForm';
import AllLeaveRequests from './AllLeaveRequests';
import Register from './Register';
import ManagerAddForm from './ManagerAddForm';
import EmployeeManagement from '../Components/EmployeeManagement';


const AdminDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenManager, setIsOpenManager] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdownManager = () => {
    setIsOpenManager(!isOpenManager);
  };

  const handleLogout = () => {
    // console.log("run")
    localStorage.clear();
    navigate('/');
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Fixed Navbar */}
      <div className="h-[10vh] flex items-center justify-between px-10 bg-white shadow-lg">
        <DashboardNavbar first="Admin" second=" Dashboard" />
        <div className='flex gap-2'>
          <div className="relative inline-block text-left">
            <button
              onClick={toggleDropdown}
              className="inline-flex justify-center items-center px-4 py-2 text-semibold font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Manage Employees
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {isOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  <NavLink to="/admin/register-employee">
                    <button
                    onClick={toggleDropdown}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Add Employee
                    </button>
                  </NavLink>
                  <NavLink to={"/admin/employeemanagement"}>
                    <button
                    onClick={toggleDropdown}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Update Employee
                    </button>
                  </NavLink>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Delete Employee
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="relative inline-block text-left">
            <button
              onClick={toggleDropdownManager}
              className="inline-flex justify-center items-center px-4 py-2 text-semibold font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Manage Managers
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {isOpenManager && (
              <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  <NavLink to="/admin/register-manager">
                    <button
                    onClick={toggleDropdownManager}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Add Managers
                    </button>
                  </NavLink>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Update Managers
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Delete Managers
                  </button>
                </div>
              </div>
            )}
          </div>
          <NavLink to={"/admin/register"}>
          <Button value={"Add an Admin"}/>
          </NavLink>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Fixed Sidebar */}
        {/* <aside className="w-60 h-[90vh] bg-red-200 flex-shrink-0"> */}
          {/* Sidebar content */}
        {/* </aside> */}
        {/* <Sidebar/> */}
        <div className="w-64 h-[90vh] text-gray-500 flex flex-col justify-between p-4 shadow-2xl">
        <div className="space-y-2">
          <NavLink to="/admin/tasklist">
            <div className="p-3 text-lg py-2 px-4 cursor-pointer hover:bg-purple-300 hover:text-purple-600 rounded-lg">Tasks</div>
          </NavLink>
          <div className="p-3 text-lg py-2 px-4 cursor-pointer hover:bg-purple-300 hover:text-purple-600 rounded-lg">Attendance</div>
          <NavLink to="/admin/leaverequest">
          <div className="p-3 text-lg py-2 px-4 cursor-pointer hover:bg-purple-300 hover:text-purple-600 rounded-lg">Leave</div>
          </NavLink>
          <div className="p-3 text-lg py-2 px-4 cursor-pointer hover:bg-purple-300 hover:text-purple-600 rounded-lg">Feedback</div>
          <div className="p-3 text-lg py-2 px-4 cursor-pointer hover:bg-purple-300 hover:text-purple-600 rounded-lg">Salary</div>
        </div>

          <Button value={"Logout"} 
          onClick={handleLogout}
          />
        
      </div>
          
        {/* Scrollable Content Area */}
        <main className="flex-1 overflow-y-auto p-4">
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/register-employee" element={<EmployeeAddForm />} />
            <Route path="/register-manager" element={<ManagerAddForm />} />
            <Route path="/employeemanagement" element={<EmployeeManagement />} />
            <Route path="/tasklist" element={<AdminTaskList />} />
            <Route path="/createtask" element={<CreateTaskForm />} />
            <Route path="/leaverequest" element={<AllLeaveRequests />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
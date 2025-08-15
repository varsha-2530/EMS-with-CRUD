import React from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="main-page-wrapper">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold text-uppercase text-white">
          Employee CRUD Dashboard
        </h2>

        <div className="row g-4">
          {/* Add Employee */}
          <div className="col-md-3">
            <div className="crud-card add-card">
              <h5 className="card-title">Add Employee</h5>
              <p>Add a new employee to the database.</p>
              <Link to="/add" className="btn btn-light fw-bold">
                ➕ Add
              </Link>
            </div>
          </div>

          {/* View Employees */}
          <div className="col-md-3">
            <div className="crud-card view-card">
              <h5 className="card-title">View Employees</h5>
              <p>See all employees in the list.</p>
              <Link to="/all" className="btn btn-light fw-bold">
                👀 View
              </Link>
            </div>
          </div>

          <div className="col-md-3">
            <div className="crud-card edit-card">
              <h5 className="card-title">Edit Employees</h5>
              <p>Modify employee details.</p>
              <Link to="/all" className="btn btn-light fw-bold">
                ✏️ Edit
              </Link>
            </div>
          </div>

          {/* Delete Employee */}
          <div className="col-md-3">
            <div className="crud-card delete-card">
              <h5 className="card-title">Delete Employee</h5>
              <p>Remove an employee from the database.</p>
              <Link to="/delete" className="btn btn-light fw-bold">
                🗑️ Delete
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
